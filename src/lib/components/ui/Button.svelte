<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary';
  export let size: 'sm' | 'md' = 'md';
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let href: string | null = null;
  export let disabled = false;
</script>

{#if href}
  <a
    href={href}
    {...$$restProps}
    class={`inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${size === 'sm' ? 'px-4 py-2 text-sm' : 'px-5 py-3 text-base'} ${variant === 'primary' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500' : 'bg-slate-950 text-white hover:bg-slate-800'}`}
  >
    <slot />
  </a>
{:else}
  <button
    type={type}
    disabled={disabled}
    {...$$restProps}
    class={`inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${size === 'sm' ? 'px-4 py-2 text-sm' : 'px-5 py-3 text-base'} ${variant === 'primary' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500' : 'bg-slate-950 text-white hover:bg-slate-800'} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
  >
    <slot />
  </button>
{/if}
