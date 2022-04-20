import { PRODUCT_LIMIT } from "../constants/various";

export default function onIncreaseItemsInCart(
  idSelected,
  shoppingCart,
  setShoppingCart
) {
  const productIndex = shoppingCart.findIndex(
    (item) => item.identification === idSelected
  );
  if (shoppingCart[productIndex].quantity < PRODUCT_LIMIT) {
    let aShoppingCart = JSON.parse(JSON.stringify(shoppingCart));
    aShoppingCart[productIndex].quantity += 1;
    setShoppingCart(aShoppingCart);
  }
}
