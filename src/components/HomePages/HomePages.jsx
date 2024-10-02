"use client"
import Banner from './Banner/Banner';
import AddOffer from './AddOffer/AddOffer';
import SpotCategories from './SpotCatgories/SpotCategories';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useGetProductsData from '@/lib/hooks/getDataHook/useGetProductsData';
import ProductCard from '../shared/ProductCard';
import BestSellProduct from '../shared/BestSellProduct';
import Link from 'next/link';


const HomePages = () => {

    return (
        <div>
           <Banner></Banner>
           <AddOffer></AddOffer>
           <SpotCategories></SpotCategories>
           <BestSellProduct></BestSellProduct>
           <div className='text-centers mx-auto container w-[100%] mb-5'>
            <p className='text-center font-semibold hover:shadow-lg p-10'>  <Link href={'/allProductData'}>View all</Link></p>
           </div>
        </div>
    );
};

export default HomePages;