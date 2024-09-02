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
import { useRouter } from "next/router";

const projects = [
    {
        "title": "Gestion des vehicules",
        "subtitle": "Gestion et suivi de véhicules",
        "type": "WEB",
        "technologies": ["DiCodeigniter", "DiMysql"],
        "imageShow": "",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ipsam quas in voluptas hic sunt, rerum voluptatibus vel iusto eos, inventore fugit nesciunt tenetur iure numquam doloremque. Ea, quia rem?",
        "github": "httpx:/"
    }
];

const Work = () => {
    const router = useRouter();
    const { id } = router.query; // Obtenir l'id depuis l'URL
    const [product, setProduct] = useState(null);
    const [project, setProject] = useState(projects[0]);

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
                            {/* <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div> */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hove:text-accent transition-all duration-500 capitalize">
                                {project.title} project</h2>
                            <p className="text-white/60">{project.description}</p>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
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
                </div>
            </div>
        </motion.section>
    )
}

export default Work;