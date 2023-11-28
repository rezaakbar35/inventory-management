import React from 'react'
import DashboardSidebar from '../components/dashboardSidebar'
import './Admin_Dashboard.css'

const Admin_Dashboard = () => {
    const linkTitles = [
        "Manage Products",
        "Manage Warehouses",
        "Manage Complaints"
    ];
    const links = [
        '/Products',
        '/Warehouses',
        '/Complaints'
    ];
    const numOfShownLinks = 3;

  return (
    <div className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebar numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='bg-background contentContainer'>
            <h1>hi</h1>
        </div>
    </div>
  )
}

export default Admin_Dashboard
