import Heading from "@/components/common/Heading/Heading";
import ProductDetail from "@/components/eCommerce/ProductDetail/ProductDetail";
import Loading from "@/components/feedback/Loading/Loading";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/hooks";
import { getProducDetailsThunk } from "@/store/ProductDetails/getProductDetailsThunk/getProductDetailsThunk";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const ProductsDetail = () => {
const dispatch = useAppDispatch();
const {imgGroup,loading,error,productFullInfo} = useAppSelector((state) => state.productDetails);
const {Id}= useParams<{Id:string}>()










useEffect(()=> {
  const promise =dispatch(getProducDetailsThunk(Number(Id)))
  return () => {
    promise.abort();
  }
},[dispatch])

  


  return (
    <div>
      <Heading title={"Product Details"} />
      <div className="bg-white ">
                <Loading loading={loading} error={error} type={"cart"} >

                
        <div className="container  grid grid-cols-1   py-10 mx-auto max-lg:px-2 lg:px-10">
            <ProductDetail productFullInfo={productFullInfo} imgGroup={imgGroup}/>
        </div>
        </Loading>
      </div>
    </div>
  );
};

export default ProductsDetail;
