
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpotCategoriesCart = ({ spot }) => {
  
  return (
    <div className="">
     <Link href={`/categores/${spot.id}`} className="p-3 shadow-lg rounded-lg h-40 bg-[#F5F5F5] text-center flex  flex-col items-center justify-center hover:shadow-[#8DBE3F] hover:shadow-sm">
     <Image
         src={spot.photo.src} // Use `spot.photo.src` here
         alt="categories"
         width={spot.photo.width} // Use `spot.photo.width` here
         height={spot.photo.height} // Use `spot.photo.height` here
         priority
         className="h-24 w-24 rounded-full"
      />
      <p className="text-gray-800 ">{spot.category}</p>
     </Link>
      
    </div>
  );
};

export default SpotCategoriesCart;
