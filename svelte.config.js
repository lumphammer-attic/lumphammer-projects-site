// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
    preprocess(),
    mdsvex({
      extensions: [".md"]
    })
  ],

  extensions: [".svelte", ".md"],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: "body",
		// appDir: "/",
		// paths: {
		// 	base: "/"
		// }
	}
};

export default config;
