export const mockSessions = [
  {
    id: '1',
    product: 'MacBook Pro M3 14"',
    platform: 'Facebook Marketplace',
    askingPrice: 1800,
    targetPrice: 1400,
    status: 'active',
    messages: 3,
    lastUpdate: '2026-03-22',
    thumbnail: 'https://placehold.co/80x80/1a1a2e/8B5CF6?text=💻',
  },
  {
    id: '2',
    product: 'Vélo de montagne Trek',
    platform: 'Kijiji',
    askingPrice: 650,
    targetPrice: 450,
    status: 'active',
    messages: 1,
    lastUpdate: '2026-03-21',
    thumbnail: 'https://placehold.co/80x80/1a1a2e/10B981?text=🚲',
  },
  {
    id: '3',
    product: 'Canapé sectionnel',
    platform: 'Facebook Marketplace',
    askingPrice: 400,
    targetPrice: 250,
    status: 'won',
    messages: 5,
    lastUpdate: '2026-03-18',
    thumbnail: 'https://placehold.co/80x80/1a1a2e/F59E0B?text=🛋',
  },
]

export const mockQuickResult = {
  context: "Le vendeur demande 1800$ pour un MacBook Pro M3. Vous avez offert 1400$ et il a répondu 'Le plus bas que je peux faire c'est 1650$'.",
  responses: [
    {
      style: 'bold',
      label: 'Agressive',
      color: '#EF4444',
      message: "Je comprends, mais à 1650$ c'est encore au-dessus de mon budget. J'ai vu le même modèle à 1350$ sur Marketplace la semaine passée. Je peux faire 1400$ cash aujourd'hui si tu veux t'en débarrasser vite. Sinon je vais prendre l'autre.",
      tip: "Utilise la compétition et l'urgence pour mettre la pression."
    },
    {
      style: 'moderate',
      label: 'Modérée',
      color: '#F59E0B',
      message: "Merci pour ta flexibilité! Est-ce qu'on pourrait se rencontrer au milieu, disons 1500$? Je peux me déplacer chez toi et payer cash aujourd'hui.",
      tip: "Split the difference — montre que tu es raisonnable et prêt à conclure."
    },
    {
      style: 'safe',
      label: 'Prudente',
      color: '#10B981',
      message: "C'est noté, merci. Est-ce que le prix inclut le chargeur et la boîte originale? Si oui, je pourrais monter à 1550$.",
      tip: "Demande des extras pour justifier ton offre plus élevée."
    }
  ]
}

export const mockStats = {
  totalNegotiations: 12,
  avgSaved: 23,
  bestDeal: '35% off',
  winRate: 75,
}
