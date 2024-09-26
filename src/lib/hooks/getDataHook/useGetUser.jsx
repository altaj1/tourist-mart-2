import { useSession } from 'next-auth/react';
import React from 'react';
import useAxiosSecure from '../apiHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGetUser = () => {
    const session = useSession();
    const axiosSecure = useAxiosSecure();
    const { data: userData = {}, refetch, isLoading } = useQuery({
        queryKey: ["userData", session?.data?.user?.email],
        queryFn: async () => {
          const { data } = await axiosSecure.get(
            `/checkout/api/update-user/${session?.data?.user?.email}`
          );
          return data;
        },
      });
    return {userData, refetch, isLoading}
};

export default useGetUser;