import { useEffect } from 'react';
import { Storager } from '../../globals/StorageManager';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    Storager.token.clear();
    if (!Storager.rememberUser.get()) Storager.user.clear();
    navigate('/Login');
  });

  return <></>;
}
