import { c as create_ssr_component, d as add_attribute, e as escape } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1t4svcb{margin:1em 0}",
  map: null
};
const headline = "lumphammer projects";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1${add_attribute("data-text", headline, 0)}>${escape(headline)}</h1>
 
<p class="${"svelte-1t4svcb"}">Hi, I&#39;m Neil de Carteret, and this is my personal projects site. Yes the moiré
	effect is deliberate. Drop me an email if it makes your device melt.
</p>

<div class="${"grid"}">hello
</div>

<hr>
`;
});
export {
  Page as default
};
