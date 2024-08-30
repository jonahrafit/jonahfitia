"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/interface/NavLink";

interface NavigationProps {
    links: NavLink[];
}

const Nav: React.FC<NavigationProps> = ({ links }) => {
    const pathName = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
            })}
        </nav>
    )
}

export default Nav;