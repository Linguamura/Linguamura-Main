import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';

const RegisterVerifyEmail = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);

  const handleCodeChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto focus next input
    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    // Check if all inputs are filled
    if (verificationCode.every(code => code !== '')) {
      navigate('/register/setup-account');
    } else {
      alert('Please enter the complete verification code');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Progress Bar */}
      <div className="fixed top-0 w-full bg-white py-5 px-5 shadow-md z-10">
        <div className="w-full bg-[#EFF0F6] rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-[#04E2E2] to-[#00BBBB] h-2.5 rounded-full" 
            style={{ width: '60%' }}
          ></div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center pt-20 bg-[#F7F7FC]">
        <div className="w-[500px] bg-white p-8 rounded-xl shadow-md text-center">
          <Mail className="mx-auto mb-6 text-[#00BBBB]" size={64} />
          <h2 className="text-2xl font-bold mb-4 text-[#141426]">
            Verify Your Email
          </h2>
          <p className="text-[#6E7191] mb-6">
            We've sent a 6-digit verification code to your email. Please enter the code below.
          </p>

          <form onSubmit={handleVerify}>
            <div className="flex justify-center space-x-2 mb-6">
              {verificationCode.map((code, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength="1"
                  value={code}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="w-12 h-12 text-center border border-[#D9DBE9] rounded-lg text-xl focus:border-[#00BBBB]"
                />
              ))}
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#04E2E2] to-[#00BBBB] text-white rounded-lg hover:opacity-90 transition-all"
            >
              Verify
            </button>
          </form>

          <div className="mt-4 text-[#6E7191]">
            Didn't receive the code?{' '}
            <button className="text-[#00BBBB] font-semibold">
              Resend Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterVerifyEmail;