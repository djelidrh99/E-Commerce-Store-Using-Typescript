import Search from "@assets/svg/search.svg?react";
import User from "@assets/svg/user.svg?react";
import Cart from "@assets/svg/cart.svg?react";
import Wishlist from "@assets/svg/wishlist.svg?react";
import style from "./style.module.css"
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/Hooks/hooks";
import { useEffect, useState } from "react";
import { counterSelector } from "@/store/Cart/createSelector/counterSelector";



const {iconNavLinks,counterWithAnimation,counter} = style;


const IconLinks = () => {
    const navigate = useNavigate();
    const counterCart =useAppSelector(counterSelector)
    const [isAnimate,setIsAnimate]=useState(false)


    useEffect(()=>{
        setIsAnimate(true)

       const animationTimeout= setTimeout(()=>{
            setIsAnimate(false) 
        },600)

        return ()=>{
            clearTimeout(animationTimeout)
        }



    },[counterCart])
    

  return (
    <ul className={iconNavLinks}>
    <li className="">
      <Search className="" />
    </li>
    <li onClick={()=>navigate("wishlist")} className="">
      <Wishlist className="" />
    </li>
    <li onClick={()=>navigate("cart")} className="">
    
    <Cart  className="" />  
    <span className={isAnimate ? counterWithAnimation : counter} >{counterCart}</span>        
    
    </li>
    <li className="">
      <User className="" />
    </li>
  </ul>  )
}

export default IconLinks