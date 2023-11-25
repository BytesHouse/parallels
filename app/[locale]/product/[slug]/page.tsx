import { Footer } from "@/src/components/Footer/Footer";
import { Header } from "@/src/components/Header/Header";
import ProductCard from "@/src/components/ProductCard/ProductCard";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header />
      <main>
        <ProductCard id={+params.slug} />
        <Footer />
      </main>
    </>
  );
}

