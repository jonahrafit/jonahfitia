'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Swiper as SwiperType } from "swiper/types";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, necessitatibus. Asperiores ratione porro ducimus, quo accusamus quibusdam assumenda sunt eligendi quis suscipit esse excepturi dolores doloremque rerum beatae, voluptas incidunt?",
        stack: [{ name: "Html 5" }, { name: "Css3" }, { name: "Javascript" }],
        image: "/images/adoptionsocialmediaSH.png",
        github: "",
        live: ""
    },
    {
        num: '02',
        category: 'full Stack',
        title: 'project 1',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, necessitatibus. Asperiores ratione porro ducimus, quo accusamus quibusdam assumenda sunt eligendi quis suscipit esse excepturi dolores doloremque rerum beatae, voluptas incidunt?",
        stack: [{ name: "React Js" }, { name: "Spring boot" }, { name: "Postgresql" }],
        image: "/images/how-to-estimate-a-web-application-development-project.png",
        github: "",
        live: ""
    },
    {
        num: '03',
        category: 'Back & mobile',
        title: 'project 3',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, necessitatibus. Asperiores ratione porro ducimus, quo accusamus quibusdam assumenda sunt eligendi quis suscipit esse excepturi dolores doloremque rerum beatae, voluptas incidunt?",
        stack: [{ name: "Firebase" }, { name: "Android studio" }, { name: "API Rest" }],
        image: "/images/prs.jpg",
        github: "",
        live: ""
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: SwiperType) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:grap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hove:text-accent transition-all duration-500 capitalize">
                                {project.category} project</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">{item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-58/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0  w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image src={project.image}
                                                    fill
                                                    className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider button */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-22px)]
                                xl:bottom-0 z-20 w-full justify-between xl:w-max wl:justify-none"
                                iconStyles=""
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                                w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;