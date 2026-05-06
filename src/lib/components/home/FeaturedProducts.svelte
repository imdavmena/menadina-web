<script lang="ts">
  import { products } from '$data/products';
  import ProductGrid from '$components/products/ProductGrid.svelte';
</script>

<section class="bg-white py-16">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Productos destacados</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Un catálogo profesional para tu tienda social.</h2>
      </div>
      <a href="/productos" class="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Ver todos</a>
    </div>
    <ProductGrid {products} limit={4} />
  </div>
</section>
