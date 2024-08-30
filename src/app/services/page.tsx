"use client";

import React from "react";
import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";
import { motion } from "framer-motion";
import servicesData from "@/data/services.json";

// Définition du type pour un service
interface Service {
    num: string;
    title: string;
    description: string;
}

// const services = [
//     {
//         num: '01',
//         title: 'Web Developpement',
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rem, fugit incidunt quia dolor eius sunt, molestiae voluptatum magni labore sequi aperiam excepturi eaque, veniam optio magnam dicta vero!"
//     }, {
//         num: '02',
//         title: 'Mobile Developpement',
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rem, fugit incidunt quia dolor eius sunt, molestiae voluptatum magni labore sequi aperiam excepturi eaque, veniam optio magnam dicta vero!"
//     }, {
//         num: '03',
//         title: 'Design',
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rem, fugit incidunt quia dolor eius sunt, molestiae voluptatum magni labore sequi aperiam excepturi eaque, veniam optio magnam dicta vero!"
//     }, {
//         num: '04',
//         title: 'Database Administrator',
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rem, fugit incidunt quia dolor eius sunt, molestiae voluptatum magni labore sequi aperiam excepturi eaque, veniam optio magnam dicta vero!"
//     },
// ]

const Services = () => {

    const services: Service[] = servicesData;
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4, duration: 0.4, ease: "easeIn"
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((item, index) => {
                        return (
                            <div key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent
                                    group-hover:text-outline-hover transition-all-duration-500">
                                        {item.num}
                                    </div>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all
                                duration-500">{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div></div>
        </section>
    )
}

export default Services;