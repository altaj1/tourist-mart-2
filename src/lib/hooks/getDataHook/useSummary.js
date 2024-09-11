import React, { useState } from 'react';

const useSummary = () => {
    const [summary, setSummary] = useState([]);
     useEffect(()=>{
          const storeSummary = localStorage.getItem('product')
          if (storeSummary) {
          setSummary(JSON.parse(storeSummary))
            
          }
          // console.log(storeSummary)
         },[buyProduct])
    return (
        <div>
            
        </div>
    );
};

export default useSummary;