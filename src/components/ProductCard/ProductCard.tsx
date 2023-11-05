import Image from "next/image";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { DescriptionBlock } from "../DescriptionBlock/DescriptionBlock";
import prisma from "@/lib/prisma";

async function getData(id: number) {
  const res = await prisma.product.findFirst({where: {id: Number(id)}})
  return res
}

  const ProductCard = async ({id}: {id: number}) => {
  const res = await getData(Number(id))
  return (
    <div className="container px-[15px] md:px-[0] mx-auto mb-[50px]">
      {/* <Breadcrumbs /> */}
      <div className="grid grid-cols-[2fr_410px] gap-[50px]">
        <div className="grid grid-cols-[1fr_1fr] gap-[50px]">
          {res?.imageUrl.map(item => <Image key={item} width={1000} height={1000} className="w-full" alt="logo" src={item} />)}
        </div>
        <DescriptionBlock item={res} />
      </div>
    </div>
  );
}
export default ProductCard;