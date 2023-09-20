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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/all',
        loader: () => fetch('/public/Products/allProduct.json'),
        element: <AllProduct />
      },
      {
        path: '/courses',
        loader: () => fetch('/public/Products/courses.json'),
        element: <Courses />
      },
      {
        path: '/book',
        loader: () => fetch('/public/Products/book.json'),
        element: <Books />
      },
      {
        path: '/sunglass',
        loader: () => fetch('/public/Products/sunglass.json'),
        element: <Sunglasses />
      },
      {
        path: '/watches',
        loader: () => fetch('/public/Products/watches.json'),
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
