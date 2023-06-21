import { Grid, Stack, Typography } from '@mui/material';

import { Field } from '../';
import { validateEmail } from '../../../contexts/ValidationContext';
import InputField from '../../../sharedComponents/InputField';
import PhoneTextInput from '../../../sharedComponents/PhoneTextInput';
import { Response } from '../../Layouts/Profile/ProfileLayout';

interface Props {
  currentUser: Response;
  itemProps: any;
  email: Field;
  phoneNumber: Field;
  address: Field;
}

export default function AccountDetailsSection(props: Props) {
  return (
    <Stack direction={'column'} spacing={2}>
      <Typography variant='h4'>Detalhes da Conta</Typography>

      <Grid container spacing={2}>
        <Grid item {...props.itemProps}>
          <InputField label='Nome' value={props.currentUser.user.name} readonly fullWidth />
        </Grid>
        <Grid item {...props.itemProps}>
          <InputField
            label='Nome de Usuário'
            value={props.currentUser.user.userName}
            readonly
            fullWidth
          />
        </Grid>
        <Grid item {...props.itemProps}>
          <InputField
            label='Email'
            value={props.email.value}
            onChange={(e) => props.email.setValue(e.target.value)}
            required
            type='email'
            error={!validateEmail(props.email.value)}
            fullWidth
          />
        </Grid>
        <Grid item {...props.itemProps}>
          <PhoneTextInput
            required
            label={'Número de telefone'}
            value={props.phoneNumber.value}
            setValue={props.phoneNumber.setValue}
            fullWidth
          />
        </Grid>
        <Grid item {...props.itemProps}>
          <InputField
            label='Endereço'
            value={props.address.value}
            onChange={(e) => props.address.setValue(e.target.value)}
            required
            fullWidth
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
