# Bright Smile Dental - Modern Dental Clinic Website

A premium, mobile-first dental clinic website built with Next.js 14 (App Router) and Tailwind CSS.

## 🦷 Features

- **Modern Design**: Clean, medical, premium aesthetic with navy blue primary color
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Animations**: Smooth animations and micro-interactions for enhanced UX
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessible**: Built with accessibility best practices

## 📁 Project Structure

```
dental-clinic/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind imports
│   │   ├── layout.tsx           # Root layout with Navbar and Footer
│   │   ├── page.tsx             # Home page
│   │   ├── services/
│   │   │   └── page.tsx         # Services page
│   │   ├── doctors/
│   │   │   └── page.tsx         # Doctors/Team page
│   │   ├── gallery/
│   │   │   └── page.tsx         # Gallery page with lightbox
│   │   └── contact/
│   │       └── page.tsx         # Contact page with form
│   │
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx       # Navigation with mobile menu
│       │   └── Footer.tsx       # Footer with clinic info
│       │
│       └── ui/
│           ├── Button.tsx       # Reusable button component
│           ├── Card.tsx         # Reusable card component
│           ├── Section.tsx      # Page section wrapper
│           └── SectionHeader.tsx # Section title component
│
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Project dependencies
```

## 🎨 Design System

### Colors

- **Navy** (Primary): `#1e3a5f` - Main brand color
- **Teal** (Accent): `#00a5a8` - Call-to-action and highlights
- **Gold** (Accent): `#c9a86c` - Premium accents
- **Mint**: `#e8f5f3` - Light backgrounds

### Typography

- **Display Font**: Playfair Display (serif) - Headings
- **Body Font**: DM Sans (sans-serif) - Body text

### Components

- **Rounded Cards**: 1.5rem border radius
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Animations**: Fade, slide, scale animations with stagger support

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📱 Pages

### Home (`/`)
- Hero section with CTA
- Feature cards
- Services preview
- Statistics section
- Testimonials
- Call-to-action

### Services (`/services`)
- All dental services with descriptions
- Pricing information
- Insurance & payment options

### Doctors (`/doctors`)
- Team member profiles
- Education & credentials
- Awards & recognitions

### Gallery (`/gallery`)
- Filterable image gallery
- Lightbox view
- Categories: Transformations, Clinic, Team

### Contact (`/contact`)
- Contact information cards
- Appointment booking form
- Interactive map
- Emergency contact info

## 🔧 Customization

### Changing Colors
Edit the `theme.extend.colors` section in `tailwind.config.js`

### Changing Fonts
Update the Google Fonts import in `globals.css` and font family in `tailwind.config.js`

### Adding New Pages
Create a new folder in `src/app/` with a `page.tsx` file

## 📄 License

MIT License - Feel free to use this template for your projects!
