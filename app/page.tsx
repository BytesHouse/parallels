import { Header } from "@/src/components/Header/Header";
import Image from "next/image";
import bg from "../public/assets/images/main-bg.png";
import { SectionNew } from "@/src/components/SectionNew/SectionNew";
import { BestSellers } from "@/src/components/BestSellers/BestSellers";
import { Advantages } from "@/src/components/Advantages/Advantages";
import { FutureSection } from "@/src/components/FutureSection/FutureSection";
import { Footer } from "@/src/components/Footer/Footer";
import TextReveal from "@/src/components/TextReveal/TextReveal";

export default function Home({ product }: any) {
  return (
    <>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <p className="absolute"></p>
          <TextReveal />
          <Image src={bg} alt="bg" className="w-screen md:h-screen" />
          <SectionNew />
          <BestSellers />
          <Advantages />
          <FutureSection />
          <Footer />
        </main>
    </>
  );
}
