export const highestPrice = (products) => {
  const newProductList = [...products].sort((a, b) => a.price - b.price);
  return newProductList;
};

export const lowestPrice = (products) => {
  const newProductList = [...products].sort((a, b) => b.price - a.price);
  return newProductList;
};

export const totalPrice = (cart) => {
  const total = cart.reduce(
    (finalCost, item) => finalCost + item.price * item.count,
    0
  );
  return total;
};

export const priceFormat = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
