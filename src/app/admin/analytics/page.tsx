'use client'

import { useState } from 'react'
import { BarChart3, TrendingUp, Users, DollarSign, ShoppingCart, Eye } from 'lucide-react'

export default function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState('7d')

  // Mock data - in a real app this would come from an API
  const stats = {
    totalRevenue: 12450,
    totalOrders: 156,
    totalCustomers: 89,
    totalViews: 2340,
    revenueChange: 12.5,
    ordersChange: 8.2,
    customersChange: 15.7,
    viewsChange: -2.1
  }

  const recentOrders = [
    { id: '#1234', customer: 'John Smith', amount: 299.99, status: 'Completed', date: '2024-01-15' },
    { id: '#1235', customer: 'Sarah Johnson', amount: 149.99, status: 'Processing', date: '2024-01-15' },
    { id: '#1236', customer: 'Mike Davis', amount: 599.99, status: 'Completed', date: '2024-01-14' },
    { id: '#1237', customer: 'Emily Wilson', amount: 199.99, status: 'Shipped', date: '2024-01-14' },
    { id: '#1238', customer: 'David Brown', amount: 399.99, status: 'Completed', date: '2024-01-13' }
  ]

  const topProducts = [
    { name: 'TaylorMade Driver', sales: 23, revenue: 2875 },
    { name: 'Callaway Irons', sales: 18, revenue: 2160 },
    { name: 'Titleist Golf Balls', sales: 45, revenue: 675 },
    { name: 'Ping Putter', sales: 12, revenue: 1440 },
    { name: 'Cobra Hybrid', sales: 15, revenue: 1200 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
            <p className="text-gray-600">Track your store performance and insights</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
                <p className={`text-sm ${stats.revenueChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stats.revenueChange >= 0 ? '+' : ''}{stats.revenueChange}% from last period
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
                <p className={`text-sm ${stats.ordersChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stats.ordersChange >= 0 ? '+' : ''}{stats.ordersChange}% from last period
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Customers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalCustomers}</p>
                <p className={`text-sm ${stats.customersChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stats.customersChange >= 0 ? '+' : ''}{stats.customersChange}% from last period
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Page Views</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</p>
                <p className={`text-sm ${stats.viewsChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stats.viewsChange >= 0 ? '+' : ''}{stats.viewsChange}% from last period
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${order.amount}</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary-600">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.sales} sales</p>
                      </div>
                    </div>
                    <p className="font-medium text-gray-900">${product.revenue}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Revenue Trend</h2>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-600">+12.5% this month</span>
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Chart visualization would be implemented here</p>
              <p className="text-sm text-gray-400">Using libraries like Chart.js or Recharts</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">
              Export Report
            </button>
            <button className="btn-secondary">
              Generate Invoice
            </button>
            <button className="btn-secondary">
              View Detailed Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
