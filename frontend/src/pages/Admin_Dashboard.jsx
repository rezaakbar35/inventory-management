import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar.jsx'
import './Admin_Dashboard.css'
// import TableWarehouse from '../components/TableWarehouse'
import TableProduct from '../components/TableProduct'

const Admin_Dashboard = () => {
    const linkTitles = [
        "Manage Products",
        "Manage Warehouses",
        "Manage Complaints"
    ];
    const links = [
        '/AdminDash/Products',
        '/AdminDash/Warehouses',
        '/AdminDash/Complaints'
    ];
    const numOfShownLinks = 3;

  return (
    <div
    className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebar numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='pl-[100px] bg-background contentContainer'>
           <h1 className='text-displayText'>Hello Admin! Please select an Activity.</h1>
        </div>
    </div>
  )
}

export default Admin_Dashboard
