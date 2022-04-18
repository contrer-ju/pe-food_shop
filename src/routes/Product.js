import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../constants/ProductsList";
import { SPANISH } from "../constants/Spanish";
import { ENGLISH } from "../constants/English";
import minus from "../images/icons8-reduce-64.png";
import plus from "../images/icons8-add-new-64.png";
import close from "../images/icons8-close-67.png";

export default function Product() {
  const {
    language,
    setOpenMenu,
    quantity,
    increaseQuantity,
    decreaseQuantity,
    addItemToCart,
    showModalAlert,
    setShowModalAlert,
    showModalShop,
    setShowModalShop,
  } = useContext(GeneralContext);
  let { identification } = useParams();
  const productSelected = PRODUCTS.filter((element) =>
    element.identification.includes(identification)
  );

  return (
    <div className="home" onClick={() => setOpenMenu(false)}>
      <div className="productDetailedContainer">
        <img
          className="imageProductDetailed"
          src={productSelected[0].image}
          alt={
            language
              ? productSelected[0].english.name
              : productSelected[0].spanish.name
          }
        />
        <div className="productDescriptionContainer">
          <span className="categoryProductTitle">
            {language
              ? ENGLISH.menu[productSelected[0].category]
              : SPANISH.menu[productSelected[0].category]}
          </span>
          <span className="nameProductTitle">
            {language
              ? productSelected[0].english.name
              : productSelected[0].spanish.name}
          </span>
          <span className="nameProductTitle">
            {language ? ENGLISH.product.price : SPANISH.product.price}
            {": "}
            <span className="fontWeightNormal">{productSelected[0].price}</span>
          </span>
          <span className="fontWeightBold imageArithmeticContainer">
            {language ? ENGLISH.product.quantity : SPANISH.product.quantity}
            {": "}
            <img
              className="imageArithmetic"
              src={minus}
              alt="minus"
              onClick={() => decreaseQuantity()}
            />
            <span className="fontWeightNormal">{quantity}</span>
            <img
              className="imageArithmetic"
              src={plus}
              alt="minus"
              onClick={() => increaseQuantity()}
            />
          </span>
          <span className="fontWeightBold">
            {language
              ? ENGLISH.product.description
              : SPANISH.product.description}
            {": "}
            <span className="fontWeightNormal">
              {language
                ? productSelected[0].english.description
                : productSelected[0].spanish.description}
            </span>
          </span>
          <span
            className="button shopButtonWidth"
            onClick={() =>
              addItemToCart(
                productSelected[0].identification,
                productSelected[0].price,
                productSelected[0].english.name,
                productSelected[0].spanish.name
              )
            }
          >
            {language ? ENGLISH.product.buton : SPANISH.product.buton}
          </span>
        </div>
      </div>
      <div
        className="modalShop"
        style={showModalShop ? {} : { display: "none" }}
      >
        <img
          className="imageClose"
          src={close}
          alt="close"
          onClick={() => setShowModalShop(false)}
        />
        <div className="contentModalShop">
          <span className="messageModal">
            {language
              ? ENGLISH.product.shopMessage
              : SPANISH.product.shopMessage}
          </span>
          <span className="button modalButtonWidth">
            {language ? ENGLISH.product.keepBuying : SPANISH.product.keepBuying}
          </span>
          <span className="button modalButtonWidth">
            {language ? ENGLISH.product.goShopping : SPANISH.product.goShopping}
          </span>
        </div>
      </div>
      <div
        className="modalAlert"
        style={showModalAlert ? {} : { display: "none" }}
      >
        <span className="messageModal">
          {language
            ? ENGLISH.product.limitMessage
            : SPANISH.product.limitMessage}
        </span>
        <span className="button" onClick={() => setShowModalAlert(false)}>
          {language ? ENGLISH.common.accept : SPANISH.common.accept}
        </span>
      </div>
    </div>
  );
}
