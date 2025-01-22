import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div 
        className={`transition-all duration-300 ease-in-out overflow-x-hidden 
          ${isSidebarOpen ? 'ml-[15rem]' : 'ml-0'} overflow-auto`}
      >
        <Navbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;