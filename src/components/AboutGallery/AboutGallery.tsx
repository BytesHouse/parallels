import Image from "next/image";
import bg from "../../../public/assets/images/about-img1.jpg";

export const AboutGallery = () => {
  return (
    <div className=" w-[380px] h-[200px] ">
      <Image src={bg} alt={"bg"} className="  w-[380px] h-[200px] " />
      <h3>The Brand Platform</h3>
      <span>New Group</span>
    </div>
  );
};
