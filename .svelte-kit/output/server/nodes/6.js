import * as universal from '../entries/pages/productos/_id_/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/productos/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/productos/[id]/+page.ts";
export const imports = ["_app/immutable/nodes/6.B5Gnrvr-.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/formatCurrency.BMwB-5XN.js","_app/immutable/chunks/scheduler.BzdTLSCl.js","_app/immutable/chunks/each.-gASlQSi.js","_app/immutable/chunks/index.Cepnk7gB.js","_app/immutable/chunks/public.DjEeATP2.js"];
export const stylesheets = [];
export const fonts = [];
