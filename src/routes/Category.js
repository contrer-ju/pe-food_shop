import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { PRODUCTS } from "../constants/ProductsList";
import { SPANISH } from "../constants/Spanish";
import { ENGLISH } from "../constants/English";

export default function Category() {
  const { language, setOpenMenu, setQuantity } = useContext(GeneralContext);
  const categorySelected = useLocation().pathname.substring(1);
  const productsFromCategorySelected = PRODUCTS.filter((element) =>
    element.category.includes(categorySelected)
  );
  let numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="home" onClick={() => setOpenMenu(false)}>
      <span className="categortyTitle">
        {language
          ? ENGLISH.menu[categorySelected]
          : SPANISH.menu[categorySelected]}
      </span>
      <div className="productsListContainer">
        {productsFromCategorySelected.map((element, index) => (
          <Link
            key={index}
            className="productContainer"
            to={"/" + categorySelected + "/" + element.identification}
            onClick={() => setQuantity(0)}
          >
            <img className="imageProduct" src={element.image} alt="Product" />
            <span>
              {language ? element.english.name : element.spanish.name}
            </span>
            <span>{numberFormat.format(element.price)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
