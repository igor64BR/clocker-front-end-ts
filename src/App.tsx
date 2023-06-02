import { ThemeProvider, createTheme } from '@mui/material';
import colors from './globals/colors';
import { Toast } from './sharedComponents/Toaster';
import AppRoutes from './AppRoutes';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: colors.white,
    },
    secondary: {
      main: colors.gold,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
      <Toast />
    </ThemeProvider>
  );
}

export default App;
