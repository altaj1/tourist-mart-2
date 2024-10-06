"use client"
import { useState } from "react";
import Image from "next/image";
import UpdateProductModal from "../Modal/UpdateProductModal";

const ManageProductData = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleEditClick = (pd) => {
     // Pass the current product to the modal
    document.getElementById("my_modal_update_product").showModal(); // Open modal
    setSelectedProduct(pd);
  };
  const {
    quantity,
    bracode,
    name,
    coverImage,
  } = product;
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
        <button  onClick={()=>handleEditClick(name)} className="text-blue-600 mr-4">Edit</button>
        <UpdateProductModal product={selectedProduct}></UpdateProductModal>
        <button className="text-red-600">Delete</button>
      </td>
     
    </tr>
  );
};

export default ManageProductData;
