<script lang="ts">
  import type { Product } from '$data/products';
  import { formatCurrency } from '$utils/formatCurrency';
  import { buildWhatsappUrl } from '$utils/whatsapp';
  import { PUBLIC_WHATSAPP_NUMBER } from '$env/static/public';

  export let product: Product;

  const whatsappUrl = buildWhatsappUrl(
    PUBLIC_WHATSAPP_NUMBER ?? '18001234567',
    `Hola MENADINA, quiero información sobre el producto ${product.name}.`
  );
</script>

<article class="glass-card overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
  <div class="relative overflow-hidden bg-slate-100">
    <img src={product.image} alt={product.name} class="h-64 w-full object-cover transition duration-500 hover:scale-105" />
    {#if product.badge}
      <span class="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">{product.badge}</span>
    {/if}
  </div>
  <div class="space-y-4 p-6">
    <div>
      <p class="text-sm uppercase tracking-[0.24em] text-emerald-700">{product.category}</p>
      <h3 class="mt-2 text-xl font-semibold text-slate-950">{product.name}</h3>
      <p class="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
    </div>
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div class="space-y-1">
        <p class="text-2xl font-semibold text-slate-950">{formatCurrency(product.price)}</p>
        {#if product.originalPrice}
          <p class="text-sm text-slate-500 line-through">{formatCurrency(product.originalPrice)}</p>
        {/if}
      </div>
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
        <a href={`/productos/${product.id}`} class="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-emerald-600 hover:text-emerald-600">
          Ver detalle
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" class="inline-flex rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500">
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</article>
