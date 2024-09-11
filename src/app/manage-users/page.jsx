'use client'
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import UserDataRow from '@/components/TableDataRow/UserDataRow';
import useAxiosSecure from '@/lib/hooks/apiHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    
    const {data : {users} = [],  isLoading,refetch } = useQuery({
        queryKey:['contest'],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/manage-users/api/get-all-users`)
            // console.log(data)
            return data;
        }
    })
    if (isLoading) {
      return  <LoadingSpinner></LoadingSpinner>
    }
    console.log(users)
    return (
        <>
        <div className='container mx-auto px-4 sm:px-8'>
         
          <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                      >
                        Email
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                      >
                        Role
                      </th>
                     
  
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                      >
                        Update Role
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                      >
                        Block User
                      </th>
                      
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user =>(
                        <UserDataRow
                        user={user}
                        refetch={refetch}
                        key={user?._id}
                        ></UserDataRow>
                    )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default ManageUsers;