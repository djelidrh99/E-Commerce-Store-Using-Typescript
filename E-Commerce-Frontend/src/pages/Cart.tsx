import Heading from "@/components/common/Heading/Heading";
import Loading from "@/components/feedback/Loading/Loading";
import CartFullInfo from "@/components/eCommerce/CartFullInfo/CartFullInfo";
import useCart from "@/hooks/useCart";

const Cart = () => {
  const {
    loading,
    cartProduct,
    removeProductFromCart,
    incrementQuantityFromCart,
    decrementQuantityFromCart,
    cartTotalPrice,
  } = useCart();

  return (
    <div>
      <Heading title={"Cart"} />
      <div className="bg-white ">
        <Loading loading={loading} error={null} type={"cart"}>
          <div className="container  grid grid-cols-1 text-red-500   py-10 mx-auto max-lg:px-2 lg:px-10">
            <CartFullInfo
              totalPrice={cartTotalPrice}
              items={cartProduct}
              removeProductFromCart={removeProductFromCart}
              incrementQuantity={incrementQuantityFromCart}
              decrementQuantity={decrementQuantityFromCart}
            />
          </div>
        </Loading>
      </div>
    </div>
  );
};

export default Cart;
