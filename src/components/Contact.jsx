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
import { useLanguage } from "../context/LanguageContext";

// Toast Notification Component
const Toast = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -20, x: "-50%" }}
    animate={{ opacity: 1, y: 0, x: "-50%" }}
    exit={{ opacity: 0, y: -20, x: "-50%" }}
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
    <button onClick={onClose} className="ml-2 hover:opacity-70">
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
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-4">{t('contact.title')}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Contact Form */}
                <motion.div
                className="bento-card lg:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                >
                <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white mb-4 md:mb-6">
                  {t('contact.sendMessage')}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                    {t('contact.yourName')}
                    </label>
                    <input
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
                    <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                    {t('contact.yourEmail')}
                    </label>
                    <input
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
                  <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
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
                </motion.div>

                {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-3 md:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Email - Copy to Clipboard */}
            <motion.button
              onClick={handleCopyEmail}
              className="bento-card bento-card-hover flex items-center gap-3 md:gap-4 group w-full text-left cursor-pointer"
              whileTap={{ scale: 0.98 }}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-2xl flex items-center justify-center text-lg md:text-xl transition-all ${
                copiedEmail 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                  : 'bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
              }`}>
                {copiedEmail ? <AiOutlineCheck /> : <AiOutlineMail />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-0.5">
                  Email
                </p>
                <p className="font-medium text-sm md:text-base text-neutral-900 dark:text-white truncate">
                  {copiedEmail ? t('contact.copied') : 'agungsaputraofficial@gmail.com'}
                </p>
              </div>
              <div className={`text-base md:text-lg flex-shrink-0 transition-all ${
                copiedEmail 
                  ? 'text-green-500' 
                  : 'text-neutral-400 group-hover:text-indigo-500'
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
                className="bento-card bento-card-hover flex items-center gap-3 md:gap-4 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-2xl bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-lg md:text-xl text-neutral-600 dark:text-neutral-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all">
                  {contact.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-0.5">
                    {contact.label}
                  </p>
                  <p className="font-medium text-sm md:text-base text-neutral-900 dark:text-white truncate">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Additional Info Card */}
            <div className="bento-card bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-100 dark:border-indigo-900/30">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t('contact.basedIn')} <span className="font-semibold text-neutral-900 dark:text-white">Gorontalo, Indonesia</span>. 
                {t('contact.openRemote')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
