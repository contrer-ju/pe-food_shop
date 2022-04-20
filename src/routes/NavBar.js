import { Link } from "react-router-dom";
import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import logo from "../images/test-logo-200.png";
import emptyCart from "../images/icons8-shopping-cart-100.png";
import fullCart from "../images/icons8-buying-100.png";
import closedMenuImage from "../images/icons8-hamburger-menu-100.png";
import openMenuImage from "../images/icons8-close-100.png";

export default function NavBar() {
  const { openMenu, setOpenMenu, shoppingCart, showModalAlert, showModalShop } =
    useContext(GeneralContext);

  return (
    <div className="navBar">
      <img
        className="imageMenu cursorPointer"
        src={openMenu ? openMenuImage : closedMenuImage}
        alt="Menu"
        onClick={() => {
          if (!showModalShop && !showModalAlert) setOpenMenu(!openMenu);
        }}
      />
      <Link to={"/"} onClick={() => setOpenMenu(false)}>
        <img className="imageLogo" src={logo} alt="Logo" />
      </Link>
      <Link to={"/shopping"} onClick={() => setOpenMenu(false)}>
        <img
          className="imageShoppingCart"
          src={shoppingCart.length === 0 ? emptyCart : fullCart}
          alt="Shopping Cart"
        />
      </Link>
    </div>
  );
}
