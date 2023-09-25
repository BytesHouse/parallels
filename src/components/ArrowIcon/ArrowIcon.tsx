interface ArrowIconProps {
    isActive?: boolean;
    isLeft?: boolean;
}

export const ArrowIcon = ({ isActive, isLeft }: ArrowIconProps) => {
    const color = isActive ? "#1D1D1D" : "#B3B3B3";

    return <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        {isLeft ? <path d="M24.6957 11.8953L15.3044 20.8953L24.6957 29.8953" stroke={color} strokeLinecap="square" /> : <path d="M15.3044 11.8953L24.6957 20.8953L15.3044 29.8953" stroke={color} strokeLinecap="square" />}
        <rect x="0.5" y="1.39526" width="39" height="39" stroke={color} />
    </svg>
}
