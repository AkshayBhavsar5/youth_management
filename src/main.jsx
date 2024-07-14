import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Register from './components/Register/Register.jsx'
import DataFeed from './components/DataFeed/DataFeed.jsx'
import Login from './components/Login/Login.jsx'
import BarChat from './components/BarChat/BarChat.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      { path :"",
        element:<BarChat/>
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path:"DataFeed",
        element:<DataFeed />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
