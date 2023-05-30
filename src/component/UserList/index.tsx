import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import colors from '../../globals/colors';
import { Divider, IconButton, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import { Api } from '../../globals/Api';

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

  useEffect(() => {
    void Api.get('Authorization/', setData, setIsLoading);
  }, []);

  if (isLoading) return <Loading />;

  const users = data.map((u, i) => (
    <Stack key={i} direction={'column'}>
      <Divider sx={{ bgcolor: colors.gold }} />

      <ListItem
        secondaryAction={
          <Stack direction={'row'} spacing={2}>
            <IconButton edge='end' aria-label='delete'>
              <Edit />
            </IconButton>
            <IconButton edge='end' aria-label='delete'>
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

  return <List sx={{ width: '100%', height: '90%' }}>{users}</List>;
}
