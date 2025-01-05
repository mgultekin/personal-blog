export interface BlogPost {
  id: string;
  date: string;
  category: {
    id: string;
    tr: string;
    en: string;
  };
  readingTime: {
    tr: string;
    en: string;
  };
  translations: {
    tr: {
      title: string;
      excerpt: string;
      content: string;
    };
    en: {
      title: string;
      excerpt: string;
      content: string;
    };
  };
  thumbnail: string;
  mediumUrl: string;
}

export const categories = [
  {
    id: "ai-cv",
    tr: "Yapay Zeka & Bilgisayarlı Görü",
    en: "AI & Computer Vision"
  },
  {
    id: "personal-growth",
    tr: "Kişisel Gelişim",
    en: "Personal Growth"
  },
  {
    id: "politics",
    tr: "Politika",
    en: "Politics"
  },
  {
    id: "social",
    tr: "Sosyal",
    en: "Social"
  }
];

export const posts: BlogPost[] = [
  {
    id: "vision-transformers",
    date: "10 Eylül 2022",
    category: {
      id: "ai-cv",
      tr: "Yapay Zeka & Bilgisayarlı Görü",
      en: "AI & Computer Vision"
    },
    readingTime: {
      tr: "11 dk okuma",
      en: "11 min read"
    },
    translations: {
      tr: {
        title: "Vision Transformers'a Genel Bakış",
        excerpt: "Transformerlar bilgisayarlı görüde nasıl çığır açıyor?",
        content: `Derin öğrenmedeki transformerların tarihinde, her şey 2017'de yayınlanan ünlü 'Attention Is All You Need' makalesi ile başladı. Google Brain ekibi, Transformer kullanarak Doğal Dil İşleme (NLP) alanının kaderini değiştiren araştırmalarını yayınladı.

Aynı tekniği görüntüler üzerinde kullanma fikri, görü teknolojisinde yeni bir çağın kapısını açmış olabilir...

Bu yazıda, araştırmalarımdan yola çıkarak vision transformerlar hakkında genel bir bakış hazırladım. Öğrenme sürecim boyunca, transformerları anlamak için bu soruları cevaplamak üzere bazı notlar özetledim:

— Transformer nedir ve derin öğrenmede neden kullanılır?
— Transformer görüye neden ve nasıl uygulanır?
— Vision Transformerlar ile CNN'ler arasındaki farklar nelerdir?
— Transformer nesne tespitinde nasıl kullanılır?
— Vision Transformerlar üretime hazır mı?

Bu notlar özellikle transformerları çok duymuş ama henüz başlayamamış olanlar için faydalı olacaktır.`
      },
      en: {
        title: "Overview Of Vision Transformers",
        excerpt: "How are Transformers the next breakthrough in computer vision?",
        content: `In the history of transformers in deep learning, everything started with the famous paper 'Attention Is All You Need' in 2017. Google Brain team has published their research which changes the destiny of Natural Language Processing(NLP) by using Transformer.

The idea of using the same technique on images may have opened the door to a new era in vision technology...

In this post, I have prepared a general overview of vision transformers from my research. During my learning process, I summarized some notes to answer these questions to understand transformers:

— What is Transformer, and why is it used in deep learning?
— Why and How is Transformer applied to vision?
— What are the differences between Vision Transformers and CNNs?
— How is Transformer used in object detection?
— Are Vision Transformers ready for production?

These notes would be useful, especially for the ones who have heard transformers a lot but could not start yet.`
      }
    },
    thumbnail: "/images/vision-transformers.jpg",
    mediumUrl: "https://medium.com/towards-artificial-intelligence/overview-of-vision-transformers-is-all-you-need-88727438ff8d"
  },
  {
    id: "bytetrack",
    date: "28 Nisan 2022",
    category: {
      id: "ai-cv",
      tr: "Yapay Zeka & Bilgisayarlı Görü",
      en: "AI & Computer Vision"
    },
    readingTime: {
      tr: "5 dk okuma",
      en: "5 min read"
    },
    translations: {
      tr: {
        title: "ByteTrack Hakkında Bilmeniz Gereken Her Şey",
        excerpt: "BYTE yöntemi ve ByteTrack izleme hakkında kapsamlı bir inceleme",
        content: `Bu yazının amacı, çoğunlukla akademik makalelerinden yararlanarak BYTE yöntemi ve ByteTrack izleme hakkında size bilgi vermektir. Bu yazı, izleme algoritmalarını kullanmanız gerektiğinde gelecekteki araştırmalarınız için faydalı bir rehber ve referans olabilir.

ByteTrack hakkındaki temel teknik detaylar aşağıda açıklanmıştır. Ayrıca, izleyicinin demo sonuçları ve uygulama detayları yazının sonunda bulunabilir.

Nesne İzleyiciler

Bilgisayarlı görü alanında farklı son teknoloji nesne izleme yöntemleri bulunmaktadır. ByteTrack makalesinde de bahsedilen bu iyi bilinen son teknoloji yöntemlerden bazılarını şöyle sıralayabiliriz:

● JDE
● CSTrack
● FairMOT
● TraDes
● QuasiDense
● CenterTrack
● CTracker
● TransTrack
● MOTR

Bu yöntemler izleme için farklı teknikler kullanır. Çoğu, gerçek hayat senaryolarının neden olduğu nesne izleme zorluklarına kendi teknik çözümlerini sunar...`
      },
      en: {
        title: "All You Need to Know About ByteTrack Tracker",
        excerpt: "A comprehensive review of the BYTE method and ByteTrack tracking",
        content: `The purpose of this post is to give you knowledge about the BYTE method and ByteTrack tracking by examining research mostly from their academic paper. This post can be a useful guide and reference for your next research in case of the need for usage tracking algorithms.

Key technical details about the ByteTrack have been detailed below. Also, demo results and implementation details about the tracker can be found at the end.

Object Trackers

There are different state-of-the-art object tracking methods in the computer vision area. We can list some of these well-known state-of-the-art methods which are also mentioned in the ByteTrack paper as:

● JDE
● CSTrack
● FairMOT
● TraDes
● QuasiDense
● CenterTrack
● CTracker
● TransTrack
● MOTR

These methods use different techniques for tracking. Most of them offer their own technical solution for object tracking challenges caused by real-life scenarios...`
      }
    },
    thumbnail: "/images/bytetrack.jpg",
    mediumUrl: "https://medium.com/@mustafagultekinn01/all-you-need-to-know-about-bytetrack-tracker-5cda1c039fa4"
  }
]; 