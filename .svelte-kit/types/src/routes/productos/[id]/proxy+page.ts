// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { products } from '$data/products';

export const load = ({ params }: Parameters<PageLoad>[0]) => {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    throw error(404, 'Producto no encontrado');
  }

  return { product };
};
