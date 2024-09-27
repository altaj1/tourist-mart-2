import React from 'react';
import MenuItem from './MenuItem';
import { CgFolderAdd } from "react-icons/cg";
const UserMenu = () => {
    return (
        <div>
               <MenuItem icon={CgFolderAdd} label='My orders' address='dashboard/supplierPage/myOrders' />
        </div>
    );
};

export default UserMenu;