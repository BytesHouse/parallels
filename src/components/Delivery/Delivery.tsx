"use client";
import Image from "next/image";
import { useState } from "react";

export const Delivery = () => {
  const [shippingCheck, setShippingCheck] = useState();
  let cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart")!);
  }
  return (
    <div className="pb-[20px]">
      <div className="flex flex-col gap-[15px] md:gap-[30px]">
        <p className="uppercase text-[16px] font-[500]">Cart</p>
        <p className="text-[14px] font-[300] text-gray-500">
          Ship from <span className="text-black">Israel</span>
        </p>
      </div>
      <ul className="flex flex-col  mt-[20px]">
        {cart.map((item: any) => {
          return <CartItem item={item} key={String(item.name)} />;
        })}
      </ul>
    </div>
  );
};


const CartItem = ({callback, item}: {callback?: any, item?: any}) => {
  const {price, name, count, description, id, image, size} = item;
  return (
    <li className=" border-b md:border-b-0 md:border-t py-[20px] flex justify-between">
      <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px]">
        <Image width={150} height={150} className="w-[150px] h-[150px]" src={image} alt="test" />
        <div className="flex gap-[25px] md:gap-[50px] items-center">
          <div>
            <p className="text-[12px] font-[300] uppercase">New season</p>
            <p className="text-[16px] font-[500] uppercase">{name}</p>
            {/* <p className="text-[14px] font-[300]">
              Vendor code <span>1234</span>
            </p> */}
          </div>
          <div>₪{(price * count).toFixed(1)}</div>
          <div className="flex gap-[10px] md:block">
            <div>
              <p className="text-[12px] font-[300]">Size</p>
              <p className="text-[12px] font-[500]">{size}</p>
            </div>
            <div>
              <p className="text-[12px] font-[300]">Quantity</p>
              <p className="text-[12px] font-[500]">{count}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer" onClick={callback}>
        X
      </div>
    </li>
  );
};
