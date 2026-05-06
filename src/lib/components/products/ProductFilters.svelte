<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Category } from '$data/categories';

  export let categories: Category[] = [];
  export let activeCategory = 'all';
  export let searchQuery = '';

  const dispatch = createEventDispatcher();

  const selectCategory = (id: string) => {
    console.log(id)
    dispatch('filterChange', { category: id });
  };
</script>

<aside class="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
  <div>
    <h2 class="text-lg font-semibold text-slate-950">Buscar y filtrar</h2>
    <p class="mt-2 text-sm text-slate-600">Busca por nombre, categoría o característica para encontrar el producto ideal.</p>
  </div>

  <div class="space-y-4">
    <label for="product-search" class="sr-only">Buscar productos</label>
    <input
      id="product-search"
      type="search"
      bind:value={searchQuery}
      placeholder="Busca productos, marca o idea"
      class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/30"
    />
  </div>

  <div>
    <h3 class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">Categorías</h3>
    <p class="mt-2 text-sm text-slate-600">Filtra el catálogo por la colección deseada.</p>
  </div>

  <div class="space-y-3">
    <button
      type="button"
      class={
        `w-full rounded-3xl px-4 py-3 text-left text-sm font-semibold transition ${
          activeCategory === 'all'
            ? 'bg-emerald-600 text-white'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`
      }
      on:click={() => selectCategory("all")}
    >
      Ver todos
    </button>
    {#each categories as category}
      <button
        type="button"
        class={
          `w-full rounded-3xl px-4 py-3 text-left text-sm font-semibold transition ${
            activeCategory === category.id
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`
        }
        on:click={() => selectCategory(category.id)}
      >
        {category.name}
      </button>
    {/each}
  </div>
</aside>
