import { Cart } from "../../src/components/Cart/Cart";
import { Delivery } from "../../src/components/Delivery/Delivery";
import { Footer } from "../../src/components/Footer/Footer";
import { Header } from "../../src/components/Header/Header";
import {redirect} from 'next/navigation'
import { getServerSession } from "next-auth";

export default async function page() {
  const session = await getServerSession();
  if(!session || !session.user) {
    redirect('api/auth/signin')
  }
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
