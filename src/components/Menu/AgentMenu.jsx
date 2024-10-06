
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { RiPlayListAddLine } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";

const AgentMenu = () => {
  
    return (
        <>
            <MenuItem icon={RiPlayListAddLine} label='Add Product' address='/dashboard/agent/add-product' />
            <MenuItem icon={AiOutlineProduct} label='Manage Products' address='/dashboard/agent/manage-products' />
        </>
    );
};

export default AgentMenu;