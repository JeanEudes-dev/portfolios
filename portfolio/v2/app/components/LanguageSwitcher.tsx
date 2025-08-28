"use client";

import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸', shortName: 'EN' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', shortName: 'FR' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const switchLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-md border border-slate-600/30 hover:border-slate-500/50 text-slate-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={t('language.label')}
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex items-center space-x-2">
          <motion.span 
            className="text-lg filter drop-shadow-sm"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {currentLanguage.flag}
          </motion.span>
          <span className="text-sm font-medium tracking-wide">
            {currentLanguage.shortName}
          </span>
          <motion.svg
            className="w-4 h-4 opacity-60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full mt-2 w-48 right-0 z-50"
          >
            <div className="relative bg-slate-800/95 backdrop-blur-xl border border-slate-600/40 rounded-xl shadow-2xl overflow-hidden">
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              
              <div className="relative py-2">
                {languages.map((language) => {
                  const isActive = language.code === i18n.language;
                  return (
                    <motion.button
                      key={language.code}
                      onClick={() => switchLanguage(language.code)}
                      className={`w-full px-4 py-3 flex items-center space-x-3 text-left transition-all duration-200 ${
                        isActive 
                          ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 border-l-2 border-teal-400' 
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      whileHover={{ x: isActive ? 0 : 4 }}
                      transition={{ duration: 0.15 }}
                    >
                      <span className="text-xl">{language.flag}</span>
                      <div className="flex-1">
                        <div className="font-medium">{language.name}</div>
                        {isActive && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-teal-400/80"
                          >
                            {t('language.current')}
                          </motion.div>
                        )}
                      </div>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-teal-400"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;