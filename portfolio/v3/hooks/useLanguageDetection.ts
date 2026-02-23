"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageDetection = () => {
  const { i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const detectAndSetLanguage = () => {
      const browserLang = navigator.language || navigator.languages?.[0] || 'en';
      const langCode = browserLang.split('-')[0].toLowerCase();
      const supportedLangs = ['en', 'fr'];
      const detectedLang = supportedLangs.includes(langCode) ? langCode : 'en';
      const storedLang = localStorage.getItem('i18nextLng');

      if (!storedLang && i18n.language !== detectedLang) {
        i18n.changeLanguage(detectedLang);
      }

      setIsInitialized(true);
    };

    if (i18n.isInitialized) {
      detectAndSetLanguage();
    } else {
      i18n.on('initialized', detectAndSetLanguage);
    }

    return () => {
      i18n.off('initialized', detectAndSetLanguage);
    };
  }, [i18n]);

  return { isInitialized, currentLanguage: i18n.language };
};
