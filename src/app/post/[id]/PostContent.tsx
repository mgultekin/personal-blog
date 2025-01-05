'use client';

import React from "react";
import { posts } from "../../../data/posts";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";
import Header from "../../../components/Header";

interface PostContentProps {
  params: {
    id: string;
  };
}

export default function PostContent({ params }: PostContentProps) {
  const { language } = useLanguage();
  const post = posts.find((p) => p.id === params.id)!;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative">
        <div className="relative h-[60vh] w-full">
          <Image
            src={post.thumbnail}
            alt={post.translations[language].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="absolute inset-0">
          <div className="max-w-4xl mx-auto px-4">
            <Header
              title={{
                tr: "Mustafa Gültekin",
                en: "Mustafa Gultekin"
              }}
              description={{
                tr: "Yazılım Geliştirme ve Teknoloji Üzerine Düşünceler",
                en: "Thoughts on Software Development and Technology"
              }}
              isTransparent={true}
            />
            
            <div className="mt-16">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500 bg-opacity-50 text-white text-sm rounded-full">
                  {post.category[language]}
                </span>
                <span className="text-sm text-gray-300">
                  {post.readingTime[language]}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {post.translations[language].title}
              </h1>
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-300">
                  {post.date}
                </time>
                {post.mediumUrl && (
                  <Link
                    href={post.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 text-sm hover:underline"
                  >
                    {language === 'tr' ? 'Medium\'da Oku →' : 'Read on Medium →'}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="prose dark:prose-invert lg:prose-xl max-w-none">
            {post.translations[language].content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
} 