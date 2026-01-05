import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../constants/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Check saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'id' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const setLang = (lang) => {
    if (lang === 'en' || lang === 'id') {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  // Helper function to get translation by key path (e.g., 'hero.role')
  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        console.warn(`Translation not found for key: ${keyPath}`);
        return keyPath;
      }
    }
    
    return value;
  };

  const value = {
    language,
    setLanguage: setLang,
    toggleLanguage,
    t,
    translations: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
