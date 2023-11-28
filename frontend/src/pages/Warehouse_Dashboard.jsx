import React from 'react'
import DashboardSidebar from '../components/dashboardSidebar'

const Warehouse_Dashboard = () => {
    const linkTitles = [
        "Warehouse Product Stocks",
        "Outgoing Products",
    ];
    const links = [
        '/warehouseStocks', //warehouse
        '/warehouseOutgoing' //productSent
    ];
    const numOfShownLinks = 3;

  return (
    <div className='flex'>
        <DashboardSidebar numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
    </div>
  )
}

export default Warehouse_Dashboard
