// Client-side rendering için gerekli direktif
'use client';

// Gerekli modül ve bileşen importları
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

// Header bileşeni için TypeScript interface tanımı
interface HeaderProps {
  title: {
    tr: string;  // Türkçe başlık
    en: string;  // İngilizce başlık
  };
  description: {
    tr: string;  // Türkçe açıklama
    en: string;  // İngilizce açıklama
  };
  isTransparent?: boolean;  // Arka planın şeffaf olup olmadığını belirten özellik
}

// Header bileşeni
export default function Header({ title, description, isTransparent = false }: HeaderProps) {
  // Dil context'inden mevcut dil ve dil değiştirme fonksiyonunu al
  const { language, setLanguage } = useLanguage();

  return (
    // Header container - Şeffaflık durumuna göre stil uygulanır
    <header className={`${isTransparent ? 'bg-transparent' : 'bg-white dark:bg-gray-800 shadow-sm'}`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-start mb-4">
          {/* Başlık ve açıklama bölümü */}
          <div>
            <h1 className={`text-4xl font-bold mb-2 ${isTransparent ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
              <Link href="/" className="hover:opacity-90 transition-opacity">
                {title[language]}
              </Link>
            </h1>
            <p className={`${isTransparent ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'}`}>
              {description[language]}
            </p>
          </div>
          {/* Dil değiştirme butonu */}
          <button
            onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
              ${isTransparent 
                ? 'bg-white/20 text-white hover:bg-white/30' 
                : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800'
              }`}
          >
            {language === 'tr' ? 'English' : 'Türkçe'}
          </button>
        </div>
      </div>
    </header>
  );
} 