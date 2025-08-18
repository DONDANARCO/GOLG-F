'use client'

import { useState } from 'react'
import { Save, Palette, Globe, Mail, CreditCard, Shield } from 'lucide-react'

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    // Store Information
    storeName: 'Golf Club Store',
    storeDescription: 'Premium Golf Equipment Store',
    storeEmail: 'contact@golfclubstore.com',
    storePhone: '+1 (555) 123-4567',
    storeAddress: '123 Golf Street, Golf City, GC 12345',
    
    // Theme Settings
    primaryColor: '#2563eb',
    secondaryColor: '#64748b',
    enableDarkMode: false,
    
    // Payment Settings
    enablePayments: true,
    stripeEnabled: true,
    paypalEnabled: false,
    currency: 'USD',
    
    // Shipping Settings
    freeShippingThreshold: 100,
    defaultShippingCost: 9.99,
    enableInternationalShipping: true,
    
    // Email Settings
    enableOrderEmails: true,
    enableNewsletter: true,
    smtpHost: 'smtp.gmail.com',
    smtpPort: 587,
    
    // Security Settings
    enableTwoFactorAuth: false,
    sessionTimeout: 30,
    enableSSL: true
  })

  const [activeTab, setActiveTab] = useState('general')
  const [isSaving, setIsSaving] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      // In a real app, this would call an API to save settings
      console.log('Saving settings:', settings)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('Settings saved successfully!')
    } catch (error) {
      console.error('Error saving settings:', error)
      alert('Error saving settings. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const tabs = [
    { id: 'general', name: 'General', icon: Globe },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'shipping', name: 'Shipping', icon: Mail },
    { id: 'security', name: 'Security', icon: Shield }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Site Settings</h1>
          <p className="text-gray-600">Configure your store settings and preferences</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          {/* Tabs */}
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
          <form onSubmit={handleSubmit} className="p-6">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Store Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Store Name
                    </label>
                    <input
                      type="text"
                      name="storeName"
                      value={settings.storeName}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Store Email
                    </label>
                    <input
                      type="email"
                      name="storeEmail"
                      value={settings.storeEmail}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Store Phone
                    </label>
                    <input
                      type="tel"
                      name="storePhone"
                      value={settings.storePhone}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Currency
                    </label>
                    <select
                      name="currency"
                      value={settings.currency}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="CAD">CAD (C$)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Store Description
                  </label>
                  <textarea
                    name="storeDescription"
                    value={settings.storeDescription}
                    onChange={handleInputChange}
                    rows={3}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Store Address
                  </label>
                  <textarea
                    name="storeAddress"
                    value={settings.storeAddress}
                    onChange={handleInputChange}
                    rows={2}
                    className="input-field"
                  />
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Theme Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        name="primaryColor"
                        value={settings.primaryColor}
                        onChange={handleInputChange}
                        className="w-12 h-10 rounded border border-gray-300"
                      />
                      <input
                        type="text"
                        name="primaryColor"
                        value={settings.primaryColor}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secondary Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        name="secondaryColor"
                        value={settings.secondaryColor}
                        onChange={handleInputChange}
                        className="w-12 h-10 rounded border border-gray-300"
                      />
                      <input
                        type="text"
                        name="secondaryColor"
                        value={settings.secondaryColor}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="enableDarkMode"
                      checked={settings.enableDarkMode}
                      onChange={handleInputChange}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Enable Dark Mode</span>
                  </label>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Payment Settings</h2>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="enablePayments"
                      checked={settings.enablePayments}
                      onChange={handleInputChange}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Enable Payments</span>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="stripeEnabled"
                        checked={settings.stripeEnabled}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Enable Stripe</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="paypalEnabled"
                        checked={settings.paypalEnabled}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Enable PayPal</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Shipping Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Free Shipping Threshold ($)
                    </label>
                    <input
                      type="number"
                      name="freeShippingThreshold"
                      value={settings.freeShippingThreshold}
                      onChange={handleInputChange}
                      min="0"
                      step="0.01"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Default Shipping Cost ($)
                    </label>
                    <input
                      type="number"
                      name="defaultShippingCost"
                      value={settings.defaultShippingCost}
                      onChange={handleInputChange}
                      min="0"
                      step="0.01"
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="enableInternationalShipping"
                      checked={settings.enableInternationalShipping}
                      onChange={handleInputChange}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Enable International Shipping</span>
                  </label>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="enableTwoFactorAuth"
                        checked={settings.enableTwoFactorAuth}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Enable Two-Factor Authentication</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="enableSSL"
                        checked={settings.enableSSL}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Enable SSL</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Session Timeout (minutes)
                  </label>
                  <input
                    type="number"
                    name="sessionTimeout"
                    value={settings.sessionTimeout}
                    onChange={handleInputChange}
                    min="5"
                    max="1440"
                    className="input-field"
                  />
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex items-center justify-end pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSaving}
                className="btn-primary inline-flex items-center space-x-2 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{isSaving ? 'Saving...' : 'Save Settings'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
