import { ReactNode } from "react";
import { JsxElement } from "typescript";

interface AdvantagesItemProps {
    text: string;
    icon: ReactNode
}

export const AdvantagesItem = ({ text, icon }: AdvantagesItemProps) => {
    return <div className="border p-[30px] flex items-center gap-[20px]">
        {icon}
        <p>{text}</p>
    </div>
}