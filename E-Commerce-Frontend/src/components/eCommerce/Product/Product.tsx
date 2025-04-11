import Cart from "@assets/svg/cartAdd.svg?react";
import Like from "@assets/svg/heart.svg?react";
import HeartFill from "@assets/svg/heartfilled.svg?react";
import style from "./style.module.css";
import { TProduct } from "@/types/productType";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/store/Hooks/hooks";
import { addProduct } from "@/store/Cart/cartSlice";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { addToWishlistThunk } from "@/store/Wishlist/thunk/addToWishlistThunk";

const {
  productContainer,
  imgContainer,
  informationBox,
  addToCartBox,
  likeBox,
  soldBox,
} = style;

const Product = ({ id, img, title, price,isWishList }: TProduct) => {
  const dispatch = useAppDispatch();
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

  return (
    <motion.div
      className={productContainer}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className={imgContainer}>
        <img className="h-full w-full object-cover" src={img} alt={title} />
      </div>
      <div className={informationBox}>
        <div>
          <h5 className="font-semibold text-white text-sm lg:text-base capitalize">
            {title}
          </h5>
          <h6 className="text-white capitalize text-xs lg:text-base">
            {price}${" "}
            <span className="line-through hidden text-[var(--text-tertiary)] text-xs md:text-base ml-1 sm:ml-2">
              190%
            </span>
          </h6>
        </div>
        <div className={addToCartBox}>
          {isLoading ? (
            <>
              <Spinner
                size={"md"}
                className="border  border-transparent border-t-white"
              />
            </>
          ) : (
            <Cart
              onClick={() => {
                addProductToCart(id);
              }}
              className="w-5 h-5 sm:!w-6 sm:!h-6 transition-all hover:scale-105"
            />
          )}
        </div>
      </div>
      <div
        onClick={() => {
          addProductToWishlist(id);
        }}
        className={likeBox}
      >
        {isWishList ? (
          <HeartFill className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <Like className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
       
      </div>
      <div className={soldBox}>
        <span>20%</span>
      </div>
    </motion.div>
  );
};

export default Product;
