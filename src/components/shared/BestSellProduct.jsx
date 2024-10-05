'use client'
import useGetProductsData from '@/lib/hooks/getDataHook/useGetProductsData';
import React from 'react';
import ProductCard from './ProductCard';

const BestSellProduct = () => {
    
  const allProducts = useGetProductsData()

  const bestSellProduct = allProducts.slice(0, 12);
    return (
        <div className="container mx-auto px-4 py-8">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Best Seller Products
          </h2>
          <p className="mt-2 text-gray-600">
            Discover the top-selling products loved by our customers. Shop now to enjoy the best of what we offer!
          </p>
        </div>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {bestSellProduct?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default BestSellProduct;