import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, Navbar } from '../components';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={toggleSidebar}
        className={`fixed left-0 top-0 h-full transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      />
      
      <main className={`flex-1 transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Navbar 
          isOpen={isSidebarOpen} 
          onToggle={toggleSidebar}
          className="sticky top-0 z-10 bg-white shadow-sm"
        />
        
        <div className="container mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;