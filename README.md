# Golf Club Store - Next.js E-commerce

A modern, responsive e-commerce website for golf equipment built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Product Catalog**: Browse golf clubs by category, brand, and price
- **Advanced Filtering**: Filter products by category, brand, price range, and availability
- **Product Details**: Detailed product pages with images, specifications, and reviews
- **Shopping Cart**: Full cart functionality with quantity management
- **SEO Optimized**: Built-in SEO features with Next.js
- **Performance**: Fast loading with Next.js optimizations

## Pages

- **Home**: Landing page with hero section, categories, and featured products
- **Products**: Product listing with advanced filtering and sorting
- **Product Detail**: Individual product pages with detailed information
- **Cart**: Shopping cart with order summary
- **About**: Company information and team details
- **Contact**: Contact form and business information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd golf-club-store
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── products/          # Products pages
│   ├── product/[id]/      # Product detail pages
│   ├── cart/              # Cart page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   └── ProductGrid.tsx
├── context/               # React Context
│   └── CartContext.tsx
├── data/                  # Static data
│   └── products.ts
└── types/                 # TypeScript types
    └── index.ts
```

## Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **React Context**: State management for cart

## Features in Detail

### Product Management
- Product catalog with categories (Drivers, Irons, Wedges, etc.)
- Advanced filtering by category, brand, price, and availability
- Sorting by name, price, rating, and brand
- Product details with images, specifications, and features

### Shopping Cart
- Add/remove items
- Quantity management
- Cart persistence
- Order summary with tax calculation

### User Experience
- Responsive design for all devices
- Smooth animations and transitions
- Intuitive navigation
- Fast loading times

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Customization

### Adding Products
Edit `src/data/products.ts` to add new products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  brand: 'Brand Name',
  category: 'Category',
  price: 299.99,
  description: 'Product description...',
  // ... other properties
}
```

### Styling
The project uses Tailwind CSS. Customize colors and styles in `tailwind.config.js`.

### Components
All components are modular and reusable. Modify them in the `src/components/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@golfclubstore.com or create an issue in the repository. 