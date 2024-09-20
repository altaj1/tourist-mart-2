// components/AboutUs.jsx
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          {/* Image Section */}
          <div className="flex-1 mb-6 md:mb-0">
            <Image
              src="/images/about-us.jpg" // Replace with your actual image path
              alt="About Us"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-gray-700">
            <h3 className="text-xl font-semibold mb-4">Welcome to Tourist Mart</h3>
            <p className="mb-4">
              At Tourist Mart, we believe that exploring the world should be easy and accessible. We provide the best travel products and services to help you plan your next adventure with ease.
            </p>
            <p className="mb-4">
              Our platform is designed to bring together travel enthusiasts, offering a wide range of options for destinations, experiences, and more. Whether you re looking for adventure, relaxation, or a mix of both, Tourist Mart has something for everyone.
            </p>
            <p>
              Join us on this journey and make your travel dreams come true. Let s explore the world together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
