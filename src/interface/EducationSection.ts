interface EducationItem {
    icon: string;
    institute: string;
    degree: string;
    description: string[];
    startDate: string;
    endDate: string | null,
    adress: string
}

export interface EducationSection {
    icon: string;
    title: string;
    items: EducationItem[];
}
