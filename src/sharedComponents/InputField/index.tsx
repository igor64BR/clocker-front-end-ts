import { Theme } from '@emotion/react';
import { SxProps, TextField } from '@mui/material';

import colors from '../../globals/colors';

interface Props {
  label: string;
  errorMessage?: string;
  variant?: 'filled' | 'outlined' | 'standard';
  required?: boolean;
  type?: string;
  labelColor?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  error?: boolean;
  fullWidth?: boolean;
  readonly?: boolean;
  sx?: SxProps<Theme>;
}

export default function InputField(props: Props) {
  return (
    <>
      <TextField
        error={props.error}
        label={props.label}
        aria-label={props.label}
        variant={props.variant ?? 'filled'}
        required={props.required}
        type={props.type}
        InputLabelProps={{ style: { color: props.labelColor ?? colors.black } }}
        value={props.value}
        onChange={props.onChange}
        InputProps={{
          readOnly: props.readonly,
          className: props.readonly ? 'Mui-disabled' : undefined,
        }}
        sx={props.sx}
        fullWidth={props.fullWidth}
        helperText={props.error ? props.errorMessage : null}
      />
    </>
  );
}
