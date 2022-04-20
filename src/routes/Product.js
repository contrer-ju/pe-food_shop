import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { Link, useParams, useLocation } from "react-router-dom";
import { PRODUCTS } from "../constants/ProductsList";
import { SPANISH } from "../constants/Spanish";
import { ENGLISH } from "../constants/English";
import NotFound from "../routes/NotFound";
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
  const categorySelected = useLocation()
    .pathname.substring(1)
    .match(/[^/]*/)[0];
  const productSelected = PRODUCTS.filter((filterByID) =>
    filterByID.identification.includes(identification)
  ).filter((filterByCategory) =>
    filterByCategory.category.includes(categorySelected)
  );
  let numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      {productSelected.length === 0 && <NotFound />}
      {productSelected.length > 0 && (
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
                <span className="fontWeightNormal">
                  {numberFormat.format(productSelected[0].price)}
                </span>
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
                    productSelected[0].image,
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
            className="modal"
            style={showModalShop ? {} : { display: "none" }}
          >
            <img
              className="imageClose"
              src={close}
              alt="close"
              onClick={() => setShowModalShop(false)}
            />
            <div className="contentModal">
              <span className="messageModal">
                {language
                  ? ENGLISH.product.shopMessage
                  : SPANISH.product.shopMessage}
              </span>
              <Link
                className="button modalButtonWidth"
                to={"/"}
                onClick={() => setShowModalShop(false)}
              >
                {language
                  ? ENGLISH.product.keepBuying
                  : SPANISH.product.keepBuying}
              </Link>
              <Link
                className="button modalButtonWidth"
                to={"/shopping"}
                onClick={() => setShowModalShop(false)}
              >
                {language
                  ? ENGLISH.product.goShopping
                  : SPANISH.product.goShopping}
              </Link>
            </div>
          </div>
          <div
            className="modal"
            style={showModalAlert ? {} : { display: "none" }}
          >
            <img
              className="imageClose"
              src={close}
              alt="close"
              onClick={() => setShowModalAlert(false)}
            />
            <div className="contentModal">
              <span className="messageModal">
                {language
                  ? ENGLISH.product.limitMessage
                  : SPANISH.product.limitMessage}
              </span>
              <Link
                className="button modalButtonWidth"
                to={"/"}
                onClick={() => setShowModalAlert(false)}
              >
                {language
                  ? ENGLISH.product.keepBuying
                  : SPANISH.product.keepBuying}
              </Link>
              <Link
                className="button modalButtonWidth"
                to={"/shopping"}
                onClick={() => setShowModalAlert(false)}
              >
                {language
                  ? ENGLISH.product.goShopping
                  : SPANISH.product.goShopping}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
