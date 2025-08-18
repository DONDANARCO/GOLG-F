'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Package, DollarSign, ShoppingCart, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react'

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data - in a real app this would come from an API
  const stats = {
    totalEarnings: 2450.75,
    totalSales: 12,
    activeListings: 8,
    pendingPayouts: 450.25,
    monthlyEarnings: 1250.50,
    commissionRate: 10
  }

  const recentOrders = [
    { id: '#1234', product: 'TaylorMade Driver', buyer: 'John Smith', amount: 299.99, status: 'Delivered', date: '2024-01-15' },
    { id: '#1235', product: 'Callaway Irons', buyer: 'Sarah Johnson', amount: 149.99, status: 'Shipped', date: '2024-01-14' },
    { id: '#1236', product: 'Titleist Golf Balls', buyer: 'Mike Davis', amount: 89.99, status: 'Pending', date: '2024-01-13' }
  ]

  const myListings = [
    { id: '1', name: 'TaylorMade Driver', price: 299.99, status: 'Active', views: 45, sales: 2 },
    { id: '2', name: 'Callaway Irons Set', price: 599.99, status: 'Active', views: 32, sales: 1 },
    { id: '3', name: 'Ping Putter', price: 199.99, status: 'Inactive', views: 18, sales: 0 }
  ]

  const tabs = [
    { id: 'overview', name: 'Overview', icon: TrendingUp },
    { id: 'listings', name: 'My Listings', icon: Package },
    { id: 'orders', name: 'Orders', icon: ShoppingCart },
    { id: 'earnings', name: 'Earnings', icon: DollarSign }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800'
      case 'Shipped': return 'bg-blue-100 text-blue-800'
      case 'Pending': return 'bg-yellow-100 text-yellow-800'
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Inactive': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered': return <CheckCircle className="w-4 h-4" />
      case 'Shipped': return <Package className="w-4 h-4" />
      case 'Pending': return <Clock className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Seller Dashboard</h1>
            <p className="text-gray-600">Manage your golf club listings and track your earnings</p>
          </div>
          <Link href="/seller/listings/new" className="btn-primary inline-flex items-center space-x-2 mt-4 sm:mt-0">
            <Plus className="w-4 h-4" />
            <span>Add New Listing</span>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">R{stats.totalEarnings.toLocaleString()}</p>
                <p className="text-sm text-green-600">+{stats.monthlyEarnings} this month</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalSales}</p>
                <p className="text-sm text-blue-600">{stats.commissionRate}% commission</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeListings}</p>
                <p className="text-sm text-purple-600">Live on marketplace</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Payouts</p>
                <p className="text-2xl font-bold text-gray-900">R{stats.pendingPayouts}</p>
                <p className="text-sm text-orange-600">3-5 business days</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Orders */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
                    <div className="space-y-3">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{order.product}</p>
                            <p className="text-sm text-gray-600">Order {order.id} • {order.buyer}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">R{order.amount}</p>
                            <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                              {getStatusIcon(order.status)}
                              <span className="ml-1">{order.status}</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link href="/seller/orders" className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-4 inline-block">
                      View all orders →
                    </Link>
                  </div>

                  {/* Quick Actions */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Link href="/seller/listings/new" className="block p-4 bg-primary-50 border border-primary-200 rounded-lg hover:bg-primary-100 transition-colors">
                        <div className="flex items-center">
                          <Plus className="w-5 h-5 text-primary-600 mr-3" />
                          <div>
                            <p className="font-medium text-primary-900">Add New Listing</p>
                            <p className="text-sm text-primary-700">List a golf club for sale</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/seller/earnings" className="block p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
                        <div className="flex items-center">
                          <DollarSign className="w-5 h-5 text-green-600 mr-3" />
                          <div>
                            <p className="font-medium text-green-900">View Earnings</p>
                            <p className="text-sm text-green-700">Track your commission earnings</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/seller/settings" className="block p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <Package className="w-5 h-5 text-gray-600 mr-3" />
                          <div>
                            <p className="font-medium text-gray-900">Manage Listings</p>
                            <p className="text-sm text-gray-700">Edit or remove your listings</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Listings Tab */}
            {activeTab === 'listings' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">My Listings</h3>
                  <Link href="/seller/listings/new" className="btn-primary">
                    Add New Listing
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Views
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Sales
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {myListings.map((listing) => (
                        <tr key={listing.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{listing.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            R{listing.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(listing.status)}`}>
                              {listing.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {listing.views}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {listing.sales}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <Link href={`/seller/listings/edit/${listing.id}`} className="text-blue-600 hover:text-blue-900">
                                Edit
                              </Link>
                              <button className="text-red-600 hover:text-red-900">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Orders</h3>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{order.product}</p>
                          <p className="text-sm text-gray-600">Order {order.id} • {order.buyer}</p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">R{order.amount}</p>
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1">{order.status}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Earnings Tab */}
            {activeTab === 'earnings' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-green-900">This Month</h4>
                    <p className="text-2xl font-bold text-green-600">R{stats.monthlyEarnings}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-blue-900">Total Earnings</h4>
                    <p className="text-2xl font-bold text-blue-600">R{stats.totalEarnings}</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-orange-900">Pending Payouts</h4>
                    <p className="text-2xl font-bold text-orange-600">R{stats.pendingPayouts}</p>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Commission Structure</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Commission Rate</span>
                      <span className="font-medium">{stats.commissionRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Payout Schedule</span>
                      <span className="font-medium">3-5 business days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Minimum Payout</span>
                      <span className="font-medium">R100</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
