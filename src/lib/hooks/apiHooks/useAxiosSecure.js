import axios from 'axios';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';



export const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  
  const router = useRouter();

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      response => response,
      async error => {
        console.log('error tracked in the interceptor', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          await signOut();
          router.push('/login');
        }
        return Promise.reject(error);
      }
    );

    // Cleanup function to remove the interceptor when the component unmounts
    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [ router]);

  return axiosSecure;
};

export default useAxiosSecure;
