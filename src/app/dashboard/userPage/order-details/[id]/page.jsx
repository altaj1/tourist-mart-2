"use client";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import useAxiosSecure from "@/lib/hooks/apiHooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RiDeleteBin7Line } from "react-icons/ri";

const OrderDetails = ({ params }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const {
    data: productInfo = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orderDetails"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/dashboard/userPage/order-details/api/${params.id}`
      );
      console.log(data);
      return data;
    },
  });

  const {mutateAsync} = useMutation({
    mutationFn:async (cancelled) =>{
      const {data} = await axiosSecure.put(`/dashboard/userPage/order-details/api/${params.id}`, {cancelled})
    },
    onSuccess:()=>{
      toast.success("Cancelled Order")
      refetch()
    }
  })
  const {mutateAsync:deleteProduct} = useMutation({
    mutationFn: async (productCartId)=>{
      console.log(productCartId)
      const {data} = await axiosSecure.delete(`/dashboard/userPage/order-details/api/${params.id}?productCartId=${productCartId} `)
    },
    onSuccess:()=>{
      toast.success("Delete Product")
      refetch()
    }
  })
  const handleCancelled = ()=>{
    mutateAsync("Cancelled")
  }
   
  const handleDeleteProduct =(productCartId)=>{
deleteProduct(productCartId)

  }

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="p-5">
      <h1 className="text-3xl mb-5">Order Details</h1>
      <p className="flex justify-between mb-5 items-center">
        <span>{new Date(productInfo?.data?.date).toLocaleString()}</span>{" "}
        <span>BDT {productInfo?.data?.subtotal}</span>
        <span>{productInfo?.data?.status}</span>
       <span>
       <div className="relative font-[sans-serif] w-max mx-auto">
          <button
          disabled={productInfo?.data?.status == "Packaging"}
            type="button"
            id="dropdownToggle"
            className="px-5 py-2.5 border border-gray-300 text-gray-800 text-sm outline-none bg-white hover:bg-gray-50"
            onClick={toggleDropdown}
          >
            {productInfo?.data?.status == "Packaging"? "Packaging": "Cancel order"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-gray-500 inline ml-3"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
                data-original="#000000"
              />
            </svg>
          </button>

          <ul
            id="dropdownMenu"
            className={`absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
              <button onClick={handleCancelled}>Cancelled</button>
            </li>
          </ul>
        </div>
       </span>
      </p>
      <hr />
      <div>
        {productInfo?.data?.productInfo?.map((product, idx) => (
                 <div key={idx} className='mt-3 bg-slate-100 p-5 flex gap-2'>
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
                 <p className='pb-1 font-semibold'>Qut: {product?.buyProductCount}</p>
               <button onClick={()=>handleDeleteProduct(product?.productCartId)} className="text-2xl"><RiDeleteBin7Line /></button>
              </div>
            </div>
          </div>
            </div>
              ))}
      </div>
    </div>
  );
};

export default OrderDetails;
