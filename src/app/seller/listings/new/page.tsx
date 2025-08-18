'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Upload, Save, Camera, Package } from 'lucide-react'

export default function AddSellerListing() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    condition: 'excellent', // excellent, good, fair, poor
    year: '',
    loft: '',
    shaft: '',
    flex: '',
    grip: '',
    images: [] as File[],
    shippingCost: '',
    freeShipping: false,
    location: '',
    returnPolicy: '7 days',
    warranty: false,
    warrantyDetails: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imagePreview, setImagePreview] = useState<string[]>([])

  const categories = [
    'Drivers', 'Fairway Woods', 'Hybrids', 'Irons', 'Wedges', 'Putters', 
    'Golf Balls', 'Bags', 'Accessories', 'Clothing', 'Shoes'
  ]

  const brands = [
    'TaylorMade', 'Callaway', 'Titleist', 'Ping', 'Cobra', 'Mizuno', 
    'Wilson', 'Cleveland', 'Odyssey', 'Scotty Cameron', 'Other'
  ]

  const conditions = [
    { value: 'excellent', label: 'Excellent - Like new, minimal use' },
    { value: 'good', label: 'Good - Some signs of wear, still performs well' },
    { value: 'fair', label: 'Fair - Visible wear, functional' },
    { value: 'poor', label: 'Poor - Significant wear, may need repair' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }))

    // Create preview URLs
    const newPreviews = files.map(file => URL.createObjectURL(file))
    setImagePreview(prev => [...prev, ...newPreviews])
  }

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
    setImagePreview(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, this would call an API to create the listing
      console.log('Creating listing:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert('Listing created successfully! It will be reviewed and published within 24 hours.')
      // Redirect to seller dashboard
      window.location.href = '/seller/dashboard'
    } catch (error) {
      console.error('Error creating listing:', error)
      alert('Error creating listing. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/seller/dashboard" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Listing</h1>
          <p className="text-gray-600">List your golf club for sale and start earning</p>
        </div>

        {/* Commission Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start">
            <Package className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-blue-900">Commission Structure</h3>
              <p className="text-sm text-blue-700 mt-1">
                You'll earn 90% of the sale price (10% platform commission). Payments are held in escrow until the buyer confirms receipt.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Basic Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="e.g., TaylorMade SIM2 Driver"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand *
                  </label>
                  <select
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select Brand</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (R) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    min="0"
                    step="0.01"
                    className="input-field"
                    placeholder="299.99"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="input-field"
                  placeholder="Describe your golf club in detail. Include specifications, condition, and any notable features..."
                />
              </div>
            </div>

            {/* Product Specifications */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition *
                  </label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  >
                    {conditions.map(condition => (
                      <option key={condition.value} value={condition.value}>
                        {condition.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year of Manufacture
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    min="1900"
                    max="2024"
                    className="input-field"
                    placeholder="2020"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loft (degrees)
                  </label>
                  <input
                    type="text"
                    name="loft"
                    value={formData.loft}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="10.5°"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shaft Type
                  </label>
                  <input
                    type="text"
                    name="shaft"
                    value={formData.shaft}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="e.g., Graphite, Steel"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Flex
                  </label>
                  <select
                    name="flex"
                    value={formData.flex}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="">Select Flex</option>
                    <option value="ladies">Ladies</option>
                    <option value="senior">Senior</option>
                    <option value="regular">Regular</option>
                    <option value="stiff">Stiff</option>
                    <option value="extra-stiff">Extra Stiff</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grip Type
                  </label>
                  <input
                    type="text"
                    name="grip"
                    value={formData.grip}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="e.g., Golf Pride, Winn"
                  />
                </div>
              </div>
            </div>

            {/* Images */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Images</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Images *
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Camera className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB each</p>
                      </div>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        required
                      />
                    </label>
                  </div>
                </div>

                {/* Image Previews */}
                {imagePreview.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {imagePreview.map((preview, index) => (
                      <div key={index} className="relative">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Shipping & Location */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping & Location</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="e.g., Johannesburg, Gauteng"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipping Cost (R)
                  </label>
                  <input
                    type="number"
                    name="shippingCost"
                    value={formData.shippingCost}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    className="input-field"
                    placeholder="50.00"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="freeShipping"
                      checked={formData.freeShipping}
                      onChange={handleInputChange}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Offer free shipping</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Policies & Warranty</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Return Policy
                  </label>
                  <select
                    name="returnPolicy"
                    value={formData.returnPolicy}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="no-returns">No Returns</option>
                    <option value="3 days">3 Days</option>
                    <option value="7 days">7 Days</option>
                    <option value="14 days">14 Days</option>
                    <option value="30 days">30 Days</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="warranty"
                      checked={formData.warranty}
                      onChange={handleInputChange}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Include warranty</span>
                  </label>
                </div>

                {formData.warranty && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Warranty Details
                    </label>
                    <textarea
                      name="warrantyDetails"
                      value={formData.warrantyDetails}
                      onChange={handleInputChange}
                      rows={3}
                      className="input-field"
                      placeholder="Describe the warranty terms and conditions..."
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
              <Link
                href="/seller/dashboard"
                className="btn-secondary"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary inline-flex items-center space-x-2 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{isSubmitting ? 'Creating...' : 'Create Listing'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
