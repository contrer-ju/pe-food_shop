import { createContext, useState } from "react";
import { PRODUCT_LIMIT } from "../constants/various";
import onAddItemToCart from "../handlers/onAddItemToCart";

export const GeneralContext = createContext({});

const GeneralProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [language, setLanguage] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [showModalAlert, setShowModalAlert] = useState(false);
  const [showModalShop, setShowModalShop] = useState(false);

  const increaseQuantity = () => {
    if (quantity < PRODUCT_LIMIT) setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const addItemToCart = (
    idSelected,
    priceSelected,
    englishName,
    spanishName
  ) => {
    onAddItemToCart(
      idSelected,
      priceSelected,
      englishName,
      spanishName,
      quantity,
      shoppingCart,
      setShoppingCart,
      setQuantity,
      setShowModalShop,
      setShowModalAlert
    );
  };

  return (
    <GeneralContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        language,
        setLanguage,
        quantity,
        setQuantity,
        increaseQuantity,
        decreaseQuantity,
        shoppingCart,
        addItemToCart,
        showModalAlert,
        setShowModalAlert,
        showModalShop,
        setShowModalShop,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
