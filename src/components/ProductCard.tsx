import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, getItemQuantity } = useCart();
  const quantityInCart = getItemQuantity(product.id);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="card group hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Quick View Button */}
        <Link
          to={`/product/${product.id}`}
          className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
        >
          <Eye className="w-4 h-4 text-gray-600" />
        </Link>
        
        {/* Stock Badge */}
        {!product.inStock && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Out of Stock
          </div>
        )}
        
        {/* Sale Badge */}
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute bottom-2 left-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
            Sale
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand and Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 font-medium">{product.brand}</span>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors ${
            product.inStock
              ? 'bg-primary-600 hover:bg-primary-700 text-white'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>
            {product.inStock
              ? quantityInCart > 0
                ? `Add Another (${quantityInCart})`
                : 'Add to Cart'
              : 'Out of Stock'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 