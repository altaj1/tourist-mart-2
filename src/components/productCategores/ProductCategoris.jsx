"use client";
import useAxiosCommon from "@/lib/hooks/apiHooks/useAxiosCommon";
import { spotCategories } from "@/lib/spotCategories/spotCategories";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useSelector } from "react-redux";
import Paginatio from "../shared/Paginatio";
import LoadingSpinner from "../shared/LoadingSpinner";
import ProductCard from "../shared/ProductCard";

const ProductCategories = ({ categoriesId }) => {
  const reduxData = useSelector((state) => state);
  const search = reduxData?.search?.value;
  const currentPage = reduxData?.pagination?.value;
  console.log(reduxData?.pagination?.value, " redux text");
  const axiosCommon = useAxiosCommon();
  const [checkedCategory, setCheckedCategory] = useState(null);
  const [categoresProduct, SetCategoresProduct] = useState("");
  const [categoresItem, setCategoresItem] = useState("");
  const { subcategories } = spotCategories.find(
    (spot) => spot.id == categoriesId
  );
  const handleCheckboxChange = (event, idx) => {
    const checked = event.target.value;
    SetCategoresProduct(checked);
    setCheckedCategory(checkedCategory === idx ? null : idx); // Toggle the selected category
  };
  const {
    data: Products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [
      "categorisData",
      categoresItem,
      categoresProduct,
      search,
      currentPage,
    ],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/categores/api/${categoriesId}?categoresItem=${categoresItem}&categoresProduct=${categoresProduct}&search=${search}&page=${currentPage}`
      );
      
      return data;
    },
  });
  const handleCheckboxItem = (event, idx) => {
    const item = event.target.value;
    refetch();
    setCategoresItem(item);
  };
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between  gap-5">
        <div>
          <h1 className="text-xl font-semibold">Product Category</h1>
          {subcategories.map((category, idx) => (
            <form key={idx} action="/submit" method="POST">
              <input
                type="checkbox"
                id={`checkbox-${idx}`}
                name="category"
                value={category.name}
                className="hover:cursor-pointer hover:bg-[#5B8021] h-3"
                onChange={(event) => handleCheckboxChange(event, idx)}
                checked={checkedCategory === idx}
              />
              <label htmlFor={`checkbox-${idx}`}>{category.name}</label>
              {/* Items */}
              <div className={`${checkedCategory !== idx && "hidden"} pl-5`}>
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} action="">
                    <input
                      type="checkbox"
                      id={`item-checkbox-${itemIdx}`}
                      name="item"
                      value={item}
                      className="hover:cursor-pointer hover:bg-[#5B8021] h-3"
                      onChange={(event) => handleCheckboxItem(event, itemIdx)}
                    />
                    <label htmlFor={`item-checkbox-${itemIdx}`}>{item}</label>
                  </div>
                ))}
              </div>
            </form>
          ))}
        </div>
        {/* product cart */}
        <div className="lg:grid md:grid lg:grid-cols-4  md:grid-cols-2  gap-5 ">
          {Products?.data.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
      {/* pagination */}
      <Paginatio></Paginatio>
    </div>
  );
};

export default ProductCategories;
