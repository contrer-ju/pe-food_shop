import { createContext, useState } from "react";
import { PRODUCT_LIMIT } from "../constants/various";
import onAddItemToCart from "../handlers/onAddItemToCart";
import onIncreaseItemsInCart from "../handlers/onIncreaseItemsInCart";
import onDecreaseItemsInCart from "../handlers/onDecreaseItemsInCart";
import onDeleteItemFromCart from "../handlers/onDeleteItemFromCart";
import onCalculateTotalShopping from "../handlers/onCalculateTotalShopping";
import onIncreaseActiveSlide from "../handlers/onIncreaseActiveSlide";
import onDecreaseActiveSlide from "../handlers/onDecreaseActiveSlide";

export const GeneralContext = createContext({});

const GeneralProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [language, setLanguage] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [showModalAlert, setShowModalAlert] = useState(false);
  const [showModalShop, setShowModalShop] = useState(false);
  const [totalShopping, setTotalShopping] = useState(0);
  const [activeSlide, setActiveSlide] = useState(1);
  const [startCarousel, setStartCarousel] = useState(true);

  const increaseQuantity = () => {
    if (quantity < PRODUCT_LIMIT) setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const addItemToCart = (
    idSelected,
    priceSelected,
    imageSelected,
    englishName,
    spanishName
  ) => {
    onAddItemToCart(
      idSelected,
      priceSelected,
      imageSelected,
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
  const increaseItemsInCart = (idSelected) => {
    onIncreaseItemsInCart(idSelected, shoppingCart, setShoppingCart);
  };
  const decreaseItemsInCart = (idSelected) => {
    onDecreaseItemsInCart(idSelected, shoppingCart, setShoppingCart);
  };
  const deleteItemFromCart = (idSelected) => {
    onDeleteItemFromCart(idSelected, shoppingCart, setShoppingCart);
  };
  const calculateTotalShopping = () => {
    onCalculateTotalShopping(shoppingCart, setTotalShopping);
  };
  const increaseActiveSlide = () => {
    onIncreaseActiveSlide(activeSlide, setActiveSlide);
  };
  const decreaseActiveSlide = () => {
    onDecreaseActiveSlide(activeSlide, setActiveSlide);
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
        setShoppingCart,
        addItemToCart,
        showModalAlert,
        setShowModalAlert,
        showModalShop,
        setShowModalShop,
        increaseItemsInCart,
        decreaseItemsInCart,
        deleteItemFromCart,
        totalShopping,
        setTotalShopping,
        calculateTotalShopping,
        activeSlide,
        startCarousel,
        setStartCarousel,
        increaseActiveSlide,
        decreaseActiveSlide,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
