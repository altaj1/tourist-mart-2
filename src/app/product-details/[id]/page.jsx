"use client"
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import useAxiosSecure, { axiosSecure } from '@/lib/hooks/apiHooks/useAxiosSecure';
import { productId } from '@/lib/store/features/cart/cartSlice';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiMinus } from 'react-icons/fi';
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Page = ({params}) => {
   
    const [buyProductCount, setBuyProductCount] = useState(1);
    const [localStorageProduct, setlocalStorageProduct] = useState([]);
    const session = useSession()
    const axiosSecure= useAxiosSecure()
    const dispatch = useDispatch()
    const [userLoading, setUserLoading] = useState(true);

    // const { data: session, status } = useSession();
    const router = useRouter();
  console.log(session)
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

    console.log(session?.data?.user?.email)
    const handleBuy = async()=>{
      const  buyData = await {
        ...productDetails,
        addEmail:session?.data?.user?.email,
        mainProductId: productDetails._id,
        buyProductCount: buyProductCount,
      };
      delete buyData._id;  
      localStorage.setItem("product", JSON.stringify([...localStorageProduct, buyData]))
    }
    
    useState(() => {
      const storedProducts = localStorage.getItem("product");
      const products = storedProducts ? JSON.parse(storedProducts) : [];
      setlocalStorageProduct(products)
    }, []);

    useEffect(() => {
      if (session?.status === "loading") {
        return;
      }
      if (session?.status === "unauthenticated" || !session?.data.user) {
        setUserLoading(false);
        router.push("/login");
      } else {
        setUserLoading(true);
      }
    }, [session?.data?.user, userLoading]);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="lg:flex md:flex mx-auto container p-5 gap-5">
        {/* cover image */}
        <div className="lg:w-[50%] md:w-[50%]">
          <Image height={400} width={600}   src={coverImage} alt="jaksj" />
         
          <div className='flex'>{
            groupImage.map((img, idx)=>( <Image height={400} width={600} className='h-32 rounded-lg'  alt="" key={idx} /> ))
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
               <button onClick={handleBuy}> <Link href={`/checkout/${_id}`} className="px-8 py-3 bg-[#8DBE3F] font-semibold hover:bg-[#5B8021] hover:text-white">Buy Now</Link></button>
             
              <button onClick={()=>handleAddToCart(_id)} className="px-6 py-3 bg-[#5B8021] font-semibold hover:bg-[#8DBE3F] hover:text-gray-800 text-white">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default Page;