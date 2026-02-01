'use client';

import { useState } from 'react';

export default function SellPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    nomProduit: '',
    description: '',
    prix: '',
    categorie: '',
    quantite: '',
  });

  const categories = [
    'Électronique',
    'Mode & Accessoires',
    'Maison & Jardin',
    'Beauté & Santé',
    'Sport & Loisirs',
    'Jeux & Jouets',
    'Livres & Médias',
    'Auto & Moto',
    'Autre',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demande envoyée ! Nous vous contacterons dans les 24h.');
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      nomProduit: '',
      description: '',
      prix: '',
      categorie: '',
      quantite: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h1 className="text-2xl font-bold text-green-600">
                Vendez sur Moussa Shop
              </h1>
            </div>
            <a href="/" className="text-blue-600 hover:text-blue-800">
              ← Accueil
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vendez vos produits
            <span className="text-green-600 block">en toute simplicité</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Remplissez ce formulaire et nous ajouterons vos produits sur notre marketplace.
            Aucune compétence technique requise !
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl text-green-600 font-bold mb-2">0%</div>
            <div className="text-gray-700">Commission les 30 premiers jours</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl text-green-600 font-bold mb-2">24h</div>
            <div className="text-gray-700">Réponse garantie</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl text-green-600 font-bold mb-2">Gratuit</div>
            <div className="text-gray-700">Pas de frais d'inscription</div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Informations personnelles */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  👤 Vos informations
                </h3>
                
                <div>
                  <label className="block text-gray-700 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                  />
                </div>
              </div>

              {/* Informations produit */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  📦 Informations produit
                </h3>

                <div>
                  <label className="block text-gray-700 mb-2">Nom du produit *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.nomProduit}
                    onChange={(e) => setFormData({...formData, nomProduit: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Catégorie *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.categorie}
                    onChange={(e) => setFormData({...formData, categorie: e.target.value})}
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Prix (€) *</label>
                    <input
                      type="number"
                      required
                      min="0"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={formData.prix}
                      onChange={(e) => setFormData({...formData, prix: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Quantité *</label>
                    <input
                      type="number"
                      required
                      min="1"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={formData.quantite}
                      onChange={(e) => setFormData({...formData, quantite: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Description du produit *</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Décrivez votre produit en détail..."
              />
            </div>

            {/* Upload photos (placeholder) */}
            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Photos du produit</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-gray-600">
                  Vous pouvez envoyer les photos par email après l'inscription
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Formats acceptés : JPG, PNG (max 5MB par photo)
                </p>
              </div>
            </div>

            {/* Conditions */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mt-1 mr-3"
                  id="conditions"
                />
                <label htmlFor="conditions" className="text-gray-700">
                  J'accepte les conditions générales de vente. Je certifie être le propriétaire 
                  légal des produits que je souhaite vendre.
                </label>
              </div>
            </div>

            {/* Bouton soumission */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-green-600 text-white rounded-full text-lg font-bold hover:bg-green-700 transition"
              >
                🚀 Soumettre mon produit
              </button>
              <p className="text-gray-500 mt-4">
                Nous vous contacterons dans les 24h pour finaliser l'ajout
              </p>
            </div>
          </form>
        </div>

        {/* Process */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="font-bold text-lg mb-2">1. Formulaire</h3>
              <p className="text-gray-600">Remplissez le formulaire ci-dessus</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-lg mb-2">2. Contact</h3>
              <p className="text-gray-600">Nous vous contactons sous 24h</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="font-bold text-lg mb-2">3. Photos</h3>
              <p className="text-gray-600">Envoyez-nous les photos des produits</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="font-bold text-lg mb-2">4. En ligne !</h3>
              <p className="text-gray-600">Vos produits apparaissent sur le site</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Questions ? Contactez-nous
            </h3>
            <p className="text-gray-600 mb-4">
              Email : <strong>vendeurs@moussashop.com</strong>
            </p>
            <p className="text-gray-600">
              Téléphone : <strong>01 23 45 67 89</strong>
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold mb-2">L'ACTU DE MOUSSA SHOP</p>
          <p className="text-gray-400">© 2024 - Devenez vendeur en 5 minutes</p>
        </div>
      </footer>
    </div>
  );
}