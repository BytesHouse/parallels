"use client";
import Link from "next/link";
import { CartIcon } from "../CartIcon/CartIcon";
import { Logo } from "../Logo/Logo";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { UserIcon } from "../UserIcon/UserIcon";
import { navItems } from "@/src/utils/constants";
import { LogoMobile } from "../Logo/LogoMobile";
import { BurgerIcon } from "../BurgerIcon/BurgerIcon";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { GoogleIcon } from "../SocialIcons/SocialIcons";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const locale = pathname.split('/')[1]
  const { t } = useTranslation();
  const handleClickBurger = () => {
    setShowMenu(!showMenu);
  };
  useEffect(()=>{
    setShowMenu(false);
  },[locale])
  return (
    <header className="w-full flex flex-col justify-center relative">
      <div className="w-full flex flex-col items-center justify-center py-[30px] border-b">
        <div className="container flex justify-between px-[15px]">
          <LanguageSwitcher />
          <Link className="hidden md:flex" href={`/${locale}`}>
            <Logo />
          </Link>
          <Link className="flex md:hidden" href={`/${locale}`}>
            <LogoMobile />
          </Link>
          <div className="hidden md:flex items-center gap-[30px]">
            {/* <SearchIcon /> */}
            <Link href={`/${locale}/cart`}>
              <CartIcon />
            </Link>
            <div>
              <AuthButton />
            </div>
            
          </div>
          <button onClick={handleClickBurger} className="flex md:hidden">
              <BurgerIcon />
            </button>
        </div>
      </div>
      <nav>
        <ul
          className={`border-b ${
            showMenu ? "flex" : "hidden"
          } z-10 right-0 p-[25px] bg-white absolute md:static gap-[15px] text-end md:text-start md:flex flex-col md:flex-row md:py-[10px] md:justify-center md:gap-[60px] md:text-[12px] uppercase font-[300] `}
        >
          {navItems.map((item) => (
            <li key={item.text}>
              <Link locale={locale} href={`/${locale}${item.link}`}>{t(item.text)}</Link>
            </li>
          ))}
          <li className="flex md:hidden justify-center gap-[10px]">
          <Link href={`/${locale}/cart`}><CartIcon /></Link>
          <Link href={`/${locale}/cart`}><AuthButton /></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const AuthButton = () => {
  const { data: session } = useSession();
  const {t} = useTranslation()
  if (session) {
    const name = String(session.user).split(' ')
    .map((word: string) => word[0].toUpperCase())
    .join('');
    return (
      <div className="flex gap-[5px]">
        {session.user?.image ? <Image className="rounded-full" width={25} height={25} src={session.user?.image} alt="avatar" /> : <div>{name}</div>} <br />
        <button onClick={() => signOut()}>{t('sign_out')}</button>
      </div>
    );
  }
  return (
    <div className="cursor-pointer" onClick={() => signIn()}>
      <UserIcon />
    </div>
  );
};
