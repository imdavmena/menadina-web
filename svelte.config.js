import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({
    sourceMap: true,
    typescript: true
  }),

  kit: {
    adapter: adapter(),
    alias: {
      $components: './src/lib/components',
      $data: './src/lib/data',
      $utils: './src/lib/utils'
    }
  }
};
