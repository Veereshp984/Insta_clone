import { BrowserRouter , Routes,Route } from 'react-router'
import Login from './features/auth/Pages/Login'
import Register from './features/auth/Pages/Register'


import React from 'react'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element= {<Login/>} />
        <Route path='/register' element= {<Register/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
