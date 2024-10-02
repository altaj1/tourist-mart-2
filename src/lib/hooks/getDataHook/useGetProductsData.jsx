import React from 'react';
import useAxiosCommon from '../apiHooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetProductsData = () => {
    const reduxData = useSelector((state) => state);
    const currentPage = reduxData?.pagination?.value;
    const search = useSelector((state)=>state.search)
    const axiosCommon = useAxiosCommon()
     console.log(search, "search")
    const {data:allProduct=[], isLoading} = useQuery({
        queryKey:["get all product", search.value, currentPage],
        queryFn: async()=>{
            const {data} = await axiosCommon.get(`/allProductData/api/?searchText=${search.value}&page=${currentPage}`)
           
            return data
        }
    })
    return allProduct;
};

export default useGetProductsData;