const CART_KEY = "primeFitnessCart";

export function getCartItems() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

export function addCartItem(item) {
  const items = getCartItems();

  const existingIndex = items.findIndex(
    (cartItem) =>
      cartItem.id === item.id &&
      cartItem.size === item.size &&
      cartItem.color === item.color,
  );

  if (existingIndex >= 0) {
    items[existingIndex].quantity += item.quantity;
  } else {
    items.push(item);
  }

  localStorage.setItem(CART_KEY, JSON.stringify(items));

  return items;
}

export function getCartCount() {
  return getCartItems().reduce(
    (total, item) => total + (item.quantity || 0),
    0,
  );
}
