export const buildWhatsappUrl = (phone: string, message: string) => {
  const sanitized = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;
};
