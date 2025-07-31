'use client';

import React, { useState } from 'react';
import { Card } from '@neucircle/ui';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  Calendar,
  BarChart3
} from 'lucide-react';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    {
      title: 'Revenue',
      value: '$12,426',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: DollarSign,
      description: 'vs last period',
    },
    {
      title: 'Orders',
      value: '156',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: ShoppingCart,
      description: 'vs last period',
    },
    {
      title: 'Customers',
      value: '89',
      change: '+3.1%',
      changeType: 'positive' as const,
      icon: Users,
      description: 'vs last period',
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-0.5%',
      changeType: 'negative' as const,
      icon: TrendingUp,
      description: 'vs last period',
    },
  ];

  const topProducts = [
    { name: 'Wireless Headphones', revenue: '$2,450', orders: 45, growth: '+15%' },
    { name: 'Smart Watch', revenue: '$1,920', orders: 32, growth: '+8%' },
    { name: 'Phone Case', revenue: '$560', orders: 28, growth: '+22%' },
    { name: 'Bluetooth Speaker', revenue: '$890', orders: 18, growth: '-5%' },
  ];

  const recentActivity = [
    { type: 'order', message: 'New order #ORD-156 received', time: '2 minutes ago' },
    { type: 'customer', message: 'New customer Sarah Johnson registered', time: '15 minutes ago' },
    { type: 'product', message: 'Product "Smart Watch" low in stock', time: '1 hour ago' },
    { type: 'review', message: 'New 5-star review received', time: '2 hours ago' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Track your store's performance and insights</p>
        </div>
        
        <div className="flex items-center space-x-2">
          {['7d', '30d', '90d', '1y'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                timeRange === range
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {range === '7d' ? 'Last 7 days' : 
               range === '30d' ? 'Last 30 days' :
               range === '90d' ? 'Last 90 days' : 'Last year'}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.changeType === 'positive' ? (
                      <TrendingUp className="h-3 w-3 inline mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 inline mr-1" />
                    )}
                    {metric.change}
                  </span>
                  <span className="text-sm text-gray-600 ml-2">{metric.description}</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <metric.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Revenue chart will be displayed here</p>
              <p className="text-sm text-gray-400 mt-1">Integration with charting library needed</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Order Trends</h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Order trends chart will be displayed here</p>
              <p className="text-sm text-gray-400 mt-1">Integration with charting library needed</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Top Products and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.orders} orders</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{product.revenue}</p>
                  <p className={`text-sm ${
                    product.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {product.growth}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`h-2 w-2 rounded-full mt-2 ${
                  activity.type === 'order' ? 'bg-green-500' :
                  activity.type === 'customer' ? 'bg-blue-500' :
                  activity.type === 'product' ? 'bg-yellow-500' : 'bg-purple-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Additional Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {[
              { source: 'Direct', percentage: 45, visitors: 1250 },
              { source: 'Google', percentage: 30, visitors: 830 },
              { source: 'Social Media', percentage: 15, visitors: 415 },
              { source: 'Email', percentage: 10, visitors: 275 },
            ].map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">{source.source}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{source.percentage}%</p>
                  <p className="text-xs text-gray-600">{source.visitors} visitors</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Segments</h3>
          <div className="space-y-3">
            {[
              { segment: 'New Customers', count: 23, percentage: 26 },
              { segment: 'Returning', count: 45, percentage: 51 },
              { segment: 'VIP', count: 12, percentage: 13 },
              { segment: 'At Risk', count: 9, percentage: 10 },
            ].map((segment, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{segment.segment}</span>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{segment.count}</p>
                  <p className="text-xs text-gray-600">{segment.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Goals & Targets</h3>
          <div className="space-y-4">
            {[
              { goal: 'Monthly Revenue', current: 12426, target: 15000, unit: '$' },
              { goal: 'New Customers', current: 23, target: 30, unit: '' },
              { goal: 'Conversion Rate', current: 3.2, target: 4.0, unit: '%' },
            ].map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{goal.goal}</span>
                  <span className="text-sm text-gray-600">
                    {goal.unit}{goal.current} / {goal.unit}{goal.target}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${Math.min((goal.current / goal.target) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}