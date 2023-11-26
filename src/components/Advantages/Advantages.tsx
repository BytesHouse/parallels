import { AdvantagesItem } from "../AdvantagesItem/AdvantagesItem"
import { DoubleArrowIcon } from "../DoubleArrowsIcon/DoubleArrowsIcon"
import { ShieldIcon } from "../ShieldIcon/ShieldIcon"
import { WalletIcon } from "../WalletIcon/WalletIcon"


export const Advantages = () => {
    return <section className="w-full">
        <div className="container px-[20px] md:px-[75px] m-auto py-[80px] grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            <AdvantagesItem text={"FREE & FAST SHIPPING"} icon={<DoubleArrowIcon />} />
            <AdvantagesItem text={"HASSLE-FREE RETURNS"} icon={<WalletIcon />} />
            <AdvantagesItem text={"100% SECURE CHECKOUT"} icon={<ShieldIcon />} />
        </div>
    </section>
}