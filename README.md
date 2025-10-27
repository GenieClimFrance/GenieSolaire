# GenieSolaire

A modern, responsive web application built with Next.js, showcasing renewable energy solutions with an emphasis on solar energy products and services.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with Shadcn/ui
- **Animations:** Framer Motion & custom animations
- **Icons:** React Icons, Lucide Icons
- **Carousel:** Swiper.js
- **Email:** Resend API for contact forms
- **Fonts:** Custom fonts (EmOne, Kollektif)

## 📋 Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd GenieSolaire
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your environment variables:

```bash
# Add your environment variables here
# Example: RESEND_API_KEY=your_api_key_here
```

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📁 Project Structure

```
GenieSolaire/
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── components/    # Page-specific components
│   │   ├── data/          # Static data and configuration
│   │   ├── Utils/         # Utility functions
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable UI components
│   └── lib/              # Library utilities
├── public/               # Static assets (images, icons)
└── ...config files
```

## 🎨 Features

- **Responsive Design:** Fully responsive across all devices
- **Modern UI/UX:** Clean, intuitive interface with smooth animations
- **Performance Optimized:** Built with Next.js for optimal performance
- **SEO Friendly:** Server-side rendering and metadata optimization
- **Contact Forms:** Integrated email functionality
- **Cookie Consent:** Axeptio integration for GDPR compliance
- **Custom Animations:** BlurFade, FlipText, NumberTicker, and more
- **Interactive Carousel:** Product showcases with Swiper

## 🌐 Available Pages

- `/` - Home page
- `/mentions-legales` - Legal notices

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

## 🐳 Docker Support

Build and run with Docker:

```bash
# Build the image
docker build -t geniesolaire .

# Run the container
docker run -p 3000:3000 geniesolaire
```

Or use Docker Compose:

```bash
docker-compose up
```

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!

### Other Platforms

This Next.js application can also be deployed to:

- AWS
- Google Cloud Platform
- Azure
- Netlify
- Railway
- And more...

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed instructions.

## 📦 Build Output

The production build is optimized for:

- Fast page loads
- Minimal bundle size
- SEO optimization
- Image optimization
- Font optimization

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is proprietary and confidential.

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs) - Typed JavaScript
- [Framer Motion](https://www.framer.com/motion) - Animation library
