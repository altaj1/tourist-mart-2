"use client"
import useAxiosSecure from '@/lib/hooks/apiHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import React from 'react';

const MyOrders = () => {
    const axiosSecure = useAxiosSecure()
    const session = useSession()
    const {data:ordersProduct =[], isLoading, refetch} = useQuery({
        queryKey:["ordersProduct"],
        queryFn: async () =>{
            const {data} = await axiosSecure.get(`/dashboard/supplierPage/myOrders/api/${session?.data?.user?.email}`)
            return data
        },
        enabled: !!session?.data?.user?.email, 
    }) 
    return (
        <div>
            thsi is my order page
        </div>
    );
};

export default MyOrders;