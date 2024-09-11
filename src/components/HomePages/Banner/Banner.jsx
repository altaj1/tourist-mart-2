import Image from 'next/image';
import React from 'react';


const Banner = () => {
    return (
       <div className='bg-gradient-to-r from-[#344617] to-[#5b792b] '>
         <div className="bg-[url('/images/banner-removebg-preview.png')] lg:h-[537px] md:h-[537px] bg-cover bg-no-repeat flex items-center justify-center"> 
        </div>
       </div>
    );
};

export default Banner;