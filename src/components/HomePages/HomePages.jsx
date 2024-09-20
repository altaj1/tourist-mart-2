"use client"
import Banner from './Banner/Banner';
import AddOffer from './AddOffer/AddOffer';
import SpotCategories from './SpotCatgories/SpotCategories';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useGetProductsData from '@/lib/hooks/getDataHook/useGetProductsData';
import ProductCard from '../shared/ProductCard';
import BestSellProduct from '../shared/BestSellProduct';


const HomePages = () => {

    return (
        <div>
           <Banner></Banner>
           <AddOffer></AddOffer>
           <SpotCategories></SpotCategories>
           <BestSellProduct></BestSellProduct>
        </div>
    );
};

export default HomePages;