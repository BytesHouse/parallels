import Link from "next/link"
import { FooterLogo } from "../FooterLogo/FooterLogo"
import { linksFooter } from "@/src/utils/constants"
import { FacebookIcon, GoogleIcon, InstagramIcon } from "../SocialIcons/SocialIcons"

export const Footer = () => {
    return <footer className="py-[50px] w-full bg-[#1D1D1D] text-white">
        <div className="container mx-auto flex flex-col gap-[50px]">
            <div className="flex justify-between text-[12px] font-[300]">
                <FooterLogo />
                <p>BE FIRST TO KNOW ABOUT RELEASES AND RESTOCKS</p>
            </div>
            <div className="flex justify-between">
                <ul className="flex-1 flex-wrap flex gap-[20px]">
                    {linksFooter.map(({ link, text }) => <li className="text-[12px] font-[300]"><Link href={link}>{text}</Link></li>)}
                </ul>
                <div className="flex-1 flex justify-end gap-[30px]">
                    <FacebookIcon />
                    <InstagramIcon />
                    <GoogleIcon />
                </div>
            </div>
        </div>
    </footer>
}