"use client";

import { JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { LanguageProvider } from "@/context/LanguageContext";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export default function RootLayout({
  children,
  params: { locale }, // Ajout des paramètres pour récupérer la langue
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }; // Ajout de locale ici
}>) {
  return (
    <html lang={locale}> {/* Langue dynamique */}
      <body className={jetBrains_Mono.className}>
        <LanguageProvider>
          <Header />
          <StairTransition />
          <PageTransition>
            {children}
          </PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
