import React from 'react';
import "./DashboardSidebar.css"

const DashboardSidebar = ({ numOfLinks, linkTitles, links }) => {

  const truncatedTitles = linkTitles.slice(0, numOfLinks);
  const truncatedLinks = links.slice(0, numOfLinks);

  return (
    <div className="bg-tertiary w-96 h-screen">
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

export default DashboardSidebar;
