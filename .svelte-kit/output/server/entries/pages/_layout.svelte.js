import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/ssr.js";
import { c as categories } from "../../chunks/categories.js";
import { b as buildWhatsappUrl, P as PUBLIC_WHATSAPP_NUMBER } from "../../chunks/public.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let nav = null;
  const links = [
    { href: "/", label: "Inicio" },
    {
      href: "/productos",
      label: "Productos",
      hasDropdown: true
    },
    { href: "/categorias", label: "Categorías" },
    { href: "/contacto", label: "Contacto" }
  ];
  const categoryLinks = categories.map((category) => ({
    href: `/productos?category=${category.id}`,
    label: category.name
  }));
  return `<nav class="border-t border-slate-200/70 bg-white"><div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"><div class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">${each(links, (link) => {
    return `${link.hasDropdown ? `<div class="group relative"><a${add_attribute("href", link.href, 0)} class="transition hover:text-emerald-600">${escape(link.label)}</a> <div class="pointer-events-none absolute left-0 top-full z-20 hidden w-56 rounded-3xl border border-slate-200 bg-white p-4 shadow-lg transition group-hover:pointer-events-auto group-hover:block">${each(categoryLinks, (category) => {
      return `<a${add_attribute("href", category.href, 0)} class="block rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">${escape(category.label)}</a>`;
    })}</div> </div>` : `<a${add_attribute("href", link.href, 0)} class="transition hover:text-emerald-600">${escape(link.label)}</a>`}`;
  })}</div> <button type="button" class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 md:hidden"${add_attribute("aria-expanded", open, 0)} aria-controls="mobile-menu"><span data-svelte-h="svelte-192vww4">Menú</span> <span aria-hidden="true">${escape("☰")}</span></button></div> <div id="mobile-menu"${add_attribute("class", `md:hidden ${"hidden"} border-t border-slate-200 bg-white/95 px-4 pb-4 shadow-sm`, 0)}${add_attribute("this", nav, 0)}><div class="space-y-3 py-3">${each(links, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="block rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100">${escape(link.label)}</a>`;
  })}</div> <div class="border-t border-slate-200 pt-4"><p class="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500" data-svelte-h="svelte-r7ao8w">Categorías</p> <div class="space-y-2">${each(categoryLinks, (category) => {
    return `<a${add_attribute("href", category.href, 0)} class="block rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100">${escape(category.label)}</a>`;
  })}</div></div></div></nav>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="sticky top-0 z-40 border-b border-slate-200/80 bg-white backdrop-blur-md"><div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8" data-svelte-h="svelte-1gutnhp"><a href="/" class="flex items-center gap-3"><div class="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-600 text-xl font-bold text-white">M</div> <div><p class="text-xs uppercase tracking-[0.3em] text-slate-500">MENADINA</p> <p class="text-base font-semibold text-slate-950">Importadora RD</p></div></a> <div class="hidden flex-1 items-center justify-end gap-6 text-sm text-slate-600 md:flex"><span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">Importación desde China</span> <span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">Stock seguro en RD</span></div></div> ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="border-t border-slate-200 bg-slate-950 text-slate-200"><div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-3" data-svelte-h="svelte-1dh7uum"><div class="space-y-4"><div class="flex items-center gap-3"><div class="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500 text-lg font-bold text-slate-950">M</div> <div><p class="text-sm uppercase tracking-[0.3em] text-emerald-300">MENADINA</p> <p class="text-xl font-semibold text-white">Importadora RD</p></div></div> <p class="max-w-sm text-sm text-slate-400">Tu importadora familiar de productos de alta rotación desde China, con entrega y atención rápida en República Dominicana.</p></div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-1"><div><h3 class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Secciones</h3> <ul class="space-y-3 text-sm text-slate-300"><li><a href="/" class="transition hover:text-white">Inicio</a></li> <li><a href="/productos" class="transition hover:text-white">Productos</a></li> <li><a href="/categorias" class="transition hover:text-white">Categorías</a></li> <li><a href="/contacto" class="transition hover:text-white">Contacto</a></li></ul></div> <div><h3 class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Contacto</h3> <p class="text-sm text-slate-300">Santo Domingo, RD</p> <p class="mt-2 text-sm text-slate-300">WhatsApp disponible 7 días</p> <p class="mt-2 text-sm text-slate-300">ventas@menadina.do</p></div></div></div> <div class="border-t border-slate-800 bg-slate-900 px-4 py-6 text-center text-sm text-slate-500 sm:px-6 lg:px-8">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} MENADINA. Todos los derechos reservados.</div></footer>`;
});
const CTAWhatsApp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const whatsappUrl = buildWhatsappUrl(PUBLIC_WHATSAPP_NUMBER, "Hola MENADINA, quiero hablar sobre un pedido.");
  return `<a${add_attribute("href", whatsappUrl, 0)} target="_blank" rel="noreferrer" aria-label="Abrir chat de WhatsApp" class="fixed right-4 bottom-4 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-300"><span class="text-xl" data-svelte-h="svelte-rikxs6">💬</span>
  WhatsApp</a>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen bg-slate-50 text-slate-900">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="relative">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} ${validate_component(CTAWhatsApp, "CTAWhatsApp").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
