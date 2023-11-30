import React, { useState } from 'react'
import DashboardSidebarAlt from '../components/DashboardSidebarAlt'
import './User_Dashboard.css'
import FormModal from "../components/FormModal"

const User_Dashboard = () => {
    const linkTitles = [
        "Purchased Items",
        "View Complaints",
        "Account Settings"
    ];
    const links = [
        '/userPurchases',
        '/userComplaints',
        '/userSettings'
    ];
    const numOfShownLinks = 3;

    const [showForm, setShowForm] = useState(false)
    const handleOnClose = () => setShowForm(false)

  return (
    <>
    <div className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebarAlt  numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='bg-background contentContainer'>
            <button onClick={() => setShowForm(true)} className='p-2 m-10 bg-primary rounded-lg hover:bg-primary/50'>
                <p>Click Me!</p>
            </button>
            <h1>hi</h1>
        </div>
        <FormModal onClose={handleOnClose} visible={showForm}/>
    </div>
    
    </>
  )
}

export default User_Dashboard
