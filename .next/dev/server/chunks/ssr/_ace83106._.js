module.exports = [
"[project]/src/data/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "getServicesData",
    ()=>getServicesData
]);
const servicesData = {
    el: [
        {
            iconSlug: 'layers',
            title: 'Υαλοπίνακες',
            slug: 'yalo-pinakes',
            description: 'Κορυφαία ποιότητα υαλοπινάκων για κάθε οικιακή και επαγγελματική χρήση. Ενεργειακοί, ασφαλείας, και ηχομονωτικοί.',
            image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=1000',
            delay: 50,
            category: 'Structural',
            features: [
                'Υψηλή αντοχή',
                'Κοπή στα μέτρα σας',
                'Προστασία UV',
                'Ηχομόνωση',
                'Ενεργειακή απόδοση'
            ]
        },
        {
            iconSlug: 'maximize',
            title: 'Συρόμενες & Φυσούνες',
            slug: 'syromenes-fysounes',
            description: 'Minimal συστήματα συρόμενων θυρών και φυσούνες για μέγιστη διαύγεια και άνοιγμα στο χώρο σας.',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
            delay: 100,
            category: 'Systems',
            features: [
                'Λεπτά πλαίσια',
                'Ομαλή κύλιση',
                'Θερμοδιακοπή',
                'Αδιάλειπτη θέα',
                'Μέγιστο άνοιγμα'
            ]
        },
        {
            iconSlug: 'shield',
            title: 'Γυάλινα Κάγκελα',
            slug: 'gyalina-kagkela',
            description: 'Κρυστάλλινα στηθαία που προσφέρουν ασφάλεια χωρίς να εμποδίζουν τη θέα. Ιδανικά για μπαλκόνια και σκάλες.',
            image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1000',
            delay: 150,
            category: 'Structural',
            features: [
                'Χωρίς κολώνες',
                'Triplex ασφαλείας',
                'Αντοχή στη διάβρωση',
                'Ειδικές βάσεις στήριξης'
            ]
        },
        {
            iconSlug: 'zap',
            title: 'Ενεργειακά Τζάμια',
            slug: 'energeiaka-tzamia',
            description: 'Σύγχρονη τεχνολογία low-e για μέγιστη εξοικονόμηση ενέργειας και θερμική άνεση χειμώνα-καλοκαίρι.',
            image: 'https://images.unsplash.com/photo-1556912173-3db996e160d7?auto=format&fit=crop&q=80&w=1000',
            delay: 200,
            category: 'Energy',
            features: [
                'Low-E επίστρωση',
                'Μείωση δαπανών',
                'Θερμική άνεση',
                'Περιορισμός UV'
            ]
        },
        {
            iconSlug: 'layout',
            title: 'Γυάλινα Χωρίσματα',
            slug: 'gyalina-xwrismata',
            description: 'Διαχωριστικά εσωτερικού χώρου για γραφεία και κατοικίες. Διατηρήστε τη φωτεινότητα με απόλυτη ηχομόνωση.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
            delay: 250,
            category: 'Interior',
            features: [
                'Ηχομόνωση',
                'Minimal σχεδιασμός',
                'Διάφορες αποχρώσεις',
                'Εύκολη εγκατάσταση'
            ]
        },
        {
            iconSlug: 'doorOpen',
            title: 'Γυάλινες Πόρτες',
            slug: 'gyalines-portes',
            description: 'Πόρτες ανοιγόμενες και συρόμενες με σύγχρονους μηχανισμούς και minimal αισθητική.',
            image: 'https://images.unsplash.com/photo-1595515106967-1b035dd0e6f2?auto=format&fit=crop&q=80&w=1000',
            delay: 300,
            category: 'Interior',
            features: [
                'Αθόρυβη λειτουργία',
                'Ασφάλεια',
                'Custom σχέδια',
                'Ανθεκτικοί μεντεσέδες'
            ]
        },
        {
            iconSlug: 'shower',
            title: 'Καμπίνες Ντουζ',
            slug: 'kampines-ntouz',
            description: 'Custom κατασκευές για το μπάνιο σας με κρύσταλλα ασφαλείας και υλικά υψηλής αντοχής.',
            image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000',
            delay: 350,
            category: 'Interior',
            features: [
                'Ασφαλείας Securit',
                'Εύκολος καθαρισμός',
                'Ανοξείδωτα εξαρτήματα',
                'Στεγανότητα'
            ]
        },
        {
            iconSlug: 'store',
            title: 'Βιτρίνες Καταστημάτων',
            slug: 'vitrines',
            description: 'Επαγγελματικές όψεις καταστημάτων για μέγιστη προβολή και ασφάλεια.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
            delay: 400,
            category: 'Commercial',
            features: [
                'Υψηλή διαύγεια',
                'Αντιβανδαλιστικά',
                'Μεγάλες διαστάσεις',
                'UV φίλτρα'
            ]
        },
        {
            iconSlug: 'sun',
            title: 'Ειδικές Κατασκευές',
            slug: 'eidikes-kataskeves',
            description: 'Στέγαστρα, σκάλε, πατώματα και οποιαδήποτε άλλη γυάλινη κατασκευή απαιτεί ο χώρος σας.',
            image: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&q=80&w=1000',
            delay: 450,
            category: 'Special',
            features: [
                'Μελέτη εφαρμογής',
                'Στατική επάρκεια',
                'Μοναδικό design',
                'Πιστοποιημένα υλικά'
            ]
        },
        {
            iconSlug: 'lock',
            title: 'Security Glass',
            slug: 'security-glass',
            description: 'Αλεξίσφαιρα και αντιβανδαλιστικά τζάμια για τράπεζες, κοσμηματοπωλεία και οικίες υψηλής ασφαλείας.',
            image: 'https://images.unsplash.com/photo-1590486803247-497793d5fba2?auto=format&fit=crop&q=80&w=1000',
            delay: 500,
            category: 'Safety',
            features: [
                'Πιστοποίηση Bullet-proof',
                'Πολυστρωματικά',
                'Χωρίς παραμόρφωση',
                'Αντοχή σε κρούση'
            ]
        },
        {
            iconSlug: 'copy',
            title: 'Καθρέπτες',
            slug: 'kathreptes',
            description: 'Καθρέπτες υψηλής ποιότητας για κάθε χρήση, με δυνατότητα φωτισμού LED και ειδικών σχημάτων.',
            image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000',
            delay: 550,
            category: 'Interior',
            features: [
                'Διαύγεια ειδώλου',
                'Αντοχή στην υγρασία',
                'LED φωτισμός Backlit',
                'Κοπή CNC'
            ]
        },
        {
            iconSlug: 'eye',
            title: 'Έξυπνο Γυαλί (PDLC)',
            slug: 'smart-glass',
            description: 'Γυαλί που αλλάζει από διάφανο σε αδιαφανές με το πάτημα ενός κουμπιού. Ιδιωτικότητα on-demand.',
            image: 'https://images.unsplash.com/photo-1558442074-3c19857bc1d7?auto=format&fit=crop&q=80&w=1000',
            delay: 600,
            category: 'Systems',
            features: [
                'Instant Privacy',
                'Ενεργειακό',
                'Λειτουργεί ως οθόνη',
                'Ηχομόνωση'
            ]
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
            features: [
                'High durability',
                'Custom cutting',
                'UV Protection',
                'Sound Insulation',
                'Energy Efficient'
            ]
        },
        {
            iconSlug: 'maximize',
            title: 'Sliding & Folding',
            slug: 'syromenes-fysounes',
            description: 'Minimal sliding door systems and bi-folds for maximum clarity and opening in your space.',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
            delay: 100,
            category: 'Systems',
            features: [
                'Slim frames',
                'Smooth gliding',
                'Thermal break',
                'Seamless view',
                'Max opening'
            ]
        },
        {
            iconSlug: 'shield',
            title: 'Glass Railings',
            slug: 'gyalina-kagkela',
            description: 'Crystal balustrades offering safety without obstructing the view. Ideal for balconies and stairs.',
            image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1000',
            delay: 150,
            category: 'Structural',
            features: [
                'Frameless',
                'Safety Triplex',
                'Corrosion resistant',
                'Custom mounts'
            ]
        },
        {
            iconSlug: 'zap',
            title: 'Energy Glass',
            slug: 'energeiaka-tzamia',
            description: 'Modern low-e technology for maximum energy savings and thermal comfort winter-summer.',
            image: 'https://images.unsplash.com/photo-1556912173-3db996e160d7?auto=format&fit=crop&q=80&w=1000',
            delay: 200,
            category: 'Energy',
            features: [
                'Low-E Coating',
                'Cost Reduction',
                'Thermal Comfort',
                'UV Limitation'
            ]
        },
        {
            iconSlug: 'layout',
            title: 'Glass Partitions',
            slug: 'gyalina-xwrismata',
            description: 'Interior partitions for offices and homes. Maintain brightness with absolute sound insulation.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
            delay: 250,
            category: 'Interior',
            features: [
                'Soundproofing',
                'Minimal Design',
                'Various Tints',
                'Easy Installation'
            ]
        },
        {
            iconSlug: 'doorOpen',
            title: 'Glass Doors',
            slug: 'gyalines-portes',
            description: 'Opening and sliding doors with modern mechanisms and minimal aesthetics.',
            image: 'https://images.unsplash.com/photo-1595515106967-1b035dd0e6f2?auto=format&fit=crop&q=80&w=1000',
            delay: 300,
            category: 'Interior',
            features: [
                'Silent Operation',
                'Safety',
                'Custom Designs',
                'Durable Hinges'
            ]
        },
        {
            iconSlug: 'shower',
            title: 'Shower Cabins',
            slug: 'kampines-ntouz',
            description: 'Custom constructions for your bathroom with safety crystals and high-durability materials.',
            image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000',
            delay: 350,
            category: 'Interior',
            features: [
                'Securit Safety',
                'Easy Clean',
                'Stainless Parts',
                'Waterproof'
            ]
        },
        {
            iconSlug: 'store',
            title: 'Shop Fronts',
            slug: 'vitrines',
            description: 'Professional shop facades for maximum visibility and security.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
            delay: 400,
            category: 'Commercial',
            features: [
                'High Clarity',
                'Vandal Proof',
                'Large Dimensions',
                'UV Filters'
            ]
        },
        {
            iconSlug: 'sun',
            title: 'Special Constructions',
            slug: 'eidikes-kataskeves',
            description: 'Canopies, stairs, floors, and any other glass construction your space requires.',
            image: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&q=80&w=1000',
            delay: 450,
            category: 'Special',
            features: [
                'App Study',
                'Structural Adequacy',
                'Unique Design',
                'Certified Materials'
            ]
        },
        {
            iconSlug: 'lock',
            title: 'Security Glass',
            slug: 'security-glass',
            description: 'Bulletproof and vandal-proof glass for banks, jewelry stores, and high-security homes.',
            image: 'https://images.unsplash.com/photo-1590486803247-497793d5fba2?auto=format&fit=crop&q=80&w=1000',
            delay: 500,
            category: 'Safety',
            features: [
                'Bullet-proof Cert',
                'Multi-laminate',
                'No Distortion',
                'Impact Resistance'
            ]
        },
        {
            iconSlug: 'copy',
            title: 'Mirrors',
            slug: 'kathreptes',
            description: 'High-quality mirrors for every use, with optional LED lighting and custom shapes.',
            image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000',
            delay: 550,
            category: 'Interior',
            features: [
                'Clarity',
                'Moisture Resistant',
                'LED Backlit',
                'CNC Cutting'
            ]
        },
        {
            iconSlug: 'eye',
            title: 'Smart Glass (PDLC)',
            slug: 'smart-glass',
            description: 'Glass that changes from transparent to opaque with the push of a button. Privacy on-demand.',
            image: 'https://images.unsplash.com/photo-1558442074-3c19857bc1d7?auto=format&fit=crop&q=80&w=1000',
            delay: 600,
            category: 'Systems',
            features: [
                'Instant Privacy',
                'Energy Efficient',
                'Projectable',
                'Soundproofing'
            ]
        }
    ],
    ru: [
        {
            iconSlug: 'layers',
            title: 'Стеклопакеты',
            slug: 'yalo-pinakes',
            description: 'Высококачественное стекло для любых целей.',
            image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=1000',
            delay: 50,
            category: 'Structural',
            features: [
                'Высокая прочность',
                'Резка по размеру',
                'Защита от УФ',
                'Звукоизоляция'
            ]
        }
    ],
    zh: [
        {
            iconSlug: 'layers',
            title: '玻璃面板',
            slug: 'yalo-pinakes',
            description: '适合各种家庭和专业用途的顶级玻璃面板。',
            image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=1000',
            delay: 50,
            category: 'Structural',
            features: [
                '高耐用性',
                '定制切割',
                '紫外线防护',
                '隔音'
            ]
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
            features: [
                'متانة عالية',
                'قص حسب المقاس',
                'حماية UV',
                'عزل صوتي'
            ]
        }
    ]
};
const getServicesData = (lang = 'el')=>{
    return servicesData[lang] || servicesData['en'];
};
const getServiceBySlug = (slug, lang = 'el')=>{
    const list = getServicesData(lang);
    return list.find((s)=>s.slug === slug) || getServicesData('en').find((s)=>s.slug === slug);
};
}),
"[project]/src/components/Services/ServiceSearch.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
'use client';
;
;
const ServiceSearch = ({ categories, activCategory, onCategoryChange, searchTerm, onSearchChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto mb-16 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "h-5 w-5 text-black/40 group-focus-within:text-black transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Services/ServiceSearch.tsx",
                            lineNumber: 12,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Services/ServiceSearch.tsx",
                        lineNumber: 11,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: searchTerm,
                        onChange: (e)=>onSearchChange(e.target.value),
                        placeholder: "Αναζήτηση υπηρεσιών...",
                        className: "block w-full pl-16 pr-6 py-4 bg-white border border-black/5 rounded-full text-black placeholder-black/30 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 shadow-sm transition-all duration-300 hover:shadow-md"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Services/ServiceSearch.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Services/ServiceSearch.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onCategoryChange('ALL'),
                        className: `px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activCategory === 'ALL' ? 'bg-black text-white border-black' : 'bg-white text-black/60 border-black/5 hover:border-black/20 hover:text-black'}`,
                        children: "ΟΛΑ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Services/ServiceSearch.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onCategoryChange(cat),
                            className: `px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activCategory === cat ? 'bg-black text-white border-black' : 'bg-white text-black/60 border-black/5 hover:border-black/20 hover:text-black'}`,
                            children: cat
                        }, cat, false, {
                            fileName: "[project]/src/components/Services/ServiceSearch.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Services/ServiceSearch.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Services/ServiceSearch.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ServiceSearch;
}),
"[project]/src/components/Services/EnhancedServiceCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
;
;
;
const EnhancedServiceCard = ({ service })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group bg-white rounded-[32px] overflow-hidden border border-black/5 hover:border-soft-pink hover:shadow-xl transition-all duration-500 flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-64 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: service.image,
                        alt: service.title,
                        className: "w-full h-full object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-bold uppercase tracking-widest text-black/60",
                            children: service.category
                        }, void 0, false, {
                            fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 flex flex-col flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-heading font-bold text-black mb-3 group-hover:text-black/80 transition-colors",
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black/60 text-sm leading-relaxed font-sans",
                                children: service.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 mb-8 flex-grow",
                        children: service.features && service.features.slice(0, 3).map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 16,
                                        className: "text-black/40 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-black/70 font-medium",
                                        children: feature
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                                        lineNumber: 38,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/service/${service.slug}`,
                        className: "mt-auto flex items-center justify-between w-full py-4 px-6 rounded-2xl bg-soft-white group-hover:bg-black group-hover:text-white transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold uppercase tracking-widest",
                                children: "Περισσότερα"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 16,
                                className: "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Services/EnhancedServiceCard.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = EnhancedServiceCard;
}),
"[project]/src/app/services/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Services$2f$ServiceSearch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Services/ServiceSearch.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Services$2f$EnhancedServiceCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Services/EnhancedServiceCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/translations.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ServicesPage() {
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language].services;
    const allServices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getServicesData"])(language);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ALL');
    // Extract unique categories
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const cats = allServices.map((s)=>s.category).filter(Boolean);
        return [
            ...new Set(cats)
        ];
    }, [
        allServices
    ]);
    // Filter Logic
    const filteredServices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return allServices.filter((service)=>{
            const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category === 'ALL' || service.category === category;
            return matchesSearch && matchesCategory;
        });
    }, [
        searchTerm,
        category,
        allServices,
        language
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-32 pb-24 min-h-screen bg-soft-white text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto px-6 mb-20 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-black/40 text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block animate-slide-up",
                        children: "Our Expertise"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-7xl font-heading font-black tracking-tighter text-black mb-8 animate-slide-up",
                        style: {
                            animationDelay: '100ms'
                        },
                        children: [
                            t.title,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-black/30 italic font-serif",
                                children: t.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 41,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl mx-auto text-black/60 text-lg leading-relaxed animate-slide-up",
                        style: {
                            animationDelay: '200ms'
                        },
                        children: t.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 animate-slide-up",
                style: {
                    animationDelay: '300ms'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Services$2f$ServiceSearch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    categories: categories,
                    activCategory: category,
                    onCategoryChange: setCategory,
                    searchTerm: searchTerm,
                    onSearchChange: setSearchTerm
                }, void 0, false, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto px-6",
                children: filteredServices.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: filteredServices.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-scale-in",
                            style: {
                                animationDelay: `${idx * 50}ms`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Services$2f$EnhancedServiceCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                service: service
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 65,
                                columnNumber: 33
                            }, this)
                        }, service.slug, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 64,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 62,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-24 text-black/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: t.no_results
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 71,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setCategory('ALL');
                                setSearchTerm('');
                            },
                            className: "mt-4 text-xs font-bold uppercase tracking-widest text-black underline",
                            children: t.clear_filters
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 72,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 70,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheck
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_ace83106._.js.map