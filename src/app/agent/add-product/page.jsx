"use client"
import AddProduct from '@/components/form/AddProduct';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import React, { useEffect, useState } from 'react';

const page = () => {
   
    return (
        <div>
          <AddProduct></AddProduct>
        </div>
    );
};

export default page;