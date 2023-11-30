import React from 'react'
import DashboardSidebar from '../components/dashboardSidebar'
import './Warehouse_Dashboard.css'

const Warehouse_Dashboard = () => {
    const linkTitles = [
        "Warehouse Product Stocks",
        "Outgoing Products",
    ];
    const links = [
        '/warehouseStocks', //warehouse
        '/warehouseOutgoing' //productSent
    ];
    const numOfShownLinks = 2;

  return (
    <div className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebar numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='bg-background contentContainer'>
            <h1>hi</h1>
        </div>
    </div>
  )
}

export default Warehouse_Dashboard