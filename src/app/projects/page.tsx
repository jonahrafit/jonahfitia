"use client";

import React, { useState } from "react";
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import Link from "next/link";
import { motion } from "framer-motion";
import projectData from "@/data/projects.json";
import { Input } from "@/components/ui/input";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import Image from "next/image";
import iconMap from '@/context/iconMap';
import { GoVideo } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { ProjectItem } from "@/interface/ProjectItem";

interface FilterButtonProps {
    text: string;
    isActive: boolean;
    onClick: () => void;
}

const FilterButton = ({ text, isActive, onClick }: FilterButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center px-2 py-2 border rounded-full justify-center 
            text-base transition-all duration-500 ${isActive ? 'bg-accent text-primary' : 'bg-transparent text-accent hover:bg-accent hover:text-primary'
                }`}
        >
            {text}
        </button>
    );
};

const Projects = () => {

    const [activeFilter, setActiveFilter] = useState('ALL');

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
    };

    // Fonction pour filtrer les services
    const filterServices = (services: ProjectItem[]) => {
        if (activeFilter === 'ALL') {
            return services;
        }
        return services.filter(service => service.type === activeFilter);
    };

    const services: ProjectItem[] = projectData as ProjectItem[];
    const filteredServices = filterServices(services);

    return (
        <section className="flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">

                {/* filtre */}
                <div className="row col-12 mb-5">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay: 1.4, duration: 0.2, ease: "easeIn"
                            }
                        }}
                        className="gap-[50px]"
                    >
                        <div className="flex items-center space-x-3">
                            <FilterButton
                                text="All"
                                isActive={activeFilter === 'ALL'}
                                onClick={() => handleFilterClick('ALL')}
                            />
                            <FilterButton
                                text="Web"
                                isActive={activeFilter === 'WEB'}
                                onClick={() => handleFilterClick('WEB')}
                            />
                            <FilterButton
                                text="Desktop"
                                isActive={activeFilter === 'DESKTOP'}
                                onClick={() => handleFilterClick('DESKTOP')}
                            />
                            <FilterButton
                                text="Mobile"
                                isActive={activeFilter === 'MOBILE'}
                                onClick={() => handleFilterClick('MOBILE')}
                            />
                            <FilterButton
                                text="Other"
                                isActive={activeFilter === 'OTHER'}
                                onClick={() => handleFilterClick('OTHER')}
                            />
                        </div>
                    </motion.div>
                    <i>On trouve {filteredServices.length > 0 ? '(' + filteredServices.length + ')' : 'aucune'} resultat(s)</i>
                </div>

                {/* liste */}
                <div className="row col-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay: 2.4, duration: 0.4, ease: "easeIn"
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-[15px]"
                    >
                        {filteredServices.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="relative flex-1 flex flex-col justify-end bg-cover bg-center p-5 h-[300px] md:h-[250px] rounded-[30px] group border hover:border-accent "
                                    style={{ backgroundImage: `url(/portfolio/${item.imageShow})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[30px] z-10"></div>
                                    <div>
                                        {/* Bottom Left Title and Subtitle */}
                                        <div className="relative text-white z-20">
                                            <Link target="_blank" href={"/projects/3"}>
                                                <h2 className="text-[25px] font-bold leading-none group-hover:text-accent transition-all duration-500">
                                                    {item.title}
                                                </h2>
                                            </Link>
                                            <p className="text-sm group-hover:text-accent py-2">{item.subtitle}</p>
                                            <div className="container w-full flex justify-between">
                                                <div className="flex items-center space-x-2 text-2xl group-hover:text-accent">
                                                    {item.technologies.map((tech, index) => iconMap[tech] || (
                                                        <span key={index}>{tech}</span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center space-x-2 text-2xl group-hover:text-accent">
                                                    {item.video !== "" &&
                                                        <Link target="_blank" href={item.video} title="Video">
                                                            <GoVideo className="hover:scale-150 transition-transform duration-300" />
                                                        </Link>
                                                    }
                                                    {item.github !== "" &&
                                                        <Link target="_blank" href={item.github} title="Github">
                                                            <FaGithub className="hover:scale-150 transition-transform duration-300" />
                                                        </Link>
                                                    }
                                                    {item.live !== "" &&
                                                        <Link target="_blank" href={item.live} title="Live">
                                                            <TbWorld className="hover:scale-150 transition-transform duration-300" />
                                                        </Link>
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Projects;