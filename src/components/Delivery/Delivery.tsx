"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Delivery = () => {
  const [shippingCheck, setShippingCheck] = useState();

  let cart: any = [];
  const [carts, setCarts] = useState([]);
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart")!);
  }
  return (
    <div className="pb-[20px]">
      <div className="flex flex-col gap-[15px] md:gap-[30px] border-b md:border-b-0 pb-[20px] md:pb-0">
        <p className="uppercase text-[16px] font-[500]">Cart</p>
        <p className="text-[14px] font-[300] text-gray-500">
          Ship from <span className="text-black">Israel</span>
        </p>
      </div>
      <ul className="flex flex-col  mt-[20px]">
        {cart.map((item: any, index: number) => {
          return (
            <CartItem
              callback={setCarts}
              item={item}
              key={String(item.name) + index}
            />
          );
        })}
      </ul>
    </div>
  );
};

const CartItem = ({ callback, item }: { callback?: any; item?: any }) => {
  const { price, name, count, description, id, image, size, color } = item;
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const handleDeleteProduct = () => {
    const data = localStorage.getItem("cart");
    if (data) {
      let array = JSON.parse(data);
      array = array.filter(
        (item: any) =>
          item.size !== size || item.color != color || item.id != id
      );
      localStorage.setItem("cart", JSON.stringify(array));
      callback(data);
    }
  };
  return (
    <li className="md:px-[0] border-b md:border-b-0 md:border-t py-[20px] flex justify-between">
      <div className="flex flex-row gap-[20px]">
        <Link href={`/${locale}/product/${+id}`}>
          <Image
            width={150}
            height={150}
            className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
            src={image}
            alt="test"
          />
        </Link>
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[50px] md:items-center">
          <div className="flex-shrink-0 md:w-[100px]">
            <p className="text-[12px] font-[300] uppercase">New season</p>
            <p className="text-[16px] font-[500] uppercase mt-[10px]">
              {name} <span className="text-gray-400">{color}</span>
            </p>
          </div>
          <div>₪{(price * count).toFixed(1)}</div>
          <div className="flex gap-[10px] md:flex-col">
            <div className="flex-1">
              <p className="text-[12px] font-[300]">Size</p>
              <p className="text-[12px] font-[500]">{size}</p>
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-[300]">Quantity</p>
              <p className="text-[12px] font-[500]">{count}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer" onClick={handleDeleteProduct}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.25 11.5459L11.5459 1.25" stroke="#1D1D1D" />
          <path d="M1.25 1.25L11.5459 11.5459" stroke="#1D1D1D" />
        </svg>
      </div>
    </li>
  );
};
