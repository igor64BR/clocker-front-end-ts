import SignIn from './component/SignIn';
import { ThemeProvider, createTheme } from '@mui/material';
import colors from './globals/colors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import { Toast } from './component/Shared/Toaster';
import UserList from './component/UserList';
import SignOut from './component/SignOut';
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
