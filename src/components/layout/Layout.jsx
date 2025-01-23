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
    <div className="relative flex h-screen overflow-hidden">
      {/* Sidebar with fixed positioning when closed */}
      <div
        className={`fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-30
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-grow min-h-screen">
        <Navbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        {/* Content wrapper with dynamic width */}
        <div 
          className={`flex-grow transition-all duration-300 ease-in-out
            ${isSidebarOpen ? 'lg:ml-72' : 'ml-0'} 
             relative z-10`}
        >
          <div className="h-screen pb-96 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Optional overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Layout;