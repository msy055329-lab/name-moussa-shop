import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

// ✅ METADONNÉES AMÉLIORÉES POUR LE SEO
export const metadata: Metadata = {
  title: "L'ACTU DE MOUSSA SHOP - Marketplace Africaine N°1",
  description: 'Achetez et vendez en toute confiance sur la marketplace africaine leader. Produits électroniques, mode, maison, beauté et plus. Livraison rapide, paiement sécurisé.',
  keywords: ['marketplace africaine', 'e-commerce', 'acheter en ligne', 'vendre en ligne', 'produits africains', 'livraison France'],
  authors: [{ name: "Moussa Shop" }],
  openGraph: {
    title: "L'ACTU DE MOUSSA SHOP - Marketplace Africaine",
    description: 'La marketplace 100% africaine pour acheter et vendre en toute confiance',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://name-moussa-shop.vercel.app',
    siteName: "L'ACTU DE MOUSSA SHOP",
  },
  twitter: {
    card: 'summary_large_image',
    title: "L'ACTU DE MOUSSA SHOP",
    description: 'Marketplace Africaine - Achetez et vendez en toute sécurité',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* ✅ Balises importantes pour le SEO */}
        <link rel="canonical" href="https://name-moussa-shop.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* ✅ VÉRIFICATION GOOGLE */}
        <meta name="google-site-verification" content="x-B4MCYdFU7Gjnu9rNlCrF2Ytw4e-QIzvBYb5SmMMFc" />
        
        {/* ✅ ADSENSE - TRÈS IMPORTANT ! */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9070636985771391"
          crossOrigin="anonymous"
        ></script>
        
        {/* ✅ JSON-LD pour le référencement */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "L'ACTU DE MOUSSA SHOP",
              "description": "Marketplace africaine multi-vendeurs",
              "url": "https://name-moussa-shop.vercel.app"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}