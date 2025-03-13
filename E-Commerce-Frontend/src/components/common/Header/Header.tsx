
import style from "./style.module.css";
import Cursor from "@/components/feedback/Cursor/Cursor";
import useHeader from "@/hooks/useHeader";
import CustomNavLink from "./NavLink/CustomNavLink";
import IconLinks from "@components/common/Header/IconLinks/IconLinks";


const {navLinksMobile, headerContainer, logo, navLinks } = style;

const Header = () => {
  const { position, handleCursorPosistion } = useHeader();

  return (
    <div className={headerContainer}>
      <div className={logo}>
        Logo<span className=""></span>
      </div>

      <ul className={navLinks}>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Home" to=""/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Products" to="products/all"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Categories" to="categories"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="About" to="aboutUs"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Contact" to="contactUs"/>

        <Cursor position={position} />
      </ul>


       <IconLinks/>
  
      {/* //mobileNaveLInk */}
      <ul className={navLinksMobile}>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Home" to=""/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Products" to="products/all"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Categories" to="categories"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="About Us" to="aboutUs"/>
        <CustomNavLink handleCursorPosistion={handleCursorPosistion} title="Contact Us" to="contactUs"/>

        <Cursor position={position} />
      </ul>
      
    </div>
  );
};

export default Header;
