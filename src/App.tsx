/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  motion, 
  AnimatePresence 
} from 'motion/react';
import { 
  Menu, 
  X, 
  Globe, 
  ChevronRight, 
  ArrowLeft, 
  MessageSquare, 
  Instagram, 
  Linkedin, 
  ArrowUpRight, 
  Compass, 
  CheckCircle,
  Phone,
  Mail,
  Users,
  MapPin,
  Clock,
  Briefcase
} from 'lucide-react';
import { translations, IMAGES } from './data';
import { Language } from './types';

export default function App() {
  // Lang state, saved in localStorage
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('zaly_lang');
    return (saved === 'FR' || saved === 'EN') ? saved : 'FR';
  });

  // Client-side router state, synchronized with window.location.pathname
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname;
    // Strip trailing slash if present
    const normalized = path === '/' ? '/' : path.replace(/\/$/, '');
    return normalized;
  });

  // Menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceDetails, setActiveServiceDetails] = useState<string | null>(null);

  // Form submission feedback
  const [contactForm, setContactForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'design',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Synchronize browser back/forward buttons with custom path state
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update language preference
  const toggleLanguage = (selectedLang: Language) => {
    setLang(selectedLang);
    localStorage.setItem('zaly_lang', selectedLang);
  };

  // Safe navigation function updating history and tracking state
  const navigateTo = (path: string) => {
    const target = path === '' ? '/' : path;
    window.history.pushState(null, '', target);
    setCurrentPath(target);
    setMobileMenuOpen(false);
    // Smooth scroll to top when changing page views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to scroll to section smoothly on home page
  const scrollToSection = (id: string) => {
    if (currentPath !== '/') {
      // First go home, then wait a frame and scroll
      navigateTo('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  // WhatsApp Message integration
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const t = translations[lang];
    const serviceLabel = 
      contactForm.projectType === 'design' ? t.contact.serviceOptions.design :
      contactForm.projectType === 'coordination' ? t.contact.serviceOptions.coordination :
      t.contact.serviceOptions.audit;

    // Formatting elegant WhatsApp transmission text
    const messageTemplate = `*ZALY DESIGN — Nouvelle demande de projet d'intérieur*
---------------------------------------
*Nom complet* : ${contactForm.fullName}
*Téléphone* : ${contactForm.phone}
*Email* : ${contactForm.email}
*Type de projet* : ${serviceLabel}
---------------------------------------
*Message* : 
${contactForm.message || "Aucun message supplémentaire."}`;

    // Universal WhatsApp Link
    const waUrl = `https://wa.me/33660986173?text=${encodeURIComponent(messageTemplate)}`;
    
    // Open in separate window to ensure standard iframe compliance
    window.open(waUrl, '_blank');
    
    setFormSubmitted(true);
    // Clear inputs
    setContactForm({
      fullName: '',
      phone: '',
      email: '',
      projectType: 'design',
      message: ''
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  const t = translations[lang];

  // Logic to separate project matching
  const isProjectPage = ['/france', '/suisse', '/usa', '/dubai', '/egypt'].includes(currentPath);
  const activeProjectId = isProjectPage ? currentPath.replace('/', '') : null;
  const activeProject = activeProjectId ? t.projects.items[activeProjectId] : null;

  return (
    <div id="zaly-app" className="min-h-screen flex flex-col selection:bg-brand-bronze selection:text-white bg-brand-cream text-brand-charcoal overflow-x-hidden antialiased font-sans">
      
      {/* HEADER / NAVIGATION BAR */}
      <header id="main-header" className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-charcoal/5 px-6 py-4 md:px-12 transition-all duration-300">
        <div id="header-container" className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            id="logo-brand"
            onClick={() => navigateTo('/')} 
            className="group flex flex-col items-start cursor-pointer focus:outline-none"
          >
            <span className="font-serif font-semibold text-2xl tracking-[0.25em] text-brand-charcoal transition-all duration-300 group-hover:text-brand-bronze">
              ZALY DESIGN
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-brand-taupe font-mono mt-1">
              INTERIOR ARCHITECTURE
            </span>
          </button>

          {/* Desktop Navigation Link Menu */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            <button 
              id="nav-link-home"
              onClick={() => navigateTo('/')} 
              className={`text-xs tracking-widest uppercase font-medium transition-colors hover:text-brand-bronze cursor-pointer ${currentPath === '/' ? 'text-brand-bronze border-b border-brand-bronze/40 pb-1' : 'text-brand-charcoal/70'}`}
            >
              {t.nav.home}
            </button>
            <button 
              id="nav-link-history"
              onClick={() => scrollToSection('histoire')} 
              className="text-xs tracking-widest uppercase font-medium text-brand-charcoal/70 transition-colors hover:text-brand-bronze cursor-pointer"
            >
              {t.nav.history}
            </button>
            <button 
              id="nav-link-services"
              onClick={() => scrollToSection('services')} 
              className="text-xs tracking-widest uppercase font-medium text-brand-charcoal/70 transition-colors hover:text-brand-bronze cursor-pointer"
            >
              {t.nav.services}
            </button>
            <button 
              id="nav-link-portfolio"
              onClick={() => scrollToSection('realisations')} 
              className="text-xs tracking-widest uppercase font-medium text-brand-charcoal/70 transition-colors hover:text-brand-bronze cursor-pointer"
            >
              {t.nav.projects}
            </button>
            <button 
              id="nav-link-contact"
              onClick={() => scrollToSection('contact')} 
              className="text-xs tracking-widest uppercase font-medium text-brand-charcoal/70 transition-colors hover:text-brand-bronze cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Language Selector + CTA Buttons */}
          <div id="language-cta-panel" className="hidden md:flex items-center space-x-6">
            
            {/* Lang Dropdown */}
            <div id="lang-selector-group" className="flex items-center space-x-2 border border-brand-taupe/20 px-3 py-1.5 rounded-sm bg-brand-sand/40">
              <Globe id="globe-icon" className="w-3.5 h-3.5 text-brand-taupe" />
              <button 
                id="btn-lang-fr"
                onClick={() => toggleLanguage('FR')} 
                className={`text-[11px] font-medium tracking-wider transition-all px-1.5 py-0.5 rounded ${lang === 'FR' ? 'bg-brand-charcoal text-brand-cream' : 'text-brand-charcoal/60 hover:text-brand-charcoal'}`}
              >
                FR
              </button>
              <button 
                id="btn-lang-en"
                onClick={() => toggleLanguage('EN')} 
                className={`text-[11px] font-medium tracking-wider transition-all px-1.5 py-0.5 rounded ${lang === 'EN' ? 'bg-brand-charcoal text-brand-cream' : 'text-brand-charcoal/60 hover:text-brand-charcoal'}`}
              >
                EN
              </button>
            </div>

            {/* Elegant Contact Button */}
            <button 
              id="btn-header-cta"
              onClick={() => scrollToSection('contact')}
              className="bg-brand-charcoal text-brand-cream hover:bg-brand-bronze text-xs font-medium tracking-widest uppercase py-2.5 px-5 transition-all duration-300 rounded-sm hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
            >
              {t.hero.ctaContact}
            </button>
          </div>

          {/* Mobile Actions Right Panel */}
          <div id="mobile-navigation-trigger" className="flex items-center space-x-3 md:hidden">
            {/* Mobile Lang Bubble */}
            <div className="flex items-center space-x-1 border border-brand-taupe/15 px-2 py-1 rounded bg-brand-sand/30">
              <button 
                id="btn-mobile-lang-fr"
                onClick={() => toggleLanguage('FR')} 
                className={`text-[10px] font-bold px-1 ${lang === 'FR' ? 'text-brand-bronze' : 'text-brand-charcoal/50'}`}
              >
                FR
              </button>
              <span className="text-brand-taupe/30 text-xs">|</span>
              <button 
                id="btn-mobile-lang-en"
                onClick={() => toggleLanguage('EN')} 
                className={`text-[10px] font-bold px-1 ${lang === 'EN' ? 'text-brand-bronze' : 'text-brand-charcoal/50'}`}
              >
                EN
              </button>
            </div>

            {/* Burger Icon */}
            <button 
              id="btn-burger-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-brand-charcoal hover:text-brand-bronze p-1 transition-colors outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[73px] z-40 bg-brand-cream flex flex-col justify-between p-8 md:hidden border-t border-brand-taupe/10"
          >
            <div id="mobile-nav-links" className="flex flex-col space-y-6 mt-6">
              <button 
                id="mob-link-home"
                onClick={() => navigateTo('/')} 
                className="text-left font-serif text-2xl tracking-wider py-2 border-b border-brand-taupe/10 text-brand-charcoal hover:text-brand-bronze"
              >
                — {t.nav.home}
              </button>
              <button 
                id="mob-link-history"
                onClick={() => scrollToSection('histoire')} 
                className="text-left font-serif text-2xl tracking-wider py-2 border-b border-brand-taupe/10 text-brand-charcoal hover:text-brand-bronze"
              >
                — {t.nav.history}
              </button>
              <button 
                id="mob-link-services"
                onClick={() => scrollToSection('services')} 
                className="text-left font-serif text-2xl tracking-wider py-2 border-b border-brand-taupe/10 text-brand-charcoal hover:text-brand-bronze"
              >
                — {t.nav.services}
              </button>
              <button 
                id="mob-link-projects"
                onClick={() => scrollToSection('realisations')} 
                className="text-left font-serif text-2xl tracking-wider py-2 border-b border-brand-taupe/10 text-brand-charcoal hover:text-brand-bronze"
              >
                — {t.nav.projects}
              </button>
              <button 
                id="mob-link-contact"
                onClick={() => scrollToSection('contact')} 
                className="text-left font-serif text-2xl tracking-wider py-2 border-b border-brand-taupe/10 text-brand-charcoal hover:text-brand-bronze"
              >
                — {t.nav.contact}
              </button>
            </div>

            <div id="mobile-menu-footer" className="flex flex-col space-y-4 pt-6 border-t border-brand-taupe/20">
              <div className="flex items-center justify-between text-xs text-brand-taupe">
                <span>ZALY DESIGN Studio</span>
                <span className="font-mono">Paris • Dubai</span>
              </div>
              <div className="flex space-x-6 text-brand-charcoal">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-bronze p-2 bg-brand-sand rounded-full">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-bronze p-2 bg-brand-sand rounded-full">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/33660986173" target="_blank" rel="noopener noreferrer" className="hover:text-brand-bronze p-2 bg-brand-sand rounded-full">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRIMARY VIEWS SWITCHER */}
      <main id="primary-view-content" className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* PATH: '/' HOME VIEW */}
          {currentPath === '/' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              
              {/* SECTION 1: HERO HOME HEADER */}
              <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Immersive high resolution background picture */}
                <div className="absolute inset-0 z-0 bg-brand-cream text-[#2D2A26]">
                  <img 
                    src={IMAGES.heroBright}
                    alt="Bespoke luxury modern living room by ZALY DESIGN" 
                    className="w-full h-full object-cover opacity-90 scale-105 animate-[subtle-zoom_20s_ease_infinite]"
                    style={{ filter: 'brightness(0.98) contrast(1.02)' }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Aesthetic crisp modern filter glow */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-cream/90 via-transparent to-brand-cream/45" />

                <div id="hero-caption" className="relative z-10 max-w-5xl mx-auto px-6 text-center text-brand-charcoal select-none">
                  
                  {/* Small decorative label */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex justify-center items-center space-x-3 mb-6"
                  >
                    <span className="w-12 h-[1px] bg-brand-bronze" />
                    <span className="text-[11px] tracking-[0.4em] uppercase font-mono text-brand-bronze font-semibold">
                      ZALY DESIGN
                    </span>
                    <span className="w-12 h-[1px] bg-brand-bronze" />
                  </motion.div>

                  {/* Elegant Title */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.9 }}
                    className="font-serif text-4xl sm:text-5xl md:text-6.5xl leading-[1.1] font-light tracking-tight text-brand-charcoal mb-8"
                  >
                    {t.hero.title}
                  </motion.h1>

                  {/* Text representation */}
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-sm md:text-lg text-brand-charcoal font-normal max-w-2xl mx-auto leading-relaxed mb-12 tracking-wide font-sans text-center"
                  >
                    {t.hero.subtitle}
                  </motion.p>

                  {/* Interlinked layout elements */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5"
                  >
                    <button 
                       id="hero-cta-projects"
                       onClick={() => scrollToSection('realisations')}
                       className="w-full sm:w-auto bg-brand-charcoal text-brand-cream hover:bg-brand-bronze hover:text-white text-xs font-semibold tracking-widest uppercase px-10 py-4.5 transition-all duration-300 rounded-sm cursor-pointer hover:shadow-xl"
                    >
                      {t.hero.ctaProjects}
                    </button>
                    <button 
                      id="hero-cta-contact"
                      onClick={() => scrollToSection('contact')}
                      className="w-full sm:w-auto bg-transparent border-2 border-brand-charcoal/40 text-brand-charcoal hover:border-brand-charcoal text-xs font-semibold tracking-widest uppercase px-10 py-4.5 transition-all duration-300 rounded-sm cursor-pointer backdrop-blur-xs"
                    >
                      {t.hero.ctaContact}
                    </button>
                  </motion.div>
                </div>

                {/* High End Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-1.5 opacity-60">
                  <span className="text-[10px] tracking-widest text-brand-charcoal/80 font-mono uppercase">SCROLL</span>
                  <div className="w-[1.5px] h-10 bg-brand-charcoal/20 relative overflow-hidden rounded-full">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-bronze animate-scroll-line" />
                  </div>
                </div>
              </section>

              {/* SECTION 2: PORTRAIT & MON HISTOIRE */}
              <section id="histoire" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
                <div id="histoire-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                  
                  {/* Left Column: Grande photo portrait professionnelle */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="lg:col-span-5 relative"
                  >
                    <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-t-2 border-l-2 border-brand-bronze/30 z-0 pointer-events-none" />
                    <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-b-2 border-r-2 border-brand-bronze/30 z-0 pointer-events-none" />
                    
                    <div className="relative z-10 bg-brand-sand border border-brand-taupe/10 overflow-hidden shadow-2xl rounded-sm">
                      <img 
                        src={IMAGES.portrait}
                        alt="Zaly Designer" 
                        className="w-full h-auto object-cover grayscale-15 select-none hover:scale-102 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />

                    </div>
                  </motion.div>

                  {/* Right Column: Narrative Copy */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="lg:col-span-7 flex flex-col justify-center text-left"
                  >
                    <span className="text-[11px] font-mono tracking-[0.35em] text-brand-bronze font-semibold uppercase mb-4 block">
                      {t.nav.history}
                    </span>
                    
                    <h2 className="font-serif text-3xl sm:text-4.5xl leading-tight font-light text-brand-charcoal mb-8">
                      {t.history.quote}
                    </h2>

                    <div className="w-16 h-[2px] bg-brand-bronze mb-8" />

                    <p className="text-base text-brand-charcoal/80 font-light mb-6 leading-relaxed">
                      {t.history.paragraph1}
                    </p>

                    <p className="text-sm text-brand-taupe mb-10 leading-relaxed font-sans">
                      {t.history.paragraph2}
                    </p>

                    {/* Elite Stats Blocks */}
                    <div id="history-stats" className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-charcoal/10">
                      <div className="flex flex-col">
                        <span className="font-serif text-xl md:text-2xl text-brand-charcoal font-semibold">10+</span>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-brand-taupe mt-1">{t.history.statExperience}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-serif text-xl md:text-2xl text-brand-charcoal font-semibold">5</span>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-brand-taupe mt-1">{t.history.statCountries}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-serif text-xl md:text-2xl text-brand-bronze font-semibold">100%</span>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-brand-taupe mt-1">{t.history.statClarity}</span>
                      </div>
                    </div>

                  </motion.div>
                </div>
              </section>

              {/* SECTION 3: BESPOKE SERVICES */}
              <section id="services" className="py-24 bg-brand-sand/50 border-y border-brand-taupe/10 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                  
                  <span className="text-[11px] font-mono tracking-[0.35em] text-brand-bronze font-semibold uppercase mb-4 block">
                    {t.nav.services}
                  </span>
                  
                  <h2 className="font-serif text-3xl md:text-4.5xl font-light text-brand-charcoal mb-4">
                    {t.services.sectionTitle}
                  </h2>
                  
                  <p className="text-sm md:text-base text-brand-taupe font-light max-w-xl mx-auto mb-16">
                    {t.services.subtitle}
                  </p>

                  {/* Services 3 premium architectural cards */}
                  <div id="services-cards-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {t.services.items.map((item, index) => {
                      const isExpanded = activeServiceDetails === item.id;
                      
                      return (
                        <motion.div 
                          key={item.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15, duration: 0.8 }}
                          className="bg-brand-cream border border-brand-taupe/15 text-brand-charcoal rounded-sm overflow-hidden flex flex-col h-full luxury-shadow hover:shadow-2xl hover:border-brand-bronze/40 transition-all duration-500"
                        >
                          {/* Image Container with smooth gray overlay */}
                          <div className="h-60 relative overflow-hidden bg-brand-charcoal">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover select-none transition-all duration-700 hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 to-transparent pointer-events-none" />
                            {/* Accent badge */}
                            <span className="absolute top-4 left-4 bg-brand-cream/90 backdrop-blur-xs text-[10px] font-mono text-brand-charcoal tracking-widest uppercase px-3 py-1 border border-brand-taupe/15">
                              0{index + 1}
                            </span>
                          </div>

                          <div className="p-8 flex flex-col flex-grow justify-between">
                            <div>
                              <h3 className="font-serif text-xl font-medium tracking-wide mb-4 text-brand-charcoal">
                                {item.title}
                              </h3>
                              <p className="text-sm text-brand-charcoal/70 font-light leading-relaxed mb-6">
                                {item.text}
                              </p>
                            </div>

                            <div className="mt-4">
                              <button
                                onClick={() => setActiveServiceDetails(isExpanded ? null : item.id)}
                                className="group flex items-center space-x-1.5 text-xs font-semibold tracking-widest uppercase text-brand-bronze hover:text-brand-charcoal transition-colors focus:outline-none cursor-pointer"
                              >
                                <span>{isExpanded ? (lang === 'FR' ? 'Réduire' : 'Collapse') : item.buttonText}</span>
                                <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                              </button>
                            </div>

                            {/* Bullet points on expansion */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden mt-6 pt-6 border-t border-brand-taupe/15 text-xs text-brand-charcoal/80 space-y-3 font-sans"
                                >
                                  {item.moreDetails.map((detail, dIdx) => (
                                    <div key={dIdx} className="flex items-start space-x-2">
                                      <CheckCircle className="w-3.5 h-3.5 text-brand-bronze shrink-0 mt-0.5" />
                                      <p className="leading-relaxed">{detail}</p>
                                    </div>
                                  ))}
                                  
                                  {/* Fast action call to contact */}
                                  <button
                                    onClick={() => {
                                      setContactForm(prev => ({ ...prev, projectType: item.id }));
                                      scrollToSection('contact');
                                    }}
                                    className="w-full mt-4 bg-brand-sand hover:bg-brand-bronze hover:text-white border border-brand-taupe/20 py-2 text-center text-[10px] uppercase tracking-widest font-bold transition-all duration-300 rounded-sm"
                                  >
                                    {lang === 'FR' ? 'Choisir cette formule' : 'Select this plan'}
                                  </button>
                                </motion.div>
                              )}
                            </AnimatePresence>

                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                </div>
              </section>

              {/* SECTION 4: RÉALISATIONS (5 COUNTRIES PORTFOLIO) */}
              <section id="realisations" className="py-24 max-w-7xl mx-auto px-6 md:px-12 scroll-mt-20">
                <div className="text-center mb-16">
                  <span className="text-[11px] font-mono tracking-[0.35em] text-brand-bronze font-semibold uppercase mb-4 block">
                    {t.nav.projects}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4.5xl font-light text-brand-charcoal mb-4">
                    {t.projects.sectionTitle}
                  </h2>
                  <p className="text-sm md:text-base text-brand-taupe font-light max-w-xl mx-auto">
                    {t.projects.subtitle}
                  </p>
                </div>

                {/* 5 Countries Portfolio Grid (Bento style dynamic scale) */}
                <div id="countries-grid" className="grid grid-cols-1 md:grid-cols-6 gap-6">
                  
                  {/* CARD 1: FRANCE (Col span 3) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-3 group relative h-96 bg-brand-charcoal overflow-hidden rounded-sm cursor-pointer shadow-lg"
                    onClick={() => navigateTo('/france')}
                  >
                    <img 
                      src={t.projects.items.france.bannerImage} 
                      alt="France Project" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      style={{ filter: 'brightness(0.70)' }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent opacity-90" />
                    
                    {/* Content overlays */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase bg-white/10 backdrop-blur-md py-1 px-3 border border-white/20">
                          {t.projects.items.france.country}
                        </span>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-serif text-2xl md:text-3xl font-light mb-2 tracking-wide text-brand-sand">
                          {t.projects.items.france.title}
                        </h4>
                        <p className="text-xs text-brand-sand/80 font-light mb-4 line-clamp-2 max-w-md">
                          {t.projects.items.france.introduction}
                        </p>
                        <button className="text-[11px] font-mono tracking-widest text-brand-bronze uppercase block font-semibold group-hover:text-white transition-colors">
                          — {t.projects.moreInfoButton}
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* CARD 2: SUISSE (Col span 3) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="md:col-span-3 group relative h-96 bg-brand-charcoal overflow-hidden rounded-sm cursor-pointer shadow-lg"
                    onClick={() => navigateTo('/suisse')}
                  >
                    <img 
                      src={t.projects.items.suisse.bannerImage} 
                      alt="Suisse Project" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      style={{ filter: 'brightness(0.70)' }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent opacity-90" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase bg-white/10 backdrop-blur-md py-1 px-3 border border-white/20">
                          {t.projects.items.suisse.country}
                        </span>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-serif text-2xl md:text-3xl font-light mb-2 tracking-wide text-brand-sand">
                          {t.projects.items.suisse.title}
                        </h4>
                        <p className="text-xs text-brand-sand/80 font-light mb-4 line-clamp-2 max-w-md">
                          {t.projects.items.suisse.introduction}
                        </p>
                        <button className="text-[11px] font-mono tracking-widest text-brand-bronze uppercase block font-semibold group-hover:text-white transition-colors">
                          — {t.projects.moreInfoButton}
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* CARD 3: USA (Col span 2) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-2 group relative h-80 bg-brand-charcoal overflow-hidden rounded-sm cursor-pointer shadow-lg"
                    onClick={() => navigateTo('/usa')}
                  >
                    <img 
                      src={t.projects.items.usa.bannerImage} 
                      alt="USA Project" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      style={{ filter: 'brightness(0.70)' }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase bg-white/10 backdrop-blur-md py-1 px-3 border border-white/20">
                          {t.projects.items.usa.country}
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-serif text-xl font-light mb-1 text-brand-sand">
                          {t.projects.items.usa.title}
                        </h4>
                        <button className="text-[10px] font-mono tracking-widest text-brand-bronze uppercase block font-semibold mt-2">
                          {t.projects.moreInfoButton} →
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* CARD 4: DUBAI (Col span 2) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="md:col-span-2 group relative h-80 bg-brand-charcoal overflow-hidden rounded-sm cursor-pointer shadow-lg"
                    onClick={() => navigateTo('/dubai')}
                  >
                    <img 
                      src={t.projects.items.dubai.bannerImage} 
                      alt="Dubai Project" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      style={{ filter: 'brightness(0.70)' }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase bg-white/10 backdrop-blur-md py-1 px-3 border border-white/20">
                          {t.projects.items.dubai.country}
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-serif text-xl font-light mb-1 text-brand-sand">
                          {t.projects.items.dubai.title}
                        </h4>
                        <button className="text-[10px] font-mono tracking-widest text-brand-bronze uppercase block font-semibold mt-2">
                          {t.projects.moreInfoButton} →
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* CARD 5: EGYPT (Col span 2) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:col-span-2 group relative h-80 bg-brand-charcoal overflow-hidden rounded-sm cursor-pointer shadow-lg"
                    onClick={() => navigateTo('/egypt')}
                  >
                    <img 
                      src={t.projects.items.egypt.bannerImage} 
                      alt="Egypt Project" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      style={{ filter: 'brightness(0.70)' }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase bg-white/10 backdrop-blur-md py-1 px-3 border border-white/20">
                          {t.projects.items.egypt.country}
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-serif text-xl font-light mb-1 text-brand-sand">
                          {t.projects.items.egypt.title}
                        </h4>
                        <button className="text-[10px] font-mono tracking-widest text-brand-bronze uppercase block font-semibold mt-2">
                          {t.projects.moreInfoButton} →
                        </button>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </section>

              {/* SECTION 5: FORMULAIRE DE CONTACT PREMIUM & MAPS */}
              <section id="contact" className="py-24 bg-brand-sand/40 border-t border-brand-taupe/15 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* Left Panel: Contact Info & Value Prop */}
                    <div className="lg:col-span-5 flex flex-col justify-center text-left">
                      <span className="text-[11px] font-mono tracking-[0.35em] text-brand-bronze font-semibold uppercase mb-4 block">
                        COLLABORATION
                      </span>
                      <h2 className="font-serif text-3.5xl md:text-5xl font-light text-brand-charcoal leading-tight mb-6">
                        {t.contact.title}
                      </h2>
                      <p className="text-sm md:text-base text-brand-taupe font-light mb-10 leading-relaxed">
                        {t.contact.subtitle}
                      </p>

                      {/* Direct Address Coordinates */}
                      <div id="contact-credentials" className="space-y-6 pt-6 border-t border-brand-taupe/20">
                        <div className="flex items-start space-x-4">
                          <MapPin className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs uppercase font-mono tracking-widest text-brand-charcoal font-semibold">ADRESSE DU STUDIO</p>
                            <p className="text-sm text-brand-taupe font-light mt-1">Rue du Faubourg Saint-Honoré, 75008 Paris, France</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <Phone className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs uppercase font-mono tracking-widest text-brand-charcoal font-semibold">CONVERSATION DIRECTE</p>
                            <p className="text-sm text-brand-taupe font-mono mt-1 hover:text-brand-bronze transition-colors">
                              <a href="https://wa.me/33660986173" target="_blank" rel="noopener noreferrer">+33 6 60 98 61 73</a>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <Mail className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs uppercase font-mono tracking-widest text-brand-charcoal font-semibold">EMAIL GÉRAL</p>
                            <p className="text-sm text-brand-taupe font-mono mt-1 hover:text-brand-bronze transition-colors">
                              <a href="mailto:contact@zalydesign.com">contact@zalydesign.com</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Panel: Interactive Form targeting WhatsApp */}
                    <div id="form-container" className="lg:col-span-7">
                      <div className="bg-brand-cream border border-brand-taupe/15 rounded-sm p-8 md:p-10 luxury-shadow">
                        
                        <form onSubmit={handleContactSubmit} className="space-y-6">
                          
                          {/* Full name input */}
                          <div className="text-left">
                            <label htmlFor="fullname" className="block text-[11px] uppercase font-mono tracking-widest text-brand-charcoal/80 font-semibold mb-2">
                              {t.contact.fullName} *
                            </label>
                            <input 
                              type="text" 
                              id="fullname"
                              required
                              value={contactForm.fullName}
                              onChange={(e) => setContactForm(p => ({ ...p, fullName: e.target.value }))}
                              placeholder="Mme. / M. Jean Pasquier"
                              className="w-full bg-brand-sand/50 border border-brand-taupe/20 px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-taupe/50 focus:border-brand-bronze focus:bg-brand-cream transition-all rounded-xs outline-none"
                            />
                          </div>

                          {/* Grid for phone & email */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Phone */}
                            <div className="text-left">
                              <label htmlFor="phone" className="block text-[11px] uppercase font-mono tracking-widest text-brand-charcoal/80 font-semibold mb-2">
                                {t.contact.phone} *
                              </label>
                              <input 
                                type="tel" 
                                id="phone"
                                required
                                value={contactForm.phone}
                                onChange={(e) => setContactForm(p => ({ ...p, phone: e.target.value }))}
                                placeholder="+33 6 00 00 00 00"
                                className="w-full bg-brand-sand/50 border border-brand-taupe/20 px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-taupe/50 focus:border-brand-bronze focus:bg-brand-cream transition-all rounded-xs outline-none"
                              />
                            </div>

                            {/* Email */}
                            <div className="text-left">
                              <label htmlFor="email" className="block text-[11px] uppercase font-mono tracking-widest text-brand-charcoal/80 font-semibold mb-2">
                                {t.contact.email} *
                              </label>
                              <input 
                                type="email" 
                                id="email"
                                required
                                value={contactForm.email}
                                onChange={(e) => setContactForm(p => ({ ...p, email: e.target.value }))}
                                placeholder="jean.pasquier@luxmail.com"
                                className="w-full bg-brand-sand/50 border border-brand-taupe/20 px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-taupe/50 focus:border-brand-bronze focus:bg-brand-cream transition-all rounded-xs outline-none"
                              />
                            </div>
                          </div>

                          {/* Project dropdown menu */}
                          <div className="text-left">
                            <label htmlFor="project-type" className="block text-[11px] uppercase font-mono tracking-widest text-brand-charcoal/80 font-semibold mb-2">
                              {t.contact.projectType}
                            </label>
                            <select 
                              id="project-type"
                              value={contactForm.projectType}
                              onChange={(e) => setContactForm(p => ({ ...p, projectType: e.target.value }))}
                              className="w-full bg-brand-sand/50 border border-brand-taupe/20 px-4 py-3 text-sm text-brand-charcoal focus:border-brand-bronze focus:bg-brand-cream transition-all rounded-xs outline-none cursor-pointer"
                            >
                              <option value="design">{t.contact.serviceOptions.design}</option>
                              <option value="coordination">{t.contact.serviceOptions.coordination}</option>
                              <option value="audit">{t.contact.serviceOptions.audit}</option>
                            </select>
                          </div>

                          {/* Free text message details */}
                          <div className="text-left">
                            <label htmlFor="message" className="block text-[11px] uppercase font-mono tracking-widest text-brand-charcoal/80 font-semibold mb-2">
                              {t.contact.messageLabel}
                            </label>
                            <textarea 
                              id="message"
                              rows={4}
                              value={contactForm.message}
                              onChange={(e) => setContactForm(p => ({ ...p, message: e.target.value }))}
                              placeholder={t.contact.placeholderMessage}
                              className="w-full bg-brand-sand/50 border border-brand-taupe/20 p-4 text-sm text-brand-charcoal placeholder:text-brand-taupe/50 focus:border-brand-bronze focus:bg-brand-cream transition-all rounded-xs outline-none resize-none"
                            />
                          </div>

                          {/* Instant Submission to WhatsApp Trigger */}
                          <button 
                            type="submit"
                            className="w-full bg-brand-charcoal text-brand-cream hover:bg-brand-bronze text-xs font-semibold tracking-widest uppercase py-4.5 transition-all duration-300 rounded-sm cursor-pointer hover:-translate-y-0.5 active:translate-y-0 mt-4 flex items-center justify-center space-x-2"
                          >
                            <MessageSquare className="w-4 h-4" />
                            <span>{t.contact.sendBtn}</span>
                          </button>

                          <p className="text-[10px] text-brand-taupe leading-relaxed mt-4">
                            ℹ️ {t.contact.whatsappNotice}
                          </p>

                          {/* Graceful submission indicator */}
                          <AnimatePresence>
                            {formSubmitted && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="bg-emerald-50 text-emerald-900 border border-emerald-200 p-4 rounded-sm text-xs text-left"
                              >
                                <p className="font-semibold">✓ {lang === 'FR' ? 'Message envoyé' : 'Inquiry dispatched'}</p>
                                <p className="mt-1">
                                  {lang === 'FR' 
                                    ? 'Si votre application WhatsApp ne s\'est pas lancée, vous pouvez m\'écrire directement au +33 6 60 98 61 73.'
                                    : 'If WhatsApp did not focus automatically, feel free to text directly via +33 6 60 98 61 73.'}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>

                        </form>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {/* PATHS: '/france', '/suisse', '/usa', '/dubai', '/egypt' (DEDICATED COUNTRIES PAGES) */}
          {isProjectPage && activeProject && (
            <motion.div
              key={currentPath}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.5 }}
              className="py-12 px-6 md:px-12 max-w-7xl mx-auto"
            >
              {/* Back Navigation Bar */}
              <div className="flex justify-between items-center mb-12 border-b border-brand-taupe/15 pb-6">
                <button 
                  id="btn-back-to-home"
                  onClick={() => navigateTo('/')}
                  className="group flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-brand-charcoal hover:text-brand-bronze transition-colors focus:outline-none cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span>{t.projects.backBtn}</span>
                </button>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-brand-taupe font-semibold">
                  ZALY DESIGN PORTFOLIO • {activeProject.country}
                </span>
              </div>

              {/* Huge Immersive Hero Banner with lightness zoom */}
              <div className="relative h-[55vh] md:h-[65vh] w-full bg-brand-cream overflow-hidden rounded-sm shadow-2xl mb-16 group">
                <img 
                  src={activeProject.bannerImage} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover select-none transition-transform duration-1000 group-hover:scale-102"
                  style={{ filter: 'brightness(0.95) contrast(0.95)' }}
                  referrerPolicy="no-referrer"
                />
                {/* Visual gradient filter */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-brand-cream/35 to-transparent" />
                
                {/* Inside Content */}
                <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 text-brand-charcoal text-left max-w-4xl">
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] font-mono text-brand-bronze">
                    {activeProject.location}
                  </span>
                  <h1 className="font-serif text-3.5xl sm:text-5xl md:text-6xl font-light tracking-wide mt-3 mb-4 text-brand-charcoal">
                    {activeProject.title}
                  </h1>
                </div>
              </div>

              {/* Dynamic Information Block detailing design concept */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
                
                {/* Column Left: Concept parameters */}
                <div className="lg:col-span-8 text-left">
                  <h3 className="text-xs font-semibold uppercase tracking-widest font-mono text-brand-bronze mb-6">
                    {t.projects.projectDetailsLabel}
                  </h3>
                  <div className="w-12 h-[1px] bg-brand-bronze mb-6" />
                  <p className="font-serif text-xl sm:text-2xl font-light leading-relaxed text-brand-charcoal/90">
                    {activeProject.introduction}
                  </p>
                </div>

                {/* Column Right: Metadatas list */}
                <div className="lg:col-span-4 bg-brand-sand/50 border border-brand-taupe/15 rounded-sm p-8 text-left">
                  <h4 className="text-[11px] font-mono tracking-widest text-brand-charcoal font-semibold uppercase border-b border-brand-taupe/25 pb-4 mb-6">
                    FICHE TECHNIQUE
                  </h4>
                  <div className="space-y-4 text-xs font-sans">
                    <div className="flex justify-between">
                      <span className="text-brand-taupe font-light">Lead Designer</span>
                      <span className="text-brand-charcoal font-medium">Zaly</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-taupe font-light">Location</span>
                      <span className="text-brand-charcoal font-medium">{activeProject.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-taupe font-light">Durée du projet</span>
                      <span className="text-brand-charcoal font-medium">6 — 12 Mois</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-taupe font-light">Style principal</span>
                      <span className="text-brand-charcoal font-medium">{lang === 'FR' ? 'Luxe discret & Naturel' : 'Quiet Luxury & Warm Minimal'}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setContactForm(prev => ({ 
                        ...prev, 
                        projectType: 'design',
                        message: `Bonjour Zaly, je viens de consulter votre magnifique projet en ${activeProject.country} (${activeProject.title}) et j'aimerais vous parler d'un aménagement...`
                      }));
                      scrollToSection('contact');
                    }}
                    className="w-full mt-8 bg-brand-charcoal text-brand-cream hover:bg-brand-bronze text-[10px] font-bold uppercase tracking-widest py-3 transition-colors rounded-sm"
                  >
                    {lang === 'FR' ? 'Concevoir un espace similaire' : 'Commission similar space'}
                  </button>
                </div>

              </div>

              {/* Gallery Title */}
              <div className="text-left mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest font-mono text-brand-bronze">
                  {t.projects.projectGalleryLabel}
                </span>
                <div className="w-16 h-[2px] bg-brand-bronze mt-4" />
              </div>

              {/* Large responsive gallery with lightzoom zoom on hover */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {activeProject.gallery.map((imgItem, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    className="flex flex-col bg-brand-sand/30 border border-brand-taupe/10 p-4 rounded-sm hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] bg-brand-charcoal overflow-hidden rounded-sm relative group">
                      <img 
                        src={imgItem.url} 
                        alt={imgItem.caption} 
                        className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-white text-center text-xs backdrop-blur-xs font-serif italic">
                        {imgItem.caption}
                      </div>
                    </div>
                    
                    <p className="text-xs text-brand-charcoal/80 font-mono tracking-wide mt-4 text-left leading-relaxed">
                      <span className="text-brand-bronze font-semibold mr-2">{String(idx + 1).padStart(2, '0')} //</span>
                      {imgItem.caption}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Back home trigger bottom */}
              <div className="flex justify-center border-t border-brand-taupe/15 pt-12">
                <button 
                  onClick={() => navigateTo('/')}
                  className="bg-brand-charcoal text-brand-cream hover:bg-brand-bronze text-xs font-semibold tracking-widest uppercase px-10 py-4 transition-colors rounded-sm cursor-pointer"
                >
                  ← {lang === 'FR' ? 'Retour aux réalisations' : 'Back to portfolios'}
                </button>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer id="main-footer" className="bg-brand-cream text-brand-charcoal pt-20 pb-10 border-t border-brand-taupe/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-charcoal/10">
            
            {/* Logo and Tagline Col */}
            <div className="md:col-span-5 text-left">
              <span className="font-serif font-semibold text-3xl tracking-[0.25em] text-brand-charcoal">
                ZALY DESIGN
              </span>
              <p className="text-xs tracking-[0.3em] font-mono text-brand-bronze uppercase mt-1">
                STUDIO D'INTERIEUR HAUT DE GAMME
              </p>
              
              <p className="text-sm text-brand-charcoal/80 font-normal mt-8 max-w-sm leading-relaxed font-sans">
                {t.footer.tagline}
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-8">
                <a 
                  href="https://instagram.com" 
                  aria-label="Instagram Zaly Design" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 border border-brand-charcoal/20 hover:border-brand-bronze rounded-full text-brand-charcoal/80 hover:text-brand-bronze transition-colors animate-pulse-slow"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  aria-label="LinkedIn Zaly Design" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 border border-brand-charcoal/20 hover:border-brand-bronze rounded-full text-brand-charcoal/80 hover:text-brand-bronze transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://wa.me/33660986173" 
                  aria-label="WhatsApp Zaly Design" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 border border-brand-charcoal/20 hover:border-brand-bronze rounded-full text-brand-charcoal/80 hover:text-brand-bronze transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Global presence col */}
            <div className="md:col-span-4 text-left">
              <p className="text-xs uppercase font-mono tracking-[0.25em] text-brand-bronze font-bold mb-6">
                {t.footer.presenceTitle}
              </p>
              <ul className="space-y-3 text-sm text-brand-charcoal/80 font-normal font-sans">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-bronze rounded-full" />
                  <span>Paris — Bureau Central</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-bronze rounded-full" />
                  <span>Suisse — Chalets alpins</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-bronze rounded-full" />
                  <span>New York — Lofts urbains</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-bronze rounded-full" />
                  <span>Dubaï — Résidences d'exceptions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-bronze rounded-full" />
                  <span>Le Caire — Villas de bord de Nil</span>
                </li>
              </ul>
            </div>

            {/* Quick Links / Opening times col */}
            <div className="md:col-span-3 text-left">
              <p className="text-xs uppercase font-mono tracking-[0.25em] text-brand-bronze font-bold mb-6">
                {t.footer.hoursTitle}
              </p>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed font-sans mb-6">
                {t.footer.hoursVal}
              </p>

              <div className="pt-4 border-t border-brand-charcoal/10">
                <p className="text-[10px] text-brand-taupe uppercase font-mono tracking-widest font-semibold mb-2">HOTLINE WHATSAPP</p>
                <a 
                  href="https://wa.me/33660986173" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-mono text-sm text-brand-charcoal hover:text-brand-bronze transition-colors font-medium"
                >
                  +33 6 60 98 61 73
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-brand-charcoal/60 select-none">
            <p>
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 font-sans">
              <button onClick={() => navigateTo('/')} className="hover:text-brand-bronze transition-colors cursor-pointer">{lang === 'FR' ? "L'Éthique" : "Ethics Policy"}</button>
              <button onClick={() => navigateTo('/')} className="hover:text-brand-bronze transition-colors cursor-pointer">{lang === 'FR' ? "Mentions Légales" : "Legal Notice"}</button>
              <button onClick={() => navigateTo('/')} className="hover:text-brand-bronze transition-colors cursor-pointer">{lang === 'FR' ? "Crédits Photos" : "Credits"}</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
