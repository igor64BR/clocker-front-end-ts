import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Divider, Stack } from '@mui/material';
import List from '@mui/material/List';

import { Api } from '../../globals/Api';
import colors from '../../globals/colors';
import { scrollBarConfigs } from '../../globals/ScrollBarConfigs';
import Loading from '../../sharedComponents/Loading';
import FormModal from './components/FormModal';
import Header from './components/Header';
import UserCard from './components/UserCard';

export interface User {
  permission: string;
  id: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  userName: string;
}

export default function UserList() {
  const [data, setData] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    void Api.get('Authorization/', setData, setIsLoading);
  }, []);

  const openModal = async (modalTitle: string, userId?: string) => {
    setModalTitle(modalTitle);

    if (userId) await Api.get('Authorization/' + userId.toString(), setCurrentUser);
    else setCurrentUser(undefined);

    setModalIsOpen(true);
  };

  const searchUser = (userName: string) => {
    void Api.get('Authorization', setData, undefined, {
      q: userName,
    });
  };

  if (isLoading) return <Loading />;

  return (
    <Stack direction='column' width={'100%'} height={'100%'} justifyContent={'space-evenly'}>
      <Header
        onAddUser={() => {
          void openModal('Criar novo usuário');
        }}
        onUserSearch={searchUser}
      />
      <Divider sx={{ bgcolor: colors.gold }} />
      <List
        sx={{
          width: '100%',
          height: '90%',
          overflow: 'auto',
          ...scrollBarConfigs(),
        }}
      >
        {data.map((u, i) => (
          <UserCard
            key={i}
            editAction={() => {
              void openModal('Editar usuário', u.id);
            }}
            deleteAction={() => navigate('./Delete/' + u.id.toString())}
          >
            {u}
          </UserCard>
        ))}
      </List>
      <FormModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        currentUser={currentUser}
        formTitle={modalTitle}
      />
    </Stack>
  );
}
