import GridList from "@/components/common/GridList/GridList"
import Heading from "@/components/common/Heading/Heading"
import Product from "@/components/eCommerce/Product/Product"
import Loading from "@/components/feedback/Loading/Loading"
import LottieHandler from "@/components/feedback/LottierHandler/LottierHandler"
import useWishlist from "@/hooks/useWishlist"



const Wishlist = () => {

  const {loading,wishlistProducts,error} =useWishlist()
    
   
  return (
<>
      <Heading title={"Wishlist"} />
      <div className="bg-white flex-1 ">
        <Loading loading={loading} type="products" error={error}>

        {wishlistProducts.length === 0 ? <LottieHandler type="empty" message="Your wishlist is empty"/> : 
        <div className="container   grid grid-cols-2  md:grid-cols-3 gap-4 py-10 mx-auto max-lg:px-2 lg:px-10">
            
        <GridList
        itemArray={wishlistProducts}
        callBackFunc={(item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item?.title}
            price={item.price}
            img={item.img}
            cat_prefix={item.cat_prefix}
            isWishList={item.isWishList}
          />
        )}
      />
       
    
       </div>
        }
          
            </Loading>  
            </div>  
            </>  

            )
}

export default Wishlist