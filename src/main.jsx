import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AllProduct from './Components/AllProduct/AllProduct.jsx';
import Books from './Components/AllProduct/Books/Books.jsx';
import Sunglass from './Components/AllProduct/Sunglass/Sunglass.jsx';
import Watches from './Components/AllProduct/Watches/Watches.jsx';

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
        path: '/book',
        loader: () => fetch('/public/Products/book.json'),
        element: <Books />
      },
      {
        path: '/sunglass',
        loader: () => fetch('/public/Products/sunglass.json'),
        element: <Sunglass />
      },
      {
        path: '/watches',
        loader: () => fetch('/public/Products/watches.json'),
        element: <Watches />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
