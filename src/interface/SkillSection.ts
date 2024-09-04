interface SkillItem {
    icon: string;
    name: string;
}

export interface SkillSection {
    icon: string;
    title: string;
    description: string;
    skillList: SkillItem[];
}
