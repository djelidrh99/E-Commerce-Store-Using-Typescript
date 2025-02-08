import Search from "@assets/svg/search.svg?react";
import User from "@assets/svg/user.svg?react";
import Cart from "@assets/svg/cart.svg?react";
import Wishlist from "@assets/svg/wishlist.svg?react";
import style from "./style.module.css";
import Cursor from "@/components/feedback/Cursor/Cursor";
import useHeader from "@/hooks/useHeader";
import CustomNavLink from "./NavLink/CustomNavLink";

const {navLinksMobile, headerContainer, logo, navLinks, iconNavLinks, } = style;

const Header = () => {
  const { position, handleCursorPosistion } = useHeader();

  return (
    <div className={headerContainer}>
      <div className={logo}>
        Logo<span className=""></span>
      </div>

      <ul className={navLinks}>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Home" to=""/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Products" to="products"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Categories" to="categories"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="About Us" to="aboutUs"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Contact Us" to="contactUs"/>

        <Cursor position={position} />
      </ul>


        <ul className={iconNavLinks}>
          <li className="">
            <Search className="" />
          </li>
          <li className="">
            <Wishlist className="" />
          </li>
          <li className="">
            <Cart className="" />
          </li>
          <li className="">
            <User className="" />
          </li>
        </ul>
  
      {/* //mobileNaveLInk */}
      <ul className={navLinksMobile}>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Home" to=""/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Products" to="products"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Categories" to="categories"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="About Us" to="aboutUs"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Contact Us" to="contactUs"/>

        <Cursor position={position} />
      </ul>
      
    </div>
  );
};

export default Header;
