import React, { useState } from 'react'

import DashboardSidebarAlt from '../components/DashboardSidebarAlt'
import './User_Dashboard.css'
import SendProductForm from "../components/forms/SendProductForm"
import SortSearchGroup from '../components/SortSearchGroup'

const User_Dashboard = () => {
    const linkTitles = [
        "Purchased Items",
        "View Complaints",
        "Account Settings"
    ];
    const links = [
        '/UsersDash/Items',
        '/UsersDash/Complaints',
        '/UsersDash/Setting'
    ];
    const numOfShownLinks = 3;

    const [showForm, setShowForm] = useState(false)
    const handleOnClose = () => setShowForm(false)
    

  return (
    <>
    <div className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebarAlt  numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='bg-background contentContainer'>
            <div className='contentSide'>
            <h1 className='text-displayText mt-[10px] mb-14'>Welcome User Dashboard</h1>
            <SortSearchGroup/>
            <button onClick={() => setShowForm(true)} className='p-2 m-10 bg-primary rounded-lg hover:bg-primary/50'>
                <p>Manage Product</p>
            </button>
            </div>
        </div>
        <SendProductForm onClose={handleOnClose} visible={showForm}/>
    </div>
    </>
  )
}

export default User_Dashboard
