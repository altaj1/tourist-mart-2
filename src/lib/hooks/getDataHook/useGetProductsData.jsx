import React from 'react';
import useAxiosCommon from '../apiHooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetProductsData = () => {
 
    const {search} = useSelector((state)=>state)
    const axiosCommon = useAxiosCommon()
    const {data:allProduct=[], isLoading} = useQuery({
        queryKey:["get all product", search.value],
        queryFn: async()=>{
            const {data} = await axiosCommon.get(`/allProductData/api/?searchText=${search.value}`)
            // console.log(data)
            return data
        }
    })
    return allProduct;
};

export default useGetProductsData;