import { c as create_ssr_component, e as each, b as add_attribute, d as escape } from "../../../chunks/ssr.js";
import { c as categories } from "../../../chunks/categories.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-41mix9_START -->${$$result.title = `<title>Categorías | MENADINA</title>`, ""}<meta name="description" content="Conoce las categorías de productos importados por MENADINA y elige lo mejor para vender en redes y WhatsApp."><!-- HEAD_svelte-41mix9_END -->`, ""} <section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mb-10" data-svelte-h="svelte-1o57xv4"><p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Categorías</p> <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Explora nuestras colecciones principales.</h1> <p class="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Cada categoría está pensada para ayudar a tus clientes a decidir rápido y con confianza.</p></div> <div class="grid gap-6 md:grid-cols-3">${each(categories, (category) => {
    return `<article class="group overflow-hidden rounded-[2rem] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"><img${add_attribute("src", category.illustration, 0)}${add_attribute("alt", category.name, 0)} class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"> <div class="space-y-3 p-6"><p class="text-sm uppercase tracking-[0.3em] text-emerald-700">${escape(category.name)}</p> <h2 class="text-xl font-semibold text-slate-950">${escape(category.subtitle)}</h2> <a${add_attribute("href", `/productos?category=${category.id}`, 0)} class="inline-flex text-sm font-semibold text-emerald-600 transition hover:text-emerald-500" data-svelte-h="svelte-1x3m8d2">Ver productos →</a></div> </article>`;
  })}</div></div></section>`;
});
export {
  Page as default
};
