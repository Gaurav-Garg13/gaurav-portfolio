# Gaurav's Developer Portfolio

A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS.

**🚀 Live Demo:** [https://gaurav-portfolio-link.com](https://gaurav-portfolio-eta-six.vercel.app/)

## 📸 Preview

*(Add a beautiful screenshot or GIF of your portfolio here!)*
<!-- ![Portfolio Preview](./path-to-screenshot.png) -->

## Features

- Modern React architecture using React 19
- Fast and optimized build process powered by Vite
- Responsive styling with Tailwind CSS v4
- Smooth animations and page transitions using Framer Motion
- Smooth scrolling implementation with Lenis
- Beautiful, consistent iconography with Lucide React
- Accessible command menu integration

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18.0.0 or higher recommended)
- npm, yarn, or pnpm

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Build for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist` directory containing the production-ready static files.

## Local Preview

To preview the production build locally before deployment:

```bash
npm run preview
```

## Linting

To run the linter and ensure code quality (powered by Oxlint):

```bash
npm run lint
```

## Deployment

This project generates static files that can be hosted on any static hosting provider. Common deployment platforms include:

- **Vercel**: Connect your GitHub repository and Vercel will automatically configure the build settings.
- **Netlify**: Link your repository, set the build command to `npm run build`, and the publish directory to `dist`.
- **GitHub Pages**: You can use a GitHub Action to build and deploy the `dist` folder to your `gh-pages` branch.
- **Cloudflare Pages**: Connect your repository and specify `npm run build` as the build command and `dist` as the output directory.

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.darkroom.engineering/)
- [Lucide React](https://lucide.dev/)

## 📬 Contact & Links

- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub:** [Your GitHub Profile](https://github.com/yourusername)
- **Email:** your.email@example.com
