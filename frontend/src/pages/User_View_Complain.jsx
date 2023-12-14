import React, { useState } from "react";
import DashboardSidebarAlt from "../components/DashboardSidebarAlt";
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import SortSearchGroup from "../components/SortSearchGroup";
import TableNotification from "../components/TableUserComplain";
import NotifyAdminForm from "../components/forms/NotifyAdminForm";
import { useNavigate } from 'react-router-dom'

const User_View_Complain = () => {
  const navigate = useNavigate();
  const linkTitles = ["Purchased Items", "View Complaints", "Account Settings"];
  const links = [
    "/UsersDash/Items",
    "/UsersDash/Complaints",
    "/UsersDash/Setting",
  ];
  const numOfShownLinks = 3;

  const handleBack = () => {
    navigate("/UsersDash")
}
  const [showForm, setShowForm] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleOnClose = () => setShowForm(false);
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <div className="dashboardContainer flex overflow-hidden">
        <div className="z-40">
        <DashboardSidebarAlt
          numOfLinks={numOfShownLinks}
          linkTitles={linkTitles}
          links={links}
        />
        </div>
        <div className="bg-background contentContainer pl-24">
          <div className="grid grid-rows-8 h-screen">
            <div className="flex justify-between self-center">
              <div className='bg-white py-3 pl-3 pr-10 rounded-[16px] drop-shadow-lg flex self-center'>
                    <button onClick={handleBack}>
                    <ChevronLeftIcon className="w-6 h-6 mr-4 stroke-gray-400 text-gray-400 self-center"/>
                    </button>
                    <h1 className='text-black font-semibold text-4xl'>Complaints</h1>
                </div>
              <button onClick={() => setShowForm(true)} className='py-4 px-8 m-10 font-semibold drop-shadow-lg bg-primary rounded-full hover:bg-primary/50' >
                New Complaint
              </button>
            </div>
            <div className="flex bg-white mr-10 drop-shadow-xl rounded-2xl">
                <SortSearchGroup onSearchChange={handleSearchChange} />
            </div>
            <div className="p-5 my-10 mr-10 bg-primary rounded-3xl row-span-6 drop-shadow-xl">
                <TableNotification searchValue={searchValue} />
            </div>
          </div>
        </div>
        <NotifyAdminForm onClose={handleOnClose} visible={showForm}/>
      </div>
    </>
  );
};

export default User_View_Complain;
