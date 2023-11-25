'use client'
import Image from "next/image";
import { BtnPrimary } from "../BtnPrimary/BtnPrimary";
import mock from "../../../public/assets/images/mock-2.png";
import { LabelSale } from "../LabelSale/LabelSale";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProdCardSecondaryProps {
  link?: string;
  title?: string;
  price?: number;
  prodId?: string | number
}

export const ProdCardSecondary = ({ link, title = 'Contrast Bootcut Sweatpants', price, prodId }: ProdCardSecondaryProps) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1]
  return (
    <li className="uppercase flex flex-col max-w-[300px] gap-[15px]">
      <Link href={`/${locale}/product/${prodId}`}>
        <div className="relative">
          <Image className="w-full h-full" width={1000} height={1000} src={link || mock} alt="mock" />
          {/* <LabelSale /> */}
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[12px] font-[300]">New season</p>
          <p className="text-[16px] font-[500]">
            {title}
            {/* <span className="text-[#B3B3B3]">GRAY</span> */}
          </p>
        </div>
        <div className="flex justify-between">
          <BtnPrimary text="Shop now" />
          <div className="flex flex-col items-end">
            {/* <p className="text-[16px] text-[#B3B3B3] line-through">$742</p> */}
            <p className="text-[24px]">₪{price}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
