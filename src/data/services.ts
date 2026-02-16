export interface Service {
  iconSlug: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  delay: number;
  category: string;
  features: string[];
}

export const servicesData: Record<string, Service[]> = {
  el: [
    {
      iconSlug: 'layers',
      title: 'Υαλοπίνακες',
      slug: 'yalo-pinakes',
      description: 'Κορυφαία ποιότητα υαλοπινάκων για κάθε οικιακή και επαγγελματική χρήση. Ενεργειακοί, ασφαλείας, και ηχομονωτικοί.',
      image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=1000',
      delay: 50,
      category: 'Structural',
      features: ['Υψηλή αντοχή', 'Κοπή στα μέτρα σας', 'Προστασία UV', 'Ηχομόνωση', 'Ενεργειακή απόδοση']
    },
    {
      iconSlug: 'maximize',
      title: 'Συρόμενες & Φυσούνες',
      slug: 'syromenes-fysounes',
      description: 'Minimal συστήματα συρόμενων θυρών και φυσούνες για μέγιστη διαύγεια και άνοιγμα στο χώρο σας.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      delay: 100,
      category: 'Systems',
      features: ['Λεπτά πλαίσια', 'Ομαλή κύλιση', 'Θερμοδιακοπή', 'Αδιάλειπτη θέα', 'Μέγιστο άνοιγμα']
    },
    {
      iconSlug: 'shield',
      title: 'Γυάλινα Κάγκελα',
      slug: 'gyalina-kagkela',
      description: 'Κρυστάλλινα στηθαία που προσφέρουν ασφάλεια χωρίς να εμποδίζουν τη θέα. Ιδανικά για μπαλκόνια και σκάλες.',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1000',
      delay: 150,
      category: 'Structural',
      features: ['Χωρίς κολώνες', 'Triplex ασφαλείας', 'Αντοχή στη διάβρωση', 'Ειδικές βάσεις στήριξης']
    },
    {
      iconSlug: 'zap',
      title: 'Ενεργειακά Τζάμια',
      slug: 'energeiaka-tzamia',
      description: 'Σύγχρονη τεχνολογία low-e για μέγιστη εξοικονόμηση ενέργειας και θερμική άνεση χειμώνα-καλοκαίρι.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      delay: 200,
      category: 'Energy',
      features: ['Low-E επίστρωση', 'Μείωση δαπανών', 'Θερμική άνεση', 'Περιορισμός UV']
    },
    {
      iconSlug: 'layout',
      title: 'Γυάλινα Χωρίσματα',
      slug: 'gyalina-xwrismata',
      description: 'Διαχωριστικά εσωτερικού χώρου για γραφεία και κατοικίες. Διατηρήστε τη φωτεινότητα με απόλυτη ηχομόνωση.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      delay: 250,
      category: 'Interior',
      features: ['Ηχομόνωση', 'Minimal σχεδιασμός', 'Διάφορες αποχρώσεις', 'Εύκολη εγκατάσταση']
    },
    {
      iconSlug: 'doorOpen',
      title: 'Γυάλινες Πόρτες',
      slug: 'gyalines-portes',
      description: 'Πόρτες ανοιγόμενες και συρόμενες με σύγχρονους μηχανισμούς και minimal αισθητική.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      delay: 300,
      category: 'Interior',
      features: ['Αθόρυβη λειτουργία', 'Ασφάλεια', 'Custom σχέδια', 'Ανθεκτικοί μεντεσέδες']
    },
    {
      iconSlug: 'shower',
      title: 'Καμπίνες Ντουζ',
      slug: 'kampines-ntouz',
      description: 'Custom κατασκευές για το μπάνιο σας με κρύσταλλα ασφαλείας και υλικά υψηλής αντοχής.',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1000',
      delay: 350,
      category: 'Interior',
      features: ['Ασφαλείας Securit', 'Εύκολος καθαρισμός', 'Ανοξείδωτα εξαρτήματα', 'Στεγανότητα']
    },
    {
      iconSlug: 'store',
      title: 'Βιτρίνες Καταστημάτων',
      slug: 'vitrines',
      description: 'Επαγγελματικές όψεις καταστημάτων για μέγιστη προβολή και ασφάλεια.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
      delay: 400,
      category: 'Commercial',
      features: ['Υψηλή διαύγεια', 'Αντιβανδαλιστικά', 'Μεγάλες διαστάσεις', 'UV φίλτρα']
    },
    {
      iconSlug: 'sun',
      title: 'Ειδικές Κατασκευές',
      slug: 'eidikes-kataskeves',
      description: 'Στέγαστρα, σκάλε, πατώματα και οποιαδήποτε άλλη γυάλινη κατασκευή απαιτεί ο χώρος σας.',
      image: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&q=80&w=1000',
      delay: 450,
      category: 'Special',
      features: ['Μελέτη εφαρμογής', 'Στατική επάρκεια', 'Μοναδικό design', 'Πιστοποιημένα υλικά']
    },
    {
      iconSlug: 'lock',
      title: 'Security Glass',
      slug: 'security-glass',
      description: 'Αλεξίσφαιρα και αντιβανδαλιστικά τζάμια για τράπεζες, κοσμηματοπωλεία και οικίες υψηλής ασφαλείας.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      delay: 500,
      category: 'Safety',
      features: ['Πιστοποίηση Bullet-proof', 'Πολυστρωματικά', 'Χωρίς παραμόρφωση', 'Αντοχή σε κρούση']
    },
    {
      iconSlug: 'copy',
      title: 'Καθρέπτες',
      slug: 'kathreptes',
      description: 'Καθρέπτες υψηλής ποιότητας για κάθε χρήση, με δυνατότητα φωτισμού LED και ειδικών σχημάτων.',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000',
      delay: 550,
      category: 'Interior',
      features: ['Διαύγεια ειδώλου', 'Αντοχή στην υγρασία', 'LED φωτισμός Backlit', 'Κοπή CNC']
    },
    {
      iconSlug: 'eye',
      title: 'Έξυπνο Γυαλί (PDLC)',
      slug: 'smart-glass',
      description: 'Γυαλί που αλλάζει από διάφανο σε αδιαφανές με το πάτημα ενός κουμπιού. Ιδιωτικότητα on-demand.',
      image: 'https://images.unsplash.com/photo-1497215842964-2227430d3d1f?auto=format&fit=crop&q=80&w=1000',
      delay: 600,
      category: 'Systems',
      features: ['Instant Privacy', 'Ενεργειακό', 'Λειτουργεί ως οθόνη', 'Ηχομόνωση']
    }
  ],
  en: [
    {
      iconSlug: 'layers',
      title: 'Glass Panes',
      slug: 'yalo-pinakes',
      description: 'Top quality glass panes for every domestic and professional use. Energy efficient, secure, and soundproof.',
      image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=1000',
      delay: 50,
      category: 'Structural',
      features: ['High durability', 'Custom cutting', 'UV Protection', 'Sound Insulation', 'Energy Efficient']
    },
    {
      iconSlug: 'maximize',
      title: 'Sliding & Folding',
      slug: 'syromenes-fysounes',
      description: 'Minimal sliding door systems and bi-folds for maximum clarity and opening in your space.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      delay: 100,
      category: 'Systems',
      features: ['Slim frames', 'Smooth gliding', 'Thermal break', 'Seamless view', 'Max opening']
    },
    {
      iconSlug: 'shield',
      title: 'Glass Railings',
      slug: 'gyalina-kagkela',
      description: 'Crystal balustrades offering safety without obstructing the view. Ideal for balconies and stairs.',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1000',
      delay: 150,
      category: 'Structural',
      features: ['Frameless', 'Safety Triplex', 'Corrosion resistant', 'Custom mounts']
    },
    {
      iconSlug: 'zap',
      title: 'Energy Glass',
      slug: 'energeiaka-tzamia',
      description: 'Modern low-e technology for maximum energy savings and thermal comfort winter-summer.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      delay: 200,
      category: 'Energy',
      features: ['Low-E Coating', 'Cost Reduction', 'Thermal Comfort', 'UV Limitation']
    },
    {
      iconSlug: 'layout',
      title: 'Glass Partitions',
      slug: 'gyalina-xwrismata',
      description: 'Interior partitions for offices and homes. Maintain brightness with absolute sound insulation.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      delay: 250,
      category: 'Interior',
      features: ['Soundproofing', 'Minimal Design', 'Various Tints', 'Easy Installation']
    },
    {
      iconSlug: 'doorOpen',
      title: 'Glass Doors',
      slug: 'gyalines-portes',
      description: 'Opening and sliding doors with modern mechanisms and minimal aesthetics.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      delay: 300,
      category: 'Interior',
      features: ['Silent Operation', 'Safety', 'Custom Designs', 'Durable Hinges']
    },
    {
      iconSlug: 'shower',
      title: 'Shower Cabins',
      slug: 'kampines-ntouz',
      description: 'Custom constructions for your bathroom with safety crystals and high-durability materials.',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1000',
      delay: 350,
      category: 'Interior',
      features: ['Securit Safety', 'Easy Clean', 'Stainless Parts', 'Waterproof']
    },
    {
      iconSlug: 'store',
      title: 'Shop Fronts',
      slug: 'vitrines',
      description: 'Professional shop facades for maximum visibility and security.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
      delay: 400,
      category: 'Commercial',
      features: ['High Clarity', 'Vandal Proof', 'Large Dimensions', 'UV Filters']
    },
    {
      iconSlug: 'sun',
      title: 'Special Constructions',
      slug: 'eidikes-kataskeves',
      description: 'Canopies, stairs, floors, and any other glass construction your space requires.',
      image: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&q=80&w=1000',
      delay: 450,
      category: 'Special',
      features: ['App Study', 'Structural Adequacy', 'Unique Design', 'Certified Materials']
    },
    {
      iconSlug: 'lock',
      title: 'Security Glass',
      slug: 'security-glass',
      description: 'Bulletproof and vandal-proof glass for banks, jewelry stores, and high-security homes.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      delay: 500,
      category: 'Safety',
      features: ['Bullet-proof Cert', 'Multi-laminate', 'No Distortion', 'Impact Resistance']
    },
    {
      iconSlug: 'copy',
      title: 'Mirrors',
      slug: 'kathreptes',
      description: 'High-quality mirrors for every use, with optional LED lighting and custom shapes.',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000',
      delay: 550,
      category: 'Interior',
      features: ['Clarity', 'Moisture Resistant', 'LED Backlit', 'CNC Cutting']
    },
    {
      iconSlug: 'eye',
      title: 'Smart Glass (PDLC)',
      slug: 'smart-glass',
      description: 'Glass that changes from transparent to opaque with the push of a button. Privacy on-demand.',
      image: 'https://images.unsplash.com/photo-1497215842964-2227430d3d1f?auto=format&fit=crop&q=80&w=1000',
      delay: 600,
      category: 'Systems',
      features: ['Instant Privacy', 'Energy Efficient', 'Projectable', 'Soundproofing']
    }
  ],
  ru: [
    {
      iconSlug: 'layers',
      title: 'Стеклопакеты',
      slug: 'yalo-pinakes',
      description: 'Высококачественное стекло для любых бытовых и профессиональных целей. Энергоэффективное, безопасное и звукоизолирующее.',
      image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=1000',
      delay: 50,
      category: 'Structural',
      features: ['Высокая прочность', 'Резка по размеру', 'Защита от УФ', 'Звукоизоляция', 'Энергоэффективность']
    },
    {
      iconSlug: 'maximize',
      title: 'Раздвижные Системы',
      slug: 'syromenes-fysounes',
      description: 'Минималистичные раздвижные системы и двери-гармошки для максимальной прозрачности и открытия пространства.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      delay: 100,
      category: 'Systems',
      features: ['Тонкие рамы', 'Плавное скольжение', 'Терморазрыв', 'Бесшовный вид', 'Макс. открытие']
    },
    {
      iconSlug: 'shield',
      title: 'Стеклянные Перила',
      slug: 'gyalina-kagkela',
      description: 'Кристальные балюстрады, обеспечивающие безопасность без преграждения вида. Идеально для балконов и лестниц.',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1000',
      delay: 150,
      category: 'Structural',
      features: ['Безрамные', 'Триплекс безопасности', 'Устойчивость к коррозии', 'Индивидуальные крепления']
    },
    {
      iconSlug: 'zap',
      title: 'Энергосберегающее Стекло',
      slug: 'energeiaka-tzamia',
      description: 'Современная технология low-e для максимальной экономии энергии и теплового комфорта зимой и летом.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      delay: 200,
      category: 'Energy',
      features: ['Low-E покрытие', 'Снижение затрат', 'Тепловой комфорт', 'Ограничение УФ']
    },
    {
      iconSlug: 'layout',
      title: 'Стеклянные Перегородки',
      slug: 'gyalina-xwrismata',
      description: 'Интерьерные перегородки для офисов и домов. Сохраняйте яркость с полной звукоизоляцией.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      delay: 250,
      category: 'Interior',
      features: ['Звукоизоляция', 'Минималистичный дизайн', 'Различные оттенки', 'Легкая установка']
    },
    {
      iconSlug: 'doorOpen',
      title: 'Стеклянные Двери',
      slug: 'gyalines-portes',
      description: 'Распашные и раздвижные двери с современными механизмами и минималистичной эстетикой.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      delay: 300,
      category: 'Interior',
      features: ['Тихая работа', 'Безопасность', 'Индивидуальный дизайн', 'Прочные петли']
    },
    {
      iconSlug: 'shower',
      title: 'Душевые Кабины',
      slug: 'kampines-ntouz',
      description: 'Индивидуальные конструкции для вашей ванной комнаты из безопасного стекла и высокопрочных материалов.',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1000',
      delay: 350,
      category: 'Interior',
      features: ['Безопасность Securit', 'Легкая чистка', 'Нержавеющие детали', 'Водонепроницаемость']
    },
    {
      iconSlug: 'store',
      title: 'Витрины Магазинов',
      slug: 'vitrines',
      description: 'Профессиональные фасады магазинов для максимальной видимости и безопасности.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
      delay: 400,
      category: 'Commercial',
      features: ['Высокая прозрачность', 'Антивандальные', 'Большие размеры', 'УФ-фильтры']
    },
    {
      iconSlug: 'sun',
      title: 'Специальные Конструкции',
      slug: 'eidikes-kataskeves',
      description: 'Навесы, лестницы, полы и любые другие стеклянные конструкции, которые требуются вашему пространству.',
      image: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&q=80&w=1000',
      delay: 450,
      category: 'Special',
      features: ['Прикладное исследование', 'Структурная прочность', 'Уникальный дизайн', 'Сертифицированные материалы']
    },
    {
      iconSlug: 'lock',
      title: 'Безопасное Стекло',
      slug: 'security-glass',
      description: 'Пуленепробиваемое и антивандальное стекло для банков, ювелирных магазинов и домов высокой безопасности.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      delay: 500,
      category: 'Safety',
      features: ['Сертификат пулестойкости', 'Многослойное', 'Без искажений', 'Ударопрочность']
    },
    {
      iconSlug: 'copy',
      title: 'Зеркала',
      slug: 'kathreptes',
      description: 'Высококачественные зеркала для любого использования, с опциональной LED подсветкой и нестандартными формами.',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000',
      delay: 550,
      category: 'Interior',
      features: ['Чистота отражения', 'Влагостойкость', 'LED подсветка', 'ЧПУ резка']
    },
    {
      iconSlug: 'eye',
      title: 'Умное Стекло (PDLC)',
      slug: 'smart-glass',
      description: 'Стекло, меняющееся с прозрачного на матовое нажатием кнопки. Приватность по требованию.',
      image: 'https://images.unsplash.com/photo-1497215842964-2227430d3d1f?auto=format&fit=crop&q=80&w=1000',
      delay: 600,
      category: 'Systems',
      features: ['Мгновенная приватность', 'Энергоэффективность', 'Возможность проекции', 'Звукоизоляция']
    }
  ],
  zh: [
    {
      iconSlug: 'layers',
      title: '玻璃面板',
      slug: 'yalo-pinakes',
      description: '适合各种家庭和专业用途的顶级玻璃面板。节能、安全、隔音。',
      image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=1000',
      delay: 50,
      category: 'Structural',
      features: ['高耐用性', '定制切割', '紫外线防护', '隔音', '节能']
    },
    {
      iconSlug: 'maximize',
      title: '推拉与折叠系统',
      slug: 'syromenes-fysounes',
      description: '极简推拉门系统和折叠门，为您的空间提供最大的视野和开放性。',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      delay: 100,
      category: 'Systems',
      features: ['超窄边框', '顺滑滑动', '隔热断桥', '无缝视野', '最大开启']
    },
    {
      iconSlug: 'shield',
      title: '玻璃栏杆',
      slug: 'gyalina-kagkela',
      description: '水晶般的栏杆，提供安全性而不遮挡视线。非常适合阳台和楼梯。',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1000',
      delay: 150,
      category: 'Structural',
      features: ['无框设计', '安全夹胶', '耐腐蚀', '定制安装']
    },
    {
      iconSlug: 'zap',
      title: '节能玻璃',
      slug: 'energeiaka-tzamia',
      description: '现代 Low-E 技术，实现冬夏两季最大的能源节约和热舒适度。',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      delay: 200,
      category: 'Energy',
      features: ['Low-E 镀膜', '降低成本', '热舒适', '紫外线限制']
    },
    {
      iconSlug: 'layout',
      title: '玻璃隔断',
      slug: 'gyalina-xwrismata',
      description: '用于办公室和家庭的内部隔断。保持明亮的同时实现绝对隔音。',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      delay: 250,
      category: 'Interior',
      features: ['隔音', '极简设计', '多种色调', '安装简便']
    },
    {
      iconSlug: 'doorOpen',
      title: '玻璃门',
      slug: 'gyalines-portes',
      description: '具有现代机制和极简美学的平开门和推拉门。',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      delay: 300,
      category: 'Interior',
      features: ['静音操作', '安全', '定制设计', '耐用铰链']
    },
    {
      iconSlug: 'shower',
      title: '淋浴房',
      slug: 'kampines-ntouz',
      description: '为您的浴室定制的结构，采用安全水晶和高耐用性材料。',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1000',
      delay: 350,
      category: 'Interior',
      features: ['Securit 安全', '易清洁', '不锈钢配件', '防水']
    },
    {
      iconSlug: 'store',
      title: '店铺门面',
      slug: 'vitrines',
      description: '专业的店铺外墙，实现最大的可见度和安全性。',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
      delay: 400,
      category: 'Commercial',
      features: ['高清晰度', '防破坏', '大尺寸', '紫外线过滤器']
    },
    {
      iconSlug: 'sun',
      title: '特殊结构',
      slug: 'eidikes-kataskeves',
      description: '雨棚、楼梯、地板以及您空间所需的任何其他玻璃结构。',
      image: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&q=80&w=1000',
      delay: 450,
      category: 'Special',
      features: ['应用研究', '结构充分性', '独特设计', '认证材料']
    },
    {
      iconSlug: 'lock',
      title: '安全玻璃',
      slug: 'security-glass',
      description: '用于银行、珠宝店和高安全性住宅的防弹和防破坏玻璃。',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      delay: 500,
      category: 'Safety',
      features: ['防弹认证', '多层层压', '无失真', '抗冲击']
    },
    {
      iconSlug: 'copy',
      title: '镜子',
      slug: 'kathreptes',
      description: '适合各种用途的高品质镜子，可选配 LED 照明和定制形状。',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000',
      delay: 550,
      category: 'Interior',
      features: ['清晰成像', '防潮', 'LED 背光', 'CNC 切割']
    },
    {
      iconSlug: 'eye',
      title: '智能玻璃 (PDLC)',
      slug: 'smart-glass',
      description: '只需按一下按钮，玻璃即可从透明变为不透明。按需隐私。',
      image: 'https://images.unsplash.com/photo-1497215842964-2227430d3d1f?auto=format&fit=crop&q=80&w=1000',
      delay: 600,
      category: 'Systems',
      features: ['即时隐私', '节能', '可投影', '隔音']
    }
  ],
  ar: [
    {
      iconSlug: 'layers',
      title: 'ألواح زجاجية',
      slug: 'yalo-pinakes',
      description: 'زجاج عالي الجودة لكل الاستخدامات المنزلية والمهنية.',
      image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=1000',
      delay: 50,
      category: 'Structural',
      features: ['متانة عالية', 'قص حسب المقاس', 'حماية UV', 'عزل صوتي']
    },
    {
      iconSlug: 'maximize',
      title: 'أنظمة منزلقة وقابلة للطي',
      slug: 'syromenes-fysounes',
      description: 'أنظمة أبواب منزلقة وقابلة للطي بتصاميم بسيطة لأقصى قدر من الوضوح والرحابة.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      delay: 100,
      category: 'Systems',
      features: ['إطارات نحيفة', 'انزلاق سلس', 'عزل حراري', 'رؤية سلسة', 'أقصى فتحة']
    },
    {
      iconSlug: 'shield',
      title: 'درابزين زجاجي',
      slug: 'gyalina-kagkela',
      description: 'درابزين كريستالي يوفر الأمان دون حجب الرؤية. مثالي للشرفات والسلالم.',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1000',
      delay: 150,
      category: 'Structural',
      features: ['بدون إطار', 'أمان ثلاثي الطبقات', 'مقاوم للتآكل', 'تثبيت مخصص']
    },
    {
      iconSlug: 'zap',
      title: 'زجاج موفر للطاقة',
      slug: 'energeiaka-tzamia',
      description: 'تقنية Low-E حديثة لأقصى توفير للطاقة وراحة حرارية شتاءً وصيفاً.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      delay: 200,
      category: 'Energy',
      features: ['طلاء Low-E', 'خفض التكاليف', 'راحة حرارية', 'الحد من الأشعة فوق البنفسجية']
    },
    {
      iconSlug: 'layout',
      title: 'قواطع زجاجية',
      slug: 'gyalina-xwrismata',
      description: 'قواطع داخلية للمكاتب والمنازل. حافظ على السطوع مع عزل صوتي كامل.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      delay: 250,
      category: 'Interior',
      features: ['عزل صوتي', 'تصميم بسيط', 'ألوان متعددة', 'سهولة التركيب']
    },
    {
      iconSlug: 'doorOpen',
      title: 'أبواب زجاجية',
      slug: 'gyalines-portes',
      description: 'أبواب تفتح وتنزلق بآليات حديثة وجماليات بسيطة.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      delay: 300,
      category: 'Interior',
      features: ['تشغيل صامت', 'أمان', 'تصاميم مخصصة', 'مفصلات متينة']
    },
    {
      iconSlug: 'shower',
      title: 'كبائن استحمام',
      slug: 'kampines-ntouz',
      description: 'تجهيزات مخصصة لحمامك من زجاج الأمان ومواد عالية المتانة.',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1000',
      delay: 350,
      category: 'Interior',
      features: ['زجاج أمان Securit', 'سهلة التنظيف', 'أجزاء مقاومة للصدأ', 'مقاومة للماء']
    },
    {
      iconSlug: 'store',
      title: 'واجهات المحلات',
      slug: 'vitrines',
      description: 'واجهات محلات احترافية لأقصى رؤية وأمان.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
      delay: 400,
      category: 'Commercial',
      features: ['وضوح عالي', 'مقاومة للتخريب', 'أبعاد كبيرة', 'مرشحات UV']
    },
    {
      iconSlug: 'sun',
      title: 'إنشاءات خاصة',
      slug: 'eidikes-kataskeves',
      description: 'مظلات، سلالم، أرضيات، وأي إنشاءات زجاجية أخرى يتطلبها مساحتك.',
      image: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&q=80&w=1000',
      delay: 450,
      category: 'Special',
      features: ['دراسة تطبيقية', 'كفاءة هيكلية', 'تصميم فريد', 'مواد معتمدة']
    },
    {
      iconSlug: 'lock',
      title: 'زجاج أمني',
      slug: 'security-glass',
      description: 'زجاج مضاد للرصاص والتخريب للبنوك ومتاجر المجوهرات والمنازل عالية الأمان.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      delay: 500,
      category: 'Safety',
      features: ['شهادة ضد الرصاص', 'متعدد الطبقات', 'بدون تشويه', 'مقاومة الصدمات']
    },
    {
      iconSlug: 'copy',
      title: 'مرايا',
      slug: 'kathreptes',
      description: 'مرايا عالية الجودة لكل استخدام، مع إضاءة LED اختيارية وأشكال مخصصة.',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000',
      delay: 550,
      category: 'Interior',
      features: ['وضوح', 'مقاومة للرطوبة', 'إضاءة خلفية LED', 'قص CNC']
    },
    {
      iconSlug: 'eye',
      title: 'زجاج ذكي (PDLC)',
      slug: 'smart-glass',
      description: 'زجاج يتحول من شفاف إلى معتم بضغطة زر. خصوصية عند الطلب.',
      image: 'https://images.unsplash.com/photo-1497215842964-2227430d3d1f?auto=format&fit=crop&q=80&w=1000',
      delay: 600,
      category: 'Systems',
      features: ['خصوصية فورية', 'موفر للطاقة', 'قابل للعرض عليه', 'عزل صوتي']
    }
  ]
};

// Fallback to English if translation missing or map other items
export const getServicesData = (lang: string = 'el'): Service[] => {
  return servicesData[lang] || servicesData['en'];
};

export const getServiceBySlug = (slug: string, lang: string = 'el'): Service | undefined => {
  const list = getServicesData(lang);
  return list.find(s => s.slug === slug) || getServicesData('en').find(s => s.slug === slug);
};
