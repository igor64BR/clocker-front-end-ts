import { FormEvent, useEffect, useState } from 'react';

import { Box, Button, Modal, Stack, Typography } from '@mui/material';

import { User } from '../';
import { Api } from '../../../globals/Api';
import PhoneTextInput from '../../../sharedComponents/PhoneTextInput';
import { toastEmitter } from '../../../sharedComponents/Toaster';
import FormUserInput from '../DTOs/FormUserInput';
import ModalField from './ModalField';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  formTitle: string;
  currentUser?: User;
}

export default function FormModal({ currentUser, isOpen, onClose, formTitle }: Props) {
  const [, setResponse] = useState<{ id: string }>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setPhoneNumber(currentUser.phoneNumber);
      setAddress(currentUser.address);
    } else {
      setName('');
      setEmail('');
      setPhoneNumber('');
      setAddress('');
    }
    setPassword('');
    setConfirmPassword('');
  }, [currentUser]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toastEmitter.error('As senhas devem estar iguais');
      return;
    }

    const body = new FormUserInput(name, email, password, phoneNumber, address);

    if (currentUser) await Api.put('Authorization/' + currentUser.id, body, setResponse);
    else await Api.post('Authorization/', body, setResponse);

    onClose();
    window.location.reload();
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box component='form' onSubmit={handleSubmit}>
        <Stack
          direction='column'
          spacing={2}
          width='40%'
          maxWidth={400}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            borderRadius: 5,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant='h5'>{formTitle}</Typography>
          <ModalField label='Nome' value={name} onChange={(e) => setName(e.target.value)} />
          <ModalField
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
          />
          <PhoneTextInput
            label='Número de telefone'
            value={phoneNumber}
            setValue={setPhoneNumber}
            fullWidth
            required
          />
          <ModalField
            label='Endereço'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <ModalField
            label='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
          <ModalField
            label='Confirmação de senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
          />

          <Button type='submit' color='secondary' variant='contained'>
            <Typography>Salvar</Typography>
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
