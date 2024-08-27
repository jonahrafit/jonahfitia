// src/components/Navbar.tsx
"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Utilisez next/navigation
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import Logo from './Logo';
import { Switch } from "@/components/ui/switch"

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className="container mx-auto flex justify-between items-center">
        <Logo></Logo>

        {/* desktop nav & hire me button*/}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Switch />
        </div>


        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
