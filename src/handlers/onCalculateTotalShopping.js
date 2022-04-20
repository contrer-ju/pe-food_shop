export default function onCalculateTotalShopping(
  shoppingCart,
  setTotalShopping
) {
  let aTotalShopping = 0;
  for (let i = 0; i < shoppingCart.length; i++)
    aTotalShopping += shoppingCart[i].price * shoppingCart[i].quantity;
  setTotalShopping(aTotalShopping);
}
