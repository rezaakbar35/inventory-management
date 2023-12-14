import React, { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar.jsx";
import "./Admin_Dashboard.css";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import SortSearchGroup from "../components/SortSearchGroup";
import TableComplaints from "../components/TableComplaints";
import { useNavigate } from "react-router-dom";
import AdminToWarehouseIssueForm from "../components/forms/AdminToWarehouseIssueForm.jsx";
import AdminToNotifyUserForm from "../components/forms/AdminToNotifyUserForm.jsx";
import ManageWarehouse from "../assets/ManageWarehouse.png"
import ManageProduct from "../assets/ManageProduct.png"
import ManageComplain from "../assets/ManageComplain.png"

const Admin_Complaints = () => {
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
  const handleCloseNotifyAdmin = () => setShowNotifyAdmin(false);

  const [showIssueComplaint, setShowIssueComplaint] = useState(false);
  const handleCloseIssueComplaint = () => setShowIssueComplaint(false);

  return (
    <div className="dashboardContainer bg-background flex overflow-hidden">
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
              <h1 className="text-black font-semibold text-4xl">Complaints</h1>
            </div>
            <div>
              <button
                onClick={() => setShowIssueComplaint(true)}
                className="py-3 px-6 font-semibold drop-shadow-lg bg-tertiary rounded-full hover:bg-primary/50"
              >
                <p className="p-2 text-white">
                  Notify User on Complaint Ticket
                </p>
              </button>
              <button
                onClick={() => setShowNotifyAdmin(true)}
                className="py-3 px-6 m-10 font-semibold drop-shadow-lg bg-tertiary rounded-full hover:bg-primary/50"
              >
                <p className="p-2 text-white">
                  Issue Notification to Warehouse
                </p>
              </button>
            </div>
          </div>
          <div className="flex bg-white mr-10 drop-shadow-xl rounded-2xl">
            <SortSearchGroup />
          </div>
          <div className="p-5 my-10 mr-10 bg-tertiary rounded-3xl row-span-6 drop-shadow-xl">
            <TableComplaints />
          </div>
        </div>
      </div>
      <AdminToWarehouseIssueForm
        onClose={handleCloseNotifyAdmin}
        visible={showNotifyadmin}
      />
      <AdminToNotifyUserForm
        onClose={handleCloseIssueComplaint}
        visible={showIssueComplaint}
      />
    </div>
  );
};
export default Admin_Complaints;
