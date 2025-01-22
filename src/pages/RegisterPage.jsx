import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const RegisterPage = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [passwordStrength, setPasswordStrength] = useState('- - -');

  const interests = [
    'Education', 
    'Health', 
    'Entertainment', 
    'Marketplace', 
    'Information'
  ];

  const handleInterestSelect = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(item => item !== interest)
        : [...prev, interest]
    );
  };

  const checkPasswordStrength = (password) => {
    // Simple password strength checker
    if (password.length < 6) return '- - -';
    if (password.length < 8) return 'Weak';
    if (password.length < 10) return 'Medium';
    return 'Strong';
  };

  return (
    <div className="relative">
      {/* Signup Heading */}
      <div className="fixed top-0 w-full bg-white py-5 px-5 shadow-md z-10">
        <div className="logoName">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#04E2E2] to-[#00BBBB]">
            Linguamura
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="content-of-signup pt-24 px-4">
        {/* Header Navigation */}
        <div className="signup-content-head flex justify-between items-center">
          <div className="left">
            <a href="#" className="block">
              <img 
                src="../images/arrow-left.png" 
                alt="Back" 
                className="w-12"
              />
            </a>
          </div>

          <div className="right w-[90%] border border-[#D9DBE9] rounded-lg">
            <div className="content bg-[#EFF0F6] rounded-[36px] w-full flex justify-start">
              <div className="lev py-1.5 px-2.5 w-1/5 rounded-[36px] bg-gradient-to-r from-yellow-500 via-yellow-300 to-teal-500"></div>
            </div>
          </div>
        </div>

        {/* Interest Selection Section */}
        <div className="second-signup-section flex justify-center items-center mt-6">
          <div className="contents w-[40%]">
            <div className="first-text text-center">
              <h3 className="font-satoshi text-2xl text-[#141426]">
                Let us know why you are here
              </h3>
              <span className="text-[#00BBBB] font-medium">
                Select all that apply.
              </span>
            </div>

            <div className="select-item mt-2.5 px-[60px]">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => handleInterestSelect(interest)}
                  className={`w-full my-5 py-2.5 px-5 rounded-[55px] border border-[#D9DBE9] font-satoshi font-medium 
                    ${selectedInterests.includes(interest) 
                      ? 'bg-[#04E2E2] text-white' 
                      : 'bg-white text-[#00BBBB]'}`}
                >
                  {interest}
                </button>
              ))}

              <button
                id="getstarted"
                className="w-full py-2.5 px-5 text-white rounded-[55px] bg-gradient-to-r from-[#04E2E2] to-[#00BBBB] flex items-center justify-center"
              >
                Next <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Profile Creation Section */}
        <div className="the-contents">
          <div className="first-text text-center">
            <h3 className="font-satoshi text-2xl text-[#141426]">
              Create a personalized profile
            </h3>
          </div>

          <div className="signup-room mt-2.5 px-[60px] flex justify-center flex-wrap">
            {/* Full Name Input */}
            <div className="form w-[60%] px-2.5 relative mb-2.5">
              <label 
                htmlFor="username" 
                className="text-left text-[80%] font-medium font-satoshi mb-2.5"
              >
                Full name
              </label>
              <div className="relative">
                <input 
                  id="username" 
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full py-3 px-12 bg-[#F7F7FC] rounded-lg border border-[#D9DBE9]"
                />
                <img 
                  src="../images/user.png" 
                  alt="User Icon" 
                  className="absolute top-1/2 left-2.5 transform translate-x-1/2 -translate-y-1/2" 
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="form w-[60%] px-2.5 relative mb-2.5">
              <label 
                htmlFor="Email" 
                className="text-left text-[80%] font-medium font-satoshi mb-2.5"
              >
                Email
              </label>
              <div className="relative">
                <input 
                  id="Email" 
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-3 px-12 bg-[#F7F7FC] rounded-lg border border-[#D9DBE9]"
                />
                <img 
                  src="../images/sms.png" 
                  alt="Email Icon" 
                  className="absolute top-1/2 left-2.5 transform translate-x-1/2 -translate-y-1/2" 
                />
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="form w-[60%] px-2.5 relative mb-2.5">
              <label 
                htmlFor="Phone" 
                className="text-left text-[80%] font-medium font-satoshi mb-2.5"
              >
                Phone number
              </label>
              <div className="relative">
                <input 
                  id="Phone" 
                  type="tel"
                  placeholder="+234 3929102939"
                  className="w-full py-3 px-12 bg-[#F7F7FC] rounded-lg border border-[#D9DBE9]"
                />
                <img 
                  src="../images/sms.png" 
                  alt="Phone Icon" 
                  className="absolute top-1/2 left-2.5 transform translate-x-1/2 -translate-y-1/2" 
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form w-[60%] px-2.5 relative mb-2.5">
              <label 
                htmlFor="Pass" 
                className="text-left text-[80%] font-medium font-satoshi mb-2.5"
              >
                Password
              </label>
              <div className="relative">
                <input 
                  id="Pass" 
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPasswordStrength(checkPasswordStrength(e.target.value))}
                  className="w-full py-3 px-12 bg-[#F7F7FC] rounded-lg border border-[#D9DBE9]"
                />
                <img 
                  src="../images/lock.png" 
                  alt="Lock Icon" 
                  className="absolute top-1/2 left-2.5 transform translate-x-1/2 -translate-y-1/2" 
                />
                <span className="absolute right-2.5 top-1/2 transform -translate-y-1/2 material-symbols-outlined">
                  visibility
                </span>
              </div>
            </div>

            {/* Password Strength */}
            <div className="password-strength w-[60%] text-right px-2.5 text-sm">
              <span>
                Password strength{' '}
                <span 
                  id="thestrength" 
                  className={`font-bold ${
                    passwordStrength === 'Weak' ? 'text-red-500' :
                    passwordStrength === 'Medium' ? 'text-yellow-500' :
                    passwordStrength === 'Strong' ? 'text-green-500' : ''
                  }`}
                >
                  {passwordStrength}
                </span>
              </span>
            </div>

            {/* Signup Button */}
            <div className="form w-[60%] px-2.5 mt-2.5">
              <button 
                id="signupbtn"
                className="w-full py-2.5 px-5 text-white rounded-[55px] bg-gradient-to-r from-[#04E2E2] to-[#00BBBB] hover:from-[#00BBBB] hover:to-[#04E2E2]"
              >
                Sign up
              </button>
            </div>

            {/* Login Text */}
            <div className="login-text w-full text-center mt-4">
              <span className="text-[#141426]">
                Already have an account{' '}
                <a href="#" className="text-[#00BBBB] font-semibold">
                  Login
                </a>
              </span>
            </div>

            {/* Terms and Privacy */}
            <div className="last-item w-full text-center mt-7 text-sm">
              <span>
                By signing up, you confirm that you have read and agreed to our{' '}
                <a href="#" className="text-[#00BBBB] font-semibold">Terms</a>{' '}
                and{' '}
                <a href="#" className="text-[#00BBBB] font-semibold">
                  Privacy Policy
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Star Image */}
      <div className="star-img absolute bottom-[250px] right-0">
        <img src="../images/Group 4.png" alt="Star" />
      </div>
    </div>
  );
};

export default RegisterPage;