import { Footer } from "@/src/components/Footer/Footer";
import { Header } from "@/src/components/Header/Header";
import ProductCard from "@/src/components/ProductCard/ProductCard";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/src/components/TranslationsProvider/TranslationsProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default async function page({ params: { locale, slug } }: any) {
  const { options } = await initTranslations(locale, ["home"]);

  return (
    <>
      <TranslationsProvider namespaces={options.ns} locale={locale}>
        <Header />
        <main>
          <ProductCard id={+slug} />
          <Footer />
        </main>
      </TranslationsProvider>
      <ToastContainer />
    </>
  );
}
