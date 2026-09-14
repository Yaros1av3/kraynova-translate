'use client';

import { useState, useEffect } from 'react';
import { Lang } from './types';
import { content, initialTestimonials } from './data/content';

import FloatingButtons from './components/FloatingButtons';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import About from './components/About';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import TestimonialModal from './components/TestimonialModal';

interface ClientPageProps {
  /** Язык, с которым страница отрисована на сервере (по ?lang= или Accept-Language) */
  initialLang: Lang;
  /** Заполнено, только если ?lang= был передан явно в URL */
  queryLang?: Lang;
}

export default function ClientPage({ initialLang, queryLang }: ClientPageProps) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [testimonialSubmitted, setTestimonialSubmitted] = useState(false);
  const [testimonialLoading, setTestimonialLoading] = useState(false);

  const t = content[lang];

  useEffect(() => {
    if (queryLang) {
      // Явный ?lang= в URL — запоминаем выбор пользователя и не трогаем его дальше.
      localStorage.setItem('kraynova_lang', queryLang);
      return;
    }
    // Без явного параметра — уважаем ранее сохранённый выбор пользователя,
    // если он есть (initialLang уже корректен для первого визита за счёт SSR).
    const savedLang = localStorage.getItem('kraynova_lang');
    if (savedLang === 'ru' || savedLang === 'de') {
      setLang(savedLang);
    }
  }, [queryLang]);

  const handleLangToggle = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('kraynova_lang', newLang);
  };

  const handleOpenModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    } else if (t.services.length > 0) {
      setSelectedService(t.services[0].title);
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "840dab42-85c7-41ad-8f05-775b94b4c568");
    formData.append("subject", "Новая заявка с сайта Kraynova Translate");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setIsModalOpen(false);
        }, 3000);
      } else {
        alert("Произошла ошибка при отправке. Попробуйте еще раз.");
      }
    } catch (error) {
      alert("Ошибка сети. Проверьте подключение к интернету.");
    } finally {
      setLoading(false);
    }
  };

  // Отзыв отправляется только автору сайта на модерацию (по e-mail через Web3Forms).
  // Он НЕ публикуется автоматически на сайте — чтобы не показывать посетителю
  // неправду о том, что отзыв уже виден всем остальным.
  const handleAddTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) return;
    setTestimonialLoading(true);

    try {
      const reviewData = new FormData();
      reviewData.append("access_key", "840dab42-85c7-41ad-8f05-775b94b4c568");
      reviewData.append("subject", "Новый отзыв с сайта Kraynova Translate (на модерацию)");
      reviewData.append("name", newReviewName);
      reviewData.append("message", newReviewText);
      await fetch("https://api.web3forms.com/submit", { method: "POST", body: reviewData });
    } catch (err) {
      // даже при сбое сети не блокируем UX — заявка всё равно придёт на почту в большинстве случаев
    }

    setTestimonialLoading(false);
    setTestimonialSubmitted(true);
    setTimeout(() => {
      setTestimonialSubmitted(false);
      setIsTestimonialModalOpen(false);
      setNewReviewName('');
      setNewReviewText('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 font-sans selection:bg-amber-500 selection:text-black antialiased relative pb-20 sm:pb-0">
      <FloatingButtons phoneHref={t.phoneHref} />

      <Header
        lang={lang}
        t={t}
        onLangToggle={handleLangToggle}
        onOpenModal={() => handleOpenModal()}
      />

      <Hero lang={lang} t={t} onOpenModal={() => handleOpenModal()} />

      <Services t={t} onSelectService={(title) => handleOpenModal(title)} />

      <Steps t={t} />

      <Testimonials
        t={t}
        testimonials={initialTestimonials}
        onAddClick={() => setIsTestimonialModalOpen(true)}
      />

      <Faq t={t} />

      <About t={t} />

      <Footer t={t} />

      <ContactModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        t={t}
        lang={lang}
        selectedService={selectedService}
        onSelectedServiceChange={setSelectedService}
        submitted={submitted}
        loading={loading}
        onSubmit={handleSubmit}
      />

      <TestimonialModal
        open={isTestimonialModalOpen}
        onClose={() => setIsTestimonialModalOpen(false)}
        t={t}
        name={newReviewName}
        onNameChange={setNewReviewName}
        text={newReviewText}
        onTextChange={setNewReviewText}
        onSubmit={handleAddTestimonial}
        submitted={testimonialSubmitted}
        loading={testimonialLoading}
      />
    </div>
  );
}