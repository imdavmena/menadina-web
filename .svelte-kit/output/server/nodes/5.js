import * as universal from '../entries/pages/productos/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/productos/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/productos/+page.ts";
export const imports = ["_app/immutable/nodes/5.BPq3NXD4.js","_app/immutable/chunks/scheduler.BzdTLSCl.js","_app/immutable/chunks/index.Cepnk7gB.js","_app/immutable/chunks/each.-gASlQSi.js","_app/immutable/chunks/ProductGrid.BK-dInHG.js","_app/immutable/chunks/formatCurrency.BMwB-5XN.js","_app/immutable/chunks/public.DjEeATP2.js","_app/immutable/chunks/categories.CnRTQ1I4.js"];
export const stylesheets = [];
export const fonts = [];
