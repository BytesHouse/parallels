import { FillterDropdown } from "../FillterDropdown/FillterDropdown"
import { FillteredList } from "../FillteredList/FillteredList"

export const ProductList = () => {
    return <section className="container px-[15px] md:px-[0] mx-auto pt-[20px] pb-[50px] flex flex-col">
        <div className="">Breadcrumps</div>
        <div className="grid grid-cols-[1fr_3fr] pt-[30px]">
            <div className="max-w-[250px] flex flex-col gap-[15px]">
                <FillterDropdown text={"Category"} array={[]} />
                <FillterDropdown text={"Color"} array={[]} />
                <FillterDropdown text={"Denim features"} array={[]} />
                <FillterDropdown text={"Denim fit"} array={[]} />
                <FillterDropdown text={"Size"} array={[]} />
            </div>
            <FillteredList />
        </div>
    </section>
}