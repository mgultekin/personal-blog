// Client-side rendering için gerekli direktif
'use client';

// Gerekli modül ve bileşen importları
import { posts, categories } from "../data/posts";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import Header from "../components/Header";
import { useState } from "react";

// Ana sayfa bileşeni
export default function Home() {
  // Dil context'inden mevcut dil bilgisini al
  const { language } = useLanguage();
  // Seçili kategori state'i
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Seçili kategoriye göre blog yazılarını filtrele
  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category.id === selectedCategory)
    : posts;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header bileşeni - Başlık ve açıklama çift dilli olarak tanımlanmış */}
      <Header 
        title={{
          tr: "Mustafa Gültekin",
          en: "Mustafa Gultekin"
        }}
        description={{
          tr: "Yazılım Geliştirme ve Teknoloji Üzerine Düşünceler",
          en: "Thoughts on Software Development and Technology"
        }}
      />

      {/* Kategori filtreleme bölümü */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {/* Tüm kategorileri göster butonu */}
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${!selectedCategory
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
            >
              {language === 'tr' ? 'Tümü' : 'All'}
            </button>
            {/* Kategori butonları */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                  ${selectedCategory === category.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
              >
                {category[language]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog yazıları listesi */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-8">
          {/* Her bir blog yazısı için kart bileşeni */}
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                {/* Blog yazısı kapak resmi */}
                <div className="relative h-48 w-full">
                  <Link href={`/post/${post.id}`} className="block">
                    <Image
                      src={post.thumbnail}
                      alt={post.translations[language].title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>
                {/* Blog yazısı içerik bölümü */}
                <div className="p-6">
                  {/* Kategori ve okuma süresi */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full">
                      {post.category[language]}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readingTime[language]}
                    </span>
                  </div>
                  {/* Blog yazısı başlık ve özet */}
                  <Link href={`/post/${post.id}`} className="block group">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                      {post.translations[language].title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.translations[language].excerpt}
                    </p>
                  </Link>
                  {/* Tarih ve Medium linki */}
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
                    {post.mediumUrl && (
                      <Link
                        href={post.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                      >
                        {language === 'tr' ? 'Medium\'da Oku →' : 'Read on Medium →'}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
