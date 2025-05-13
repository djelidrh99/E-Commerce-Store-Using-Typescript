import Search from "@assets/svg/search.svg?react";
import User from "@assets/svg/user.svg?react";
import Login from "@assets/svg/login.svg?react";
import Cart from "@assets/svg/cart.svg?react";
import Wishlist from "@assets/svg/wishlist.svg?react";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/hooks";
import { useEffect, useState } from "react";
import { counterSelector } from "@/store/Cart/createSelector/counterSelector";
import DropMenu from "@components/common/DropMenu/DropMenu";
import { logout } from "@/store/Auth/AuthSlice";

const { iconNavLinks, counterWithAnimation, counter } = style;

const IconLinks = () => {
  const navigate = useNavigate();
  const counterCart = useAppSelector(counterSelector);
  const [isAnimate, setIsAnimate] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsAnimate(true);

    const animationTimeout = setTimeout(() => {
      setIsAnimate(false);
    }, 600);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [counterCart]);

  const logoutUser = ()=>{
    dispatch(logout())
    console.log("logout")
    navigate("/")
  }

  return (
    <ul className={iconNavLinks}>
      <li className="">
        <Search className="" />
      </li>
      <li onClick={() => navigate("wishlist")} className="">
        <Wishlist className="" />
      </li>
      <li onClick={() => navigate("cart")} className="">
        <Cart className="" />
        <span className={isAnimate ? counterWithAnimation : counter}>
          {counterCart}
        </span>
      </li>
      <li
        title={user ? user.name : ""}
        className=""
      >
        {user ? (
          <DropMenu logout={logoutUser}>
            <User className="" />
          </DropMenu>
        ) : (
          <Login onClick={() => navigate("login")} className="" />
        )}
      </li>
    </ul>
  );
};

export default IconLinks;
