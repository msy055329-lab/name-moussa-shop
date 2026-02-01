'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useAuth();
  const { totalItems, totalPrice } = useCart();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">🛍️</span>
            </div>
            <h1 className="text-xl font-bold text-blue-600 hidden sm:block">
              L'ACTU DE MOUSSA SHOP
            </h1>
          </Link>

          {/* Menu Navigation */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-blue-600">
              Accueil
            </Link>
            <Link href="/products" className="font-medium hover:text-blue-600">
              Produits
            </Link>
            <Link href="/vendre" className="font-medium hover:text-blue-600">
              Vendre
            </Link>
            {user && (
              <Link href="/dashboard" className="font-medium hover:text-blue-600">
                Tableau de bord
              </Link>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Panier */}
            <Link href="/cart" className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <span className="text-2xl">🛒</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              {totalItems > 0 && (
                <div className="absolute right-0 mt-2 hidden group-hover:block">
                  <div className="bg-white shadow-lg rounded-lg p-3 min-w-48">
                    <p className="font-semibold">{totalItems} article(s)</p>
                    <p className="text-green-600 font-bold">{totalPrice.toFixed(2)}€</p>
                  </div>
                </div>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="hidden md:block">{user.name}</span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    <div className="px-4 py-2 border-b">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      📊 Tableau de bord
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      📦 Mes commandes
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setShowUserMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      🚪 Déconnexion
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
                >
                  Connexion
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Inscription
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden flex justify-center gap-4 py-3 border-t">
          <Link href="/" className="text-center">
            <div className="text-2xl">🏠</div>
            <div className="text-xs">Accueil</div>
          </Link>
          <Link href="/products" className="text-center">
            <div className="text-2xl">📦</div>
            <div className="text-xs">Produits</div>
          </Link>
          <Link href="/cart" className="text-center relative">
            <div className="text-2xl">🛒</div>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
            <div className="text-xs">Panier</div>
          </Link>
          <Link href={user ? "/dashboard" : "/login"} className="text-center">
            <div className="text-2xl">{user ? "👤" : "🔑"}</div>
            <div className="text-xs">{user ? "Compte" : "Connexion"}</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}