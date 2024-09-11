import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import PreviewButton from "../shared/PreviewButton";
const SoppingProductCart = ({ product, buyProduct, setBuyProduct,  
  handelProductDelet, 

  refetch,}) => {
  const [summary, setSummary] = useState([]);
  const [buyProductCount, setBuyProductCount] = useState(1);
  const { coverImage, currentPrice, name, price, mainProductId, _id } = product;
  const handelCheckOut = (product, isChecked) => {
   
    if (isChecked) {
      const buyData = {
        ...product,
        productCartId: product._id,
        buyProductCount: buyProductCount,
      };
      delete buyData._id;  
      setBuyProduct([...buyProduct,buyData]);
      // const storeSummary = localStorage.getItem('product')
      // console.log(storeSummary)
      localStorage.setItem("product", JSON.stringify([...buyProduct, buyData]))
    }
     else {
      const updatedProducts = buyProduct.filter(
        (item) => item.productCartId !== product._id
      );
      setBuyProduct(updatedProducts);
      localStorage.setItem("product", JSON.stringify(updatedProducts));
    }
  };
  
    //  useEffect(()=>{
    //       const storeSummary = localStorage.getItem('product')
    //       if (storeSummary) {
    //       setSummary(JSON.parse(storeSummary))
            
    //       }
    //       // console.log(storeSummary)
    //      },[buyProduct])
        //  const match = summary.filter(s=>{
        //   console.log(s.productCartId, product._id)
        //   s.productCartId === product._id
        //  })
        //  console.log(product, summary)
  return (
    <div className="flex space-x-5 bg-[#FFFFFF] p-5 mt-3 shadow-lg">
      <input
  
      // checked= {summary.fill(s=>s._id === product._id)}
        type="checkbox"
        name=""
        value={product._id}
        id=""
        onChange={(e) => handelCheckOut(product, e.target.checked)}
      />
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
          <button className="pr-11" onClick={()=> handelProductDelet(_id)}>
            <RiDeleteBinLine />
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-semibold">BDT {currentPrice}</p>
            <p className="opacity-75">BDT {price}</p>
            <p>Shipping: BDT 80</p>
          </div>
          <div className="flex flex-col items-center ">
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
            <PreviewButton id={mainProductId}></PreviewButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoppingProductCart;
