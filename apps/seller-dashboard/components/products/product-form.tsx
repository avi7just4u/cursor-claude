'use client';

import React, { useState } from 'react';
import { Button, Input, Card } from '@neucircle/ui';
import { Upload, X } from 'lucide-react';

interface ProductFormData {
  name: string;
  description: string;
  price: string;
  comparePrice: string;
  sku: string;
  inventory: string;
  category: string;
  images: string[];
}

interface ProductFormProps {
  initialData?: Partial<ProductFormData>;
  onSubmit: (data: ProductFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export function ProductForm({ initialData, onSubmit, onCancel, isLoading }: ProductFormProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    name: initialData?.name || '',
    description: initialData?.description || '',
    price: initialData?.price || '',
    comparePrice: initialData?.comparePrice || '',
    sku: initialData?.sku || '',
    inventory: initialData?.inventory || '',
    category: initialData?.category || '',
    images: initialData?.images || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, you would upload these files to a storage service
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name *
            </label>
            <Input
              value={formData.name}
              onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Enter product description"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price *
            </label>
            <Input
              type="number"
              value={formData.price}
              onChange={(value) => setFormData(prev => ({ ...prev, price: value }))}
              placeholder="0.00"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Compare at Price
            </label>
            <Input
              type="number"
              value={formData.comparePrice}
              onChange={(value) => setFormData(prev => ({ ...prev, comparePrice: value }))}
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SKU
            </label>
            <Input
              value={formData.sku}
              onChange={(value) => setFormData(prev => ({ ...prev, sku: value }))}
              placeholder="Enter SKU"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Inventory *
            </label>
            <Input
              type="number"
              value={formData.inventory}
              onChange={(value) => setFormData(prev => ({ ...prev, inventory: value }))}
              placeholder="0"
              required
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Images</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-2 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input
                type="file"
                className="hidden"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {formData.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {formData.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save Product'}
        </Button>
      </div>
    </form>
  );
}