import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

interface ImageComponentProps {
    image: string | StaticImport
}

export const ImageComponent = ({ image }: ImageComponentProps) => {
    return <div className="relative group w-[5.5rem] h-[2.5rem]">
        <Image className="w-full h-full object-cover transition-transform" src={image} alt="logo" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#F2F2F2] opacity-80 transition-opacity group-hover:opacity-0"></div>
    </div>
}