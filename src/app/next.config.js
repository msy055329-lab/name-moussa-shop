/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration de base pour Next.js
  reactStrictMode: true,
  
  // Pour Vercel, on peut laisser les configurations par défaut
  // Pas besoin de configurations spéciales pour ton projet
  
  // Si tu veux activer les images externes plus tard :
  images: {
    domains: [], // Tu ajouteras les domaines ici si besoin
    unoptimized: false, // Laisser à false pour l'optimisation automatique
  },
  
  // Pour éviter les problèmes CORS en développement
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig