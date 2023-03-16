import React from 'react'


function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul>
            <li><a href="#" className="block hover:text-white transition duration-300 ease-in-out">About Us</a></li>
            <li><a href="#" className="block hover:text-white transition duration-300 ease-in-out">Careers</a></li>
            <li><a href="#" className="block hover:text-white transition duration-300 ease-in-out">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Products</h3>
          <ul>
            <li><a href="#" className="block hover:text-white transition duration-300 ease-in-out">Currency Converter</a></li>
            <li><a href="#" className="block hover:text-white transition duration-300 ease-in-out">Exchange Rates</a></li>
            <li><a href="#" className="block hover:text-white transition duration-300 ease-in-out">Mobile App</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Resources</h3>
          <ul>
            <li><a href="#" className="block hover:text-white transition duration-300 ease-in-out">FAQ</a></li>
            <li><a href="#" className="block hover:text-white transition duration-300 ease-in-out">Blog</a></li>
            <li><a href="#" className="block hover:text-white transition duration-300 ease-in-out">Terms of Service</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4">
          <h3 className="text-xl font-bold mb-4">Connect with us</h3>
          <ul>
            <li><a href="Facebook" className="block hover:text-white transition duration-300 ease-in-out">Facebook</a></li>
            <li><a href="Twitter" className="block hover:text-white transition duration-300 ease-in-out">Twitter</a></li>
            <li><a href="#" className="block hover:text-white transition duration-300 ease-in-out">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2023 BFIC and BLOVE, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
