export interface AdvantageItem {
  title: string;
  description: string;
  icon: string;
}

export const advantageData: AdvantageItem[] = [
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
];

export const getAdvantageData = (): AdvantageItem[] => advantageData;
