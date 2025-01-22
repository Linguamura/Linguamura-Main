import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Facebook } from 'lucide-react';
import Mura from '../assets/mura2.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here
    console.log('Login attempt with:', email, password);
  };

  const handleFacebookLogin = () => {
    // Add Facebook login logic
    console.log('Facebook login initiated');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

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

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center bg-white px-4">
        <div className="w-full text-center flex flex-col items-start px-9">
          <h2 className="text-[46px] font-bold text-[#14142A] mb-6">
            Welcome <span className="text-[#00BBBB]">Back</span>
          </h2>
          <p className="text-[#4E4B66] text-[24px] mb-8 text-left">
            Login to continue your learning journey
          </p>
          
          {/* Continue with Facebook Button */}
          <button 
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center py-3 border border-[#1877F2] hover:text-white rounded-[55px] mb-6 hover:bg-[#166fe5] transition-all duration-300"
          >
            <Facebook className="mr-3" />
            Continue with Facebook
          </button>

          {/* OR Divider */}
          <div className="w-full flex items-center justify-center mb-6">
            <div className="flex-grow border-t border-[#D9DBE9]"></div>
            <span className="px-4 text-[#4E4B66] bg-white">OR</span>
            <div className="flex-grow border-t border-[#D9DBE9]"></div>
          </div>
          
          <div className="w-full">
            {/* Email Input */}
            <div className="mb-6">
              <label 
                htmlFor="email" 
                className="block text-left text-[#14142A] mb-2 font-medium"
              >
                Email
              </label>
              <div className="relative">
                <Mail 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4E4B66]"
                  size={20}
                />
                <input 
                  id="email"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full  h-[56px] rounded-[46px] py-3 pl-12 pr-4 bg-[#F7F7FC] border border-[#D9DBE9]"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label 
                htmlFor="password" 
                className="block text-left text-[#14142A] mb-2 font-medium"
              >
                Password
              </label>
              <div className="relative">
                <Lock 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4E4B66]"
                  size={20}
                />
                <input 
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full  h-[56px] rounded-[46px] py-3 pl-12 pr-4 bg-[#F7F7FC] border border-[#D9DBE9]"
                />
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4E4B66]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-6">
              <button 
                onClick={handleForgotPassword}
                className="text-[#4E4B66] hover:text-[#00BBBB] transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button 
              onClick={handleLogin}
              className="w-full py-3 gradient text-white rounded-[55px] hover:bg-[#007979] transition-all duration-300"
            >
              Login
            </button>

            {/* Register Link */}
            <div className="mt-4 text-center">
              <span className="text-[#4E4B66]">
                Don't have an account? 
                <button 
                  onClick={() => navigate('/register')}
                  className="text-[#00BBBB] ml-2 hover:underline"
                >
                  Sign Up
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;