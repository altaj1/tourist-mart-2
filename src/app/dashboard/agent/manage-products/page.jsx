"use client"
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import ManageProductDataRow from '@/components/TableDataRow/ManageProductDataRow';
import useAxiosSecure from '@/lib/hooks/apiHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const ManageProduct = () => {
const session = useSession()
const axiosSecure = useAxiosSecure();
const {data: products= [], isLoading} = useQuery({
    queryKey:["manage-product", session?.data?.user?.email],
    queryFn: async () =>{
      const  {data}= await axiosSecure.get(`/dashboard/agent/api/get-product/${session?.data?.user?.email}`)
      return data
    }
})
console.log(session)
console.log(products)
if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
}
    return (
        <div className="font-sans overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-100 whitespace-nowrap">
      <tr>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Photo
        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Quantity
        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Bar Code
        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>

    <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
        {
            products?.data?.map(product=><ManageProductDataRow key={product._id} product={product}></ManageProductDataRow>)
        }
     
    </tbody>
  </table>
</div>

    );
};

export default ManageProduct;