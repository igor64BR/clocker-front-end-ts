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
}

export default function InputField({
  label,
  variant,
  required,
  type,
  labelColor,
  value,
  onChange,
}: Props) {
  return (
    <TextField
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
