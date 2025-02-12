import FilterRadio from "@/components/feedback/Filter/FilterRadio/FilterRadio"
import ToggleFiter from "@/components/feedback/Filter/ToggleFilter/ToggleFiter"

const ProductsFilter = () => {
  return (
    <div className="flex flex-col gap-5">
          <h3 className="text-black font-bold text-xl">Filter Option</h3>
          <FilterRadio/>
          <ToggleFiter/>
          <FilterRadio/>
          

        </div>
  )
}

export default ProductsFilter