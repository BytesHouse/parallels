"use client";
import { useState } from "react";

export const Delivery = () => {
  const [shippingCheck, setShippingCheck] = useState();
  return (
    <div className="pb-[20px]">
      <div className="flex flex-col gap-[15px] md:gap-[30px]">
        <p className="uppercase text-[16px] font-[500]">Cart</p>
        <p className="text-[14px] font-[300] text-gray-500">
          Ship from <span className="text-black">Israel</span>
        </p>
      </div>
      <ul className="flex flex-col mt-[20px]">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
    </div>
  );
};

const CartItem = ({callback}: {callback?: any}) => {
  return (
    <li className="border-t py-[20px] flex justify-between">
      <div className="flex gap-[20px]">
        <img className="w-[150px] h-[150px]" src="" alt="test" />
        <div className="flex gap-[25px] md:gap-[50px]">
          <div>
            <p className="text-[12px] font-[300] uppercase">New season</p>
            <p className="text-[16px] font-[500] uppercase">
              Contrast Bootcut Sweatpants <span>GRAY</span>
            </p>
            <p className="text-[14px] font-[300]">
              Vendor code <span>1234</span>
            </p>
          </div>
          <div>$243</div>
          <div>
            <div>
              <p className="text-[12px] font-[300]">Size</p>
              <p className="text-[12px] font-[500]">30</p>
            </div>
            <div>
              <p className="text-[12px] font-[300]">Quantity</p>
              <p className="text-[12px] font-[500]">2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer" onClick={callback}>X</div>
    </li>
  );
};
