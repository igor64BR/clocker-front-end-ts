import { Stack } from '@mui/material';

import AppButton from '../../../sharedComponents/AppButton';

export default function ButtonGrid() {
  return (
    <Stack direction={'row'} justifyContent={'flex-end'} width={'100%'}>
      <Stack direction={'row'} spacing={2}>
        <AppButton
          label='Salvar'
          type='submit'
          variant='contained'
          sx={{ bgcolor: 'green', color: 'white' }}
        />
        <AppButton
          label='Cancelar'
          variant='contained'
          sx={{ bgcolor: 'red', color: 'white' }}
          onClick={window.location.reload}
        />
      </Stack>
    </Stack>
  );
}
