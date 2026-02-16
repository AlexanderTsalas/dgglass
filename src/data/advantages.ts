export interface AdvantageItem {
  title: string;
  description: string;
  icon: string;
}

export const advantageData = {
  el: [
    {
      title: "Ποιότητα & Αντοχή",
      description: "Χρησιμοποιούμε αποκλειστικά κρύσταλλα κορυφαίων οίκων με πιστοποιήσεις ασφαλείας και αντοχής.",
      icon: "shield"
    },
    {
      title: "Τεχνική Κατάρτιση",
      description: "Οι τεχνικοί μας διαθέτουν πολυετή εμπειρία σε σύνθετες και απαιτητικές γυάλινες κατασκευές.",
      icon: "users"
    },
    {
      title: "Σύγχρονος Σχεδιασμός",
      description: "Προσφέρουμε minimal και λειτουργικές λύσεις που αναβαθμίζουν την αισθητική του χώρου σας.",
      icon: "pencil"
    },
    {
      title: "Εξατομίκευση",
      description: "Κάθε έργο μελετάται ξεχωριστά για να καλύπτει τις μοναδικές προδιαγραφές του κτιρίου σας.",
      icon: "settings"
    }
  ],
  en: [
    {
      title: "Quality & Durability",
      description: "We use exclusively glass from top manufacturers with safety and durability certifications.",
      icon: "shield"
    },
    {
      title: "Technical Expertise",
      description: "Our technicians have years of experience in complex and demanding glass constructions.",
      icon: "users"
    },
    {
      title: "Modern Design",
      description: "We offer minimal and functional solutions that upgrade the aesthetics of your space.",
      icon: "pencil"
    },
    {
      title: "Customization",
      description: "Every project is studied individually to meet the unique specifications of your building.",
      icon: "settings"
    }
  ],
  ru: [
    {
      title: "Качество и Прочность",
      description: "Мы используем исключительно стекло от ведущих производителей с сертификатами безопасности и прочности.",
      icon: "shield"
    },
    {
      title: "Техническая Экспертиза",
      description: "Наши техники имеют многолетний опыт в сложных и требовательных стеклянных конструкциях.",
      icon: "users"
    },
    {
      title: "Современный Дизайн",
      description: "Мы предлагаем минималистичные и функциональные решения, улучшающие эстетику вашего пространства.",
      icon: "pencil"
    },
    {
      title: "Индивидуальный Подход",
      description: "Каждый проект изучается индивидуально для удовлетворения уникальных спецификаций вашего здания.",
      icon: "settings"
    }
  ],
  zh: [
    {
      title: "质量与耐用性",
      description: "我们只使用顶级制造商提供的具有安全和耐用认证的玻璃。",
      icon: "shield"
    },
    {
      title: "技术专长",
      description: "我们的技术人员在复杂和高要求的玻璃结构方面拥有多年经验。",
      icon: "users"
    },
    {
      title: "现代设计",
      description: "我们提供简约和实用的解决方案，提升您空间的美感。",
      icon: "pencil"
    },
    {
      title: "定制",
      description: "每个项目都单独研究，以满足您建筑的独特规格。",
      icon: "settings"
    }
  ],
  ar: [
    {
      title: "الجودة والمتانة",
      description: "نستخدم حصريًا زجاجًا من كبار المصنعين مع شهادات السلامة والمتانة.",
      icon: "shield"
    },
    {
      title: "الخبرة التقنية",
      description: "يتمتع فنيونا بسنوات من الخبرة في الإنشاءات الزجاجية المعقدة والمتطلبة.",
      icon: "users"
    },
    {
      title: "تصميم حديث",
      description: "نقدم حلولاً بسيطة وعملية ترفع من جماليات مساحتك.",
      icon: "pencil"
    },
    {
      title: "تخصيص",
      description: "يتم دراسة كل مشروع على حدة لتلبية المواصفات الفريدة لمبناك.",
      icon: "settings"
    }
  ]
};

export const getAdvantageData = (lang: string = 'el'): AdvantageItem[] => {
  return advantageData[lang as keyof typeof advantageData] || advantageData.el;
};
