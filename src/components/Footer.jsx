import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0c1624] text-white pt-16 sm:pt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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
            <div className="flex gap-3">
              {[
                { name: 'FB', url: '#' },
                { name: 'LI', url: '#' },
                { name: 'IG', url: '#' },
                { name: 'WA', url: 'https://wa.me/442012345678' }
              ].map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1a2332] flex items-center justify-center border border-gray-700 hover:border-yellow-400 transition-all duration-300 group">
                  <span className="text-[10px] font-extrabold group-hover:text-yellow-400">{social.name}</span>
                </a>
              ))}
            </div>
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

          {/* Column 3: Product Segments */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-5 bg-yellow-400 mr-3 rounded-sm"></span>
              Social Media
            </h3>
            <ul className="space-y-4">
              {[
                'Instagram',
                'Linkdin',
                'Facebook',
                'Twitter',
              ].map(item => (
                <li key={item}>
                  <Link to="/products" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Support */}
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
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Headquarters</p>
                  <p className="text-sm font-semibold leading-tight">London, Industrial Zone 4, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs text-center sm:text-left leading-relaxed">
            © 2026 N&S MANAGEMENT LTD. All Rights Reserved. <br className="sm:hidden" /> Registered in England & Wales.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-yellow-400 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
