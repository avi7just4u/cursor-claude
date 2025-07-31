import React from 'react';
import { StatsCard } from '../../components/dashboard/stats-card';
import { RecentOrders } from '../../components/dashboard/recent-orders';
import { Card } from '@neucircle/ui';
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,426',
      change: '+12.5% from last month',
      changeType: 'positive' as const,
      icon: DollarSign,
    },
    {
      title: 'Orders',
      value: '156',
      change: '+8.2% from last month',
      changeType: 'positive' as const,
      icon: ShoppingCart,
    },
    {
      title: 'Customers',
      value: '89',
      change: '+3.1% from last month',
      changeType: 'positive' as const,
      icon: Users,
    },
    {
      title: 'Products',
      value: '24',
      change: 'No change',
      changeType: 'neutral' as const,
      icon: Package,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your store.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Sales chart will be displayed here</p>
            </div>
          </div>
        </Card>

        <RecentOrders />
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
          <div className="space-y-3">
            {[
              { name: 'Wireless Headphones', sales: 45, revenue: '$2,250' },
              { name: 'Smart Watch', sales: 32, revenue: '$1,920' },
              { name: 'Phone Case', sales: 28, revenue: '$560' },
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.sales} sales</p>
                </div>
                <p className="font-medium text-gray-900">{product.revenue}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'New customer registered', time: '2 minutes ago' },
              { action: 'Order #ORD-001 placed', time: '15 minutes ago' },
              { action: 'Product review received', time: '1 hour ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <p className="font-medium text-blue-900">Add New Product</p>
              <p className="text-sm text-blue-700">Expand your catalog</p>
            </button>
            <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <p className="font-medium text-green-900">Process Orders</p>
              <p className="text-sm text-green-700">3 orders pending</p>
            </button>
            <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <p className="font-medium text-purple-900">View Analytics</p>
              <p className="text-sm text-purple-700">Check performance</p>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}