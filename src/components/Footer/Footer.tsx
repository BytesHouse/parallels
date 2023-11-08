import Link from "next/link"
import { FooterLogo } from "../FooterLogo/FooterLogo"
import { linksFooter } from "@/src/utils/constants"
import { FacebookIcon, GoogleIcon, InstagramIcon } from "../SocialIcons/SocialIcons"

export const Footer = () => {
    return <footer className="py-[50px] md:px-[75px] w-full bg-[#1D1D1D] text-white">
        <div className="container px-[15px] md:px-[0] mx-auto flex flex-col gap-[30px] md:gap-[50px]">
            <div className="flex flex-col gap-[30px] md:flex-row justify-between text-[12px] font-[300]">
                <FooterLogo />
                <p>BE FIRST TO KNOW ABOUT RELEASES AND RESTOCKS</p>
            </div>
            <div className="flex flex-col gap-[30px] md:flex-row justify-between">
                <ul className="flex-1 flex-wrap flex gap-[15px]">
                    {linksFooter.map(({ link, text }) => <li key={text} className="text-[12px] font-[300]"><Link href={link}>{text}</Link></li>)}
                </ul>
                <div className="flex-1 flex justify-start md:justify-end gap-[30px]">
                    <FacebookIcon />
                    <InstagramIcon />
                    <GoogleIcon />
                </div>
            </div>
        </div>
    </footer>
}