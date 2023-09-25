interface BtnPrimaryProps {
    text: string
}

export const BtnPrimary = ({ text }: BtnPrimaryProps) => {
    return <button className="self-baseline text-[12px] py-[15px] px-[20px] bg-black hover:bg-white text-white hover:text-black transition-all duration-500 uppercase">{text}</button>
}