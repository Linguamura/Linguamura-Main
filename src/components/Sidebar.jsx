import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import Mura from '../assets/mura.png';

// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', icon: 'home-2', path: '/' },
    { label: 'Wallet', icon: 'wallet-open', path: '/wallet' },
    { label: 'Friends', icon: 'users', path: '/friends' },
    { label: 'Messages', icon: 'message-dots', path: '/messages' },
    { label: 'Bookmarks', icon: 'bookmark-tick', path: '/bookmarks' },
    { label: 'Go premium', icon: 'verify', path: '/premium' },
    { label: 'Updates', icon: 'status', path: '/updates' },
    { label: 'Notifications', icon: 'bell-1', path: '/notifications' },
    { label: 'Settings', icon: 'setting-1', path: '/settings' },
    { label: 'Help Center', icon: 'question-message', path: '/help' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div 
      className={`fixed left-0 top-0 h-full z-50 transition-all duration-300 ease-in-out 
        ${isOpen ? 'w-[292px]' : 'w-0 overflow-hidden'} bg-white border-r border-r-[#D9DBE9]`}
    >
      {/* Sidebar Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className={`absolute top-4 right-3 w-[24px] h-[24px] rounded-full flex items-center justify-center translate-x-full bg-[#F7F7FC] p-2 z-50 
          ${isOpen ? '' : 'translate-x-0'}`}
      >
        <i class='bx bx-chevrons-left text-[#00BBBB]'></i>
      </button>

      {isOpen && (
        <div className="w-full h-[100px] relative border-b border-b-[#D9DBE9]">
          <div className="thelogo mb-6 p-9 flex items-center gap-1">
            <img src={Mura} alt="" className="w-[30.45px] h-[17.04px]" />
            <span className="text-2xl tracking-[-2%] font-bold text-[#14142A]">LinguaMura</span>
          </div>

          <div className="relative mt-[50px]">
            <div className="px-2">
              <div className="flex items relative mb-4 w-full gap-2 p-2 border bg-[#F7F7FC] border-[#D9DBE9] rounded-[46px] h-[49px] px-4">
                <i className='flex items-center bx bx-search w-[10%] text-[24px] font-light text-[#6E7191]'></i>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-[90%] border-none outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="theprofileandothermenu border-b border-b-[#D9DBE9] pb-5 pl-4">
              <div className="thenavigations space-y-2">
                {navItems.map((nav, index) => (
                  <Link 
                    key={index} 
                    to={nav.path}
                    className={`nav1 flex items-center h-[45px] p-2 rounded-[5px] hover:bg-gray-100 text-[18px] hover:bg-[#E4FFFF] hover:border-r-[3px] hover:border-r-[#00BBBB] text-[#14142A] hover:text-[#14142A] 
                      ${isActive(nav.path) ? 'bg-[#E4FFFF] border-r-[3px] border-r-[#00BBBB]  text-[#14142A] font-medium' : 'font-[400]'}`}
                  >
                    <i 
                      className={`iconsax ${nav.icon} mr-3 
                        ${isActive(nav.path) ? 'text-[#14142A]' : ''}`}
                      icon-name={nav.icon}
                    />
                    <span>{nav.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="thelogoutsh mt-6 pl-4">
            <Link 
              to="/logout" 
              className="nav1 flex items-center p-2 text-[18px] hover:bg-gray-100 rounded-md"
            >
              <i 
                className="iconsax icon-name='logout-1' mr-3"
                icon-name="logout-1"
              />
              <span>Log out</span>
            </Link>
          </div>

          <div id="lg" className="thelogoutsh mt-4">
            <div className="w-full flex items-center px-4 gap-3">
              <img 
                  src="/images/homepage/userprofile.png" 
                  alt="" 
                  className=" my-2 w-12 h-12 rounded-full"
                />
                <div className="">
                  <span className="block font-semibold">Darlinton bruggle</span>
                  <small className="text-gray-500">User1D39037</small>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Sidebar;