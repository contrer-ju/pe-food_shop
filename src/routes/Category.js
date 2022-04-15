import { useLocation } from "react-router-dom";
import { products } from "../constants/products";

export default function Category() {
  const categorySelected = useLocation().pathname.substring(1);
  let productsFromCategorySelected = products.filter((element) =>
    element.category.includes(categorySelected)
  );
  return (
    <div className="home">
      {productsFromCategorySelected.map((element, index) => (
        <p key={index}>{element.name}</p>
      ))}
    </div>
  );
}
