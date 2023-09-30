import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router';
import MyContextAPI from './Context/MyContextAPI';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContextAPI>
      <RouterProvider router={router} />
    </MyContextAPI>
  </React.StrictMode>
)
