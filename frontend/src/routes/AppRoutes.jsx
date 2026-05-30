import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../pages/Home'
import Products from '../pages/products'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Orders from '../pages/Orders'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AdminDashboard from '../pages/AdminDashboard'

const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/products'
          element={<Products />}
        />

        <Route
          path='/product/:id'
          element={<ProductDetails />}
        />

        <Route
          path='/cart'
          element={<Cart />}
        />
        <Route

  path='/orders'

  element={<Orders />}
        />

        <Route
          path='/login'
          element={<Login />}
        />

        <Route
          path='/register'
          element={<Register />}
        />

        <Route
          path='/admin'
          element={<AdminDashboard />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default AppRoutes