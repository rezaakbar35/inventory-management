import React from 'react'
import DashboardSidebarAlt from '../components/DashboardSidebarAlt'
import './User_Dashboard.css'

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

  return (
    <div className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebarAlt  numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='bg-background contentContainer'>
            <h1>hi</h1>
        </div>
    </div>
  )
}

export default User_Dashboard
