/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Fondamentale per GitHub Pages
  images: {
    unoptimized: true, // Necessario per l'esportazione statica
  },
};

export default nextConfig;