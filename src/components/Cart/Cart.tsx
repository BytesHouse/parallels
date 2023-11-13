import { BtnPrimary } from "../BtnPrimary/BtnPrimary";

export const Cart = () => {
  return (
    <div className="border flex flex-col self-baseline">
      <div className="bg-gray-100 flex p-[10px] gap-[20px] items-center">
        <p className="text-[24px] font-bold">Cart</p>
      </div>
      <div className="p-[10px] border-b h-[300px]">
        {true ? <div className="w-full h-full flex justify-center items-center">Cart Empty</div> : <div></div>}
      </div>
      <div className="p-[10px] border-b">
        <p className="flex justify-between">
          <span>products</span>
          <span>price</span>
        </p>
        <p className="flex justify-between">
          <span>delivery</span>
          <span>price</span>
        </p>
      </div>
      <div className="p-[10px] border-b flex flex-col">
        <p className="flex justify-between">
          <span>Total</span>
          <span>price</span>
        </p>
        <div className="flex gap-2 text-[12px]">
          <input type="checkbox" name="" id="" required/>
          <p>I agree to the privacy policy and terms of parallelswears.com</p>
        </div>
        <div className="self-center"> <BtnPrimary styles="px-[200px] py-[15px]" text={"Order"} /></div>
      </div>
    </div>
  );
};
