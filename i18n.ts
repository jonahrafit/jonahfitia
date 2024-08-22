// i18n.ts

import i18next from 'i18next';
import Backend from 'i18next-http-backend'; // Utilisé pour charger les fichiers de traduction

i18next
    .use(Backend)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export const getTranslations = async (locale: string) => {
    await i18next.changeLanguage(locale);
    return i18next.getResourceBundle(locale, 'common'); // Charge les ressources nécessaires
};
