"use client";
import { MouseEventHandler, ReactElement, useState } from "react";
import { LabelSale } from "../LabelSale/LabelSale";
import { IconDecrement } from "../IconDecrement/IconDecrement";
import { IconIncrement } from "../IconIncrement/IconIncrement";
import { BtnPrimary } from "../BtnPrimary/BtnPrimary";

export const DescriptionBlock = () => {
  return (
    <div className="uppercase max-w-[410px] flex flex-col gap-[30px]">
      <p className="text-[14px] font-[400]">New season</p>
      <h1>Contrast Bootcut Sweatpants</h1>
      <Price />
      <Counter />
      <Colors />
      <Sizes />
      <BuyNowBlock />
      <Description />
      <ReviewsList />
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

// Counter
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
      <h2 className="text-[14px] font-[400]">Quantity</h2>
      <div className="flex items-center gap-[15px]">
        <ButtonPrimary icon={<IconDecrement />} callback={hangleDecrement} />
        <div>{count}</div>
        <ButtonPrimary icon={<IconIncrement />} callback={hangleIncrement} />
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
    <button onClick={callback} className="border-[#1D1D1D] border p-[10px]">
      {icon}
    </button>
  );
};

// Colors
const Colors = () => {
  return (
    <div>
      <h3 className="text-[14px] font-[400]">colors</h3>
      <ul className="flex gap-[5px]">
        <li className="w-[30px] h-[30px] bg-white rounded-full"></li>
        <li className="w-[30px] h-[30px] bg-black rounded-full"></li>
        <li className="w-[30px] h-[30px] bg-[#656B73] rounded-full"></li>
        <li className="w-[30px] h-[30px] bg-[#468578] rounded-full"></li>
      </ul>
    </div>
  );
};

const Sizes = () => {
  return (
    <div>
      <h3 className="text-[14px] font-[400]">Size</h3>
      <div className="grid grid-cols-5 grid-rows-2 gap-[10px]">
        {[...Array(10)].map((item) => (
          <Size key={item + " " + 1} />
        ))}
      </div>
      <p className="normal-case	p-[12px] font-[300] text-[#64A0C2] cursor-pointer">
        Table of sizes
      </p>
    </div>
  );
};
const Size = () => {
  return (
    <div className="p-[10px] text-center border border-[#F2F2F2] hover:border-[#1D1D1D] transition-all cursor-pointer">
      <p className="text-[14px] font-[400]">40-42</p>
      <p className="text-[12px] font-[300] text-[#B3B3B3]">XS</p>
    </div>
  );
};
//Buy Now
const BuyNowBlock = () => {
  return (
    <div className="flex gap-[10px]">
      <BtnPrimary styles="w-full py-[15px]" text={"Buy now"} />
      <Favorites />
    </div>
  );
};

const Favorites = () => {
  return (
    <button className="border w-[45px] h-[45px] self-center hover:bg-black group p-[10px] border-black">
      <HeartIcon />
    </button>
  );
};

const HeartIcon = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3 12.7953C17.641 11.4813 19 9.90626 19 7.84526C19 6.53244 18.4785 5.27339 17.5502 4.34509C16.6219 3.41678 15.3628 2.89526 14.05 2.89526C12.466 2.89526 11.35 3.34526 10 4.69526C8.65 3.34526 7.534 2.89526 5.95 2.89526C4.63718 2.89526 3.37813 3.41678 2.44982 4.34509C1.52152 5.27339 1 6.53244 1 7.84526C1 9.91526 2.35 11.4903 3.7 12.7953L10 19.0953L16.3 12.7953Z"
        stroke="#1D1D1D"
        strokeLinecap="round"
      />
    </svg>
  );
};

//DesctiptionBlock
const Description = () => {
  return (
    <div>
      <h3 className="text-[14px] font-[400]">More details</h3>
      <ul className="flex flex-col gap-[10px] w-full">
        {descriptionList.map(({ type, value }: IdescriptItem) => {
          return (
            <li key={value} className="flex">
              <p className="w-[33%] text-[14px] font-[300] text-[#B3B3B3] normal-case">
                {type}
              </p>
              <p className="text-[14px] font-[300] normal-case">{value}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface IdescriptItem {
  type: string;
  value: string;
}

const descriptionList = [
  { type: "Vendor code", value: "50845125" },
  { type: "Bag Type", value: "Tote" },
  { type: "Color", value: "Black, Gray, Beige, White" },
  { type: "Material", value: "Canvas" },
  { type: "Style", value: "Casual" },
  { type: "Hardness", value: "Soft" },
];

//Reviews Block
const ReviewsList = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex justify-between">
        <h3 className="text-[14px] font-[400]">Customers Reviews</h3>
        <p className="text-[12px] font-[300] text-[#64A0C2] cursor-pointer">
          Watch all
        </p>
      </div>
      <ul className="flex flex-col gap-[30px]">
        <Review />
        <Review />
        <Review />
      </ul>
    </div>
  );
};

const Review = () => {
  return (
    <li className="bg-[#F2F2F2] p-[20px]">
      <div className="flex justify-between">
        <p className="text-[14px] font-[400]">Name Surname</p>
        <div>Rate</div>
      </div>
      <h4 className="text-[16px] font-[500] mt-[10px]">Very Good experience</h4>
      <p className="text-[14px] font-[300] normal-case mt-[10px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore labore.
      </p>
    </li>
  );
};
