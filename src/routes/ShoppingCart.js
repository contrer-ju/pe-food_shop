import { useContext, useEffect } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { SPANISH } from "../constants/Spanish";
import { ENGLISH } from "../constants/English";
import trashAll from "../images/icons8-trash-can-64.png";
import trashItem from "../images/icons8-trash-50.png";
import minus from "../images/icons8-reduce-64.png";
import plus from "../images/icons8-add-new-64.png";

export default function ShoppingCart() {
  const {
    language,
    setOpenMenu,
    shoppingCart,
    setShoppingCart,
    increaseItemsInCart,
    decreaseItemsInCart,
    deleteItemFromCart,
    totalShopping,
    setTotalShopping,
    calculateTotalShopping,
  } = useContext(GeneralContext);

  let numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    if (shoppingCart.length > 0) calculateTotalShopping();
    if (shoppingCart.length === 0) setTotalShopping(0);
  });

  return (
    <div className="home" onClick={() => setOpenMenu(false)}>
      <div className="shoppingTitleContainer">
        <span className="categortyTitle">
          {language ? ENGLISH.shopping.title : SPANISH.shopping.title}
        </span>
        <img
          className="imageTrash"
          src={trashAll}
          alt="Trash"
          onClick={() => setShoppingCart([])}
        />
      </div>
      <div className="orderSummaryContainer">
        <span className="subTitleOrderSummary">
          {language ? ENGLISH.shopping.order : SPANISH.shopping.order}
        </span>
        <div className="itemsOrderSummaryContainer">
          <span>
            {language ? ENGLISH.shopping.shipping : SPANISH.shopping.shipping}
          </span>
          <span>FREE</span>
        </div>
        <div className="itemsOrderSummaryContainer">
          <span>
            {language ? ENGLISH.shopping.taxes : SPANISH.shopping.taxes}
          </span>
          <span>$0.00</span>
        </div>
        <div className="itemsOrderSummaryContainer">
          <span className="fontWeightBold">
            {language ? ENGLISH.shopping.total : SPANISH.shopping.total}
          </span>
          <span className="fontWeightBold">
            {numberFormat.format(totalShopping)}
          </span>
        </div>
      </div>
      <div className="shoppingListContainer">
        {shoppingCart.map((element, index) => (
          <div key={index} className="itemShoppingContainer">
            <div className="itemDetailsOnCart">
              <img
                className="imageItemOnCart"
                src={element.image}
                alt={language ? element.english.name : element.spanish.name}
              />
              <div>
                <span>
                  {language ? element.english.name : element.spanish.name}
                </span>
                <div className="itemDetailsOnCart">
                  <img
                    className="imageArithmetic"
                    src={minus}
                    alt="minus"
                    onClick={() => decreaseItemsInCart(element.identification)}
                  />
                  <span className="fontWeightNormal textQtyInCart">
                    {element.quantity}
                  </span>
                  <img
                    className="imageArithmetic"
                    src={plus}
                    alt="minus"
                    onClick={() => increaseItemsInCart(element.identification)}
                  />
                </div>
              </div>
            </div>
            <div className="itemDetailsOnCart">
              <span>
                {numberFormat.format(element.quantity * element.price)}
              </span>
              <img
                className="imageTrash2"
                src={trashItem}
                alt="Trash"
                onClick={() => deleteItemFromCart(element.identification)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="checkoutContainer">
        <span className="button shopButtonWidth">
          {language ? ENGLISH.shopping.checkout : SPANISH.shopping.checkout}
        </span>
      </div>
    </div>
  );
}
