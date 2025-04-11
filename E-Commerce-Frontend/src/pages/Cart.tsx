import Heading from "@/components/common/Heading/Heading";
import Loading from "@/components/feedback/Loading/Loading";
import CartFullInfo from "@/components/eCommerce/CartFullInfo/CartFullInfo";
import useCart from "@/hooks/useCart";
import LottieHandler from "@/components/feedback/LottierHandler/LottierHandler";

const Cart = () => {
  const {
    loading,
    cartProduct,
    removeProductFromCart,
    incrementQuantityFromCart,
    decrementQuantityFromCart,
    cartTotalPrice,
    error
  } = useCart();

  return (
    <div className="  ">
      <Heading title={"Cart"} />
      <div className="bg-white">
        <Loading loading={loading} error={error} type={"cart"} >
          <div className="container  grid grid-cols-1 text-red-500   py-10 mx-auto max-lg:px-2 lg:px-10">
            {cartProduct.length === 0 ? <LottieHandler type="empty" message="your cart is empty"/> : 
             <CartFullInfo
             totalPrice={cartTotalPrice}
             items={cartProduct}
             removeProductFromCart={removeProductFromCart}
             incrementQuantity={incrementQuantityFromCart}
             decrementQuantity={decrementQuantityFromCart}
           />  
            }

           
          </div>
        </Loading>
      </div>
    </div>
  );
};

export default Cart;
