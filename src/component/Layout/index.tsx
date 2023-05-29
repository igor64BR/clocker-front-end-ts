/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from '@mui/material';
import { Storager } from '../../globals/StorageManager';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';

export default function Layout() {
  const { token } = Storager;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token.get()) navigate('Login');
  }, []);

  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}
