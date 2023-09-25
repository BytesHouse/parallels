import Image from "next/image"
import { NavBtn } from "../NavBtn/NavBtn"
import { BtnPrimary } from "../BtnPrimary/BtnPrimary"
import { ProdCardPrimary } from "../ProdCardPrimary/ProdCardPrimary"
import { HeadingSection } from "../HeadingSection/HeadingSection"

export const SectionNew = () => {
    return <section className="container my-[50px] w-full">
        <div className="flex flex-col gap-[50px]">
            <HeadingSection text="WHAT'S NEW" />
            <ul className="grid grid-cols-5 gap-[15px]">
                <ProdCardPrimary />
                <ProdCardPrimary />
                <ProdCardPrimary />
                <ProdCardPrimary />
                <ProdCardPrimary />
            </ul>
        </div>
    </section>
}