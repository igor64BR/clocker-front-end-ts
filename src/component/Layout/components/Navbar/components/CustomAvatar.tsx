import { Tooltip, IconButton, Box, Menu, MenuItem, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import logo from '../../../../../assets/img/logo-no-name.png';
import colors from '../../../../../globals/colors';
import { userButtons } from '../pages';

interface Props {
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  isOpen: boolean;
  anchorEl: null | HTMLElement;
}

export default function CustomAvatar({ onOpen, onClose, isOpen, anchorEl }: Props) {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Abrir opções de perfil'>
        <IconButton onClick={onOpen} sx={{ p: 0 }} color='primary'>
          <Avatar
            alt='Remy Sharp'
            src={logo}
            sx={{ p: 1, bgcolor: colors.black, height: 30, width: 30 }}
          />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isOpen}
        onClose={onClose}
      >
        {userButtons.map((setting) => (
          <MenuItem key={setting.name} onClick={onClose}>
            <Typography textAlign='center'>{setting.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
