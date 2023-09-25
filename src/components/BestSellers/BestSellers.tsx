import { HeadingSection } from "../HeadingSection/HeadingSection"
import { ProdCardSecondary } from "../ProdCardSecondary/ProdCardSecondary"

export const BestSellers = () => {
    return <section className="bg-[#F2F2F2] w-full py-[50px] flex flex-col gap-[50px]">
        <HeadingSection text="BEST SELLERS" />
        <ul className="grid grid-cols-5 container mx-auto gap-[30px]">
            <ProdCardSecondary />
            <ProdCardSecondary />
            <ProdCardSecondary />
            <ProdCardSecondary />
            <ProdCardSecondary />
        </ul>
    </section>
}