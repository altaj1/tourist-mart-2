import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"
import { useSession } from "next-auth/react";

const useRole = () =>{
    const axiosSecure = useAxiosSecure();
    const session = useSession()
    const {data:role = "", isLoading} = useQuery({
        queryKey:['role'],
        
        queryFn: async()=>{
            const {data} = await axiosSecure(`/dashboard/manage-users/api/${session?.data?.user?.email}`)
            return data.resp.role;
        },
        enabled: !!session?.data?.user?.email,
    })
    return {role, isLoading}
}

export default useRole