import Link from "next/link"
import { CartIcon } from "../CartIcon/CartIcon"
import { Logo } from "../Logo/Logo"
import { SearchIcon } from "../SearchIcon/SearchIcon"
import { UserIcon } from "../UserIcon/UserIcon"
import { navItems } from "@/src/utils/constants"

export const Header = () => {
    return <header className="w-full flex flex-col justify-center">
        <div className="w-full flex flex-col items-center justify-center py-[30px] border-b">
            <div className="container flex justify-between px-[15px]">
                <div>US-EN</div>
                <Link href="/"><Logo /></Link>
                <div className="flex items-center gap-[30px]">
                    <SearchIcon />
                    <CartIcon />
                    <UserIcon />
                </div>
            </div>
        </div>
        <nav>
            <ul className="flex py-[10px] justify-center gap-[60px] text-[12px] uppercase font-[300] ">
                {navItems.map(item => <li key={item.text}><Link href={item.link}>{item.text}</Link></li>)}
            </ul>
        </nav>
    </header>
}

