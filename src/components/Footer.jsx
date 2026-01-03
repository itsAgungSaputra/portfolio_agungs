import { 
  AiOutlineGithub, 
  AiOutlineLinkedin, 
  AiOutlineInstagram,
  AiOutlineBehance,
  AiOutlineHeart
} from "react-icons/ai";
import logoLight from '../assets/logo(lightmode).png';
import logoDark from '../assets/logo(darkmode).png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <AiOutlineGithub />, href: "https://github.com/itsAgungSaputra", label: "GitHub" },
    { icon: <AiOutlineLinkedin />, href: "https://www.linkedin.com/in/agungsaputra14/", label: "LinkedIn" },
    { icon: <AiOutlineInstagram />, href: "https://www.instagram.com/agung_saputra____", label: "Instagram" },
    { icon: <AiOutlineBehance />, href: "https://www.behance.net/itsagungsaputra", label: "Behance" },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-8 md:py-12 px-4 border-t border-gray-200 dark:border-neutral-800">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
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
            <p className="text-sm text-neutral-500 dark:text-neutral-500 flex items-center gap-1">
              © {currentYear} Agung Saputra. Made with 
              <AiOutlineHeart className="text-red-500" /> 
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-all"
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
