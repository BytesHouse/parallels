import { Story } from "@/src/components/Story/Story";
import { Footer } from "../../../src/components/Footer/Footer";
import { Header } from "../../../src/components/Header/Header";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/src/components/TranslationsProvider/TranslationsProvider";

export default async function page({ params: { locale } }: any) {
  const { t, options } = await initTranslations(locale, ["home"]);
  return (
    <>
      <TranslationsProvider namespaces={options.ns} locale={locale}>
        <Header />
        <main>
          <Story />
          <Footer />
        </main>
      </TranslationsProvider>
    </>
  );
}
