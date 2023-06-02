import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import DeleteUser from './pages/InstantPages/DeleteUser';
import Layout from './pages/Layout';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import UserForm from './pages/UserForm';
import UserList from './pages/UserList';

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
            <Route path='Delete/:id' element={<DeleteUser />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
