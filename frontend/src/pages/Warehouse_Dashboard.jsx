import React, { useState, useEffect } from 'react'
import './Warehouse_Dashboard.css'
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import WarehouseDashboard from "../assets/WarehouseDashboard.jpg"
import OutgoingProduct from "../assets/OutgoingProduct.png"
import ProductStock from "../assets/ProductStock.png"
import Logout from "../assets/Logout.png"
import { jwtDecode } from "jwt-decode"
import { getUserSpecific } from "../modules/fetch/index"
import NotificationWarehouse from '../components/NotificationWarehouse';

const Warehouse_Dashboard = () => {
    const navigate = useNavigate();
  
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

  const handleBack = () => {
    navigate("/");
  };

  const handleLogout = () => {
    navigate("/");
    window.localStorage.removeItem("token");
    setIsLogin(false);
    logoutSuccess();
  };

  return (
    <>
      <div className=" flex bg-background">
        <div className="grid grid-rows-6 grid-cols-3 w-screen h-screen">
          <div className="col-span-1">
            <div className="m-10">
              <div className=" bg-white py-8 pb-16 rounded-3xl drop-shadow-lg mb-9">
                <div className="flex justify-start p-4">
                  <button onClick={handleBack}>
                    <ChevronLeftIcon className="w-6 h-6 mr-4 -mt-6 stroke-gray-400 text-gray-400 self-center" />
                  </button>
                  <h1 className="text-black font-semibold -mt-6 text-3xl">
                    Home
                  </h1>
                </div>
                <div>
                  <div className="flex justify-center">
                    <img
                      src={WarehouseDashboard}
                      alt="user-dashboard-image"
                      className=" w-[400px] mt-12"
                    />
                  </div>
                  <h1 className="text-black font-semibold text-4xl mt-16">{`Welcome, ${data.first_name}`}</h1>
                  <p className="text-black font-normal text-lg mt-8 px-5">
                    Silakan pilih opsi disamping ini untuk beralih ke fitur yang
                    diinginkan.
                  </p>
                </div>
              </div>
              <button
                className=" bg-red-700 py-3 w-full  rounded-3xl drop-shadow-lg hover:bg-red-800"
                onClick={handleLogout}
              >
                <div className="flex justify-center">
                <img src={Logout} className="w-8 h-8 mr-5 mt-1" />
                <h1 className="text-white text-3xl font-semibold">Log Out</h1>
                </div>
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <div className="my-10">
              <div>
                <button
                  className="bg-tertiary w-full h-[345px] mb-7 rounded-3xl hover:scale-105 transition-transform drop-shadow-lg"
                  onClick={() => navigate("/WarehouseDash/Stocks")}
                >
                  <div className="flex justify-center">
                  <img src={ProductStock} className="w-20 h-20 mr-10" />
                  <div className="grid justify-items-start">
                  <h1 className="text-white font-semibold text-3xl">
                    Warehouse
                  </h1>
                  <h1 className="text-white font-semibold text-3xl">
                    Product Stock
                  </h1>
                  </div>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className="bg-tertiary w-full h-[345px] my-7 rounded-3xl hover:scale-105 transition-transform drop-shadow-lg"
                  onClick={() => navigate("/WarehouseDash/Outgoing")}
                >
                  <div className="flex justify-center">
                  <img src={OutgoingProduct} className="w-20 h-20 mr-10" />
                  <div className="grid justify-items-start">
                  <h1 className="text-white font-semibold text-3xl">
                    Outgoing
                  </h1>
                  <h1 className="text-white font-semibold text-3xl">
                    Product
                  </h1>
                  </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 m-10">
            <div className="bg-white w-full h-[90vh] rounded-3xl drop-shadow-lg">
              <div className='grid'>
              <h1 className="text-black font-semibold text-3xl pt-4 ">
                Notification
              </h1>
              <NotificationWarehouse/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Warehouse_Dashboard
