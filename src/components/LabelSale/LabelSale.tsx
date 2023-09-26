interface LabelSaleProps {
    text?: string
    color?: string
    isAbsolute?: boolean
}

export const LabelSale = ({text = "SALE", color="bg-white", isAbsolute = true }:LabelSaleProps) => {
    return <div className={`${isAbsolute ? "absolute top-[6px] left-[7px] px-[10px] py-[5px]" : "w-max self-center text-white px-[5px]" }  ${color} text-[12px] font-[500]`}>{text}</div>
}