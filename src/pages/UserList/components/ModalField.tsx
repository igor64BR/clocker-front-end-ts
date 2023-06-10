import colors from '../../../globals/colors';
import InputField from '../../../sharedComponents/InputField';

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
}

export default function ModalField({ label, value, onChange, type }: Props) {
  return (
    <InputField
      error={!value}
      label={label}
      variant='filled'
      required
      labelColor={colors.black}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
}
