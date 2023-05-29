import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { menuButtons } from '../pages';

interface Props {
  onOpen: (e: React.MouseEvent<HTMLElement>) => void;
  anchorElNav: HTMLElement | null;
  onClose: () => void;
}

export function HiddenMenu({ onOpen, anchorElNav, onClose }: Props) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={onOpen}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={onClose}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {menuButtons.map((page) => (
          <MenuItem
            key={page.name}
            onClick={() => {
              onClose();
              navigate(page.destination);
            }}
          >
            <Typography textAlign='center'>{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
