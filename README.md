# Golf Club E-commerce Store

A modern, responsive e-commerce website for golf clubs built with React, TypeScript, and Tailwind CSS.

## Features

- 🏌️ **Product Catalog** - Browse golf clubs by category (Drivers, Irons, Wedges, Putters, etc.)
- 🔍 **Advanced Filtering** - Filter by brand, price range, and availability
- 🛒 **Shopping Cart** - Add items, manage quantities, and view order summary
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⭐ **Product Ratings** - Customer reviews and ratings for each product
- 🎨 **Modern UI** - Beautiful, clean design with smooth animations
- 🚀 **Fast Performance** - Optimized for speed and user experience

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context API
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
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
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── ProductCard.tsx # Individual product display
│   ├── ProductGrid.tsx # Product grid layout
│   └── Hero.tsx        # Homepage hero section
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── Products.tsx    # Product listing page
│   ├── ProductDetail.tsx # Individual product page
│   └── Cart.tsx        # Shopping cart page
├── context/            # React context providers
│   └── CartContext.tsx # Shopping cart state management
├── data/               # Static data
│   └── products.ts     # Product information
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## Features in Detail

### Product Catalog
- Browse all golf clubs with detailed information
- Filter by category, brand, price, and availability
- Sort by name, price, rating, or brand
- Search functionality across product names and descriptions

### Shopping Cart
- Add products to cart from any page
- Manage quantities and remove items
- Real-time total calculation
- Persistent cart state across page navigation

### Product Details
- High-quality product images with gallery view
- Detailed specifications and features
- Customer ratings and reviews
- Related product suggestions

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Fast loading times

## Customization

### Adding New Products

To add new products, edit the `src/data/products.ts` file:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  brand: 'Brand Name',
  category: 'Category',
  price: 299.99,
  description: 'Product description...',
  features: ['Feature 1', 'Feature 2'],
  specifications: {
    'Spec 1': 'Value 1',
    'Spec 2': 'Value 2'
  },
  images: ['image-url-1', 'image-url-2'],
  inStock: true,
  rating: 4.5,
  reviewCount: 123,
  tags: ['tag1', 'tag2']
}
```

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the `tailwind.config.js` file for theme customization
2. Updating the `src/index.css` file for global styles
3. Adding custom CSS classes as needed

### Adding New Pages

1. Create a new component in the `src/pages/` directory
2. Add a route in `src/App.tsx`
3. Update navigation links in `src/components/Header.tsx`

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email info@golfclubstore.com or create an issue in the repository.

---

Built with ❤️ for golf enthusiasts everywhere! 