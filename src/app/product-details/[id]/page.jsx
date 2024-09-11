"use client"
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import useAxiosSecure, { axiosSecure } from '@/lib/hooks/apiHooks/useAxiosSecure';
import { productId } from '@/lib/store/features/cart/cartSlice';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMinus } from 'react-icons/fi';
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
const page = ({params}) => {
    // console.log(params.id)
    const [buyProductCount, setBuyProductCount] = useState(1);
    const axiosS= useAxiosSecure()
    const dispatch = useDispatch()
    const handleAddToCart =(id)=>{
        console.log(typeof id)
        dispatch(productId(id))
      }
    const {data:productDetails={}, isLoading} = useQuery({
        queryKey:["detailsProduct"],
        queryFn: async()=>{
            const {data} = await axiosSecure(`/product-details/api/${params.id}`)
         
            return data?.data
        }
    })
    const { 
        SpotName,
        _id,
        bracode,
        color,
        coverImage,
        currentPrice,
        description,
        discount,
        item,
        name,
        features,
        size,
        groupImage, 
        price,
      } = productDetails;
    console.log(productDetails)
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="lg:flex md:flex mx-auto container p-5 gap-5">
        {/* cover image */}
        <div className="lg:w-[50%] md:w-[50%]">
          <img src={coverImage} alt="" />
         
          <div className='flex'>{
            groupImage.map(img=>( <img className='h-32 rounded-lg' src={img} alt="" /> ))
            }</div>
        </div>
        {/* outher information */}
        <div className="space-y-8 lg:w-[50%] md:w-[50%]">
          <h1 className="text-2xl font-medium">{name}</h1>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-[#8dbe3f]"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-[#8dbe3f]"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-[#8dbe3f]"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-[#8dbe3f]"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-[#8dbe3f]"
            />
          </div>
          <p className="text-lg">
            <span>Brand:</span>{" "}
            <span className=" font-medium text-[#5a7a25]">{SpotName}</span>
          </p>
  
          <hr />
          <p className="text-[#5a7a25] text-2xl font-semibold">
            BDT <span>{currentPrice}</span>
          </p>
          <p className="font-semibold">
            <span className="opacity-70">BDT{price}</span>{" "}
            <span>-{discount}%</span>
          </p>
          {/* <p>{color[0]}</p> */}
          <hr />
          <p>{description}</p>
          <hr />
          <p className="flex space-x-5 text-lg">
            <span className="p-2">Quantity</span>{" "}
            <div className="flex gap-2 items-center text-lg font-semibold">
              <button
                disabled={buyProductCount == 1}
                onClick={() => setBuyProductCount(buyProductCount - 1)}
              >
                <FiMinus />
              </button>
              <p>{buyProductCount}</p>
              <button onClick={() => setBuyProductCount(buyProductCount + 1)}>
                <FaPlus />
              </button>
            </div>
          </p>
          <div className="space-x-10">
              <Link href={`/checkout/${_id}`} className="px-8 py-3 bg-[#8DBE3F] font-semibold hover:bg-[#5B8021] hover:text-white">Buy Now</Link>
              <button onClick={()=>handleAddToCart(_id)} className="px-6 py-3 bg-[#5B8021] font-semibold hover:bg-[#8DBE3F] hover:text-gray-800 text-white">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default page;