import Link from "next/link";
import { FooterLogo } from "../FooterLogo/FooterLogo";
import { linksFooter } from "@/src/utils/constants";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
} from "../SocialIcons/SocialIcons";
import { IconPhone } from "../IconPhone/IconPhone";
import { IconAddress } from "../IconAddress/IconAddress";

export const Footer = () => {
  return (
    <footer className="py-[50px] md:px-[75px] w-full bg-[#1D1D1D] text-white flex">
      <div className="container justify-center px-[15px] md:px-[0] mx-auto flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] md:flex-row justify-between text-[12px] font-[300]">
          <FooterLogo />
        </div>
        <p className="text-[12px]">
          BE FIRST TO KNOW ABOUT RELEASES AND RESTOCKS
        </p>
        <div className="flex flex-col gap-[30px] md:flex-row justify-between">
          <ul className="flex-1 flex-wrap flex gap-[15px]">
            {linksFooter.map(({ link, text }) => (
              <li key={text} className="text-[12px] font-[300]">
                <Link href={link}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start md:justify-end gap-[30px]">
        <Link href="mailto:parallelswears@gmail.com" className="flex gap-[15px] justify-end">
          parallelswears@gmail.com
          <GoogleIcon />
        </Link>
        <Link
          href="tel:+972547282050"
          className="flex gap-[15px] justify-end"
        >
          +972547282050
          <IconPhone />
        </Link>
        <Link target="_blank" href="https://instagram.com/parallels_wear_israel?igshid=MzMyNGUyNmU2YQ" className="flex gap-[15px] justify-end">
          Parallels
          <InstagramIcon />
        </Link>
        <div className="flex gap-[15px] justify-end">
        יוספטל 6 קריית מוצקין 
          <IconAddress />
        </div>
      </div>
    </footer>
  );
};
