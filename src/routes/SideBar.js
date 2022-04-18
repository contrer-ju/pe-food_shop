import { Link } from "react-router-dom";
import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import instagram from "../images/icons8-instagram-48.png";
import whatsapp from "../images/icons8-whatsapp-48.png";
import USFlag from "../images/icons8-usa-48.png";
import SpainFlag from "../images/icons8-spain-48.png";
import { SPANISH } from "../constants/Spanish";
import { ENGLISH } from "../constants/English";

export default function SideBar() {
  const { openMenu, setOpenMenu, language, setLanguage } =
    useContext(GeneralContext);

  return (
    <div
      className={openMenu ? "sideBar slideIn" : "sideBar slideOut "}
      onClick={() => setOpenMenu(false)}
    >
      <div className="sideBarTopMenu">
        <Link className="sidebarText" to={"menu"}>
          {language ? ENGLISH.menu.menu : SPANISH.menu.menu}
        </Link>
        <Link className="sidebarText" to={"desserts"}>
          {language ? ENGLISH.menu.desserts : SPANISH.menu.desserts}
        </Link>
        <Link className="sidebarText" to={"salads"}>
          {language ? ENGLISH.menu.salads : SPANISH.menu.salads}
        </Link>
        <Link className="sidebarText" to={"sandwichs"}>
          {language ? ENGLISH.menu.sandwichs : SPANISH.menu.sandwichs}
        </Link>
        <Link className="sidebarText" to={"burgers"}>
          {language ? ENGLISH.menu.burgers : SPANISH.menu.burgers}
        </Link>
        <Link className="sidebarText" to={"breakfasts"}>
          {language ? ENGLISH.menu.breakfasts : SPANISH.menu.breakfasts}
        </Link>
        <Link className="sidebarText" to={"juices"}>
          {language ? ENGLISH.menu.juices : SPANISH.menu.juices}
        </Link>
      </div>
      <div className="sideBarBottomMenu">
        <div className="sideBarIconsFlex">
          <img className="cursorPointer" src={whatsapp} alt="Whatsapp" />
          <img className="cursorPointer" src={instagram} alt="Instagram" />
        </div>
        <div className="sideBarIconsFlex">
          <img
            className={
              language ? "cursorPointer" : "cursorPointer sideBarIconsBorder"
            }
            onClick={() => setLanguage(false)}
            src={SpainFlag}
            alt="Spain Flag"
          />
          <img
            className={
              language ? "cursorPointer sideBarIconsBorder" : "cursorPointer"
            }
            onClick={() => setLanguage(true)}
            src={USFlag}
            alt="US Flag"
          />
        </div>
      </div>
    </div>
  );
}
