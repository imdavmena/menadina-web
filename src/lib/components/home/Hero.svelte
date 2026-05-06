<script lang="ts">
  import Button from '$components/ui/Button.svelte';
  import { browser } from '$app/environment';
  import { buildWhatsappUrl } from '$utils/whatsapp';
  import { env } from '$env/dynamic/public';

  let whatsappUrl = '';

  if (browser) {
    whatsappUrl = buildWhatsappUrl(
      env.PUBLIC_WHATSAPP_NUMBER ?? '18001234567',
      'Hola MENADINA, quiero información sobre su catálogo de productos.'
    );
  }
</script>

<section class="relative overflow-hidden bg-white pt-10 pb-16">
  <div class="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
    <div class="max-w-2xl space-y-6">
      <span class="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">IMPORTACIÓN DIRECTA</span>
      <h1 class="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">MENADINA trae productos premium de China a República Dominicana.</h1>
      <p class="max-w-2xl text-lg leading-8 text-slate-600">Catálogo pensado para redes y comercio electrónico con atención rápida, stock en RD y seguimiento personalizado por WhatsApp.</p>
      <div class="flex flex-col gap-3 sm:flex-row">
        <Button href="/productos">Explorar catálogo</Button>
        <Button variant="secondary" href={whatsappUrl}>Hablar por WhatsApp</Button>
      </div>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-3xl bg-slate-950/95 p-5 text-white shadow-soft">
          <p class="text-sm uppercase tracking-[0.28em] text-emerald-300">Confianza</p>
          <p class="mt-2 text-lg font-semibold">Gestión profesional desde la orden hasta la entrega.</p>
        </div>
        <div class="rounded-3xl bg-slate-100 p-5 text-slate-900 shadow-soft">
          <p class="text-sm uppercase tracking-[0.28em] text-emerald-700">Listo para redes</p>
          <p class="mt-2 text-lg font-semibold">Catálogo preparado para Instagram, Facebook y Shopify.</p>
        </div>
      </div>
    </div>

    <div class="relative max-w-xl self-center overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-soft sm:p-10">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.35),_transparent_45%)]"></div>
      <div class="relative space-y-6">
        <div class="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
          <p class="text-sm uppercase tracking-[0.3em] text-emerald-200">Producto destacado</p>
          <h2 class="mt-3 text-2xl font-semibold">Kit de oficina compacto</h2>
          <p class="mt-4 text-sm leading-6 text-slate-200">Diseñado para clientes que buscan estilo, funcionalidad y envío rápido en Santo Domingo.</p>
          <div class="mt-6 flex items-center gap-4 text-xl font-semibold text-white">
            <span>$24.90</span>
            <span class="rounded-full bg-emerald-500 px-3 py-1 text-sm uppercase text-slate-950">Stock RD</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-3xl bg-slate-900/80 p-4 text-slate-200">
            <p class="text-sm uppercase tracking-[0.3em] text-emerald-300">Fast ship</p>
            <p class="mt-3 text-base">Logística lista para e-commerce.</p>
          </div>
          <div class="rounded-3xl bg-slate-900/80 p-4 text-slate-200">
            <p class="text-sm uppercase tracking-[0.3em] text-emerald-300">Catálogo</p>
            <p class="mt-3 text-base">Segmentado por categoría y estilo.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
