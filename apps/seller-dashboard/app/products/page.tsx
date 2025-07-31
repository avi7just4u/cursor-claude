'use client';

import React, { useState } from 'react';
import { Button, Card, Input } from '@neucircle/ui';
import { ProductForm } from '../../components/products/product-form';
import { Plus, Search, Filter, Edit, Trash2, Eye } from 'lucide-react';
import { formatCurrency } from '@neucircle/utils';

interface Product {
  id: string;
  name: string;
  price: number;
  inventory: number;
  status: 'active' | 'draft' | 'archived';
  image: string;
  sku: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 99.99,
    inventory: 45,
    status: 'active',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200',
    sku: 'WBH-001',
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    inventory: 23,
    status: 'active',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=200',
    sku: 'SFW-002',
  },
  {
    id: '3',
    name: 'Premium Phone Case',
    price: 29.99,
    inventory: 0,
    status: 'active',
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=200',
    sku: 'PPC-003',
  },
];

export default function ProductsPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleFormSubmit = (data: any) => {
    console.log('Product data:', data);
    // In a real app, you would save this to your database
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  const getStatusColor = (status: Product['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showForm) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </h1>
          <p className="text-gray-600 mt-1">
            {editingProduct ? 'Update product information' : 'Create a new product for your store'}
          </p>
        </div>

        <ProductForm
          initialData={editingProduct ? {
            name: editingProduct.name,
            price: editingProduct.price.toString(),
            inventory: editingProduct.inventory.toString(),
            sku: editingProduct.sku,
          } : undefined}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-1">Manage your product catalog</p>
        </div>
        <Button onClick={handleAddProduct}>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={setSearchTerm}
                className="pl-10"
              />
            </div>
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-gray-900 line-clamp-2">{product.name}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(product.status)}`}>
                  {product.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">SKU: {product.sku}</p>
              
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-bold text-gray-900">{formatCurrency(product.price)}</p>
                <p className={`text-sm ${product.inventory > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inventory > 0 ? `${product.inventory} in stock` : 'Out of stock'}
                </p>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleEditProduct(product)}>
                  <Edit className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="outline">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <Card className="p-12 text-center">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm ? 'Try adjusting your search terms' : 'Get started by adding your first product'}
          </p>
          {!searchTerm && (
            <Button onClick={handleAddProduct}>
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Product
            </Button>
          )}
        </Card>
      )}
    </div>
  );
}