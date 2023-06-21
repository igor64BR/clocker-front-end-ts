import { FormEvent, useContext, useState } from 'react';

import { Grid, Stack, Typography } from '@mui/material';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import { validateEmail } from '../../contexts/ValidationContext';
import InputField from '../../sharedComponents/InputField';
import Loading from '../../sharedComponents/Loading';
import PhoneTextInput from '../../sharedComponents/PhoneTextInput';
import ButtonGrid from './components/ButtonGrid';

export default function UserDetails() {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser) return <Loading />;

  const [email, setEmail] = useState(currentUser.user.email);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.user.phoneNumber);
  const [address, setAddress] = useState(currentUser.user.address);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // update infos
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
        <Stack direction={'column'} width={'100%'} spacing={3}>
          <Typography variant='h4'>Detalhes da Conta</Typography>

          <Grid container spacing={2}>
            <Grid {...itemProps}>
              <InputField label='Nome' value={currentUser.user.name} readonly fullWidth />
            </Grid>
            <Grid {...itemProps}>
              <InputField
                label='Nome de Usuário'
                value={currentUser.user.userName}
                readonly
                fullWidth
              />
            </Grid>
            <Grid {...itemProps}>
              <InputField
                label='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type='email'
                error={!validateEmail(email)}
                fullWidth
              />
            </Grid>
            <Grid {...itemProps}>
              <PhoneTextInput
                required
                label={'Número de telefone'}
                value={phoneNumber}
                setValue={setPhoneNumber}
                fullWidth
              />
            </Grid>
            <Grid item width={'100%'}>
              <InputField
                label='Endereço'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                fullWidth
              />
            </Grid>
          </Grid>
        </Stack>
        <ButtonGrid />
      </Stack>
    </Stack>
  );
}
