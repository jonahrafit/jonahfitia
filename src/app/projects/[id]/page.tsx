'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { useParams } from "next/navigation";
import iconMap from "@/context/iconMap";

import { GoVideo } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FreeMode, Pagination } from 'swiper/modules';
import projectsData from "@/data/projects.json";
import { ProjectItem } from "@/interface/ProjectItem";


// const projects = [
//     {
//         "title": "GASY MANJA",
//         "subtitle": "Application web d'un salon de beauté",
//         "type": "WEB",
//         "technologies": ["DiMongodb", "SiExpress", "FaAngular", "FaNodeJs"],
//         "imageShow": "/gasy_manja/image12.png",
//         "image": [
//             "/gasy_manja/image10.png",
//             "/gasy_manja/image12.png",
//             "/gasy_manja/image7.png ",
//             "/gasy_manja/image9.png",
//             "/gasy_manja/image11.png",
//             "/gasy_manja/image1.png ",
//             "/gasy_manja/image3.png ",
//             "/gasy_manja/image6.png ",
//             "/gasy_manja/image8.png"
//         ],
//         "github": [
//             {
//                 "name": "Front",
//                 "value": "https://github.com/jonahrafit/m1p10mean-front-Lucien-Jonah.git"
//             },
//             {
//                 "name": "Back",
//                 "value": "https://github.com/jonahrafit/m1p10mean-back-Jonah-Lucien.git"
//             }
//         ],
//         "live": "fref",
//         "video": "frffr",
//         "description": "Dans le contexte actuel où la digitalisation joue un rôle prépondérant dans la gestion des services et des entreprises, la mise en place d'une application web devient une nécessité pour de nombreux secteurs d'activité. Dans ce cadre, notre équipe s'est vu confier la mission de concevoir et de développer une application web pour un salon de beauté souhaitant moderniser ses services et offrir une expérience utilisateur optimale à sa clientèle. L'objectif principal de cette application est de simplifier et d'optimiser la gestion des rendez-vous, des services, du personnel et des données financières, tout en offrant une interface conviviale et intuitive pour les utilisateurs.",
//         "fonctionnality": [
//             "Authentification/ Inscription avec confirmation par mail",
//             "Visualisation des listes de services",
//             "Prise de rendez-vous",
//             "Chaque rôle dispose son interface (Admin , Amployee)",
//             "Dashboard pour les statistiques"
//         ],
//         "challenges_met": [],
//         "role": []
//     },
// ];

const ProjectDetails = () => {
    const [isOpen, setIsOpen] = useState(false); // État pour savoir si le modal est ouvert
    const [selectedImage, setSelectedImage] = useState(""); // Image actuellement sélectionnée

    const { id } = useParams(); // Récupérer l'ID de l'URL
    const [project, setProject] = useState<ProjectItem | null>(null);

    useEffect(() => {
        if (id) {
            // Ensure id is a string before parsing it
            const idString = Array.isArray(id) ? id[0] : id;

            if (typeof idString === 'string') {
                const index = parseInt(idString, 10);

                // Check if index is a valid number and within bounds
                if (!isNaN(index) && index >= 0 && index <= projectsData.length) {
                    const foundProject = projectsData[index - 1];
                    setProject(foundProject || null); // Handle case where foundProject might be undefined
                } else {
                    setProject(null); // Handle invalid index
                }
            } else {
                setProject(null); // Handle invalid id type
            }
        }
    }, [id, projectsData]);

    // Fonction pour ouvrir le modal avec l'image cliquée
    const openModal = (img: string) => {
        setSelectedImage("/portfolio" + img);
        setIsOpen(true);
    };

    // Fonction pour fermer le modal
    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage("");
    };


    if (!project) {
        return <p>Loading...</p>;
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className="flex flex-col justify-center  xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-[10px]">
                    <div className="w-full flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <h2 className="text-[32px] md:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title} project
                            </h2>
                            <p className="text-white/60 text-xl md:text-2xl">{project.subtitle}</p>
                        </div>
                        <div className="flex justify-center md:justify-end items-center space-x-4 md:space-x-2 text-3xl md:text-4xl group-hover:text-accent">
                            {project.video !== "" && (
                                <Link target="_blank" href={project.video} title="Video">
                                    <GoVideo className="hover:scale-150 transition-transform duration-300" />
                                </Link>
                            )}
                            {project.github.length > 0 &&
                                project.github.map((item, index) => (
                                    <Link target="_blank" key={index} href={item.value} title={item.name}>
                                        <FaGithub className="hover:scale-150 transition-transform duration-300" />
                                    </Link>
                                ))
                            }
                            {project.live !== "" && (
                                <Link target="_blank" href={project.live} title="Live">
                                    <TbWorld className="hover:scale-150 transition-transform duration-300" />
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="border-accent border-2 w-full"></div>
                    <span className='text-xl p-0 m-0' >Liste des technologies</span>
                    <ul className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-12 gap-4 xl:gap-[5px]">
                        {project.technologies.map((skill, index) => {
                            return <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full auto h-[60px] bg-[#ffffff] rounded-xl flex justify-center items-center group">
                                            <div className="text-3xl text-primary group-hover:text-accent transition-all duration-300">
                                                {iconMap[skill]}
                                            </div>
                                        </TooltipTrigger>
                                        {/* <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent> */}
                                    </Tooltip>
                                </TooltipProvider>
                            </li>
                        })}
                    </ul>

                    <div className="border-accent border-2 w-full"></div>
                    <span className='text-xl p-0 m-0' >A propos de ce projet : </span>
                    <div className="gap-3">
                        {project.fonctionnality.map((item, index) => (
                            <div className="flex items-center gap-3" key={index}>
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-accent border-2 w-full"></div>
                    <span className='text-xl p-0 m-0' >Quelques capture d'écran</span>
                    <Swiper
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="w-full h-full"
                        breakpoints={{
                            // Quand la largeur de l'écran est ≥ 640px
                            640: {
                                slidesPerView: 1, // Afficher 1 slide sur petit écran
                            },
                            // Quand la largeur de l'écran est ≥ 768px
                            768: {
                                slidesPerView: 2, // Afficher 2 slides sur écran moyen
                            },
                            // Quand la largeur de l'écran est ≥ 1024px
                            1024: {
                                slidesPerView: 3, // Afficher 3 slides sur grand écran
                            },
                        }}
                    >
                        {project.image.map((img, index) => (
                            <SwiperSlide className="flex justify-center items-center w-full" key={index}>
                                <Image
                                    src={"/portfolio" + img}
                                    alt={project.title + img}
                                    onClick={() => openModal(img)}
                                    width={900} // largeur par défaut
                                    height={500} // hauteur par défaut
                                    className="cursor-pointer"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="border-accent border-2 w-full"></div>
                    <span className='text-xl p-0 m-0' >Description : </span>
                    <p className="text-white/60">{project.description}</p>
                </div>
            </div>
            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-2xl"
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Image en grand"
                            width={1000} // Taille de l'image en grand
                            height={600} // Taille de l'image en grand
                        />
                    </div>
                </div>
            )}
        </motion.section>
    )
}

export default ProjectDetails;