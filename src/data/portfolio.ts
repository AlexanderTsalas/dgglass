export interface PortfolioItem {
  url: string;
  location: string;
  type: string;
  category: string;
  year: string;
}

const portfolioData: Record<string, PortfolioItem[]> = {
  el: [
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      location: "Συγκρότημα Γραφείων, Ρόδος",
      type: "Γυάλινα Χωρίσματα",
      category: "COMMERCIAL",
      year: "2023"
    },
    {
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      location: "Ιδιωτική Βίλα, Κως",
      type: "Minimal Κουφώματα",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5f649776?auto=format&fit=crop&q=80&w=1000",
      location: "Ξενοδοχείο Atrium, Σάμος",
      type: "Γυάλινη Οροφή",
      category: "HOTELS",
      year: "2022"
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      location: "Boutique Hotel, Σύμη",
      type: "Γυάλινα Μπαλκόνια",
      category: "HOTELS",
      year: "2023"
    },
    {
      url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1000",
      location: "Πολυτελής Κατοικία, Λίνδος",
      type: "Πέργκολα Αλουμινίου",
      category: "RESIDENTIAL",
      year: "2023"
    },
    {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
      location: "Εμπορικό Κέντρο, Πόλη Ρόδου",
      type: "Βιτρίνες Ασφαλείας",
      category: "COMMERCIAL",
      year: "2021"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      location: "Villa Horizon, Ιαλυσός",
      type: "Θερμοδιακοπτόμενα",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000",
      location: "Mitsis Grand Hotel",
      type: "Αίθριο Εισόδου",
      category: "HOTELS",
      year: "2020"
    }
  ],
  en: [
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      location: "Office Complex, Rhodes",
      type: "Glass Partitions",
      category: "COMMERCIAL",
      year: "2023"
    },
    {
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      location: "Private Villa, Kos",
      type: "Minimal Windows",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5f649776?auto=format&fit=crop&q=80&w=1000",
      location: "Hotel Atrium, Samos",
      type: "Skylight Installation",
      category: "HOTELS",
      year: "2022"
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      location: "Boutique Hotel, Symi",
      type: "Glass Balconies",
      category: "HOTELS",
      year: "2023"
    },
    {
      url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1000",
      location: "Luxury Residence, Lindos",
      type: "Aluminum Pergola",
      category: "RESIDENTIAL",
      year: "2023"
    },
    {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
      location: "Shopping Center, Rhodes City",
      type: "Safety Shopfronts",
      category: "COMMERCIAL",
      year: "2021"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      location: "Villa Horizon, Ialysos",
      type: "Thermal Break Systems",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000",
      location: "Mitsis Grand Hotel",
      type: "Entrance Atrium",
      category: "HOTELS",
      year: "2020"
    }
  ],
  ru: [
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      location: "Офисный Комплекс, Родос",
      type: "Стеклянные Перегородки",
      category: "COMMERCIAL",
      year: "2023"
    }
  ],
  zh: [
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      location: "办公综合体, 罗德岛",
      type: "玻璃隔断",
      category: "COMMERCIAL",
      year: "2023"
    }
  ],
  ar: [
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      location: "مجمع مكاتب، رودس",
      type: "قواطع زجاجية",
      category: "COMMERCIAL",
      year: "2023"
    }
  ]
};

export const getPortfolioData = (lang: string = 'el'): PortfolioItem[] => {
  return portfolioData[lang] || portfolioData['en'];
};
