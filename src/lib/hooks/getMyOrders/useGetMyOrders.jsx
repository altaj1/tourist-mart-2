import { useSession } from 'next-auth/react';
import React from 'react';
import useAxiosSecure from '../apiHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGetMyOrders = () => {
    const axiosSecure = useAxiosSecure()
    const session = useSession()
    const {data:ordersProduct =[], isLoading, refetch} = useQuery({
        queryKey:["ordersProduct"],
        queryFn: async () =>{
            const {data} = await axiosSecure.get(`/dashboard/userPage/myOrders/api/${session?.data?.user?.email}`)
            return data
        },
        enabled: !!session?.data?.user?.email, 
    }) 
    const allProductInfo = ordersProduct?.data?.flatMap(product => product.productInfo) || [];
    return {allProductInfo, ordersProduct, isLoading, refetch}
};

export default useGetMyOrders;