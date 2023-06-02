import { useParams } from 'react-router-dom';

export default function UserForm() {
  const { id } = useParams<{ id: string }>();

  return <></>;
}
