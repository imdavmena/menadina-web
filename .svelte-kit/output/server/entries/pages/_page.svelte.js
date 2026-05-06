import { c as create_ssr_component, h as compute_rest_props, i as spread, j as escape_attribute_value, k as escape_object, v as validate_component, e as each, b as add_attribute, d as escape } from "../../chunks/ssr.js";
import { b as buildWhatsappUrl, P as PUBLIC_WHATSAPP_NUMBER } from "../../chunks/public.js";
import { c as categories } from "../../chunks/categories.js";
import { p as products } from "../../chunks/products.js";
import { P as ProductGrid } from "../../chunks/ProductGrid.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["variant", "size", "type", "href", "disabled"]);
  let { variant = "primary" } = $$props;
  let { size = "md" } = $$props;
  let { type = "button" } = $$props;
  let { href = null } = $$props;
  let { disabled = false } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(`inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${size === "sm" ? "px-4 py-2 text-sm" : "px-5 py-3 text-base"} ${variant === "primary" ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500" : "bg-slate-950 text-white hover:bg-slate-800"}`)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread(
    [
      { type: escape_attribute_value(type) },
      { disabled: disabled || null },
      escape_object($$restProps),
      {
        class: escape_attribute_value(`inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${size === "sm" ? "px-4 py-2 text-sm" : "px-5 py-3 text-base"} ${variant === "primary" ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500" : "bg-slate-950 text-white hover:bg-slate-800"} ${disabled ? "cursor-not-allowed opacity-60" : ""}`)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>`}`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const whatsappUrl = buildWhatsappUrl(PUBLIC_WHATSAPP_NUMBER, "Hola MENADINA, quiero información sobre su catálogo de productos.");
  return `<section class="relative overflow-hidden bg-white pt-10 pb-16"><div class="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between"><div class="max-w-2xl space-y-6"><span class="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700" data-svelte-h="svelte-1yl41p9">IMPORTACIÓN DIRECTA</span> <h1 class="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl" data-svelte-h="svelte-135hrwq">MENADINA trae productos premium de China a República Dominicana.</h1> <p class="max-w-2xl text-lg leading-8 text-slate-600" data-svelte-h="svelte-ss5nav">Catálogo pensado para redes y comercio electrónico con atención rápida, stock en RD y seguimiento personalizado por WhatsApp.</p> <div class="flex flex-col gap-3 sm:flex-row">${validate_component(Button, "Button").$$render($$result, { href: "/productos" }, {}, {
    default: () => {
      return `Explorar catálogo`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { variant: "secondary", href: whatsappUrl }, {}, {
    default: () => {
      return `Hablar por WhatsApp`;
    }
  })}</div> <div class="grid gap-4 sm:grid-cols-2" data-svelte-h="svelte-qxy8e0"><div class="rounded-3xl bg-slate-950/95 p-5 text-white shadow-soft"><p class="text-sm uppercase tracking-[0.28em] text-emerald-300">Confianza</p> <p class="mt-2 text-lg font-semibold">Gestión profesional desde la orden hasta la entrega.</p></div> <div class="rounded-3xl bg-slate-100 p-5 text-slate-900 shadow-soft"><p class="text-sm uppercase tracking-[0.28em] text-emerald-700">Listo para redes</p> <p class="mt-2 text-lg font-semibold">Catálogo preparado para Instagram, Facebook y Shopify.</p></div></div></div> <div class="relative max-w-xl self-center overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-soft sm:p-10" data-svelte-h="svelte-pkcvc3"><div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.35),_transparent_45%)]"></div> <div class="relative space-y-6"><div class="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"><p class="text-sm uppercase tracking-[0.3em] text-emerald-200">Producto destacado</p> <h2 class="mt-3 text-2xl font-semibold">Kit de oficina compacto</h2> <p class="mt-4 text-sm leading-6 text-slate-200">Diseñado para clientes que buscan estilo, funcionalidad y envío rápido en Santo Domingo.</p> <div class="mt-6 flex items-center gap-4 text-xl font-semibold text-white"><span>$24.90</span> <span class="rounded-full bg-emerald-500 px-3 py-1 text-sm uppercase text-slate-950">Stock RD</span></div></div> <div class="grid grid-cols-2 gap-4"><div class="rounded-3xl bg-slate-900/80 p-4 text-slate-200"><p class="text-sm uppercase tracking-[0.3em] text-emerald-300">Fast ship</p> <p class="mt-3 text-base">Logística lista para e-commerce.</p></div> <div class="rounded-3xl bg-slate-900/80 p-4 text-slate-200"><p class="text-sm uppercase tracking-[0.3em] text-emerald-300">Catálogo</p> <p class="mt-3 text-base">Segmentado por categoría y estilo.</p></div></div></div></div></div></section>`;
});
const FeaturedCategories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mb-10 max-w-2xl" data-svelte-h="svelte-1ajhuqu"><p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Categorías clave</p> <h2 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Explora los productos que impulsa tu negocio.</h2></div> <div class="grid gap-6 md:grid-cols-3">${each(categories, (category) => {
    return `<article class="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"><img${add_attribute("src", category.illustration, 0)}${add_attribute("alt", category.name, 0)} class="h-56 w-full object-cover transition duration-500 group-hover:scale-105"> <div class="space-y-3 p-6"><span class="text-sm uppercase tracking-[0.25em] text-emerald-700">${escape(category.name)}</span> <p class="text-lg font-semibold text-slate-950">${escape(category.subtitle)}</p> <a href="/categorias" class="inline-flex text-sm font-semibold text-emerald-600 transition hover:text-emerald-500" data-svelte-h="svelte-1fh1swk">Ver colección →</a></div> </article>`;
  })}</div></div></section>`;
});
const FeaturedProducts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" data-svelte-h="svelte-bj3qd8"><div><p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Productos destacados</p> <h2 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Un catálogo profesional para tu tienda social.</h2></div> <a href="/productos" class="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Ver todos</a></div> ${validate_component(ProductGrid, "ProductGrid").$$render($$result, { products, limit: 4 }, {}, {})}</div></section>`;
});
const TrustSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-slate-950 py-16 text-white" data-svelte-h="svelte-1loisyp"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mb-10 max-w-2xl"><p class="text-sm uppercase tracking-[0.3em] text-emerald-300">Por qué elegir MENADINA</p> <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Un servicio e-commerce diseñado para importar y vender rápido en RD.</h2></div> <div class="grid gap-6 md:grid-cols-3"><article class="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-sm"><p class="text-sm uppercase tracking-[0.3em] text-emerald-300">Entrega local</p> <h3 class="mt-4 text-xl font-semibold text-white">Stock listo en Santo Domingo</h3> <p class="mt-3 text-sm leading-6 text-slate-300">Productos importados con inventario verificado para despacho local rápido y seguro.</p></article> <article class="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-sm"><p class="text-sm uppercase tracking-[0.3em] text-emerald-300">Atención directa</p> <h3 class="mt-4 text-xl font-semibold text-white">WhatsApp como canal principal</h3> <p class="mt-3 text-sm leading-6 text-slate-300">Comunicación clara y rápida para consultas de producto, reservas y detalles de envío.</p></article> <article class="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-sm"><p class="text-sm uppercase tracking-[0.3em] text-emerald-300">Catálogo preparado</p> <h3 class="mt-4 text-xl font-semibold text-white">Escalable a Shopify y redes</h3> <p class="mt-3 text-sm leading-6 text-slate-300">Estructura pensada para crecer con inventario, filtros y canales sociales.</p></article></div></div></section>`;
});
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-white py-16" data-svelte-h="svelte-h11jh5"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mb-10 max-w-2xl"><p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Testimonios</p> <h2 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Clientes que confían en nuestras importaciones.</h2></div> <div class="grid gap-6 md:grid-cols-3"><article class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft"><p class="text-lg font-semibold text-slate-950">Entrega muy rápida y productos impecables.</p> <p class="mt-4 text-sm leading-7 text-slate-600">“El stock llegó a tiempo y el equipo me ayudó a armar el catálogo para Instagram de forma clara.”</p> <p class="mt-6 text-sm font-semibold text-slate-900">— Ana, emprendedora en Santo Domingo</p></article> <article class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft"><p class="text-lg font-semibold text-slate-950">Atención rápida por WhatsApp.</p> <p class="mt-4 text-sm leading-7 text-slate-600">“Respondieron todas mis dudas y reservaron mi pedido con una muestra clara de costos.”</p> <p class="mt-6 text-sm font-semibold text-slate-900">— Luis, vendedor en redes</p></article> <article class="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft"><p class="text-lg font-semibold text-slate-950">Productos atractivos para clientes de RD.</p> <p class="mt-4 text-sm leading-7 text-slate-600">“Las imágenes y descripciones se ven profesionales, justo lo que necesitaba para mi tienda.”</p> <p class="mt-6 text-sm font-semibold text-slate-900">— Carmen, ecommerce manager</p></article></div></div></section>`;
});
const FAQSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-slate-50 py-16" data-svelte-h="svelte-3o3h9e"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mb-10 max-w-2xl"><p class="text-sm uppercase tracking-[0.3em] text-emerald-700">FAQ</p> <h2 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Respuestas rápidas para tu negocio.</h2></div> <div class="grid gap-6 lg:grid-cols-3"><div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"><h3 class="text-xl font-semibold text-slate-950">¿Cómo funciona la importación?</h3> <p class="mt-4 text-sm leading-7 text-slate-600">Seleccionas el producto, validamos stock en China y administramos la logística hasta RD.</p></div> <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"><h3 class="text-xl font-semibold text-slate-950">¿Puedo vender en Instagram y WhatsApp?</h3> <p class="mt-4 text-sm leading-7 text-slate-600">Sí, el catálogo está pensado para uso en redes sociales y enlaces directos por WhatsApp.</p></div> <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"><h3 class="text-xl font-semibold text-slate-950">¿Qué gastos adicionales hay?</h3> <p class="mt-4 text-sm leading-7 text-slate-600">Te entregamos detalles de precio, envío y cualquier impuesto de importación aplicable.</p></div></div></div></section>`;
});
const CTASection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8"><div class="mx-auto max-w-7xl rounded-[2rem] bg-slate-950/10 p-8 shadow-soft backdrop-blur-md sm:p-12"><div class="grid gap-8 lg:grid-cols-2 lg:items-center"><div class="space-y-4" data-svelte-h="svelte-1mxbu98"><p class="text-sm uppercase tracking-[0.3em] text-emerald-200">Prepárate para vender</p> <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Lleva tu catálogo a redes y WhatsApp con una imagen profesional.</h2> <p class="max-w-xl text-sm leading-7 text-slate-200">Te ayudamos a convertir productos importados en ofertas claras, listas para clientes que compran por Instagram y Facebook.</p></div> <div class="space-y-4 rounded-[1.75rem] bg-white/10 p-6 text-slate-100 shadow-soft"><p class="text-sm uppercase tracking-[0.3em] text-emerald-200" data-svelte-h="svelte-1yaexk8">Recibe novedades</p> <form class="space-y-4"><label class="block text-sm font-semibold" for="email" data-svelte-h="svelte-1xl915l">Email</label> <input id="email" type="email" placeholder="Tu correo" class="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-200/40"> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
    default: () => {
      return `Quiero más información`;
    }
  })}</form></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-p4rq3m_START -->${$$result.title = `<title>MENADINA | Importadora familiar de productos desde China</title>`, ""}<meta name="description" content="MENADINA importa productos de alta rotación desde China para vender en República Dominicana con catálogo profesional, WhatsApp y redes sociales."><meta property="og:title" content="MENADINA | Importadora familiar de productos desde China"><meta property="og:description" content="Catálogo profesional para Instagram, Facebook y Shopify. Atención rápida por WhatsApp y stock en RD."><meta property="og:type" content="website"><meta property="og:url" content="https://menadina.do"><meta property="og:image" content="https://menadina.do/og-image.png"><script type="application/ld+json" data-svelte-h="svelte-2lnohc">{JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MENADINA',
      url: 'https://menadina.do',
      logo: 'https://menadina.do/logo.png',
      sameAs: ['https://www.instagram.com/menadina', 'https://www.facebook.com/menadina'],
      contactPoint: [{
        '@type': 'ContactPoint',
        telephone: '+18001234567',
        contactType: 'customer support',
        areaServed: 'DO'
      }]
    })}<\/script><!-- HEAD_svelte-p4rq3m_END -->`, ""} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(FeaturedCategories, "FeaturedCategories").$$render($$result, {}, {}, {})} ${validate_component(FeaturedProducts, "FeaturedProducts").$$render($$result, {}, {}, {})} ${validate_component(TrustSection, "TrustSection").$$render($$result, {}, {}, {})} ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})} ${validate_component(FAQSection, "FAQSection").$$render($$result, {}, {}, {})} ${validate_component(CTASection, "CTASection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
