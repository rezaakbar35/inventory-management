import React from 'react'
import DashboardSidebar from '../components/dashboardSidebar'
import './Admin_Dashboard.css'
// import TableWarehouse from '../components/TableWarehouse'
import TableProduct from '../components/TableProduct'
import SortSearchGroup from '../components/SortSearchGroup';

const Admin_Products = () => {
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
    <div className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebar numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='bg-background contentContainer flex px-20'>
            <div className='contentSide'>
            <h1 className='text-displayText mt-[10px] mb-14'>Products</h1>
            <SortSearchGroup/>
            </div>
           <TableProduct/>
           
        </div>
    </div>
  );
}
;
export default Admin_Products;
