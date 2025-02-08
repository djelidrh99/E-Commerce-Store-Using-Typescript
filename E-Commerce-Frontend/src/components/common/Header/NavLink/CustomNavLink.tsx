import { NavLink } from "react-router-dom";

type TCostumeNavLinkProps={
    to:string;
    handleCursorPosistion:(e:React.MouseEvent<HTMLAnchorElement>)=>void;
    title:string
}

const CustomNavLink = ({handleCursorPosistion,to,title}:TCostumeNavLinkProps) => {
  return (
   
        <li
        
          className="relative z-10 block cursor-pointer px-1 py-1 sm:px-3 sm:py-1.5 text-xs text-center  uppercase text-white  md:text-base"
        >
          <NavLink   onClick={(e) => {
            handleCursorPosistion(e);
          }} to={to} end>
            {title}
          </NavLink>
        </li>
  )
}

export default CustomNavLink