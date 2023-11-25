'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"

const langs = ['en', 'ru', 'he']

export const LanguageSwitcher = () => {
    const [state, setState] = useState(false);
    const pathname = usePathname();
    const locale = pathname.split('/')[1]
    const path = pathname.replace(`/${locale}`,'')
    const handleClick = () => {
        setState(!state);
    }

    return <div className="uppercase relative w-max h-[35px]  flex items-center px-[5px] hover:shadow-sm cursor-pointer">
        <button className="uppercase active:text-gray-500" onClick={handleClick}>{locale}</button>
        <div className={`${state ? 'block' : 'hidden'} p-5 absolute top-0 left-0 z-10 bg-white border`}>
            <ul className="flex flex-col gap-[15px]">
                {langs.map((item: any) => <li className="active:text-gray-500" key={item}><Link href={`/${item}/${path}`}>{item}</Link></li>)}
            </ul>
        </div>
    </div>
}