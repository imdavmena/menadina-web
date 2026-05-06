import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BAh2abmx.js","_app/immutable/chunks/scheduler.BzdTLSCl.js","_app/immutable/chunks/index.Cepnk7gB.js","_app/immutable/chunks/each.-gASlQSi.js","_app/immutable/chunks/categories.CnRTQ1I4.js","_app/immutable/chunks/public.DjEeATP2.js"];
export const stylesheets = ["_app/immutable/assets/0.DCbPYP8Z.css"];
export const fonts = [];
