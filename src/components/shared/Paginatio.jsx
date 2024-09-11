'use client'
import useAxiosCommon from '@/lib/hooks/apiHooks/useAxiosCommon';
import { add, decrement, increment } from '@/lib/store/features/pagination/paginationSlice';
import React, { useEffect, useState } from 'react';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

const Paginatio = () => {
    // const [currentPage, setCurrentPage] = useState(0);
    // const [itemsPerPage, setItemsPerPage] = useState(12);
    const axiosCommon = useAxiosCommon();
    const [count, setCount] = useState(0);
    const {pagination} = useSelector(state=> state)
   // console.log(reduxData.value," redux text")
    const dispatch = useDispatch();
    const numberOfPages = Math.ceil(count / 12);
    const pages = [...Array(numberOfPages).keys()];
    const handlePrevPage = () => {
        if (pagination.value > 0) {
          dispatch(decrement())
          // setCurrentPage(currentPage - 1);
        }
       
      };
    
      const handleNextPage = () => {
        
        if (pagination.value < pages.length - 1) {
          // setCurrentPage(currentPage + 1);
          dispatch(increment())
        }
      };
    useEffect(() => {
        axiosCommon
          .get(`/categores/api/count`)
    
          .then((res) => {
            setCount(res.data.count)
          });
      }, [pagination.value]);
    return (
        <div className="pagination join flex items-center justify-center p-16">
        <button
          className="flex items-center justify-center gap-1 mr-4"
          onClick={handlePrevPage}
        >
          <GrLinkPrevious /> Prev
        </button>
        <div className="text-2xl space-x-6">
          {pages.map((page) => (
            <button
              className={`${
                pagination.value == page
                  ? "bg-[#5B8021] text-yellow-50 w-10 rounded-full"
                  : ""
              } `}
              onClick={() =>dispatch(add(page)) }
              // setCurrentPage(page)
              key={page}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          className="flex items-center justify-center gap-1 ml-4"
          onClick={handleNextPage}
        >
          Next <GrLinkNext />
        </button>
      </div>
    );
};

export default Paginatio;