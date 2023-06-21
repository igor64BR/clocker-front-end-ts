import { MuiTelInput } from 'mui-tel-input';

import { SxProps, Theme } from '@mui/material/styles';

interface Props {
  label: string;
  value: string;
  setValue: (value: string) => void;
  readonly?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  variant?: 'filled' | 'outlined' | 'standard';
  sx?: SxProps<Theme> | undefined;
}

export default function PhoneTextInput(props: Props) {
  return (
    <MuiTelInput
      label={props.label}
      value={props.value}
      onChange={props.setValue}
      variant={props.variant ?? 'filled'}
      InputProps={{
        readOnly: props.readonly,
        className: props.readonly ? 'Mui-disabled' : undefined,
      }}
      inputProps={{ maxLength: 18 }}
      required={props.required}
      sx={props.sx}
      fullWidth={props.fullWidth}
    />
  );
}
