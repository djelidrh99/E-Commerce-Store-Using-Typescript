import Heading from "@/components/common/Heading/Heading"
import Product from "@/components/eCommerce/Product/Product"
import ProductsFilter from "@/components/eCommerce/ProductFilter/ProductsFilter"


const Products = () => {
  return (
    <div>
    <Heading title={"Products"}/>
    <div className="bg-white ">
      
      <div className="container  grid grid-cols-1  md:grid-cols-4 gap-4 py-10 mx-auto max-lg:px-2 lg:px-10">
        <ProductsFilter/>
        <div className=" md:col-span-3 grid grid-cols-3 max-sm:grid-cols-2 gap-2 sm:gap-5">
        <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>

        </div>
     

    </div>
    </div>
    </div>
  )
}

export default Products