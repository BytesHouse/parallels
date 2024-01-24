import prisma from "@/lib/prisma";
import { HeadingSection } from "../HeadingSection/HeadingSection"
import { ProdCardSecondary } from "../ProdCardSecondary/ProdCardSecondary"

async function getData() {
    const res = await prisma.product.findMany()
    return res
  }
  

export  const BestSellers = async ({products}: any) => {
    const res = await getData()
    return <section className="bg-[#F2F2F2] overflow-x-scroll w-full py-[50px] hidden md:flex md:flex-col gap-[50px] ">
        <div className="container mx-auto flex flex-col gap-[50px] md:px-[20px]">
        <HeadingSection text="HOT OFFERS" id={"hot_offers"} />
        <div id="hot_offers" className="overflow-x-scroll customScroll">
            <ul className="max-w-[300px] min-w-[300px] flex px-[15px] md:px-[0] container gap-[30px]">
                {res.map(item => <ProdCardSecondary prodId={item.id} key={item.name} title={item.name} link={item.imageUrl[0]} price={item.price} />)}
            </ul>
        </div>
        </div>
    </section>
}