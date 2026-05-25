import React, { useState } from 'react'

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    productCategory: '',
    quantity: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Quote Request Submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        productCategory: '',
        quantity: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  const productCategories = [
    'Structural & Masonry Products',
    'Drylining & Access Products',
    'Site Safety Products',
    'Site Handover & Maintenance',
    'Construction Equipment',
    'Transport & Logistics',
    'Retail Solutions'
  ]

  return (
    <div className="bg-[#0c1624] text-white min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative h-[220px] sm:h-[350px] lg:h-[450px] w-full overflow-hidden bg-gradient-to-r from-[#0c1624] to-[#1a2332]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <p className="text-yellow-400 text-xs sm:text-sm font-bold mb-2 sm:mb-4 uppercase tracking-[0.3em]">Business Solutions</p>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-3 sm:mb-6">
            Request <span className="text-yellow-400">Project Quote</span>
          </h1>
          <p className="text-gray-300 text-[10px] sm:text-sm lg:text-lg max-w-2xl leading-relaxed">
            Providing tailored solutions for modern industries. Complete the form below and our consultants will reach out within 24 business hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 -mt-10 sm:-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a2332] rounded-2xl p-6 sm:p-12 border border-gray-700 shadow-2xl shadow-black/50">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center">
                <span className="w-2 h-8 bg-yellow-400 mr-4 rounded-full"></span>
                Submission Details
              </h2>
              
              {submitted && (
                <div className="mb-8 p-4 sm:p-6 bg-green-500/10 border border-green-500/50 rounded-xl text-green-400 text-sm sm:text-base animate-pulse">
                  <span className="font-bold mr-2">Success!</span> Your request has been logged in our system.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0c1624] border border-gray-700 text-white outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition duration-300 text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0c1624] border border-gray-700 text-white outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition duration-300 text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0c1624] border border-gray-700 text-white outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition duration-300 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0c1624] border border-gray-700 text-white outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition duration-300 text-sm"
                      placeholder="+44 (0) 20 1234 5678"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Organization *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0c1624] border border-gray-700 text-white outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition duration-300 text-sm"
                    placeholder="Your Company Ltd"
                  />
                </div>

                {/* Product Category & Quantity Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Product Segment *</label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0c1624] border border-gray-700 text-white outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition duration-300 text-sm cursor-pointer"
                    >
                      <option value="">Select Category</option>
                      {productCategories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Expected Volume</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c1624] border border-gray-700 text-white outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition duration-300 text-sm"
                      placeholder="e.g., 100 units"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Scope of Work</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c1624] border border-gray-700 text-white outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition duration-300 text-sm resize-none"
                    placeholder="Describe specific requirements or technical needs..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-4 rounded-xl font-extrabold hover:bg-yellow-300 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-yellow-400/20 uppercase tracking-[0.2em] text-sm"
                >
                  Request Pricing
                </button>
              </form>
            </div>
          </div>

          {/* Side Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-6">
              {/* Quick Info Card 1 */}
              <div className="bg-[#1a2332] rounded-2xl p-8 border border-gray-700 shadow-xl hover:border-yellow-400/30 transition-all group">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-400 transition">Rapid Turnaround</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Get a personalized quote within 24 hours from our team.
                </p>
              </div>

              {/* Quick Info Card 2 */}
              <div className="bg-[#1a2332] rounded-2xl p-8 border border-gray-700 shadow-xl hover:border-yellow-400/30 transition-all group">
                <div className="text-2xl mb-3">💰</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-400 transition">Volume Benefits</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Competitive rates with volume discounts available.
                </p>
              </div>

              {/* Quick Info Card 3 */}
              <div className="bg-[#1a2332] rounded-2xl p-8 border border-gray-700 shadow-xl hover:border-yellow-400/30 transition-all group">
                <div className="text-2xl mb-3">📞</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-400 transition">Expert Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Call +44 (0) 20 1234 5678 for urgent requests.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-yellow-400/10 to-blue-600/10 border border-yellow-400/30 rounded-2xl p-8">
                <h3 className="font-bold text-lg mb-4">Why Partner With N&S?</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">✓</span>
                    <span>15+ Years Industry Experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">✓</span>
                    <span>500+ Satisfied Clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">✓</span>
                    <span>Premium Quality Products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">✓</span>
                    <span>24/7 Customer Support</span>
                  </li>
                </ul>
              </div>
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
