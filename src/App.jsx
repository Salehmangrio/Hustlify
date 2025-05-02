import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import { MainLayout } from './layouts'
import { Login, Register } from './pages'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App