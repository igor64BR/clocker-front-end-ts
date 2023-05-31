import SignIn from './component/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import UserList from './component/UserList';
import SignOut from './component/SignOut';
import UserForm from './component/UserForm';

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
