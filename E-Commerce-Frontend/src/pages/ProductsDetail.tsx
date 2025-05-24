import Heading from "@/components/common/Heading/Heading";
import ProductDetail from "@/components/eCommerce/ProductDetail/ProductDetail";
import Loading from "@/components/feedback/Loading/Loading";
import useProductsDetail from "@/hooks/useProductsDetail";


const ProductsDetail = () => {
  const { loading, error, isLoading, productFullInfo, imgGroup, addProductToCart, addProductToWishlist } = useProductsDetail();



  return (
    <div>
      <Heading title={"Product Details"} />
      <div className="bg-white ">
                <Loading loading={loading} error={error} type={"productDetail"} >

                
        <div className="container  grid grid-cols-1   py-10 mx-auto max-lg:px-2 lg:px-10">
            <ProductDetail  isLoading={isLoading} addProductToCart={addProductToCart} addProductToWishlist={addProductToWishlist} productFullInfo={productFullInfo} imgGroup={imgGroup}/>
        </div>
        </Loading>
      </div>
    </div>
  );
};

export default ProductsDetail;
