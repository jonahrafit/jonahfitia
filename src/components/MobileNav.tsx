"use client";

import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from "next/navigation";
import { CiMenuFries } from 'react-icons/ci';
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { NavLink } from "@/interface/NavLink";

interface NavigationProps {
    links: NavLink[];
}

const MobileNav: React.FC<NavigationProps> = ({ links }) => {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"></CiMenuFries>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-20 mb-20 text-center text-2xl">
                    <Logo />
                </div>
                <div className="flex flex-col justify-center  items-center">
                    <LanguageToggle />
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all"`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet >
    )
}

export default MobileNav;