import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import colors from '../../globals/colors';

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

const mockUsers: User[] = [];

for (let i = 1; i <= 20; i++) {
  const parsedNumber = i.toString();
  mockUsers.push(
    new User(parsedNumber, 'user' + parsedNumber, 'user' + parsedNumber + '@gmail.com'),
  );
}

export default function UserList() {
  const users = mockUsers.map((u, i) => (
    <ListItem key={i}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={u.userName} secondary={u.email} />
    </ListItem>
  ));

  return <List sx={{ width: '100%', maxWidth: 360 }}>{users}</List>;
}
