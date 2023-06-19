import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import DeleteUser from './pages/InstantPages/DeleteUser';
import SignIn from './pages/SignIn';
import SignOut from './pages/InstantPages/SignOut';
import UserList from './pages/UserList';
import Layout from './pages/Layouts/Main';
import ProfileLayout from './pages/Layouts/Profile/ProfileLayout';
import UserDetails from './pages/UserDetails';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<SignIn />} />
        <Route path='/Logout' element={<SignOut />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Profile' element={<ProfileLayout />}>
            <Route index element={<UserDetails />} />
          </Route>
          <Route path='Users/'>
            <Route index element={<UserList />} />
            <Route path='Delete/:id' element={<DeleteUser />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
