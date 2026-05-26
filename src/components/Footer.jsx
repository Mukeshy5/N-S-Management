import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0c1624] text-white pt-12 sm:pt-16 lg:pt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 mb-12 sm:mb-16">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl sm:text-3xl font-bold group">
                N&S <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors">Management</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premier provider of industrial equipment, logistics solutions, and retail management services across the UK.
            </p>
            
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-5 bg-yellow-400 mr-3 rounded-sm"></span>
              Site Map
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Product Catalog', path: '/products' },
                { label: 'Project Insights', path: '/request-quote' },
                { label: 'Contact Us', path: '/contact' }
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center group">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2 text-yellow-400">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-5 bg-yellow-400 mr-3 rounded-sm"></span>
              Get Support
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 mt-1">📞</span>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Phone Support</p>
                  <p className="text-sm font-semibold">+44 (0) 20 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 mt-1">✉️</span>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Email Inquiry</p>
                  <p className="text-sm font-semibold truncate underline decoration-yellow-400/30">info@nsmanagement.co.uk</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 mt-1">📍</span>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Registered office address</p>
                  <p className="text-sm font-semibold leading-tight">19 Galloway Street, Liverpool, United Kingdom, L7 6PD</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs text-center sm:text-left leading-relaxed">
            © 2022 N&S MANAGEMENT LTD. All Rights Reserved. <br className="sm:hidden" /> 
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-yellow-400 text-xs uppercase font-semibold tracking-wider transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-yellow-400 text-xs uppercase font-semibold tracking-wider transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
