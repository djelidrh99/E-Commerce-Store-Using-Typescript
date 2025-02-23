import { useAppDispatch, useAppSelector } from "@/store/Hooks/hooks"
import { productsCleanUp } from "@/store/Product/productSlice"
import { getProductThunk } from "@/store/Product/thunk/getProductThunk"
import { useEffect,useMemo } from "react"
import { useParams } from "react-router"

const useProducts = () => {
    console.log("render")
  const dispatch= useAppDispatch()
  const {productsFullInfo}=useAppSelector(state=>state.product)
  const params = useParams()


  useEffect(()=>{
   const promise = dispatch(getProductThunk())
   return ()=>{
    promise.abort()
    dispatch(productsCleanUp())

   }
  },[dispatch])
  let productList = productsFullInfo
  const productByCategories = useMemo(()=>{
   return productsFullInfo.filter((item)=>{
      return item.cat_prefix === params.prefixId
    })
  },[productsFullInfo,params])

  const productsByMatrial = useMemo(()=>{
    return productsFullInfo.filter((item)=>{
       return item.matrial === params.prefixId
     })
   },[productsFullInfo,params])

 

  const productsCategory = Array.from(
    new Map(productsFullInfo.map((item) => [item.categoryTitle + "_" + item.cat_prefix, { 
      categoryTitle: item.categoryTitle || "", 
      cat_prefix: item.cat_prefix 
    }])).values()
  );

  productsCategory.unshift({categoryTitle:"All",cat_prefix:"all"})


  const productsMatrial = Array.from(new Set(productsFullInfo.map((item) => {
    return item.matrial;
  }))).filter((matrial): matrial is string => matrial !== undefined);

  if(productsMatrial.includes(params.prefixId as string) ) {
    productList = productsByMatrial
  } else if(params.prefixId!=="all" ) {
    productList = productByCategories
  }
  
  
    return {productsCategory,
        productsMatrial,
        productList}
}

export default useProducts