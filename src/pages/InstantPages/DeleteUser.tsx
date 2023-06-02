import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../sharedComponents/Loading';
import { useEffect, useState } from 'react';
import { Api } from '../../globals/Api';

export default function DeleteUser() {
  const { id } = useParams<{ id: string }>();
  const [, setData] = useState();

  const navigate = useNavigate();

  const removeUser = async () => {
    await Api.del(`Authorization/${id ?? ''}`, null, setData);
    navigate('../');
  };

  useEffect(() => {
    void removeUser();
  }, []);

  return <Loading />;
}
