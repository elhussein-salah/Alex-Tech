# Alex Tech Luxury Real Estate Showcase

A modern, responsive luxury real estate website built with cutting-edge web technologies.

## 🏠 Project Idea

Alex Tech is a premium real estate showcase platform designed to present luxury properties with elegance and sophistication. The project demonstrates modern web development practices while maintaining a focus on user experience and visual appeal.

### Key Features
- **🏘️ Property Showcase**: Interactive property cards with detailed modals
- **🌙 Dark/Light Mode**: Seamless theme switching
- **📱 Responsive Design**: Optimized for all devices and screen sizes
- **✨ Smooth Animations**: Engaging micro-interactions and transitions
- **📧 Contact System**: Integrated contact forms and information
- **⭐ Client Testimonials**: Social proof and customer reviews

## 🛠️ Technologies Used

### Core Framework
- **React 18** - Modern component-based UI library
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Lucide React** - Beautiful, customizable icons
- **CSS Custom Properties** - Maintainable color system

### Fonts & Typography
- **Cairo** - Primary font for modern Arabic/Latin typography
- **Google Fonts** - Optimized font loading and performance

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Bun** - Fast package manager alternative

## 📁 Project Structure

```
alextech-luxe-showcase/
├── public/                          # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── assets/                      # Images and media
├── src/
│   ├── components/                  # Reusable components
│   │   ├── sections/               # Page sections
│   │   │   ├── Navbar.tsx          # Navigation header
│   │   │   ├── Hero.tsx            # Hero section
│   │   │   ├── FeaturedProperties.tsx # Property showcase
│   │   │   ├── WhyUs.tsx           # Features section
│   │   │   ├── Testimonials.tsx    # Client reviews
│   │   │   ├── ContactSection.tsx  # Contact form
│   │   │   ├── Footer.tsx          # Site footer
│   │   │   └── index.ts            # Barrel exports
│   │   ├── ui/                     # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── luxury-button.tsx
│   │   │   └── ...
│   │   ├── PropertyCard.tsx        # Property display component
│   │   ├── PropertyDetailsModal.tsx # Property details popup
│   │   └── ThemeToggle.tsx         # Dark/light mode toggle
│   ├── pages/                      # Page components
│   │   ├── LandingPage.tsx         # Main landing page
│   │   ├── Index.tsx               # Home page
│   │   └── NotFound.tsx            # 404 page
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utility libraries
│   ├── assets/                     # Image assets
│   ├── index.css                   # Global styles
│   └── main.tsx                    # App entry point
├── components.json                 # shadcn/ui configuration
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
├── COMPONENTS.md                   # Component documentation
└── DARK-MODE-IMPLEMENTATION.md     # Theme system documentation
```


### Theme System
- **Light Mode**: Clean, professional appearance
- **Dark Mode**: Elegant dark theme maintaining brand consistency
- **Auto-detection**: Respects system preferences
- **Persistence**: User preference saved locally

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ or Bun
- npm, yarn, or bun package manager

### Installation
```bash
# Clone the repository

# Navigate to project directory
cd alextech-luxe

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

### Build for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1920px+
- **Ultra-wide**: 1920px+

## 🎯 Performance Features

- **Optimized Images**: WebP format with fallbacks
- **Code Splitting**: Lazy loading for improved performance
- **Font Optimization**: Preloaded Google Fonts
- **CSS Optimization**: Tailwind CSS purging
- **Tree Shaking**: Unused code elimination

## 🔧 Customization

### Adding New Properties
1. Add property data to `FeaturedProperties.tsx`
2. Include property images in `/src/assets/`
3. Update property types if needed


### Adding New Sections
1. Create component in `src/components/sections/`
2. Export from `index.ts`
3. Import and use in `LandingPage.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using modern web technologies
