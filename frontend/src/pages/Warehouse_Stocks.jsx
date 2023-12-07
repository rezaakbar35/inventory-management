import React from 'react'
import DashboardSidebar from '../components/dashboardSidebar'
import './Warehouse_Dashboard.css'
import SortSearchGroup from '../components/SortSearchGroup'

const Warehouse_Stocks = () => {
    const linkTitles = [
        "Warehouse Product Stocks",
        "Outgoing Products",
    ];
    const links = [
        '/warehouseDash/Stocks', //warehouse
        '/warehouseDash/Outgoing' //productSent
    ];
    const numOfShownLinks = 2;

  return (
    <div className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebar numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='pl-[100px] bg-background contentContainer'>
        <div className='contentSide'>
            <h1 className='text-displayText mt-[10px] mb-14'>Product Stock</h1>
            <SortSearchGroup/>
            </div>
        </div>
    </div>
  )
}

export default Warehouse_Stocks
