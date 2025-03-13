import { getCartThunk } from "@/store/Cart/thunk/getCartThunk";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/hooks";
import { useCallback, useEffect } from "react";
import {
  cartCleanUp,
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "@/store/Cart/cartSlice";

const useCart = () => {
  const dispatch = useAppDispatch();
  const { loading, cartProductFullInfo, itemId } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    const promise = dispatch(getCartThunk());
    return () => {
      promise.abort();
      dispatch(cartCleanUp());
    };
  }, []);

  const cartProduct = cartProductFullInfo.map((item) => {
    return {
      id: item.id,
      name: item.title,
      price: item.price,
      quantity: itemId[item.id],
      image: item.img,
    };
  });

  const cartTotalPrice = cartProduct.reduce((acc,curr)=>{
    return acc + (+curr.price * curr.quantity)
  },0)


  const removeProductFromCart = useCallback(
    (id: number) => {
      dispatch(removeProduct(id));
    },
    [dispatch]
  );

  const incrementQuantityFromCart = useCallback(
    (id: number) => {
      dispatch(incrementQuantity(id));
    },
    [dispatch]
  );

  const decrementQuantityFromCart = useCallback(
    (id: number) => {
      dispatch(decrementQuantity(id));
    },
    [dispatch]
  );

  return {
    loading,
    cartProduct,
    removeProductFromCart,
    incrementQuantityFromCart,
    decrementQuantityFromCart,
    cartTotalPrice
  };
};

export default useCart;
