// app/page.tsx
import React from 'react';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-screen px-10">
      <div className="max-w-lg">
        <h3 className="text-4xl mb-4">Full-stack web developer</h3>
        <h1 className="text-4xl font-bold mb-4">Jonah Fitia</h1>
        <p className="text-lg text-gray-700">
          Ceci est la description de ma page d&rsquo;accueil, où je me présente et
          partage mes idées.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/ramanantsafidy.png" // Assure-toi que ton image se trouve dans le dossier public
          alt="Ma photo de profil"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Page;
