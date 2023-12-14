import React, { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Admin_Dashboard.css";
import SortSearchGroup from "../components/SortSearchGroup";
import TableWarehouse from "../components/TableWarehouse";
import AddWarehouseForm from "../components/forms/AddWarehouseForm";
import EditWarehouseForm from "../components/forms/EditWarehouseForm";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import AddWarehouseCategoryForm from "../components/forms/AddWarehouseCategoryForm";
import AdminToWarehouseIssueForm from "../components/forms/AdminToWarehouseIssueForm";
import ManageWarehouse from "../assets/ManageWarehouse.png"
import ManageProduct from "../assets/ManageProduct.png"
import ManageComplain from "../assets/ManageComplain.png"

const Admin_Warehouses = () => {
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
  const image = [ManageProduct, ManageComplain, ManageWarehouse];
  const numOfShownLinks = 3;
  const handleBack = () => {
    navigate("/AdminDash");
  };

  const [showNotifyadmin, setShowNotifyAdmin] = useState(false);
  const [showProductPopup, setShowProductPopup] = useState(false);
  const [editWarehouse, setEditWarehouse] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showWarehouseCategory,setShowWarehouseCategory]=useState(false);

  const handleCloseNotifyAdmin = () => setShowNotifyAdmin(false);
  const handleCloseWarehouse = () => setShowProductPopup(false);
  const handleCloseWarehoseCategory = () => setShowWarehouseCategory(false);

  const handleEditWarehouse = (warehouse) => {
    setEditWarehouse(warehouse);
    setShowEditForm(true);
  }

  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = (value) => {
    setSearchValue(value);
  }

  return (
    <div className="dashboardContainer flex overflow-hidden">
      <div className="z-40">
      <DashboardSidebar
        numOfLinks={numOfShownLinks}
        linkTitles={linkTitles}
        links={links}
        image={image}
      />

      {showEditForm && (
            <EditWarehouseForm
              visible={showEditForm}
              warehouse={editWarehouse}
              onClose={() => {
                setShowEditForm(false);
                setEditWarehouse(null);
              }}
              onEditSuccess={() => {
                setShowEditForm(false);
                setEditWarehouse(null);
                // fetchData();
              }}
            />
          )}
      </div>
      <div className="pl-24 bg-background contentContainer">
        <div className="grid grid-rows-8 h-screen">
        <div className="flex justify-between self-center">
          <div className="bg-white py-3 pl-3 pr-10 rounded-[16px] drop-shadow-lg flex self-center">
          <button onClick={handleBack}>
                <ChevronLeftIcon className="w-6 h-6 mr-4 stroke-gray-400 text-gray-400 self-center" />
              </button>
          <h1 className="text-black font-semibold text-4xl">Warehouses</h1>
          </div>
          <div>
          <button
            onClick={() => setShowProductPopup(true)}
            className="py-3 px-6 font-semibold drop-shadow-lg bg-tertiary rounded-full hover:bg-primary/50"
          >
            <p className="p-2">Add New Warehouse</p>
          </button>
          <button
                onClick={() => setShowWarehouseCategory(true)}
                className="py-3 px-6 m-10 font-semibold drop-shadow-lg bg-tertiary rounded-full hover:bg-primary/50"
              >
                <p className="p-2">Add New Category Warehouse</p>
              </button>
          <button
            onClick={() => setShowNotifyAdmin(true)}
            className="py-3 px-6 m-10 font-semibold drop-shadow-lg bg-tertiary rounded-full hover:bg-primary/50"
          >
            <p className="p-2">Issue Notification to Warehouse</p>
          </button>
          </div>
          </div>
        <div className="flex bg-white mr-10 drop-shadow-xl rounded-2xl">
          <SortSearchGroup onSearchChange={handleSearchChange} />
        </div>
        <div className="p-5 my-10 mr-10 bg-tertiary rounded-3xl row-span-6 drop-shadow-xl">
          <TableWarehouse setShowEditForm={setShowEditForm}  setEditWarehouse={setEditWarehouse} onEdit={handleEditWarehouse} searchValue={searchValue} />
        </div>
        </div>
      </div>
      <AddWarehouseForm
        visible={showProductPopup}
        onClose={handleCloseWarehouse}
      />
      <AdminToWarehouseIssueForm
        onClose={handleCloseNotifyAdmin}
        visible={showNotifyadmin}
      />
      <AddWarehouseCategoryForm
      visible={showWarehouseCategory}
      onClose={handleCloseWarehoseCategory}/>
    </div>
  );
};
export default Admin_Warehouses;