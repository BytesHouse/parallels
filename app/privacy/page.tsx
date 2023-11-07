import { Footer } from "@/src/components/Footer/Footer";
import { Header } from "@/src/components/Header/Header";
import { PrivacyBlock } from "@/src/components/PrivacyBlock/PrivacyBlock";

export default function page() {
  return (
    <>
      <Header />
      <main>
        <PrivacyBlock/>
        <Footer />
      </main>
    </>
  );
}
