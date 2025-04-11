import { useAppDispatch, useAppSelector } from "@/store/Hooks/hooks"
import { getWishlistThunk } from "@/store/Wishlist/thunk/getWishlist"
import { wishlistCleanUp } from "@/store/Wishlist/wishlistSlice"
import { useEffect } from "react"

const useWishlist = () => {
    const dispatch = useAppDispatch();
    const {productFullInfo,loading,error}=useAppSelector((state) => state.wishlist)
   

    


    useEffect(()=>{
     const promise = dispatch(getWishlistThunk("productFullInfo"))

     return () => {
        promise.abort()
        dispatch(wishlistCleanUp())
      }
    
    },[dispatch])

    const wishlistProducts = productFullInfo.map((item) => {
      return { ...item, isWishList: true };
    });

  return (
    {
    error,
    loading,
    wishlistProducts}
  )
}

export default useWishlist