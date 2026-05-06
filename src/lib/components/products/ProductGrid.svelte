<script lang="ts">
  import type { Product } from '$data/products';
  import ProductCard from '$components/products/ProductCard.svelte';

  export let products: Product[] = [];
  export let limit: number | null = null;

  $: visibleProducts = limit ? products.slice(0, limit) : products;
</script>

<div class="grid gap-6 sm:grid-cols-2">
  {#each visibleProducts as product (product.id)}
    <ProductCard {product} />
  {/each}
</div>
