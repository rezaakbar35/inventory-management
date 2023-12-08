import React, { useState } from 'react'
import DashboardSidebar from '../components/dashboardSidebar'
import './Admin_Dashboard.css'
// import TableWarehouse from '../components/TableWarehouse'
import TableProduct from '../components/TableProduct'
import TableProductShipping from '../components/TableProductShipping'
import SortSearchGroup from '../components/SortSearchGroup';
import ManageProductForm from '../components/forms/ManageProductForm';
import AddProductForm from '../components/forms/AddProductForm';

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

    const [showManageProduct, setShowManageProduct] = useState(false);
    const [showProductPopup, setShowProductPopup] = useState(false);
    const [showProductShipping, setShowProductShipping] = useState(false);

    const handleCloseManageProduct = () => setShowManageProduct(false)
    const handleOnClose = () => setShowProductPopup(false);
    const handleShowOutgoing = () => setShowProductShipping(true);

  return (
    <div className='dashboardContainer flex overflow-hidden'>
        <DashboardSidebar numOfLinks={numOfShownLinks} linkTitles={linkTitles} links={links}/>
        <div className='pl-[100px] bg-background contentContainer flex'>
            <div className='contentSide'>
            <h1 className='text-displayText mt-[10px] mb-14'>Products</h1>
            <SortSearchGroup/>
            <button onClick={() => setShowProductPopup(true)} className='flex text-sm w-72 p-2 mb-4 bg-tertiary rounded-full hover:bg-primary/50'>
                <p className='p-2'>Add New Product</p>
                </button>
            <button onClick={handleShowOutgoing} className='flex text-sm w-72 p-2 mb-4 bg-tertiary rounded-full hover:bg-primary/50'>
                <p className='p-2'>Show Outgoing Product</p>
                </button>
            <button onClick={() => setShowManageProduct(true)} className='flex text-sm w-72 p-2 bg-primary rounded-full hover:bg-primary/50'>
                <p className='p-2 text-black'>Issue Product Management</p>
            </button>
            </div>
            <div className='mt-20 ml-28'>
           {showProductShipping ? <TableProductShipping /> : <TableProduct/>}
           </div>
        </div>
        <ManageProductForm onClose={handleCloseManageProduct} visible={showManageProduct}/>

        <AddProductForm visible={showProductPopup} onClose={handleOnClose} />
    </div>
  );
}
;
export default Admin_Products;
