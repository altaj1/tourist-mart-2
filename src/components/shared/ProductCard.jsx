
import { productId } from "@/lib/store/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import PreviewButton from "./PreviewButton";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const {
    coverImage,
    currentPrice,
    name,
    price,
    _id,
    discount,
    BrandName,
    sold,
    ratings,
  } = product;
  const handleAddToCart =(id)=>{
    console.log(typeof id)
    dispatch(productId(id))
  }
  return (
    <div className="relative hover:z-50 card hover:shadow-xl p-5  duration-100 transform hover:scale-y-105 ">
      <figure className="h-60">
        <Image
          src={coverImage} // Use `spot.photo.src` here
          alt="categories"
          width={500} // Use `spot.photo.width` here
          height={400} // Use `spot.photo.height` here
          priority
          className="h-60 w-full rounded-b-xl"
        />
      </figure>
      <div className="flex  gap-1 mt-1 font-medium">
        <p className="bg-[#FFD9D8] text-xs text-center py-1 px-1 rounded-sm">
          BigSave
        </p>
        <p className="bg-[#FFE5C1] text-xs py-1 rounded-sm px-1">Brand</p>
        <p className="text-sm ">{BrandName}</p>
      </div>
      <div className="">
        <div className="h-26 pt-2">
          <h2 className="font-semibold">{name}</h2> {/* rating */}
        <div className="flex  items-center justify-between">
          <div>  <div className="flex items-center gap-3 ">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-sm font-">{sold ? sold : "78+"}sold</p>
          </div>
          <p className="">
            <span className="text-xl font-medium">
              BDT{parseFloat(currentPrice).toFixed()}
            </span>{" "}
            <span className="opacity-50 text-sm">BDT{price}</span>
          </p></div>
          <button onClick={()=>handleAddToCart(_id)} className="text-4xl mr-8 hover:text-[#90C044]">
          <BsCartPlus />
          </button>
        </div>
        </div>
        {/* end button */}
        <div className=" flex items-center justify-between mt-1">
          <p className=" rounded-r-xl px-2 badge-outline bg-red-600 text-white font-medium">
            {discount}% off
          </p>
          <PreviewButton id = {_id}></PreviewButton>
      
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
