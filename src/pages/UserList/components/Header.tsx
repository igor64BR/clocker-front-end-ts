import { Add } from '@mui/icons-material';
import { Stack } from '@mui/material';

import IconedButton from '../../../sharedComponents/IconedButton';
import SearchBox from './SearchBox';

interface Props {
  onAddUser: () => void;
  onUserSearch: (userName: string) => void;
}

export default function Header({ onAddUser, onUserSearch }: Props) {
  return (
    <Stack direction='row' alignItems='center'>
      <IconedButton label='Adicionar' onClick={onAddUser}>
        <Add color='secondary' fontSize='small' />
      </IconedButton>
      <SearchBox onSearch={onUserSearch} />
    </Stack>
  );
}
