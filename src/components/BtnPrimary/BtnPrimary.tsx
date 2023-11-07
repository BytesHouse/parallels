import { MouseEventHandler } from "react";

interface BtnPrimaryProps {
  text: string;
  callback?: MouseEventHandler;
  styles?: string;
}

export const BtnPrimary = ({
  text,
  callback,
  styles = "self-baseline py-[15px] px-[20px]",
}: BtnPrimaryProps) => {
  return (
    <button
      onClick={callback}
      className={
        "text-[12px] bg-[#1D1D1D] hover:bg-white border border-white text-white hover:text-black hover:border-black transition-all duration-500 uppercase " +
        styles
      }
    >
      {text}
    </button>
  );
};
