import { Grid, Link } from '@mui/material';

export default function AuxLinks() {
  return (
    <Grid container>
      <Grid item xs>
        <Link href='RecoverPassword' variant='body2'>
          Forgot password?
        </Link>
      </Grid>

      <Grid item>
        <Link href='CreateAccount' variant='body2'>
          {'Dont have an account? Sign Up'}
        </Link>
      </Grid>
    </Grid>
  );
}
