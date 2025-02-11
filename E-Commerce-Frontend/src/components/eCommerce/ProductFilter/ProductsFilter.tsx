import FilterRadio from "@/components/feedback/Filter/FilterRadio"

const ProductsFilter = () => {
  return (
    <div className="flex flex-col gap-5">
          <h3 className="text-black font-bold text-xl">Filter Option</h3>
          <FilterRadio/>
          <FilterRadio/>

        </div>
  )
}

export default ProductsFilter