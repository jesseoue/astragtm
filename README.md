# Astra GTM - SaaS Revenue Growth Platform

A modern, conversion-optimized website for B2B SaaS companies built with Next.js 15, TypeScript, and Tailwind CSS. Features interactive tools, lead capture, and comprehensive SEO optimization.

## 🚀 Features

### 🎯 Conversion Optimization
- **Interactive ROI Calculator** - Real-time revenue projections with lead capture
- **Exit Intent Popup** - News-site style popup with slow blur effect
- **Multi-step Lead Capture** - Progressive forms with validation
- **A/B Testing Ready** - Component structure for easy testing

### 🎨 Modern Design
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Theme** - Professional dark UI with electric blue accents
- **Smooth Animations** - CSS-based animations for performance
- **Typography System** - Scalable typography with proper hierarchy

### 📊 Analytics & SEO
- **Structured Data** - Complete JSON-LD markup for better SEO
- **Meta Tags** - Comprehensive Open Graph and Twitter cards
- **Performance Optimized** - Image optimization, lazy loading, and more
- **Accessibility** - WCAG 2.1 compliant with proper focus management

### 🔧 Interactive Tools
- **Revenue Calculator** - Slider-based input with real-time calculations
- **Lead Scoring** - Automatic lead qualification based on company size/MRR
- **Resource Library** - Downloadable guides, case studies, and templates
- **Company Logo Showcase** - Real logos via Clearbit API

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animation**: CSS transitions and transforms
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/astragtm.git
   cd astragtm
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME="Astra GTM"
   
   # Add your API keys and configuration
   HUBSPOT_API_KEY=your_hubspot_key
   MAILCHIMP_API_KEY=your_mailchimp_key
   # ... see .env.example for full list
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
astragtm/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── blog/                # Blog listing
│   ├── case-studies/        # Case studies
│   ├── contact/             # Contact form
│   ├── pricing/             # Pricing page
│   ├── api/                 # API routes
│   │   └── leads/           # Lead capture endpoint
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── ui/                  # Base UI components
│   │   ├── cta-button.tsx   # Call-to-action button
│   │   ├── roi-calculator.tsx # ROI calculator tool
│   │   ├── exit-intent-popup.tsx # Exit intent popup
│   │   ├── lead-capture-form.tsx # Lead forms
│   │   └── metric-stat.tsx  # Animated statistics
│   ├── sections/            # Page sections
│   │   ├── hero-section.tsx # Hero with animations
│   │   ├── client-logo-bar.tsx # Company logos
│   │   ├── resources-section.tsx # Content library
│   │   └── ...
│   └── layout/              # Layout components
│       ├── navbar.tsx       # Navigation
│       └── footer.tsx       # Footer
├── lib/                     # Utilities
│   └── utils.ts             # Helper functions
└── public/                  # Static assets
    └── images/              # Image assets
```

## 🎨 Customization

### Colors & Branding
The design system uses CSS variables in `app/globals.css`:

```css
:root {
  --dark-navy: #0B1426;
  --deep-purple: #1E0B2E;
  --electric-blue: #00D4FF;
  --star-white: #F8FAFC;
}
```

### Typography
Responsive typography is defined in `app/globals.css` with utility classes:

```css
.text-large {
  @apply text-lg md:text-xl lg:text-2xl leading-relaxed;
}
```

### Component Styling
Use the component classes for consistent styling:

```css
.btn-primary {
  @apply bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy;
}
```

## 📊 Lead Capture & Analytics

### API Endpoints
- `POST /api/leads` - Capture leads with validation
- `GET /api/leads` - Health check

### Lead Sources Tracked
- ROI Calculator submissions
- Exit intent popup
- Contact form submissions
- Resource downloads
- Newsletter signups

### Integration Ready
The lead capture system is designed to integrate with:
- **CRM**: HubSpot, Salesforce, Pipedrive
- **Email Marketing**: Mailchimp, ConvertKit, Campaign Monitor
- **Analytics**: Google Analytics, Mixpanel, Amplitude
- **Notifications**: Slack, Discord, email alerts

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Custom Server
```bash
npm run build
npm start
```

### Environment Variables for Production
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
HUBSPOT_API_KEY=your_production_key
DATABASE_URL=your_database_url
# ... see .env.example for complete list
```

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📈 Performance Optimization

### Built-in Optimizations
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Google Fonts with `font-display: swap`
- **Code Splitting**: Automatic code splitting by Next.js
- **CSS Optimization**: Tailwind CSS purging and compression
- **Bundle Analysis**: Built-in bundle analyzer

### Performance Monitoring
```bash
npm run build
npm run analyze      # Analyze bundle size
```

## 🛡️ Security Features

- **Input Validation**: Zod schemas for all forms
- **CSRF Protection**: Built-in Next.js protection
- **Rate Limiting**: API route protection (add your own)
- **Environment Variables**: Secure credential management
- **Content Security Policy**: Ready for CSP headers

## 🧪 Testing

### Test Structure (Add as needed)
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

### Recommended Testing
- Unit tests for utility functions
- Component tests for UI components
- Integration tests for API routes
- E2E tests for critical user flows

## 📞 Support & Contributing

### Issues
Report bugs and feature requests in the [GitHub Issues](https://github.com/yourusername/astragtm/issues)

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Conversion Optimization Tips

### A/B Testing Ideas
- Hero section copy variations
- CTA button colors and text
- Exit intent timing and offers
- Pricing page layouts
- Form field combinations

### Analytics to Track
- ROI calculator completion rate
- Exit intent popup conversion
- Time spent on pricing page
- Resource download rates
- Contact form abandonment

### Performance Metrics
- Core Web Vitals scores
- Page load times
- Mobile usability
- SEO ranking improvements

---

**Built with ❤️ for SaaS growth teams**