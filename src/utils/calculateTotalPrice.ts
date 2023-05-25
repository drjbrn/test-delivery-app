export function calculateTotalPrice(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.totalPrice, 0);
}