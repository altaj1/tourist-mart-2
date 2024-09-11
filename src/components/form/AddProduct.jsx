"use client";
import { spotCategories } from "@/lib/spotCategories/spotCategories";
import React, { useRef, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { imageUpload } from "../HomePages/utilits";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "@/lib/hooks/apiHooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddProduct = () => {
  const session = useSession()
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [selectedSpotName, setSelectedSpotName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkboxItem, setCheckboxItem] = useState("");
  const [features, setFeature] = useState([]);
  const [color, setColor] = useState([])
  const colorRef = useRef(null);
  const featureInputRef = useRef(null);
  const [checkedIndex, setCheckedIndex] = useState(null);
  const [checkboxSize, setCheckBoxSize] = useState([]);
  const [coverImagePreview, setCoverImagePreview] = useState();
  const [groupImagePreview, setGroupImagePreview] = useState([]);
  const axiosSecure = useAxiosSecure();

  const handleSelectCategory = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const spot = spotCategories[selectedIndex - 1]; // Adjust for "Select" option at index 0
    setSelectedSpotName(spot?.category);
    setSelectedSpot(spot);
  };
  const handleSelectProduct = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const product = selectedSpot?.subcategories[selectedIndex - 1];
    setSelectedProduct(product);
    setCheckboxItem("");
    setCheckedIndex(null);
    if (product?.name == "Gadgets & Gear") {
      setCheckBoxSize([]);
    }
    if (product?.name !== "Gadgets & Gear") {
      setFeature([]);
    }
  };
  const handleCheckboxChange = (e, idx) => {
    const item = e.target.value;
    setCheckboxItem(item);
    setCheckedIndex(idx);
  };
  const handleFeature = (e) => {
    const feature = e.target.value;
    setFeature([...features, feature]);
    featureInputRef.current.value = "";
  };
  const handleCheckboxSize = (e) => {
    const size = e.target.value;
    setCheckBoxSize([...checkboxSize, size]);
  };

  const handleCoverImage = async(image) => {
    const image_url = await imageUpload(image)
    setCoverImagePreview(image_url)
    // setCoverImagePreview(URL.createObjectURL(image));
  };
  const handleGroupImage = async (image)=>{
    const image_url = await imageUpload(image)
  
    setGroupImagePreview([...groupImagePreview, image_url])
    // setGroupImagePreview([...groupImagePreview, URL.createObjectURL(image)])
  }
  const handleColer = (e)=>{
     const data = e.target.value;
     setColor([...color, data])
     colorRef.current.value = "";
  }
  const {mutateAsync} = useMutation({
    mutationFn:async productData =>{
      const {data} = await axiosSecure.post(`/agent/api/manage-product`, productData)
      return data;
    },
    onSuccess:()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Post Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const actualPrice = form.price.value
    const discount = form.discount.value
    const currentPrice = actualPrice * (1 - discount/100)
    
    const productData = {
      name: form.name.value,
      description: form.description.value,
      bracode: form.bracode.value,
      quantity: form.quantity.value,
      price: actualPrice,
      SpotName: selectedSpotName,
      category: selectedProduct?.name,
      item: checkboxItem,
      size: checkboxSize,
      features: features,
      coverImage:coverImagePreview,
      groupImage:groupImagePreview,
      discount:discount,
      currentPrice:currentPrice,
      color:color,
      agent:session?.data?.user?.email,
      spotId:selectedSpot?.id

    };
  console.log(productData, "this is product data");

    const res = mutateAsync(productData)
   
  };
  return (
    <>
      {/* button */}

      <div>
        <form onSubmit={handleSubmit} action="" className="container mx-auto mt-10">
          <div className="flex justify-between items-center mb-5 bg-[#F9F9F9] p-5 rounded-lg shadow-sm">
            <h3 className="font-semibold">Add New Product</h3>
            <button
              type="submit"
              className="bg-[#8DBE3F] hover:bg-[#5B8021] px-6 py-2 rounded-xl hover:text-yellow-50 text-xs font-semibold flex items-center gap-2"
            >
              <span className="font-bold text-sm">
                <MdOutlineFileDownloadDone />
              </span>{" "}
              <span>Add Product</span>
            </button>
          </div>
          <div className="lg:flex md:flex justify-between text-gray-800 container mx-auto gap-5">
            <div className="bg-[#F9F9F9]  lg:w-[65%] md:w-[65%] space-y-4 p-5 rounded-lg shadow-sm">
              <h1 className="font-semibold">General Information</h1>
              <div className="flex flex-col pl-5 pr-5 space-y-1">
                <label htmlFor="">Name Product*</label>
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  required
                  name="name"
                  className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                />
              </div>
              <div className="flex flex-col pl-5 pr-5 space-y-1">
                <label htmlFor="">Description Produce*</label>
                <textarea
                  required
                  className="h-20 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                  placeholder="Enter Product Description"
                  name="description"
                  id=""
                ></textarea>
              </div>
              {/* barcode quantity */}
              <div className="lg:flex md:flex justify-between  p-5 gap-4">
                <div className="flex flex-col  space-y-1 lg:w-[50%] md:w-[50%]">
                  <label htmlFor="">Barcode*</label>
                  <input
                    type="text"
                    placeholder="Enter Product Barcode"
                    required
                    name="bracode"
                    className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                  />
                </div>
                <div className="flex flex-col  lg:w-[50%] md:w-[50%] space-y-1">
                  <label htmlFor="">Quantity*</label>
                  <input
                    required
                    className=" rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                    placeholder="Enter Product Quantity"
                    name="quantity"
                    id=""
                  />
                </div>
              </div>
              {/* categoris */}
              <div className="lg:flex md:flex justify-between pl-5 pr-5 gap-4">
                <div className="lg:w-[50%] md:w-[50%] space-y-1">
                  <h1>Spot Category*</h1>
                  <select
                    required
                    className=" p-2 w-full bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F] "
                    onChange={handleSelectCategory}
                  >
                    <option value="">Select</option>
                    {spotCategories?.map((spot, index) => (
                      <option
                        key={index}
                        className="selection:bg-gray-800 hover:cursor-pointer"
                        value={spot.category} // Keep value for form submission if needed
                      >
                        {spot.category}
                      </option>
                    ))}
                  </select>
                </div>
                {/* product category */}
                <div className="lg:w-[50%] md:w-[50%] space-y-1">
                  <h1>Product Category*</h1>
                  <select
                    required
                    className=" p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F] "
                    onChange={handleSelectProduct}
                  >
                    <option value="">{selectedSpot?.subcategories ? "Select" : ""}</option>
                    {selectedSpot?.subcategories?.map((product, index) => (
                      <option
                        key={index}
                        className="selection:bg-gray-800 hover:cursor-pointer"
                        value={product.name} // Keep value for form submission if needed
                      >
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* items */}
              <div>
                {selectedProduct?.name == "Gadgets & Gear" ? (
                  <div className="lg:flex md:flex space-y-2 gap-4 pl-5 pr-5">
                    <div className="lg:w-[50%] md:w-[50%]">
                      <h1>Product Items*</h1>
                      {selectedProduct?.items?.map((item, idx) => (
                        <div className="space-x-1">
                          <input
                            type="checkbox"
                            id={`checkbox-${idx}`}
                            name="item"
                            value={item}
                            onChange={(event) =>
                              handleCheckboxChange(event, idx)
                            }
                            checked={checkedIndex === idx}
                          />
                          <label htmlFor={`checkbox-${idx}`}>{item}</label>
                        </div>
                      ))}
                    </div>
                    <div className="lg:w-[50%] md:w-[50%] flex flex-col">
                      <label htmlFor="">Product Features*</label>
                    <div className="w-[100%] flex focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F] rounded-md">
                    <input
                        type="text"
                        placeholder="Enter Product Features"
                        name="feature"
                        onBlur={handleFeature}
                        ref={featureInputRef}
                        className="p-2 w-full rounded-l-md focus:outline-none"
                      /> <div className="bg-slate-200 px-2 rounded-r-md flex items-center justify-center"> <IoIosAddCircleOutline /></div>
                    </div>
                      
                    </div>
                  </div>
                ) : (
                  // outhers
                  <div className="lg:flex md:flex space-y-2 gap-4 pl-5 pr-5 items-center justify-center">
                    <div className="lg:w-[50%] md:w-[50%]">
                      <h1>
                        {selectedProduct?.items.length == 3
                          ? "Gender*"
                          : "Product Items*"}
                      </h1>
                      {selectedProduct?.items?.map((item, idx) => (
                        <div className="space-x-1">
                          <input
                            type="checkbox"
                            id={`checkbox-${idx}`}
                            name="item"
                            value={item}
                            onChange={(event) =>
                              handleCheckboxChange(event, idx)
                            }
                            checked={checkedIndex === idx}
                          />
                          <label htmlFor={`checkbox-${idx}`}>{item}</label>
                        </div>
                      ))}
                    </div>
                    <div className="lg:w-[50%] md:w-[50%]">
                      <h1>Product Size*</h1>
                      {selectedProduct?.size?.map((size, idx) => (
                        <div className="space-x-1">
                          <input
                            type="checkbox"
                            id={`checkbox-${idx}`}
                            name="item"
                            value={size}
                            onChange={(event) => handleCheckboxSize(event, idx)}
                          />
                          <label htmlFor={`checkbox-${idx}`}>{size}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* upload img */}
            <div className=" md:w-[35%] lg:w-[35%] bg-[#F9F9F9] p-5 rounded-lg shadow-sm">
              <h1 className="font-semibold">Product Media</h1>
              {/* images */}
              <div className="p-5">
                <div>

                  <label className="flex flex-col  items-center rounded-lg shadow-lg bg-[#FCF7F1]">
                    <input
                      type="file"
                      className="text-sm cursor-pointer w-36 hidden bg-slate-200"
                      name="image"
                      accept="image/*"
                      id="image"
                      onChange={(e) => handleCoverImage(e.target.files[0])}
                      hidden
                      required
                    />
                    <div className="h-64 object-cover  rounded-lg  flex items-center justify-center">
                      {coverImagePreview ? (
                        <img className=" h-64 w-64 object-cover rounded-lg" src={coverImagePreview} />
                      ) : (
                        <p className="text-6xl opacity-50 ">
                          <span>
                            <IoIosAddCircleOutline />
                          </span>
                        </p>
                      )}
                    </div>
                  </label>
                  {/* group images */}
                  <label className="flex flex-col items-center mt-8 rounded-lg shadow-lg bg-[#FCF7F1]">
                    <input
                      type="file"
                      className="text-sm cursor-pointer w-36 hidden bg-slate-200"
                      name="image"
                      accept="image/*"
                      id="image"
                      onChange={(e) => handleGroupImage(e.target.files[0])}
                      hidden
                    />
                    <div className="h-28 object-cover overflow-auto rounded-lg gap-2 flex items-center ">
                      {groupImagePreview?.map(img=>(
                        <img className=" object-cover h-28 w-28 rounded-lg" src={img} />
                      ))}
                      <p className="text-3xl opacity-50 ml-2">
                          <span>
                            <IoIosAddCircleOutline />
                          </span>
                        </p>
                    </div>
                  </label>
                </div>
              </div>
              {/* prices brand */}
              <div className="lg:flex  justify-between  ">
                <div className="flex flex-col pl-5 pr-5 space-y-1 lg:w-[50%]">
                  <label htmlFor="">Price*</label>
                  <input
                    type="number"
                    placeholder="Enter Product Price"
                    required
                    name="price"
                    className="p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                  />
                </div>
                <div className="flex flex-col pl-5 pr-5 lg:w-[50%]  space-y-1">
                  <label htmlFor="">Brand</label>
                  <input
                    className=" rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                    placeholder="Enter Product Brand"
                    name="brand"
                    id=""
                  />
                </div>
              </div>
              {/* discount color */}
              <div className="lg:flex  justify-between mt-2 ">
                <div className="flex flex-col pl-5 pr-5 space-y-1 lg:w-[50%]">
                  <label htmlFor="">Discount</label>
                  <input
                    type="number"
                    placeholder="Enter Discount %"
                    
                    name="discount"
                    className="p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                  />
                </div>
                <div className="flex flex-col pl-5 pr-5 lg:w-[50%]  space-y-1">
                  <label htmlFor="">Colors</label>
                  <div className="w-[100%] flex focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F] rounded-md">
                    <input
                        type="text"
                        placeholder="Enter Product Colors"
                        name="color"
                        onBlur={handleColer}
                        ref={colorRef}
                        className="p-2 w-full rounded-l-md focus:outline-none"
                      /> <div className="bg-slate-200 px-2 rounded-r-md flex items-center justify-center"> <IoIosAddCircleOutline /></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
