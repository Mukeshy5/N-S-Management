import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0c1624] text-white">
      {/* Top Section - Navigation */}
      <div className="border-b border-gray-700 py-8 sm:py-10 lg:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            {/* Company Info */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <Link to="/" className="block mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold hover:text-yellow-400 transition">
                  N&S <span className="text-yellow-400">Management</span>
                </h2>
              </Link>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Comprehensive solutions for Construction, Transport and Retail sectors.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 text-yellow-400">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 text-xs sm:text-sm hover:text-yellow-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-400 text-xs sm:text-sm hover:text-yellow-400 transition">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 text-xs sm:text-sm hover:text-yellow-400 transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 text-xs sm:text-sm hover:text-yellow-400 transition">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products Section */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4">media platforms</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="text-gray-400 text-xs sm:text-sm hover:text-yellow-400 cursor-pointer transition">
                  WhatsApp Business
                </li>
                <li className="text-gray-400 text-xs sm:text-sm hover:text-yellow-400 cursor-pointer transition">
                  LinkedIn
                </li>
                <li className="text-gray-400 text-xs sm:text-sm hover:text-yellow-400 cursor-pointer transition">
                  Youtube Channel
                </li>
                <li className="text-gray-400 text-xs sm:text-sm hover:text-yellow-400 cursor-pointer transition">
                    Facebook Page
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">
                Subscribe to get latest updates and offers.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="px-3 sm:px-4 py-2 rounded text-xs sm:text-sm bg-white text-black outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-yellow-400 text-black px-3 sm:px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition text-xs sm:text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-3">
            © 2026 N&S MANAGEMENT LTD. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-400 text-xs">
            <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="hover:text-yellow-400 transition">Terms of Service</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="hover:text-yellow-400 transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
