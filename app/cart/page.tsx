import { Cart } from "../../src/components/Cart/Cart";
import { Delivery } from "../../src/components/Delivery/Delivery";
import { Footer } from "../../src/components/Footer/Footer";
import { Header } from "../../src/components/Header/Header";

export default function page() {
  return (
    <>
      <Header />
      <main>
        <div className="grid grid-cols-[2fr_1fr] container mx-auto px-[20px] gap-[30px] my-[20px] md:my-[50px]">
            <Delivery/>
            <Cart/>
        </div>
        <Footer />
      </main>
    </>
  );
}
