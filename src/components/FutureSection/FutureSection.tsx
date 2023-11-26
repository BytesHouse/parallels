import { ImageComponent } from "../ImageComponent/ImageComponent"
import img1 from '../../../public/assets/images/image4.svg'

export const FutureSection = () => {
    return <section className="w-full bg-[#F2F2F2] py-[100px]">
        <div className="container px-[15px] md:px-[0] m-auto flex flex-col gap-[30px]">
            <p className="text-[24px] uppercase font-[300] text-center">FEATURED IN</p>
            <div className="flex justify-center gap-[30px]">
                <ImageComponent image={img1} />
            </div>
        </div>
    </section>
}