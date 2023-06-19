import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Stack } from '@mui/material';

import { Api } from '../../../globals/Api';
import Loading from '../../../sharedComponents/Loading';
import SideBar from './components/Sidebar';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

export interface Response {
  user: {
    id: string;
    name: string;
    userName: string;
    email: string;
    phoneNumber: string;
  };
  roles: string[];
}

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState<Response>();
  const [isLoading, setIsLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    void Api.get('Authorization/CurrentUser', setCurrentUser, setIsLoading);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <Stack direction='row' width={'100%'} height={'100%'}>
        <SideBar user={currentUser} />
        <Outlet />
      </Stack>
    </CurrentUserContext.Provider>
  );
}
