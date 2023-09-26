"use client";
import { MouseEvent, MouseEventHandler, ReactElement, useState } from "react";
import { LabelSale } from "../LabelSale/LabelSale";

export const DescriptionBlock = () => {
  return (
    <div>
      <p>New season</p>
      <h1>Contrast Bootcut Sweatpants</h1>
      <Price />
      <Counter />
    </div>
  );
};

const Price = () => {
  return (
    <div>
      <div className="relative flex items-center">
        <p className="text-[24px] font-[500] text-[#EA0022] leading-3">$223</p>
        <LabelSale isAbsolute={false} color="bg-[#EA0022]" text="-70%" />
      </div>
      <p>$745</p>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(1);
  const hangleIncrement = () => {
    setCount(count + 1);
  };
  const hangleDecrement = () => {
    count && setCount(count - 1);
  };
  return (
    <div>
      <h2>Quantity</h2>
      <div className="flex">
        <ButtonPrimary icon={<></>} callback={hangleDecrement} />
        <div>{count}</div>
        <ButtonPrimary icon={<></>} callback={hangleDecrement} />
      </div>
    </div>
  );
};

interface ButtonPrimaryProps {
  icon: ReactElement;
  callback: MouseEventHandler;
}

const ButtonPrimary = ({ icon, callback }: ButtonPrimaryProps) => {
  return (
    <button onClick={callback} className="">
      {icon}
    </button>
  );
};

const IconDecrement = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 10.8953H17" stroke="#1D1D1D" strokeLinecap="square" />
    </svg>
  );
};
