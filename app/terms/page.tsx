import { Footer } from "@/src/components/Footer/Footer";
import { Header } from "@/src/components/Header/Header";
import { TermsAndCondition } from "@/src/components/TermsAndCondition/TermsAndCondition";

export default function page() {
  return (
    <>
      <Header />
      <main>
        <TermsAndCondition/>
        <Footer />
      </main>
    </>
  );
}
