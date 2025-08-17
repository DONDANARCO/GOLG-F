import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SortAsc, SortDesc } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products, categories, brands } from '../data/products';
import { Product, FilterOptions } from '../types';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Get filter values from URL params
  const category = searchParams.get('category') || '';
  const brand = searchParams.get('brand') || '';
  const search = searchParams.get('search') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const inStock = searchParams.get('inStock') === 'true';

  useEffect(() => {
    let filtered = [...products];

    // Apply filters
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (brand) {
      filtered = filtered.filter(product => product.brand === brand);
    }

    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (minPrice) {
      filtered = filtered.filter(product => product.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter(product => product.price <= parseFloat(maxPrice));
    }

    if (inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue: any = a[sortBy as keyof Product];
      let bValue: any = b[sortBy as keyof Product];

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredProducts(filtered);
  }, [category, brand, search, minPrice, maxPrice, inStock, sortBy, sortOrder]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const toggleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
            <p className="text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="sm:hidden flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-300"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={category === cat}
                        onChange={(e) => updateFilter('category', e.target.value)}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Brand</h3>
                <div className="space-y-2">
                  {brands.map((brandName) => (
                    <label key={brandName} className="flex items-center">
                      <input
                        type="radio"
                        name="brand"
                        value={brandName}
                        checked={brand === brandName}
                        onChange={(e) => updateFilter('brand', e.target.value)}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{brandName}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Min Price</label>
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => updateFilter('minPrice', e.target.value)}
                      placeholder="0"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Max Price</label>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => updateFilter('maxPrice', e.target.value)}
                      placeholder="2000"
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* In Stock Filter */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => updateFilter('inStock', e.target.checked ? 'true' : '')}
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Sort Controls */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                    <option value="brand">Brand</option>
                  </select>
                  <button
                    onClick={toggleSort}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {sortOrder === 'asc' ? (
                      <SortAsc className="w-4 h-4" />
                    ) : (
                      <SortDesc className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Active Filters */}
                {(category || brand || minPrice || maxPrice || inStock) && (
                  <div className="flex flex-wrap gap-2">
                    {category && (
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                        Category: {category}
                      </span>
                    )}
                    {brand && (
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                        Brand: {brand}
                      </span>
                    )}
                    {(minPrice || maxPrice) && (
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                        Price: ${minPrice || '0'} - ${maxPrice || '∞'}
                      </span>
                    )}
                    {inStock && (
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                        In Stock Only
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 