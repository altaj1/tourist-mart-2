"use client";
/* eslint-disable react/display-name */
// src/components/PrivateRoute/PrivateRoute.js


import React from 'react';
import { useRouter } from 'next/navigation'; // Update import for Next.js 13+

const PrivateRoute = (Component, roles) => {
  const router = useRouter();
  return (props) => {
    // Example authentication check
    const user = { role: 'admin' }; // Replace with actual user role

    if (!user || !roles.includes(user.role)) {
      router.push('/login');
      return null;
    }

    return <Component {...props} />;
  };
};

export default PrivateRoute;
