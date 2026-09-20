import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AiOutlineMail, 
  AiOutlineSend,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineCheck,
  AiOutlineCopy,
  AiOutlineLoading3Quarters,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle
} from "react-icons/ai";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

// Toast Notification Component
const Toast = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -20, x: "-50%" }}
    animate={{ opacity: 1, y: 0, x: "-50%" }}
    exit={{ opacity: 0, y: -20, x: "-50%" }}
    role={type === 'success' ? 'status' : 'alert'}
    aria-live={type === 'success' ? 'polite' : 'assertive'}
    className={`fixed top-24 left-1/2 z-50 px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 ${
      type === 'success' 
        ? 'bg-green-100 dark:bg-green-900/80 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800' 
        : 'bg-red-100 dark:bg-red-900/80 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
    }`}
  >
    {type === 'success' ? (
      <AiOutlineCheckCircle className="text-xl flex-shrink-0" />
    ) : (
      <AiOutlineCloseCircle className="text-xl flex-shrink-0" />
    )}
    <span className="text-sm font-medium">{message}</span>
    <button
      onClick={onClose}
      className="ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded-lg"
      aria-label="Close notification"
    >
      ✕
    </button>
  </motion.div>
);

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toast, setToast] = useState(null);

  // Web3Forms Access Key
  const WEB3FORMS_ACCESS_KEY = "f24f9b95-3c52-4c50-a5eb-817f0cf18c61";

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const handleCopyEmail = async () => {
    const email = "agungsaputraofficial@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        })
      });

      const result = await response.json();

      if (result.success) {
        showToast(
          language === 'id' 
            ? "Pesan berhasil dikirim! Saya akan segera menghubungi Anda." 
            : "Message sent successfully! I'll get back to you soon.",
          'success'
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showToast(
        language === 'id'
          ? "Gagal mengirim pesan. Silakan coba lagi atau hubungi via email."
          : "Failed to send message. Please try again or contact via email.",
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: <AiOutlineMail />,
      label: "Email",
      value: "agungsaputraofficial@gmail.com",
      href: "mailto:agungsaputraofficial@gmail.com"
    },
    {
      icon: <AiOutlineLinkedin />,
      label: "LinkedIn",
      value: "agungsaputra14",
      href: "https://www.linkedin.com/in/agungsaputra14/"
    },
    {
      icon: <AiOutlineGithub />,
      label: "GitHub",
      value: "itsAgungSaputra",
      href: "https://github.com/itsAgungSaputra"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast(null)} 
          />
        )}
      </AnimatePresence>

      <div className="container-main">
        {/* Section Header */}
        <Reveal className="mb-12">
          <span className="section-label">{t('contact.label')}</span>
          <h2 className="section-title mb-4">{t('contact.title')}</h2>
          <p className="section-subtitle max-w-xl">
            {t('contact.subtitle')}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Contact Form */}
          <Reveal delay={0.05} className="lg:col-span-3">
          <div className="bento-card h-full">
            <h3 className="font-heading text-lg md:text-xl font-bold text-warm-900 dark:text-white mb-4 md:mb-6">
              {t('contact.sendMessage')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-warm-600 dark:text-warm-400 mb-2">
                    {t('contact.yourName')}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-minimal"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-warm-600 dark:text-warm-400 mb-2">
                    {t('contact.yourEmail')}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-minimal"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-warm-600 dark:text-warm-400 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-minimal resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <AiOutlineLoading3Quarters className="animate-spin" />
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <AiOutlineSend />
                    {t('contact.send')}
                  </>
                )}
              </motion.button>
            </form>
          </div>
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={0.12} className="lg:col-span-2">
            <div className="space-y-3 md:space-y-4">
            {/* Email - Copy to Clipboard */}
            <motion.button
              onClick={handleCopyEmail}
              className="bento-card bento-card-hover flex items-center gap-3 md:gap-4 group w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2"
              whileTap={{ scale: 0.98 }}
            >
              <div className={`w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center text-lg md:text-xl transition-all ${
                copiedEmail 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                  : 'bg-warm-100 dark:bg-warm-800 text-warm-600 dark:text-warm-400 group-hover:bg-warm-100 dark:group-hover:bg-warm-800 group-hover:text-amber-700 dark:group-hover:text-amber-400'
              }`}>
                {copiedEmail ? <AiOutlineCheck /> : <AiOutlineMail />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-warm-600 dark:text-warm-400 uppercase tracking-wider mb-0.5">
                  Email
                </p>
                <p className="font-medium text-sm md:text-base text-warm-900 dark:text-white truncate">
                  {copiedEmail ? t('contact.copied') : 'agungsaputraofficial@gmail.com'}
                </p>
              </div>
              <div className={`text-base md:text-lg flex-shrink-0 transition-all ${
                copiedEmail 
                  ? 'text-green-500' 
                  : 'text-warm-600 group-hover:text-amber-500'
              }`}>
                {copiedEmail ? <AiOutlineCheck /> : <AiOutlineCopy />}
              </div>
            </motion.button>

            {/* Other Contact Links */}
            {contactLinks.filter(c => c.label !== 'Email').map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card bento-card-hover flex items-center gap-3 md:gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2"
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-warm-100 dark:bg-warm-800 flex items-center justify-center text-lg md:text-xl text-warm-600 dark:text-warm-400 group-hover:bg-warm-100 dark:group-hover:bg-warm-800 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-all">
                  {contact.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-warm-600 dark:text-warm-400 uppercase tracking-wider mb-0.5">
                    {contact.label}
                  </p>
                  <p className="font-medium text-sm md:text-base text-warm-900 dark:text-white truncate">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Additional Info Card */}
            <div className="bento-card bg-warm-50 dark:bg-warm-800/50">
              <p className="text-sm text-warm-600 dark:text-warm-400">
                {t('contact.basedIn')} <span className="font-semibold text-warm-900 dark:text-white">Gorontalo, Indonesia</span>. 
                {t('contact.openRemote')}
              </p>
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
