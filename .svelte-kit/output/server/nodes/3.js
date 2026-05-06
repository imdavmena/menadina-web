

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/categorias/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BZFlmRiG.js","_app/immutable/chunks/scheduler.BzdTLSCl.js","_app/immutable/chunks/each.-gASlQSi.js","_app/immutable/chunks/index.Cepnk7gB.js","_app/immutable/chunks/categories.CnRTQ1I4.js"];
export const stylesheets = [];
export const fonts = [];
