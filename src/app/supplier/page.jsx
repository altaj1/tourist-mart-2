
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcAreaChart } from "react-icons/fc";
import { MdAppRegistration } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { useSession } from 'next-auth/react';
import { SiGooglemarketingplatform } from "react-icons/si";
import SupplierForm from '@/components/SupplierFrom/SupplierForm';
import Services from '@/components/Services/Services';

const Supplier = () => {

  const statistics = [
    {
      icone:FcAreaChart,
      title: "Reach",
      description: "Millions of customers on Daraz, Bangladesh's most visited shopping destination",
    },
    {
      icone:MdAppRegistration,
      title: "Free Registration",
      description: "Account registration & listing items for sale is free",
    },
    { icone:FaShippingFast,
      title: "Reliable Shipping",
      description: "Fast, reliable and hassle free delivery through Daraz logistic network",
    },
    {
      icone:MdOutlinePayments,
      title: "Timely Payments",
      description: "Funds are safely deposited directly to your bank account on a weekly basis",
    },
    { icone:MdOutlinePayments,
      title: "Marketing Tools",
      description: "Find new customers & grow more with advertising and our whole range of marketing tools",
    },
    {
      icone:SiGooglemarketingplatform,
      title: "Support & Training",
      description: "Learn all about ecommerce for free and get help with seller support and Daraz",
    },
  ];
    return (
   <div>
    <SupplierForm></SupplierForm>
   <div className='mt-10'>
   <Services statistics={statistics} title={"Why Sell on Tourist Mart"} description={"Join Tourist Mart to reach global travelers, boost your sales, and showcase unique travel experiences. Maximize your visibility with our user-friendly platform and seamless payment system."}></Services>
   </div>
   </div>
    );
};

export default Supplier;