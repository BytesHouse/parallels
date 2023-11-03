import prisma from "@/lib/prisma";
import { HeadingSection } from "../HeadingSection/HeadingSection"
import { ProdCardSecondary } from "../ProdCardSecondary/ProdCardSecondary"

async function getData() {
    const res = await prisma.product.findMany()
    return res
  }
  

export  const BestSellers = async ({products}: any) => {
    const res = await getData()
    console.log(res[0].imageUrl)
    return <section className="bg-[#F2F2F2] w-full py-[50px] flex flex-col gap-[50px]">
        <HeadingSection text="BEST SELLERS" />
        <ul className="grid grid-cols-2 md:grid-cols-5 px-[15px] md:px-[0] container mx-auto gap-[30px]">
            <ProdCardSecondary title={res[0].name} link={res[0].imageUrl} />
            <ProdCardSecondary />
            <ProdCardSecondary />
            <ProdCardSecondary />
            <ProdCardSecondary />
        </ul>
    </section>
}