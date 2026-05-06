

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CcFZgthJ.js","_app/immutable/chunks/scheduler.BzdTLSCl.js","_app/immutable/chunks/index.Cepnk7gB.js","_app/immutable/chunks/singletons.3Jt7utur.js"];
export const stylesheets = [];
export const fonts = [];
