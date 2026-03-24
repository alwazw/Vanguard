# The Vanguard Protocol

## Objective
The Vanguard Protocol is an ultra-modern, high-fidelity landing page for a holistic cybersecurity consultancy. The project aims to create an "Awwwards-style" experience that effectively showcases the convergence of physical and cyber security through immersive 3D interactions and sophisticated motion design.

## The Architecture: Why & How

### 1. Next.js 16 (App Router)
- **Why:** To leverage the latest performance optimizations and enhanced data fetching. Next.js provides a robust foundation for building high-performance, SEO-friendly web applications.
- **How:** Utilizing the App Router for simplified routing and layout management, with 'use client' directives strategically applied only where interactivity (GSAP, R3F) is required.

### 2. Tailwind CSS v4
- **Why:** For rapid iteration and a utility-first styling approach that results in minimal production builds. Tailwind v4's new engine offers faster compilation and improved CSS-in-JS capabilities via `@theme` variables.
- **How:** Defining a custom color palette in `src/app/globals.css` using Neon Lime (#B6FF3B), Deep Black, and Vanguard Blue for a high-contrast, "cyber-industrial" aesthetic.

### 3. GSAP 3.12 (ScrollTrigger) & Lenis
- **Why:** GSAP is the industry standard for complex, high-performance animations. Lenis provides smooth, momentum-based scrolling, which is essential for creating a premium feel.
- **How:** Implementing a `SmoothScroll` component with Lenis and using the `useGSAP` hook for cleanup-safe animations throughout the application.

### 4. React Three Fiber (R3F) & @react-three/drei
- **Why:** To bring physical and network topologies to life in a way that static imagery cannot. R3F allows for complex 3D scenes to be managed using familiar React component patterns.
- **How:** Creating immersive 3D backgrounds (`NetworkTopology`) and interactive hardware galleries (`ArsenalGallery`) using custom 3D geometries and shaders.

## Key Modules

### Vanguard Academy
An interactive, 4-tier training curriculum designed for operational teams and C-suite executives. Each tier focuses on specific security domains, from foundational hygiene to advanced full-spectrum operations.

### ROI Calculator & Metrics
A dynamic dashboard visualizing the economic impact of security breaches and the potential savings achieved through the Vanguard Protocol. Featuring real-time GSAP counting animations and interactive impact metrics.

## Deployment Instructions

### Prerequisites
- Node.js 18.17 or later
- npm (or your preferred package manager)

### Local Development
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
1. Create an optimized production build:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

### Deployment to Vercel (Recommended)
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Connect your repository to [Vercel](https://vercel.com/).
3. Vercel will automatically detect the Next.js project and configure the build settings.
4. Click "Deploy".

## Future Roadmap
- [x] Phase 1: Foundation (Next.js, Tailwind v4, Lenis, GSAP setup).
- [x] Phase 2: Hero & Visual Narrative (3D topology, custom cursor).
- [x] Phase 3: Core Service Showcases (Bento Grid, Horizontal Arsenal Gallery).
- [x] Phase 4: Academy & Conversion (Tiered Academy list, ROI Calculator).
- [ ] Final Mobile Optimization and performance audit (Lighthouse 95+).
