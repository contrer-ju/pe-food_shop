import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";

export default function Menu() {
  const { setOpenMenu } = useContext(GeneralContext);

  return (
    <div className="home" onClick={() => setOpenMenu(false)}>
      <p>MENU</p>
    </div>
  );
}
