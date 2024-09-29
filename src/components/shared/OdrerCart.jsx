import React from 'react';
import PreviewButton from './PreviewButton';
import Image from 'next/image';

const OdrerCart = ({product, }) => {
    return (
        <div className='mt-3 bg-slate-100 p-5 flex gap-2'>
             <div className="space-x-5">
        <Image
          src={product?.coverImage}
          height={500}
          width={500}
          priority
          alt="product img"
          className="h-32 w-40"
        ></Image>
      </div>
      <div className="w-full opacity-90 ">
        <div className="flex justify-between  items-center text-xl font-bold">
          <p>{product?.name}</p>
        
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-semibold">BDT {product?.currentPrice}</p>
            <p className="opacity-75">BDT {product?.price}</p>
            <p>Shipping: BDT 80</p>
          </div>
          <div className="flex flex-col items-center ">
           
            <PreviewButton id={product?.mainProductId}></PreviewButton>
          </div>
        </div>
      </div>
        </div>
      
    );
};

export default OdrerCart;