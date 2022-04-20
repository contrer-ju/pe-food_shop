export default function onDeleteItemFromCart(
  idSelected,
  shoppingCart,
  setShoppingCart
) {
  const productIndex = shoppingCart.findIndex(
    (item) => item.identification === idSelected
  );
  let aShoppingCart = JSON.parse(JSON.stringify(shoppingCart));
  aShoppingCart.splice(productIndex, 1);
  setTimeout(() => {
    setShoppingCart(aShoppingCart);
  }, 500);
}
