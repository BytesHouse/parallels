'use server'
import Image from "next/image"
import { NavBtn } from "../NavBtn/NavBtn"
import { BtnPrimary } from "../BtnPrimary/BtnPrimary"
import { ProdCardPrimary } from "../ProdCardPrimary/ProdCardPrimary"
import { HeadingSection } from "../HeadingSection/HeadingSection"
import prisma from "@/lib/prisma"

async function getData() {
    const res = await prisma.product.findMany()
    return res
  }

export const SectionNew = async () => {
    const res = await getData()
    
    return <section className="container overflow-x-scroll md:px-[20px]  my-[50px] w-full">
        <div className="flex flex-col gap-[50px] ">
            <HeadingSection text="WHAT'S NEW" id={"news_container"} />
        <div id="news_container" className="overflow-x-scroll customScroll">

            <ul className="w-max flex px-[15px] md:px-[0] container mx-auto gap-[30px]">
                {res.map(item => <ProdCardPrimary key={item.name} image={item.imageUrl[1]} name={item.name} id={item.id} />)}
            </ul>
            </div>
        </div>
    </section>
}
