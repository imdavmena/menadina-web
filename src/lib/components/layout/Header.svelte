<script lang="ts">
  import Navbar from '$components/layout/Navbar.svelte';
</script>

<header class="sticky top-0 z-40 border-b border-slate-200/80 bg-white backdrop-blur-md">
  <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
    <a href="/" class="flex items-center gap-3">
      <div class="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-600 text-xl font-bold text-white">M</div>
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-slate-500">MENADINA</p>
        <p class="text-base font-semibold text-slate-950">Importadora RD</p>
      </div>
    </a>

    <div class="hidden flex-1 items-center justify-end gap-6 text-sm text-slate-600 md:flex">
      <span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">Importación desde China</span>
      <span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">Stock seguro en RD</span>
    </div>
  </div>

  <Navbar />
</header>
