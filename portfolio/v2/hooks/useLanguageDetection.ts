"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageDetection = () => {
  const { i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const detectAndSetLanguage = () => {
      // Get browser language
      const browserLang = navigator.language || navigator.languages?.[0] || 'en';
      
      // Extract the language code (e.g., 'fr-FR' -> 'fr')
      const langCode = browserLang.split('-')[0].toLowerCase();
      
      // Check if we support this language
      const supportedLangs = ['en', 'fr'];
      const detectedLang = supportedLangs.includes(langCode) ? langCode : 'en';
      
      // Check if there's already a stored preference
      const storedLang = localStorage.getItem('i18nextLng');
      
      // If no stored preference, use detected language
      if (!storedLang && i18n.language !== detectedLang) {
        i18n.changeLanguage(detectedLang);
      }
      
      setIsInitialized(true);
    };

    // Wait for i18n to be ready
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