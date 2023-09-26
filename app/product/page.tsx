import { Footer } from "@/src/components/Footer/Footer";
import { Header } from "@/src/components/Header/Header";
import ProductCard from "@/src/components/ProductCard/ProductCard";

export default function page() {
  return (
    <>
      <Header />
      <main>
        <ProductCard />
        <Footer />
      </main>
    </>
  );
}
