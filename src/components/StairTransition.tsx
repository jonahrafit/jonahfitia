"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition: React.FC = () => {
    const pathName = usePathname();
    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathName}>
                    <div className="h-screen w-screen fixed top-0 left-0 ritgh-0 pointer-events-none z-40 flex">
                        <Stairs />
                    </div>
                </div>
            </AnimatePresence>
        </>
    )
}

export default StairTransition;