import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes({isAllowed, children, redirectTo="/login" }) {

console.log("prueba", isAllowed)

  if(!isAllowed){
    return <Navigate to={redirectTo} />
  }
  
  return children ? children : <Outlet />
  
}

export default PrivateRoutes;