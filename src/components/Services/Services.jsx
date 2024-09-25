import React from 'react';
import { FcOnlineSupport } from "react-icons/fc";
import { GiBoxUnpacking } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const statistics = [
  {
    title: 'Product Packing',
    icone: GiBoxUnpacking,
    description:
      'Eco-friendly packaging ensures products arrive safely and sustainably.',
    value: '1,200',
    gradientFrom: 'blue-500',
    gradientTo: 'indigo-500',
  },
  {
    title: '24x7 Support',
    icone: FcOnlineSupport,
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
    icone:RiSecurePaymentLine,
    gradientFrom: 'yellow-500',
    gradientTo: 'orange-500',
  },
];

const Services = () => {
  return (
    <div className="  font-sans">
      <div className="container mx-auto">
       <div className='text-center'>
       <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <p>We offer a range of services designed to provide you with the best experience. From secure packaging to round-the-clock support, discover our commitment to quality.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
       </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
         {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center gap-8"
            >
              <div
                className={`flex items-center justify-center bg-gradient-to-r from-${stat.gradientFrom} to-${stat.gradientTo} rounded-full p-3 w-16 h-16`}
              >
               <p className='text-6xl'>
               {
                  stat.icone && <stat.icone/>
                }
               
               </p>
              </div>
              <div className="mt-3 text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {stat.title}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {stat.description}
                </p>
                
              </div>
            </div>
          ))}
         </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
