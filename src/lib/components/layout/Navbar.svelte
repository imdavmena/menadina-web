<script lang="ts">
  import { onMount } from 'svelte';
  import { categories } from '$data/categories';
  let open = false;
  let nav: HTMLElement | null = null;

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos', hasDropdown: true },
    { href: '/categorias', label: 'Categorías' },
    { href: '/contacto', label: 'Contacto' }
  ];

  const categoryLinks = categories.map((category) => ({
    href: `/productos?category=${category.id}`,
    label: category.name
  }));

  const toggle = () => {
    open = !open;
  };

  onMount(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        open = false;
      }
    };
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  });
</script>

<nav class="border-t border-slate-200/70 bg-white">
  <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
    <div class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
      {#each links as link}
        {#if link.hasDropdown}
          <div class="group relative">
            <a href={link.href} class="transition hover:text-emerald-600">{link.label}</a>
            <div class="absolute left-0 top-full z-20 hidden w-56 rounded-3xl border border-slate-200 bg-white p-4 shadow-lg transition group-hover:block">
              {#each categoryLinks as category}
                <a href={category.href} class="block rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">{category.label}</a>
              {/each}
            </div>
          </div>
        {:else}
          <a href={link.href} class="transition hover:text-emerald-600">{link.label}</a>
        {/if}
      {/each}
    </div>

    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 md:hidden"
      on:click={toggle}
      aria-expanded={open}
      aria-controls="mobile-menu"
    >
      <span>Menú</span>
      <span aria-hidden="true">{open ? '✕' : '☰'}</span>
    </button>
  </div>

  <div id="mobile-menu" bind:this={nav} class={`md:hidden ${open ? 'block' : 'hidden'} border-t border-slate-200 bg-white/95 px-4 pb-4 shadow-sm`}>
    <div class="space-y-3 py-3">
      {#each links as link}
        <a href={link.href} on:click={() => open = false} class="block rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100">{link.label}</a>
      {/each}
    </div>
    <div class="border-t border-slate-200 pt-4">
      <p class="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Categorías</p>
      <div class="space-y-2">
        {#each categoryLinks as category}
          <a href={category.href} on:click={() => open = false} class="block rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100">{category.label}</a>
        {/each}
      </div>
    </div>
  </div>
</nav>
