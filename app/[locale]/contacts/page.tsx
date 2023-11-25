import { ContactsForm } from "@/src/components/ContactsForm/ContactsForm";
import { Footer } from "@/src/components/Footer/Footer";
import { Header } from "@/src/components/Header/Header";

export default function page() {
  return (
    <>
      <Header />
      <main>
        <ContactsForm/>
        <Footer />
      </main>
    </>
  );
}
