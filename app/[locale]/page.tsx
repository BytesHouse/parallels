import { Header } from "@/src/components/Header/Header";
import Image from "next/image";
import bg from "../../public/assets/images/paraBG.jpeg";
import { SectionNew } from "@/src/components/SectionNew/SectionNew";
import { BestSellers } from "@/src/components/BestSellers/BestSellers";
import { Advantages } from "@/src/components/Advantages/Advantages";
import { FutureSection } from "@/src/components/FutureSection/FutureSection";
import { Footer } from "@/src/components/Footer/Footer";
import TextReveal from "@/src/components/TextReveal/TextReveal";
import TranslationsProvider from "@/src/components/TranslationsProvider/TranslationsProvider";
import initTranslations from "../i18n";
import { useEffect, useState } from "react";


export default async function  Home({ params: { locale } }: any) {
  const { t, options } = await initTranslations(locale, ['home']);
  let showText = false;
  setTimeout(() => {
    showText = true;
  }, 2500);
  return (
    <>
      <TranslationsProvider namespaces={options.ns} locale={locale}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <p className="absolute"></p>
          <div className="relative">
          <TextReveal />
          <Image src={bg} alt="bg" className="w-screen md:h-screen bg-cover bg-center" />
          <p className={showText ? 'active' : '' } id="colorText">A brand that combines quality, minimalism and abstraction.</p>
          </div>
          <SectionNew />
          <BestSellers />
          <Advantages />
          <FutureSection />
          <Footer />
        </main>
      </TranslationsProvider>

    </>
  );
}
