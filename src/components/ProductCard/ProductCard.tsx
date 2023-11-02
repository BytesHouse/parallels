import Image from "next/image";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import mock from "@/public/assets/images/mock-3.png";
import { DescriptionBlock } from "../DescriptionBlock/DescriptionBlock";

export default function ProductCard() {
  return (
    <div className="container px-[15px] md:px-[0] mx-auto mb-[50px]">
      <Breadcrumbs />
      <div className="grid grid-cols-[2fr_410px] gap-[50px]">
        <div className="grid grid-cols-[1fr_1fr] gap-[50px]">
          <Image className="w-full" alt="logo" src={mock} />
          <Image className="w-full" alt="logo" src={mock} />
          <Image className="w-full" alt="logo" src={mock} />
          <Image className="w-full" alt="logo" src={mock} />
        </div>
        <DescriptionBlock />
      </div>
    </div>
  );
}
