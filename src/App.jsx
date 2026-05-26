import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Product from './common/Product'
import Contact from './pages/Contect' // Filename remains same for now but name is cleaner
import AboutUs from './pages/AboutUs'
import RequestQuote from './pages/RequestQuote'
import ScrollToTop from './utils/ScrollToTop'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
