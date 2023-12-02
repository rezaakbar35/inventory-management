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
import Admin_Products from './pages/Admin_Products.jsx';
import Admin_Complaints from './pages/Admin_Complaints.jsx';
import Admin_Warehouses from './pages/Admin_Warehouses.jsx';
import Warehouse_Stocks from './pages/Warehouse_Stocks.jsx';
import Warehouse_Outgoing from './pages/Warehouse_Outgoing.jsx';
import User_Purchased_Item from './pages/User_Purchased_Item.jsx';
import User_Setting_Account from './pages/User_Setting_Account.jsx';
import User_View_Complain from './pages/User_View_Complain.jsx';

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
    path:"/AdminDash/Products",
    element: <Admin_Products/>,
  },
  {
    path:"/AdminDash/Complaints",
    element: <Admin_Complaints/>,
  },
  {
    path:"/AdminDash/Warehouses",
    element: <Admin_Warehouses/>,
  },
  {
      path:"/WarehouseDash",
      element: <Warehouse_Dashboard/>,
  },
  {
    path:"/WarehouseDash/Stocks",
    element: <Warehouse_Stocks/>,
  },
  {
    path:"/WarehouseDash/Outgoing",
    element: <Warehouse_Outgoing/>,
  },
  {
      path:"/UsersDash",
      element: <User_Dashboard/>,
  },
  {
    path:"/UsersDash/Items",
    element: <User_Purchased_Item/>,
  },
  {
    path:"/UsersDash/Setting",
    element: <User_Setting_Account/>,
  },
  {
    path:"/UsersDash/Complaints",
    element: <User_View_Complain/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
