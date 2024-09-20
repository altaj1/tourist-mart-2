import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-10">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Tourist Mart</h2>
            <p className="text-gray-400">
              Tourist Mart is your go-to destination for exploring and purchasing tourist spot travel products. Discover unique experiences and plan your trips with ease.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="text-gray-400 space-y-2">
              <li>Phone: +1 234 567 890</li>
              <li>Email: support@touristmart.com</li>
              <li>Address: 123 Tourist Street, City, Country</li>
            </ul>
  
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77 3.61-4.47 6.29-8.55 6.29a9.89 9.89 0 01-5.34-1.57l-1.07.11-.02-.91 1.01-.11C6.92 8.6 6 7.11 6 5.57c0-.38.08-.74.21-1.08C6.43 2.95 8.74 1 11.41 1c1.97 0 3.72.83 4.87 2.15.89-.2 1.72-.5 2.48-.91-.29.9-.91 1.62-1.72 2.1.81-.1 1.58-.31 2.3-.64-.53.79-1.2 1.49-1.96 2.04z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.97 3.66 9.09 8.44 9.94v-7.04H7.89v-2.9h2.59V9.6c0-2.57 1.53-3.99 3.87-3.99 1.13 0 2.31.21 2.31.21v2.53h-1.3c-1.28 0-1.68.79-1.68 1.61v1.94h2.87l-.46 2.9h-2.41v7.04c4.78-.86 8.44-4.98 8.44-9.94 0-5.51-4.45-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 5.46c-.77.34-1.6.57-2.47.67.89-.54 1.58-1.39 1.9-2.41-.83.49-1.75.85-2.72 1.04a4.36 4.36 0 00-7.49 3.96c-3.63-.18-6.84-1.92-9-4.56-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.71-.02-1.38-.22-1.97-.55v.06c0 2.1 1.5 3.86 3.48 4.26-.37.1-.76.15-1.16.15-.28 0-.56-.03-.83-.08.56 1.76 2.19 3.04 4.12 3.07a8.7 8.7 0 01-5.39 1.86c-.35 0-.69-.02-1.03-.06 1.92 1.23 4.2 1.94 6.64 1.94 7.97 0 12.33-6.59 12.33-12.33l-.01-.56A8.71 8.71 0 0024 4.56a8.59 8.59 0 01-2.48.68 4.38 4.38 0 001.92-2.41z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          © {new Date().getFullYear()} Tourist Mart. All rights reserved.
        </div>
      </footer>
    );
};

export default Footer;