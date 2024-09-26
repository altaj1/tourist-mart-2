import React from 'react';

const AccountManagement = () => {
  return (
    <div className="bg-gray-100 p-8 font-[sans-serif] max-w-4xl mx-auto rounded-lg shadow-lg">
      {/* Personal Profile Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Manage My Account</h2>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-600">Personal Profile</h3>
          <button className="text-blue-600 font-semibold">EDIT</button>
        </div>
        <div className="text-gray-800">
          <p>Username: <span className="font-semibold">altaj1019</span></p>
          <p>Email: <span className="font-semibold">al*******@gmail.com</span></p>
        </div>
      </div>

      {/* Address Book Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-600">Address Book</h3>
          <button className="text-blue-600 font-semibold">EDIT</button>
        </div>

        {/* Default Shipping Address */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-gray-600">DEFAULT SHIPPING ADDRESS</h4>
          <div className="text-gray-800 mt-2">
            <p>Al Taj</p>
            <p>180/B</p>
            <p>Dhaka - Dhaka - South - Banasree</p>
            <p>(+880) 1719754585</p>
          </div>
        </div>

        {/* Default Billing Address */}
        <div>
          <h4 className="text-md font-semibold text-gray-600">DEFAULT BILLING ADDRESS</h4>
          <div className="text-gray-800 mt-2">
            <p>Al Taj</p>
            <p>180/B</p>
            <p>Dhaka - Dhaka - South - Banasree</p>
            <p>(+880) 1719754585</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
