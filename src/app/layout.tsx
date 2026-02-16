import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata = {
    title: 'DG Glass Systems | Architectural Glass Solutions',
    description: 'Premium architectural glass installations, from bespoke residential projects to large-scale commercial facades.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="el">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@400;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet" />
            </head>
            <body className="bg-soft-white text-black font-sans antialiased overflow-x-hidden selection:bg-black selection:text-white">
                <LanguageProvider>
                    <Navigation />
                    <main>{children}</main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}
