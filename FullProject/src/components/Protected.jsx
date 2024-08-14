import React from 'react'
import { Navigate } from 'react-router-dom';

const Protected = () => {
    const token=localStorage.getItem('token');
  return (
   token ?<Outlet/>:<Navigate to="/login"/>
)

}

export default Protected