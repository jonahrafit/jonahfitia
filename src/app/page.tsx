// app/page.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Page: React.FC = () => {

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>

          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>FullStack Developer</span>
            <h1 className='h1 mb-6'>
              Hello I&rsquo;m <br /> <span className='text-accent'>Jonah Fitia </span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80' >I&rsquo;m a FullStack Developer with a strong focus on Java and React. My expertise lies in building scalable backend solutions and crafting seamless user interfaces. I leverage modern frameworks and technologies to deliver robust, high-performing applications </p>
            <div className="flex flex-col">
              {/* Bord inférieur */}
              <div className="border-accent border-4 w-full">
                {/* Contenu du bord inférieur (si nécessaire) */}
              </div>

              {/* Conteneur pour le bouton */}
              <div className="flex-grow flex items-end">
                <div className="flex xl:justify-end justify-center w-full p-4">
                  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* photo */}
          <div className='order-1 xl:order-none mb-4 xl:mb-0'>
            <Photo />
          </div>

          {/* bouton & socials */}
          <div className='order-1 mb-4 xl:mb-0'>
            <Social containerStyles='flex xl:flex-col flex-row gap-6' iconStyles='w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500' />
          </div>
        </div>
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Page;
