import { ArrowIcon } from "../ArrowIcon/ArrowIcon"

interface NavBtnProps {
    isLeft?: boolean
}

export const NavBtn = ({ isLeft }: NavBtnProps) => {

    return <button><ArrowIcon isActive isLeft={isLeft} /></button>
}