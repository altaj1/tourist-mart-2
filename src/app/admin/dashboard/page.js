// src/app/admin/dashboard/page.js
"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AdminDashboard = () => {
  const router = useRouter();
  const user = { role: 'admin' }; // Replace with actual user role
  
  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/login');
    }
  }, [user, router]);

  if (!user || user.role !== 'admin') {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, admin!</p>
    </div>
  );
};

export default AdminDashboard;
