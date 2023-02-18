// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
// import { mdsvex } from "mdsvex";
// import path from "path";
// import {fileURLToPath} from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const mdLayoutRelative = "./src/lib/MdLayout.svelte";
// const mdLayoutPath = path.join(__dirname, mdLayoutRelative);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess()
		// mdsvex({
		//   extensions: [".md"],
		// 	layout: mdLayoutRelative,
		// })
	],

	extensions: [".svelte", ".md"],

	kit: {
		adapter: adapter()

		// hydrate the <div id="svelte"> element in src/app.html
		// target: "body"
		// appDir: "/",
		// paths: {
		// 	base: "/"
		// }
	}
};

export default config;
