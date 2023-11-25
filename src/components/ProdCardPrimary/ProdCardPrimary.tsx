'use client'
import Image from 'next/image'
import mock from '../../../public/assets/images/mock-1.png'
import { BtnPrimary } from '../BtnPrimary/BtnPrimary'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const ProdCardPrimary = ({image, name, id}: {image: string, name: string, id: number}) => {
    const pathname = usePathname();
    const locale = pathname.split('/')[1]
    return <li className="uppercase flex flex-col gap-[15px] max-w-[300px]">
        <Image width={1000} height={1000} src={image || mock} alt="mock" />
        <div className="flex flex-col gap-[10px]">
            <p className="text-[12px] font-[300]">10+ new styles</p>
            <p className="text-[16px] font-[500]">{name}</p>
        </div>
        <Link className='self-baseline' href={`${locale}/product/${+id}`}><BtnPrimary text="watch now" /></Link>
    </li>
}