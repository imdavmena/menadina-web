<script lang="ts">
  import type { PageData } from './$types';
  import { onMount } from 'svelte';
  import { buildWhatsappUrl } from '$utils/whatsapp';
  import { formatCurrency } from '$utils/formatCurrency';
  import { env } from '$env/dynamic/public';

  export let data: PageData;
  const { product } = data;

  let whatsappUrl = '';

  onMount(() => {
    whatsappUrl = buildWhatsappUrl(
      env.PUBLIC_WHATSAPP_NUMBER ?? '18001234567',
      `Hola MENADINA, quiero información sobre el producto ${product.name}.`
    );
  });
</script>

<svelte:head>
  <title>{product.name} | MENADINA</title>
  <meta name="description" content={product.description} />
</svelte:head>

<section class="bg-slate-50 py-16">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-10">
      <p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Detalle del producto</p>
      <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{product.name}</h1>
      <p class="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{product.description}</p>
    </div>

    <div class="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
      <article class="rounded-[2rem] bg-white p-8 shadow-soft">
        <img src={product.image} alt={product.name} class="w-full rounded-[1.5rem] object-cover shadow-sm" />

        <div class="mt-8 space-y-6">
          <div class="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span class="rounded-full bg-emerald-100 px-3 py-1 font-semibold text-emerald-700">{product.category}</span>
            {#if product.badge}
              <span class="rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white uppercase tracking-[0.2em]">{product.badge}</span>
            {/if}
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl bg-slate-50 p-6">
              <p class="text-sm uppercase tracking-[0.3em] text-slate-500">Precio</p>
              <p class="mt-3 text-3xl font-semibold text-slate-950">{formatCurrency(product.price)}</p>
              {#if product.originalPrice}
                <p class="mt-1 text-sm text-slate-500 line-through">{formatCurrency(product.originalPrice)}</p>
              {/if}
            </div>
            <div class="rounded-3xl bg-slate-50 p-6">
              <p class="text-sm uppercase tracking-[0.3em] text-slate-500">Disponible</p>
              <p class="mt-3 text-xl font-semibold text-slate-950">Stock limitado</p>
            </div>
          </div>

          <div>
            <p class="text-sm uppercase tracking-[0.3em] text-slate-500">Características clave</p>
            <ul class="mt-4 space-y-3 text-slate-700">
              {#each product.highlights as highlight}
                <li class="flex items-start gap-3">
                  <span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                  <span>{highlight}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </article>

      <aside class="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Contacto rápido</p>
          <h2 class="mt-3 text-2xl font-semibold text-slate-950">¿Quieres traer este producto?</h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">Disponible para consulta y pedido inmediato vía WhatsApp.</p>
        </div>

        <a href={whatsappUrl} target="_blank" rel="noreferrer" class="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-emerald-500">
          Consultar por WhatsApp
        </a>

        <div class="rounded-3xl bg-slate-50 p-6">
          <p class="text-sm uppercase tracking-[0.3em] text-slate-500">Responde rápido</p>
          <ul class="mt-4 space-y-3 text-sm text-slate-700">
            <li>✔ Listo para vender en Instagram y Facebook</li>
            <li>✔ Producto importado con control de calidad</li>
            <li>✔ Logística y despacho más fácil en RD</li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
