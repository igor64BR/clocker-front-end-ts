import { TextField } from "@mui/material";
import React from "react";
import colors from "../../../globals/colors";

interface Props {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  type?: string;
  label: string;
}

export default function LoginInput({ value, onChange, type, label }: Props) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={label}
      label={label}
      name={label}
      autoFocus
      onChange={onChange}
      value={value}
      color="primary"
      type={type}
      inputProps={{
        style: {
          color: colors.white,
        },
      }}
      focused
    />
  );
}
