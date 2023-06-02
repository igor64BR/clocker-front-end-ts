import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import UserList from './pages/UserList';
import SignOut from './pages/SignOut';
import UserForm from './pages/UserForm';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<SignIn />} />
        <Route path='/Logout' element={<SignOut />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Users/'>
            <Route index element={<UserList />} />
            <Route path='Form/:id' element={<UserForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
