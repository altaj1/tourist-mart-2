import React from 'react';
const Services = ({statistics, description, title}) => {
  return (
    <div className="  font-sans">
      <div className="container mx-auto">
       <div className='text-center'>
       <h2 className="text-4xl font-bold mb-8">{title}</h2>
        <p>{description}</p>
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
