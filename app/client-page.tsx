'use client';

import { useState, useEffect } from 'react';

const content = {
  de: {
    badge: "BERLIN & UMGEBUNG",
    title: "MÜNDLICHER ÜBERSETZUNGSDIENST",
    subtitle: "Ihr zuverlässiger Sprachhelfer in allen Situationen. Schnelle, verständliche und absolut vertrauliche Unterstützung bei Behörden und Ärzten.",
    phone: "015756459556",
    email: "kraynova1@gmx.de",
    servicesSectionTitle: "Preisliste & Leistungen",
    servicesTitle: "Dienstleistungen & Tarife",
    servicesSubtitle: "Mit Respekt, Geduld und Aufmerksamkeit helfe ich Menschen aus verschiedenen Ländern.",
    priceLabel: "Preis",
    bookServiceBtn: "Buchen",
    services: [
      { cat: "BEHÖRDEN", title: "Behördenbegleitung", desc: "Jobcenter, Ausländerbehörde, Sozialamt, Jugendamt und weitere Institutionen.", price: "30 € / Std." },
      { cat: "MEDIZIN", title: "Medizinische Begleitung", desc: "Ärzte, Kliniken, Krankenhäuser, Psychologen und andere Spezialisten.", price: "30 € / Std." },
      { cat: "DOKUMENTE", title: "Formularservice", desc: "Präzises Ausfüllen von Anträgen, Formularen, Fragebögen und vielem mehr.", price: "20 – 50 €" },
      { cat: "TELEFON", title: "Telefonische Verhandlungen", desc: "Übersetzung von Anrufen, Klärung von Informationen, Terminvereinbarung u.v.m.", price: "Nach Absprache" },
      { cat: "ONLINE", title: "Online-Übersetzung", desc: "Flexibles Dolmetschen per Video- oder Telefonkonferenz.", price: "25 € / Std." },
      { cat: "INTENSIV", title: "Tagespauschale", desc: "8 Stunden umfassende Begleitung vor Ort.", price: "200 €" },
      { cat: "EXPERTEN", title: "Simultandolmetschen", desc: "Professioneller Konferenz- oder Event-Umfang (2 Personen).", price: "250 €" },
      { cat: "TERMIN", title: "Terminvereinbarung", desc: "Eigenständige Organisation und Buchung von Terminen.", price: "15 €" }
    ],
    stepsTitle: "Wie wir arbeiten",
    stepsSubtitle: "In drei einfachen Schritten zu Ihrer Lösung",
    steps: [
      { num: "01", title: "Kontakt aufnehmen", desc: "Schreiben Sie uns über das Formular, per WhatsApp oder rufen Sie direkt an." },
      { num: "02", title: "Details besprechen", desc: "Wir klären das Anliegen, den Termin, den Ort und die genauen Konditionen." },
      { num: "03", title: "Sicher begleiten", desc: "Wir treffen uns vor Ort oder online und lösen Ihr sprachliches Problem gemeinsam." }
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqSubtitle: "Alles, was Sie über unsere Dienstleistungen wissen müssen",
    faqs: [
      { q: "Wie kurzfristig kann ich eine Begleitung buchen?", a: "Je nach Verfügbarkeit sind auch kurzfristige Einsätze in Berlin und Umgebung möglich. Kontaktieren Sie uns am besten direkt telefonisch oder via WhatsApp." },
      { q: "Welche Dokumente muss ich zum Termin mitbringen?", a: "Das hängt ganz von Ihrem Anliegen ab (z.B. Einladung vom Jobcenter, Arztrezept, Pass). Wir besprechen vorab genau, was benötigt wird." },
      { q: "Wie erfolgt die Bezahlung für die Dienstleistungen?", a: "Die Bezahlung erfolgt bequem nach erbrachter Leistung – bar vor Ort oder nach Absprache per Überweisung." },
      { q: "Ist die Beratung absolut vertraulich?", a: "Ja, zu 100%. Alle besprochenen Details und persönlichen Informationen unterliegen strengster Verschwiegenheit." }
    ],
    testimonialsTitle: "Kundenstimmen",
    testimonialsSubtitle: "Das sagen Menschen, denen wir bereits geholfen haben",
    addTestimonialBtn: "Bewertung schreiben",
    testimonialModalTitle: "Ihre Meinung ist uns wichtig",
    testimonialNamePlaceholder: "Ihr Name (z.B. Anna M.)",
    testimonialTextPlaceholder: "Teilen Sie Ihre Erfahrung...",
    submitTestimonial: "Bewertung absenden",
    aboutTitle: "Über den Service & Philosophie",
    aboutText: "Wir helfen Menschen aus verschiedenen Ländern – mit Respekt, Geduld und Aufmerksamkeit. Absolute Vertraulichkeit ist garantiert, damit Sie sich in jeder Situation sicher fühlen.",
    locations: ["◆ Berlin", "◆ Schöneberg / Köpenick", "◆ Mündlicher Übersetzungsservice"],
    achievementsTitle: "Vorteile auf einen Blick",
    achievements: [
      { num: "100%", label: "Vertraulichkeit" },
      { num: "0%", label: "Sprachbarrieren" },
      { num: "Berlin", label: "& Umgebung" }
    ],
    formTitle: "Termin oder Rückruf anfragen",
    formSubtitle: "Füllen Sie die Daten aus und wir werden uns in Kürze mit Ihnen in Verbindung setzen.",
    formName: "Ihr Name",
    formContact: "Telefon oder E-Mail",
    formService: "Gewünschte Leistung",
    formMessage: "Ihre Nachricht / Beschreibung des Anliegens",
    formSubmit: "Anfrage Absenden",
    formSuccess: "Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze.",
    placeholderName: "Max Mustermann",
    placeholderContact: "+49 ... oder email@...",
    placeholderMessage: "Z.B.: Begleitung zum Jobcenter nächsten Dienstag um 10:00 Uhr. Ort: Mitte.",
    contactBtn: "Termin Anfragen",
    cookieText: "Wir verwenden Cookies und analysieren den Website-Traffic, um Ihre Erfahrung zu verbessern. Durch die Nutzung unserer Website stimmen Sie dem zu.",
    cookieAccept: "Alle akzeptieren",
    cookieSettings: "Datenschutz",
    impressumTitle: "Impressum",
    datenschutzTitle: "Datenschutzerklärung",
    legalNotice: "Angaben gemäß § 5 TMG / Angaben zum Anbieter in Berlin."
  },
  ru: {
    badge: "БЕРЛИН И ОКРЕСТНОСТИ",
    title: "ПЕРЕВОДЧИК В БЕРЛИНЕ",
    subtitle: "Сопровождаю и помогаю решить языковые вопросы быстро, понятно и надежно. Ваш надежный языковой помощник в любых ситуациях.",
    phone: "015756459556",
    email: "kraynova1@gmx.de",
    servicesSectionTitle: "Прайс-лист & Услуги",
    servicesTitle: "Услуги и Тарифы",
    servicesSubtitle: "Помогаю людям из разных стран — с уважением, терпением и вниманием.",
    priceLabel: "Стоимость",
    bookServiceBtn: "Выбрать",
    services: [
      { cat: "ГОСУЧРЕЖДЕНИЯ", title: "Сопровождение в госучреждения", desc: "Jobcenter, Ausländerbehörde, Sozialamt, Jugendamt и другие.", price: "30 € / час" },
      { cat: "МЕДИЦИНА", title: "Сопровождение в медицинские учреждения", desc: "Врачи, клиники, больницы, психологи и другие специалисты.", price: "30 € / час" },
      { cat: "ФОРМУЛЯРЫ", title: "Заполнение документов", desc: "Заявления, анкеты, формуляры и многое другое.", price: "20 – 50 €" },
      { cat: "ТЕЛЕФОН", title: "Телефонные переговоры", desc: "Перевод звонков, уточнение информации, запись на приём и др.", price: "По запросу" },
      { cat: "ОНЛАЙН", title: "Онлайн-перевод", desc: "Оперативная удаленная поддержка по видеосвязи или телефону.", price: "25 € / час" },
      { cat: "ДНЕВНОЙ", title: "Дневной тариф", desc: "Полное сопровождение в течение 8 часов.", price: "200 €" },
      { cat: "СИНХРОН", title: "Синхронный перевод", desc: "Высокий уровень мероприятия, работа в паре (2 человека).", price: "250 €" },
      { cat: "ТЕРМИН", title: "Запись на прием", desc: "Самостоятельный поиск и бронирование необходимых терминов.", price: "15 €" }
    ],
    stepsTitle: "Как мы работаем",
    stepsSubtitle: "Всего три простых шага для решения вашей задачи",
    steps: [
      { num: "01", title: "Свяжитесь с нами", desc: "Оставьте заявку на сайте, напишите в WhatsApp или позвоните по телефону." },
      { num: "02", title: "Согласование деталей", desc: "Обсуждаем время, место встречи (ведомство/клиника) и формат помощи." },
      { num: "03", title: "Решение вопроса", desc: "Спокойно и уверенно решаем ваши вопросы без языкового барьера в Германии." }
    ],
    faqTitle: "Часто задаваемые вопросы",
    faqSubtitle: "Ответы на самые популярные вопросы клиентов",
    faqs: [
      { q: "Как быстро можно записаться на сопровождение?", a: "Мы стараемся оперативно реагировать на все запросы. Возможны срочные выезды в Берлине и окрестностях." },
      { q: "Нужно ли готовить документы заранее?", a: "Желательно иметь при себе все письма из ведомств или медицинские выписки, чтобы переводчик мог ознакомиться с ними перед началом." },
      { q: "Как происходит оплата за услуги?", a: "Оплата производится после оказания услуги — наличными при встрече или по предварительной договоренности банковским переводом." },
      { q: "Гарантируете ли вы конфиденциальность?", a: "Абсолютно. Вся информация строго конфиденциальна и защищена профессиональной этикой." }
    ],
    testimonialsTitle: "Отзывы клиентов",
    testimonialsSubtitle: "Впечатления людей, которым мы уже помогли",
    addTestimonialBtn: "Оставить отзыв",
    testimonialModalTitle: "Поделитесь вашим отзывом",
    testimonialNamePlaceholder: "Ваше имя (например, Елена К.)",
    testimonialTextPlaceholder: "Ваш отзыв о работе переводчика...",
    submitTestimonial: "Отправить отзыв",
    aboutTitle: "О принципах работы",
    aboutText: "Помогаем людям из разных стран с уважением, терпением и вниманием. Конфиденциальность гарантирована на каждом этапе.",
    locations: ["◆ Берлин", "◆ Шенеберг / Кёпеник", "◆ Устный перевод без барьеров"],
    achievementsTitle: "Преимущества сервиса",
    achievements: [
      { num: "100%", label: "Конфиденциально" },
      { num: "Без", label: "Языковых барьеров" },
      { num: "Берлин", label: "И окрестности" }
    ],
    formTitle: "Записаться на прием / Консультация",
    formSubtitle: "Заполните данные, и мы свяжемся с вами в ближайшее время.",
    formName: "Ваше имя",
    formContact: "Телефон или Email",
    formService: "Выберите услугу",
    formMessage: "Опишите вашу задачу или вопрос",
    formSubmit: "Отправить заявку",
    formSuccess: "Спасибо! Заявка принята. Мы свяжемся с вами в ближайшее время.",
    placeholderName: "Иван Иванов",
    placeholderContact: "+49 ... или email@...",
    placeholderMessage: "Например: Нужен переводчик в Ausländerbehörde в среду в 11:00. Окружение: Mitte.",
    contactBtn: "Записаться",
    cookieText: "Мы используем файлы cookie и собираем данные для анализа трафика и улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с этим.",
    cookieAccept: "Принять все",
    cookieSettings: "Конфиденциальность",
    impressumTitle: "Impressum (Юридическая информация)",
    datenschutzTitle: "Защита данных (Datenschutz)",
    legalNotice: "Информация в соответствии с § 5 TMG / Данные поставщика услуг в Берлине."
  }
};

const initialTestimonials = [
  { name: "Ольга С.", text: "Огромное спасибо за помощь в Ausländerbehörde! Без вас я бы точно растерялась с документами. Очень вежливый и профессиональный подход." },
  { name: "Andrey M.", text: "Sehr professionelle Begleitung zum Arzt. Alles wurde verständlich übersetzt, ich fühlte mich sicher und gut aufgehoben." },
  { name: "Дмитрий В.", text: "Быстро помогли разобраться с формуляром в Jobcenter и записали на термин. Рекомендую на 100%!" }
];

export default function ClientPage() {
  const [lang, setLang] = useState<'ru' | 'de'>('ru');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz'>('impressum');
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
      setLang(savedLang as 'ru' | 'de');
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

  const handleLangToggle = (newLang: 'ru' | 'de') => {
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
      
      {/* Плавающие кнопки быстрой связи */}
      <div className="fixed bottom-20 right-6 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/4915756459556"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
          title="WhatsApp Chat"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
        <a
          href={`tel:${t.phone}`}
          className="w-12 h-12 bg-amber-500 hover:bg-amber-400 text-black rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
          title="Telefon Anruf"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>
      </div>

      {/* Навигация */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0a0a0c]/80 border-b border-neutral-800/60">
        <div className="max-w-7xl mx-auto px-6 h-18 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-base font-bold tracking-widest text-white">
              KRAYNOVA <span className="text-amber-400 font-light">TRANSLATE</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLangToggle(lang === 'ru' ? 'de' : 'ru')}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-amber-500/30 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
            >
              {lang === 'ru' ? 'DE' : 'RU'}
            </button>
            <button
              onClick={() => handleOpenModal()}
              className="hidden sm:inline-flex px-4 py-2 text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              {t.contactBtn}
            </button>
          </div>
        </div>
      </header>

      {/* Главный экран (Hero) */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-neutral-800/40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-mono tracking-widest">
              <span>◆</span> {t.badge}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              {t.title}
            </h1>
            <p className="text-base text-neutral-400 font-normal leading-relaxed max-w-xl">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${t.phone}`}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/10 flex items-center gap-2.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                {t.phone}
              </a>
              <button
                onClick={() => handleOpenModal()}
                className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-semibold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 border border-neutral-700/80 cursor-pointer"
              >
                {t.formTitle}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 backdrop-blur-xl shadow-xl relative">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">{t.achievementsTitle}</h3>
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-800">
                {t.achievements.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg font-black text-white font-mono">{item.num}</div>
                    <div className="text-[10px] text-neutral-400 uppercase mt-0.5 tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги и цены */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">{t.servicesSectionTitle}</h2>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{t.servicesTitle}</h3>
          <p className="text-sm text-neutral-400">{t.servicesSubtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.services.map((s, idx) => (
            <div 
              key={idx} 
              onClick={() => handleOpenModal(s.title)}
              className="group relative bg-neutral-950 p-6 rounded-xl border border-neutral-800/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5 shadow-md cursor-pointer"
            >
              <div>
                <span className="inline-block text-[9px] font-mono tracking-widest text-amber-400/80 uppercase mb-2 px-2 py-0.5 bg-amber-500/10 rounded">
                  {s.cat}
                </span>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {s.title}
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                  {s.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-900 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">{t.priceLabel}</span>
                  <span className="text-base font-black text-amber-400 font-mono">{s.price}</span>
                </div>
                <span className="px-2.5 py-1 bg-amber-500/10 group-hover:bg-amber-500 text-amber-400 group-hover:text-black text-[10px] font-bold uppercase rounded transition-colors">
                  {t.bookServiceBtn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Блок: Как мы работаем */}
      <section className="py-14 border-t border-neutral-800/40 bg-neutral-950/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">{t.stepsTitle}</h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{t.stepsSubtitle}</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.steps.map((step, idx) => (
              <div key={idx} className="bg-neutral-950 p-6 rounded-xl border border-neutral-800/60 relative space-y-3">
                <div className="text-2xl font-black text-amber-500/40 font-mono">{step.num}</div>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок отзывов */}
      <section className="py-16 border-t border-neutral-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="text-center sm:text-left space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">{t.testimonialsTitle}</h2>
              <h3 className="text-2xl font-bold text-white">{t.testimonialsSubtitle}</h3>
            </div>
            <button
              onClick={() => setIsTestimonialModalOpen(true)}
              className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-amber-500/40 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer"
            >
              + {t.addTestimonialBtn}
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((item, idx) => (
              <div key={idx} className="min-w-[280px] sm:min-w-[340px] max-w-[380px] flex-1 bg-neutral-950 p-6 rounded-xl border border-neutral-800/80 flex flex-col justify-between space-y-4 shadow-md snap-start">
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed italic">«{item.text}»</p>
                <div className="pt-3 border-t border-neutral-900 text-xs font-mono font-bold text-amber-400">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок FAQ */}
      <section className="py-14 border-t border-neutral-800/40 bg-neutral-950/40">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">{t.faqTitle}</h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{t.faqSubtitle}</h3>
          </div>
          <div className="space-y-3 pt-2">
            {t.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-neutral-950 p-5 rounded-xl border border-neutral-800/80 cursor-pointer">
                <summary className="text-sm font-semibold text-white flex justify-between items-center outline-none">
                  {faq.q}
                  <span className="text-amber-400 transform group-open:rotate-180 transition-transform font-mono text-xs">▼</span>
                </summary>
                <p className="mt-3 text-neutral-400 text-xs leading-relaxed pt-3 border-t border-neutral-900">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* О нас / Философия */}
      <section className="py-14 border-t border-neutral-800/40">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">{t.aboutTitle}</h2>
          <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
            {t.aboutText}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-mono text-neutral-400">
            {t.locations.map((loc, idx) => (
              <span key={idx}>{loc}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="border-t border-neutral-800/80 py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-400 font-mono">
          <div className="text-center md:text-left space-y-1">
            <div>© {new Date().getFullYear()} KRAYNOVA TRANSLATE. ALL RIGHTS RESERVED.</div>
            <div className="text-[10px] text-neutral-500">{t.legalNotice} Berlin, Deutschland</div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <button 
              onClick={() => { setLegalModalType('impressum'); setIsLegalModalOpen(true); }}
              className="hover:text-amber-400 transition cursor-pointer underline decoration-neutral-700 underline-offset-4"
            >
              Impressum
            </button>
            <button 
              onClick={() => { setLegalModalType('datenschutz'); setIsLegalModalOpen(true); }}
              className="hover:text-amber-400 transition cursor-pointer underline decoration-neutral-700 underline-offset-4"
            >
              Datenschutz
            </button>
            <div className="flex gap-4 text-neutral-300">
              <a href={`tel:${t.phone}`} className="hover:text-amber-400 transition">{t.phone}</a>
              <a href={`mailto:${t.email}`} className="hover:text-amber-400 transition">{t.email}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Баннер согласия на cookies */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-neutral-950/95 border-t border-neutral-800 backdrop-blur-md shadow-2xl">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-300 leading-relaxed max-w-3xl">
              {t.cookieText}
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => { setLegalModalType('datenschutz'); setIsLegalModalOpen(true); }}
                className="px-4 py-2 text-xs font-mono text-neutral-400 hover:text-white underline transition cursor-pointer"
              >
                {t.cookieSettings}
              </button>
              <button
                onClick={handleAcceptCookies}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                {t.cookieAccept}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно заказа / связи */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white text-base font-mono cursor-pointer"
            >
              ✕
            </button>
            
            <h3 className="text-xl font-bold text-white mb-1.5">{t.formTitle}</h3>
            <p className="text-neutral-400 text-xs mb-5">{t.formSubtitle}</p>

            {submitted ? (
              <div className="p-5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 text-center text-xs font-medium">
                {t.formSuccess}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">{t.formName}</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder={t.placeholderName}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">{t.formContact}</label>
                  <input 
                    type="text" 
                    name="contact" 
                    required 
                    placeholder={t.placeholderContact}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">{t.formService}</label>
                  <select 
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition cursor-pointer"
                  >
                    {t.services.map((s, i) => (
                      <option key={i} value={s.title}>{s.title} ({s.price})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">{t.formMessage}</label>
                  <textarea 
                    name="message" 
                    rows={3}
                    placeholder={t.placeholderMessage}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50"
                >
                  {loading ? '...' : t.formSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Модальное окно добавления отзыва */}
      {isTestimonialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setIsTestimonialModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white text-base font-mono cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-white mb-1.5">{t.testimonialModalTitle}</h3>
            <form onSubmit={handleAddTestimonial} className="space-y-4 mt-4">
              <div>
                <input 
                  type="text" 
                  value={newReviewName} 
                  onChange={(e) => setNewReviewName(e.target.value)} 
                  placeholder={t.testimonialNamePlaceholder} 
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition"
                />
              </div>
              <div>
                <textarea 
                  value={newReviewText} 
                  onChange={(e) => setNewReviewText(e.target.value)} 
                  placeholder={t.testimonialTextPlaceholder} 
                  rows={4}
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer"
              >
                {t.submitTestimonial}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Модальное окно правовой информации (Impressum / Datenschutz) */}
      {isLegalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 max-w-xl w-full relative shadow-2xl max-h-[80vh] overflow-y-auto">
            <button 
              onClick={() => setIsLegalModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white text-base font-mono cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-white mb-4">
              {legalModalType === 'impressum' ? t.impressumTitle : t.datenschutzTitle}
            </h3>
            <div className="text-xs text-neutral-300 space-y-3 leading-relaxed font-mono">
              {legalModalType === 'impressum' ? (
                <>
                  <p><strong>Angaben gemäß § 5 TMG:</strong></p>
                  <p>Kraynova Translate<br />Berlin, Deutschland</p>
                  <p><strong>Kontakt:</strong><br />Telefon: {t.phone}<br />E-Mail: {t.email}</p>
                  <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Kraynova Translate.</p>
                </>
              ) : (
                <>
                  <p><strong>Datenschutzerklärung</strong></p>
                  <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (z. B. Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.</p>
                  <p>Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}