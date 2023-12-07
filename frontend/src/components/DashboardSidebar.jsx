import { React, useState } from 'react';
import "./DashboardSidebar.css"
import HaloUser from './HaloUser';

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
    </>
  );
};

export default DashboardSidebar;
