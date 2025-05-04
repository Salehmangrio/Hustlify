import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import { MainLayout, ProtectedLayout } from './layouts'
import { Dashboard, ForgotPassword, Login, Register, NotFound, ChatList, ChatRoom,Orders,OrderDetails} from './pages'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >

        {/* Authentication Routes */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forget' element={<ForgotPassword />} />

        {/* Protected Routes (Only Authorized can see content) */}
        <Route element={<ProtectedLayout />}>

          <Route index element={<Dashboard />} />

          <Route path='chat' element={<ChatList />}>
            <Route path=':id' element={<ChatRoom />} />
          </Route>
          <Route path="order" element={<Orders/>}/>
          <Route path="order/:id" element={<OrderDetails/>}/>

        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
