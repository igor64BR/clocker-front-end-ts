import { FormEvent, useContext, useEffect, useState } from 'react';

import { Email } from '@mui/icons-material';
import { Stack } from '@mui/material';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import { Api } from '../../globals/Api';
import Loading from '../../sharedComponents/Loading';
import AccountDetailsSection from './components/AccountDetailsSection';
import ButtonGrid from './components/ButtonGrid';
import PasswordSection from './components/PasswordSection';

interface Request {
  Email: string;
  Address: string;
  PhoneNumber: string;

  Password: string;
  CurrentPassword: string;
  PasswordHasChanged: boolean;
}

interface IField {
  value: string;
  setValue: (value: string) => any;
  error?: boolean;
  errorMessage?: string;
}

export class Field implements IField {
  error?: boolean | undefined;
  errorMessage?: string | undefined;

  constructor(
    public value: string,
    public setValue: (value: string) => any,
    rest: { error?: boolean; errorMessage?: string } = {},
  ) {
    this.error = rest.error;
    this.errorMessage = rest.errorMessage;
  }
}

export default function UserDetails() {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser) return <Loading />;

  const [email, setEmail] = useState(currentUser.user.email);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.user.phoneNumber);
  const [address, setAddress] = useState(currentUser.user.address);

  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordIsValid, setCurrentPasswordIsValid] = useState(true);

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [newPasswordIsValid, setNewPasswordIsValid] = useState(true);

  const [passwordHasChanged, setPasswordHasChanged] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => setPasswordHasChanged(newPassword.length > 0), [newPassword]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (passwordHasChanged) {
      const result: boolean[] = [validateCurrentpassword(), validateNewPasswords()];

      if (result.some((x) => !x)) return;
    }

    const body: Request = {
      Email: email,
      Address: address,
      PhoneNumber: phoneNumber,
      Password: newPassword,
      CurrentPassword: currentPassword,
      PasswordHasChanged: passwordHasChanged,
    };

    await Api.put('Authorization/CurrentUser', body);

    window.location.reload();
  };

  const validateCurrentpassword = () => {
    if (!passwordHasChanged) return true;

    const isValid = currentPassword.length > 0;

    setCurrentPasswordIsValid(isValid);

    return isValid;
  };

  const validateNewPasswords = () => {
    const isValid = newPassword === newPasswordConfirm;

    setNewPasswordIsValid(isValid);

    return isValid;
  };

  const itemProps = {
    item: true,
    width: '50%',
  };

  return (
    <Stack
      component={'form'}
      onSubmit={handleSubmit}
      justifyContent={'space-between'}
      height={'100%'}
      width={'80%'}
    >
      <Stack direction={'column'} justifyContent={'space-between'} height={'95%'} width={'95%'}>
        <Stack direction={'column'} spacing={4}>
          <AccountDetailsSection
            currentUser={currentUser}
            address={new Field(address, setAddress)}
            email={new Field(email, setEmail)}
            phoneNumber={new Field(phoneNumber, setPhoneNumber)}
            itemProps={itemProps}
          />

          <PasswordSection
            currentPassword={
              new Field(currentPassword, setCurrentPassword, {
                error: !currentPasswordIsValid,
                errorMessage: 'Para mudar a senha, é necessário inserir a antiga',
              })
            }
            newPassword={
              new Field(newPassword, setNewPassword, {
                error: !newPasswordIsValid,
                errorMessage: 'As senhas devem ser iguais',
              })
            }
            newPasswordConfirm={
              new Field(newPasswordConfirm, setNewPasswordConfirm, {
                error: !newPasswordIsValid,
              })
            }
            itemProps={itemProps}
          />
        </Stack>
        <ButtonGrid isLoading={isLoading} />
      </Stack>
    </Stack>
  );
}
