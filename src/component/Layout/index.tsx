/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Card, Container, Stack, Typography } from '@mui/material';
import { Storager } from '../../globals/StorageManager';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import colors from '../../globals/colors';
import { useStyles } from './style';

export default function Layout() {
  const { token } = Storager;
  const navigate = useNavigate();

  const classes = useStyles();

  useEffect(() => {
    // if (!token.get()) navigate('Login');
  }, []);

  return (
    <Stack
      direction='column'
      sx={{ bgcolor: colors.black }}
      height={'100vh'}
      className={classes.stack}
      justifyContent={'space-between'}
    >
      <Navbar />

      <Stack direction='row' justifyContent='center' maxHeight='80%' alignItems='center'>
        <Card
          sx={{
            width: '90%',
            overflow: 'auto',
            height: '100%',
          }}
        >
          <Outlet />
        </Card>
      </Stack>

      <Stack height={10}></Stack>
    </Stack>
  );
}
