/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box, Button, Grid, Paper, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import Copyright from './Copyright';
import React, { useEffect, useState } from 'react';
import colors from '../../../globals/colors';
import LoginInput from './LoginInput';
import { Storager } from '../../../globals/StorageManager';
import AuxLinks from './AuxLinks';
import RememberMe from './RememberMe';
import { Api } from '../../../globals/Api';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../sharedComponents/Loading';

interface Data {
  user: {
    id: string;
  };

  token: string;
}

export default function LoginForm() {
  const storedUser = Storager.user.get();
  const userIsRemembered = Storager.rememberUser.get();

  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>(
    userIsRemembered && storedUser?.email ? storedUser.email : '',
  );
  const [password, setPassword] = useState('');
  const [rememberUser, setRememberUser] = useState(userIsRemembered ?? false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) return;

    Storager.rememberUser.set(rememberUser);

    if (rememberUser) Storager.user.set({ email });
    else Storager.user.clear();

    Storager.token.set(data.token);
    navigate('/');
  }, [data]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void Api.post('Authorization/login', { email, password }, setData, setIsLoading);
  };

  const handleRememberMeChange = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    Storager.rememberUser.set(checked);
    setRememberUser(checked);
  };

  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={4}
      component={Paper}
      elevation={6}
      square
      sx={{
        bgcolor: colors.black,
        color: colors.white,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>

        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>

        <Box component='form' noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
          <LoginInput
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type='email'
            label='Email'
          />

          <LoginInput
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type='password'
            label='Senha'
          />

          <RememberMe onChange={handleRememberMeChange} value={rememberUser} />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, height: 60 }}
            color='secondary'
          >
            {isLoading ? <Loading color='primary' /> : <Typography>Entrar</Typography>}
          </Button>

          <AuxLinks />

          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid>
  );
}
