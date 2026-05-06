<script lang="ts">
  import type { Category } from '$data/categories';
  import { categories } from '$data/categories';
</script>

<section class="bg-slate-50 py-16">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-10 max-w-2xl">
      <p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Categorías clave</p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Explora los productos que impulsa tu negocio.</h2>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
      {#each categories as category}
        <article class="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
          <img src={category.illustration} alt={category.name} class="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
          <div class="space-y-3 p-6">
            <span class="text-sm uppercase tracking-[0.25em] text-emerald-700">{category.name}</span>
            <p class="text-lg font-semibold text-slate-950">{category.subtitle}</p>
            <a href="/categorias" class="inline-flex text-sm font-semibold text-emerald-600 transition hover:text-emerald-500">Ver colección →</a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
