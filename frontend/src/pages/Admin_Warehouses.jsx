import React, { useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar';
import './Admin_Dashboard.css'
import SortSearchGroup from '../components/SortSearchGroup';
import NotifyAdminForm from '../components/forms/NotifyAdminForm';
import TableWarehouse from '../components/TableWarehouse';
import AddWarehouseForm from '../components/forms/AddWarehouseForm';
import AddWarehouseCategoryForm from '../components/forms/AddWarehouseCategoryForm';


const Admin_Warehouses = () => {
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

    const [showNotifyadmin, setShowNotifyAdmin] = useState(false)
    const [showProductPopup, setShowProductPopup] = useState(false);
    const [showWarehouseCategoryPopup, setShowWarehouseCategoryPopup] = useState(false)

    const handleCloseNotifyAdmin = () => setShowNotifyAdmin(false)
    const handleCloseWarehouse = () => setShowProductPopup(false)
    const handleCloseWarehoseCategory = () => setShowWarehouseCategoryPopup (false)

  return (
    <div className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebar numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='pl-[100px] bg-background contentContainer flex px-20'>
            <div className='contentSide'>
            <h1 className='text-displayText mt-[10px] mb-14'>Warehouses</h1>
            <SortSearchGroup/>
            <button onClick={() => setShowWarehouseCategoryPopup(true)} className='flex text-sm w-72 p-2 mb-4 bg-tertiary rounded-full hover:bg-primary/50'>
                <p className='p-2'>Add New Category Warehouse</p>
                </button>

            <button onClick={() => setShowProductPopup(true)} className='flex p-2 w-72 mb-[450px] bg-tertiary rounded-full hover:bg-primary/50'>
                <p className='p-2'>Add New Warehouse</p>
                </button>
            <button onClick={() => setShowNotifyAdmin(true)} className='flex p-2 w-72 bg-primary text-black rounded-full hover:bg-primary/50'>
            <p className='p-2 text-black'>Issue Notification to Warehouse</p>
            </button>
            </div>
            <div className='m-20'>
           <TableWarehouse/>
           </div>
        </div>
        <AddWarehouseForm visible={showProductPopup} onClose={handleCloseWarehouse} />
        <NotifyAdminForm onClose={handleCloseNotifyAdmin} visible={showNotifyadmin}/>
        <AddWarehouseCategoryForm onClose={handleCloseWarehoseCategory} visible={showWarehouseCategoryPopup} />
    </div>
  );
}
;
export default Admin_Warehouses;
