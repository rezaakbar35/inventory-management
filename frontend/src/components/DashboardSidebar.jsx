import { React, useState } from 'react';
import "./DashboardSidebar.css"
import HaloUser from './HaloUser';
import { CiLogout } from "react-icons/ci";
import NotificationBox from './NotificationBox';

const DashboardSidebar = ({ numOfLinks, linkTitles, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  const truncatedTitles = linkTitles.slice(0, numOfLinks);
  const truncatedLinks = links.slice(0, numOfLinks);

  return (
    <>
    <div> 
      <button onClick={toggleSidebar} 
          className="w-[50px] h-[200px] mt-[50px] absolute bg-tertiary cursor-pointer rounded-r-3xl">
      </button>
    </div>
    <div className={isOpen 
                        ? "bg-tertiary absolute w-[300px] h-screen"
                        : "hidden"}>
        <button onClick={toggleSidebar} 
          className="ml-[150px] mt-[50px] w-[50px] h-[200px] absolute bg-tertiary cursor-pointer rounded-r-3xl">
        </button>
        <HaloUser/>
        <hr className='border-0 h-[2px] bg-gradient-to-r from-tertiary via-secondary to-tertiary'/>
        <h2 className='text-start ml-[20px] mt-[20px]'>Dashboard Menu</h2>
      <ul>
        {truncatedTitles.map((title, index) => (
          <li key={index}>
            <a href={truncatedLinks[index]}>
                <button className='btn bg-tertiary text-white 
                text-start
                w-[300px]
                ml-0
                mb-[-20px]
                pl-10
                hover:bg-gradient-to-r 
                hover:from-primary 
                hover:to-tertiary 
                hover:text-white'>
                {title}
                </button>
            </a>
          </li>
        ))}
      </ul>
      <div className='pl-[20px] mt-[125px]'>
        <NotificationBox/>
        <CiLogout className='w-[25px] h-[25px] ml-[225px] mt-[20px]' />
      </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
