// context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'FR' | 'ENG';

interface LanguageContextProps {
    language: Language;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('FR');

    const toggleLanguage = () => {
        setLanguage(prevLang => {
            const newLang = prevLang === 'FR' ? 'ENG' : 'FR';
            return newLang;
        });
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
