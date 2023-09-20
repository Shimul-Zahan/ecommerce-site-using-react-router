import React from 'react'
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
        path: '/sunglass',
        loader: () => fetch('/Products/sunglass.json'),
        element: <Sunglasses />
      },
      {
        path: '/watches',
        loader: () => fetch('/Products/watches.json'),
        element: <Watches />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
