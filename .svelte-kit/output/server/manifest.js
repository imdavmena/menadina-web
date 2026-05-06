export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.pc5k-2gi.js","app":"_app/immutable/entry/app.BYXDaZAb.js","imports":["_app/immutable/entry/start.pc5k-2gi.js","_app/immutable/chunks/scheduler.BzdTLSCl.js","_app/immutable/chunks/singletons.3Jt7utur.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.BYXDaZAb.js","_app/immutable/chunks/scheduler.BzdTLSCl.js","_app/immutable/chunks/index.Cepnk7gB.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/productos",
				pattern: /^\/productos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
