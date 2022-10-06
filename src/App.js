import { useState } from 'react';
import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './views/dashboard/Dashboard';
import Login from './views/login/Login';
import PrivateRoutes from './components/privateroutes/PrivateRoutes';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  return (
    <>
    <Routes>       
      <Route path='*' element={<Dashboard />} />
      <Route path='/login' element={<Login />} /> 
      <Route element={<PrivateRoutes isAllowed={user.login} /> } >
        <Route path='/dashboard/*' element={<Dashboard />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
