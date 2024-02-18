export const highestPrice = (products) => {
  const newProductList = [...products].sort((a, b) => a.price - b.price);
  return newProductList;
};

export const lowestPrice = (products) => {
  const newProductList = [...products].sort((a, b) => b.price - a.price);
  return newProductList;
};
