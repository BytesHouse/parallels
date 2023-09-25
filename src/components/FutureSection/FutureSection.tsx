import { ImageComponent } from "../ImageComponent/ImageComponent"
import img1 from '../../../public/assets/images/image1.svg'
import img2 from '../../../public/assets/images/image2.svg'
import img3 from '../../../public/assets/images/image3.svg'

export const FutureSection = () => {
    return <section className="w-full bg-[#F2F2F2] py-[100px]">
        <div className="container m-auto flex flex-col gap-[30px]">
            <p className="text-[24px] uppercase font-[300] text-center">FEATURED IN</p>
            <div className="flex justify-center gap-[30px]">
                <ImageComponent image={img1} />
                <ImageComponent image={img2} />
                <ImageComponent image={img3} />
            </div>
        </div>
    </section>
}