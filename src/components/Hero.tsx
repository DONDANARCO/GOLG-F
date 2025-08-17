import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-golf-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="flex items-center space-x-1 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Premium Golf Equipment</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your
              <span className="text-primary-600 block">Golf Game</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover the finest selection of golf clubs from top brands. 
              From drivers to putters, we have everything you need to improve your performance on the course.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-3"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/about"
                className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-3"
              >
                Learn More
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">10k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=600"
                alt="Premium golf clubs"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary-600 fill-current" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">Free</div>
                <div className="text-sm text-gray-600">Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#22c55e"
            d="M45.3,-63.3C59.9,-54.8,73.5,-42.8,79.8,-28.2C86.1,-13.6,85.1,3.6,83.8,20.4C82.5,37.2,80.9,53.6,73.1,66.1C65.3,78.6,51.3,87.2,36.2,91.8C21.1,96.4,4.9,97,-8.8,95.4C-22.5,93.8,-36.7,90,-47.8,81.8C-58.9,73.6,-66.9,61,-72.8,47.2C-78.7,33.4,-82.5,18.4,-83.1,3.1C-83.7,-12.2,-81.1,-27.8,-76.2,-41.8C-71.3,-55.8,-64.1,-68.2,-53.8,-76.2C-43.5,-84.2,-30.1,-87.8,-17.8,-89.8C-5.5,-91.8,5.7,-92.2,17.1,-90.8C28.5,-89.4,40.1,-86.2,45.3,-63.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 