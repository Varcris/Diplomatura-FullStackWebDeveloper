export const getTotalCartPrice = (cart) => {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return totalPrice.fixed(2);
};
