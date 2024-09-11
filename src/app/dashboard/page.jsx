"use client"
import React from 'react';
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { useState } from 'react'
import { MdOutlineLeaderboard } from "react-icons/md";
import { signOut } from 'next-auth/react';
import Name from '@/components/shareComponents/Name';
import ShoppingCard from '@/components/shareComponents/ShoppingCard';
import AdminMenu from '@/components/Menu/AdminMenu';
import useRole from '@/lib/hooks/apiHooks/useRole';
import AgentMenu from '@/components/Menu/AgentMenu';
const DashboardPage = () => {
    const [isActive, setActive] = useState(false)
    const [toggle, setToggle] = useState(true)
    
    const {role, isLoading} = useRole()
       console.log(role, "this is role")
  //   console.log(role, isLoading)
    // Sidebar Responsive Handler
    const handleToggle = () => {
      setActive(!isActive)
    }
  
    return (
        <>
        {/* Small Screen Navbar */}
        <div className=' bg-[#131921] text-yellow-50 flex justify-between md:hidden'>
          <div>
            <div className='block cursor-pointer p-4 font-bold'>
              <Name></Name>
            </div>
          </div>
         <div className="flex"> 
         <ShoppingCard></ShoppingCard>
         <button
            onClick={handleToggle}
            className='mobile-menu-button p-4 focus:outline-none '
          >
            <AiOutlineBars className='h-7 w-7' />
          </button>
         </div>
         
        </div>
  
        {/* Sidebar */}
        <div
          className={`bg-gray-100 md:mt-44 lg:mt-32 mt-36 z-10 md:fixed flex flex-col justify-between overflow-x-hidden  w-64 space-y-6 px-2  py-4 absolute  inset-y-0 left-0 transform ${
            isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
              <div className="flex items-center justify-center">
            {/* <Link to='/'><img
            
              className=" lg:h-16 md:h-16 h-11 pt-2 "
              src="https://i.ibb.co/FgwgMQV/logo-removebg-preview.png"
              alt=""
            /></Link> */}
            <h1 className="text-2xl font-bold lg:block hidden inline-block  text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">BrainStrom</h1>
          </div>
                
              </div>
            </div>
  
            {/* Nav Items */}
            <div className='flex flex-col justify-between flex-1 mt-6'>
              
  
              {/*  Menu Items */}
              <nav>
              {/* <MenuItem
                  label='Leader Board'
                  address='/dashboard'
                  icon={ MdOutlineLeaderboard}
                /> */}
                {/* {role === 'User' && <UserMenu/>} */}
  
                
                {role === 'Agent' && <AgentMenu></AgentMenu>}
                
                {role === 'Admin' && <AdminMenu />}
              </nav>
            </div>
          </div>
  
          <div>
            <hr />
  
            {/* Profile Menu */}
          
            {/* <MenuItem
              label='Home'
              address='/'
              icon={FcHome}
            /> */}
  
            <button
              onClick={()=>signOut()}
              className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
            >
              <GrLogout className='w-5 h-5' />
  
              <span className='mx-4 font-medium'>Logout</span>
            </button>
          </div>
        </div>
      </>
    );
};

export default DashboardPage;