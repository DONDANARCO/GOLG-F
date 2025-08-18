'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Filter, SortAsc, SortDesc, Store, User, Package } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'
import { products, categories, brands } from '@/data/products'
import { Product } from '@/types'

// Define a type for seller listings
interface SellerListing {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string;
  brand: string;
  condition: string;
  seller: string;
  location: string;
  rating: number;
  inStock: boolean;
  featured: boolean;
  image: string;
  isSellerListing: true;
  commission: number;
}

// Mock seller listings - in a real app this would come from an API
const sellerListings: SellerListing[] = [
  {
    id: 'seller-1',
    name: 'TaylorMade SIM2 Driver',
    description: 'Excellent condition TaylorMade SIM2 Driver, 10.5° loft, stiff flex. Used for one season only.',
    price: 899.99,
    originalPrice: 1299.99,
    category: 'Drivers',
    brand: 'TaylorMade',
    condition: 'excellent',
    seller: 'GolfPro_John',
    location: 'Johannesburg, Gauteng',
    rating: 4.8,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    isSellerListing: true,
    commission: 89.99
  },
  {
    id: 'seller-2',
    name: 'Callaway Rogue Irons Set',
    description: 'Complete set of Callaway Rogue irons, 4-PW, regular flex. Great for intermediate players.',
    price: 2499.99,
    originalPrice: 3999.99,
    category: 'Irons',
    brand: 'Callaway',
    condition: 'good',
    seller: 'FairwayFinder',
    location: 'Cape Town, Western Cape',
    rating: 4.6,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    isSellerListing: true,
    commission: 249.99
  },
  {
    id: 'seller-3',
    name: 'Scotty Cameron Newport Putter',
    description: 'Mint condition Scotty Cameron Newport putter. Perfect for serious golfers.',
    price: 1899.99,
    originalPrice: 2899.99,
    category: 'Putters',
    brand: 'Scotty Cameron',
    condition: 'excellent',
    seller: 'PutterPro',
    location: 'Durban, KwaZulu-Natal',
    rating: 4.9,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    isSellerListing: true,
    commission: 189.99
  }
]

export default function MarketplacePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [filteredProducts, setFilteredProducts] = useState<(Product | SellerListing)[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [selectedSource, setSelectedSource] = useState('all') // all, platform, sellers

  // Get filter values from URL params
  const category = searchParams?.get('category') || ''
  const brand = searchParams?.get('brand') || ''
  const search = searchParams?.get('search') || ''
  const minPrice = searchParams?.get('minPrice') || ''
  const maxPrice = searchParams?.get('maxPrice') || ''
  const inStock = searchParams?.get('inStock') === 'true'

  // Combine platform products and seller listings
  const allProducts = [...products, ...sellerListings]

  useEffect(() => {
    let filtered = allProducts

    // Filter by source (platform vs sellers)
    if (selectedSource === 'platform') {
      filtered = products
    } else if (selectedSource === 'sellers') {
      filtered = sellerListings
    }

    // Apply other filters
    if (category) {
      filtered = filtered.filter(product => product.category === category)
    }
    if (brand) {
      filtered = filtered.filter(product => product.brand === brand)
    }
    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (minPrice) {
      filtered = filtered.filter(product => product.price >= parseFloat(minPrice))
    }
    if (maxPrice) {
      filtered = filtered.filter(product => product.price <= parseFloat(maxPrice))
    }
    if (inStock) {
      filtered = filtered.filter(product => product.inStock)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue: any
      let bValue: any

      // Handle sorting for common properties
      if (sortBy === 'price') {
        aValue = a.price
        bValue = b.price
      } else if (sortBy === 'name') {
        aValue = a.name
        bValue = b.name
      } else if (sortBy === 'brand') {
        aValue = a.brand
        bValue = b.brand
      } else if (sortBy === 'rating') {
        aValue = a.rating
        bValue = b.rating
      } else {
        // For other properties, try to access them safely
        aValue = (a as any)[sortBy]
        bValue = (b as any)[sortBy]
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    setFilteredProducts(filtered)
  }, [category, brand, search, minPrice, maxPrice, inStock, sortBy, sortOrder, selectedSource])

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams?.toString() || '')
    if (value) {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }
    router.push(`/marketplace?${newParams.toString()}`)
  }

  const clearFilters = () => {
    router.push('/marketplace')
  }

  const toggleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const getSourceIcon = (product: Product | SellerListing) => {
    if ('isSellerListing' in product && product.isSellerListing) {
      return <User className="w-4 h-4 text-green-600" />
    }
    return <Store className="w-4 h-4 text-blue-600" />
  }

  const getSourceLabel = (product: Product | SellerListing) => {
    if ('isSellerListing' in product && product.isSellerListing) {
      return 'Seller'
    }
    return 'Platform'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lets Golf ZA Marketplace</h1>
          <p className="text-gray-600">Find the perfect golf clubs from our platform and trusted sellers</p>
        </div>

        {/* Source Filter */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Show:</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedSource('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedSource === 'all'
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setSelectedSource('platform')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1 ${
                  selectedSource === 'platform'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Platform</span>
              </button>
              <button
                onClick={() => setSelectedSource('sellers')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1 ${
                  selectedSource === 'sellers'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Seller Listings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <button
                onClick={toggleSort}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                <span>Sort</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="brand">Brand</option>
                <option value="rating">Rating</option>
              </select>
              <span className="text-sm text-gray-600">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>

          {/* Filter Panel */}
          {isFilterOpen && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => updateFilter('category', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                  <select
                    value={brand}
                    onChange={(e) => updateFilter('brand', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Brands</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => updateFilter('minPrice', e.target.value)}
                    placeholder="0"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => updateFilter('maxPrice', e.target.value)}
                    placeholder="10000"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => updateFilter('inStock', e.target.checked ? 'true' : '')}
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
                </label>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={'isSellerListing' in product && product.isSellerListing ? product.image : product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  {getSourceIcon(product)}
                </div>
                <div className="absolute top-2 right-2">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                    getSourceLabel(product) === 'Seller' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {getSourceLabel(product)}
                  </span>
                </div>
                {product.featured && (
                  <div className="absolute bottom-2 left-2">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                </div>
                
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <span className="text-lg font-bold text-gray-900">R{product.price}</span>
                    {'originalPrice' in product && product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">R{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{product.brand}</span>
                  <span>{product.category}</span>
                </div>

                {'isSellerListing' in product && product.isSellerListing && (
                  <div className="text-xs text-gray-500 mb-3">
                    <span>Seller: {product.seller}</span>
                    <br />
                    <span>Location: {product.location}</span>
                  </div>
                )}

                <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
