import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#0c1624] text-white min-h-screen pt-16 sm:pt-24 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <div className="text-center lg:text-left">
            <p className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4">
              Since 2022
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Leading the Way in{" "}
              <span className="text-yellow-400">Business Solutions</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              N&S Management LTD is a premier provider of comprehensive
              solutions for the Construction, Transport, and Retail sectors.
              With over 4 years of industry experience, we deliver high-quality
              products and strategic services tailored to modern business needs.
            </p>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="N&S Management Headquarters"
              className="w-full aspect-video object-cover rounded-xl border border-gray-700 shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 hidden sm:flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-yellow-400 rounded-lg p-2 sm:p-4 text-black font-bold text-xs sm:text-base text-center shadow-lg">
              Our Mission: Excellence in Every Service.
            </div>
          </div>
        </div>

        <div className="bg-[#1a2332] p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-gray-700 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {["Integrity", "Innovation", "Reliability"].map((value) => (
              <div
                key={value}
                className="p-4 border border-gray-700 rounded-lg hover:border-yellow-400 transition"
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  {value}
                </h3>
                <p className="text-gray-400 text-sm">
                  Committed to delivering the highest standards in everything we
                  do.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
