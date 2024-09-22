import React from 'react';
import { FcOnlineSupport } from "react-icons/fc";
import { LuPackagePlus } from "react-icons/lu";
// Define the array of objects for dynamic rendering
const statistics = [
  {
    title: 'Total Users',
    icone: LuPackagePlus,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus mi consectetur felis turpis vitae ligula.',
    value: '1,200',
    gradientFrom: 'blue-500',
    gradientTo: 'indigo-500',
  },
  {
    title: '24x7 Support',
    icone:FcOnlineSupport,
    description:
      'Our team is available round-the-clock to assist you with any queries.',
    value: '$50,000',
    gradientFrom: 'green-500',
    gradientTo: 'teal-500',
  },
  {
    title: 'Secure Payment',
    description:
      'Your transactions are protected with advanced security encryption.',
    value: '5',
    icone:FcOnlineSupport,
    gradientFrom: 'yellow-500',
    gradientTo: 'orange-500',
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-8 font-sans">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <div
            //  Icone={stat?.icone}
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
            >
              <div
                className={`flex items-center justify-center bg-gradient-to-r from-${stat.gradientFrom} to-${stat.gradientTo} rounded-full p-3 w-16 h-16`}
              >
                {
                  stat.icone && <stat.icone/>
                }
                {/* <Icone></Icone> */}
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {stat.title}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {stat.description}
                </p>
                <p className="text-gray-600 text-sm mt-2">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
