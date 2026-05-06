const buildWhatsappUrl = (phone, message) => {
  const sanitized = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;
};
const PUBLIC_WHATSAPP_NUMBER = "18001234567";
export {
  PUBLIC_WHATSAPP_NUMBER as P,
  buildWhatsappUrl as b
};
