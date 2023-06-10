import { TextField } from '@mui/material';

import colors from '../../globals/colors';

interface Props {
  label: string;
  variant: 'filled' | 'outlined' | 'standard';
  required?: boolean;
  type?: string;
  labelColor: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  error?: boolean;
}

export default function InputField({
  label,
  variant,
  required,
  type,
  labelColor,
  value,
  onChange,
  error,
}: Props) {
  return (
    <TextField
      error={error}
      label={label}
      aria-label={label}
      variant={variant}
      required={required}
      type={type}
      InputLabelProps={{ style: { color: labelColor ?? colors.black } }}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
}
