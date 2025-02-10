import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { translations } from '../constants/translations';

const LanguageContext = createContext();

// Dizi kontrolü için yardımcı fonksiyon
const isArrayPath = (path) => {
  const arrayPaths = ['explore.locations', 'journal.posts'];
  return arrayPaths.includes(path);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // localStorage'dan dil tercihini al, yoksa varsayılan olarak 'tr' kullan
    return localStorage.getItem('language') || 'tr';
  });

  // Dil değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  const t = (key) => {
    try {
      const keys = key.split('.');
      let value = translations[language];
      
      // Eğer dizi beklenen bir yol ise ve değer bulunamadıysa boş dizi döndür
      if (isArrayPath(key)) {
        let arrayValue = value;
        for (const k of keys) {
          if (!arrayValue) break;
          arrayValue = arrayValue[k];
        }
        return Array.isArray(arrayValue) ? arrayValue : [];
      }

      // Normal değer kontrolü
      for (const k of keys) {
        if (!value || (typeof value !== 'object' && !Array.isArray(value))) {
          // Diğer dildeki değeri kontrol et
          const otherLang = language === 'tr' ? 'en' : 'tr';
          let otherValue = translations[otherLang];
          
          for (const key of keys) {
            if (!otherValue) break;
            otherValue = otherValue[key];
          }
          
          return otherValue || key;
        }
        value = value[k];
      }
      
      if (value === undefined || value === null) {
        // Diğer dildeki değeri kontrol et
        const otherLang = language === 'tr' ? 'en' : 'tr';
        let otherValue = translations[otherLang];
        
        for (const k of keys) {
          if (!otherValue) break;
          otherValue = otherValue[k];
        }
        
        return otherValue || key;
      }
      
      return value;
    } catch (error) {
      console.warn(`Error getting translation for key: ${key}`, error);
      return isArrayPath(key) ? [] : key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 