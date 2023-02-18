import { c as create_ssr_component, f as spread, h as escape_object, e as escape, d as add_attribute, v as validate_component, i as each } from "./index2.js";
import { b as base } from "./paths.js";
const Path = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<path${spread([escape_object(data)], {})}></path>`;
});
const Polygon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<polygon${spread([escape_object(data)], {})}></polygon>`;
});
const Raw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursor = 870711;
  function getId() {
    cursor += 1;
    return `fa-${cursor.toString(16)}`;
  }
  let raw;
  let { data } = $$props;
  function getRaw(data2) {
    if (!data2 || !data2.raw) {
      return null;
    }
    let rawData = data2.raw;
    const ids = {};
    rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
      const uniqueId = getId();
      ids[id] = uniqueId;
      return ` id="${uniqueId}"`;
    });
    rawData = rawData.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
      const id = rawId || pointerId;
      if (!id || !ids[id]) {
        return match;
      }
      return `#${ids[id]}`;
    });
    return rawData;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  raw = getRaw(data);
  return `<g><!-- HTML_TAG_START -->${raw}<!-- HTML_TAG_END --></g>`;
});
const Svg_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".fa-icon.svelte-1dof0an{display:inline-block;fill:currentColor}.fa-flip-horizontal.svelte-1dof0an{transform:scale(-1, 1)}.fa-flip-vertical.svelte-1dof0an{transform:scale(1, -1)}.fa-spin.svelte-1dof0an{animation:svelte-1dof0an-fa-spin 1s 0s infinite linear}.fa-inverse.svelte-1dof0an{color:#fff}.fa-pulse.svelte-1dof0an{animation:svelte-1dof0an-fa-spin 1s infinite steps(8)}@keyframes svelte-1dof0an-fa-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { box } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = null } = $$props;
  let { x = void 0 } = $$props;
  let { y = void 0 } = $$props;
  let { style = void 0 } = $$props;
  let { label = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.box === void 0 && $$bindings.box && box !== void 0)
    $$bindings.box(box);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$1);
  return `<svg version="${"1.1"}" class="${[
    "fa-icon " + escape(className, true) + " svelte-1dof0an",
    (spin ? "fa-spin" : "") + " " + (pulse ? "fa-pulse" : "") + " " + (inverse ? "fa-inverse" : "") + " " + (flip === "horizontal" ? "fa-flip-horizontal" : "") + " " + (flip === "vertical" ? "fa-flip-vertical" : "")
  ].join(" ").trim()}"${add_attribute("x", x, 0)}${add_attribute("y", y, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("aria-label", label, 0)}${add_attribute("role", label ? "img" : "presentation", 0)}${add_attribute("viewBox", box, 0)}${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
let outerScale = 1;
function normaliseData(data) {
  if ("iconName" in data && "icon" in data) {
    let normalisedData = {};
    let faIcon = data.icon;
    let name = data.iconName;
    let width = faIcon[0];
    let height = faIcon[1];
    let paths = faIcon[4];
    let iconData = { width, height, paths: [{ d: paths }] };
    normalisedData[name] = iconData;
    return normalisedData;
  }
  return data;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { data } = $$props;
  let { scale = 1 } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = null } = $$props;
  let { label = null } = $$props;
  let self = null;
  let { style = null } = $$props;
  let width;
  let height;
  let combinedStyle;
  let box;
  function init() {
    if (typeof data === "undefined") {
      return;
    }
    const normalisedData = normaliseData(data);
    const [name] = Object.keys(normalisedData);
    const icon = normalisedData[name];
    if (!icon.paths) {
      icon.paths = [];
    }
    if (icon.d) {
      icon.paths.push({ d: icon.d });
    }
    if (!icon.polygons) {
      icon.polygons = [];
    }
    if (icon.points) {
      icon.polygons.push({ points: icon.points });
    }
    self = icon;
  }
  function normalisedScale() {
    let numScale = 1;
    if (typeof scale !== "undefined") {
      numScale = Number(scale);
    }
    if (isNaN(numScale) || numScale <= 0) {
      console.warn('Invalid prop: prop "scale" should be a number over 0.');
      return outerScale;
    }
    return numScale * outerScale;
  }
  function calculateBox() {
    if (self) {
      return `0 0 ${self.width} ${self.height}`;
    }
    return `0 0 ${width} ${height}`;
  }
  function calculateRatio() {
    if (!self) {
      return 1;
    }
    return Math.max(self.width, self.height) / 16;
  }
  function calculateWidth() {
    if (self) {
      return self.width / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateHeight() {
    if (self) {
      return self.height / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateStyle() {
    let combined = "";
    if (style !== null) {
      combined += style;
    }
    let size = normalisedScale();
    if (size === 1) {
      if (combined.length === 0) {
        return void 0;
      }
      return combined;
    }
    if (combined !== "" && !combined.endsWith(";")) {
      combined += "; ";
    }
    return `${combined}font-size: ${size}em`;
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        init();
        width = calculateWidth();
        height = calculateHeight();
        combinedStyle = calculateStyle();
        box = calculateBox();
      }
    }
    $$rendered = `${validate_component(Svg, "Svg").$$render(
      $$result,
      {
        label,
        width,
        height,
        box,
        style: combinedStyle,
        spin,
        flip,
        inverse,
        pulse,
        class: className
      },
      {},
      {
        default: () => {
          return `${slots.default ? slots.default({}) : `
    ${self ? `${self.paths ? `${each(self.paths, (path) => {
            return `${validate_component(Path, "Path").$$render($$result, { data: path }, {}, {})}`;
          })}` : ``}
      ${self.polygons ? `${each(self.polygons, (polygon) => {
            return `${validate_component(Polygon, "Polygon").$$render($$result, { data: polygon }, {}, {})}`;
          })}` : ``}
      ${self.raw ? `${validate_component(Raw, "Raw").$$render(
            $$result,
            { data: self },
            {
              data: ($$value) => {
                self = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}` : ``}
  `}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const arrowLeft = { "arrow-left": { width: 1536, height: 1792, paths: [{ d: "M1536 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z" }] } };
const LeftArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render($$result, { data: arrowLeft }, {}, {})}`;
});
const PageLayout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1ruwt2h h1,.wrapper.svelte-1ruwt2h h2,.wrapper.svelte-1ruwt2h h3,.wrapper.svelte-1ruwt2h h4{margin:2em 0 1em 0}.wrapper.svelte-1ruwt2h p{margin:1em 0 0 0}hr.svelte-1ruwt2h{border-style:double none none none;border-width:5px}header.svelte-1ruwt2h{line-height:1}nav.svelte-1ruwt2h{display:flex;flex-direction:row;flex-wrap:wrap}.site-title.svelte-1ruwt2h{flex:1;text-align:right;flex-basis:content;min-width:max-content}.links.svelte-1ruwt2h{flex:1;min-width:max-content}",
  map: null
};
const PageLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const current = global.location;
  const parent = current?.pathname.replace(new RegExp(`^${"/"}`), "").split("/").slice(0, -1).join("/");
  console.log({ base, current, parent });
  $$result.css.add(css);
  return `<header class="${"svelte-1ruwt2h"}"><nav class="${"svelte-1ruwt2h"}"><div class="${"links svelte-1ruwt2h"}"><a href="${"/"}">${validate_component(LeftArrow, "LeftArrow").$$render($$result, {}, {}, {})}
        [home]
      </a>
      ${parent ? `
        <a href="${"."}">${validate_component(LeftArrow, "LeftArrow").$$render($$result, {}, {}, {})}
          [up]    
        </a>` : ``}</div>
    <div class="${"site-title svelte-1ruwt2h"}">lumphammer projects
    </div></nav>
  
  <hr class="${"svelte-1ruwt2h"}"></header>

<div class="${"wrapper svelte-1ruwt2h"}">${slots.default ? slots.default({}) : ``}</div>

<hr class="${"svelte-1ruwt2h"}">`;
});
export {
  PageLayout as P
};
