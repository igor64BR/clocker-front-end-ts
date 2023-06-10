import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Add, Delete, Edit } from '@mui/icons-material';
import ImageIcon from '@mui/icons-material/Image';
import { Divider, IconButton, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import { Api } from '../../globals/Api';
import colors from '../../globals/colors';
import { scrollBarConfigs } from '../../globals/ScrollBarConfigs';
import IconedButton from '../../sharedComponents/IconedButton';
import Loading from '../../sharedComponents/Loading';
import FormModal from './components/FormModal';
import SearchBox from './components/SearchBox';

export interface User {
  id: string;
  name: string;
  email: string;
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

  if (isLoading) return <Loading />;

  const users = data.map((u, i) => (
    <Stack key={i} direction={'column'}>
      <ListItem
        secondaryAction={
          <Stack direction={'row'} spacing={2}>
            <IconButton
              edge='end'
              aria-label='delete'
              onClick={() => {
                void openModal('Editar usuário', u.id);
              }}
            >
              <Edit />
            </IconButton>
            <IconButton
              edge='end'
              aria-label='delete'
              onClick={() => navigate('./Delete/' + u.id.toString())}
            >
              <Delete />
            </IconButton>
          </Stack>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={u.name} secondary={u.email} />
      </ListItem>

      <Divider sx={{ bgcolor: colors.gold }} />
    </Stack>
  ));

  return (
    <Stack direction='column' width={'100%'} height={'100%'} justifyContent={'space-evenly'}>
      <Stack direction='row' alignItems='center'>
        <IconedButton
          label='Adicionar'
          onClick={() => {
            void openModal('Criar novo usuário');
          }}
        >
          <Add color='secondary' fontSize='small' />
        </IconedButton>
        <SearchBox />
      </Stack>
      <Divider sx={{ bgcolor: colors.gold }} />
      <List
        sx={{
          width: '100%',
          height: '90%',
          overflow: 'auto',
          ...scrollBarConfigs(),
        }}
      >
        {users}
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
