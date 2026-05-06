import { e as error } from "../../../../chunks/index.js";
import { p as products } from "../../../../chunks/products.js";
const load = ({ params }) => {
  const product = products.find((item) => item.id === params.id);
  if (!product) {
    throw error(404, "Producto no encontrado");
  }
  return { product };
};
export {
  load
};
