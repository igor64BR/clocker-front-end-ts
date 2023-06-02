/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Card, Stack } from '@mui/material';
import { Storager } from '../../globals/StorageManager';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import BgImg from './components/BgImg';

export default function Layout() {
  const { token } = Storager;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token.get()) navigate('Login');
  }, []);

  return (
    <Stack
      direction='column'
      sx={{
        position: 'relative',
        height: '100vh',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      <BgImg />

      <Navbar />

      <Stack
        direction='row'
        justifyContent='center'
        maxHeight='80%'
        alignItems='center'
        height={'80%'}
      >
        <Card
          sx={{
            width: '90%',
            overflow: 'auto',
            height: '100%',
            padding: 2,
          }}
        >
          <Box
            sx={{
              width: '100%',
              overflow: 'auto',
              height: '100%',
            }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Outlet />
          </Box>
        </Card>
      </Stack>

      <Stack height={10}></Stack>
    </Stack>
  );
}
