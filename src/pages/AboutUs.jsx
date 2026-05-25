import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-[#0c1624] text-white min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4">Since 2009</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Leading the Way in <span className="text-yellow-400">Business Solutions</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              N&S Management LTD is a premier provider of comprehensive solutions for the Construction, Transport, and Retail sectors. With over 15 years of industry experience, we deliver high-quality products and strategic services tailored to modern business needs.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold text-yellow-400">500+</h4>
                <p className="text-gray-400 text-xs sm:text-sm">Global Partners</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-400">24/7</h4>
                <p className="text-gray-400 text-xs sm:text-sm">Dedicated Support</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-yellow-400/20 to-blue-600/20 rounded-xl border border-gray-700 flex items-center justify-center">
              <span className="text-gray-500 italic">Company Profile Image</span>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block w-32 h-32 bg-yellow-400 rounded-lg p-4 text-black font-bold">
              Our Mission: Excellence in Every Service.
            </div>
          </div>
        </div>

        <div className="bg-[#1a2332] p-8 sm:p-12 rounded-2xl border border-gray-700 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {['Integrity', 'Innovation', 'Reliability'].map(value => (
              <div key={value} className="p-4 border border-gray-700 rounded-lg hover:border-yellow-400 transition">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{value}</h3>
                <p className="text-gray-400 text-sm">Committed to delivering the highest standards in everything we do.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
