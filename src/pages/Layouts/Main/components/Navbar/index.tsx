import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { HiddenMenu } from './components/HiddenMenu';
import { useState } from 'react';
import CustomAvatar from './components/CustomAvatar';
import LargeMenu from './components/LargeMenu';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  return (
    <AppBar position='static'>
      <div
        style={{
          padding: 0,
          paddingLeft: '1%',
          paddingRight: '1%',
          margin: 1,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <LargeMenu />

          <HiddenMenu
            onOpen={(event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget)}
            anchorElNav={anchorElNav}
            onClose={() => setAnchorElNav(null)}
          />

          <CustomAvatar
            onOpen={(event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget)}
            isOpen={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
            anchorEl={anchorElUser}
          />
        </Toolbar>
      </div>
    </AppBar>
  );
}
export default Navbar;
