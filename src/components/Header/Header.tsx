"use client";
import Link from "next/link"
import { CartIcon } from "../CartIcon/CartIcon"
import { Logo } from "../Logo/Logo"
import { SearchIcon } from "../SearchIcon/SearchIcon"
import { UserIcon } from "../UserIcon/UserIcon"
import { navItems } from "@/src/utils/constants"
import { LogoMobile } from "../Logo/LogoMobile"
import { BurgerIcon } from "../BurgerIcon/BurgerIcon"
import { useState } from "react"
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClickBurger = () => {
        setShowMenu(!showMenu)
    }
    return <header className="w-full flex flex-col justify-center">
        <div className="w-full flex flex-col items-center justify-center py-[30px] border-b">
            <div className="container flex justify-between px-[15px]">
                <LanguageSwitcher/>
                <Link className="hidden md:flex" href="/"><Logo /></Link>
                <Link className="flex md:hidden" href="/"><LogoMobile/></Link>
                <div className="hidden md:flex items-center gap-[30px]">
                    <SearchIcon />
                    <CartIcon />
                    <UserIcon />
                </div>
                <button onClick={handleClickBurger} className="flex md:hidden">
                <BurgerIcon/>
                </button>
            </div>
        </div>
        <nav>
            <ul className={`border-b ${showMenu ? "flex" : "hidden"} right-0 p-[25px] bg-white absolute md:static gap-[15px] text-end md:text-start md:flex flex-col md:flex-row md:py-[10px] md:justify-center md:gap-[60px] md:text-[12px] uppercase font-[300] `}>
                {navItems.map(item => <li key={item.text}><Link href={item.link}>{item.text}</Link></li>)}
            </ul>
        </nav>
    </header>
}

