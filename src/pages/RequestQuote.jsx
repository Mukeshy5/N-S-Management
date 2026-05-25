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
    <div className="bg-[#0c1624] text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[350px] lg:h-[400px] w-full overflow-hidden bg-gradient-to-r from-[#0c1624] to-[#1a2332]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <p className="text-yellow-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Get Your Custom Quote</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Request a <span className="text-yellow-400">Quote Today</span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base max-w-2xl">
            Tell us about your requirements and our team will provide you with a customized quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a2332] rounded-lg p-6 sm:p-8 border border-gray-700">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Quote Request Form</h2>
              
              {submitted && (
                <div className="mb-6 p-4 sm:p-5 bg-green-500/20 border border-green-500 rounded-lg text-green-200 text-sm sm:text-base">
                  ✓ Thank you! Your quote request has been submitted successfully. We'll be in touch shortly!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 rounded bg-[#0c1624] border border-gray-600 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition text-xs sm:text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 rounded bg-[#0c1624] border border-gray-600 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition text-xs sm:text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 rounded bg-[#0c1624] border border-gray-600 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition text-xs sm:text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 rounded bg-[#0c1624] border border-gray-600 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition text-xs sm:text-sm"
                      placeholder="+44 (0) 20 1234 5678"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 rounded bg-[#0c1624] border border-gray-600 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition text-xs sm:text-sm"
                    placeholder="Your Company Ltd"
                  />
                </div>

                {/* Product Category & Quantity Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2">Product Category *</label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 rounded bg-[#0c1624] border border-gray-600 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition text-xs sm:text-sm"
                    >
                      <option value="">Select Category</option>
                      {productCategories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 rounded bg-[#0c1624] border border-gray-600 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition text-xs sm:text-sm"
                      placeholder="e.g., 100 units"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2 rounded bg-[#0c1624] border border-gray-600 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition text-xs sm:text-sm resize-none"
                    placeholder="Tell us more about your requirements, specific needs, or budget..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-3 rounded font-bold hover:bg-yellow-300 transition text-sm sm:text-base"
                >
                  Submit Quote Request
                </button>
              </form>
            </div>
          </div>

          {/* Side Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Info Card 1 */}
              <div className="bg-[#1a2332] rounded-lg p-6 border border-gray-700">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Quick Response</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Get a personalized quote within 24 hours from our team.
                </p>
              </div>

              {/* Quick Info Card 2 */}
              <div className="bg-[#1a2332] rounded-lg p-6 border border-gray-700">
                <div className="text-2xl mb-3">💰</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Best Pricing</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Competitive rates with volume discounts available.
                </p>
              </div>

              {/* Quick Info Card 3 */}
              <div className="bg-[#1a2332] rounded-lg p-6 border border-gray-700">
                <div className="text-2xl mb-3">📞</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Support</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Call +44 (0) 20 1234 5678 for urgent requests.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-yellow-400/10 to-blue-600/10 border border-yellow-400/30 rounded-lg p-6">
                <h3 className="font-bold text-base sm:text-lg mb-3">Why Choose N&S?</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#1a2332] mt-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
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
              <div key={idx} className="bg-[#0c1624] p-5 sm:p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-sm sm:text-base mb-2 text-yellow-400">{faq.q}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default RequestQuote
