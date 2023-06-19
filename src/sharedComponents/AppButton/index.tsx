import { Button, Stack, SxProps, Theme, Typography } from '@mui/material';
import { MouseEventHandler } from 'react';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  sx?: SxProps<Theme> | undefined;
  type?: 'button' | 'reset' | 'submit';
  label?: string;
  variant: 'contained' | 'outlined' | 'text';
  height?: number;
  maxHeight?: number;
  width?: number;
  maxWidth?: number;
}

export default function AppButton(props: Props) {
  return (
    <Button
      type={props.type}
      variant={props.variant ?? 'contained'}
      sx={props.sx}
      onClick={props.onClick}
    >
      <Stack
        width={props.width}
        maxWidth={props.maxWidth}
        height={props.height}
        maxHeight={props.maxHeight}
      >
        <Typography>{props.label}</Typography>
      </Stack>
    </Button>
  );
}
