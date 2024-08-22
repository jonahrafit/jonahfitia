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

const experiences = {
    icon: '',
    title: "My experience",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non perspiciatis vero impedit deserunt fugiat velit eaque labore, quos dolore aspernatur nisi cupiditate ipsa ullam culpa excepturi quibusdam aut. Cum, odio?",
    items: [
        {
            company: "FNP Téchnologies",
            position: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            company: "Eqima Solutions",
            position: "Web & Mobile Developer",
            duration: "2021 - 2022"
        },
        {
            company: "Ministry of Public health",
            position: "Full Stack Developer",
            duration: "2020 - 2021"
        }
    ]
}

const educations = {
    icon: '',
    title: "My education",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non perspiciatis vero impedit deserunt fugiat velit eaque labore, quos dolore aspernatur nisi cupiditate ipsa ullam culpa excepturi quibusdam aut. Cum, odio?",
    items: [
        {
            institute: "IT University",
            degree: "Master 1",
            duration: "2023 - Present"
        },
        {
            institute: "IT University",
            degree: "Bachelor's Software Engineer",
            duration: "2019 - 2023"
        },
        {
            institute: "Faculty of Medecine",
            degree: "PACES",
            duration: "2017 - 2019"
        }
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

const Resume = () => {
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
                    className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value={"experience"}>Experience</TabsTrigger>
                        <TabsTrigger value={"education"}>Education</TabsTrigger>
                        <TabsTrigger value={"skills"}>Skills</TabsTrigger>
                        <TabsTrigger value={"about"}>About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experiences.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[38px]">
                                        {experiences.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
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
                                <h3 className="text-4xl font-bold">{educations.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{educations.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[38px]">
                                        {educations.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institute}</p>
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
                            <div className="flex flex-col gap-[30px] ">
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