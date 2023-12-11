import React, { useState, useEffect } from "react";
import DashboardSidebarAlt from "../components/DashboardSidebarAlt";
import "./User_Dashboard.css";
import { jwtDecode } from "jwt-decode"
import { getUserSpecific } from "../modules/fetch/index"

const User_Setting_Account = () => {
  const linkTitles = ["Purchased Items", "View Complaints", "Account Settings"];
  const links = [
    "/UsersDash/Items",
    "/UsersDash/Complaints",
    "/UsersDash/Setting",
  ];
  const numOfShownLinks = 3;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const user = await checkuser();
        setData(user);
        
      } catch (error) {
        console.error("Error fetching data:", error.response || error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let specificUser;

  const checkuser = async () => {
    try {
      const userToken = window.localStorage.getItem("token");
      if (!userToken) {
        console.error("Token is missing");
        throw new Error("Unauthorized");
      }

      let decodedToken;
      try {
        decodedToken = jwtDecode(userToken);
      } catch (error) {
        console.error("Invalid or expired token:", error);
        throw new Error("Unauthorized");
      }

      const user = await getUserSpecific(decodedToken.userId);
      specificUser = user.user;
      return specificUser;
    } catch (err) {
      console.error(err);
      throw new Error("Internal Server Error");
    }
  };

  const [showShippingSetting, setShippingSetting] = useState(false);
  const hideShippingSetting = () => setShippingSetting(false);

  return (
    <>
      <div className="dashboardContainer flex overflow-hidden">
        <DashboardSidebarAlt
          numOfLinks={numOfShownLinks}
          linkTitles={linkTitles}
          links={links}
        />
        <div className="bg-background contentContainer h-screen grid grid-rows-8 grid-cols-4 pl-16 grid-flow-col">
          <div className=" border-b-2 border-gray-300 flex items-center col-span-4">
            <h1 className="text-black ml-5 font-bold text-[42px]">
              User Profile
            </h1>
          </div>
          <div className="border-gray-300 border-r-2 row-span-7 h-auto my-12">
            <div className="flex justify-end m-5">
              <h1
                className={`text-black font-normal text-2xl ${
                  !showShippingSetting ? "font-semibold" : "hover:font-medium"
                } 
                    cursor-pointer`}
                onClick={hideShippingSetting}
              >
                General
              </h1>
            </div>
            <div className="flex justify-end m-5">
              <h1
                className={`text-black font-normal text-2xl ${
                  showShippingSetting ? "font-semibold" : "hover:font-medium"
                } 
                    cursor-pointer`}
                onClick={() => setShippingSetting(true)}
              >
                Security
              </h1>
            </div>
          </div>
          <div className="row-span-7 col-span-3">
            {showShippingSetting ? (
              <div className="flex justify-start w-auto m-auto">
                <form className="mx-24 my-12">
                  <div className="grid grid-cols-2 mt-5">
                    <div className="flex justify-start col-span-2">
                      <h1 className="text-black font-semibold text-3xl">
                        Change Password
                      </h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 mt-5">
                    <div className="flex justify-start col-span-2">
                      <label
                        htmlFor="password"
                        className="text-black cols-span-2 italic font-light pl-2"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="rounded-xl text-black p-2 m-1 col-span-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 mt-5">
                    <div className="flex justify-start col-span-2">
                      <label
                        htmlFor="confirm_password"
                        className="text-black cols-span-2 italic font-light pl-2"
                      >
                        Confirm Password*
                      </label>
                    </div>
                    <input
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      defaultValue=""
                      className="rounded-xl text-black p-2 m-1 col-span-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 mt-5">
                    <div className="flex justify-start col-span-2">
                      <p className="text-black cols-span-2 italic font-light pl-2">
                        *Please re-enter your password for confirmation.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 mt-20">
                    <div className="flex justify-end col-span-2">
                      <button
                        className="bg-primary rounded-full p-3 font-semibold hover:bg-orange-400"
                        type="submit"
                      >
                        Save Change
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div className="flex justify-start w-auto m-auto">
                <form className="mx-24 my-12">
                  <div className="grid grid-cols-2 mt-4">
                    <div className="flex justify-start col-span-2">
                      <h1 className="text-black font-semibold text-3xl">
                        General Setting
                      </h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 mt-5">
                    <div className="flex justify-start col-span-2">
                      <label
                        htmlFor="first_name"
                        className="text-black cols-span-2 italic font-light pl-2"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="flex justify-start col-span-2 ">
                      <label
                        htmlFor="last_name"
                        className="text-black cols-span-2 italic font-light pl-2"
                      >
                        Last Name
                      </label>
                    </div>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      defaultValue={data.first_name}
                      className="rounded-xl text-black p-2 m-1 col-span-2"
                    />
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      defaultValue={data.last_name}
                      className="rounded-xl text-black p-2 m-1 col-span-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 mt-5">
                    <div className="flex justify-start col-span-2">
                      <label
                        htmlFor="username"
                        className="text-black cols-span-2 italic font-light pl-2"
                      >
                        Username
                      </label>
                    </div>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      defaultValue={data.username}
                      className="rounded-xl text-black p-2 m-1 col-span-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 mt-5">
                    <div className="flex justify-start col-span-2">
                      <label
                        htmlFor="user_email"
                        className="text-black cols-span-2 italic font-light pl-2"
                      >
                        Email
                      </label>
                    </div>
                    <input
                      type="text"
                      name="user_email"
                      id="user_email"
                      defaultValue={data.email}
                      className="rounded-xl text-black p-2 m-1 col-span-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 mt-5">
                    <div className="flex justify-start col-span-2">
                      <label
                        htmlFor="user_address"
                        className="text-black cols-span-2 italic font-light pl-2"
                      >
                        Street Address
                      </label>
                    </div>
                    <input
                      type="text"
                      name="user_address"
                      id="user_address"
                      defaultValue={data.user_address}
                      className="rounded-xl text-black p-2 m-1 col-span-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 mt-20">
                    <div className="flex justify-end col-span-2">
                      <button
                        className="bg-primary rounded-full p-3 font-semibold hover:bg-orange-400"
                        type="submit"
                      >
                        Save Change
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default User_Setting_Account;
