# About this site

## This site is written using [SvelteKit][sk], a framework for building sites using [Svelte][sv].

It's running in fully-prerendered mode, so we're serving static html from the
server and no JS is required client-side, and it serves and renders fast. *But*
if you do have JS, it will then re-hydrate in your browser and become a fully
functional dynamic app.

The moiré effect is two divs with repeating gradients rotating slowly over the top of the page.

It's deployed on [GitLab Pages][glp] via [GitLab CI][glci].

I've started some [code-katas](/pages/katas) to exercise the dynamic side of the code.

[sk]: https://kit.svelte.dev/
[sv]: https://svelte.dev/
[glp]: https://docs.gitlab.com/ee/user/project/pages/
[glci]: https://docs.gitlab.com/ee/ci/
