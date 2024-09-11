'use client'
import Image from 'next/image';
import React from 'react';
import OfferSlide from './OfferSlide';

const AddOffer = () => {
    return (
      <div className=' lg:flex md:flex justify-around mt-20 container mx-auto' >
          <div className='p-5 shadow-xl gap-3 rounded-lg'>
          
          <Image src={'/images/specialOffer.jpg'}
            alt='product'
            height={300}
            width={500}
            priority
            className='h-auto w-auto rounded-lg'
            ></Image>
          
            <div className='text-gray-800 space-y-2 w-[70%] mt-10'>
                <p className='text-3xl font-bold'>Buy Products Of Your Tourist Destination</p>
                <p className='text-2xl font-semibold'>Popular products at the best prices</p>
                <p className='text-xl font-medium'>Buy products worth BDT.2 thousand and win a coupon for 5% to 20% off</p>
            </div>
           
        </div>
        <OfferSlide></OfferSlide>
      </div>
    );
};

export default AddOffer;