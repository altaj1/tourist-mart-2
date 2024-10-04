"use client"
import Paginatio from '@/components/shared/Paginatio';
import ProductCard from '@/components/shared/ProductCard';
import useGetProductsData from '@/lib/hooks/getDataHook/useGetProductsData';
import React from 'react';

const Allproducts = () => {
    const allProducts = useGetProductsData()
    // console.log(allProducts)
    return (
       
        <div className='container mx-auto'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <Paginatio></Paginatio>
        </div>
    );
};

export default Allproducts;