import { 
  AiOutlineGithub, 
  AiOutlineLinkedin, 
  AiOutlineInstagram,
  AiOutlineBehance,
  AiOutlineHeart
} from "react-icons/ai";
import logoLight from '../assets/logo(lightmode).png';
import logoDark from '../assets/logo(darkmode).png';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <AiOutlineGithub />, href: "https://github.com/itsAgungSaputra", label: "GitHub" },
    { icon: <AiOutlineLinkedin />, href: "https://www.linkedin.com/in/agungsaputra14/", label: "LinkedIn" },
    { icon: <AiOutlineInstagram />, href: "https://www.instagram.com/agung_saputra____", label: "Instagram" },
    { icon: <AiOutlineBehance />, href: "https://www.behance.net/itsagungsaputra", label: "Behance" },
  ];

  const navLinks = [
    { name: t('navbar.home'), href: "#home" },
    { name: t('navbar.skills'), href: "#skills" },
    { name: t('navbar.education'), href: "#education" },
    { name: t('navbar.experience'), href: "#experience" },
    { name: t('navbar.portfolio'), href: "#portfolio" },
    { name: t('navbar.contact'), href: "#contact" },
  ];

  return (
    <footer className="py-8 md:py-12 px-4 pb-24 md:pb-12 border-t border-warm-200 dark:border-warm-800">
      <div className="container-main">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <a 
              href="#home" 
              className="transition-opacity hover:opacity-80"
            >
              {/* Light mode logo */}
              <img 
                src={logoLight}
                alt="Agung Saputra Logo"
                className="h-8 md:h-10 w-auto object-contain dark:hidden"
              />
              {/* Dark mode logo */}
              <img 
                src={logoDark}
                alt="Agung Saputra Logo"
                className="h-8 md:h-10 w-auto object-contain hidden dark:block"
              />
            </a>
            <p className="text-xs md:text-sm text-warm-500 dark:text-warm-500 flex items-center justify-center md:justify-start gap-1 flex-wrap max-w-xs md:max-w-none">
              <span>© {currentYear} Agung Saputra.</span>
              <span className="flex items-center gap-1">
                {t('footer.madeWith')} <AiOutlineHeart className="text-red-500" />
              </span>
              <span className="hidden md:inline">{t('footer.allRights')}</span>
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-6 order-last md:order-none">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-warm-600 dark:text-warm-400 hover:text-warm-900 dark:hover:text-warm-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3 md:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 rounded-lg flex items-center justify-center text-lg md:text-xl text-warm-500 dark:text-warm-400 hover:text-warm-900 dark:hover:text-warm-100 transition-colors duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
