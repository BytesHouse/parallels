'use client'
import { NavBtn } from "../NavBtn/NavBtn"


interface HeadingSection {
    text: string
    id: string
}

export const HeadingSection = ({ text, id }: HeadingSection) => {
    const scrollLeft = () => {
        const container = document.getElementById(id);
        if (container) {
          container.scrollBy({ left: -300, behavior: 'smooth' });
        }
      };
    
      const scrollRight = () => {
        const container = document.getElementById(id);
        if (container) {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        }
      };
    return <div className="flex items-center justify-between container m-auto px-[15px] md:px-[0]">
        <p className="text-[24px] font-[300]">{text}</p>
        <div className="hidden md:flex gap-[10px]">
            <div onClick={scrollLeft}><NavBtn isLeft /></div>
            <div onClick={scrollRight}><NavBtn /></div>
        </div>
    </div>
}