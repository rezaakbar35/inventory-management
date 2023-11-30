import React from 'react';
import "./DashboardSidebar.css"
import HaloUser from './HaloUser';

const DashboardSidebarAlt = ({ numOfLinks, linkTitles, links }) => {

  const truncatedTitles = linkTitles.slice(0, numOfLinks);
  const truncatedLinks = links.slice(0, numOfLinks);

  return (
    <div className="bg-primary w-1/4 h-screen">
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
  );
};

export default DashboardSidebarAlt;
