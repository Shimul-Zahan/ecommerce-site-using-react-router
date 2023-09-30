import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AllProduct from './Components/AllProduct/AllProduct.jsx';
import Books from './Components/AllProduct/Books/Books.jsx';
import Sunglasses from './Components/AllProduct/Sunglasses/Sunglasses.jsx';
import Watches from './Components/AllProduct/Watches/Watches.jsx';
import Courses from './Components/AllProduct/Courses/Courses.jsx';
import Login from './Components/AllProduct/Login/Login';
import Register from './Components/AllProduct/Register/Register';
import TotalProducts from './Components/AllProduct/TotalProducts/TotalProducts';
import IndivisualItem from './Components/AllProduct/IndivisualItem/IndivisualItem';
import BookDetailsShow from './Components/DetailsShow/BookDetailsShow';
import SunglassDetailsShow from './Components/DetailsShow/SunglassDetailsShow';
import Cart from './Cart/Cart';
import Profile from './UserProfile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        loader: () => fetch('https://fakestoreapi.com/products'),
        element: <TotalProducts />
      },
      {
        path: '/all',
        loader: () => fetch('/Products/allProduct.json'),
        element: <AllProduct />
      },
      {
        path: '/courses',
        loader: () => fetch('/Products/courses.json'),
        element: <Courses />
      },
      {
        path: '/book',
        loader: () => fetch('/Products/book.json'),
        element: <Books />
      },
      {
        path: '/book/:id',
        element: <BookDetailsShow />,
        loader: () => fetch('/Products/book.json')
      },
      {
        path: '/sunglass',
        loader: () => fetch('/Products/sunglass.json'),
        element: <Sunglasses />
      },
      {
        path: '/sunglass/:id',
        loader: () => fetch('/Products/sunglass.json'),
        element: <SunglassDetailsShow />
      },
      {
        path: '/watches',
        loader: () => fetch('/Products/watches.json'),
        element: <Watches />
      },
      {
        path: '/watches/:id',
        loader: () => fetch('/Products/watches.json'),
        element: <Watches />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/userProfile',
        element: <Profile/>
      },
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
