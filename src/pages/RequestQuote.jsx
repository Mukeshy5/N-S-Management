import React from 'react'

const RequestQuote = () => {
  return (
    <div className="bg-[#0c1624] text-white min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0c1624] to-[#1a2332]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-yellow-400 text-xs sm:text-sm font-semibold mb-3 uppercase tracking-[0.3em]">Business Solutions</p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-4">
            Project <span className="text-yellow-400">Insights</span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            Providing tailored solutions for modern industries. Discover why industry leaders trust N&S for their comprehensive industrial requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-20 -mt-10 sm:-mt-20">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Quick Info Card 1 */}
              <div className="bg-[#1a2332] rounded-2xl p-8 border border-gray-700 shadow-xl hover:border-yellow-400/30 transition-all group">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-yellow-400 transition">Rapid Turnaround</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Fast processing of custom orders to keep your projects on schedule.
                </p>
              </div>

              {/* Quick Info Card 2 */}
              <div className="bg-[#1a2332] rounded-2xl p-8 border border-gray-700 shadow-xl hover:border-yellow-400/30 transition-all group">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-yellow-400 transition">Volume Benefits</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Strategic pricing models designed for enterprise-scale operations.
                </p>
              </div>

              {/* Quick Info Card 3 */}
              <div className="bg-[#1a2332] rounded-2xl p-8 border border-gray-700 shadow-xl hover:border-yellow-400/30 transition-all group">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-yellow-400 transition">Compliance Assured</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  All products meet the highest UK safety and quality standards.
                </p>
              </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-yellow-400/10 to-blue-600/10 border border-yellow-400/30 rounded-2xl p-10 max-w-5xl mx-auto">
            <h3 className="font-bold text-2xl mb-8 text-center">Why Partner With N&S Management?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-300">
              <li className="flex items-start gap-4">
                <span className="text-yellow-400 font-bold text-2xl">✓</span>
                <div>
                  <p className="text-white font-bold mb-1">15+ Years Industry Experience</p>
                  <p className="text-sm">Deep domain expertise in construction and logistics.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-yellow-400 font-bold text-2xl">✓</span>
                <div>
                  <p className="text-white font-bold mb-1">500+ Satisfied Clients</p>
                  <p className="text-sm">Proven track record across multiple industry sectors.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-yellow-400 font-bold text-2xl">✓</span>
                <div>
                  <p className="text-white font-bold mb-1">Premium Quality Products</p>
                  <p className="text-sm">Sourced from trusted global manufacturing partners.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-yellow-400 font-bold text-2xl">✓</span>
                <div>
                  <p className="text-white font-bold mb-1">24/7 Dedicated Support</p>
                  <p className="text-sm">Round-the-clock assistance for critical operations.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Direct Contact Channels */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
            Direct <span className="text-yellow-400">Quote Channels</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Need a quote faster? Connect with our team directly through your preferred platform for immediate consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Call Support */}
          <a href="tel:+442012345678" className="bg-[#1a2332] p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group text-center block">
            <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">📞</div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-yellow-400 transition">Call Support</h3>
            <p className="text-gray-400 text-sm font-semibold">+44 (0) 20 1234 5678</p>
          </a>

          {/* Gmail/Email */}
          <a href="mailto:info@nsmanagement.co.uk" className="bg-[#1a2332] p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group text-center block">
            <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">📧</div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-yellow-400 transition">Email Inquiry</h3>
            <p className="text-gray-400 text-sm font-semibold truncate">info@nsmanagement.co.uk</p>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/442012345678" target="_blank" rel="noopener noreferrer" className="bg-[#1a2332] p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 group text-center block">
            <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">💬</div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-green-500 transition">WhatsApp Chat</h3>
            <p className="text-gray-400 text-sm font-semibold">Instant Quote Support</p>
          </a>

          {/* Social Presence */}
          <div className="bg-[#1a2332] p-8 rounded-2xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group text-center">
            <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">📱</div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-yellow-400 transition">Social Connect</h3>
            <div className="flex justify-center gap-3 mt-4">
              {[
                { n: 'FB', c: 'hover:text-blue-500' },
                { n: 'LI', c: 'hover:text-blue-600' },
                { n: 'IG', c: 'hover:text-pink-500' }
              ].map((s) => (
                <span key={s.n} className={`w-10 h-10 rounded-xl bg-[#0c1624] flex items-center justify-center text-xs font-black border border-gray-700 ${s.c} hover:border-current cursor-pointer transition-all duration-300`}>
                  {s.n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 bg-[#1a2332] border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-16">
            Information <span className="text-yellow-400">& Queries</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                q: 'How long does it take to receive a quote?',
                a: 'Most quotes are provided within 24 hours. For urgent requests, please call our team directly.'
              },
              {
                q: 'Can I request samples?',
                a: 'Yes! We provide product samples for qualified buyers. Mention it in the additional details section.'
              },
              {
                q: 'Do you offer bulk discounts?',
                a: 'Absolutely. Larger orders receive competitive pricing. Our team will discuss the best rates for you.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers, credit cards, and purchase orders for corporate clients.'
              },
              {
                q: 'Is there a minimum order quantity?',
                a: 'Minimum orders vary by product. Our team will clarify this in your personalized quote.'
              },
              {
                q: 'Do you offer delivery services?',
                a: 'Yes, we provide delivery across the UK. Shipping costs will be included in your quote.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#0c1624] p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/30 transition duration-300">
                <h3 className="font-bold text-base mb-3 text-yellow-400">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default RequestQuote
