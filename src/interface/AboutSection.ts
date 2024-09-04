interface LanguageItem {
    name: string,
    measure: string,
}

interface AboutItem {
    fieldName: string;
    fieldValue: string;
}

export interface AboutSection {
    title: string;
    description: string;
    info: AboutItem[];
    language: LanguageItem[];
}
