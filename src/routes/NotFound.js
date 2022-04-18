import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";

export default function NotFound() {
  const { setOpenMenu } = useContext(GeneralContext);

  return (
    <div className="home" onClick={() => setOpenMenu(false)}>
      <p>NOT FOUND</p>
    </div>
  );
}
