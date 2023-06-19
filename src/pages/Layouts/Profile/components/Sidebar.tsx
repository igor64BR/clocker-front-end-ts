import { useNavigate } from 'react-router-dom';

import { Image, LockPersonOutlined } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Avatar, Button, Divider, ListItemText, Stack, Typography } from '@mui/material';

import colors from '../../../../globals/colors';
import { Response } from '../ProfileLayout';

interface Props {
  user?: Response;
}

export default function SideBar({ user }: Props) {
  const iconStyle = { border: 'solid 1.8px black', borderRadius: '50%' };

  return (
    <Stack direction='column' spacing={1} width={'25%'} mr={3}>
      <Stack direction='row' spacing={2}>
        <Avatar>
          <Image />
        </Avatar>
        <ListItemText primary={user?.user.name} secondary={user?.user.email} />
      </Stack>
      <Divider />
      <SideBarListItem icon={<PersonOutlineIcon sx={iconStyle} />}>
        Informações Pessoais
      </SideBarListItem>
      <SideBarListItem icon={<LockPersonOutlined sx={iconStyle} />}>
        Segurança da conta
      </SideBarListItem>
    </Stack>
  );
}

const SideBarListItem = ({ icon, children: title }: { icon: any; children: any }) => {
  return (
    <>
      <Button variant='text' sx={{ color: colors.black }} onClick={() => {}}>
        <Stack direction='row' spacing={2} marginRight={5} width={'100%'}>
          {icon}
          <Typography sx={{ width: '100%', margin: 1 }}>{title}</Typography>
        </Stack>
      </Button>
      <Divider />
    </>
  );
};
