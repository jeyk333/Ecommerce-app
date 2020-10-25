export const getProductsCount = (value) => {
  if (value === 0) {
    return "No items in the cart";
  } else if (value === 1) {
    return "1 Item";
  } else {
    return `${value} Items`;
  }
};

export const getTotalCost = (value) => {
  let total =
    value &&
    value.reduce(
      (total, value) => total + Number(value.price) * value.quantity,
      0
    );
  return total;
};
