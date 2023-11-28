import React from 'react'
import ReactDOM from 'react-dom/client'

import{
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

import App from './App.jsx';
import './index.css'
import Admin_Dashboard from './pages/Admin_Dashboard';
import Warehouse_Dashboard from './pages/Warehouse_Dashboard';
import User_Dashboard from './pages/User_Dashboard';

const router = createBrowserRouter([
  {
      path:"/",
      element: <App/>,
  },
  {
      path:"/AdminDash",
      element: <Admin_Dashboard/>,
  },
  {
      path:"/WarehouseDash",
      element: <Warehouse_Dashboard/>,
  },
  {
      path:"/UsersDash",
      element: <User_Dashboard/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
