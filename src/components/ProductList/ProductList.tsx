import prisma from "@/lib/prisma"
import { FillterDropdown } from "../FillterDropdown/FillterDropdown"
import { FillteredList } from "../FillteredList/FillteredList"
import { useRouter } from 'next/router'

async function getData(id: number) {
    const res = await prisma.product.findMany({
        where: {
          category: {
            id,
          },
        },
      })
    return res
  }

export const ProductList = async () => {
    const router = useRouter();
    const res = await getData(2);
    return <section className="container px-[15px] md:px-[0] mx-auto pt-[20px] pb-[50px] flex flex-col">
        <div className="text-[24px] font-medium">Filters</div>
        <div className="grid grid-cols-1 gap-[20px] md:gap-0 md:grid-cols-[1fr_3fr] pt-[30px]">
            <div className="max-w-[250px] flex flex-col gap-[15px]">
                {/* <FillterDropdown text={"Category"} array={[]} /> */}
                <FillterDropdown text={"Color"} array={[]} />
                {/* <FillterDropdown text={"Denim features"} array={[]} /> */}
                {/* <FillterDropdown text={"Denim fit"} array={[]} /> */}
                <FillterDropdown text={"Size"} array={[]} />
            </div>
            <FillteredList response={res} />
        </div>
    </section>
}