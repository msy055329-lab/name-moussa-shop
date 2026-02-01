'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } = useCart();
  const { user } = useAuth();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    if (!user) {
      alert('Veuillez vous connecter pour passer commande');
      return;
    }
    setIsCheckingOut(true);
    
    // Simulation de paiement
    setTimeout(() => {
      alert(`Commande confirmée !\nTotal: ${totalPrice.toFixed(2)}€\nMerci ${user.name} !`);
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Votre panier est vide
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Ajoutez des produits à votre panier pour les voir apparaître ici
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700"
            >
              🛍️ Parcourir les produits
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Votre panier
        </h1>
        <p className="text-gray-600 mb-8">
          {totalItems} article{totalItems > 1 ? 's' : ''} • Total: {totalPrice.toFixed(2)}€
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Liste des produits */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow p-6">
              {/* En-tête */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b mb-4">
                <div className="col-span-6 font-semibold text-gray-700">Produit</div>
                <div className="col-span-2 font-semibold text-gray-700 text-center">Prix</div>
                <div className="col-span-2 font-semibold text-gray-700 text-center">Quantité</div>
                <div className="col-span-2 font-semibold text-gray-700 text-center">Total</div>
              </div>

              {/* Produits */}
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.id} className="flex flex-col md:grid md:grid-cols-12 gap-4 py-4 border-b">
                    {/* Produit */}
                    <div className="col-span-6 flex gap-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📦</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-500 text-sm">Ref: PROD{item.id}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 text-sm hover:text-red-800 mt-2"
                        >
                          ❌ Supprimer
                        </button>
                      </div>
                    </div>

                    {/* Prix unitaire */}
                    <div className="col-span-2 flex items-center justify-center">
                      <span className="font-semibold">{item.price.toFixed(2)}€</span>
                    </div>

                    {/* Quantité */}
                    <div className="col-span-2 flex items-center justify-center">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-2 flex items-center justify-center">
                      <span className="font-bold text-lg">
                        {(item.price * item.quantity).toFixed(2)}€
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-6">
                <Link
                  href="/products"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  ← Continuer mes achats
                </Link>
                <button
                  onClick={clearCart}
                  className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50"
                >
                  🗑️ Vider le panier
                </button>
              </div>
            </div>

            {/* Promotion */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow p-6 mt-6 text-white">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🎁</div>
                <div>
                  <h3 className="font-bold text-lg">Code promo disponible !</h3>
                  <p className="opacity-90">Utilisez MOUSSA10 pour -10% sur votre commande</p>
                </div>
              </div>
            </div>
          </div>

          {/* Récapitulatif */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Récapitulatif</h2>

              {/* Détails */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span>{totalPrice.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span className="text-green-600 font-semibold">Gratuite</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Réduction</span>
                  <span>0.00€</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-2xl">{totalPrice.toFixed(2)}€</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">TVA incluse</p>
                </div>
              </div>

              {/* Infos connexion */}
              {!user ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 font-semibold mb-2">Connectez-vous pour :</p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>✓ Paiement plus rapide</li>
                    <li>✓ Suivi de commande</li>
                    <li>✓ Historique d'achat</li>
                  </ul>
                  <div className="flex gap-2 mt-3">
                    <Link
                      href="/login"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700"
                    >
                      Connexion
                    </Link>
                    <Link
                      href="/register"
                      className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-center hover:bg-blue-50"
                    >
                      Inscription
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-semibold">
                    ✅ Connecté en tant que {user.name}
                  </p>
                </div>
              )}

              {/* Bouton commander */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? 'Traitement...' : `🎯 Commander • ${totalPrice.toFixed(2)}€`}
              </button>

              {/* Paiements sécurisés */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-gray-600 text-sm mb-3">Paiement sécurisé par :</p>
                <div className="flex gap-2">
                  <div className="w-10 h-6 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">💳</span>
                  </div>
                  <div className="w-10 h-6 bg-yellow-100 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">💰</span>
                  </div>
                  <div className="w-10 h-6 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">🔒</span>
                  </div>
                  <div className="w-10 h-6 bg-purple-100 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">🛡️</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Garanties */}
            <div className="bg-white rounded-xl shadow p-6 mt-6">
              <h3 className="font-bold text-gray-900 mb-4">✅ Vos garanties</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Paiement 100% sécurisé</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Livraison en 24-48h</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">30 jours pour changer d'avis</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Support client 7j/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}