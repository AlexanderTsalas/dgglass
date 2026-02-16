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
  ru: [
    {
      id: '1',
      slug: 'office-complex-rhodes',
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      location: "Офисный Комплекс, Родос",
      type: "Стеклянные Перегородки",
      category: "COMMERCIAL",
      year: "2023",
      client: "Aegean Corp",
      architect: "Dimitris Architects"
    },
    {
      id: '2',
      slug: 'private-villa-kos',
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      location: "Частная Вилла, Кос",
      type: "Минималистичные Окна",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      id: '3',
      slug: 'hotel-atrium-samos',
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5f649776?auto=format&fit=crop&q=80&w=1000",
      location: "Отель Atrium, Самос",
      type: "Установка Светового Люка",
      category: "HOTELS",
      year: "2022"
    },
    {
      id: '4',
      slug: 'boutique-hotel-symi',
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      location: "Бутик-Отель, Сими",
      type: "Стеклянные Балконы",
      category: "HOTELS",
      year: "2023"
    },
    {
      id: '5',
      slug: 'luxury-residence-lindos',
      url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1000",
      location: "Роскошная Резиденция, Линдос",
      type: "Алюминиевая Пергола",
      category: "RESIDENTIAL",
      year: "2023"
    },
    {
      id: '6',
      slug: 'shopping-center-rhodes',
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
      location: "Торговый Центр, Родос",
      type: "Безопасные Витрины",
      category: "COMMERCIAL",
      year: "2021"
    },
    {
      id: '7',
      slug: 'villa-horizon-ialysos',
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      location: "Вилла Horizon, Ялисос",
      type: "Системы с Терморазрывом",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      id: '8',
      slug: 'mitsis-grand-hotel',
      url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000",
      location: "Отель Mitsis Grand",
      type: "Входной Атриум",
      category: "HOTELS",
      year: "2020"
    }
  ],
  zh: [
    {
      id: '1',
      slug: 'office-complex-rhodes',
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      location: "办公综合体, 罗德岛",
      type: "玻璃隔断",
      category: "COMMERCIAL",
      year: "2023",
      client: "Aegean Corp",
      architect: "Dimitris Architects"
    },
    {
      id: '2',
      slug: 'private-villa-kos',
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      location: "私人别墅, 科斯岛",
      type: "极简窗户",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      id: '3',
      slug: 'hotel-atrium-samos',
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5f649776?auto=format&fit=crop&q=80&w=1000",
      location: "Atrium 酒店, 萨摩斯",
      type: "天窗安装",
      category: "HOTELS",
      year: "2022"
    },
    {
      id: '4',
      slug: 'boutique-hotel-symi',
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      location: "精品酒店, 锡米岛",
      type: "玻璃阳台",
      category: "HOTELS",
      year: "2023"
    },
    {
      id: '5',
      slug: 'luxury-residence-lindos',
      url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1000",
      location: "豪华住宅, 林多斯",
      type: "铝制凉棚",
      category: "RESIDENTIAL",
      year: "2023"
    },
    {
      id: '6',
      slug: 'shopping-center-rhodes',
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
      location: "购物中心, 罗德市",
      type: "安全店面",
      category: "COMMERCIAL",
      year: "2021"
    },
    {
      id: '7',
      slug: 'villa-horizon-ialysos',
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      location: "地平线别墅, Ialysos",
      type: "隔热断桥系统",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      id: '8',
      slug: 'mitsis-grand-hotel',
      url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000",
      location: "Mitsis Grand 酒店",
      type: "入口中庭",
      category: "HOTELS",
      year: "2020"
    }
  ],
  ar: [
    {
      id: '1',
      slug: 'office-complex-rhodes',
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      location: "مجمع مكاتب، رودس",
      type: "قواطع زجاجية",
      category: "COMMERCIAL",
      year: "2023",
      client: "Aegean Corp",
      architect: "Dimitris Architects"
    },
    {
      id: '2',
      slug: 'private-villa-kos',
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      location: "فيلا خاصة، كوس",
      type: "نوافذ عصرية",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      id: '3',
      slug: 'hotel-atrium-samos',
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5f649776?auto=format&fit=crop&q=80&w=1000",
      location: "فندق أتريوم، ساموس",
      type: "تركيب مناور",
      category: "HOTELS",
      year: "2022"
    },
    {
      id: '4',
      slug: 'boutique-hotel-symi',
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      location: "فندق بوتيك، سيمي",
      type: "شرفات زجاجية",
      category: "HOTELS",
      year: "2023"
    },
    {
      id: '5',
      slug: 'luxury-residence-lindos',
      url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1000",
      location: "إقامة فاخرة، ليندوس",
      type: "برجولة ألمنيوم",
      category: "RESIDENTIAL",
      year: "2023"
    },
    {
      id: '6',
      slug: 'shopping-center-rhodes',
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
      location: "مركز تسوق، مدينة رودس",
      type: "واجهات محلات آمنة",
      category: "COMMERCIAL",
      year: "2021"
    },
    {
      id: '7',
      slug: 'villa-horizon-ialysos',
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      location: "فيلا هورايزون، إياليسوس",
      type: "أنظمة عزل حراري",
      category: "RESIDENTIAL",
      year: "2024"
    },
    {
      id: '8',
      slug: 'mitsis-grand-hotel',
      url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000",
      location: "فندق ميتسيس جراند",
      type: "بهو المدخل",
      category: "HOTELS",
      year: "2020"
    }
  ]
};

export const getPortfolioData = (lang: string = 'el'): PortfolioItem[] => {
  return portfolioData[lang] || portfolioData['en'];
};

export const getProjectBySlug = (slug: string, lang: string = 'el'): PortfolioItem | undefined => {
  const projects = getPortfolioData(lang);
  return projects.find(p => p.slug === slug);
};
