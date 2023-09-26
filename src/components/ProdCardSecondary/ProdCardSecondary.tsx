import Image from "next/image";
import { BtnPrimary } from "../BtnPrimary/BtnPrimary";
import mock from "../../../public/assets/images/mock-2.png";
import { LabelSale } from "../LabelSale/LabelSale";
import Link from "next/link";

interface ProdCardSecondaryProps {
  link?: string;
}

export const ProdCardSecondary = ({ link }: ProdCardSecondaryProps) => {
  return (
    <li className="uppercase flex flex-col gap-[15px]">
      <Link href={"/product"}>
        <div className="relative">
          <Image src={mock} alt="mock" />
          <LabelSale />
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[12px] font-[300]">New season</p>
          <p className="text-[16px] font-[500]">
            Contrast Bootcut Sweatpants{" "}
            <span className="text-[#B3B3B3]">GRAY</span>
          </p>
        </div>
        <div className="flex justify-between">
          <BtnPrimary text="Shop now" />
          <div className="flex flex-col items-end">
            <p className="text-[16px] text-[#B3B3B3] line-through">$742</p>
            <p className="text-[24px]">$742</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
