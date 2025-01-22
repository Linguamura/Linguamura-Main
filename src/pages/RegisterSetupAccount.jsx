import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';

const RegisterSetupAccount = () => {
  const navigate = useNavigate();
  const [showCameraModal, setShowCameraModal] = useState(false);

  const handleTakePhoto = () => {
    setShowCameraModal(true);
  };

  const handleSkip = () => {
    navigate('/register/profile');
  };

  return (
    <div className="flex h-screen">
      <div className="w-full flex items-center justify-center pt-20 bg-[#F7F7FC]">
        <div className="w-[500px] bg-white p-8 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#14142B]">
            Finish setting up your account
          </h2>
          <p className="text-[#6E7191] mb-8">
            Let's verify your identity. The captured facial image is only used for verification purposes.
          </p>
          
          <div className="mb-6">
            <h3 className="text-[#14142B] font-semibold mb-2">
              Take a photo of your face
            </h3>
            <p className="text-[#6E7191] text-sm">
              Instructions:
            </p>
            <ul className="text-left text-[#6E7191] mb-6">
              <li className="flex items-center mb-2">
                <div className="w-5 h-5 rounded-full bg-[#00BBBB] mr-2 flex items-center justify-center">
                  <span className="text-white text-xs">1</span>
                </div>
                <span>Face the camera directly with your eyes and mouth clearly visible.</span>
              </li>
              <li className="flex items-center mb-2">
                <div className="w-5 h-5 rounded-full bg-[#00BBBB] mr-2 flex items-center justify-center">
                  <span className="text-white text-xs">2</span>
                </div>
                <span>Make sure the photo is well lit, free of glare, and in focus.</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-[#00BBBB] mr-2 flex items-center justify-center">
                  <span className="text-white text-xs">3</span>
                </div>
                <span>No photos of a photo, filters or alterations.</span>
              </li>
            </ul>
            
            <button 
              onClick={handleTakePhoto}
              className="w-full py-3 rounded-lg gradient text-white font-semibold transition-colors duration-300 hover:opacity-90"
            >
              Take photo
            </button>
            
            {showCameraModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                <div className="bg-white w-[500px] rounded-xl p-8 text-center">
                  <h3 className="text-[#14142B] font-semibold mb-4">
                    Take a photo of your face
                  </h3>
                  <p className="text-[#6E7191] mb-6">
                    Follow the instructions and make sure your face is clearly visible.
                  </p>
                  <div className="mb-6">
                    <Camera className="text-[#00BBBB] w-16 h-16 mx-auto" />
                  </div>
                  <div className="flex justify-center gap-4">
                    <button 
                      onClick={() => setShowCameraModal(false)}
                      className="px-6 py-2 rounded-lg font-semibold text-[#14142B] hover:text-[#00BBBB] transition-colors"
                    >
                      Not now
                    </button>
                    <button 
                      onClick={() => {
                        setShowCameraModal(false);
                        navigate('/register/take-photo');
                      }}
                      className="px-6 py-2 rounded-lg gradient text-white font-semibold transition-colors duration-300 hover:opacity-90"
                    >
                      Take photo
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <button 
            onClick={handleSkip}
            className="w-full py-3 rounded-lg text-[#6E7191] font-semibold transition-colors duration-300 hover:text-[#00BBBB]"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterSetupAccount;