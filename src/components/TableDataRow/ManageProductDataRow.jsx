"use client"
import { useState,  useEffect } from "react";
import Image from "next/image";
import UpdateProductModal from "../Modal/UpdateProductModal";

const ManageProductData = ({ product }) => {
  const [selectedProductID, setSelectedProductID] = useState("");
  const handleEditClick = (id) => {
     // Pass the current product to the modal
     setSelectedProductID("")
     console.log(id, "Pass the current product to the modal")
     setSelectedProductID(id);
  };
  const {
    quantity,
    bracode,
    name,
    coverImage,
    _id
  } = product;
  useEffect(() => {
    if (selectedProductID) {
      const modal = document.getElementById("my_modal_update_product").showModal();
      // if (modal) {
      //   modal.showModal();
      // }
    }
  }, [selectedProductID]); 
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-800">
        <Image src={coverImage} // Use `spot.photo.src` here
          alt="coverImage"
          width={100} // Use `spot.photo.width` here
          height={100} // Use `spot.photo.height` here
          priority
          className="h-28 rounded-md bg-cover"/>
      </td>
      <td className="px-4 py-4 text-sm text-gray-800">{name}</td>
      <td className="px-4 py-4 text-sm text-gray-800">{quantity}</td>
      <td className="px-4 py-4 text-sm text-gray-800">{bracode}</td>
      <td className="px-4 py-4 text-sm text-gray-800">
        <button  onClick={()=>handleEditClick(_id)} className="text-blue-600 mr-4">Edit</button>
        <UpdateProductModal productId={selectedProductID}></UpdateProductModal>
        <button className="text-red-600">Delete</button>
      </td>
     
    </tr>
  );
};

export default ManageProductData;
