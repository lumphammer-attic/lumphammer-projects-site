import { c as create_ssr_component, j as createEventDispatcher, b as subscribe, d as add_attribute, i as each, v as validate_component, e as escape } from "../../../../chunks/index2.js";
import { w as writable } from "../../../../chunks/index.js";
import { P as PageLayout } from "../../../../chunks/PageLayout.js";
const initialToDos = {
  one: {
    label: "Make a to-do list in Svelte",
    completed: false
  },
  two: {
    label: "Drink tea",
    completed: false
  },
  three: {
    label: "Start a Svelte project",
    completed: true
  }
};
const loadedToDos = initialToDos;
const toDoItems = writable(loadedToDos);
toDoItems.subscribe((value) => {
});
var DisplayMode = /* @__PURE__ */ ((DisplayMode2) => {
  DisplayMode2[DisplayMode2["completed"] = 0] = "completed";
  DisplayMode2[DisplayMode2["notCompleted"] = 1] = "notCompleted";
  DisplayMode2[DisplayMode2["both"] = 2] = "both";
  return DisplayMode2;
})(DisplayMode || {});
const Confirmer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".widther.svelte-1pxqdu5{overflow:hidden;height:0px;width:max-content;background-color:aliceblue}.heighter.svelte-1pxqdu5{display:inline-block;overflow:hidden;height:auto;width:0px;background-color:rebeccapurple;white-space:nowrap;line-height:1}.actual.svelte-1pxqdu5{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:max-content;height:auto}.effectiveDisabled.svelte-1pxqdu5{cursor:none}",
  map: null
};
const Confirmer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let effectiveDisabled;
  let { disabled = false } = $$props;
  createEventDispatcher();
  let mode = "ready";
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css);
  effectiveDisabled = mode === "thanks";
  return `<button ${disabled ? "disabled" : ""} class="${["svelte-1pxqdu5", effectiveDisabled ? "effectiveDisabled" : ""].join(" ").trim()}"><div class="${"widther svelte-1pxqdu5"}">${slots.default ? slots.default({}) : ``}</div>
  <div class="${"widther svelte-1pxqdu5"}">${slots.confirming ? slots.confirming({}) : `Confirm`}</div>
  <div class="${"widther svelte-1pxqdu5"}">...</div>

  <div class="${"heighter svelte-1pxqdu5"}">${slots.default ? slots.default({}) : ``}</div>
  <div class="${"heighter svelte-1pxqdu5"}">${slots.confirming ? slots.confirming({}) : `Confirm`}</div>
  <div class="${"heighter svelte-1pxqdu5"}">...</div>

  <div class="${"actual svelte-1pxqdu5"}">${`${slots.default ? slots.default({}) : ``}`}</div>
</button>`;
});
const TodoList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filtered;
  let $toDoItems, $$unsubscribe_toDoItems;
  $$unsubscribe_toDoItems = subscribe(toDoItems, (value) => $toDoItems = value);
  let mode = DisplayMode.notCompleted;
  let inputText = "";
  filtered = Object.keys($toDoItems).filter((id) => {
    const item = $toDoItems[id];
    return mode === DisplayMode.both || mode === DisplayMode.completed && item.completed || mode === DisplayMode.notCompleted && !item.completed;
  });
  $$unsubscribe_toDoItems();
  return `<select><option${add_attribute("value", DisplayMode.completed, 0)}>Completed items</option><option${add_attribute("value", DisplayMode.notCompleted, 0)}>Current items</option><option${add_attribute("value", DisplayMode.both, 0)}>All items</option></select>

<hr>
${filtered.length === 0 ? `${mode === DisplayMode.completed ? `<p>~~~ No completed items ~~~</p>` : `${mode === DisplayMode.notCompleted ? `<p>~~~ You&#39;re up to date! ~~~</p>` : `<p>~~~ No items ~~~</p>`}`}` : ``}
<ul>${each(filtered, (id) => {
    return `<li><label><input type="${"checkbox"}"${add_attribute("checked", $toDoItems[id].completed, 1)}>
        ${escape($toDoItems[id].label)}</label>
    </li>`;
  })}</ul>
${mode !== DisplayMode.completed ? `<hr>
<p><input placeholder="${"Enter text..."}"${add_attribute("value", inputText, 0)}>
  <button ${/^\s*$/.test(inputText) ? "disabled" : ""}>Create
</button></p>` : ``}
${mode === DisplayMode.completed ? `<hr>
<p>${validate_component(Confirmer, "Confirmer").$$render($$result, { disabled: filtered.length === 0 }, {}, {
    confirming: () => {
      return `<span slot="${"confirming"}">Confirm purge?</span>`;
    },
    default: () => {
      return `Purge all completed items
    `;
    }
  })}</p>` : ``}
<hr>
<p>${validate_component(Confirmer, "Confirmer").$$render($$result, {}, {}, {
    confirming: () => {
      return `<span slot="${"confirming"}">Confirm reset?</span>`;
    },
    default: () => {
      return `Reset demo
    `;
    }
  })}</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PageLayout, "PageLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>To-do list</h1>
  
  ${validate_component(TodoList, "TodoList").$$render($$result, {}, {}, {})}
  `;
    }
  })}`;
});
export {
  Page as default
};
