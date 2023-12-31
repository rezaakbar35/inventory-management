import React, { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Warehouse_Dashboard.css";
import SortSearchGroup from "../components/SortSearchGroup";
import TableProductShippingWarehouse from "../components/TableProductShippingWarehouse";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import NotifyUserForm from "../components/forms/NotifyUserForm";
import OutgoingProduct from "../assets/OutgoingProduct.png"
import ProductStock from "../assets/ProductStock.png"

const Warehouse_Outgoing = () => {
  const navigate = useNavigate()
  const linkTitles = ["Warehouse Product Stocks", "Outgoing Products"];
  const links = [
    "/warehouseDash/Stocks", //warehouse
    "/warehouseDash/Outgoing", //productSent
  ];
  const image = [ProductStock, OutgoingProduct]
  const numOfShownLinks = 2;
  const handleBack = () => {
    navigate("/warehouseDash");
  };

  const [showNotifyWarehouse, setShowNotifyWarehouse] = useState(false)
  const [searchValue, setSearchValue] = useState('');

  const handleCloseNotify = () => {
    setShowNotifyWarehouse(false)
  }

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="dashboardContainer flex overflow-hidden">
      <div className="z-40">
        <DashboardSidebar
          numOfLinks={numOfShownLinks}
          linkTitles={linkTitles}
          links={links}
          image={image}
        />
      </div>
      <div className="pl-24 bg-background contentContainer">
        <div className="grid grid-rows-8 h-screen">
          <div className="flex justify-between self-center">
            <div className="bg-white py-3 pl-3 pr-10 rounded-[16px] drop-shadow-lg flex self-center">
              <button onClick={handleBack}>
                <ChevronLeftIcon className="w-6 h-6 mr-4 stroke-gray-400 text-gray-400 self-center" />
              </button>
              <h1 className="text-black font-semibold text-4xl">
                Outgoing Products
              </h1>
            </div>
          </div>
          <div className="flex bg-white mr-10 drop-shadow-xl rounded-2xl">
            <SortSearchGroup onSearchChange={handleSearchChange} />
          <button onClick={() => setShowNotifyWarehouse(true)} className="m-4 px-6 font-semibold drop-shadow-lg bg-tertiary rounded-full hover:bg-primary/50">
                Notify User
          </button>
          </div>
          <div className="p-5 my-10 mr-10 bg-tertiary rounded-3xl row-span-6 drop-shadow-xl">
            <TableProductShippingWarehouse searchValue={searchValue} />
          </div>
        </div>
      </div>
      <NotifyUserForm visible={showNotifyWarehouse} onClose={handleCloseNotify} />
    </div>
  );
};

export default Warehouse_Outgoing;
