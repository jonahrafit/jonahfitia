// src/components/Navbar.tsx
"use client";

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Utilisez next/navigation
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import Logo from './Logo';
import { Switch } from "@/components/ui/switch"


interface SocialProps {
  containerStyles: string;
  btnStyles: string,
  iconStyles: string;
}

const WorkSliderBtns: React.FC<SocialProps> = ({ containerStyles, btnStyles, iconStyles }) => {

  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
