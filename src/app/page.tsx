'use client';

import { useCart } from './contexts/CartContext';

export default function HomePage() {
  const { totalItems } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* SUPPRIME TOUTE LA SECTION HEADER/NAVBAR ICI */}
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bienvenue sur
            <span className="text-blue-600 block">L&apos;ACTU DE MOUSSA SHOP</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            La marketplace 100% africaine. Vendez et achetez en toute confiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products"
              className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition"
            >
              🚀 Voir les produits
            </a>
            <a 
              href="/vendre"
              className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full text-lg font-semibold hover:bg-blue-50 transition"
            >
              💰 Vendre mes produits
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600">Produits</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-green-600">9</div>
            <div className="text-gray-600">Catégories</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-purple-600">24h</div>
            <div className="text-gray-600">Livraison</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-yellow-600">100%</div>
            <div className="text-gray-600">Sécurisé</div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold mb-3">Livraison Rapide</h3>
            <p className="text-gray-600">24-48h dans toute la France</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-3">Paiement Sécurisé</h3>
            <p className="text-gray-600">100% protégé</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold mb-3">Avis Vérifiés</h3>
            <p className="text-gray-600">Par des acheteurs réels</p>
          </div>
        </div>

        {/* Produits populaires */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">🔥 Produits populaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Produit 1 */}
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>
              <h3 className="font-bold text-lg mb-2">iPhone 15 Pro</h3>
              <p className="text-gray-500 text-sm mb-3">Dernier modèle</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">1099€</span>
                <a 
                  href="/products"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                >
                  Voir
                </a>
              </div>
            </div>

            {/* Produit 2 */}
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-red-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">👟</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Baskets Sport</h3>
              <p className="text-gray-500 text-sm mb-3">Édition limitée</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">149€</span>
                <a 
                  href="/products"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                >
                  Voir
                </a>
              </div>
            </div>

            {/* Produit 3 */}
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-teal-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🎧</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Casque Audio</h3>
              <p className="text-gray-500 text-sm mb-3">Noise cancelling</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">199€</span>
                <a 
                  href="/products"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                >
                  Voir
                </a>
              </div>
            </div>

            {/* Produit 4 */}
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">⌚</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Montre Connectée</h3>
              <p className="text-gray-500 text-sm mb-3">Fitness tracker</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">249€</span>
                <a 
                  href="/products"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                >
                  Voir
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Vendeurs */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Devenez vendeur dès aujourd'hui !</h2>
          <p className="text-lg mb-6 opacity-90">
            Commission réduite · Paiement rapide · Support 24/7
          </p>
          <a 
            href="/vendre"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100"
          >
            Commencer à vendre
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">L&apos;ACTU DE MOUSSA SHOP</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              La marketplace leader pour la communauté africaine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-4">Acheter</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/products" className="hover:text-white">Produits</a></li>
                <li><a href="/categories" className="hover:text-white">Catégories</a></li>
                <li><a href="/promotions" className="hover:text-white">Promotions</a></li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="font-bold text-lg mb-4">Vendre</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/vendre" className="hover:text-white">Devenir vendeur</a></li>
                <li><a href="/tarifs" className="hover:text-white">Tarifs</a></li>
                <li><a href="/aide-vendeurs" className="hover:text-white">Aide vendeurs</a></li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="font-bold text-lg mb-4">Assistance</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                <li><a href="/cgv" className="hover:text-white">CGV</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 L&apos;ACTU DE MOUSSA SHOP. Tous droits réservés.</p>
            <p className="mt-2">Marketplace 100% africaine</p>
          </div>
        </div>
      </footer>
    </div>
  );
}