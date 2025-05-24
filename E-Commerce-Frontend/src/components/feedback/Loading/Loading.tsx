import { TLoading } from "@/types/loadingType";
import CategoriesSkeleton from "@components/feedback/Skeleton/CategoriesSkeleton";
import ProductsSkeleton from "@components/feedback/Skeleton/ProductsSkeleton";
import CartSkeleton from "@components/feedback/Skeleton/CartSkeleton";
import LottieHandler from "../LottierHandler/LottierHandler";
import ProductDetailSkeleton from "@components/feedback/Skeleton/ProductDetailSkeleton";


const skeletonObject ={
    categories: CategoriesSkeleton,
    products:ProductsSkeleton ,
    cart:CartSkeleton,
    productDetail: ProductDetailSkeleton
}

type TLoadingProps={
    loading:TLoading;
    error:null|string;
    children:React.ReactNode;
    type: keyof typeof skeletonObject
}

const Loading = ({loading,error,children,type}:TLoadingProps) => {

    const SkeletonComponent = skeletonObject[type]

if(loading==="pending") {
    return (
        
               <SkeletonComponent/>

        
    )
}

if(loading==="failed" ) {
    return (
    <LottieHandler type="error" message={error as string}/>
    )
}

  return (
    <>
     {children}
    </>
   
  )
}

export default Loading