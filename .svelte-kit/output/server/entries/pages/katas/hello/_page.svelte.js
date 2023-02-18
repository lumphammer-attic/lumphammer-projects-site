import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute } from "../../../../chunks/index2.js";
import { P as PageLayout } from "../../../../chunks/PageLayout.js";
const defaultName = "world";
const defaultGreeting = "Hello";
const Hello = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = defaultName } = $$props;
  let { greeting = defaultGreeting } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.greeting === void 0 && $$bindings.greeting && greeting !== void 0)
    $$bindings.greeting(greeting);
  return `<div>${escape(greeting ?? defaultGreeting)}, ${escape(name ?? defaultName)}!
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".outer.svelte-ywjiaz.svelte-ywjiaz{display:grid;grid-template-columns:[label] 5em [control] 10em [checkbox] 5em}.outer.svelte-ywjiaz label.svelte-ywjiaz{grid-column:label}.outer.svelte-ywjiaz .control.svelte-ywjiaz{grid-column:control}.outer.svelte-ywjiaz .checkbox.svelte-ywjiaz{grid-column:checkbox}.result.svelte-ywjiaz.svelte-ywjiaz{margin-top:1em;border:2px solid currentColor;padding:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let greeting = "Screw you";
  let useGreeting = false;
  let name = "buddy";
  let useName = true;
  $$result.css.add(css);
  return `${validate_component(PageLayout, "PageLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>&quot;Hello world&quot; Kata</h1>
  <div class="${"outer svelte-ywjiaz"}"><label for="${"greeting"}" class="${"svelte-ywjiaz"}">Greeting</label>
    <input class="${"control svelte-ywjiaz"}" name="${"greeting"}" ${"disabled"}${add_attribute("value", greeting, 0)}>
    <input class="${"checkbox svelte-ywjiaz"}" type="${"checkbox"}"${add_attribute("checked", useGreeting, 1)}>

    <label for="${"name"}" class="${"svelte-ywjiaz"}">Name</label>
    <input class="${"control svelte-ywjiaz"}" name="${"name"}" ${""}${add_attribute("value", name, 0)}>
    <input class="${"checkbox svelte-ywjiaz"}" type="${"checkbox"}"${add_attribute("checked", useName, 1)}></div>

  <div class="${"result svelte-ywjiaz"}">${validate_component(Hello, "Hello").$$render(
        $$result,
        {
          greeting: void 0,
          name
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
export {
  Page as default
};
