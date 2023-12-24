import { Cart } from "../../../src/components/Cart/Cart";
import { Delivery } from "../../../src/components/Delivery/Delivery";
import { Footer } from "../../../src/components/Footer/Footer";
import { Header } from "../../../src/components/Header/Header";
import {redirect} from 'next/navigation'
import { getServerSession } from "next-auth";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/src/components/TranslationsProvider/TranslationsProvider";

export default async function page({ params: { locale } }: any) {
  const { t, options } = await initTranslations(locale, ['home']);
  // const session = await getServerSession();
  // if(!session || !session.user) {
  //   redirect('/api/auth/signin')
  // }
  return (
    <>
    <TranslationsProvider namespaces={options.ns} locale={locale}>
      <Header />
      <main>
        <div className="grid grid-cols-[1fr] md:grid-cols-[2fr_1fr] container mx-auto px-[15px] md:px-[20px] gap-[30px] my-[20px] md:my-[50px]">
            <Delivery/>
            <Cart/>
        </div>
        <Footer />
      </main>
      </TranslationsProvider>
    </>
  );
}
