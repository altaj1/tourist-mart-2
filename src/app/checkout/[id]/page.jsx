"use client";
import CheckoutCouter from "@/components/checkoutProductCart/CheckoutCouter";
import CheckoutProductCart from "@/components/checkoutProductCart/CheckoutProductCart";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { UpdateUserModal } from "@/components/UpdateUserModal/UpdateUserModal";
import useGetUser from "@/lib/hooks/getDataHook/useGetUser";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [localStorageProducts, setlocalStorageProducts] = useState([]);
  const [matchingProductData, setMatchingProductData] = useState([])  
  const mainProductIdes = params.id.split("%2C");
  const subtotal = matchingProductData?.reduce(
    (acc, pd) => parseInt(acc) + parseInt(pd.price) * parseInt(pd.buyProductCount),
    0
  );
  const {userData, refetch, isLoading} = useGetUser()

  useEffect(() => {
    const storedProducts = localStorage.getItem("product");
    const products = storedProducts ? JSON.parse(storedProducts) : [];
    setlocalStorageProducts(products);
  }, []);
 
  useEffect(()=>{
    const matchingData = localStorageProducts.filter((item) =>
      mainProductIdes.includes(item.mainProductId)
    );
    setMatchingProductData(matchingData)
  },[localStorageProducts])
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div className="flex container mx-auto bg-[#F4F4F4] gap-5">
      <div className="w-[70%]">
        <div className="flex justify-between items-center p-5 m-5 bg-white">
          <div>
            <p className="font-bold">Shipping address</p>
            <p>
              <span className="font-semibold">Name: </span>{" "}{userData?.name}, 
              <span className="font-semibold">  Phone: </span>{userData?.mobile}
            </p>
            <div className="flex gap-3">
              {" "}
              <p>
                <span className="font-semibold">District:</span>{" "}
                <span>{userData?.district},</span>
              </p>
              <p>
                <span className="font-semibold">Upazila:</span>{" "}
                <span>{userData?.upazila}</span>
              </p>
            </div>

           <div className="flex gap-3">
           <p>
              <span className="font-semibold">Road:</span>{" "}
              <span>{userData?.road},</span>
            </p>
            <p>
              <span className="font-semibold">Home:</span>{" "}
              <span>{userData?.home}</span>
            </p>
           </div>
          </div>
          {/* modal */}
          <div>
          <button
              className="text-[#293614] font-semibold"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Change
            </button>
           <UpdateUserModal></UpdateUserModal>

          </div>
        </div>
        {/* product cart */}
        <div>
        {/* matchingData */}
        {
          matchingProductData?.map((product, idx)=>(<CheckoutProductCart product={product} key={idx}></CheckoutProductCart> ) )
        }
        </div>
      </div>
      <div className="w-[30%]">
      <CheckoutCouter subtotal={subtotal} matchingData={matchingProductData} setMatchingProductData={setMatchingProductData} mainProductIdes={mainProductIdes}></CheckoutCouter>
        </div>
    </div>
  );
};

export default Page;
