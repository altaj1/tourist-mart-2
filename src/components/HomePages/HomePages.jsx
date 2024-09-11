
"use client"
import Banner from './Banner/Banner';
import AddOffer from './AddOffer/AddOffer';
import SpotCategories from './SpotCatgories/SpotCategories';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const HomePages = () => {
  
    return (
        <div>
           <Banner></Banner>
           <AddOffer></AddOffer>
           <SpotCategories></SpotCategories>
        </div>
    );
};

export default HomePages;