function A(){}const _t=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function U(){return Object.create(null)}function C(t){t.forEach(Y)}function G(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Wt(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Jt(t,e,n,i,s,l){if(s){const r=Z(e,n,i,l);t.p(r,s)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t,e,n){return t.set(n),e}const tt=typeof window<"u";let pt=tt?()=>window.performance.now():()=>Date.now(),J=tt?t=>requestAnimationFrame(t):A;const S=new Set;function et(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&J(et)}function yt(t){let e;return S.size===0&&J(et),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let B=!1;function gt(){B=!0}function $t(){B=!1}function wt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:wt(1,s,h=>e[n[h]].claim_order,u))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(r[c],f)}}function bt(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=st("style");return Et(nt(t),e),e.sheet}function Et(t,e){return bt(t.head||t,e),e.sheet}function kt(t,e){if(B){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ut(t,e,n){B&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function it(t){t.parentNode&&t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function K(t){return document.createTextNode(t)}function Xt(){return K(" ")}function Yt(){return K("")}function Zt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function St(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t,e){for(const n in e)St(t,n,e[n])}function At(t){return Array.from(t.childNodes)}function Ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,s=!1){Ct(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ot(t,e,n,i){return rt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ee(t,e,n){return ot(t,e,n,st)}function ne(t,e,n){return ot(t,e,n,Nt)}function Mt(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function ie(t){return Mt(t," ")}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e){t.value=e??""}function oe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ce(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function le(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ae(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function fe(t,e){return new t(e)}const L=new Map;let q=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:vt(e),rules:{}};return L.set(t,n),n}function V(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${r(g,1-g)}}
`}const f=u+`100% {${r(n,1-n)}}
}`,_=`__svelte_${jt(f)}_${o}`,h=nt(t),{stylesheet:a,rules:d}=L.get(h)||Dt(h,t);d[_]||(d[_]=!0,a.insertRule(`@keyframes ${_} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,q+=1,_}function Tt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),q-=s,q||Pt())}function Pt(){J(()=>{q||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&it(e)}),L.clear())})}let T;function D(t){T=t}function Q(){if(!T)throw new Error("Function called outside component initialization");return T}function _e(t){Q().$$.on_mount.push(t)}function de(t){Q().$$.after_update.push(t)}function he(){const t=Q();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=ct(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}const N=[],X=[],O=[],I=[],lt=Promise.resolve();let W=!1;function ut(){W||(W=!0,lt.then(at))}function me(){return ut(),lt}function z(t){O.push(t)}function pe(t){I.push(t)}const H=new Set;let k=0;function at(){if(k!==0)return;const t=T;do{try{for(;k<N.length;){const e=N[k];k++,D(e),Ot(e.$$)}}catch(e){throw N.length=0,k=0,e}for(D(null),N.length=0,k=0;X.length;)X.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];H.has(n)||(H.add(n),n())}O.length=0}while(N.length);for(;I.length;)I.pop()();W=!1,H.clear(),D(t)}function Ot(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let j;function Rt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function F(t,e,n){t.dispatchEvent(ct(`${e?"intro":"outro"}${n}`))}const R=new Set;let x;function ye(){x={r:0,c:[],p:x}}function ge(){x.r||C(x.c),x=x.p}function ft(t,e){t&&t.i&&(R.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),x.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const qt={duration:0};function $e(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,u=null;function f(){u&&Tt(t,u)}function _(a,d){const p=a.b-r;return d*=Math.abs(p),{a:r,b:a.b,d:p,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:p=300,easing:y=_t,tick:g=A,css:b}=l||qt,E={start:pt()+d,b:a};a||(E.group=x,x.r+=1),o||c?c=E:(b&&(f(),u=V(t,r,a,p,d,y,b)),a&&g(0,1),o=_(E,p),z(()=>F(t,a,"start")),yt(v=>{if(c&&v>c.start&&(o=_(c,p),c=null,F(t,o.b,"start"),b&&(f(),u=V(t,r,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(r=o.b,1-r),F(t,o.b,"end"),c||(o.b?f():--o.group.r||C(o.group.c)),o=null;else if(v>=o.start){const M=v-o.start;r=o.a+o.d*y(M/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(a){G(l)?Rt().then(()=>{l=l(s),h(a)}):h(a)},end(){f(),o=c=null}}}function we(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function xe(t,e,n,i,s,l,r,o,c,u,f,_){let h=t.length,a=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,b=new Map;for(d=a;d--;){const m=_(s,l,d),$=n(m);let w=r.get($);w?i&&w.p(m,e):(w=u($,m),w.c()),g.set($,y[d]=w),$ in p&&b.set($,Math.abs(d-p[$]))}const E=new Set,v=new Set;function M(m){ft(m,1),m.m(o,f),r.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],$=t[h-1],w=m.key,P=$.key;m===$?(f=m.first,h--,a--):g.has(P)?!r.has(w)||E.has(w)?M(m):v.has(P)?h--:b.get(w)>b.get(P)?(v.add(w),M(m)):(E.add(P),h--):(c($,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;a;)M(y[a-1]);return y}function be(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ve(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ee(t){t&&t.c()}function ke(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||z(()=>{const r=t.$$.on_mount.map(Y).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...r):C(r),t.$$.on_mount=[]}),l.forEach(z)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(N.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,i,s,l,r,o=[-1]){const c=T;D(t);const u=t.$$={fragment:null,ctx:[],props:l,update:A,not_equal:s,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:U(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(_,h,...a)=>{const d=a.length?a[0]:h;return u.ctx&&s(u.ctx[_],u.ctx[_]=d)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](d),f&&Ht(t,_)),h}):[],u.update(),f=!0,C(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){gt();const _=At(e.target);u.fragment&&u.fragment.l(_),_.forEach(it)}else u.fragment&&u.fragment.c();e.intro&&ft(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),$t(),at()}D(c)}class Se{$destroy(){Bt(this,1),this.$destroy=A}$on(e,n){if(!G(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ce as $,Bt as A,me as B,A as C,kt as D,Wt as E,ae as F,Jt as G,Kt as H,Gt as I,It as J,re as K,Zt as L,C as M,dt as N,Nt as O,ne as P,te as Q,be as R,Se as S,ue as T,Vt as U,ve as V,pe as W,_t as X,he as Y,z as Z,$e as _,Xt as a,xe as a0,Qt as a1,le as a2,we as a3,Ut as b,ie as c,ge as d,Yt as e,ft as f,ye as g,it as h,Ne as i,de as j,st as k,ee as l,At as m,St as n,_e as o,oe as p,K as q,Mt as r,Ft as s,Lt as t,se as u,X as v,fe as w,Ee as x,ke as y,zt as z};
