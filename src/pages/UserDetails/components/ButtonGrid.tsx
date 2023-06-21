import { Stack } from '@mui/material';

import AppButton from '../../../sharedComponents/AppButton';
import Loading from '../../../sharedComponents/Loading';

interface Props {
  isLoading: boolean;
}

export default function ButtonGrid(props: Props) {
  return (
    <Stack direction={'row'} justifyContent={'flex-end'} width={'100%'} spacing={2}>
      <Stack>{props.isLoading ? <Loading /> : null}</Stack>
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
