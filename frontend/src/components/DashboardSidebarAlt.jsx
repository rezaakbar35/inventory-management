import { React, useState } from 'react';
import "./DashboardSidebar.css"
import HaloUser from './HaloUser';
import { PlayIcon } from "@heroicons/react/24/solid"

const DashboardSidebarAlt = ({ numOfLinks, linkTitles, links }) => {

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
          className="w-[50px] h-[200px] absolute bg-primary cursor-pointer rounded-r-3xl">
            <div className='flex justify-center'>
              <PlayIcon className='w-6 h-6 text-white'/>
            </div>
      </button>
    </div>
    <div className={isOpen 
                        ? "bg-primary absolute w-[300px] animate-in slide-in-from-left h-screen"
                        : "hidden animate-out slide-out-from-left"}>
        <button onClick={toggleSidebar} 
          className="ml-[150px] w-[50px] h-[200px] absolute bg-primary cursor-pointer rounded-r-3xl">
            <div className='flex justify-center'>
              <PlayIcon className='w-6 h-6 text-white rotate-180'/>
            </div>
        </button>
        <div className='grid-rows-6'>
          <div className='row-span-5'>
            <HaloUser/>
          </div>
        <ul>
          {truncatedTitles.map((title, index) => (
            <li key={index}>
              <a href={truncatedLinks[index]}>
                  <button className='btn bg-background hover:bg-secondary text-black rounded-full'>
                  {title}
                  </button>
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebarAlt;
