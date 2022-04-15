import { Link } from "react-router-dom";
import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import logo from "../images/test-logo-200.png";
import emptyCart from "../images/icons8-shopping-cart-100.png";
//import fullCart from "../images/icons8-buying-100.png";
import closedMenuImage from "../images/icons8-hamburger-menu-100.png";
import openMenuImage from "../images/icons8-close-100.png";

export default function NavBar() {
  const { openMenu, setOpenMenu } = useContext(GeneralContext);

  return (
    <div className="navBar">
      <img
        className="imageMenu cursorPointer"
        src={openMenu ? openMenuImage : closedMenuImage}
        alt="Menu"
        onClick={() => setOpenMenu(!openMenu)}
      />
      <Link to={"/"} onClick={() => setOpenMenu(false)}>
        <img className="imageLogo" src={logo} alt="Logo" />
      </Link>
      <img className="imageShoppingCart" src={emptyCart} alt="Shopping Cart" />
    </div>
  );
}
