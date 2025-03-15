import GridList from "@/components/common/GridList/GridList"
import Heading from "@/components/common/Heading/Heading"
import Product from "@/components/eCommerce/Product/Product"
import Loading from "@/components/feedback/Loading/Loading"
import useProducts from "@/hooks/useProducts"


const Wishlist = () => {
    const { productList, productsCategory, productsMatrial, loading } =
    useProducts();
  return (
<div>
      <Heading title={"Wishlist"} />
      <div className="bg-white ">
        <Loading loading={"successed"} type="products" error={null}>

       
          <div className="container  grid grid-cols-1  md:grid-cols-4 gap-4 py-10 mx-auto max-lg:px-2 lg:px-10">
          <GridList
                  itemArray={productList}
                  callBackFunc={(item) => (
                    <Product
                      key={item.id}
                      id={item.id}
                      title={item?.title}
                      price={item.price}
                      img={item.img}
                      cat_prefix={item.cat_prefix}
                    />
                  )}
                />
            </div>
            </Loading>  
            </div>  
            </div>  

            )
}

export default Wishlist