interface ExperienceItem {
    icon: string;
    company: string;
    position: string;
    description: string[];
    startDate: string;
    endDate: string | null,
    adress: string
}

export interface ExperienceSection {
    icon: string;
    title: string;
    items: ExperienceItem[];
}
