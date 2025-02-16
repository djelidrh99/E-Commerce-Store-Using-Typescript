import FilterRadio from "@/components/feedback/Filter/FilterRadio/FilterRadio"
import ToggleFiter from "@/components/feedback/Filter/ToggleFilter/ToggleFiter"
import { TProduct } from "@/types/productType"


type TProductsFilterProps = {
  productsFullInfo:{categoryTitle:string,cat_prefix:string}[]
  productByMatrial:string[]
}

const ProductsFilter = ({productsFullInfo,productByMatrial}:TProductsFilterProps) => {
  
  return (
    <div className="flex flex-col gap-5">
          <h3 className="text-black font-bold text-xl">Filter Option</h3>
          <FilterRadio productsFullInfo={productsFullInfo}/>
          <ToggleFiter productByMatrial={productByMatrial}  />
          

        </div>
  )
}

export default ProductsFilter