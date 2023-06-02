import { CircularProgress } from '@mui/material';

interface Props {
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success';
}

export default function Loading({ color = 'secondary' }: Props) {
  return <CircularProgress color={color} />;
}
