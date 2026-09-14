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
import CookieBanner from './components/CookieBanner';
import ContactModal from './components/ContactModal';
import TestimonialModal from './components/TestimonialModal';

export default function ClientPage() {
  const [lang, setLang] = useState<Lang>('ru');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewText, setNewReviewText] = useState('');

  const t = content[lang];

  useEffect(() => {
    const savedLang = localStorage.getItem('kraynova_lang');
    if (!savedLang) {
      const browserLang = navigator.language || (navigator as any).languages?.[0];
      if (browserLang && browserLang.startsWith('de')) {
        setLang('de');
      } else {
        setLang('ru');
      }
    } else {
      setLang(savedLang as Lang);
    }

    const saved = localStorage.getItem('kraynova_testimonials');
    if (saved) {
      try {
        setTestimonials(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
    const cookieConsent = localStorage.getItem('kraynova_cookie_consent');
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleLangToggle = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('kraynova_lang', newLang);
  };

  const handleAcceptCookies = () => {
    localStorage.setItem('kraynova_cookie_consent', 'true');
    setShowCookieBanner(false);
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

  const handleAddTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) return;

    const updated = [{ name: newReviewName, text: newReviewText }, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('kraynova_testimonials', JSON.stringify(updated));

    try {
      const reviewData = new FormData();
      reviewData.append("access_key", "840dab42-85c7-41ad-8f05-775b94b4c568");
      reviewData.append("subject", "Новый отзыв с сайта Kraynova Translate");
      reviewData.append("name", newReviewName);
      reviewData.append("message", newReviewText);
      await fetch("https://api.web3forms.com/submit", { method: "POST", body: reviewData });
    } catch (err) {}

    setNewReviewName('');
    setNewReviewText('');
    setIsTestimonialModalOpen(false);
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
        testimonials={testimonials}
        onAddClick={() => setIsTestimonialModalOpen(true)}
      />

      <Faq t={t} />

      <About t={t} />

      <Footer t={t} />

      <CookieBanner
        show={showCookieBanner}
        text={t.cookieText}
        acceptLabel={t.cookieAccept}
        onAccept={handleAcceptCookies}
      />

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
      />
    </div>
  );
}