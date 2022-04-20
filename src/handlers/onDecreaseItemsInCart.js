export default function onDecreaseItemsInCart(
  idSelected,
  shoppingCart,
  setShoppingCart
) {
  const productIndex = shoppingCart.findIndex(
    (item) => item.identification === idSelected
  );
  let aShoppingCart = JSON.parse(JSON.stringify(shoppingCart));
  aShoppingCart[productIndex].quantity -= 1;
  if (aShoppingCart[productIndex].quantity === 0) {
    aShoppingCart.splice(productIndex, 1);
    setTimeout(() => {
      setShoppingCart(aShoppingCart);
    }, 350);
  } else {
    setShoppingCart(aShoppingCart);
  }
}
