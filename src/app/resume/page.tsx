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

import experienceDataENG from "@/data/experience-ENG.json";
import experienceDataFR from "@/data/experience-FR.json";
import educationDataENG from '@/data/education-ENG.json';
import educationDataFR from '@/data/education-FR.json';
import { useLanguage } from '@/context/LanguageContext';
import Image from "next/image";

const about = {
    title: 'About me',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem delectus cum blanditiis consequatur corporis ad fuga, sapiente ipsa officiis totam quia tempora, at qui dolor. Illo iusto exercitationem nihil!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Jonah Fitia"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+261) 34 64 205 06"
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "jonahrafit.ram@hotmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "French , English"
        },
    ]
}

const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non perspiciatis vero impedit deserunt fugiat velit eaque labore, quos dolore aspernatur nisi cupiditate ipsa ullam culpa excepturi quibusdam aut. Cum, odio?",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5"
        }, {
            icon: <FaCss3 />,
            name: "Css3"
        }, {
            icon: <FaReact />,
            name: "React"
        }, {
            icon: <FaJs />,
            name: "Javascript"
        }, {
            icon: <FaJava />,
            name: "Java"
        }, {
            icon: <SiTailwindcss />,
            name: "Tailwind.css"
        }, {
            icon: <FaNodeJs />,
            name: "Node JS"
        },
    ]
}

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
]

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
                                    <ul className="grid grid-cols-1 gap-[38px]">
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
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]  text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-while/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
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
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full tex-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
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
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div >
        </motion.div >
    )
}

export default Resume;