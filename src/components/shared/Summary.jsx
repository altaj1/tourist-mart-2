import { Dai_Banna_SIL } from "next/font/google";
import Link from "next/link";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const Summary = ({ summary, isLoading }) => {
  const subtotal = summary?.reduce(
    (acc, pd) => parseInt(acc) + parseInt(pd.price),
    0
  );
  const isDisabled = summary.length === 0;
  const productIds = summary.map(pd => pd.mainProductId)
  // console.log( productIds)
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div className="lg:w-[30%] md:w-[30%] lg:pl-10 lg:pr-10 pl-5 pr-5 space-y-2 shadow-lg bg-[#FFFFFF] mt-3 pb-10">
      <h1 className="text-2xl mt-4 font-semibold">Summary</h1>
      <div>
        {summary?.map((pd) => (
          <div className="mt-3">
            <p className="flex justify-between items-center">
              <span>{pd?.name}</span>
              <span>{pd?.price} BDT</span>
            </p>
          </div>
        ))}
      </div>
      <hr />
      <p className="flex justify-between items-center">
        <span>Subtotal({summary.length}) </span> <span>{subtotal} BDT</span>
      </p>
      <p className=" pt-5 text-center">
      <Link
          href={isDisabled ? "#" : `/checkout/${productIds}`}
          className={`text-gray-800 py-3 px-10 lg:px-16 transition-all duration-300 ease-in-out ${
            isDisabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#8dbe3f] hover:bg-[#5b8021] hover:text-yellow-50"
          }`}
          onClick={(e) => isDisabled && e.preventDefault()}
        >
          CHECKOUT({summary.length})
        </Link>
      </p>
    </div>
  );
};

export default Summary;
