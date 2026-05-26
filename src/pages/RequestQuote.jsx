import React from 'react'

const RequestQuote = () => {
  return (
    <div className="bg-[#0c1624] text-white min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0c1624] to-[#1a2332]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <div className="absolute top-10 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-400 rounded-full blur-[80px] sm:blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-yellow-400 text-[10px] sm:text-xs md:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-[0.15em] sm:tracking-[0.3em]">Business Solutions</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-4">
            Project <span className="text-yellow-400">Insights</span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-4 sm:px-0">
            Providing tailored solutions for modern industries. Discover why industry leaders trust N&S for their comprehensive industrial requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-20 -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Quick Info Card 1 */}
              <div className="bg-[#1a2332] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl hover:border-yellow-400/30 transition-all group">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🏗️</div>
                <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 group-hover:text-yellow-400 transition">Construction & Structural</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Specialized structural materials and industrial equipment tailored for site-specific requirements.
                </p>
              </div>

              {/* Quick Info Card 2 */}
              <div className="bg-[#1a2332] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl hover:border-yellow-400/30 transition-all group">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3"></div>
                <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 group-hover:text-yellow-400 transition">Logistics & Transport</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Nationwide fleet coordination and supply chain management optimized for operational efficiency.
                </p>
              </div>

              <div className="bg-[#1a2332] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl hover:border-yellow-400/30 transition-all group sm:col-span-2 md:col-span-1">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🏢</div>
                <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 group-hover:text-yellow-400 transition">Retail & Interiors</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Strategic POS deployment and bespoke architectural space planning for modern commercial environments.
                </p>
              </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-yellow-400/10 to-blue-600/10 border border-yellow-400/30 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10 max-w-5xl mx-auto">
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-center">Why Partner With N&S Management?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 text-gray-300">
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-yellow-400 font-bold text-xl sm:text-2xl mt-[-2px]">✓</span>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">4+ Years Industry Experience</p>
                  <p className="text-xs sm:text-sm">Deep domain expertise in construction and logistics.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-yellow-400 font-bold text-xl sm:text-2xl mt-[-2px]">✓</span>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">100+ Satisfied Clients</p>
                  <p className="text-xs sm:text-sm">Proven track record across multiple industry sectors.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-yellow-400 font-bold text-xl sm:text-2xl mt-[-2px]">✓</span>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Premium Quality Products</p>
                  <p className="text-xs sm:text-sm">Sourced from trusted global manufacturing partners.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-yellow-400 font-bold text-xl sm:text-2xl mt-[-2px]">✓</span>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">24/7 Dedicated Support</p>
                  <p className="text-xs sm:text-sm">Round-the-clock assistance for critical operations.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Direct Contact Channels */}
      <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-gray-800">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-3 sm:mb-5">
            Direct <span className="text-yellow-400">Quote Channels</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm lg:text-base leading-relaxed">
            Need a quote faster? Connect with our team directly through your preferred platform for immediate consultation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Call Support */}
          <a href="tel:+447349049077" className="bg-[#1a2332] p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group text-center flex flex-col items-center justify-center flex-1 min-w-[280px] max-w-sm">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition duration-300">📞</div>
            <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 group-hover:text-yellow-400 transition">Call Support</h3>
            <p className="text-gray-400 text-xs sm:text-sm font-semibold">07349049077</p>
          </a>

          {/* Gmail/Email */}
          <a href="mailto:info@nsmanagement.co.uk" className="bg-[#1a2332] p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group text-center flex flex-col items-center justify-center flex-1 min-w-[280px] max-w-sm">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition duration-300">📧</div>
            <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 group-hover:text-yellow-400 transition">Email Inquiry</h3>
            <p className="text-gray-400 text-xs sm:text-sm font-semibold truncate w-full">info@nsmanagement.co.uk</p>
          </a>

         
        </div>
      </section>

      
    </div>
  )
}

export default RequestQuote
