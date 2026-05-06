// @ts-nocheck
import type { PageLoad } from './$types';

export const prerender = false;

export const load = ({ url }: Parameters<PageLoad>[0]) => {
  return {
    categoryParam: url.searchParams.get('category') ?? 'all'
  };
};
