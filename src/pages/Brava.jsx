import React from 'react'

const Brava = () => {
  return (
    <div>
         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-lg p-6">
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-semibold mb-4">Complete the Sentence</h1>
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-4">
            <img
              src="https://via.placeholder.com/150" // Replace with actual image source
              alt="Person"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927C9.569 1.841 10.432 1.841 10.951 2.927L12.82 6.982C13.204 7.852 13.95 8.155 14.758 8.027L19.268 7.243C20.358 7.064 20.358 8.137 19.268 8.316L14.758 9.1C13.95 9.228 13.204 9.531 12.82 10.402L10.951 14.457C10.432 15.543 9.569 15.543 9.049 14.457L7.18 10.402C6.796 9.531 6.05 9.228 5.242 9.1L0.732 8.316C-0.358 8.137 -0.358 7.064 0.732 7.243L5.242 8.027C6.05 8.155 6.796 7.852 7.18 6.982L9.049 2.927z" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">Comment ça va?</p>
          </div>
          <div className="w-full flex flex-col gap-2 mb-4">
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Bonjour
            </button>
            <button className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Correct
            </button>
          </div>
          <div className="w-full bg-green-100 p-4 rounded-lg text-center mb-4">
            <p className="text-green-700 font-semibold">Bravo!</p>
            <p className="text-sm text-gray-700">"Good morning! How are you?"</p>
            <a href="#" className="text-blue-500 text-sm underline">Flag Question</a>
          </div>
          <button className="mt-4 py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
            Continue
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Brava