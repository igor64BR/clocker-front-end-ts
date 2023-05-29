import SignIn from './component/SignIn';
import { ThemeProvider, createTheme } from '@mui/material';
import colors from './globals/colors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import { Toast } from './component/Shared/Toaster';

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
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<SignIn />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toast />
    </ThemeProvider>
  );
}

export default App;
