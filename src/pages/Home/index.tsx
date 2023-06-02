import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => navigate('/Users'));

  return <Typography>{'I am at Home'}</Typography>;
}
