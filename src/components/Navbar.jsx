import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#0c1624] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="text-2xl sm:text-3xl font-bold flex-shrink-0">
          N&S <span className="text-yellow-400">Management</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-yellow-400 hover:text-yellow-300 text-2xl"
        >
          ☰
        </button>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex gap-6 sm:gap-8 text-xs sm:text-sm font-medium">
          <Link to="/" className="text-yellow-400 hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-yellow-400 transition">
            Products
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About Us
          </Link>
          
          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact Us
          </Link>
        </nav>

        {/* Quote Button - Desktop */}
        <Link to="/request-quote" className="hidden sm:block bg-yellow-400 text-black px-4 sm:px-5 py-2 rounded font-semibold hover:bg-yellow-300 transition flex-shrink-0 text-xs sm:text-sm text-center">
          Request a Quote
        </Link>
      </div>

      {/* Mobile Menu - Responsive */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-[#1a2332] border-t border-yellow-400/20 px-4 py-4 space-y-3 text-sm font-medium">
          <Link to="/" onClick={closeMenu} className="block text-yellow-400 hover:text-yellow-300 py-2">
            Home
          </Link>
          <Link to="/products" onClick={closeMenu} className="block hover:text-yellow-400 py-2">
            Products
          </Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-yellow-400 py-2">
            About Us
          </Link>
        
          <Link to="/contact" onClick={closeMenu} className="block hover:text-yellow-400 py-2">
            Contact Us
          </Link>
          <Link to="/request-quote" onClick={closeMenu} className="w-full block bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition mt-4 text-center">
            Request a Quote
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
