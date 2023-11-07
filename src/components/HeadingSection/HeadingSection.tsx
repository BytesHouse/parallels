import { NavBtn } from "../NavBtn/NavBtn"

interface HeadingSection {
    text: string
}

export const HeadingSection = ({ text }: HeadingSection) => {
    return <div className="flex items-center justify-between px-[0] container m-auto">
        <p className="text-[24px] font-[300]">{text}</p>
        <div className="flex gap-[10px] pr-[75px]">
            <NavBtn isLeft />
            <NavBtn />
        </div>
    </div>
}