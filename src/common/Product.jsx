import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const productData = {
    'Structural & Masonry Products': [
      { name: 'Multi-Width Insulated Cavity Closer', image: 'https://images.unsplash.com/photo-1590059132718-500fd17a534c?q=80&w=800&auto=format&fit=crop', tag: 'Bestseller' },
      { name: 'Pre-Formed Cavity Tray System', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop' },
      { name: 'Bulk Bag Building Sand (850kg)', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop' },
      { name: 'Premium Portland Cement 25kg', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Grade A Oak Structural Blocks', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop' },
      { name: 'Galvanized High-Tensile Binding Wire', image: 'https://images.unsplash.com/photo-1530124566582-ab6127771b0b?q=80&w=800&auto=format&fit=crop' },
      { name: 'Industrial Masonry Fastener Pack', image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop' }
    ],
    'Drylining & Access Products': [
      { name: 'Metal Faced Plaster Access Panel', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop', tag: 'New' },
      { name: 'Plasterboards', image: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=800&auto=format&fit=crop' },
      { name: 'Louvre Systems / Louvre Boards', image: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=800&auto=format&fit=crop' }
    ],
    'Site Safety Products': [
      { name: 'Hi-Vis Safety Duo (Vest & Helmet)', image: 'https://images.unsplash.com/photo-1513467655676-56ae80fd972b?q=80&w=800&auto=format&fit=crop', tag: 'Essential' },
      { name: 'Executive Hi-Vis Safety Vest', image: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fire-Rated Cavity Stop Socks', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop' },
      { name: 'Industrial Tie-Down Straps', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop' }
    ],
    'Site Handover & Maintenance': [
      { name: 'Professional Cleaning Materials', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Site Finishing Supplies', image: 'https://images.unsplash.com/photo-1581092162384-8987c17d4718?q=80&w=800&auto=format&fit=crop' },
      { name: 'Maintenance Products', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop' }
    ]
  }

  const featuredProducts = [
    { name: 'Multi-Width Insulated Cavity Closer', image: 'https://images.unsplash.com/photo-1590059132718-500fd17a534c?q=80&w=800', tag: 'Bestseller' },
    { name: 'Fire-Rated Cavity Stop Socks', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800' },
    { name: 'Pre-Formed Cavity Tray System', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800' },
    { name: 'Bulk Bag Building Sand (850kg)', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800' },
    { name: 'Galvanized High-Tensile Binding Wire', image: 'https://images.unsplash.com/photo-1530124566582-ab6127771b0b?q=80&w=800' },
    { name: 'Premium Portland Cement 25kg', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800' },
    { name: 'Grade A Oak Structural Blocks', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800' },
    { name: 'Industrial Masonry Fastener Pack', image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800' },
    { name: 'Metal Faced Plaster Access Panel', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800' },
    { name: 'Industrial Tie-Down Straps', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800' },
    { name: 'Hi-Vis Safety Duo (Vest & Helmet)', image: 'https://images.unsplash.com/photo-1513467655676-56ae80fd972b?q=80&w=800' },
    { name: 'Executive Hi-Vis Safety Vest', image: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=800' }
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
      <section className="relative h-[250px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
          alt="Industrial products background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <p className="text-yellow-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Our Catalog</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Premium Products for Every <span className="text-yellow-400">Industry Need</span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base max-w-2xl">
            High-quality solutions for construction, safety, and maintenance requirements. Browse our comprehensive product catalog.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12">
          <p className="text-yellow-400 text-xs sm:text-sm font-semibold mb-2">Featured Solutions</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Our Best-Selling Products
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
            Trusted by professionals across construction, transport, and retail sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
            Browse by <span className="text-yellow-400">Category</span>
          </h2>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 sm:px-5 py-2 rounded-lg font-semibold transition text-xs sm:text-sm ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-400/10 to-blue-600/10 border border-yellow-400/30 rounded-lg p-6 sm:p-10 lg:p-14 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base mb-6 sm:mb-8">
            Our team specializes in tailored product solutions for construction, transport, and retail sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="bg-yellow-400 text-black px-6 sm:px-8 py-3 rounded font-bold hover:bg-yellow-300 transition text-sm sm:text-base flex items-center justify-center">
              Contact Sales
            </Link>
            <Link to="/about" className="border-2 border-yellow-400 text-yellow-400 px-6 sm:px-8 py-3 rounded font-bold hover:bg-yellow-400/10 transition text-sm sm:text-base flex items-center justify-center">
              Download Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
