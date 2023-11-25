import { Footer } from "@/src/components/Footer/Footer";
import { Header } from "@/src/components/Header/Header";
import { ProductList } from "@/src/components/ProductList/ProductList";

export default function page() {
  return (
    <>
      <Header />
      <main>
        <ProductList />
        <Footer />
      </main>
    </>
  );
}
