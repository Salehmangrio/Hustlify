import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import { MainLayout, ProtectedLayout } from './layouts'
import { Dashboard, ForgotPassword, Login, Register } from './pages'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route path='login' element={<Login />} />
        <Route path='forget' element={ <ForgotPassword/>} />
        <Route path='register' element={<Register />} />
        <Route element={<ProtectedLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App