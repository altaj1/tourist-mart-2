"use client";
import useRole from "@/lib/hooks/apiHooks/useRole";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "@/lib/hooks/apiHooks/useAxiosSecure";
import Link from "next/link";

const ShoppingCard = () => {
  const [userLoading, setUserLoading] = useState(true); // Initialize with true
  const { productId } = useSelector((state) => state);
  const axiosSecure = useAxiosSecure();
  const router = useRouter();
  const session = useSession();

  const { data: addToCartLen  , isLoading} = useQuery({
    queryKey: ["addToCartLen", productId?.value, session?.data?.user],
    enabled: !!session?.data?.user.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/shopping-card/api/?mainProductId=${productId?.value}&addEmail=${session?.data?.user?.email}`
      );
    
      return data;
    },
    enabled: !!session?.data?.user?.email, 
  });

  useEffect(() => {
    if (session?.data?.user) {
      setUserLoading(false);
    } else if (!session?.data?.user && !userLoading) {
      router.push("/login");
    }
  }, [session?.data?.user, userLoading, router]);

  return (

      <Link href={"/shopping-card"}
      className="flex items-center space-x-4">
        {" "}
        <p className="bg-[#8dbe3f] p-2 rounded-full text-gray-800 hover:bg-[#5C8121] hover:text-yellow-50">
          <IoCartOutline className="lg:text-xl md:text-xl" />
        </p>
        <p>
          <span>{addToCartLen?.data ? addToCartLen?.data : 0}</span> <br />
          Cart
        </p>
      </Link>

  );
};

export default ShoppingCard;
