import { Grid } from "@mui/material";
import mainImg from "./assets/img/background.jpg";
import LoginForm from "./components/LoginForm";

export default function SignIn() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundImage: `url(${mainImg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <LoginForm />
    </Grid>
  );
}
