"use client";

import React from "react";
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaJava, FaNodeJs
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { ExperienceSection } from "@/interface/ExperienceSection";
import { EducationSection } from "@/interface/EducationSection";
import { SkillSection } from "@/interface/SkillSection";
import { AboutSection } from "@/interface/AboutSection";
import { SkillItem } from "@/interface/SkillItem";

import experienceDataENG from "@/data/experience-ENG.json";
import experienceDataFR from "@/data/experience-FR.json";
import educationDataENG from '@/data/education-ENG.json';
import educationDataFR from '@/data/education-FR.json';
import skillDataENG from '@/data/skill-ENG.json';
import skillDataFR from '@/data/skill-FR.json';
import aboutDataENG from '@/data/about-ENG.json';
import aboutDataFR from '@/data/about-FR.json';
import { useLanguage } from '@/context/LanguageContext';
import Image from "next/image";
import iconMap from "@/context/iconMap";

const tabs = [
    {
        "tab_link": "experience",
        "FR": "Experiences professionnelles",
        "ENG": "Professionnal Experience"
    },
    {
        "tab_link": "education",
        "FR": "Parcours scolaire",
        "ENG": "Schoole career"
    },
    {
        "tab_link": "skills",
        "FR": "Mes compétences",
        "ENG": "Skills"
    },
    {
        "tab_link": "about",
        "FR": "A propos de moi",
        "ENG": "About me"
    },
];

const tabs_skill = [
    {
        "tab_skills_link": "languages",
        "FR": "Langage de programmation",
        "ENG": "Programming languages"
    }, {
        "tab_skills_link": "framework",
        "FR": "Framework",
        "ENG": "Framework"
    }, {
        "tab_skills_link": "database",
        "FR": "Base de donnée",
        "ENG": "Database"
    }, {
        "tab_skills_link": "tools",
        "FR": "Outils",
        "ENG": "Tools"
    }, {
        "tab_skills_link": "other",
        "FR": "Autres",
        "ENG": "Other"
    }
];

const convertDate = (dateStr: string | null, lang: 'ENG' | 'FR'): string => {
    if (dateStr === null) {
        if (lang === 'ENG') {
            return 'Now'
        }
        else {
            return "aujourd'hui"
        }
    }

    const [year, month] = dateStr.split('-');

    const months: Record<string, string[]> = {
        ENG: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        FR: ['Janv', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc']
    };

    const monthName = months[lang][parseInt(month) - 1];
    return `${monthName} ${year}`;
};


const Resume = () => {
    const { language } = useLanguage();
    const experiences: ExperienceSection = language === 'FR' ? (experienceDataFR as ExperienceSection) : (experienceDataENG as ExperienceSection);
    const educations: EducationSection = language === 'FR' ? (educationDataFR as EducationSection) : (educationDataENG as EducationSection);
    const skills: SkillSection = language === 'FR' ? (skillDataFR as SkillSection) : (skillDataFR as SkillSection);
    const about: AboutSection = language === 'FR' ? (aboutDataFR as AboutSection) : (aboutDataENG as AboutSection);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[30px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        {tabs.map((item, index) => (
                            <TabsTrigger value={item.tab_link} key={index}>{language === "ENG" ? item.ENG : item.FR}</TabsTrigger>
                        ))}
                    </TabsList>

                    <div className="min-h-[70vh] w-full">

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex items-center gap-3">
                                    <Image src={'/logo_exp' + experiences.icon}
                                        priority
                                        quality={100}
                                        width={50}
                                        height={50}
                                        alt=""
                                        className='object-contain'
                                    ></Image>
                                    <h3 className="text-4xl font-bold">{experiences.title}</h3>
                                </div>
                                <ScrollArea className="h-[400px] xl:h-[600px]">
                                    <ul className="grid grid-cols-1 gap-[15px]">
                                        {experiences.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{convertDate(item.startDate, language) + ' - ' + convertDate(item.endDate, language)}</span>
                                                    <h3 className="text-xl max-w-[260px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <Image src={'/logo_exp' + item.icon}
                                                            priority
                                                            quality={100}
                                                            width={50}
                                                            height={50}
                                                            alt=""
                                                            className='object-contain'
                                                        ></Image>
                                                        <p className="text-white">{item.company},</p>
                                                        <p className="text-white/60">{item.adress}</p>
                                                    </div>
                                                    <div className="gap-3">
                                                        {item.description.map((item, index) => (
                                                            <div className="flex items-center gap-3" key={index}>
                                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                                <p className="text-white/60">{item}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex items-center gap-3">
                                    <Image src={'/logo_education' + educations.icon}
                                        priority
                                        quality={100}
                                        width={50}
                                        height={50}
                                        alt=""
                                        className='object-contain'
                                    ></Image>
                                    <h3 className="text-4xl font-bold">{educations.title}</h3>
                                </div><ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[20px]">
                                        {educations.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{convertDate(item.startDate, language) + ' - ' + convertDate(item.endDate, language)}</span>
                                                    <h3 className="text-xl text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <Image src={'/logo_education' + item.icon}
                                                            priority
                                                            quality={100}
                                                            width={50}
                                                            height={50}
                                                            alt=""
                                                            className='object-contain'
                                                        ></Image>
                                                        <p className="text-white">{item.institute},</p>
                                                        <p className="text-white/60">{item.adress}</p>
                                                    </div>
                                                    <div className="gap-3">
                                                        {item.description.map((item, index) => (
                                                            <div className="flex items-center gap-3" key={index}>
                                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                                <p className="text-white/60">{item}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[10px] text-center xl:text-left">
                                <div className="flex flex-col gap-[10px]  text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="text-while/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <div className="border-accent border-2 w-full"></div>
                                {tabs_skill.map((item, index) => {
                                    const skillList: SkillItem[] = skills[item.tab_skills_link] || [];
                                    return (
                                        <div key={index}>
                                            <span className='text-xl p-0 m-0' >{language === "ENG" ? item.ENG : item.FR}</span>
                                            <ul className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-8 gap-4 xl:gap-[10px]">
                                                {skillList.map((skill, index) => {
                                                    return <li key={index}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className="w-full auto h-[60px] bg-[#ffffff] rounded-xl flex justify-center items-center group">
                                                                    <div className="text-3xl text-primary group-hover:text-accent transition-all duration-300">
                                                                        {iconMap[skill.icon]}
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="capitalize">{skill.name}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full tex-center xl:text-left">
                            <div className="flex flex-col gap-[10px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className=" text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <div className="border-accent border-2 w-full"></div>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="border-accent border-2 w-full"></div>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6max-w-[620px] mx-auto xl:mx-0">
                                    {about.language.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.name}</span>
                                                <span className="text-xl">{item.measure}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div >
        </motion.div >
    )
}

export default Resume;