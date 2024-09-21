import React from 'react';

const Services = () => {
    return (
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-8 font-sans ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-16 h-16">
              <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-800">Total Users</p>
              <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. metus mi consectetur felis turpis vitae ligula.</p>
              <p className="text-gray-600 text-sm mt-2">1,200</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-16 h-16">
              <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-800">Revenue</p>
              <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. metus mi consectetur felis turpis vitae ligula.</p>
              <p className="text-gray-600 text-sm mt-2">$50,000</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3 w-16 h-16">
              <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-800">Issues</p>
              <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. metus mi consectetur felis turpis vitae ligula.</p>
              <p className="text-gray-600 text-sm mt-2">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Services;