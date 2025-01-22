import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Mura from '../assets/mura2.png';

const RegisterLanding = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/register/profile');
  };

  const features = [
    "Discover New Skills: Dive into courses on languages, music, arts, and more",
    "Shop & Explore: Find everything from products to book your next apartment, flight, or car with ease in our marketplace",
    "Entertainment at Your Fingertips: From movies to music and gaming, enjoy a world of entertainment whenever you want",
    "Connect & Grow: Meet like-minded people, exchange ideas, and create meaningful connections with others on the same journey"
  ];

  return (
    <div className="flex h-screen">
      {/* Left Side - Green Gradient Background */}
      <div className="w-1/2 grad h-full flex items-center justify-center relative">
        <div className="thelogo mb-6 p-9 flex items-center gap-1 absolute top-0 left-0">
            <img src={Mura} alt="" className="w-[30.45px] h-[17.04px]" />
            <span className="text-2xl tracking-[-2%] font-bold text-[#14142A]">LinguaMura</span>
          </div>
        <div className="text-white text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Linguamura</h1>
          <p className="text-xl">Connect. Learn. Grow.</p>
        </div>
      </div>

      {/* Right Side - Welcome Message */}
  <div className="w-1/2 flex items-center bg-white px-4">
    <div className="w-full text-center flex flex-col items-start px-9">
      <h2 className="text-[46px] font-bold text-[#14142A] mb-6">
        Welcome to <span className="text-[#00BBBB]">Linguamura</span>
      </h2>
      <p className="text-[#4E4B66] text-[24px] mb-8 text-left w-[717px]">
         Your gateway to learning, entertainment, shopping, and connection—all in one place.
     </p>
      
      <div className="w-[90%] mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center mb-4">
            <CheckCircle 
              className="text-[#00BBBB] mr-3 w-6 h-6"
              strokeWidth={3}
            />
            <span className="text-[#14142A] text-left text-[18px] font-medium">{feature}</span>
          </div>
        ))}
      </div>
      
      <button 
        onClick={handleContinue}
        className="w-[248px] h-[54px] flex items-center justify-center -translate-y-12 px-4 py-2 gradient font-semibold rounded-[55px] p-[33px] cursor-pointer shadow hover:bg-[#007979] transition-all duration-300 text-white mt-9"
      >
        Get Started <ArrowRight className="ml-2" />
      </button>
    </div>
  </div>
</div>
  );
};

export default RegisterLanding;