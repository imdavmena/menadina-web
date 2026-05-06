import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = ({ url }) => {
  return {
    categoryParam: url.searchParams.get('category') ?? 'all'
  };
};
