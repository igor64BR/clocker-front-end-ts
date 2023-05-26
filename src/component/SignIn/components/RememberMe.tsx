import { FormControlLabel, Checkbox } from "@mui/material";
import React from "react";
import colors from "../../../globals/colors";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  value: boolean;
}

export default function RememberMe({ onChange, value }: Props) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          value={value}
          checked={value}
          onChange={onChange}
          color="secondary"
          sx={{
            color: colors.gold,
          }}
        />
      }
      label="Remember me"
    />
  );
}
