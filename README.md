# NeuCircle - B2B SaaS Commerce Platform

An enterprise-grade monorepo for NeuCircle, a B2B SaaS commerce platform designed to scale to 10M+ users.

## 🏗️ Architecture

```
neucircle/
├── apps/
│   ├── seller-dashboard/     # Main seller application
│   ├── marketplace/          # Buyer-facing marketplace
│   ├── storefront-engine/    # Dynamic storefronts
│   └── admin-panel/          # Internal admin tools
├── packages/
│   ├── ui/                   # Shared component library
│   ├── database/             # Prisma schema & client
│   ├── auth/                 # Authentication utilities
│   ├── ai/                   # AI/LLM integrations
│   ├── email/                # Email templates & sending
│   └── utils/                # Shared utilities
├── tooling/
│   ├── eslint-config/
│   ├── typescript-config/
│   └── tailwind-config/
└── docker/
    ├── development/
    └── production/
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+
- Docker & Docker Compose
- PostgreSQL 14+
- Redis 6+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd neucircle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start development services**
   ```bash
   npm run docker:dev
   ```

5. **Run database migrations**
   ```bash
   npm run db:migrate
   ```

6. **Start development servers**
   ```bash
   npm run dev
   ```

## 📦 Available Scripts

### Development
- `npm run dev` - Start all applications in development mode
- `npm run build` - Build all applications and packages
- `npm run lint` - Run ESLint across all packages
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests across all packages
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage reports

### Database
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with initial data

### Docker
- `npm run docker:dev` - Start development services
- `npm run docker:dev:down` - Stop development services
- `npm run docker:prod` - Start production services
- `npm run docker:prod:down` - Stop production services

### Utilities
- `npm run clean` - Clean all build artifacts and node_modules
- `npm run type-check` - Run TypeScript type checking

## 🏛️ Applications

### Seller Dashboard (`apps/seller-dashboard`)
The main application for sellers to manage their stores, products, orders, and analytics.

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Prisma ORM
- NextAuth.js

**Features:**
- Product management
- Order processing
- Analytics dashboard
- Customer management
- Payment integration
- WhatsApp automation

### Marketplace (`apps/marketplace`)
Buyer-facing marketplace where customers can discover and purchase products.

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Stripe payments
- Search & filtering

**Features:**
- Product catalog
- Search & filtering
- Shopping cart
- Checkout process
- User reviews
- Wishlist

### Storefront Engine (`apps/storefront-engine`)
Dynamic storefront generator for individual seller stores.

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Dynamic routing
- SEO optimization

**Features:**
- Custom storefronts
- SEO optimization
- Performance optimization
- Mobile-first design
- Analytics integration

### Admin Panel (`apps/admin-panel`)
Internal admin tools for platform management and monitoring.

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Advanced analytics

**Features:**
- User management
- Platform analytics
- System monitoring
- Content moderation
- Billing management

## 📚 Packages

### UI (`packages/ui`)
Shared component library with design system.

**Features:**
- Reusable components
- Design tokens
- Accessibility compliance
- Theme support
- Storybook documentation

### Database (`packages/database`)
Prisma schema and database utilities.

**Features:**
- Database schema
- Prisma client
- Migration utilities
- Seed scripts
- Type generation

### Auth (`packages/auth`)
Authentication and authorization utilities.

**Features:**
- JWT handling
- Role-based access control
- OAuth integration
- Session management
- Security utilities

### AI (`packages/ai`)
AI and LLM integration services.

**Features:**
- OpenAI integration
- Anthropic integration
- Prompt management
- AI-powered features
- Response caching

### Email (`packages/email`)
Email templates and sending utilities.

**Features:**
- Email templates
- SendGrid integration
- Template variables
- Email tracking
- A/B testing

### Utils (`packages/utils`)
Shared utility functions and helpers.

**Features:**
- Common utilities
- Validation helpers
- Date formatting
- String manipulation
- Type guards

## 🔧 Development Guidelines

### Code Style
- Use TypeScript with strict mode
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Use conventional commits format

### Testing
- Write unit tests for all functions
- Write integration tests for APIs
- Maintain 80%+ test coverage
- Use Jest and React Testing Library

### Git Workflow
- Feature branches from `main`
- Pull request reviews required
- Automated CI/CD pipeline
- Semantic versioning

### Security
- Input validation on all endpoints
- Rate limiting implementation
- CORS configuration
- Environment variable management
- Regular security audits

## 🚀 Deployment

### Development
```bash
npm run docker:dev
npm run dev
```

### Staging
```bash
npm run build
npm run docker:prod
```

### Production
```bash
# Set production environment variables
npm run build
npm run docker:prod
```

## 📊 Monitoring & Analytics

- **Application Monitoring**: Sentry
- **Performance Monitoring**: Vercel Analytics
- **User Analytics**: Google Analytics, Mixpanel
- **Error Tracking**: Sentry
- **Logging**: Structured logging with correlation IDs

## 🔐 Security Features

- JWT-based authentication
- Role-based access control (RBAC)
- Input validation and sanitization
- Rate limiting
- CORS protection
- Environment variable encryption
- Regular security audits

## 📈 Performance Optimization

- Next.js App Router
- Image optimization
- Code splitting
- Bundle analysis
- CDN integration
- Database query optimization
- Redis caching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Run linting and tests
6. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ by the NeuCircle Team** 