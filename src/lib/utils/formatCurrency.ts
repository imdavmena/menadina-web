export const formatCurrency = (value: number, currency = 'USD') => {
  return new Intl.NumberFormat('es-DO', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2
  }).format(value);
};
