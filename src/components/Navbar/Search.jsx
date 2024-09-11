'use client'
import { searchText } from "@/lib/store/features/searchText/searchTextSlice";
import { useRouter } from "next/navigation";

import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch()

  const handleSearchText = (e)=>{
    e.preventDefault()
    const text = e.target.searchText.value;
    // console.log(text, "thsi is text")
    dispatch(searchText(text))
    
  }
  return (
    <form onSubmit={handleSearchText} action="">
    <div className="lg:w-full md:w-full w-44 flex items-center lg:rounded-lg md:rounded-lg rounded-l-lg bg-slate-50 hover:outline outline-[#8dbe3f] transition-all duration-150 ease-in-out">
   <input
     type="text"
     name="searchText"
     placeholder="Search Tourist Mart"
     className="lg:w-full md:w-full w-44 lg:rounded-lg md:rounded-lg pl-5 focus:outline-none text-gray-800"
   />
   <button   type="submit" className="text-xl text-gray-800 bg-[#8dbe3f] py-3 pr-5 rounded-r-lg pl-4 hover:bg-[#5b8021] hover:text-yellow-50 transition-all duration-300 ease-in-out">
    
     <IoSearchSharp />
   </button>
 </div>
</form>
  
  );
};

export default Search;
