import ProductCategoris from '@/components/productCategores/ProductCategoris';
import React from 'react';

const page = ({params}) => {
    // console.log(params, "this is params")
    return (
        <div>
           <ProductCategoris categoriesId={params.id}></ProductCategoris>
        </div>
    );
};

export default page;