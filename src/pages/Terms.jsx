import React from 'react'

const Terms = () => {
  return (
    <div className="bg-[#0c1624] text-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          Terms & <span className="text-yellow-400">Conditions</span>
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you agree to comply with the legal terms governing our nationwide business solutions in Construction, Transport, Retail, and Interior Design.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Service Provision</h2>
            <p>
              Our services include the procurement of industrial equipment, optimization of supply chain logistics, deployment of retail POS systems, and interior design architecture. All services are subject to availability and regional scheduling.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Industrial Quotes</h2>
            <p>
              Quotes for construction materials, logistics contracts, or retail fixtures are valid for 30 days. Final project costs are determined by site assessments and volume requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Liability & Compliance</h2>
            <p>
              All construction and safety equipment provided meets UK safety standards. We are not liable for delays caused by third-party transport or site-specific issues outside our direct management control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Intellectual Property</h2>
            <p>
              All content included on this site, such as text, graphics, logos, and images, is the property of N&S Management LTD or its content suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p>
              N&S Management LTD shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Governing Law</h2>
            <p>
              Any claim relating to N&S Management LTD's website shall be governed by the laws of the United Kingdom without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Terms