export interface PortfolioItem {
  id: string; // unique identifier
  slug: string; // for url routing
  url: string;
  location: string;
  type: string;
  category: string;
  year: string;
  client?: string; // Optional client name
  architect?: string; // Optional architect
  description?: string; // Description for the detail page
  images?: string[]; // Additional images for the gallery
}

const portfolioData: Record<string, PortfolioItem[]> = {
  el: [
    {
      id: '1',
      slug: 'office-complex-rhodes',
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      location: "Συγκρότημα Γραφείων, Ρόδος",
      type: "Γυάλινα Χωρίσματα",
      category: "COMMERCIAL",
      year: "2023",
      client: "Aegean Corp",
      architect: "Dimitris Architects"
    },
    {
      id: '2',
      slug: 'private-villa-kos',
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      location: "Ιδιωτική Βίλα, Κως",
      type: "Minimal Κουφώματα",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      id: '3',
      slug: 'hotel-atrium-samos',
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5f649776?auto=format&fit=crop&q=80&w=1000",
      location: "Ξενοδοχείο Atrium, Σάμος",
      type: "Γυάλινη Οροφή",
      category: "HOTELS",
      year: "2022"
    },
    {
      id: '4',
      slug: 'boutique-hotel-symi',
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      location: "Boutique Hotel, Σύμη",
      type: "Γυάλινα Μπαλκόνια",
      category: "HOTELS",
      year: "2023"
    },
    {
      id: '5',
      slug: 'luxury-residence-lindos',
      url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1000",
      location: "Πολυτελής Κατοικία, Λίνδος",
      type: "Πέργκολα Αλουμινίου",
      category: "RESIDENTIAL",
      year: "2023"
    },
    {
      id: '6',
      slug: 'shopping-center-rhodes',
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
      location: "Εμπορικό Κέντρο, Πόλη Ρόδου",
      type: "Βιτρίνες Ασφαλείας",
      category: "COMMERCIAL",
      year: "2021"
    },
    {
      id: '7',
      slug: 'villa-horizon-ialysos',
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      location: "Villa Horizon, Ιαλυσός",
      type: "Θερμοδιακοπτόμενα",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      id: '8',
      slug: 'mitsis-grand-hotel',
      url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000",
      location: "Mitsis Grand Hotel",
      type: "Αίθριο Εισόδου",
      category: "HOTELS",
      year: "2020"
    }
  ],
  en: [
    {
      id: '1',
      slug: 'office-complex-rhodes',
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      location: "Office Complex, Rhodes",
      type: "Glass Partitions",
      category: "COMMERCIAL",
      year: "2023",
      client: "Aegean Corp",
      architect: "Dimitris Architects"
    },
    {
      id: '2',
      slug: 'private-villa-kos',
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      location: "Private Villa, Kos",
      type: "Minimal Windows",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      id: '3',
      slug: 'hotel-atrium-samos',
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5f649776?auto=format&fit=crop&q=80&w=1000",
      location: "Hotel Atrium, Samos",
      type: "Skylight Installation",
      category: "HOTELS",
      year: "2022"
    },
    {
      id: '4',
      slug: 'boutique-hotel-symi',
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      location: "Boutique Hotel, Symi",
      type: "Glass Balconies",
      category: "HOTELS",
      year: "2023"
    },
    {
      id: '5',
      slug: 'luxury-residence-lindos',
      url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1000",
      location: "Luxury Residence, Lindos",
      type: "Aluminum Pergola",
      category: "RESIDENTIAL",
      year: "2023"
    },
    {
      id: '6',
      slug: 'shopping-center-rhodes',
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
      location: "Shopping Center, Rhodes City",
      type: "Safety Shopfronts",
      category: "COMMERCIAL",
      year: "2021"
    },
    {
      id: '7',
      slug: 'villa-horizon-ialysos',
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      location: "Villa Horizon, Ialysos",
      type: "Thermal Break Systems",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      id: '8',
      slug: 'mitsis-grand-hotel',
      url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000",
      location: "Mitsis Grand Hotel",
      type: "Entrance Atrium",
      category: "HOTELS",
      year: "2020"
    }
  ],
  ru: [],
  zh: [],
  ar: []
};

export const getPortfolioData = (lang: string = 'el'): PortfolioItem[] => {
  return portfolioData[lang] || portfolioData['en'];
};

export const getProjectBySlug = (slug: string, lang: string = 'el'): PortfolioItem | undefined => {
  const projects = getPortfolioData(lang);
  return projects.find(p => p.slug === slug);
};
