import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'

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
              Construction, Transport and retail, interior design
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4">
              COMPLETE BUSINESS SOLUTIONS.
              <span className="text-yellow-400 block"> NATIONWIDE SERVICES.</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mb-6 mx-auto sm:mx-0">
              Premier provider of equipment, logistics solutions, and retail management services
              for construction, transport, retail, and interior design industry professionals.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop"
                className="h-56 w-full object-cover"
                alt="Construction Equipment"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Construction Equipment
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base">
                  Safety gear, tools, and heavy machinery solutions.
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
                  Fleet management, tracking systems & supply chain solutions.
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
                  Point of sale systems, inventory management & store fixtures.
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
                  Professional interior design solutions for commercial and residential spaces.
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
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop"
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="Safety Helmets & PPE"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                Safety Helmets & PPE
              </h3>
              <Link to="/request-quote" className="mt-2 sm:mt-3 lg:mt-4 text-yellow-500 font-semibold text-xs sm:text-sm hover:text-yellow-600 inline-block">
                Add to Quote →
              </Link>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop"
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="Fleet Tracking System"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                Fleet Tracking System
              </h3>
              <Link to="/request-quote" className="mt-2 sm:mt-3 lg:mt-4 text-yellow-500 font-semibold text-xs sm:text-sm hover:text-yellow-600 inline-block">
                Add to Quote →
              </Link>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000&auto=format&fit=crop"
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="POS System Pro"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                POS System Pro
              </h3>
              <Link to="/request-quote" className="mt-2 sm:mt-3 lg:mt-4 text-yellow-500 font-semibold text-xs sm:text-sm hover:text-yellow-600 inline-block">
                Add to Quote →
              </Link>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="Inventory Management"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                Inventory Management
              </h3>
              <Link to="/request-quote" className="mt-2 sm:mt-3 lg:mt-4 text-yellow-500 font-semibold text-xs sm:text-sm hover:text-yellow-600 inline-block">
                Add to Quote →
              </Link>
            </div>

            {/* Product 5 */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=1000&auto=format&fit=crop"
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="Power Tools Kit"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                Power Tools Kit
              </h3>
              <Link to="/request-quote" className="mt-2 sm:mt-3 lg:mt-4 text-yellow-500 font-semibold text-xs sm:text-sm hover:text-yellow-600 inline-block">
                Add to Quote →
              </Link>
            </div>

            {/* Product 6 */}
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                className="h-24 sm:h-32 lg:h-36 w-full object-cover rounded"
                alt="Customer Analytics Suite"
              />
              <h3 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                Customer Analytics Suite
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
