import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";

export default function Home() {
  const { setOpenMenu } = useContext(GeneralContext);

  return (
    <div className="home" onClick={() => setOpenMenu(false)}>
      <p>HOME</p>
    </div>
  );
}
