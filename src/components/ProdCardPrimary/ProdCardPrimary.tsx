import Image from 'next/image'
import mock from '../../../public/assets/images/mock-1.png'
import { BtnPrimary } from '../BtnPrimary/BtnPrimary'

export const ProdCardPrimary = () => {
    return <li className="uppercase flex flex-col gap-[15px]">
        <Image src={mock} alt="mock" />
        <div className="flex flex-col gap-[10px]">
            <p className="text-[12px] font-[300]">10+ new styles</p>
            <p className="text-[16px] font-[500]">new graphic tees</p>
        </div>
        <BtnPrimary text="watch now" />
    </li>
}