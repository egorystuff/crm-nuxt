export function converCurrency(price: string | number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "USD",
  }).format(+price);
}
