import { useState, useEffect } from 'react';
import { HiSun, HiMoon, HiHome, HiCode, HiMail, HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import { motion } from 'framer-motion';
import logoLight from '../assets/logo(lightmode).png';
import logoDark from '../assets/logo(darkmode).png';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  // Mobile dock navigation items with icons
  const dockItems = [
    { id: 'home', icon: HiHome, label: 'Home' },
    { id: 'education', icon: HiAcademicCap, label: 'Education' },
    { id: 'experience', icon: HiBriefcase, label: 'Experience' },
    { id: 'portfolio', icon: HiCode, label: 'Portfolio' },
    { id: 'contact', icon: HiMail, label: 'Contact' },
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
      <nav className={`navbar-pill hidden md:flex items-center gap-2 md:gap-4 transition-all duration-300 ${
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
        <div className="flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex-shrink-0 btn-ghost rounded-full"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <HiSun className="w-5 h-5 text-yellow-500" />
          ) : (
            <HiMoon className="w-5 h-5 text-indigo-600" />
          )}
        </button>
      </nav>

      {/* Mobile Top Bar - Logo & Theme Toggle Only */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-neutral-800/50">
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

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <HiSun className="w-5 h-5 text-yellow-500" />
            ) : (
              <HiMoon className="w-5 h-5 text-indigo-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Bottom Dock Navigation */}
      <div className="fixed bottom-6 left-0 right-0 z-50 md:hidden flex justify-center px-4">
        <motion.nav 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-neutral-800/50 shadow-xl">
            {dockItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleDockClick(item.id)}
                  className={`relative flex flex-col items-center justify-center w-14 h-12 rounded-xl transition-colors ${
                    isActive 
                      ? 'bg-indigo-50 dark:bg-indigo-900/30' 
                      : 'hover:bg-gray-100 dark:hover:bg-neutral-800'
                  }`}
                  whileTap={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  aria-label={item.label}
                >
                  <Icon 
                    className={`w-6 h-6 transition-colors ${
                      isActive 
                        ? 'text-indigo-500' 
                        : 'text-neutral-500 dark:text-neutral-400'
                    }`}
                  />
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div 
                      className="absolute -bottom-1 w-1 h-1 rounded-full bg-indigo-500"
                      layoutId="activeDot"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
