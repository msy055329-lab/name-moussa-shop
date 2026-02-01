'use client';

import { useState } from 'react';
import { Search, Filter, ShoppingCart, Star, Heart, Eye } from 'lucide-react';

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('popular');

  // Catégories
  const categories = [
    'Tous',
    'Électronique',
    'Mode',
    'Maison',
    'Beauté',
    'Sport',
    'Jouets',
    'Livres',
    'Auto-Moto',
    'Santé',
  ];

  // Produits (80 produits variés)
  const allProducts = [
    // ÉLECTRONIQUE
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 1299,
      originalPrice: 1499,
      category: "Électronique",
      rating: 4.8,
      reviews: 1240,
      image: "📱",
      color: "bg-gradient-to-r from-gray-100 to-blue-100",
      tags: ["Nouveau", "Promo"],
      stock: 45,
      sold: 1250,
    },
    {
      id: 2,
      name: "MacBook Air M2 13\"",
      price: 1199,
      originalPrice: 1299,
      category: "Électronique",
      rating: 4.7,
      reviews: 890,
      image: "💻",
      color: "bg-gradient-to-r from-slate-100 to-gray-100",
      tags: ["Écologie"],
      stock: 32,
      sold: 780,
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      price: 1099,
      originalPrice: 1299,
      category: "Électronique",
      rating: 4.6,
      reviews: 1560,
      image: "📲",
      color: "bg-gradient-to-r from-purple-100 to-pink-100",
      tags: ["Camera Pro"],
      stock: 67,
      sold: 2100,
    },
    {
      id: 4,
      name: "Apple Watch Series 9",
      price: 429,
      originalPrice: 499,
      category: "Électronique",
      rating: 4.5,
      reviews: 780,
      image: "⌚",
      color: "bg-gradient-to-r from-red-50 to-orange-50",
      tags: ["Santé"],
      stock: 89,
      sold: 1250,
    },
    {
      id: 5,
      name: "Sony PlayStation 5",
      price: 499,
      originalPrice: 549,
      category: "Électronique",
      rating: 4.9,
      reviews: 3450,
      image: "🎮",
      color: "bg-gradient-to-r from-blue-50 to-white",
      tags: ["Gaming", "Populaire"],
      stock: 15,
      sold: 8900,
    },
    {
      id: 6,
      name: "AirPods Pro 2",
      price: 249,
      originalPrice: 299,
      category: "Électronique",
      rating: 4.4,
      reviews: 2300,
      image: "🎧",
      color: "bg-gradient-to-r from-white to-gray-100",
      tags: ["Audio"],
      stock: 120,
      sold: 5600,
    },
    {
      id: 7,
      name: "iPad Pro 12.9\"",
      price: 1099,
      category: "Électronique",
      rating: 4.7,
      reviews: 670,
      image: "📟",
      color: "bg-gradient-to-r from-blue-50 to-cyan-50",
      tags: ["Creativité"],
      stock: 28,
      sold: 450,
    },
    {
      id: 8,
      name: "Drone DJI Mini 3 Pro",
      price: 759,
      category: "Électronique",
      rating: 4.8,
      reviews: 890,
      image: "🚁",
      color: "bg-gradient-to-r from-gray-50 to-blue-50",
      tags: ["Camera 4K"],
      stock: 23,
      sold: 1200,
    },

    // MODE
    {
      id: 9,
      name: "Sac à Main Louis Vuitton",
      price: 2500,
      category: "Mode",
      rating: 4.9,
      reviews: 340,
      image: "👜",
      color: "bg-gradient-to-r from-amber-50 to-yellow-50",
      tags: ["Luxe"],
      stock: 8,
      sold: 120,
    },
    {
      id: 10,
      name: "Air Jordan 1 Retro",
      price: 180,
      originalPrice: 220,
      category: "Mode",
      rating: 4.7,
      reviews: 2450,
      image: "👟",
      color: "bg-gradient-to-r from-red-50 to-black",
      tags: ["Limited"],
      stock: 45,
      sold: 8900,
    },
    {
      id: 11,
      name: "Montre Rolex Submariner",
      price: 8500,
      category: "Mode",
      rating: 5.0,
      reviews: 120,
      image: "⌚",
      color: "bg-gradient-to-r from-green-50 to-black",
      tags: ["Luxe", "Investissement"],
      stock: 3,
      sold: 45,
    },
    {
      id: 12,
      name: "Costume Sur-mesure",
      price: 899,
      originalPrice: 1199,
      category: "Mode",
      rating: 4.8,
      reviews: 230,
      image: "👔",
      color: "bg-gradient-to-r from-gray-100 to-blue-100",
      tags: ["Élégance"],
      stock: 25,
      sold: 180,
    },
    {
      id: 13,
      name: "Robe de Soirée",
      price: 299,
      category: "Mode",
      rating: 4.6,
      reviews: 560,
      image: "👗",
      color: "bg-gradient-to-r from-pink-50 to-red-50",
      tags: ["Événement"],
      stock: 34,
      sold: 450,
    },

    // MAISON
    {
      id: 14,
      name: "Canapé 3 Places Cuir",
      price: 1299,
      originalPrice: 1799,
      category: "Maison",
      rating: 4.5,
      reviews: 340,
      image: "🛋️",
      color: "bg-gradient-to-r from-brown-50 to-amber-50",
      tags: ["Confort"],
      stock: 12,
      sold: 230,
    },
    {
      id: 15,
      name: "Machine à Café Delonghi",
      price: 399,
      category: "Maison",
      rating: 4.7,
      reviews: 890,
      image: "☕",
      color: "bg-gradient-to-r from-gray-50 to-black",
      tags: ["Café"],
      stock: 56,
      sold: 1200,
    },
    {
      id: 16,
      name: "Aspirateur Robot",
      price: 299,
      originalPrice: 399,
      category: "Maison",
      rating: 4.3,
      reviews: 1560,
      image: "🤖",
      color: "bg-gradient-to-r from-blue-50 to-white",
      tags: ["Intelligent"],
      stock: 78,
      sold: 3400,
    },
    {
      id: 17,
      name: "Matelas Memory Foam",
      price: 599,
      originalPrice: 799,
      category: "Maison",
      rating: 4.8,
      reviews: 670,
      image: "🛏️",
      color: "bg-gradient-to-r from-white to-blue-50",
      tags: ["Sommeil"],
      stock: 34,
      sold: 890,
    },

    // BEAUTÉ
    {
      id: 18,
      name: "Parfum Chanel N°5",
      price: 120,
      category: "Beauté",
      rating: 4.9,
      reviews: 4500,
      image: "💄",
      color: "bg-gradient-to-r from-pink-50 to-red-50",
      tags: ["Iconique"],
      stock: 120,
      sold: 12000,
    },
    {
      id: 19,
      name: "Kit Maquillage Professionnel",
      price: 199,
      originalPrice: 299,
      category: "Beauté",
      rating: 4.6,
      reviews: 780,
      image: "💋",
      color: "bg-gradient-to-r from-purple-50 to-pink-50",
      tags: ["Complet"],
      stock: 45,
      sold: 1200,
    },
    {
      id: 20,
      name: "Masque Visage Or 24K",
      price: 89,
      category: "Beauté",
      rating: 4.4,
      reviews: 340,
      image: "🎭",
      color: "bg-gradient-to-r from-yellow-50 to-amber-50",
      tags: ["Luxe"],
      stock: 67,
      sold: 450,
    },

    // SPORT
    {
      id: 21,
      name: "Vélo de Route Carbone",
      price: 2499,
      category: "Sport",
      rating: 4.8,
      reviews: 230,
      image: "🚴",
      color: "bg-gradient-to-r from-red-50 to-black",
      tags: ["Performance"],
      stock: 8,
      sold: 89,
    },
    {
      id: 22,
      name: "Tapis de Course Pliable",
      price: 899,
      originalPrice: 1199,
      category: "Sport",
      rating: 4.5,
      reviews: 560,
      image: "🏃",
      color: "bg-gradient-to-r from-gray-50 to-black",
      tags: ["Maison"],
      stock: 23,
      sold: 340,
    },
    {
      id: 23,
      name: "Haltères Réglables",
      price: 129,
      category: "Sport",
      rating: 4.3,
      reviews: 890,
      image: "🏋️",
      color: "bg-gradient-to-r from-gray-100 to-black",
      tags: ["Musculation"],
      stock: 120,
      sold: 2300,
    },

    // JOUETS
    {
      id: 24,
      name: "Lego Star Wars Millenium",
      price: 299,
      category: "Jouets",
      rating: 4.9,
      reviews: 1560,
      image: "🧩",
      color: "bg-gradient-to-r from-yellow-50 to-gray-50",
      tags: ["Collector"],
      stock: 15,
      sold: 3400,
    },
    {
      id: 25,
      name: "Poupée Barbie Collector",
      price: 199,
      category: "Jouets",
      rating: 4.7,
      reviews: 780,
      image: "🧸",
      color: "bg-gradient-to-r from-pink-50 to-purple-50",
      tags: ["Édition Limitée"],
      stock: 23,
      sold: 450,
    },

    // LIVRES
    {
      id: 26,
      name: "Collection Harry Potter",
      price: 149,
      category: "Livres",
      rating: 4.9,
      reviews: 5600,
      image: "📚",
      color: "bg-gradient-to-r from-red-50 to-yellow-50",
      tags: ["Célèbre"],
      stock: 89,
      sold: 12000,
    },
    {
      id: 27,
      name: "Livre de Cuisine Signé",
      price: 79,
      category: "Livres",
      rating: 4.6,
      reviews: 340,
      image: "📖",
      color: "bg-gradient-to-r from-orange-50 to-red-50",
      tags: ["Gastronomie"],
      stock: 45,
      sold: 780,
    },

    // AUTO-MOTO
    {
      id: 28,
      name: "GPS Voiture Premium",
      price: 299,
      originalPrice: 399,
      category: "Auto-Moto",
      rating: 4.4,
      reviews: 890,
      image: "🗺️",
      color: "bg-gradient-to-r from-blue-50 to-black",
      tags: ["Navigation"],
      stock: 56,
      sold: 1200,
    },
    {
      id: 29,
      name: "Kit Nettoyage Auto",
      price: 89,
      category: "Auto-Moto",
      rating: 4.5,
      reviews: 560,
      image: "🧽",
      color: "bg-gradient-to-r from-blue-50 to-white",
      tags: ["Entretien"],
      stock: 120,
      sold: 2300,
    },

    // SANTÉ
    {
      id: 30,
      name: "Tensiomètre Digital",
      price: 59,
      category: "Santé",
      rating: 4.3,
      reviews: 890,
      image: "❤️",
      color: "bg-gradient-to-r from-red-50 to-white",
      tags: ["Médical"],
      stock: 78,
      sold: 3400,
    },
    {
      id: 31,
      name: "Balance Connectée",
      price: 79,
      originalPrice: 99,
      category: "Santé",
      rating: 4.2,
      reviews: 1560,
      image: "⚖️",
      color: "bg-gradient-to-r from-gray-50 to-white",
      tags: ["Fitness"],
      stock: 120,
      sold: 5600,
    },

    // PLUS DE PRODUITS POUR REMPLIR...
    {
      id: 32,
      name: "Casque VR Oculus Quest 3",
      price: 549,
      category: "Électronique",
      rating: 4.7,
      reviews: 2340,
      image: "🥽",
      color: "bg-gradient-to-r from-gray-100 to-blue-100",
      tags: ["Réalité Virtuelle"],
      stock: 34,
      sold: 5600,
    },
    {
      id: 33,
      name: "Enceinte Bluetooth JBL",
      price: 129,
      originalPrice: 179,
      category: "Électronique",
      rating: 4.5,
      reviews: 4560,
      image: "🔊",
      color: "bg-gradient-to-r from-black to-red-100",
      tags: ["Portable"],
      stock: 89,
      sold: 12000,
    },
    {
      id: 34,
      name: "Montre Fitbit Charge 6",
      price: 159,
      category: "Électronique",
      rating: 4.4,
      reviews: 2890,
      image: "⌚",
      color: "bg-gradient-to-r from-black to-green-100",
      tags: ["Fitness"],
      stock: 120,
      sold: 7800,
    },
    {
      id: 35,
      name: "Console Nintendo Switch OLED",
      price: 349,
      category: "Électronique",
      rating: 4.8,
      reviews: 5670,
      image: "🎮",
      color: "bg-gradient-to-r from-red-50 to-white",
      tags: ["Gaming"],
      stock: 45,
      sold: 12000,
    },
    {
      id: 36,
      name: "Camera GoPro Hero 12",
      price: 449,
      category: "Électronique",
      rating: 4.6,
      reviews: 1890,
      image: "📷",
      color: "bg-gradient-to-r from-blue-50 to-black",
      tags: ["Action"],
      stock: 56,
      sold: 3400,
    },
    {
      id: 37,
      name: "Tablette Samsung S9",
      price: 899,
      category: "Électronique",
      rating: 4.7,
      reviews: 1230,
      image: "📱",
      color: "bg-gradient-to-r from-gray-50 to-blue-50",
      tags: ["Productivité"],
      stock: 34,
      sold: 2300,
    },
    {
      id: 38,
      name: "Clavier Mécanique Gaming",
      price: 129,
      category: "Électronique",
      rating: 4.5,
      reviews: 4560,
      image: "⌨️",
      color: "bg-gradient-to-r from-black to-purple-100",
      tags: ["RGB"],
      stock: 120,
      sold: 8900,
    },
    {
      id: 39,
      name: "Souris Logitech MX Master 3",
      price: 99,
      category: "Électronique",
      rating: 4.8,
      reviews: 6780,
      image: "🖱️",
      color: "bg-gradient-to-r from-gray-100 to-black",
      tags: ["Ergonomique"],
      stock: 89,
      sold: 15000,
    },
    {
      id: 40,
      name: "Moniteur 4K 27\"",
      price: 399,
      originalPrice: 499,
      category: "Électronique",
      rating: 4.6,
      reviews: 2340,
      image: "🖥️",
      color: "bg-gradient-to-r from-black to-blue-100",
      tags: ["Haute Définition"],
      stock: 45,
      sold: 5600,
    },
    {
      id: 41,
      name: "Sac Eastpak Padded Pak'r",
      price: 69,
      category: "Mode",
      rating: 4.7,
      reviews: 4560,
      image: "🎒",
      color: "bg-gradient-to-r from-black to-red-100",
      tags: ["Scolaire"],
      stock: 120,
      sold: 23000,
    },
    {
      id: 42,
      name: "Ceinture Cuir Homme",
      price: 89,
      category: "Mode",
      rating: 4.5,
      reviews: 1890,
      image: "🧵",
      color: "bg-gradient-to-r from-brown-50 to-amber-50",
      tags: ["Cuir Véritable"],
      stock: 78,
      sold: 4500,
    },
    {
      id: 43,
      name: "Baskets Nike Air Force 1",
      price: 119,
      category: "Mode",
      rating: 4.8,
      reviews: 8900,
      image: "👟",
      color: "bg-gradient-to-r from-white to-gray-100",
      tags: ["Classique"],
      stock: 56,
      sold: 34000,
    },
    {
      id: 44,
      name: "Pull en Cachemire",
      price: 199,
      originalPrice: 299,
      category: "Mode",
      rating: 4.6,
      reviews: 2340,
      image: "🧥",
      color: "bg-gradient-to-r from-gray-50 to-beige-50",
      tags: ["Hiver"],
      stock: 34,
      sold: 1200,
    },
    {
      id: 45,
      name: "Chemise Slim Fit",
      price: 79,
      category: "Mode",
      rating: 4.4,
      reviews: 4560,
      image: "👔",
      color: "bg-gradient-to-r from-white to-blue-50",
      tags: ["Bureau"],
      stock: 120,
      sold: 8900,
    },
    {
      id: 46,
      name: "Jean Denim Slim",
      price: 89,
      category: "Mode",
      rating: 4.5,
      reviews: 6780,
      image: "👖",
      color: "bg-gradient-to-r from-blue-50 to-indigo-50",
      tags: ["Décontracté"],
      stock: 89,
      sold: 15000,
    },
    {
      id: 47,
      name: "Chaussettes Coton",
      price: 24,
      category: "Mode",
      rating: 4.3,
      reviews: 8900,
      image: "🧦",
      color: "bg-gradient-to-r from-white to-gray-100",
      tags: ["Pack de 5"],
      stock: 200,
      sold: 45000,
    },
    {
      id: 48,
      name: "Cravate Soie",
      price: 59,
      category: "Mode",
      rating: 4.4,
      reviews: 1230,
      image: "👔",
      color: "bg-gradient-to-r from-red-50 to-blue-50",
      tags: ["Formel"],
      stock: 67,
      sold: 3400,
    },
    {
      id: 49,
      name: "Bonnet Laine",
      price: 39,
      category: "Mode",
      rating: 4.2,
      reviews: 2340,
      image: "🧢",
      color: "bg-gradient-to-r from-gray-100 to-black",
      tags: ["Hiver"],
      stock: 120,
      sold: 5600,
    },
    {
      id: 50,
      name: "Écharpe Cachemire",
      price: 129,
      category: "Mode",
      rating: 4.6,
      reviews: 1890,
      image: "🧣",
      color: "bg-gradient-to-r from-red-50 to-pink-50",
      tags: ["Luxe"],
      stock: 45,
      sold: 2300,
    },
  ];

  // Filtrer les produits
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Trier les produits
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'sold':
        return b.sold - a.sold;
      default:
        return b.sold - a.sold; // Populaire par défaut
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">🛍️</span>
              </div>
              <h1 className="text-2xl font-bold text-blue-600">
                L'ACTU DE MOUSSA SHOP
              </h1>
            </div>
            <a href="/" className="text-blue-600 hover:text-blue-800">
              ← Retour à l'accueil
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Titre et Stats */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Catalogue Produits
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Découvrez {allProducts.length} produits dans {categories.length - 1} catégories
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-blue-600">{allProducts.length}</div>
              <div className="text-gray-600">Produits</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-green-600">{categories.length - 1}</div>
              <div className="text-gray-600">Catégories</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-purple-600">
                {allProducts.reduce((sum, p) => sum + p.sold, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Ventes totales</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {Math.max(...allProducts.map(p => p.rating)).toFixed(1)}
              </div>
              <div className="text-gray-600">Meilleure note</div>
            </div>
          </div>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Barre de recherche */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un produit ou une catégorie..."
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Filtre catégorie */}
            <div className="flex gap-2">
              <Filter className="text-gray-500 mt-2" />
              <select 
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Trier par */}
            <div className="flex gap-2">
              <span className="text-gray-500 mt-2">Trier par:</span>
              <select 
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Plus populaires</option>
                <option value="price-low">Prix croissant</option>
                <option value="price-high">Prix décroissant</option>
                <option value="rating">Meilleures notes</option>
                <option value="sold">Plus vendus</option>
              </select>
            </div>
          </div>

          {/* Catégories rapides */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.slice(0, 8).map(cat => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Résultats */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCategory === 'Tous' ? 'Tous les produits' : selectedCategory}
              <span className="text-gray-500 text-lg ml-2">
                ({sortedProducts.length} produits)
              </span>
            </h2>
            <div className="text-sm text-gray-500">
              Affichage 1-{Math.min(sortedProducts.length, 50)} sur {sortedProducts.length}
            </div>
          </div>
        </div>

        {/* Grille de produits */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              Aucun produit trouvé
            </h3>
            <p className="text-gray-600">
              Essayez avec d'autres critères de recherche
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.slice(0, 50).map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image produit */}
                <div className={`${product.color} h-64 relative overflow-hidden`}>
                  <div className="text-8xl flex items-center justify-center h-full">
                    {product.image}
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions rapides */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Stock warning */}
                  {product.stock < 10 && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                        Plus que {product.stock}
                      </span>
                    </div>
                  )}
                </div>

                {/* Détails produit */}
                <div className="p-5">
                  {/* Catégorie */}
                  <div className="text-sm text-gray-500 mb-1">
                    {product.category}
                  </div>

                  {/* Nom produit */}
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Prix */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price}€
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-lg text-gray-500 line-through">
                          {product.originalPrice}€
                        </span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm font-bold">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </span>
                      </>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>🔥 {product.sold.toLocaleString()} vendus</span>
                    <span>📦 {product.stock} en stock</span>
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Ajouter
                    </button>
                    <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {sortedProducts.length > 0 && (
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                ← Précédent
              </button>
              {[1, 2, 3, 4, 5].map(num => (
                <button
                  key={num}
                  className={`px-4 py-2 border rounded-lg ${
                    num === 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {num}
                </button>
              ))}
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Suivant →
              </button>
            </div>
          </div>
        )}

        {/* Catégories détaillées */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explorez nos catégories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.slice(1).map(cat => {
              const catProducts = allProducts.filter(p => p.category === cat);
              const totalSold = catProducts.reduce((sum, p) => sum + p.sold, 0);
              
              return (
                <div
                  key={cat}
                  className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCategory(cat)}
                >
                  <div className="text-4xl mb-3">
                    {cat === 'Électronique' && '📱'}
                    {cat === 'Mode' && '👕'}
                    {cat === 'Maison' && '🏠'}
                    {cat === 'Beauté' && '💄'}
                    {cat === 'Sport' && '⚽'}
                    {cat === 'Jouets' && '🧸'}
                    {cat === 'Livres' && '📚'}
                    {cat === 'Auto-Moto' && '🚗'}
                    {cat === 'Santé' && '❤️'}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{cat}</h3>
                  <div className="text-sm text-gray-500">
                    {catProducts.length} produits
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    {totalSold.toLocaleString()} ventes
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'aide pour choisir ?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible 7j/7 pour vous conseiller sur les meilleurs produits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700">
                💬 Chat en direct
              </button>
              <button className="px-8 py-3 bg-transparent border border-white rounded-full font-semibold hover:bg-white/10">
                📞 Appeler le support
              </button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="text-2xl font-bold mb-2">L'ACTU DE MOUSSA SHOP</p>
            <p>© 2024 - Marketplace 100% africaine</p>
            <p className="mt-2">Plus de {allProducts.length} produits • {allProducts.reduce((sum, p) => sum + p.sold, 0).toLocaleString()} ventes</p>
          </div>
        </div>
      </footer>
    </div>
  );
}