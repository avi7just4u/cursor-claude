#!/bin/bash

echo "🚀 Setting up NeuCircle Monorepo..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Generate Prisma client
echo "🗄️ Generating Prisma client..."
cd packages/database
npx prisma generate
cd ../..

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp env.example .env
    echo "⚠️  Please update .env file with your configuration"
fi

# Make Husky hooks executable
echo "🔧 Setting up Git hooks..."
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg

# Create basic app structure
echo "📁 Creating basic app structure..."

# Create basic Next.js app structure for seller dashboard
mkdir -p apps/seller-dashboard/app/dashboard
mkdir -p apps/seller-dashboard/app/products
mkdir -p apps/seller-dashboard/app/orders
mkdir -p apps/seller-dashboard/app/customers
mkdir -p apps/seller-dashboard/app/settings

# Create basic marketplace app structure
mkdir -p apps/marketplace/app
mkdir -p apps/marketplace/components
mkdir -p apps/marketplace/lib

# Create basic storefront engine app structure
mkdir -p apps/storefront-engine/app
mkdir -p apps/storefront-engine/components
mkdir -p apps/storefront-engine/lib

# Create basic admin panel app structure
mkdir -p apps/admin-panel/app
mkdir -p apps/admin-panel/components
mkdir -p apps/admin-panel/lib

echo "✅ Basic app structure created"

# Build packages
echo "🔨 Building packages..."
npm run build

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env file with your configuration"
echo "2. Start development services: npm run docker:dev"
echo "3. Run database migrations: npm run db:migrate"
echo "4. Start development servers: npm run dev"
echo ""
echo "Available commands:"
echo "- npm run dev: Start all applications"
echo "- npm run build: Build all packages and apps"
echo "- npm run lint: Run linting"
echo "- npm run test: Run tests"
echo "- npm run docker:dev: Start development services"
echo ""
echo "Happy coding! 🚀" 