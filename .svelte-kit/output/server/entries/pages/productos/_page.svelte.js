import { c as create_ssr_component, l as createEventDispatcher, b as add_attribute, e as each, d as escape, v as validate_component } from "../../../chunks/ssr.js";
import { P as ProductGrid } from "../../../chunks/ProductGrid.js";
import { c as categories } from "../../../chunks/categories.js";
import { p as products } from "../../../chunks/products.js";
const ProductFilters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { categories: categories2 = [] } = $$props;
  let { activeCategory = "all" } = $$props;
  let { searchQuery = "" } = $$props;
  createEventDispatcher();
  if ($$props.categories === void 0 && $$bindings.categories && categories2 !== void 0) $$bindings.categories(categories2);
  if ($$props.activeCategory === void 0 && $$bindings.activeCategory && activeCategory !== void 0) $$bindings.activeCategory(activeCategory);
  if ($$props.searchQuery === void 0 && $$bindings.searchQuery && searchQuery !== void 0) $$bindings.searchQuery(searchQuery);
  return `<aside class="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft"><div data-svelte-h="svelte-kw838v"><h2 class="text-lg font-semibold text-slate-950">Buscar y filtrar</h2> <p class="mt-2 text-sm text-slate-600">Busca por nombre, categoría o característica para encontrar el producto ideal.</p></div> <div class="space-y-4"><label for="product-search" class="sr-only" data-svelte-h="svelte-qi2yqk">Buscar productos</label> <input id="product-search" type="search"${add_attribute("value", searchQuery, 0)} placeholder="Busca productos, marca o idea" class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/30"></div> <div data-svelte-h="svelte-m9cmlm"><h3 class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">Categorías</h3> <p class="mt-2 text-sm text-slate-600">Filtra el catálogo por la colección deseada.</p></div> <div class="space-y-3"><button type="button"${add_attribute(
    "class",
    `w-full rounded-3xl px-4 py-3 text-left text-sm font-semibold transition ${activeCategory === "all" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`,
    0
  )}>Ver todos</button> ${each(categories2, (category) => {
    return `<button type="button"${add_attribute(
      "class",
      `w-full rounded-3xl px-4 py-3 text-left text-sm font-semibold transition ${activeCategory === category.id ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`,
      0
    )}>${escape(category.name)} </button>`;
  })}</div></aside>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let activeCategory = data.categoryParam ?? "all";
  let searchQuery = "";
  let visibleProducts = products;
  const matchesSearch = (product) => {
    const term = searchQuery.trim().toLowerCase();
    if (!term) return true;
    return product.name.toLowerCase().includes(term) || product.description.toLowerCase().includes(term) || product.category.toLowerCase().includes(term) || product.highlights.some((highlight) => highlight.toLowerCase().includes(term));
  };
  const unsubscribe = page.subscribe(($page) => {
    activeCategory = $page.url.searchParams.get("category") ?? "all";
  });
  onDestroy(() => unsubscribe());
  const currentCategory = activeCategory === "all" ? "Todos los productos" : categories.find((category) => category.id === activeCategory)?.name ?? "Todos los productos";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  visibleProducts = products.filter((product) => {
    const categoryMatch = activeCategory === "all" || product.categoryId === activeCategory;
    return categoryMatch && matchesSearch(product);
  });
  return `${$$result.head += `<!-- HEAD_svelte-bpk24a_START -->${$$result.title = `<title>Productos | MENADINA</title>`, ""}<meta name="description" content="Explora el catálogo de MENADINA: productos importados desde China con procesos amigables para redes sociales y WhatsApp."><!-- HEAD_svelte-bpk24a_END -->`, ""} <section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mb-10" data-svelte-h="svelte-1fxm2vf"><p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Catálogo</p> <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Productos listos para tu tienda.</h1> <p class="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Filtra por categoría, busca por nombre y encuentra los productos más atractivos para tus clientes en RD.</p></div> <div class="grid gap-10 lg:grid-cols-[320px_1fr]">${validate_component(ProductFilters, "ProductFilters").$$render($$result, { categories, activeCategory, searchQuery }, {}, {})} <div class="space-y-8"><div class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft"><div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p class="text-sm uppercase tracking-[0.3em] text-emerald-700" data-svelte-h="svelte-18k747e">Resultados</p> <h2 class="mt-3 text-2xl font-semibold text-slate-950">Mostrando ${escape(visibleProducts.length)} productos</h2> <p class="mt-2 text-sm text-slate-600">Categoría: ${escape(currentCategory)}. Usa el buscador para encontrar por nombre, categoría o característica.</p></div> ${``}</div></div> ${visibleProducts.length > 0 ? `${validate_component(ProductGrid, "ProductGrid").$$render($$result, { products: visibleProducts }, {}, {})}` : `<div class="rounded-[2rem] border border-slate-200 bg-white p-12 text-center" data-svelte-h="svelte-jsn9te"><p class="text-xl font-semibold text-slate-950">No encontramos productos</p> <p class="mt-2 text-sm text-slate-600">Intenta con otra categoría o cambia tu búsqueda.</p></div>`}</div></div></div></section>`;
});
export {
  Page as default
};
