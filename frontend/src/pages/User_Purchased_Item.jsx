import React, { useState } from 'react'
import DashboardSidebarAlt from '../components/DashboardSidebarAlt'
import './User_Dashboard.css'
import ManageProductForm from "../components/forms/ManageProductForm"
import SortSearchGroup from '../components/SortSearchGroup'
import TableUserProduct from '../components/TableUserProduct'

const User_Purchased_Item = () => {
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
    <div className='grid grid-col-12'>
    <div className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebarAlt  numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='bg-background contentContainer pl-16'>
        <div className="grid grid-cols-8">
            <div className='col-span-2'>
            <h1 className='text-black mb-14'>Purchased Items</h1>
            <SortSearchGroup />
            </div>
            <div className='col-span-6'>
            <TableUserProduct/>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default User_Purchased_Item
