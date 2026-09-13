import { useState, useEffect } from 'react';
import { HiSun, HiMoon, HiHome, HiCode, HiMail, HiAcademicCap, HiBriefcase, HiGlobeAlt } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import logoLight from '../assets/logo(lightmode).png';
import logoDark from '../assets/logo(darkmode).png';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    // Check saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section for mobile dock
      const sections = ['home', 'skills', 'education', 'experience', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.skills'), href: '#skills' },
    { name: t('navbar.education'), href: '#education' },
    { name: t('navbar.experience'), href: '#experience' },
    { name: t('navbar.portfolio'), href: '#portfolio' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  // Mobile dock navigation items with icons
  const dockItems = [
    { id: 'home', icon: HiHome, label: t('navbar.home') },
    { id: 'education', icon: HiAcademicCap, label: t('navbar.education') },
    { id: 'experience', icon: HiBriefcase, label: t('navbar.experience') },
    { id: 'portfolio', icon: HiCode, label: t('navbar.portfolio') },
    { id: 'contact', icon: HiMail, label: t('navbar.contact') },
  ];

  const handleDockClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <nav className={`navbar-pill hidden md:flex items-center gap-2 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : ''
      }`}>
        {/* Logo */}
        <a 
          href="#home" 
          className="flex-shrink-0 flex items-center transition-opacity hover:opacity-80"
        >
          {/* Light mode logo */}
          <img 
            src={logoLight}
            alt="Agung Saputra Logo"
            className="h-8 w-auto object-contain dark:hidden"
          />
          {/* Dark mode logo */}
          <img 
            src={logoDark}
            alt="Agung Saputra Logo"
            className="h-8 w-auto object-contain hidden dark:block"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2.5 py-1.5 text-sm font-medium text-warm-600 dark:text-warm-400 hover:text-warm-900 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-warm-800 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex-shrink-0 flex items-center gap-1 px-2 py-1.5 rounded-full bg-warm-100 dark:bg-warm-800 hover:bg-warm-200 dark:hover:bg-warm-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2"
          aria-label="Toggle language"
        >
          <HiGlobeAlt className="w-4 h-4 text-warm-600 dark:text-warm-400" />
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-xs font-semibold text-warm-700 dark:text-warm-300 uppercase"
            >
              {language}
            </motion.span>
          </AnimatePresence>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-warm-100 dark:bg-warm-800 hover:bg-warm-200 dark:hover:bg-warm-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <HiSun className="w-5 h-5 text-yellow-500" />
          ) : (
            <HiMoon className="w-5 h-5 text-warm-600" />
          )}
        </button>
      </nav>

      {/* Mobile Top Bar - Logo & Theme Toggle Only */}
      <header className="fixed top-0 left-0 right-0 z-40 md:hidden bg-white/85 dark:bg-warm-900/85 backdrop-blur-xl border-b border-warm-200/60 dark:border-warm-800/60">
        <div className="flex items-center justify-between px-4 py-2.5">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center transition-opacity hover:opacity-80"
          >
            {/* Light mode logo */}
            <img 
              src={logoLight}
              alt="Agung Saputra Logo"
              className="h-8 w-auto object-contain dark:hidden"
            />
            {/* Dark mode logo */}
            <img 
              src={logoDark}
              alt="Agung Saputra Logo"
              className="h-8 w-auto object-contain hidden dark:block"
            />
          </a>

          {/* Language & Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-warm-100 dark:bg-warm-800 hover:bg-warm-200 dark:hover:bg-warm-700 transition-colors"
              aria-label="Toggle language"
            >
              <HiGlobeAlt className="w-4 h-4 text-warm-600 dark:text-warm-400" />
              <span className="text-xs font-semibold text-warm-700 dark:text-warm-300 uppercase">
                {language}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-warm-100 dark:bg-warm-800 hover:bg-warm-200 dark:hover:bg-warm-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <HiSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <HiMoon className="w-5 h-5 text-warm-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Dock Navigation */}
      <div className="fixed bottom-5 left-0 right-0 z-50 md:hidden flex justify-center px-4 pointer-events-none">
        <motion.nav 
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-auto"
        >
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/90 dark:bg-warm-900/90 backdrop-blur-xl border border-warm-200/80 dark:border-warm-800/80 shadow-2xl">
            {dockItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleDockClick(item.id)}
                  className={`relative flex flex-col items-center justify-center w-12 h-11 rounded-xl transition-colors ${
                    isActive 
                      ? 'bg-amber-100/70 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400' 
                      : 'text-warm-500 dark:text-warm-400 hover:bg-warm-100 dark:hover:bg-warm-800'
                  }`}
                  aria-label={item.label}
                >
                  <Icon className="w-5 h-5" />
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute -bottom-0.5 w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
                  )}
                </button>
              );
            })}
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
