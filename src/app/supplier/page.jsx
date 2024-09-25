
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcAreaChart } from "react-icons/fc";
import { MdAppRegistration } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { useSession } from 'next-auth/react';
import SupplierFrom from '@/components/SupplierFrom/SupplierFrom';
const Supplier = () => {
const session = useSession()
console.log(session?.data?.user)

  const features = [
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
      title: "Support & Training",
      description: "Learn all about ecommerce for free and get help with seller support and Daraz",
    },
  ];
    return (
   <div>
    <SupplierFrom></SupplierFrom>
   </div>
    );
};

export default Supplier;