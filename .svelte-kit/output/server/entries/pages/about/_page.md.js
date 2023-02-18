import { c as create_ssr_component } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `---
shortTitle: About
---

# About this site

## This site is written using [SvelteKit][sk], a framework for building sites using [Svelte][sv].

It&#39;s running in fully-prerendered mode, so we&#39;re serving static html from the
server and no JS is required client-side, and it serves and renders fast. *But*
if you do have JS, it will then re-hydrate in your browser and become a fully
functional dynamic app.

The moiré effect is two divs with repeating gradients rotating slowly over the top of the page.

It&#39;s deployed on [GitLab Pages][glp] via [GitLab CI][glci].

I&#39;ve started some [code-katas](/katas) to see if Svelte is actually any good.

[sk]: https://kit.svelte.dev/
[sv]: https://svelte.dev/
[glp]: https://docs.gitlab.com/ee/user/project/pages/
[glci]: https://docs.gitlab.com/ee/ci/`;
});
export {
  Page as default
};
