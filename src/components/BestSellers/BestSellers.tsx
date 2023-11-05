import prisma from "@/lib/prisma";
import { HeadingSection } from "../HeadingSection/HeadingSection"
import { ProdCardSecondary } from "../ProdCardSecondary/ProdCardSecondary"

async function getData() {
    const res = await prisma.product.findMany()
    return res
  }
  

export  const BestSellers = async ({products}: any) => {
    const res = await getData()
    return <section className="bg-[#F2F2F2] w-full py-[50px] flex flex-col gap-[50px]">
        <HeadingSection text="BEST SELLERS" />
        <ul className="grid grid-cols-2 md:grid-cols-5 px-[15px] md:px-[0] container mx-auto gap-[30px]">
            {res.map(item => <ProdCardSecondary prodId={item.id} key={item.name} title={item.name} link={item.imageUrl[0]} price={item.price} />)}
        </ul>
    </section>
}