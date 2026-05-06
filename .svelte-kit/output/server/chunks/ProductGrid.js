import { c as create_ssr_component, b as add_attribute, d as escape, e as each, v as validate_component } from "./ssr.js";
import { f as formatCurrency } from "./formatCurrency.js";
import { b as buildWhatsappUrl, P as PUBLIC_WHATSAPP_NUMBER } from "./public.js";
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  const whatsappUrl = buildWhatsappUrl(PUBLIC_WHATSAPP_NUMBER, `Hola MENADINA, quiero información sobre el producto ${product.name}.`);
  if ($$props.product === void 0 && $$bindings.product && product !== void 0) $$bindings.product(product);
  return `<article class="glass-card overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"><div class="relative overflow-hidden bg-slate-100"><img${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)} class="h-64 w-full object-cover transition duration-500 hover:scale-105"> ${product.badge ? `<span class="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">${escape(product.badge)}</span>` : ``}</div> <div class="space-y-4 p-6"><div><p class="text-sm uppercase tracking-[0.24em] text-emerald-700">${escape(product.category)}</p> <h3 class="mt-2 text-xl font-semibold text-slate-950">${escape(product.name)}</h3> <p class="mt-3 text-sm leading-6 text-slate-600">${escape(product.description)}</p></div> <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div class="space-y-1"><p class="text-2xl font-semibold text-slate-950">${escape(formatCurrency(product.price))}</p> ${product.originalPrice ? `<p class="text-sm text-slate-500 line-through">${escape(formatCurrency(product.originalPrice))}</p>` : ``}</div> <div class="flex flex-col gap-3 sm:flex-row sm:items-center"><a${add_attribute("href", `/productos/${product.id}`, 0)} class="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-emerald-600 hover:text-emerald-600">Ver detalle</a> <a${add_attribute("href", whatsappUrl, 0)} target="_blank" rel="noreferrer" class="inline-flex rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500">WhatsApp</a></div></div></div></article>`;
});
const ProductGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products = [] } = $$props;
  let { limit = null } = $$props;
  const visibleProducts = limit ? products.slice(0, limit) : products;
  if ($$props.products === void 0 && $$bindings.products && products !== void 0) $$bindings.products(products);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0) $$bindings.limit(limit);
  return `<div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">${each(visibleProducts, (product) => {
    return `${validate_component(ProductCard, "ProductCard").$$render($$result, { product }, {}, {})}`;
  })}</div>`;
});
export {
  ProductGrid as P
};
