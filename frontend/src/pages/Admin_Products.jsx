import React, { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar.jsx";
import "./Admin_Dashboard.css";
// import TableWarehouse from '../components/TableWarehouse'
import TableProduct from "../components/TableProduct";
import TableProductShipping from "../components/TableProductShipping";
import SortSearchGroup from "../components/SortSearchGroup";
import ManageProductForm from "../components/forms/ManageProductForm";
import AddProductForm from "../components/forms/AddProductForm";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Admin_Products = () => {
  const navigate = useNavigate();
  const linkTitles = [
    "Manage Products",
    "Manage Warehouses",
    "Manage Complaints",
  ];
  const links = [
    "/AdminDash/Products",
    "/AdminDash/Warehouses",
    "/AdminDash/Complaints",
  ];
  const numOfShownLinks = 3;
  const handleBack = () => {
    navigate("/AdminDash");
  };

  const [showManageProduct, setShowManageProduct] = useState(false);
  const [showProductPopup, setShowProductPopup] = useState(false);
  const [showProductShipping, setShowProductShipping] = useState(false);

  const handleCloseManageProduct = () => setShowManageProduct(false);
  const handleOnClose = () => setShowProductPopup(false);
  const handleShowOutgoing = () => setShowProductShipping(true);

  return (
    <div className="dashboardContainer flex overflow-hidden">
      <div className="z-40">
        <DashboardSidebar
          numOfLinks={numOfShownLinks}
          linkTitles={linkTitles}
          links={links}
        />
      </div>
      <div className="pl-24 bg-background contentContainer">
        <div className="grid grid-rows-8 h-screen">
          <div className="flex justify-between self-center">
            <div className="bg-white py-3 pl-3 pr-10 rounded-[16px] drop-shadow-lg flex self-center">
              <button onClick={handleBack}>
                <ChevronLeftIcon className="w-6 h-6 mr-4 stroke-gray-400 text-gray-400 self-center" />
              </button>
              <h1 className="text-black font-semibold text-4xl">Products</h1>
            </div>
            <div>
              <button
                onClick={() => setShowProductPopup(true)}
                className="py-3 px-6 m-10 font-semibold drop-shadow-lg bg-tertiary rounded-full hover:bg-primary/50"
              >
                <p className="p-2">Add New Product</p>
              </button>
              <button
                onClick={handleShowOutgoing}
                className="py-3 px-6 font-semibold drop-shadow-lg bg-tertiary rounded-full hover:bg-primary/50"
              >
                <p className="p-2">Show Outgoing Product</p>
              </button>
              <button
                onClick={() => setShowManageProduct(true)}
                className="py-3 px-6 m-10 font-semibold drop-shadow-lg bg-tertiary rounded-full hover:bg-primary/50"
              >
                <p className="p-2">Issue Product Management</p>
              </button>
            </div>
          </div>

          <div className="flex bg-white mr-10 drop-shadow-xl rounded-2xl">
            <SortSearchGroup />
          </div>
          <div className="p-5 my-10 mr-10 bg-tertiary rounded-3xl row-span-6 drop-shadow-xl">
            {showProductShipping ? <TableProductShipping /> : <TableProduct />}
          </div>
        </div>
      </div>
      <ManageProductForm
        onClose={handleCloseManageProduct}
        visible={showManageProduct}
      />

      <AddProductForm visible={showProductPopup} onClose={handleOnClose} />
    </div>
  );
};
export default Admin_Products;
