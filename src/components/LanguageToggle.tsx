import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle: React.FC = () => {

    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="flex  w-20 md:w-30 items-center space-x-2 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">
            <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 p-2"
            >
                {language === 'ENG' ? (
                    <>
                        <Image src={`/languages/FR.png`} alt={`Drapeau FR`} width={20} height={20} />
                        <span>FR</span>
                    </>
                ) : (
                    <>
                        <Image src={`/languages/ENG.png`} alt={`ENG Flag`} width={20} height={20} />
                        <span>ENG</span>
                    </>
                )}
            </button>
        </div>
    );
};

export default LanguageToggle;
