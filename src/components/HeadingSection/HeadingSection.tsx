import { NavBtn } from "../NavBtn/NavBtn"

interface HeadingSection {
    text: string
}

export const HeadingSection = ({ text }: HeadingSection) => {
    return <div className="flex items-center justify-between container m-auto px-[15px] md:px-[0]">
        <p className="text-[24px] font-[300]">{text}</p>
        <div className="flex gap-[10px]">
            <NavBtn isLeft />
            <NavBtn />
        </div>
    </div>
}