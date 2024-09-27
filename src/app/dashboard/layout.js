"use client";
import React, { useEffect } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";
import { MdOutlineLeaderboard } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import Name from "@/components/shareComponents/Name";
import ShoppingCard from "@/components/shareComponents/ShoppingCard";
import AdminMenu from "@/components/Menu/AdminMenu";
import useRole from "@/lib/hooks/apiHooks/useRole";
import AgentMenu from "@/components/Menu/AgentMenu";

import Link from "next/link";
import { useRouter } from "next/navigation";
import MenuItem from "@/components/Menu/MenuItem";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import UserMenu from "@/components/Menu/UserMenu";
export default function DashboardLayout({ children }) {
  const [isActive, setActive] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const { data: session, status } = useSession();
  const { role = "", isLoading = false } = useRole();
  const router = useRouter();
  const handleToggle = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    if (status === "loading") {
      return;
    }
    if (status === "unauthenticated" || !session?.user) {
      setUserLoading(false);
      router.push("/login");
    } else {
      setUserLoading(true);
    }
  }, [session?.data?.user, userLoading]);
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div className="container mx-auto ">
      {/* Small Screen Navbar */}
      <div className=" bg-[#131921] text-yellow-50 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Name></Name>
          </div>
        </div>
        <div className="flex">
          {/* <ShoppingCard></ShoppingCard> */}
          <button
            onClick={handleToggle}
            className="mobile-menu-button p-4 focus:outline-none "
          >
            <AiOutlineBars className="h-7 w-7" />
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`bg-gray-100 fixed lg:sticky md:sticky md:mt-0  lg:mt-0 sm:h-[700px] mt-32 flex-col justify-between overflow-x-hidden    w-64 space-y-6   py-4   inset-y-0  transform ${
            isActive && "-translate-x-full"
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
                <div className="flex items-center justify-center">
                  {/* <Link  href={"/"}
            >
            <Name></Name>
            </Link> */}
                </div>
              </div>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col justify-between flex-1 mt-6">
              {/*  Menu Items */}
              <nav>
                <MenuItem
                  label="Manage My Account"
                  address="/dashboard"
                  icon={MdOutlineLeaderboard}
                />
                {role === 'User' && <UserMenu/>}

                {role === "Agent" && <AgentMenu></AgentMenu>}

                {role === "Admin" && <AdminMenu />}
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
              onClick={() => signOut()}
              className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
            >
              <GrLogout className="w-5 h-5" />

              <span className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </div>
        <main className="overflow-auto  w-full">{children}</main>
      </div>
    </div>
  );
}
