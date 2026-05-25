import React from 'react'

const Contect = () => {
  return (
    <div className="bg-[#0c1624] text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0c1624] to-[#1a2332]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-yellow-400 text-xs sm:text-sm font-semibold mb-3 uppercase tracking-widest">Connect With Us</p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-4">
            Let's Build Something <span className="text-yellow-400">Great Together</span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
            Have questions about our industrial solutions or looking for a custom quote? 
            Our dedicated team is ready to assist you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 -mt-10 relative z-20">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { label: 'Customer Support', value: '+44 (0) 20 1234 5678', sub: 'Mon-Fri 8am-6pm', icon: '📞' },
            { label: 'Email Inquiries', value: 'info@nsmanagement.co.uk', sub: '24/7 Online Support', icon: '✉️' },
            { label: 'Headquarters', value: '123 Business Avenue, UK', sub: 'Visit us for a coffee', icon: '📍' }
          ].map((item, index) => (
            <div key={index} className="bg-[#1a2332] p-8 rounded-xl border border-gray-700 shadow-xl hover:border-yellow-400/50 transition-all duration-300 text-center group">
              <div className="w-14 h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto text-yellow-400 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition">{item.label}</h3>
              <p className="font-semibold text-white mb-1 text-sm sm:text-base">{item.value}</p>
              <p className="text-gray-500 text-xs uppercase tracking-wider">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-12 space-y-8">
            <div className="bg-[#1a2332] p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-yellow-400">Operating Hours</h3>
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', time: '08:30 - 18:00' },
                  { day: 'Saturday', time: '09:00 - 14:00' },
                  { day: 'Sunday', time: 'Closed' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gray-700/50 pb-3">
                    <span className="text-gray-400 text-sm">{item.day}</span>
                    <span className="font-bold text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[#1a2332] h-[280px] rounded-2xl border border-gray-700 overflow-hidden relative group">
              <div className="absolute inset-0 bg-yellow-400/5 group-hover:bg-transparent transition duration-500"></div>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <span className="text-5xl mb-3">📍</span>
                <p className="text-gray-400 font-bold text-sm tracking-wide">UK DISTRIBUTION CENTRE</p>
                <p className="text-gray-500 text-xs mt-1 italic">London, Industrial Zone 4</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <span className="w-4 h-[2px] bg-yellow-400 mr-3"></span>
                Follow our updates
              </h3>
              <div className="flex gap-4">
                {['FB', 'LI', 'TW', 'YT'].map(social => (
                  <div key={social} className="w-12 h-12 rounded-xl bg-[#1a2332] flex items-center justify-center border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400/5 cursor-pointer transition-all duration-300 group">
                    <span className="text-xs font-extrabold group-hover:text-yellow-400 transition tracking-tighter">{social}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contect
