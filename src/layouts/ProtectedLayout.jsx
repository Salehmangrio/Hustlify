import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const ProtectedLayout = () => {
    let isLogged = localStorage.getItem('isLogged');
    return isLogged ? <Outlet /> : <Navigate to={'/login'} replace />
}

export default ProtectedLayout