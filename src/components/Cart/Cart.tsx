"use client";
import { useState } from "react";
import { BtnPrimary } from "../BtnPrimary/BtnPrimary";
import { sendEmail } from "@/src/utils/send-email";
import { useRouter } from "next/navigation";

const initialState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  message: "",
  delivery: "Courier",
  payment: "Cash",
  body: [] as any,
};
export type FormDataOrder = {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
  delivery: string;
  payment: string;
  body: any;
};

export const Cart = () => {
  const router = useRouter()
  const [deliveryMethod, setDeliveryMethod] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [order, setOrder] = useState(initialState);
  const handleCheckClicked = (method: number, key: string, value: string) => {
    setDeliveryMethod(method);
    setOrder({ ...order, [key]: value });
  };
  const handlePaymentClicked = (method: number, key: string, value: string) => {
    setPaymentMethod(method);
    setOrder({ ...order, [key]: value });
  };
  let payOrder: any = [];
  let totalPrice = 0;
  let deliveryPrice = 0;
  if (localStorage.getItem("cart")) {
    payOrder = JSON.parse(localStorage.getItem("cart")!);
    totalPrice = payOrder.reduce(
      (acc: any, item: any) => acc + +(item.price * item.count).toFixed(1),
      totalPrice
    );
  }

  const handlerBuyNow = async () => {
    if (!order.email || !order.name || !order.address || !order.phone) {
      alert("Enter all requeried fields");
      return;
    }
    let string = `
                You have a new order
      -----------------------------------------
      ${JSON.parse(localStorage.getItem("cart")!).map(
        (item: any) => `
      Product: ${item.name} 
      Count:   ${item.count}
      Size:    ${item.size}
      Color:   ${item.color}
      `
      )}
      -----------------------------------------
      Total Price:     ${totalPrice}
      Delivery Method: ${order.delivery}
      Payment Method:  ${order.payment}
      Contact Address: ${order.address}
      Phone Number:    ${order.phone}
    `;
    const tmp = order;
    tmp.message = order.message + " " + string;
    await sendEmailTest(tmp);
    localStorage.removeItem("cart");
    setTimeout(() => {
      router.push('/')
    }, 1500)
  };
  const sendEmailTest = (tmp: any) => {
    sendEmail(tmp);
  };
  return (
    <div className="sticky top-[20px] flex flex-col gap-[15px] md:gap-[30px] self-baseline">
      <div>
        <p className="uppercase text-[16px] font-[500]">DELIVERY</p>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[12px] font-[300]">Shipping method</p>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[15px]">
              <CheckBox
                callback={() => handleCheckClicked(0, "delivery", "Courier")}
                state={deliveryMethod === 0}
              />{" "}
              <p className="text-[12px] font-[300]">Courier Delivery Req</p>
            </div>
            <div className="flex gap-[15px]">
              <CheckBox
                callback={() =>
                  handleCheckClicked(1, "delivery", "Self-pickup")
                }
                state={deliveryMethod === 1}
              />
              <p className="text-[12px] font-[300]">Self-pickup Req</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className="uppercase text-[16px] font-[500]">Contacts</p>
        <input
          onChange={(e) => setOrder({ ...order, name: e.target.value })}
          placeholder="Full Name*"
          className="py-[10px] border-b outline-none"
          type="text"
        />
        <input
          onChange={(e) => setOrder({ ...order, phone: e.target.value })}
          placeholder="Phone number*"
          className="py-[10px] border-b outline-none"
          type="text"
        />
        <input
          onChange={(e) => setOrder({ ...order, address: e.target.value })}
          placeholder="Address*"
          className="py-[10px] border-b outline-none"
          type="text"
        />
        <input
          onChange={(e) => setOrder({ ...order, email: e.target.value })}
          placeholder="Email*"
          className="py-[10px] border-b outline-none"
          type="text"
        />
        <textarea
          onChange={(e) => setOrder({ ...order, message: e.target.value })}
          placeholder="Comment"
          className="py-[10px] border-b outline-none resize-none"
          name=""
          id=""
          cols={30}
          rows={10}
        ></textarea>
      </div>
      <div>
        <p className="uppercase text-[16px] font-[500]">Payment</p>
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[15px]">
            <CheckBox
              callback={() => handlePaymentClicked(0, "payment", "Cash")}
              state={paymentMethod === 0}
            />{" "}
            <p className="text-[12px] font-[300]">Cash</p>
          </div>
          <div className="flex gap-[15px]">
            <CheckBox
              callback={() => handlePaymentClicked(1, "payment", "Card")}
              state={paymentMethod === 1}
            />
            <p className="text-[12px] font-[300]">Card</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className="uppercase text-[16px] font-[500]">Summary</p>
        <div>
          <div className="flex justify-between">
            <span className="text-[12px] font-[300]">Subtotal</span>
            <span className="text-[12px] font-[500]">${totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] font-[300]">Delivery</span>
            <span className="text-[12px] font-[500]">${deliveryPrice}</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between border-t mt-[20px] pt-[20px]">
            <span className="text-[12px] font-[300]">Total</span>
            <span className="text-[12px] font-[500]">
              ₪{(totalPrice + deliveryPrice).toFixed(1)}
            </span>
          </div>
        </div>
        <BtnPrimary
          callback={handlerBuyNow}
          styles="h-[45px]"
          text={"buy now"}
        />
      </div>
    </div>
  );
};

const CheckBox = ({ state, callback }: { state: boolean; callback: any }) => {
  return (
    <svg
      onClick={callback}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="19" height="19" stroke="black" />
      <rect
        x="4"
        y="4"
        width="12"
        height="12"
        fill={state ? "black" : "none"}
      />
    </svg>
  );
};
