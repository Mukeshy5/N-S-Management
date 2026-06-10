const Contact = () => {
  return (
    <div className="bg-[#0c1624] text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20 -mt-8 sm:-mt-10 relative z-20">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {[
            { label: 'Customer Support', value: '07349049077', sub: 'Mon-Fri 8am-6pm', icon: '📞', href: 'tel:+447349049077' },
            { label: 'Email Inquiries', value: 'info@nsmanagementltd.co.uk', sub: '24/7 Online Support', icon: '✉️', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@nsmanagementltd.co.uk' },
            { label: 'Registered Address', value: 'Unit 2c Sherborne Street, Manchester, M8 8LR', sub: '', icon: '📍' }
          ].map((item, index) => (
            item.href ? (
              <a
                key={index}
                href={item.href}
                target={item.label === 'Email Inquiries' ? '_blank' : undefined}
                rel={item.label === 'Email Inquiries' ? 'noreferrer' : undefined}
                className="bg-[#1a2332] p-6 sm:p-8 rounded-xl border border-gray-700 shadow-xl hover:border-yellow-400/50 transition-all duration-300 text-center group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 mx-auto text-yellow-400 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-yellow-400 transition">{item.label}</h3>
                <p className="font-semibold text-white mb-1 text-sm sm:text-base">{item.value}</p>
                {item.sub && <p className="text-gray-500 text-xs uppercase tracking-wider">{item.sub}</p>}
              </a>
            ) : (
              <div key={index} className="bg-[#1a2332] p-6 sm:p-8 rounded-xl border border-gray-700 shadow-xl hover:border-yellow-400/50 transition-all duration-300 text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 mx-auto text-yellow-400 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-yellow-400 transition">{item.label}</h3>
                <p className="font-semibold text-white mb-1 text-sm sm:text-base">{item.value}</p>
                {item.sub && <p className="text-gray-500 text-xs uppercase tracking-wider">{item.sub}</p>}
              </div>
            )
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Profile Image Section */}
          <div className="lg:col-span-7">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"
              alt="N&S Management Corporate Office"
              className="w-full h-full min-h-[300px] sm:min-h-[400px] object-cover rounded-2xl border border-gray-700 shadow-2xl"
            />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="bg-[#1a2332] p-6 sm:p-8 rounded-2xl border border-gray-700">
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

            {/* Live Map */}
            <div className="bg-[#1a2332] h-[250px] sm:h-[300px] md:h-[350px] rounded-2xl border border-gray-700 overflow-hidden relative group flex flex-col">
              <div className="flex-grow relative">
                <iframe
                  src="https://maps.google.com/maps?q=Unit%202c%20Sherborne%20Street,%20Manchester,%20M8%208LR&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Unit 2c Sherborne Street, Manchester, M8 8LR Map"
                  className="absolute inset-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
              <div className="bg-[#1a2332] p-4 text-center border-t border-gray-700 z-10">
                <p className="text-[10px] sm:text-xs text-gray-400 uppercase font-bold tracking-widest">Registered Address</p>
                <p className="text-sm sm:text-base font-semibold text-white my-1">Unit 2c Sherborne Street, Manchester, M8 8LR</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
