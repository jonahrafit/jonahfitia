// src/components/Navbar.tsx
"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Utilisez next/navigation
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import Logo from './Logo';
import { Switch } from "@/components/ui/switch"
import LanguageToggle from './LanguageToggle';
import { NavLink } from '@/interface/NavLink';
import navDataENG from "@/data/nav-ENG.json";
import navDataFR from "@/data/nav-FR.json";
import { useLanguage } from '@/context/LanguageContext';


const Header: React.FC = () => {
  const { language } = useLanguage();
  const router = useRouter();

  const links: NavLink[] = language === 'FR' ? (navDataFR as NavLink[]) : (navDataENG as NavLink[]);
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className="container mx-auto flex justify-between items-center">
        <Logo></Logo>

        {/* desktop nav & hire me button*/}
        <div className='hidden xl:flex items-center gap-8'>
          {/* <Nav links={links} /> */}
          <LanguageToggle />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          {/* <MobileNav links={links} /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
