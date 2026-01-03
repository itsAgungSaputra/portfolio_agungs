import { useState, useEffect } from 'react';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import logoLight from '../assets/logo(lightmode).png';
import logoDark from '../assets/logo(darkmode).png';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar-pill flex items-center gap-3 md:gap-6 transition-all duration-300 ${
      isScrolled ? 'shadow-xl' : ''
    }`}>
      {/* Logo */}
      <a 
        href="#home" 
        className="flex items-center transition-opacity hover:opacity-80"
      >
        <img 
          src={isDark ? logoDark : logoLight}
          alt="Agung Saputra Logo"
          className="h-8 md:h-10 w-auto object-contain"
        />
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-all duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="btn-ghost rounded-full"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <HiSun className="w-5 h-5 text-yellow-500" />
        ) : (
          <HiMoon className="w-5 h-5 text-indigo-600" />
        )}
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden btn-ghost rounded-full"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <HiX className="w-5 h-5" />
        ) : (
          <HiMenuAlt3 className="w-5 h-5" />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-neutral-800/50 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
