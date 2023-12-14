import { React, useState } from "react";
import "./DashboardSidebar.css";
import HaloUser from "./HaloUser";
import { useNavigate } from 'react-router-dom'
import { PowerIcon, PlayIcon } from "@heroicons/react/24/outline";
import NotificationAdminSmall from "./NotificationAdminSmall";

const DashboardSidebar = ({ numOfLinks, linkTitles, links, image }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const truncatedImage = image.slice(0, numOfLinks);
  const truncatedTitles = linkTitles.slice(0, numOfLinks);
  const truncatedLinks = links.slice(0, numOfLinks);

  const handleLogout = () => {
    navigate("/");
    window.localStorage.removeItem("token");
    setIsLogin(false);
    logoutSuccess();
  };

  return (
    <>
      <div>
        <button
          onClick={toggleSidebar}
          className="w-[50px] h-[200px] mt-[50px] absolute bg-tertiary cursor-pointer rounded-r-3xl"
        ></button>
      </div>
      <div
        className={
          isOpen
            ? "w-[100%] h-screen bg-black/30 absolute overflow-hidden"
            : "hidden"
        }
      >
        <div
          className={
            isOpen
              ? " bg-white absolute backdrop-blur-md w-[300px] h-screen animate-in slide-in-from-left"
              : "hidden"
          } 
        >
          <button
            onClick={toggleSidebar}
            className="ml-[150px] mt-[50px] w-[50px] h-[200px] absolute bg-tertiary cursor-pointer rounded-r-3xl"
          ></button>
          <HaloUser />
          <div className="flex flex-col justify-between">
            <hr className="border mx-4 border-gray-300" />
            <div className="bg-tertiary mt-4 pb-4 rounded-xl mx-6 drop-shadow-xl">
              <h2 className="text-start ml-5 pt-4 font-bold">Dashboard Menu</h2>
              <ul>
                {truncatedTitles.map((title, index) => (
                  <li key={index}>
                    <a href={truncatedLinks[index]}>
                      <button
                        className="btn bg-tertiary text-white 
                text-start
                w-[300px]
                hover:border-l-4
                "
                      >
                        <div className="flex justify-start">
                          <div className="grid place-items-center">
                            <img
                              src={truncatedImage[index]}
                              className="w-5 h-5 mx-4"
                            />
                          </div>
                          <h1 className=" text-base">{title}</h1>
                        </div>
                      </button>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border mx-4 border-gray-300 mt-8"></div>
            <div className="pl-5 bg-slate-300 rounded-xl max-h-[350px] h-[275px] mx-6 mt-6">
              <h2 className="text-start text-tertiary pt-4 font-bold">
                Notification
              </h2>
              <div className="px-3 -ml-5">
              <NotificationAdminSmall />
              </div>
            </div>
            <div className="pr-5 mt-6 flex justify-end">
              <h2 className="text-start text-tertiary mx-2 font-base h-[275px] cursor-pointer" onClick={handleLogout}>
                Logout
              </h2>
              <PowerIcon className="text-tertiary stroke-tertiary stroke-2 w-6 h-6 cursor-pointer" onClick={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
