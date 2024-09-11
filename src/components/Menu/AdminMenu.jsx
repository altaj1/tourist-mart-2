"use client"
import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import { FaUserCog } from 'react-icons/fa';
import { BsFillMotherboardFill } from "react-icons/bs";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '../shared/LoadingSpinner';


const AdminMenu = () => {
    const [loading, setLoading] = useState(true);
    const session = useSession()
    const router = useRouter();
    useEffect(() => {
        if (session.data?.user?.role) {
            setLoading(false); 
          }
        
      }, [session?.data?.user]);
      if (loading) {
        return <LoadingSpinner />;
      }
      if (!session.data?.user || session.data?.user?.role !== 'Admin') {
        router.push('/login');
      }
    return (
        <>
        this is admin menu
            <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
            <MenuItem icon={BsFillMotherboardFill} label='Manage Contests' address='ManageContest' />
        </>
    );
};

export default AdminMenu;