'use client';

import React, { useState } from 'react';
import { Button, Card, Input } from '@neucircle/ui';
import { 
  User, 
  Store, 
  CreditCard, 
  Bell, 
  Shield, 
  Globe,
  Smartphone,
  Mail,
  Save
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'store', label: 'Store Settings', icon: Store },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'integrations', label: 'Integrations', icon: Globe },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'store':
        return <StoreSettings />;
      case 'payments':
        return <PaymentSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'integrations':
        return <IntegrationSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account and store preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64">
          <Card className="p-4">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className="mr-3 h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Content */}
        <div className="flex-1">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

function ProfileSettings() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <Input defaultValue="John" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <Input defaultValue="Doe" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <Input type="email" defaultValue="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <Input type="tel" defaultValue="+1 (555) 123-4567" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Zone
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC-6 (Central Time)</option>
              <option>UTC-7 (Mountain Time)</option>
              <option>UTC-8 (Pacific Time)</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </Card>
    </div>
  );
}

function StoreSettings() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Store Information</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Store Name
            </label>
            <Input defaultValue="My Awesome Store" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Store Description
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              defaultValue="We sell amazing products that make your life better."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
                <option>GBP - British Pound</option>
                <option>CAD - Canadian Dollar</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax Rate (%)
              </label>
              <Input type="number" defaultValue="8.5" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Enable Shipping</p>
              <p className="text-sm text-gray-600">Allow customers to have orders shipped</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Enable Pickup</p>
              <p className="text-sm text-gray-600">Allow customers to pick up orders in-store</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </Card>
    </div>
  );
}

function PaymentSettings() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Stripe</p>
                <p className="text-sm text-gray-600">Accept credit and debit cards</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">PayPal</p>
                <p className="text-sm text-gray-600">Accept PayPal payments</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </Card>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
        <div className="space-y-4">
          {[
            { title: 'New Orders', description: 'Get notified when you receive new orders' },
            { title: 'Low Stock Alerts', description: 'Get notified when products are running low' },
            { title: 'Customer Messages', description: 'Get notified when customers send messages' },
            { title: 'Weekly Reports', description: 'Receive weekly performance reports' },
          ].map((notification, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{notification.title}</p>
                <p className="text-sm text-gray-600">{notification.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">SMS Notifications</h3>
        <div className="space-y-4">
          {[
            { title: 'Order Updates', description: 'Get SMS updates for order status changes' },
            { title: 'Critical Alerts', description: 'Get SMS for critical system alerts' },
          ].map((notification, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{notification.title}</p>
                <p className="text-sm text-gray-600">{notification.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <Input type="password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <Input type="password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <Input type="password" />
          </div>
        </div>
        <div className="mt-6">
          <Button>Update Password</Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Enable 2FA</p>
            <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
          </div>
          <Button variant="outline">Enable 2FA</Button>
        </div>
      </Card>
    </div>
  );
}

function IntegrationSettings() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">WhatsApp Business</h3>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <Smartphone className="h-8 w-8 text-green-600" />
            <div>
              <p className="font-medium text-gray-900">WhatsApp Integration</p>
              <p className="text-sm text-gray-600">Send order updates via WhatsApp</p>
            </div>
          </div>
          <Button variant="outline">Configure</Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Marketing</h3>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <Mail className="h-8 w-8 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">SendGrid</p>
              <p className="text-sm text-gray-600">Send transactional emails</p>
            </div>
          </div>
          <Button variant="outline">Configure</Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <Globe className="h-8 w-8 text-orange-600" />
              <div>
                <p className="font-medium text-gray-900">Google Analytics</p>
                <p className="text-sm text-gray-600">Track website performance</p>
              </div>
            </div>
            <Button variant="outline">Connect</Button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <Globe className="h-8 w-8 text-purple-600" />
              <div>
                <p className="font-medium text-gray-900">Mixpanel</p>
                <p className="text-sm text-gray-600">Advanced user analytics</p>
              </div>
            </div>
            <Button variant="outline">Connect</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}