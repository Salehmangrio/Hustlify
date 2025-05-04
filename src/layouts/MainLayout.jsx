import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import {Navbar }from '../components'


const MainLayout = () => {
    return (
        <AuthProvider>
            <Navbar/>
            <Outlet />
        </AuthProvider>
    )
}

export default MainLayout