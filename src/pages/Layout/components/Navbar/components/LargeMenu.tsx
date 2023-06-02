import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { menuButtons } from '../pages';
import colors from '../../../../../globals/colors';

export default function LargeMenu() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, height: '100%' }}>
      {menuButtons.map((page) => (
        <Button
          key={page.name}
          onClick={() => navigate(page.destination)}
          sx={{ my: 2, color: colors.black, display: 'block', height: '100%' }}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
}
