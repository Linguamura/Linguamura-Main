import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Camera } from 'lucide-react';

const TakePhoto = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Here you would typically upload the image to your backend
    // For now, we'll just navigate to the next page
    navigate('/dashboard');
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex h-screen">
      {/* Progress Bar */}
      <div className="fixed top-0 w-full bg-white py-5 px-5 shadow-md z-10">
        {/* Progress Bar UI */}
      </div>
      
      <div className="w-full flex items-center justify-center pt-20 bg-[#F7F7FC]">
        <div className="w-[500px] bg-white p-8 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#14142B]">Set Up Your Profile</h2>
          
          <div className="mb-6">
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            
            <div 
              className="mx-auto w-40 h-40 rounded-full border-2 border-dashed border-[#00BBBB] flex items-center justify-center cursor-pointer relative"
              onClick={triggerFileInput}
            >
              {selectedImage ? (
                <img 
                  src={selectedImage} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <Camera 
                  className="text-[#00BBBB] w-16 h-16" 
                />
              )}
              
              {selectedImage && (
                <div className="absolute bottom-0 right-0 bg-[#00BBBB] rounded-full p-1">
                  <CheckCircle className="text-white w-6 h-6" />
                </div>
              )}
            </div>
            
            <p className="mt-4 text-[#6E7191] text-sm">
              {selectedImage ? 'Image Selected' : 'Upload Profile Picture'}
            </p>
          </div>
          
          <button 
            onClick={handleSubmit}
            disabled={!selectedImage}
            className={`w-full py-3 rounded-lg text-white font-semibold transition-colors duration-300 ${
              selectedImage 
                ? 'bg-gradient-to-r from-[#04E2E2] to-[#00BBBB] hover:opacity-90' 
                : 'bg-[#D9DBE9] cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakePhoto;