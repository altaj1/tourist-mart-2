'use client'
import useAxiosSecure from '@/lib/hooks/apiHooks/useAxiosSecure';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
const UserDataRow = ({user, refetch}) => {

    const [block, setBlock] = useState(user?.status);
    const [role, setRole] = useState(user?.role);
    const axiosSecure = useAxiosSecure();
    const { mutateAsync } = useMutation({
      mutationFn: async (updateData) => {
        console.log(updateData, " mutateAsync")
        const { data } = await axiosSecure.put(
          `/manage-users/api/get-all-users`,
          updateData
        )
        console.log(data)
        return data
      },
      onSuccess: data => {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Update Successgully",
          showConfirmButton: false,
          timer: 1500
        });
        
      },
    });
  

    const handelRole = (role)=>{
      const data = {
        role:role.role,
        email: role?.user?.email
      }
    mutateAsync(data)
 }

    const handelBlock = (block) =>{
      const data = {
        status:block.block,
        email: block?.user?.email
      }
        mutateAsync(data)
     }
       const handelDelete =async (id) =>{
        
      const {data} = await axiosSecure.delete(`/manage-users/api/delete-user/${id}`)
       console.log(data)
       refetch()
     }
    return (
        <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-800 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
      </td>
      

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select onChange={(e) => setRole(e.target.value)}
        className="bg-base-200 p-2 rounded-xl"
        >
          <option>Select</option>
          <option value="Agent">Agent</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          
        </select>
        <button onClick={()=>handelRole({role, user})}  className="bg-[#8DBE3F]  hover:bg-[#5B8021] hover:text-yellow-50 text-xs p-2 font-semibold rounded-xl" >OK</button>
      </td>
     
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select onChange={(e) => setBlock(e.target.value)}
        className="bg-base-200 p-2 rounded-xl "
        >
          <option>{user?.status === "Block"? "Block": "Select"}</option>

          <option value="Block">Block</option>
          <option value="Unblock">Unblock</option>
        </select>
        <button onClick={()=>handelBlock({block, user})}  className="bg-[#8DBE3F] hover:bg-[#5B8021] hover:text-yellow-50 text-xs p-2 font-semibold  rounded-xl" >OK</button>
       
      </td>
      <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button onClick={()=>handelDelete(user._id)}  className="bg-[#8DBE3F] hover:bg-red-800 hover:text-yellow-50 text-xs p-2 font-semibold  rounded-xl" >Delete</button>
      </td>
    </tr>
    );
};

export default UserDataRow;