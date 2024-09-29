"use client";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import OdrerCart from "@/components/shared/OdrerCart";
import useAxiosSecure from "@/lib/hooks/apiHooks/useAxiosSecure";
import useGetMyOrders from "@/lib/hooks/getMyOrders/useGetMyOrders";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const MyOrders = () => {
  const { allProductInfo, ordersProduct, isLoading, refetch } =
    useGetMyOrders();
  console.log(ordersProduct);
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="p-2">
    <h1 className="text-3xl mb-5">My Orders</h1>
    <div className="mt-2">
    {ordersProduct?.data?.map((products) => (
        <div key={products._id} className="mt-5 mb-2">
          
            <p className="flex justify-between mb-5">
              <span>{new Date(products?.date).toLocaleString()}</span>{" "}
              <span>BDT {products?.subtotal}</span>
              <span >{products?.status}</span>
              <span className="bg-[#C8C8C8] p-1 px-2 rounded-lg">Manage</span>
            </p>
          <hr />
          <div>
            {
                products?.productInfo?.map((product, idx)=><OdrerCart key={idx} product={product}></OdrerCart>)
            }
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyOrders;
