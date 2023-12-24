"use client";
import {
  Dispatch,
  MouseEventHandler,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import { LabelSale } from "../LabelSale/LabelSale";
import { IconDecrement } from "../IconDecrement/IconDecrement";
import { IconIncrement } from "../IconIncrement/IconIncrement";
import { BtnPrimary } from "../BtnPrimary/BtnPrimary";
import { toast } from "react-toastify";

export const DescriptionBlock = ({ item }: any) => {
  const { price, name, id, count, categoryId } = item;
  const [counter, setCounter] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  // const [type, setType] = useState(categoryId)
  return (
    <div className="uppercase relative z-1 bg-white md:max-w-[410px] flex flex-col gap-[30px]">
      <p className="text-[12px] font-[300] md:text-[14px] md:font-[400]">New season</p>
      <h1 className="text-[16px] font-[500]">{name}</h1>
      <Price price={price} />
      <Counter counter={counter} set={setCounter} max={count} />
      <Colors color={color} setColor={setColor} />
      <Sizes size={size} setSize={setSize} type={categoryId} />
      <BuyNowBlock color={color} size={size} item={item} counter={counter} />
      <Description />
      <ReviewsList />
    </div>
  );
};

const Price = ({ price }: { price: string }) => {
  return (
    <div>
      <div className="relative flex items-center">
        {/* <p className="text-[24px] font-[500] text-[#EA0022] leading-3">₪223</p> */}
        {/* <LabelSale isAbsolute={false} color="bg-[#EA0022]" text="-70%" /> */}
      </div>
      <p className="text-[24px] font-[500]">₪{price}</p>
    </div>
  );
};

// Counter
const Counter = ({
  max,
  counter,
  set,
}: {
  max: number;
  counter: number;
  set: Dispatch<SetStateAction<number>>;
}) => {
  const hangleIncrement = () => {
    if (counter < max) {
      set(counter + 1);
    }
  };
  const hangleDecrement = () => {
    counter && counter >1 && set(counter - 1);
  };
  return (
    <div className="flex flex-col gap-[15px]">
      <h2 className="text-[14px] font-[400]">Quantity</h2>
      <div className="flex items-center gap-[15px]">
        <ButtonPrimary icon={<IconDecrement />} callback={hangleDecrement} />
        <div>{counter}</div>
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
const Colors = (props: any) => {
  const { color, setColor } = props;
  return (
    <div className="flex flex-col gap-[15px]">
      <h3 className="text-[14px] font-[400]">colors</h3>
      <ul className="flex gap-[5px]">
        <li
          onClick={() => setColor("white")}
          className={`${
            color === "white" && "border-yellow-500"
          } w-[30px] h-[30px] bg-white rounded-full border border-gray-300 cursor-pointer`}
        ></li>
        <li
          onClick={() => setColor("black")}
          className={`${
            color === "black" && "border-yellow-500 border"
          } w-[30px] h-[30px] bg-black rounded-full cursor-pointer`}
        ></li>
        {/* <li className="w-[30px] h-[30px] bg-[#656B73] rounded-full"></li> */}
        {/* <li className="w-[30px] h-[30px] bg-[#468578] rounded-full"></li> */}
      </ul>
    </div>
  );
};

const shirtsArr = [
  { size: "", sizeL: "XS" },
  { size: "", sizeL: "S" },
  { size: "", sizeL: "M" },
  { size: "", sizeL: "L" },
  { size: "", sizeL: "XL" },
];
const shortsArr = [
  { size: "", sizeL: "S" },
  { size: "", sizeL: "M" },
  { size: "", sizeL: "L" },
  { size: "", sizeL: "XL" },
];

const Sizes = ({ type, size, setSize }: any) => {
  const tmp =
    type === 0
      ? shirtsArr
      : type === 1
      ? shortsArr
      : [{ size: "", sizeL: "L" }];
  return (
    <div className="flex flex-col gap-[15px]">
      <h3 className="text-[14px] font-[400]">Size</h3>
      <div className="grid grid-cols-5 grid-rows-2 gap-[10px]">
        {tmp.map((item) => (
          <Size
            key={item.sizeL + " " + 1}
            size={item.size}
            sizeL={item.sizeL}
            state={size}
            callback={setSize}
          />
        ))}
      </div>
      <p className="normal-case	p-[12px] font-[300] text-[#64A0C2] cursor-pointer">
        Table of sizes
      </p>
    </div>
  );
};
const Size = ({
  size,
  sizeL,
  state,
  callback,
}: {
  size: string;
  sizeL: string;
  state: string;
  callback: any;
}) => {
  return (
    <div
      onClick={() => callback(sizeL)}
      className={`${
        sizeL === state && "border-black"
      } p-[10px] text-center border border-[#F2F2F2] hover:border-[#1D1D1D] transition-all cursor-pointer`}
    >
      <p className="text-[14px] font-[400]">{size}</p>
      <p className="text-[12px] font-[300] text-[#B3B3B3]">{sizeL}</p>
    </div>
  );
};
//Buy Now
const BuyNowBlock = ({ item, counter, color, size }: any) => {
  const { price, name, id, description, imageUrl } = item;
  const cartItem = {
    price,
    name,
    count: counter,
    id,
    description,
    image: imageUrl[0],
    color,
    size,
  };
         const handleBuyClick = () => {
    if (color && size) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([cartItem]));
        toast("Product added", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
        return;
      } else {
        const tmp = JSON.parse(localStorage.getItem("cart")!);
        const checker = tmp.some(
          (item: any) =>
            item.id === id && item.color === color && item.size === size
        );
        if (checker) {
          const item = tmp.find(
            (item: any) =>
              item.id === id && item.color === color && item.size === size
          );
          item.count += counter;
          localStorage.setItem("cart", JSON.stringify(tmp));
          toast("Product updated", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "success",
          });
          return;
        }
        toast("Product added", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
        tmp.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(tmp));
      }
    }
    if(!color){
      toast("Choose Color", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      } )
    }
    if(!size){
      toast("Choose size", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      } )
    }
  };
  return (
    <div className="flex gap-[10px]  sticky bottom-5">
      <BtnPrimary
        callback={handleBuyClick}
        styles="w-full py-[15px]"
        text={"Buy now"}
      />
      {/* <Favorites /> */}
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
  // { type: "Vendor code", value: "50845125" },
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
