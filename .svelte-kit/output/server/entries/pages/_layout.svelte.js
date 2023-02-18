import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const Frontdrops_svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";@keyframes svelte-ha9i73-rotate{0%{transform:translate(-25%, -25%) rotate(0)}50%{transform:translate(-25%, -25%) rotate(180deg)}100%{transform:translate(-25%, -25%) rotate(360deg)}}.crt-effects.svelte-ha9i73.svelte-ha9i73{position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden;pointer-events:none;mix-blend-mode:hard-light;z-index:1}.crt-effects.svelte-ha9i73 .noise.svelte-ha9i73{position:absolute;top:0;left:0;right:0;bottom:0;background-image:var(--noise-3);opacity:0.2}.crt-effects.svelte-ha9i73 .moiré1.svelte-ha9i73{width:300%;height:300%;position:absolute;animation-name:svelte-ha9i73-rotate;animation-duration:150s;animation-iteration-count:infinite;animation-timing-function:linear;z-index:1;pointer-events:none;background:repeating-radial-gradient(circle at 150% 150%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4) 7px, rgba(255, 255, 255, 0.2) 14px)}.crt-effects.svelte-ha9i73 .moiré2.svelte-ha9i73{width:300%;height:300%;position:absolute;animation-name:svelte-ha9i73-rotate;animation-duration:450s;animation-iteration-count:infinite;animation-timing-function:linear;z-index:1;pointer-events:none;background:repeating-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4) 7px, rgba(0, 0, 0, 0.2) 14px);animation-direction:reverse}.middle-glow.svelte-ha9i73.svelte-ha9i73{background-image:radial-gradient(circle at 50% 50%, lightgreen 0%, rgba(72, 119, 72, 0.5) 80%, rgba(0, 0, 0, 0) 100%);position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden;pointer-events:none;mix-blend-mode:hard-light;z-index:2;opacity:0.5}.framing-shadow.svelte-ha9i73.svelte-ha9i73{position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden;pointer-events:none;z-index:3;box-shadow:0 0 1em 0.2em #000 inset}',
  map: null
};
const Frontdrops = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"crt-effects svelte-ha9i73"}"><div class="${"noise svelte-ha9i73"}"></div>
  <div class="${"moiré1 svelte-ha9i73"}"></div>
  <div class="${"moiré2 svelte-ha9i73"}"></div></div>

<div class="${"middle-glow svelte-ha9i73"}"></div>


<div class="${"framing-shadow svelte-ha9i73"}"></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1q1s72a_START -->${$$result.title = `<title>lumphammer projects</title>`, ""}<!-- HEAD_svelte-1q1s72a_END -->`, ""}

<main>${slots.default ? slots.default({}) : ``}</main>

${validate_component(Frontdrops, "Frontdrops").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
