# THE VANGUARD PROTOCOL

An ultra-modern, high-fidelity landing page for **The Vanguard Protocol**, a holistic cybersecurity consultancy. Designed for physical and cyber security convergence with an "Awwwards-style" interactive experience.

## 🛠 TECH STACK
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP 3.12 + ScrollTrigger
- **3D Graphics:** React Three Fiber + Three.js
- **Smooth Scroll:** Lenis
- **Components:** Shadcn UI (Custom Tactical Variant)

## 🎨 AESTHETICS
- **Primary:** Deep Black (#050505)
- **Accents:** Neon Lime (#B6FF3B) & Vanguard Blue (#3B7BFF)
- **Typography:** Geist Mono / JetBrains Mono (Cyber-industrial precision)

## 🚀 FEATURES
- **3D Network Topology:** Interactive particle field representing global connectivity.
- **GSAP Text Reveal:** High-precision character-scanning animations for the Hero section.
- **Global Intelligence Globe:** 3D interactive wireframe globe with live telemetry hotspots.
- **Tactical Service Grid:** Bento-style layout for core operational pillars.
- **3D Arsenal Gallery:** Kinetic wireframe models of tactical security hardware.
- **ROI Strategy Calculator:** Interactive data visualization of security impact.

## 📦 INSTALLATION

### 1. Manual Installation (Local Node.js)
**Prerequisites:** Node.js 20+ and npm.

```bash
# Clone the repository
git clone <repository-url>
cd vanguard-protocol

# Install dependencies
npm install

# Run development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 2. Docker & Docker Compose Installation
**Prerequisites:** Docker and Docker Compose installed.

```bash
# Step 1: Copy the example environment file
cp .env.example .env

# Step 2: Build and run using Docker Compose
docker compose up --build -d
```
- The application will be available at [http://localhost:3000](http://localhost:3000).
- **Healthchecks:** Docker Compose monitors the application health via a dedicated endpoint.
- **Volumes:** Persists logs to `./logs` and mounts `public/` for live asset updates.
- **Networks:** Isolated `vanguard_network` for secure container communication.

#### Manual Docker Build (Optional)
```bash
# Build the Docker image
docker build -t vanguard-protocol .

# Run the container
docker run -p 3000:3000 vanguard-protocol
```

## 🏗 PROJECT STRUCTURE
- `src/app/`: Next.js App Router pages and global styles.
- `src/components/`: Modular React components (Hero, Navbar, 3D Scenes).
- `src/components/ui/`: Reusable Shadcn UI primitives.
- `public/`: Static assets and 3D models.

## 🛠 PRODUCTION BUILD
To generate a production-ready standalone build:
```bash
npm run build
```
The build artifacts will be located in the `.next/standalone` directory for optimized container deployment.

---
© 2025 THE VANGUARD PROTOCOL. ALL RIGHTS RESERVED.
SEC_LEVEL: ALPHA_CLEARANCE
