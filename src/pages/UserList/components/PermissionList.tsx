import { useEffect, useState } from 'react';

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { Api } from '../../../globals/Api';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

interface Role {
  id: string;
  name: string;
}

export default function PermissionList(props: Props) {
  const [allPermissions, setAllPermissions] = useState<Role[]>([]);

  useEffect(() => {
    void Api.get('Authorization/Roles', setAllPermissions);
  }, []);

  const labelId = 'select-label';

  return (
    <>
      <Box width={'50%'}>
        <FormControl fullWidth>
          <InputLabel
            id={labelId}
            color='secondary'
            sx={{
              transform: 'translate(10%, 10%)',
              fontSize: 13,
            }}
          >
            Permissão
          </InputLabel>
          <Select
            labelId={labelId}
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
            variant='filled'
          >
            {allPermissions.map((p, i) => (
              <MenuItem value={p.name} key={i}>
                {p.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
