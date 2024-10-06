import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../apiHooks/useAxiosSecure';

const useGetProductDetails = (id) => {
    const axiosSecure = useAxiosSecure();
    const { data: productDetails = {}, isLoading } = useQuery({
        queryKey: ["detailsProduct"],
        queryFn: async () => {
          const { data } = await axiosSecure(`/product-details/api/${id}`);
          return data?.data;
        },
      });
    return {productDetails, isLoading}
};

export default useGetProductDetails;