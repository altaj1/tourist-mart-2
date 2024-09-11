import { spotCategories } from '@/lib/spotCategories/spotCategories';
import React from 'react';
import SpotCategoriesCart from './SpotCategoriesCart';
import { GiSpottedArrowhead } from 'react-icons/gi';

const SpotCategories = () => {
    return (
        <div className='container mx-auto  gap-6 mt-20 p-5 grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3 justify-around items-center'> 
         {
            spotCategories.map((spot, idx)=><SpotCategoriesCart key={idx} spot={spot}></SpotCategoriesCart>)
         }
        </div>
    );
};

export default SpotCategories;