export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","investigator-cover-notext.webp","lumphammer_favicon.webp","magnifying-glass.webp","robots.txt"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-98867c1f.js","imports":["_app/immutable/start-98867c1f.js","_app/immutable/chunks/index-9eff229f.js","_app/immutable/chunks/singletons-3abba3b2.js","_app/immutable/chunks/index-72a72105.js","_app/immutable/chunks/paths-24bb4e9c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/katas",
				pattern: /^\/katas\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/katas/hello",
				pattern: /^\/katas\/hello\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/katas/todo-list",
				pattern: /^\/katas\/todo-list\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
