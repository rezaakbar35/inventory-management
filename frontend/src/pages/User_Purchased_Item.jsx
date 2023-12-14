import React, { useState } from 'react'
import DashboardSidebarAlt from '../components/DashboardSidebarAlt'
import './User_Dashboard.css'
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import SortSearchGroup from '../components/SortSearchGroup'
import TableUserProduct from '../components/TableUserProduct'
import { useNavigate } from 'react-router-dom'

const User_Purchased_Item = () => {
    const navigate = useNavigate();
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

    const handleBack = () => {
        navigate("/UsersDash")
    }

    const [showForm, setShowForm] = useState(false)
    const handleOnClose = () => setShowForm(false)

    const [searchValue, setSearchValue] = useState('');
    const handleSearchChange = (value) => {
      setSearchValue(value);
    }

  return (
    <>
    <div className='grid grid-col-12'>
    <div className='dashboardContainer flex overflow-hidden'>
        <div className='z-50'>
        <DashboardSidebarAlt  numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        </div>
        <div className='bg-background contentContainer pl-24'>
        <div className="grid grid-rows-8 h-screen">
            <div className='flex justify-between self-center'>
                <div className='bg-white py-3 pl-3 pr-10 rounded-[16px] drop-shadow-lg flex'>
                    <button onClick={handleBack}>
                    <ChevronLeftIcon className="w-6 h-6 mr-4 stroke-gray-400 text-gray-400 self-center"/>
                    </button>
                    <h1 className='text-black font-semibold text-4xl'>Purchased Items</h1>
                </div>
            </div>
            <div className='flex bg-white mr-10 drop-shadow-xl rounded-2xl'>
            <SortSearchGroup onSearchChange={handleSearchChange} />
            </div>
            <div className='p-5 my-10 mr-10 bg-primary rounded-3xl row-span-6 drop-shadow-xl'>
            <TableUserProduct searchValue={searchValue} />
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default User_Purchased_Item
