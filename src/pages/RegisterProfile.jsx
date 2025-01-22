import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock, Eye, EyeOff, Calendar, X } from 'lucide-react';

const RegisterProfile = () => {
  const navigate = useNavigate();
  const [passwordStrength, setPasswordStrength] = useState('- - -');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });

  const checkPasswordStrength = (password) => {
    if (password.length < 6) return '- - -';
    if (password.length < 8) return 'Weak';
    if (password.length < 10) return 'Medium';
    return 'Strong';
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    if (id === 'password') {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (formData.fullName && formData.email && formData.phone && formData.password) {
      navigate('/register/verify-email');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Progress Bar */}
      <div className="fixed top-0 w-full bg-white py-5 px-5 shadow-md z-10">
        <div className="w-full bg-[#EFF0F6] rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-[#04E2E2] to-[#00BBBB] h-2.5 rounded-full" 
            style={{ width: '40%' }}
          ></div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center pt-1">
        <div className="max-w-[602px] w-full bg-white p-8 rounded-xl">
          <h2 className="text-[38px] font-bold text-center mb-6 text-[##14142A]">
            Create a Personalized Profile
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-[#14142A] font-medium text-[16px] mb-2">
                Full Name
              </label>
              <div className="relative">
                <input 
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full  h-[56px] rounded-[46px] py-3 pl-12 pr-4 bg-[#F7F7FC] border border-[#D9DBE9]"
                />
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6E7191]" />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-[#6E7191] mb-2">
                Email
              </label>
              <div className="relative">
                <input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full  h-[56px] rounded-[46px] py-3 pl-12 pr-4 bg-[#F7F7FC] border border-[#D9DBE9]"
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6E7191]" />
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-[#6E7191] mb-2">
                Phone Number
              </label>
              <div className="relative">
                <input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+234 Enter your number"
                  className="w-full  h-[56px] rounded-[46px] py-3 pl-12 pr-4 bg-[#F7F7FC] border border-[#D9DBE9]"
                />
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6E7191]" />
              </div>
            </div>

            {/* Date of Birth Input */}
<div className="mb-2">
  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-[#6E7191] mb-2">
    Date of Birth
  </label>
  <div className="relative">
    <input 
      id="dateOfBirth"
      type="date"
      value={formData.dateOfBirth}
      onChange={handleInputChange}
      placeholder="Select your date of birth"
      className="w-full h-[56px] rounded-[46px] py-3 pl-12 pr-4 bg-[#F7F7FC] border border-[#D9DBE9] 
        text-[#6E7191] 
        focus:outline-none focus:ring-2 focus:ring-[#00BBBB]
        [&::-webkit-calendar-picker-indicator]:cursor-pointer
        [&::-webkit-calendar-picker-indicator]:opacity-70"
    />
    <Calendar 
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6E7191]" 
    />
    {formData.dateOfBirth && (
      <button 
        type="button"
        onClick={() => {
          // Clear the date of birth
          handleInputChange({
            target: { 
              id: 'dateOfBirth', 
              value: '' 
            }
          });
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
      >
        <X className="text-[#6E7191]" />
      </button>
    )}
  </div>
</div>

            {/* Password Input */}
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-[#6E7191] mb-2">
                Password
              </label>
              <div className="relative">
                <input 
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full  h-[56px] rounded-[46px] py-3 pl-12 pr-4 bg-[#F7F7FC] border border-[#D9DBE9]"
                />
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6E7191]" />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="text-[#6E7191]" /> : <Eye className="text-[#6E7191]" />}
                </button>
              </div>
            </div>

            {/* Password Strength */}
            <div className="text-right mb-4">
              <span className="text-sm">
                Password strength{' '}
                <span 
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

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full py-3 gradient shadow h-[54px] rounded-[55px] text-white hover:shadow-none transition-all"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-4">
            <span>
              Already have an account?{' '}
              <a href="/login" className="text-[#00BBBB] font-semibold">
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterProfile;