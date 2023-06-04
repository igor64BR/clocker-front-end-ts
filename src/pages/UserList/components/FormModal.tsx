import { useEffect, useState } from 'react';

import { Box, Button, Modal, Stack, Typography } from '@mui/material';

import ModalField from './ModalField';
import { User } from '..';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  formTitle: string;
  currentUser?: User;
}

export default function FormModal({ currentUser, isOpen, onClose, formTitle }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.userName);
      setEmail(currentUser.email);
    } else {
      setName('');
      setEmail('');
    }
    setPassword('');
    setConfirmPassword('');
  }, [currentUser]);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box component='form' onSubmit={() => {}}>
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
          <Typography>{formTitle}</Typography>
          <ModalField label='Nome' value={name} onChange={(e) => setName(e.target.value)} />
          <ModalField label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <ModalField
            label='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ModalField
            label='Confirmação de senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button type='submit' color='secondary' variant='contained'>
            <Typography>Salvar</Typography>
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
