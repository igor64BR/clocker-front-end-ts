import { Typography } from "@mui/material";

export default function Copyright(props: any) {
  return (
    <Typography variant="body2" color="primary" align="center" {...props}>
      {"Copyright © - All rights reserved to Igor Baiocco - "}
      {new Date().getFullYear()}
    </Typography>
  );
}
