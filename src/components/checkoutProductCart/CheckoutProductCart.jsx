import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import PreviewButton from '../shared/PreviewButton';
import Image from 'next/image';

const CheckoutProductCart = ({product}) => {
    const { coverImage, currentPrice, name, price, mainProductId, buyProductCount
    } = product;
    let today = new Date();
    let futureDate = new Date();
    futureDate.setDate(today.getDate() + 7);
   console.log(product)
    return (
      <div className='bg-white p-5 m-5'>
          <div className='flex gap-4'>
        <div className="space-x-5">
        <Image
          src={coverImage}
          height={500}
          width={500}
          priority
          alt="product img"
          className="h-32 w-40"
        ></Image>
      </div>
        <div className="w-full opacity-90">
        <div className="flex justify-between  items-center text-xl font-bold">
          <p>{name}</p>
          {/* <button className="pr-11" onClick={()=> handelProductDelet(_id)}>
            <RiDeleteBinLine />
          </button> */}
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-semibold">BDT {currentPrice}</p>
            <p className="opacity-75">BDT {price}</p>
            <p>Shipping: BDT 80</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex gap-2 items-center text-lg font-semibold mr-10">
              <button
                // disabled={buyProductCount == 1}
                // onClick={() => setBuyProductCount(buyProductCount - 1)}
              >
                <FiMinus />
              </button>
              <p>{buyProductCount}</p>
              <button 
            //   onClick={() => setBuyProductCount(buyProductCount + 1)}
              >
                <FaPlus />
              </button>
            </div>
            
          </div>
        </div>
      </div>
     
        </div>
         <div className='flex justify-between items-center'>
            <div><p>Shipping: BDT 120</p>
            <p>{futureDate.toLocaleDateString()}</p></div>
        <PreviewButton id={mainProductId}></PreviewButton>
      </div>
      </div>
    );
};

export default CheckoutProductCart;