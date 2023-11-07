import { useState } from "react"

export const LanguageSwitcher = () => {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(!state);
    }
    return <div className="relative w-max h-[35px] active:text-gray-500 flex items-center px-[5px] hover:shadow-sm cursor-pointer">
        <button onClick={handleClick}>US-EN</button>
        <div className={`${state ? 'block' : 'hidden'} absolute`}>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </div>
    </div>
}