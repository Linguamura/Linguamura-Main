
const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`thedcHeading flex justify-between items-center ${isOpen ? 'pl-16' : 'pl-16'} p-4 shadow-sm`}>
      <button 
        onClick={toggleSidebar}
        className={`absolute left-0 w-[24px] h-[24px] rounded-full flex items-center justify-center translate-x-full bg-[#F7F7FC] p-2 z-50 
          ${isOpen ? 'hidden' : 'translate-x-0'}`}
      >
        <i class='bx bx-chevrons-left text-[#00BBBB]'></i>
      </button>
      <div className="content1 text-[#14142A] text-[18px] font-medium flex items-center">
        <span>Linguamura Education</span>
        <i className="iconsax ml-2" icon-name="chevron-down"></i>
      </div>

      <div className="content2 flex items-center space-x-4">
        <div className="languageswit flex items-center text-[#14142A] text-[18px] font-medium  space-x-2">
          <i className="iconsax" icon-name="globe"></i>
          <span>English</span>
          <i className="iconsax" icon-name="chevron-down"></i>
        </div>

        <div className="iconsimplify flex items-center space-x-4">
          <div className="item">
            <img src="/images/homepage/Group 9.png" alt="" className="w-[34px] h-[34px]" />
          </div>

          <div className="item text-[#000000]">
            <i className="iconsax font-semibold scale-[1.1]" icon-name="messages-4"></i>
          </div>

          <div className="item relative">
            <i className="iconsax text-[18px]" icon-name="bell-1"></i>
            <div className="absnot absolute top-[1px] -right-[1px] w-2 h-2 bg-red-500 rounded-full"></div>
          </div>

          <div className="item">
            <img src="/images/homepage/userprofile.png" alt="" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;