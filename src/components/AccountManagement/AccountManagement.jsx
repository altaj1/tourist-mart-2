import React from 'react';

const AccountManagement = () => {

  return (
    <div className=" p-8 font-[sans-serif]  mx-auto rounded-lg shadow-lg">
       <h2 className="text-2xl font-bold text-gray-700 mb-4">Manage My Account</h2>
     <div className='flex gap-10 '>
       {/* Personal Profile Section */}
       <div className="mb-8 w-[30%] bg-[#F3F4F6] p-5 rounded-md h-80">
       
       <div className="flex justify-between items-center mb-6">
         <h3 className="text-lg font-semibold text-gray-600">Personal Profile</h3>
         <button className="text-blue-600 font-semibold">EDIT</button>
       </div>
       <div className="text-gray-800">
         <p>Username: <span className="font-semibold">altaj1019</span></p>
         <p>Email: <span className="font-semibold">al*******@gmail.com</span></p>
       </div>
     </div>

     {/* Address Book Section */}
     <div className='bg-[#F3F4F6] p-5 rounded-md w-[70%] h-80'>
     <div className="flex  items-center justify-between mb-6 bg-[#F3F4F6]">
         <h3 className="text-lg font-semibold text-gray-600">Address Book</h3>
           {/* modal */}
           <div>
          <button
              className="text-[#293614] font-semibold"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Change
            </button>
           <UpdateUserModal></UpdateUserModal>

          </div>
       </div>
       <div className="mb-8 flex justify-around divide-x-2 divide-white ">
       {/* Default Shipping Address */}
       <div className="mb-6 w-[40%]">
         <h4 className="text-md font-semibold text-gray-600">DEFAULT SHIPPING ADDRESS</h4>
         <div className="text-gray-800 mt-2">
           <p>Al Taj</p>
           <p>180/B</p>
           <p>Dhaka - Dhaka - South - Banasree</p>
           <p>(+880) 1719754585</p>
         </div>
       </div>

       {/* Default Billing Address */}
       <div className='w-[40%]'>
         <h4 className="text-md font-semibold text-gray-600">DEFAULT BILLING ADDRESS</h4>
         <div className="text-gray-800 mt-2">
           <p>Al Taj</p>
           <p>180/B</p>
           <p>Dhaka - Dhaka - South - Banasree</p>
           <p>(+880) 1719754585</p>
         </div>
       </div>
     </div>
     </div>
    
     </div>
    </div>
  );
};

export default AccountManagement;
