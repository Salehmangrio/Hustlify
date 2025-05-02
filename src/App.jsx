import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import {MainLayout }from './layouts'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App