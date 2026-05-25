import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ProductHero from '../assets/ProductHero.png'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpeg'
import img8 from '../assets/img8.jpeg'
import img9 from '../assets/img9.jpeg'
import img10 from '../assets/img10.jpeg'
import img11 from '../assets/img11.jpeg'
import img12 from '../assets/img12.jpeg'
import img13 from '../assets/img13.jpeg'
import img14 from '../assets/img14.jpeg'
import img15 from '../assets/img15.jpeg'
import img16 from '../assets/img16.jpeg'
import img17 from '../assets/img17.jpeg'
import img18 from '../assets/img18.jpeg'
import img19 from '../assets/img19.jpeg'
import img20 from '../assets/img20.jpeg'
import img21 from '../assets/img21.jpeg'
import img22 from '../assets/img22.jpeg'
import img23 from '../assets/img23.jpeg'
import img24 from '../assets/img24.jpeg'

const Product = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const productData = {
    'Interior Design & Home Decor': [
      { name: 'Modern Interior Design Service', image: img1, tag: 'Premium' },
      { name: 'Home Decoration Essentials', image: img2, tag: 'Trending' },
      { name: 'Professional Painting Services', image: img3, tag: 'Popular' },
    ],
    'Retail Solutions': [
      { name: 'Smart POS System', image: img4, tag: 'Essential' },
      { name: 'Retail Store Fixtures', image: img5 },
      { name: 'Inventory Management System', image: img6 }
    ],
    'Construction Tools & Kits': [
      { name: 'Heavy Duty Power Tools', image: img7, tag: 'Bestseller' },
      { name: 'Professional Construction Kit', image: img8 },
      { name: 'Basic Masonry Kit', image: img9 }
    ],
    'Structural & Masonry': [
      { name: 'Multi-Width Insulated Cavity Closer', image: img10, tag: 'Bestseller' },
      { name: 'Fire-Rated Cavity Stop Socks', image: img11 },
      { name: 'Bulk Bag Building Sand (850kg)', image: img12 },
      { name: 'Premium Portland Cement 25kg', image: img13 },
      { name: 'Grade A Oak Structural Blocks', image: img14 },
      { name: 'Metal Faced Plaster Access Panel', image: img15, tag: 'New' }
    ],
    'Hardware & Fasteners': [
      { name: 'Galvanized High-Tensile Binding Wire', image: img16 },
      { name: 'Industrial Masonry Fastener Pack', image: img17 },
      { name: 'Industrial Tie-Down Straps', image: img18 }
    ],
    'Safety & PPE': [
      { name: 'Hi-Vis Safety Duo (Vest & Helmet)', image: img19, tag: 'Essential' },
      { name: 'Executive Hi-Vis Safety Vest', image: img20 },
      { name: 'Heavy-Duty Impact Work Gloves', image: img21 },
      { name: 'Anti-Fog Wide Vision Goggles', image: img22 },
      { name: 'Carbon Fiber Safety Helmet', image: img23 },
      { name: 'Titanium Toe Work Boots', image: img24, tag: 'New' }
    ]
  }

  const featuredProducts = [
    { name: 'Multi-Width Insulated Cavity Closer', image: img10, tag: 'Bestseller' },
    { name: 'Fire-Rated Cavity Stop Socks', image: img11 },
    { name: 'Bulk Bag Building Sand (850kg)', image: img12 },
    { name: 'Galvanized High-Tensile Binding Wire', image: img16 },
    { name: 'Premium Portland Cement 25kg', image: img13 },
    { name: 'Grade A Oak Structural Blocks', image: img14, tag: 'Popular' },
    { name: 'Industrial Masonry Fastener Pack', image: img17 },
    { name: 'Industrial Tie-Down Straps', image: img18 },
    { name: 'Metal Faced Plaster Access Panel', image: img15, tag: 'New' },
    { name: 'Hi-Vis Safety Duo (Vest & Helmet)', image: img19, tag: 'Essential' },
    { name: 'Executive Hi-Vis Safety Vest', image: img20 },
    { name: 'Heavy-Duty Impact Work Gloves', image: img21 },
    { name: 'Anti-Fog Wide Vision Goggles', image: img22 },
    { name: 'Carbon Fiber Safety Helmet', image: img23, tag: 'Premium' },
    { name: 'Titanium Toe Work Boots', image: img24, tag: 'New' },
    { name: 'Smart POS System', image: img4, tag: 'Essential' },
    { name: 'Modern Interior Design Service', image: img1, tag: 'Premium' },
  ]

  const getAllProducts = () => {
    return Object.values(productData).flat()
  }

  const getDisplayedProducts = () => {
    if (selectedCategory === 'all') {
      return getAllProducts()
    }
    return productData[selectedCategory] || []
  }

  const categories = Object.keys(productData)

  return (
    <div className="bg-[#0c1624] text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full overflow-hidden">
        <img
          src={ProductHero}
          alt="Industrial products background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <p className="text-yellow-400 text-[10px] sm:text-xs md:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-widest">Our Catalog</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-2 sm:mb-4">
            Premium Products for Every <span className="text-yellow-400">Industry Need</span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl px-2 sm:px-0">
            High-quality solutions for construction, safety, and maintenance requirements. Browse our comprehensive product catalog.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center sm:text-left">
          <p className="text-yellow-400 text-xs sm:text-sm font-semibold mb-2 uppercase tracking-wide">Featured Solutions</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
            Our Best-Selling Products
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
            Trusted by professionals across construction, transport, and retail sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-[#1a2332] rounded-lg overflow-hidden hover:shadow-2xl transition duration-500 hover:border-yellow-400/50 border border-gray-700 group relative"
            >
              {product.tag && (
                <span className="absolute top-2 left-2 z-10 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
                  {product.tag}
                </span>
              )}
              <img 
                src={product.image} 
                alt={product.name}
                className="h-40 sm:h-48 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-4 sm:p-5 relative z-20 bg-[#1a2332]">
                <h3 className="font-bold text-sm sm:text-base mb-3 line-clamp-2 hover:text-yellow-400 transition">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                  Premium industrial solution designed for heavy-duty professional performance.
                </p>
                <button 
                  onClick={() => navigate('/request-quote')}
                  className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-300 transition text-xs sm:text-sm">
                  Add to Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 text-center sm:text-left">
            Browse by <span className="text-yellow-400">Category</span>
          </h2>

          {/* Category Buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg font-semibold transition text-xs sm:text-sm md:text-base ${
                selectedCategory === 'all'
                  ? 'bg-yellow-400 text-black'
                  : 'bg-[#1a2332] text-white hover:border-yellow-400 border border-gray-700'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-5 py-2 rounded-lg font-semibold transition text-xs sm:text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black'
                    : 'bg-[#1a2332] text-white hover:border-yellow-400 border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {getDisplayedProducts().map((product, index) => (
              <div
                key={index}
                className="bg-[#1a2332] p-4 sm:p-5 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition duration-500 group relative overflow-hidden"
              >
                {product.tag && (
                  <span className="absolute top-3 right-3 z-10 bg-yellow-400/90 text-black text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">
                    {product.tag}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                />
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg flex-1 group-hover:text-yellow-400 transition duration-300">
                    {product.name}
                  </h3>
                  <span className="ml-2 text-yellow-400 font-bold text-lg">→</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mb-5 line-clamp-2">
                  Premium industrial solution designed for heavy-duty professional performance and reliability.
                </p>
                <button 
                  onClick={() => navigate('/request-quote')}
                  className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-300 transition text-xs sm:text-sm">
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-400/10 to-blue-600/10 border border-yellow-400/30 rounded-xl sm:rounded-2xl p-6 sm:p-10 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 px-2 sm:px-0">
            Our team specializes in tailored product solutions for construction, transport, and retail sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-bold hover:bg-yellow-300 transition text-sm sm:text-base">
              Contact Sales
            </Link>
            <Link to="/about" className="w-full sm:w-auto border-2 border-yellow-400 text-yellow-400 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-bold hover:bg-yellow-400/10 transition text-sm sm:text-base">
              Download Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
