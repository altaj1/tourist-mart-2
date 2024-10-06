"use client"
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { AiOutlineProduct } from "react-icons/ai";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AgentMenu = () => {
  
    return (
        <>
            <MenuItem icon={AiOutlineProduct} label='Add Product' address='/dashboard/agent/add-product' />
            {/* <MenuItem icon={BsFillMotherboardFill} label='Manage Contests' address='ManageContest' /> */}
        </>
    );
};

export default AgentMenu;