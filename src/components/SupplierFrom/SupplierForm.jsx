"use client"
import useAxiosSecure from '@/lib/hooks/apiHooks/useAxiosSecure';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineEyeOff } from "react-icons/hi";
import Swal from 'sweetalert2';
const SupplierForm = () => {
    const session = useSession()
    const [showPassword, setShowPassword] = useState(false);
const axiosSecure = useAxiosSecure();
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const {mutateAsync} = useMutation({
      mutationFn:async (updateData)=>{
        const data = await axiosSecure.put(`/supplier/api/${session?.data?.user?.email}`, updateData)
      },
      onSuccess:()=>{
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Request successfully!',
        });
      }
    })
    const handleSubmit =(e)=>{
      e.preventDefault()
      const updateUserData = {
        email:e.target.value,
        bankAccount:e.target.bankAccount.value,
        name:e.target.name.value,
        status:"Pending"
      }
    const result =  mutateAsync(updateUserData)
      console.log("bro ouch",result)
    }
    return (
        <div className="">
        <div className=" flex flex-col items-center justify-center">
          <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
            <div className="md:max-w-md w-full px-4 py-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-12">
                  <h3 className="text-gray-800 text-3xl font-extrabold">Become a supplier</h3>
                  <p className="text-sm mt-4 text-gray-800">Don't have a login  <Link href="/login" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login here</Link></p>
                </div>
  
                <div>
                  <label className="text-gray-800 text-xs block mb-2">Name</label>
                  <div className="relative flex items-center">
                    <input name="name" type="text"  required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter name" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
            viewBox="0 0 24 24">
            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
            <path
              d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
              data-original="#000000"></path>
          </svg>
                  </div>
                </div>
                <div className="mt-8">
                  <label className="text-gray-800 text-xs block mb-2">Email</label>
                  <div className="relative flex items-center">
                    <input name="email" type="text" defaultValue={session?.data?.user?.email} disabled readOnly required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter email" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                        <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                        <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                      </g>
                    </svg>
                  </div>
                </div>
  
                <div className="mt-8">
                  <label className="text-gray-800 text-xs block mb-2">Bank Account</label>
                  <div className="relative flex items-center">
                    <input name="bankAccount" type={showPassword ? 'text' : 'password'} required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter password" />
                    <svg onClick={togglePasswordVisibility} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                    </svg>
                    {/* <HiOutlineEyeOff /> */}
                  </div>
                </div>
  
                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label for="remember-me" className="ml-3 block text-sm text-gray-800">
                      Remember me
                    </label>
                  </div>
                </div>
  
                <div className="mt-12">
                  <button type="submit" disabled={!session?.data?.user} className={`${!session?.data?.user ? "bg-slate-400": ""} w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white hover:bg-[#5b8021] hover:text-yellow-50 duration-150 bg-[#8dbe3f] focus:outline-none`}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
  
            <div className="md:h-full bg-[#000842] rounded-xl lg:p-12 p-8">
              <Image height={400} width={400} src="/images/supplier.gif" className="w-full h-full object-contain" alt="login-image" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default SupplierForm;