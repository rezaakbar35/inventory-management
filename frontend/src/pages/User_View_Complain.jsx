import React, { useState } from "react";
import DashboardSidebarAlt from "../components/DashboardSidebarAlt";
import ManageProductForm from "../components/forms/ManageProductForm";
import SortSearchGroup from "../components/SortSearchGroup";
import TableNotification from "../components/TableUserComplain";
import NotifyAdminForm from "../components/forms/NotifyAdminForm";

const User_View_Complain = () => {
  const linkTitles = ["Purchased Items", "View Complaints", "Account Settings"];
  const links = [
    "/UsersDash/Items",
    "/UsersDash/Complaints",
    "/UsersDash/Setting",
  ];
  const numOfShownLinks = 3;

  const [showForm, setShowForm] = useState(false);
  const handleOnClose = () => setShowForm(false);

  return (
    <>
      <div className="dashboardContainer flex overflow-hidden">
        <DashboardSidebarAlt
          numOfLinks={numOfShownLinks}
          linkTitles={linkTitles}
          links={links}
        />
        <div className="bg-background contentContainer">
          <div className="grid grid-cols-8">
            <div className="contentSide col-span-2">
              <h1 className="text-black mb-14">Complains</h1>
              <SortSearchGroup />
              <button onClick={() => setShowForm(true)} className='p-2 m-10 bg-primary rounded-lg hover:bg-primary/50' >
                New Complaint
              </button>
            </div>
            <div className="col-span-6">
                <TableNotification />
            </div>
          </div>
        </div>
        <NotifyAdminForm onClose={handleOnClose} visible={showForm}/>
      </div>
    </>
  );
};

export default User_View_Complain;
