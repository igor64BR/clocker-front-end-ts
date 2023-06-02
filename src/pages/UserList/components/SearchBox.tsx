import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Stack } from '@mui/material';
import colors from '../../../globals/colors';
import { useState } from 'react';

export default function SearchBox() {
  const [userName, setUserName] = useState<string>();

  return (
    <Stack direction='row' width={'5%'} py={2} justifyContent='flex-end' sx={{ width: '100%' }}>
      <Box sx={{ border: '1px solid ' + colors.gold, borderRadius: 10, p: 0.2 }}>
        <Stack direction='row' spacing={2} px={2}>
          <Stack justifyContent='center' alignItems='center'>
            <SearchIcon color='secondary' />
          </Stack>
          <InputBase
            placeholder='Procurar...'
            inputProps={{ 'aria-label': 'search' }}
            sx={{ width: 150 }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Stack>
      </Box>
    </Stack>
  );
}
