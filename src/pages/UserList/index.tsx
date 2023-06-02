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
import SearchBox from './components/SearchBox';

class User {
  id: string;
  userName: string;
  email: string;

  constructor(id: string, userName: string, email: string) {
    this.id = id;
    this.userName = userName;
    this.email = email;
  }
}

export default function UserList() {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    void Api.get('Authorization/', setData, setIsLoading);
  }, []);

  if (isLoading) return <Loading />;

  const users = data.map((u, i) => (
    <Stack key={i} direction={'column'}>
      <ListItem
        secondaryAction={
          <Stack direction={'row'} spacing={2}>
            <IconButton edge='end' aria-label='delete' onClick={() => navigate('./Form/' + u.id)}>
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
        <ListItemText primary={u.userName} secondary={u.email} />
      </ListItem>

      <Divider sx={{ bgcolor: colors.gold }} />
    </Stack>
  ));

  return (
    <Stack direction='column' width={'100%'} height={'100%'} justifyContent={'space-evenly'}>
      <Stack direction='row' alignItems='center'>
        <IconedButton label='Adicionar' onClick={() => navigate('./Form')}>
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
    </Stack>
  );
}
