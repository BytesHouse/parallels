/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useState } from "react";

export default function page() {
  const [state, setState] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  function tabsSwitcher() {
    switch (state) {
      case 1:
        return <CategoryTab />;
      case 2:
        return <ProductTab />;
      case 3:
        return <UserTab />;
      case 4:
        return <OrderTab />;
      case 5:
        return <PostTab />;
    }
  }
  function changeTab(a: number) {
    setState(a);
  }
  const handleClick = (e: any) => {
    e.preventDefault();
    setShowPopup(false);
  }
  return (
    <>
      <main className="max-width-[1180px] h-screen relative">
        <h1 className="text-center py-[10px] text-[32px]">Admin Page</h1>
        <div className="grid grid-cols-[1fr_3fr] px-[20px] h-[85%] gap-[5px]">
          <aside className="border p-[30px]">
            <ul>
              <li
                onClick={() => changeTab(1)}
                className={`${
                  state === 1 ? "font-bold" : ""
                } px-[20px] pb-[15px] cursor-pointer`}
              >
                Category
              </li>
              <li
                onClick={() => changeTab(2)}
                className={`${
                  state === 2 ? "font-bold" : ""
                } px-[20px] pb-[15px] cursor-pointer`}
              >
                Product
              </li>
              <li
                onClick={() => changeTab(3)}
                className={`${
                  state === 3 ? "font-bold" : ""
                } px-[20px] pb-[15px] cursor-pointer`}
              >
                User
              </li>
              <li
                onClick={() => changeTab(4)}
                className={`${
                  state === 4 ? "font-bold" : ""
                } px-[20px] pb-[15px] cursor-pointer`}
              >
                Order
              </li>
              <li
                onClick={() => changeTab(5)}
                className={`${
                  state === 5 ? "font-bold" : ""
                } px-[20px] pb-[15px] cursor-pointer`}
              >
                Post
              </li>
            </ul>
          </aside>
          <section>
            <div className="border p-[15px] w-[100%] h-[100%]">
              <button onClick={() => setShowPopup(true)} className="border px-[10px] py-[2px] bg-green-700 text-white rounded-full float-right ml-[15px]">
                +
              </button>
              {tabsSwitcher()}
            </div>
          </section>
        </div>
        {showPopup && <div className="flex z-10 items-center absolute top-[30%] right-[50%] translate-x-[50%]">
          <form className="px-[20px] py-[30px] border p-[10px] flex flex-col gap-[30px] bg-[#F2F2F2]">
            <input
              placeholder=""
              type="text"
              className="py-[5px]  bg-transparent border-b focus:bg-white outline-0"
            />
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <input
            onClick={handleClick}
              value="CONFIRM"
              className="bg-[#1D1D1D] text-white py-[15px]"
              type="submit"
            />
          </form>
        </div>}
      </main>
      {showPopup &&<div onClick={() => setShowPopup(false)} className="absolute z-0 top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.3)]"></div>}
    </>
  );
}

const CategoryTab = () => {
  return (
    <ul className="grid grid-cols-2  ">
      <li className="border text-center">name</li>
      <li className="border text-center">products</li>
    </ul>
  );
};
const ProductTab = () => {
  return (
    <ul className="grid grid-cols-6  ">
      <li className="border text-center">name</li>
      <li className="border text-center">price</li>
      <li className="border text-center">count</li>
      <li className="border text-center">orders</li>
      <li className="border text-center">category</li>
      <li className="border text-center">imageUrl</li>
    </ul>
  );
};
const UserTab = () => {
  return (
    <ul className="grid grid-cols-5  ">
      <li className="border text-center">username</li>
      <li className="border text-center">email</li>
      <li className="border text-center">address</li>
      <li className="border text-center">phone</li>
      <li className="border text-center">orders</li>
    </ul>
  );
};
const OrderTab = () => {
  return (
    <ul className="grid grid-cols-5  ">
      <li className="border text-center">userId</li>
      <li className="border text-center">products</li>
      <li className="border text-center">address</li>
      <li className="border text-center">status</li>
      <li className="border text-center">totalPrice</li>
    </ul>
  );
};
const PostTab = () => {
  return (
    <ul className="grid grid-cols-3  ">
      <li className="border text-center">userId</li>
      <li className="border text-center">title</li>
      <li className="border text-center">content</li>
    </ul>
  );
};
