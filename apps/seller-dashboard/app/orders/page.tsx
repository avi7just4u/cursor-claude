'use client';

import React, { useState } from 'react';
import { Button, Card, Input } from '@neucircle/ui';
import { Search, Filter, Eye, Package, Truck, CheckCircle } from 'lucide-react';
import { formatCurrency, formatDate } from '@neucircle/utils';

interface Order {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
  };
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: number;
  createdAt: string;
  shippingAddress: string;
}

const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-001',
    customer: {
      name: 'John Smith',
      email: 'john@example.com',
    },
    total: 299.99,
    status: 'confirmed',
    items: 2,
    createdAt: '2024-01-15T10:30:00Z',
    shippingAddress: '123 Main St, New York, NY 10001',
  },
  {
    id: '2',
    orderNumber: 'ORD-002',
    customer: {
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
    },
    total: 149.50,
    status: 'shipped',
    items: 1,
    createdAt: '2024-01-15T09:15:00Z',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90210',
  },
  {
    id: '3',
    orderNumber: 'ORD-003',
    customer: {
      name: 'Mike Wilson',
      email: 'mike@example.com',
    },
    total: 89.99,
    status: 'pending',
    items: 1,
    createdAt: '2024-01-15T08:45:00Z',
    shippingAddress: '789 Pine St, Chicago, IL 60601',
  },
  {
    id: '4',
    orderNumber: 'ORD-004',
    customer: {
      name: 'Emily Davis',
      email: 'emily@example.com',
    },
    total: 199.99,
    status: 'delivered',
    items: 3,
    createdAt: '2024-01-14T16:20:00Z',
    shippingAddress: '321 Elm St, Miami, FL 33101',
  },
];

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-purple-100 text-purple-800';
      case 'shipped':
        return 'bg-indigo-100 text-indigo-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Package className="h-4 w-4" />;
      case 'confirmed':
        return <CheckCircle className="h-4 w-4" />;
      case 'processing':
        return <Package className="h-4 w-4" />;
      case 'shipped':
        return <Truck className="h-4 w-4" />;
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = 
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const statusCounts = mockOrders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-600 mt-1">Manage and track your customer orders</p>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {[
          { key: 'all', label: 'All Orders', count: mockOrders.length, color: 'bg-gray-100 text-gray-800' },
          { key: 'pending', label: 'Pending', count: statusCounts.pending || 0, color: 'bg-yellow-100 text-yellow-800' },
          { key: 'confirmed', label: 'Confirmed', count: statusCounts.confirmed || 0, color: 'bg-blue-100 text-blue-800' },
          { key: 'processing', label: 'Processing', count: statusCounts.processing || 0, color: 'bg-purple-100 text-purple-800' },
          { key: 'shipped', label: 'Shipped', count: statusCounts.shipped || 0, color: 'bg-indigo-100 text-indigo-800' },
          { key: 'delivered', label: 'Delivered', count: statusCounts.delivered || 0, color: 'bg-green-100 text-green-800' },
        ].map((status) => (
          <button
            key={status.key}
            onClick={() => setStatusFilter(status.key)}
            className={`p-3 rounded-lg text-center transition-colors ${
              statusFilter === status.key ? status.color : 'bg-white border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <p className="text-2xl font-bold">{status.count}</p>
            <p className="text-sm font-medium">{status.label}</p>
          </button>
        ))}
      </div>

      {/* Filters and Search */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search orders, customers..."
                value={searchTerm}
                onChange={setSearchTerm}
                className="pl-10"
              />
            </div>
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>
      </Card>

      {/* Orders List */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="font-medium text-gray-900">{order.orderNumber}</p>
                      <p className="text-sm text-gray-600">{order.items} item{order.items !== 1 ? 's' : ''}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="font-medium text-gray-900">{order.customer.name}</p>
                      <p className="text-sm text-gray-600">{order.customer.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="font-medium text-gray-900">{formatCurrency(order.total)}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm text-gray-900">{formatDate(order.createdAt, 'MMM dd, yyyy')}</p>
                    <p className="text-xs text-gray-600">{formatDate(order.createdAt, 'HH:mm')}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="p-12 text-center">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600">
              {searchTerm ? 'Try adjusting your search terms' : 'Orders will appear here when customers make purchases'}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}