import { SkillItem } from "./SkillItem";

export interface SkillSection {
    icon: string;
    title: string;
    description: string;
    languages: SkillItem[];
    framework: SkillItem[];
    database: SkillItem[];
    tools: SkillItem[];
    other: SkillItem[];
}
