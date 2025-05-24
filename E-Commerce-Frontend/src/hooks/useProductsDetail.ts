import { addProduct } from "@/store/Cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/hooks";
import { getProducDetailsThunk } from "@/store/ProductDetails/getProductDetailsThunk/getProductDetailsThunk";
import { addToWishlistThunk } from "@/store/Wishlist/thunk/addToWishlistThunk";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProductsDetail = () => {
  const dispatch = useAppDispatch();
  const { imgGroup, loading, error, productFullInfo } = useAppSelector(
    (state) => state.productDetails
  );
  const { Id } = useParams<{ Id: string }>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [isLoading]);

  const addProductToCart = (id: number) => {
    setIsLoading(true);
    if (isLoading) {
      return;
    }
    dispatch(addProduct(id));
  };

  const addProductToWishlist = (id: number) => {
    dispatch(addToWishlistThunk(id));
  };

  useEffect(() => {
    const promise = dispatch(getProducDetailsThunk(Number(Id)));
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return {
    imgGroup,
    productFullInfo,
    loading,
    error,
    isLoading,
    addProductToCart,
    addProductToWishlist,
  };
};

export default useProductsDetail;
