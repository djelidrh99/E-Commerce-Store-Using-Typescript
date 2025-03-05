import Heading from "@/components/common/Heading/Heading"
import Loading from "@/components/feedback/Cursor/Loading/Loading"
import CartFullInfo from "@/components/eCommerce/CartFullInfo/CartFullInfo"
import { getCartThunk } from "@/store/Cart/thunk/getCartThunk"
import { useAppDispatch, useAppSelector } from "@/store/Hooks/hooks"
import { useCallback, useEffect } from "react"
import { removeProduct } from "@/store/Cart/cartSlice"

const Cart = () => {
  const dispatch = useAppDispatch()
  const {loading,cartProductFullInfo,itemId}=useAppSelector((state)=>state.cart)


  useEffect(() => {
    const promise = dispatch(getCartThunk())
    return ()=>{
    promise.abort()
    } 
  },[])

  const cartProduct = cartProductFullInfo.map((item)=>{
    return {
      id: item.id,
    name: item.title,
    price: item.price,
    quantity: itemId[item.id],
    image: item.img
    }
  })

  const removeProductFromCart = useCallback( (id: number) => {
    dispatch(removeProduct(id))
   }, [dispatch]
)
  

  return (
    <div>
      <Heading title={"Cart"} />
      <div className="bg-white ">
        <Loading loading={loading} error={null} type={"categories"}>
        <div className="container  grid grid-cols-1 text-red-500   py-10 mx-auto max-lg:px-2 lg:px-10">
            <CartFullInfo items={cartProduct} removeProductFromCart={removeProductFromCart}/>
        </div>

        </Loading>
       
      </div>
    </div>
  )
}

export default Cart