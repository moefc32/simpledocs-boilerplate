import{m as c,f as a,o as d,d as m,b as r,q as g}from"./D_pRvsFy.js";function _(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function h(n,e,s){if(n==null)return e(void 0),c;const u=a(()=>n.subscribe(e,s));return u.unsubscribe?()=>u.unsubscribe():u}const i=[];function k(n,e=c){let s=null;const u=new Set;function f(o){if(d(n,o)&&(n=o,s)){const l=!i.length;for(const t of u)t[1](),i.push(t,n);if(l){for(let t=0;t<i.length;t+=2)i[t][0](i[t+1]);i.length=0}}}function b(o){f(o(n))}function p(o,l=c){const t=[o,l];return u.add(t),u.size===1&&(s=e(f,b)||c),o(n),()=>{u.delete(t),u.size===0&&s&&(s(),s=null)}}return{set:f,update:b,subscribe:p}}function x(n){let e;return h(n,s=>e=s)(),e}function y(n){r===null&&_(),g&&r.l!==null?q(r).m.push(n):m(()=>{const e=a(n);if(typeof e=="function")return e})}function z(n){r===null&&_(),y(()=>()=>a(n))}function q(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}export{z as a,x as g,y as o,h as s,k as w};
