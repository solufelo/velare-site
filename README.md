# Velare - Creative 3D Studio

A modern, immersive website built with Next.js, Three.js, and Framer Motion for showcasing creative 3D experiences and interactive content.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd velare-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the site.

## 🏗️ Project Structure

```
velare-site/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css        # Global styles and dark theme
│   │   ├── layout.tsx         # Root layout with dark theme
│   │   └── page.tsx           # Main page with section components
│   ├── components/
│   │   └── sections/          # Section components
│   │       ├── HeroVideo.tsx
│   │       ├── StudioScene.tsx
│   │       ├── DetailGrid.tsx
│   │       ├── MiniScene.tsx
│   │       ├── StorySection.tsx
│   │       ├── Outro.tsx
│   │       ├── ScrollWrapper.tsx
│   │       └── index.ts       # Component exports
│   └── lib/                   # Utility functions
├── public/                    # Static assets
│   ├── images/               # Image assets
│   ├── videos/               # Video files
│   ├── models/               # 3D model files
│   ├── textures/             # Texture files
│   ├── audio/                # Audio files
│   └── icons/                # Icon files
└── package.json
```

## 🎨 Section Components

The site is built with modular section components:

- **HeroVideo**: Immersive hero section with video background
- **StudioScene**: Interactive 3D studio environment
- **DetailGrid**: Portfolio showcase grid
- **MiniScene**: Compact 3D interactive elements
- **StorySection**: Narrative content with animations
- **Outro**: Call-to-action and contact section
- **ScrollWrapper**: Smooth scrolling container

## 🎯 Asset Guidelines

### Images (`/public/images/`)
- **Format**: WebP preferred, PNG for transparency
- **Optimization**: Compress before adding
- **Naming**: Use descriptive, kebab-case names
- **Structure**: Organize by section (hero/, portfolio/, ui/, textures/)

### Videos (`/public/videos/`)
- **Format**: MP4 for broad compatibility
- **Resolution**: Multiple resolutions for responsive design
- **Compression**: Optimize for web delivery
- **Structure**: Organize by section (hero/, portfolio/, demos/)

### 3D Models (`/public/models/`)
- **Format**: GLB (binary glTF) recommended
- **Optimization**: Use Draco compression
- **LOD**: Include multiple detail levels
- **Structure**: Organize by type (characters/, environments/, objects/, animations/)

### Textures (`/public/textures/`)
- **Format**: JPG for diffuse, PNG for transparency
- **Dimensions**: Power-of-2 sizes (512x512, 1024x1024, etc.)
- **Structure**: Organize by type (diffuse/, normal/, roughness/, metallic/, emissive/, environments/)

### Audio (`/public/audio/`)
- **Format**: MP3 for compatibility, WAV for quality
- **Compression**: Balance quality and file size
- **Structure**: Organize by type (music/, sfx/, voice/)

### Icons (`/public/icons/`)
- **Format**: SVG preferred for scalability
- **Style**: Consistent design system
- **Structure**: Organize by type (ui/, social/, brand/, system/)

## 🎨 Design System

### Dark Theme
The site uses a comprehensive dark theme with:
- Custom color palette using OKLCH color space
- Smooth transitions between theme states
- Enhanced typography with font features
- Custom scrollbar styling

### Typography
- **Primary Font**: Geist Sans (modern, clean)
- **Monospace**: Geist Mono (code, technical content)
- **Features**: Ligatures, contextual alternates
- **Responsive**: Fluid typography scaling

### Colors
- **Background**: Deep dark (#0a0a0a)
- **Foreground**: Light text (#fafafa)
- **Primary**: Accent color for CTAs
- **Muted**: Subtle backgrounds and borders

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Key Technologies

- **Next.js 15**: React framework with App Router
- **Three.js**: 3D graphics and WebGL
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Useful helpers for R3F
- **Framer Motion**: Animation library
- **GSAP**: Advanced animations
- **Tailwind CSS**: Utility-first styling
- **TypeScript**: Type safety

### Performance Considerations

- **Turbopack**: Fast bundling for development
- **Image Optimization**: Next.js automatic optimization
- **3D Model Optimization**: Draco compression, LOD systems
- **Lazy Loading**: Components and assets loaded on demand
- **Code Splitting**: Automatic route-based splitting

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with automatic previews

### Other Platforms
- **Netlify**: Compatible with Next.js static export
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or support, please open an issue in the repository or contact the development team.
