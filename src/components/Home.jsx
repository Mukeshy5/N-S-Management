import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import img1 from '../assets/img1.jpeg'
import img20 from '../assets/img20.jpeg'
import img30 from '../assets/img30.jpeg'
import img25 from '../assets/img25.jpeg'
import img23 from '../assets/img23.jpeg'
import img22 from '../assets/img22.jpeg'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[750px] w-full overflow-hidden">
        <img 
          src={heroImage}
          className="w-full h-full object-cover"
          alt="Building supplies"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white w-full relative z-20 text-center sm:text-left">
            <p className="text-yellow-400 uppercase tracking-widest font-semibold mb-2 sm:mb-4 text-xs sm:text-sm">
              Construction • Transport & Logistics • Retail Solutions • Interior Design
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4">
              COMPLETE BUSINESS SOLUTIONS.
              <span className="text-yellow-400 block"> NATIONWIDE SERVICES.</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mb-6 mx-auto sm:mx-0">
              As a premier nationwide provider, we empower industry leaders with high-performance equipment, optimized fleet logistics, and smart retail management systems. From structural materials to bespoke interior architecture, we provide the essential tools and expertise to drive growth and operational efficiency across your entire enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center sm:justify-start">
              <Link to="/products" className="bg-yellow-400 text-black px-5 sm:px-7 py-3 sm:py-4 rounded font-semibold hover:bg-yellow-300 transition text-sm sm:text-base flex items-center justify-center">
                Browse Products
              </Link>
              <Link to="/request-quote" className="border border-white px-5 sm:px-7 py-3 sm:py-4 rounded font-semibold hover:bg-white hover:text-black transition text-sm sm:text-base flex items-center justify-center">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#111827] text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">4+</h2>
            <p className="mt-1 sm:mt-2 text-gray-300 text-xs sm:text-sm">Years Experience</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">100+</h2>
            <p className="mt-1 sm:mt-2 text-gray-300 text-xs sm:text-sm">Business Clients</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">99%</h2>
            <p className="mt-1 sm:mt-2 text-gray-300 text-xs sm:text-sm">Client Retention</p>
          </div>
          
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">24/7</h2>
            <p className="mt-1 sm:mt-2 text-gray-300 text-xs sm:text-sm">Support Available</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 lg:mb-14">
            <p className="text-yellow-500 uppercase tracking-widest font-semibold text-xs sm:text-sm">
              Our Services
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3">
              Comprehensive Industry Solutions
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto">
              Specialized solutions for construction, transport, and retail sectors.
              Everything your business needs to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src="data:image/jpeg;base64,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"
                className="h-56 w-full object-cover"
                alt="Construction Equipment"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Construction Equipment
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base">
                  High-grade safety equipment, precision power tools, and essential structural materials for professional build sites.
                </p>
                <Link to="/products" className="text-yellow-500 font-semibold text-sm sm:text-base inline-block">
                  Explore Products →
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop"
                className="h-56 w-full object-cover"
                alt="Transport & Logistics"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Transport & Logistics
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base">
                  Advanced fleet tracking, logistical optimization, and end-to-end supply chain management for modern transport.
                </p>
                <Link to="/products" className="text-yellow-500 font-semibold text-sm sm:text-base inline-block">
                  Explore Products →
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop"
                className="h-56 w-full object-cover"
                alt="Retail Solutions"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Retail Solutions
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base">
                  Cutting-edge POS systems, real-time inventory tracking, and custom fixtures designed for high-impact retail environments.
                </p>
                <Link to="/products" className="text-yellow-500 font-semibold text-sm sm:text-base inline-block">
                  Explore Products →
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                className="h-56 w-full object-cover"
                alt="Interior Design"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Interior Design
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base">
                  Bespoke design consulting, premium decor essentials, and professional space planning for residential and commercial excellence.
                </p>
                <Link to="/products" className="text-yellow-500 font-semibold text-sm sm:text-base inline-block">
                  Explore Products →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 sm:mb-12 lg:mb-14">
            <div>
              <p className="text-yellow-500 uppercase font-semibold tracking-widest text-xs sm:text-sm">
                Featured Solutions
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
                Trusted Solutions for Every Industry.
              </h2>
            </div>
            <Link to="/products" className="text-yellow-500 font-semibold text-sm sm:text-base whitespace-nowrap">
              View All Products →
            </Link>
          </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
            {/* Product 1 */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition">
              <img
                src={img1}
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="Safety Helmets & PPE"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                Premium industrial solution designed 
              </h3>
              <Link to="/request-quote" className="mt-2 sm:mt-3 lg:mt-4 text-yellow-500 font-semibold text-xs sm:text-sm hover:text-yellow-600 inline-block">
                Add to Quote →
              </Link>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition">
              <img
                src={img20}
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="Fleet Tracking System"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                Executive Hi-Vis Safety Vest
              </h3>
              <Link to="/request-quote" className="mt-2 sm:mt-3 lg:mt-4 text-yellow-500 font-semibold text-xs sm:text-sm hover:text-yellow-600 inline-block">
                Add to Quote →
              </Link>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition">
              <img
                src={img30}
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="POS System Pro"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                Heavy-Duty Construction Gloves
              </h3>
              <Link to="/request-quote" className="mt-2 sm:mt-3 lg:mt-4 text-yellow-500 font-semibold text-xs sm:text-sm hover:text-yellow-600 inline-block">
                Add to Quote →
              </Link>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition">
              <img
                src={img25}
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="Inventory Management"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                High strength steel wire
              </h3>
              <Link to="/request-quote" className="mt-2 sm:mt-3 lg:mt-4 text-yellow-500 font-semibold text-xs sm:text-sm hover:text-yellow-600 inline-block">
                Add to Quote →
              </Link>
            </div>

            {/* Product 5 */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition">
              <img
                src={img23}
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="Power Tools Kit"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                Carbon Fiber Safety Helmet
              </h3>
              <Link to="/request-quote" className="mt-2 sm:mt-3 lg:mt-4 text-yellow-500 font-semibold text-xs sm:text-sm hover:text-yellow-600 inline-block">
                Add to Quote →
              </Link>
            </div>

            {/* Product 6 */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition">
              <img
                src={img22}
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="Customer Analytics Suite"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                Anti-Fog Wide Vision Goggles
              </h3>
              <Link to="/request-quote" className="mt-2 sm:mt-3 lg:mt-4 text-yellow-500 font-semibold text-xs sm:text-sm hover:text-yellow-600 inline-block">
                Add to Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
