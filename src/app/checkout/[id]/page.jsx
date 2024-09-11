"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    
  const [productIds, setProductIds] = useState(null);

console.log(params.id.split('%'), "this is product id")

//   useEffect(() => {
//     // Ensure the router is ready before accessing the query parameters
//     if (router.isReady) {
//       const { productIds } = router.query;
//       setProductIds(productIds);  // Set the productIds state with the query parameter
//       console.log(productIds);  // This should log the productIds correctly
//     }
//   }, [router.isReady, router.query]);
    return (
        <div>
            thsi is check out page
        </div>
    );
};

export default page;