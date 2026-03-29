import{b as he,i as ge,a as ee,d as pe,c as _e}from"./M9uyuK_Z.js";import{i as me}from"./C9f6b2EL.js";import{K as oe,G as _,L as Y,i as W,N as Ee,ag as we,O as ne,P as F,Q as L,H as M,ah as ke,ai as Ce,aj as re,F as Te,D as V,ak as A,E as J,al as Ae,J as Ne,a5 as Se,am as be,an as Q,ao as xe,ap as Ie,y as Me,a1 as ae,aq as De,a0 as Re,A as ue,C as de,ar as G,as as ze,at as Oe,I as Fe,B as ye,au as ce,av as He,aw as Be,ax as ve,ay as We,az as Le,M as Pe,aA as qe,aB as Ve,T as Ye,w as Ge,p as Je,a as Ke,j as z,f as ie,c as Qe,m as Ue,s as Xe,r as Ze,af as $e,aC as je}from"./C0TeqGVL.js";import{B as en,l as fe,p as O}from"./LSYeQvCu.js";import{a as se}from"./DLjWQ8-c.js";function nn(e,n){return n}function rn(e,n,t){for(var o=[],c=n.length,l,i=n.length,f=0;f<c;f++){let p=n[f];de(p,()=>{if(l){if(l.pending.delete(p),l.done.add(p),l.pending.size===0){var u=e.outrogroups;K(e,Q(l.done)),u.delete(l),u.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var s=o.length===0&&t!==null;if(s){var v=t,a=v.parentNode;Oe(a),a.append(v),e.items.clear()}K(e,n,!s)}else l={pending:new Set(n),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(l)}function K(e,n,t=!0){var o;if(e.pending.size>0){o=new Set;for(const i of e.pending.values())for(const f of i)o.add(e.items.get(f).e)}for(var c=0;c<n.length;c++){var l=n[c];if(o!=null&&o.has(l)){l.f|=A;const i=document.createDocumentFragment();Fe(l,i)}else ye(n[c],t)}}var te;function an(e,n,t,o,c,l=null){var i=e,f=new Map,s=(n&ve)!==0;if(s){var v=e;i=_?F(ce(v)):v.appendChild(V())}_&&Y();var a=null,p=Se(()=>{var h=t();return be(h)?h:h==null?[]:Q(h)}),u,g=new Map,m=!0;function k(h){(T.effect.f&Re)===0&&(T.pending.delete(h),T.fallback=a,fn(T,u,i,n,o),a!==null&&(u.length===0?(a.f&A)===0?ue(a):(a.f^=A,B(a,null,i)):de(a,()=>{a=null})))}function r(h){T.pending.delete(h)}var d=oe(()=>{u=W(p);var h=u.length;let E=!1;if(_){var y=Ee(i)===we;y!==(h===0)&&(i=ne(),F(i),L(!1),E=!0)}for(var S=new Set,w=Te,D=Ne(),b=0;b<h;b+=1){_&&M.nodeType===ke&&M.data===Ce&&(i=M,E=!0,L(!1));var R=u[b],I=o(R,b),C=m?null:f.get(I);C?(C.v&&re(C.v,R),C.i&&re(C.i,b),D&&w.unskip_effect(C.e)):(C=sn(f,m?i:te??(te=V()),R,I,b,c,n,t),m||(C.e.f|=A),f.set(I,C)),S.add(I)}if(h===0&&l&&!a&&(m?a=J(()=>l(i)):(a=J(()=>l(te??(te=V()))),a.f|=A)),h>S.size&&Ae(),_&&h>0&&F(ne()),!m)if(g.set(w,S),D){for(const[P,q]of f)S.has(P)||w.skip_effect(q.e);w.oncommit(k),w.ondiscard(r)}else k(w);E&&L(!0),W(p)}),T={effect:d,items:f,pending:g,outrogroups:null,fallback:a};m=!1,_&&(i=M)}function H(e){for(;e!==null&&(e.f&ze)===0;)e=e.next;return e}function fn(e,n,t,o,c){var R,I,C,P,q,U,X,Z,$;var l=(o&We)!==0,i=n.length,f=e.items,s=H(e.effect.first),v,a=null,p,u=[],g=[],m,k,r,d;if(l)for(d=0;d<i;d+=1)m=n[d],k=c(m,d),r=f.get(k).e,(r.f&A)===0&&((I=(R=r.nodes)==null?void 0:R.a)==null||I.measure(),(p??(p=new Set)).add(r));for(d=0;d<i;d+=1){if(m=n[d],k=c(m,d),r=f.get(k).e,e.outrogroups!==null)for(const N of e.outrogroups)N.pending.delete(r),N.done.delete(r);if((r.f&G)!==0&&(ue(r),l&&((P=(C=r.nodes)==null?void 0:C.a)==null||P.unfix(),(p??(p=new Set)).delete(r))),(r.f&A)!==0)if(r.f^=A,r===s)B(r,null,t);else{var T=a?a.next:s;r===e.effect.last&&(e.effect.last=r.prev),r.prev&&(r.prev.next=r.next),r.next&&(r.next.prev=r.prev),x(e,a,r),x(e,r,T),B(r,T,t),a=r,u=[],g=[],s=H(a.next);continue}if(r!==s){if(v!==void 0&&v.has(r)){if(u.length<g.length){var h=g[0],E;a=h.prev;var y=u[0],S=u[u.length-1];for(E=0;E<u.length;E+=1)B(u[E],h,t);for(E=0;E<g.length;E+=1)v.delete(g[E]);x(e,y.prev,S.next),x(e,a,y),x(e,S,h),s=h,a=S,d-=1,u=[],g=[]}else v.delete(r),B(r,s,t),x(e,r.prev,r.next),x(e,r,a===null?e.effect.first:a.next),x(e,a,r),a=r;continue}for(u=[],g=[];s!==null&&s!==r;)(v??(v=new Set)).add(s),g.push(s),s=H(s.next);if(s===null)continue}(r.f&A)===0&&u.push(r),a=r,s=H(r.next)}if(e.outrogroups!==null){for(const N of e.outrogroups)N.pending.size===0&&(K(e,Q(N.done)),(q=e.outrogroups)==null||q.delete(N));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||v!==void 0){var w=[];if(v!==void 0)for(r of v)(r.f&G)===0&&w.push(r);for(;s!==null;)(s.f&G)===0&&s!==e.fallback&&w.push(s),s=H(s.next);var D=w.length;if(D>0){var b=(o&ve)!==0&&i===0?t:null;if(l){for(d=0;d<D;d+=1)(X=(U=w[d].nodes)==null?void 0:U.a)==null||X.measure();for(d=0;d<D;d+=1)($=(Z=w[d].nodes)==null?void 0:Z.a)==null||$.fix()}rn(e,w,b)}}l&&He(()=>{var N,j;if(p!==void 0)for(r of p)(j=(N=r.nodes)==null?void 0:N.a)==null||j.apply()})}function sn(e,n,t,o,c,l,i,f){var s=(i&xe)!==0?(i&Ie)===0?Me(t,!1,!1):ae(t):null,v=(i&De)!==0?ae(c):null;return{v:s,i:v,e:J(()=>(l(n,s??t,v??c,f),()=>{e.delete(o)}))}}function B(e,n,t){if(e.nodes)for(var o=e.nodes.start,c=e.nodes.end,l=n&&(n.f&A)===0?n.nodes.start:t;o!==null;){var i=Be(o);if(l.before(o),o===c)return;o=i}}function x(e,n,t){n===null?e.effect.first=t:n.next=t,t===null?e.effect.last=n:t.prev=n}function tn(e,n,t,o,c){var f;_&&Y();var l=(f=n.$$slots)==null?void 0:f[t],i=!1;l===!0&&(l=n.children,i=!0),l===void 0||l(e,i?()=>o:o)}function ln(e,n,t,o,c,l){let i=_;_&&Y();var f=null;_&&M.nodeType===Le&&(f=M,Y());var s=_?M:e,v=new en(s,!1);oe(()=>{const a=n()||null;var p=Ve;if(a===null){v.ensure(null,null);return}return v.ensure(a,u=>{if(a){if(f=_?f:qe(a,p),he(f,f),o){_&&ge(a)&&f.append(document.createComment(""));var g=_?ce(f):f.appendChild(V());_&&(g===null?L(!1):F(g)),o(f,g)}Ye.nodes.end=f,u.before(f)}_&&F(u)}),()=>{}},Pe),Ge(()=>{}),i&&(L(!0),F(s))}/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const on={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const un=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const le=(...e)=>e.filter((n,t,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===t).join(" ").trim();var dn=pe("<svg><!><!></svg>");function _n(e,n){const t=fe(n,["children","$$slots","$$events","$$legacy"]),o=fe(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Je(n,!1);let c=O(n,"name",8,void 0),l=O(n,"color",8,"currentColor"),i=O(n,"size",8,24),f=O(n,"strokeWidth",8,2),s=O(n,"absoluteStrokeWidth",8,!1),v=O(n,"iconNode",24,()=>[]);me();var a=dn();se(a,(g,m,k)=>({...on,...g,...o,width:i(),height:i(),stroke:l(),"stroke-width":m,class:k}),[()=>un(o)?void 0:{"aria-hidden":"true"},()=>(z(s()),z(f()),z(i()),ie(()=>s()?Number(f())*24/Number(i()):f())),()=>(z(le),z(c()),z(t),ie(()=>le("lucide-icon","lucide",c()?`lucide-${c()}`:"",t.class)))]);var p=Qe(a);an(p,1,v,nn,(g,m)=>{var k=$e(()=>je(W(m),2));let r=()=>W(k)[0],d=()=>W(k)[1];var T=_e(),h=Ue(T);ln(h,r,!0,(E,y)=>{se(E,()=>({...d()}))}),ee(g,T)});var u=Xe(p);tn(u,n,"default",{}),Ze(a),ee(e,a),Ke()}export{_n as I,an as e,nn as i,tn as s};
