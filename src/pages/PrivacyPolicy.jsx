import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0c1624] text-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          Privacy <span className="text-yellow-400">Policy</span>
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              N&S Management LTD ("we," "our," or "us") is a premier provider of industrial and professional services. This Privacy Policy outlines our commitment to protecting the data of our partners in the Construction, Transport, Retail, and Interior Design sectors. We handle all business and personal information with the highest standards of security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p>
              To provide nationwide logistics and structural solutions, we collect:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-sm sm:text-base">
              <li><strong>Professional Details:</strong> Business name, industry sector, and project location for construction and retail site delivery.</li>
              <li><strong>Logistics Data:</strong> Contact information for fleet management and transport coordination.</li>
              <li><strong>Design Blueprints:</strong> Architectural preferences and space planning data for interior design consulting.</li>
              <li><strong>Transaction Info:</strong> Quote requests for industrial tools, safety gear, and store fixtures.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>To optimize transport routes and supply chain efficiency for your logistics needs.</li>
              <li>To ensure safety compliance and certification for construction equipment.</li>
              <li>To manage inventory systems and POS data for retail management clients.</li>
              <li>To provide bespoke space-planning solutions for commercial and residential interior projects.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Cookies & Analytics</h2>
            <p>We use essential cookies to enhance your browsing experience through our product catalog and to analyze traffic patterns across our service sectors.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Data Security</h2>
            <p>
              We implement enterprise-grade security to protect your project insights. Your data is stored behind secured networks, especially sensitive logistics and architectural data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to provide the services you have requested, such as logistics partners for transport or manufacturers for specific equipment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Contact Information</h2>
            <p>
              If you have questions regarding this privacy policy, you may contact us at info@nsmanagementltd.co.uk or visit our registered address at 19 Galloway Street, Liverpool, United Kingdom, L7 6PD.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy