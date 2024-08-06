import Image from "next/image";
import bg from "../../../public/assets/images/about-img1.jpg";

export const AboutGallery = () => {
  return (
    <div>
      <Image src={bg} alt={"bg"} className="w-full object-cover" />
      <h3>The Brand Platform</h3>
      <span>New Group</span>
    </div>
  );
};
