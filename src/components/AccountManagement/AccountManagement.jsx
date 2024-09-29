"use client"
import React from 'react';
import { UpdateUserModal } from '../UpdateUserModal/UpdateUserModal';
import useGetUser from '@/lib/hooks/getDataHook/useGetUser';
import { useSession } from 'next-auth/react';
import LoadingSpinner from '../shared/LoadingSpinner';
import useGetMyOrders from '@/lib/hooks/getMyOrders/useGetMyOrders';
import OdrerCart from '../shared/OdrerCart';

const AccountManagement = () => {
  const session = useSession()
  const {allProductInfo, isLoading:loading} = useGetMyOrders()
  // console.log(session, "this is session")
const{userData, refetch, isLoading} = useGetUser()
if (isLoading && loading) {
  return <LoadingSpinner></LoadingSpinner>
}
console.log(allProductInfo.slice(0, 3))
  return (
    <div className=" p-8 font-[sans-serif]  mx-auto rounded-lg shadow-lg">
       <h2 className="text-2xl font-bold text-gray-700 mb-4">Manage My Account</h2>
     <div className='flex gap-10 '>
       {/* Personal Profile Section */}
       <div className="mb-8 w-[30%] bg-[#F3F4F6] p-5 rounded-md h-80">
       
       <div className="flex justify-between items-center mb-6">
         <h3 className="text-lg font-semibold text-gray-600">Personal Profile</h3>
        
       </div>
       <div className="text-gray-800">
         <p>Username: <span className="font-semibold">{userData?.name}</span></p>
         <p>Email: <span className="font-semibold">{userData?.email}</span></p>
       </div>
     </div>

     {/* Address Book Section */}
     <div className='bg-[#F3F4F6] p-5 rounded-md w-[70%] h-80'>
     <div className="flex  items-center justify-between mb-6 bg-[#F3F4F6]">
         <h3 className="text-lg font-semibold text-gray-600">Address Book</h3>
           {/* modal */}
           <div>
          <button
              className="text-[#0000f8f0] font-semibold"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Change
            </button>
           <UpdateUserModal ></UpdateUserModal>

          </div>
       </div>
       <div className="mb-8 flex justify-around divide-x-2 divide-white ">
       {/* Default Shipping Address */}
       <div className="mb-6 w-[40%]">
         <h4 className="text-md font-semibold text-gray-600">DEFAULT SHIPPING ADDRESS</h4>
         <div className="text-gray-800 mt-2">
           <p>{userData?.name}</p>
           <p>{userData?.road}</p>
           <p>{userData?.district} - {userData?.upazila}</p>
           <p>{userData?.mobile}</p>
         </div>
       </div>

       {/* Default Billing Address */}
       <div className='w-[40%]'>
         <h4 className="text-md font-semibold text-gray-600">DEFAULT BILLING ADDRESS</h4>
         <div className="text-gray-800 mt-2">
           <p>{userData?.name}</p>
           <p>{userData?.road}</p>
           <p>{userData?.district} - {userData?.upazila}</p>
           <p>{userData?.mobile}</p>
         </div>
       </div>
     </div>
     </div>
    
     </div>
{/* Recent Orders */}
     <div>
      <h1 className='bg-[#EFF0F4] py-4 px-3 font-semibold' >Recent Orders</h1>

      {
        allProductInfo?.slice(0, 3).map((product, idx)=>(<OdrerCart product={product} key={idx}></OdrerCart>))
      }
     </div>
    </div>
  );
};

export default AccountManagement;
