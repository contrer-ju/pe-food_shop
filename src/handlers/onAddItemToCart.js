import { PRODUCT_LIMIT } from "../constants/various";

export default function onAddItemToCart(
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
) {
  if (quantity > 0) {
    let aShoppingCart = JSON.parse(JSON.stringify(shoppingCart));
    const productIndex = aShoppingCart.findIndex(
      (product) => product.identification === idSelected
    );
    if (productIndex === -1) {
      aShoppingCart.push({
        identification: idSelected,
        price: priceSelected,
        image: imageSelected,
        quantity: quantity,
        english: {
          name: englishName,
        },
        spanish: {
          name: spanishName,
        },
      });
      setShoppingCart(aShoppingCart);
      setQuantity(0);
      setShowModalShop(true);
    } else {
      if (aShoppingCart[productIndex].quantity + quantity < PRODUCT_LIMIT + 1) {
        aShoppingCart[productIndex].quantity += quantity;
        setShoppingCart(aShoppingCart);
        setQuantity(0);
        setShowModalShop(true);
      } else {
        setQuantity(0);
        setShowModalAlert(true);
      }
    }
  }
}
