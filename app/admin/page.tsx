"use client";
import { useState } from "react";

export default function page() {
  const [state, setState] = useState(2);
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
  return (
    <>
      <main className="max-width-[1180px] ">
        Admin Page
        <div className="grid grid-cols-[1fr_3fr] ">
          <aside className="border p-[30px]  ">
            <ul>
              <li onClick={() => changeTab(1)} className="px-[20px] pb-[15px]">
                Category
              </li>
              <li onClick={() => changeTab(2)} className="px-[20px] pb-[15px]">
                Product
              </li>
              <li onClick={() => changeTab(3)} className="px-[20px] pb-[15px]">
                User
              </li>
              <li onClick={() => changeTab(4)} className="px-[20px] pb-[15px]">
                Order
              </li>
              <li onClick={() => changeTab(5)} className="px-[20px] pb-[15px]">
                Post
              </li>
            </ul>
          </aside>
          <section>
            <div className="border p-[15px] w-[100%] h-[100%]">
              {tabsSwitcher()}
            </div>
            <div className="w-[500px] h-[700px] flex items-center">
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
                  value="CONFIRM"
                  className="bg-[#1D1D1D] text-white py-[15px]"
                  type="submit"
                />
              </form>
            </div>
          </section>
        </div>
      </main>
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
