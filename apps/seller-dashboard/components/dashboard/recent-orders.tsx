import React from 'react';
import { Card } from '@neucircle/ui';
import { formatCurrency, formatDate } from '@neucircle/utils';

interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: string;
}

const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-001',
    customer: 'John Smith',
    total: 299.99,
    status: 'confirmed',
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    orderNumber: 'ORD-002',
    customer: 'Sarah Johnson',
    total: 149.50,
    status: 'shipped',
    createdAt: '2024-01-15T09:15:00Z',
  },
  {
    id: '3',
    orderNumber: 'ORD-003',
    customer: 'Mike Wilson',
    total: 89.99,
    status: 'pending',
    createdAt: '2024-01-15T08:45:00Z',
  },
];

export function RecentOrders() {
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <div>
                  <p className="font-medium text-gray-900">{order.orderNumber}</p>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium text-gray-900">{formatCurrency(order.total)}</p>
                <p className="text-sm text-gray-600">{formatDate(order.createdAt, 'MMM dd, yyyy')}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}