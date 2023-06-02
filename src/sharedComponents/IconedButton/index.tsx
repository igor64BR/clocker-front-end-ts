import { Button, Stack, Typography } from '@mui/material';

import colors from '../../globals/colors';

interface Props {
  children: any;
  label: string;
  onClick: () => void;
}

export default function IconedButton({ children, label, onClick }: Props) {
  return (
    <Stack direction='row' alignItems='center' height={'50%'}>
      <Button sx={{ bgcolor: colors.gold }} onClick={onClick}>
        <Stack direction='row' spacing={1} alignItems='center' height={'50%'}>
          <Stack
            height={15}
            width={15}
            sx={{ bgcolor: colors.white, borderRadius: '50%' }}
            justifyContent='center'
            alignItems='center'
            p={0.3}
          >
            {children}
          </Stack>
          <Typography variant='button' sx={{ textTransform: 'none' }}>
            {label}
          </Typography>
        </Stack>
      </Button>
    </Stack>
  );
}
