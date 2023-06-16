import { Delete, Edit, Image } from '@mui/icons-material';
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from '@mui/material';

import { User } from '../';
import colors from '../../../globals/colors';

interface Props {
  children: User;
  editAction: () => void;
  deleteAction: () => void;
}

export default function UserCard({ children: user, editAction, deleteAction }: Props) {
  return (
    <Stack direction={'column'}>
      <ListItem
        secondaryAction={
          <Stack direction={'row'} spacing={2}>
            <IconButton edge='end' aria-label='delete' onClick={editAction}>
              <Edit />
            </IconButton>
            <IconButton edge='end' aria-label='delete' onClick={deleteAction}>
              <Delete />
            </IconButton>
          </Stack>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={user.name} secondary={user.email} />
      </ListItem>

      <Divider sx={{ bgcolor: colors.gold }} />
    </Stack>
  );
}
