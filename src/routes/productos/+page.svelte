<script lang="ts">
  import { goto } from '$app/navigation';
  import ProductFilters from '$components/products/ProductFilters.svelte';
  import ProductGrid from '$components/products/ProductGrid.svelte';
  import type { Product } from '$data/products';
  import { categories } from '$data/categories';
  import { products } from '$data/products';

  export let data: { categoryParam: string };

  let activeCategory = data.categoryParam ?? 'all';
  let searchQuery = '';
  let visibleProducts: Product[] = products;

  $: if (activeCategory !== (data.categoryParam ?? 'all')) {
    goto('/productos?category=' + activeCategory);
  }

  const matchesSearch = (product: Product) => {
    const term = searchQuery.trim().toLowerCase();
    if (!term) return true;
    return (
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.highlights.some((highlight) => highlight.toLowerCase().includes(term))
    );
  };

  $: visibleProducts = products.filter((product) => {
    const categoryMatch = activeCategory === 'all' || product.categoryId === activeCategory;
    return categoryMatch && matchesSearch(product);
  });

  const currentCategory = activeCategory === 'all'
    ? 'Todos los productos'
    : categories.find((category) => category.id === activeCategory)?.name ?? 'Todos los productos';
</script>

<svelte:head>
  <title>Productos | MENADINA</title>
  <meta name="description" content="Explora el catálogo de MENADINA: productos importados desde China con procesos amigables para redes sociales y WhatsApp." />
</svelte:head>

<section class="bg-slate-50 py-16">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-10">
      <p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Catálogo</p>
      <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Productos listos para tu tienda.</h1>
      <p class="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Filtra por categoría, busca por nombre y encuentra los productos más atractivos para tus clientes en RD.</p>
    </div>
    <div class="grid gap-10 lg:grid-cols-[320px_1fr]">
      <ProductFilters
        {categories}
        {activeCategory}
        {searchQuery}
        on:filterChange={(event) => activeCategory = event.detail.category}
      />

      <div class="space-y-8">
        <div class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Resultados</p>
              <h2 class="mt-3 text-2xl font-semibold text-slate-950">Mostrando {visibleProducts.length} productos</h2>
              <p class="mt-2 text-sm text-slate-600">Categoría: {currentCategory}. Usa el buscador para encontrar por nombre, categoría o característica.</p>
            </div>
            {#if searchQuery}
              <button
                type="button"
                on:click={() => (searchQuery = '')}
                class="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                Limpiar búsqueda
              </button>
            {/if}
          </div>
        </div>

        {#if visibleProducts.length > 0}
          <ProductGrid products={visibleProducts} />
        {:else}
          <div class="rounded-[2rem] border border-slate-200 bg-white p-12 text-center">
            <p class="text-xl font-semibold text-slate-950">No encontramos productos</p>
            <p class="mt-2 text-sm text-slate-600">Intenta con otra categoría o cambia tu búsqueda.</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
