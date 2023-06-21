import { Grid, Stack, Typography } from '@mui/material';

import InputField from '../../../sharedComponents/InputField';
import { Field } from '..';

interface Props {
  currentPassword: Field;
  newPassword: Field;
  newPasswordConfirm: Field;
  itemProps: any;
}

export default function PasswordSection(props: Props) {
  return (
    <Stack direction={'column'} spacing={2}>
      <Typography variant='h4'>Proteção da Conta</Typography>

      <Grid container spacing={2}>
        <Grid item width={'100%'} pr={'50%'}>
          <InputField
            label='Senha Atual'
            type='password'
            value={props.currentPassword.value}
            onChange={(e) => props.currentPassword.setValue(e.target.value)}
            error={props.currentPassword.error}
            errorMessage={props.currentPassword.errorMessage}
            fullWidth
          />
        </Grid>
        <Grid item {...props.itemProps}>
          <InputField
            label='Nova Senha'
            type='password'
            value={props.newPassword.value}
            onChange={(e) => props.newPassword.setValue(e.target.value)}
            error={props.newPassword.error}
            errorMessage={props.newPassword.errorMessage}
            fullWidth
          />
        </Grid>
        <Grid item {...props.itemProps}>
          <InputField
            label='Confirmar Nova Senha'
            type='password'
            value={props.newPasswordConfirm.value}
            onChange={(e) => props.newPasswordConfirm.setValue(e.target.value)}
            error={props.newPasswordConfirm.error}
            errorMessage={props.newPasswordConfirm.errorMessage}
            fullWidth
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
