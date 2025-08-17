import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">About Us</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      We are passionate about golf and committed to providing the best equipment 
                      to help you improve your game. Our team of experts is here to guide you 
                      in finding the perfect clubs for your playing style.
                    </p>
                  </div>
                </div>
              } />
              <Route path="/contact" element={
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Get in touch with our golf experts for personalized recommendations 
                      and support. We're here to help you find the perfect equipment.
                    </p>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App; 