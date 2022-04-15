import { Link } from "react-router-dom";
import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import instagram from "../images/icons8-instagram-48.png";
import whatsapp from "../images/icons8-whatsapp-48.png";
import USFlag from "../images/icons8-usa-48.png";
import SpainFlag from "../images/icons8-spain-48.png";
import { spanish } from "../constants/spanish";
import { english } from "../constants/english";

export default function SideBar() {
  const { openMenu, language, setLanguage } = useContext(GeneralContext);

  return (
    <div className={openMenu ? "sideBar slideIn" : "sideBar slideOut "}>
      <div className="sideBarTopMenu">
        <Link className="sidebarText" to={"menu"}>
          {language ? english.menu.menu : spanish.menu.menu}
        </Link>
        <Link className="sidebarText" to={"desserts"}>
          {language ? english.menu.desserts : spanish.menu.desserts}
        </Link>
        <Link className="sidebarText" to={"salads"}>
          {language ? english.menu.salads : spanish.menu.salads}
        </Link>
        <Link className="sidebarText" to={"sandwichs"}>
          {language ? english.menu.sandwichs : spanish.menu.sandwichs}
        </Link>
        <Link className="sidebarText" to={"burgers"}>
          {language ? english.menu.burgers : spanish.menu.burgers}
        </Link>
        <Link className="sidebarText" to={"breakfasts"}>
          {language ? english.menu.breakfasts : spanish.menu.breakfasts}
        </Link>
        <Link className="sidebarText" to={"juices"}>
          {language ? english.menu.juices : spanish.menu.juices}
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
