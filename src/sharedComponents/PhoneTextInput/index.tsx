import { MuiTelInput } from 'mui-tel-input';

interface Props {
  label: string;
  value: string;
  setValue: (value: string) => void;
  readonly?: boolean;
  variant?: 'filled' | 'outlined' | 'standard';
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
      inputProps={{ maxLength: 15 }}
    />
  );
}
