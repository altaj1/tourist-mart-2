import Link from 'next/link';
import React from 'react';

const CheckoutCouter = ({matchingData}) => {
    const subtotal = matchingData?.reduce(
        (acc, pd) => parseInt(acc) + parseInt(pd.price) * parseInt(pd.buyProductCount),
        0
      );
      const isDisabled = false
    return (
        <div className=" lg:pl-10 lg:pr-10 pl-5 mt-5 pr-5 space-y-2 shadow-lg bg-[#FFFFFF]  pb-10 pt-2 mr-5">
        <h1 className="text-2xl mt-4 font-semibold">Proceed to Pay</h1>
        <div>
          {matchingData?.map((pd) => (
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
          <span>Subtotal({matchingData.length}) </span> <span>{subtotal} BDT</span>
        </p>
        <p className=" pt-5 text-center">
        <Link
            href={isDisabled ? "#" : `/checkout/`}
            className={`text-gray-800 py-3 px-10 lg:px-16 transition-all duration-300 ease-in-out ${
              isDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#8dbe3f] hover:bg-[#5b8021] hover:text-yellow-50"
            }`}
            onClick={(e) => isDisabled && e.preventDefault()}
          >
            Place order({matchingData.length})
          </Link>
        </p>
      </div>
    );
};

export default CheckoutCouter;