'use client'
import { useState } from "react";
import { FillterArrowIcon } from "../FillterArrowIcon/FillterArrowIcon"

interface FillterDropdownProps {
    text: string
    array: any[]
}

export const FillterDropdown = ({ text, array }: FillterDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return <div className=" uppercase ">
        <div onClick={handleClick} className="cursor-pointer flex justify-between items-center">
            <p className="text-[14px] font-[400]">{text}</p>
            <FillterArrowIcon />
        </div>
        {isOpen ? <MenuDrop /> : <></>}
    </div>
}

export const MenuDrop = () => {
    return <ul className="pt-[10px] pb-[15px] text-[12px] font-[300] flex flex-col gap-[10px]">
        <li>Cargo pants</li>
        <li>Denim</li>
        <li>Pants</li>
        <li>Handbags</li>
    </ul>
}