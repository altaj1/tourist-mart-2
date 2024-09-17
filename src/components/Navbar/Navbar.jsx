"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import axios from "axios";
import { IoCartOutline, IoSearchSharp, IoPersonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import Search from "./Search";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Name from "../shareComponents/Name";
import ShoppingCard from "../shareComponents/ShoppingCard";
const Navbar = () => {
  const session = useSession();

  return (
    <div className="bg-[#232F3E] text-yellow-50">
      {/* first navbar */}
      <div className="navbar container mx-auto">
        <div className="   flex navbar-start ">
          {/* hambarger manue */}
          <div className="dropdown bg-[#232F3E]">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden lg:hidden text-yellow-50 text-3xl "
            >
              <GiHamburgerMenu />
            </div>
            {/* sm */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-50 p-2 text-yellow-50 bg-[#232F3E] text-center space-y-1 rounded-b-md w-52 flex flex-col items-center"
            >
            <div>
            <Link
            href={"/dashboard"}
            className="text-4xl font-bold block xl:hidden lg:hidden md:hidden"
          >
            <IoPersonOutline />
          </Link>
            </div>
               <div className="block xl:hidden lg:hidden md:hidden">
            {session?.status === "authenticated" && (
              <div className="text-center block xl:hidden lg:hidden md:hidden">
                <p>Welcome</p>
                <p>{session?.data?.user?.email}</p>
              </div>
            )}
          </div>
          <div className="block xl:hidden lg:hidden md:hidden">
            {session?.status === "unauthenticated" && (
              <Link href={"/login"} className="text-lg font-medium">
                Login
              </Link>
            )}
          </div>
          <div className="block xl:hidden lg:hidden md:hidden">
            {" "}
            {session?.status === "authenticated" && (
              <button className="" onClick={() => signOut()}>
                Logout
              </button>
            )}
          </div>
              <Link href={"/"} className=" font-medium">
                Gift Cards
              </Link>
              <Link href={"/"} className=" font-medium">
                Tourist Mart Donates
              </Link>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className=" m-1">
                  Help & Support
                </div>
                {/* hover */}
                {/* <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul> */}
              </div>
              {/* sm */}
            </ul>
          </div>
          <div className="flex flex-col md:flex-row  w-full hidden lg:block md:block gap-8">
            <Link
              href={"/admin/dashboard"}
              className="text-lg font-medium mr-5"
            >
              Gift Cards
            </Link>
            <Link href={"/"} className="text-lg font-medium mr-5">
              Tourist Mart Donates
            </Link>
            <Link href={"/"} className="text-lg font-medium mr-5">
              Become a supplier
            </Link>
            <div className="dropdown dropdown-hover mr-5 ">
              <div tabIndex={0} role="button" className=" m-1 flex items-end ">
                <p>Help & Support</p>
                <FaAngleDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu text-gray-800 bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-full md:w-[55%] mt-2 md:mt-0 lg:hidden md:hidden navbar-center">
          <Search />
        </div>
        {/* sm midden lg block md blocc */}
        <div className="navbar-end text-end  space-x-4">
          <Link
            href={"/dashboard"}
            className="text-4xl font-bold hidden xl:block lg:block md:block"
          >
            <IoPersonOutline />
          </Link>

          {session?.status === "loading" && <h6>Loading....</h6>}
          <div className="hidden xl:block lg:block md:block">
            {session?.status === "authenticated" && (
              <div className="text-center lg:block md:block hidden">
                <p>Welcome</p>
                <p>{session?.data?.user?.email}</p>
              </div>
            )}
          </div>
          <div className="hidden xl:block lg:block md:block">
            {session?.status === "unauthenticated" && (
              <Link href={"/login"} className="text-lg font-medium">
                Login
              </Link>
            )}
          </div>
          <div className="hidden xl:block lg:block md:block">
            {" "}
            {session?.status === "authenticated" && (
              <button className="" onClick={() => signOut()}>
                Logout
              </button>
            )}
          </div>
        </div>
        {/* bloc md:hidden lg:hediin */}
        <div className="block md:hidden lg:hidden xl:hidden">
          <ShoppingCard></ShoppingCard>
        </div>
      </div>

      {/* {/* secoend nabbar */}
      <div className="bg-[#131921] py-2 border-b border-gray-700 lg:block md:block hidden">
        <div className="container mx-auto px-4 flex  md:flex-row items-center lg:gap-10 md:gap-10 justify-between">
          <div>
            <Name></Name>
          </div>
          <div className="lg:w-full md:w-[55%] mt-2 md:mt-0 lg:block md:block hidden">
            <Search />
          </div>
          {/* card */}
          <ShoppingCard></ShoppingCard>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
