import{b as he,i as ge,a as ee,d as _e,c as pe}from"./BZcIB6wP.js";import{i as me,a as ne}from"./D2ANIPUw.js";import{E as oe,A as p,F as Y,k as B,H as Ee,ac as we,I as re,J as O,K as L,B as z,ad as ke,ae as Ce,af as ae,z as Te,x as V,ag as A,y as J,ah as Ae,D as Ne,a0 as be,ai as Se,aj as U,ak as xe,al as Ie,m as ze,W as ie,am as De,V as Me,q as ue,w as de,an as G,ao as Re,ap as Fe,C as Oe,v as ye,aq as ce,ar as He,as as We,at as ve,au as Be,av as Le,G as qe,aw as Pe,ax as Ve,N as Ye,i as Ge,p as Je,a as Ke,ay as R,u as fe,c as Ue,f as Xe,s as Qe,r as Ze,ab as $e,az as je}from"./Bg69rYhj.js";import{B as en,l as se,p as F}from"./C7yTT3uS.js";function nn(e,n){return n}function rn(e,n,t){for(var o=[],c=n.length,l,i=n.length,f=0;f<c;f++){let _=n[f];de(_,()=>{if(l){if(l.pending.delete(_),l.done.add(_),l.pending.size===0){var u=e.outrogroups;K(e,U(l.done)),u.delete(l),u.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var s=o.length===0&&t!==null;if(s){var v=t,a=v.parentNode;Fe(a),a.append(v),e.items.clear()}K(e,n,!s)}else l={pending:new Set(n),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(l)}function K(e,n,t=!0){var o;if(e.pending.size>0){o=new Set;for(const i of e.pending.values())for(const f of i)o.add(e.items.get(f).e)}for(var c=0;c<n.length;c++){var l=n[c];if(o!=null&&o.has(l)){l.f|=A;const i=document.createDocumentFragment();Oe(l,i)}else ye(n[c],t)}}var te;function an(e,n,t,o,c,l=null){var i=e,f=new Map,s=(n&ve)!==0;if(s){var v=e;i=p?O(ce(v)):v.appendChild(V())}p&&Y();var a=null,_=be(()=>{var h=t();return Se(h)?h:h==null?[]:U(h)}),u,g=new Map,m=!0;function k(h){(T.effect.f&Me)===0&&(T.pending.delete(h),T.fallback=a,fn(T,u,i,n,o),a!==null&&(u.length===0?(a.f&A)===0?ue(a):(a.f^=A,W(a,null,i)):de(a,()=>{a=null})))}function r(h){T.pending.delete(h)}var d=oe(()=>{u=B(_);var h=u.length;let E=!1;if(p){var y=Ee(i)===we;y!==(h===0)&&(i=re(),O(i),L(!1),E=!0)}for(var b=new Set,w=Te,D=Ne(),S=0;S<h;S+=1){p&&z.nodeType===ke&&z.data===Ce&&(i=z,E=!0,L(!1));var M=u[S],I=o(M,S),C=m?null:f.get(I);C?(C.v&&ae(C.v,M),C.i&&ae(C.i,S),D&&w.unskip_effect(C.e)):(C=sn(f,m?i:te??(te=V()),M,I,S,c,n,t),m||(C.e.f|=A),f.set(I,C)),b.add(I)}if(h===0&&l&&!a&&(m?a=J(()=>l(i)):(a=J(()=>l(te??(te=V()))),a.f|=A)),h>b.size&&Ae(),p&&h>0&&O(re()),!m)if(g.set(w,b),D){for(const[q,P]of f)b.has(q)||w.skip_effect(P.e);w.oncommit(k),w.ondiscard(r)}else k(w);E&&L(!0),B(_)}),T={effect:d,items:f,pending:g,outrogroups:null,fallback:a};m=!1,p&&(i=z)}function H(e){for(;e!==null&&(e.f&Re)===0;)e=e.next;return e}function fn(e,n,t,o,c){var M,I,C,q,P,X,Q,Z,$;var l=(o&Be)!==0,i=n.length,f=e.items,s=H(e.effect.first),v,a=null,_,u=[],g=[],m,k,r,d;if(l)for(d=0;d<i;d+=1)m=n[d],k=c(m,d),r=f.get(k).e,(r.f&A)===0&&((I=(M=r.nodes)==null?void 0:M.a)==null||I.measure(),(_??(_=new Set)).add(r));for(d=0;d<i;d+=1){if(m=n[d],k=c(m,d),r=f.get(k).e,e.outrogroups!==null)for(const N of e.outrogroups)N.pending.delete(r),N.done.delete(r);if((r.f&G)!==0&&(ue(r),l&&((q=(C=r.nodes)==null?void 0:C.a)==null||q.unfix(),(_??(_=new Set)).delete(r))),(r.f&A)!==0)if(r.f^=A,r===s)W(r,null,t);else{var T=a?a.next:s;r===e.effect.last&&(e.effect.last=r.prev),r.prev&&(r.prev.next=r.next),r.next&&(r.next.prev=r.prev),x(e,a,r),x(e,r,T),W(r,T,t),a=r,u=[],g=[],s=H(a.next);continue}if(r!==s){if(v!==void 0&&v.has(r)){if(u.length<g.length){var h=g[0],E;a=h.prev;var y=u[0],b=u[u.length-1];for(E=0;E<u.length;E+=1)W(u[E],h,t);for(E=0;E<g.length;E+=1)v.delete(g[E]);x(e,y.prev,b.next),x(e,a,y),x(e,b,h),s=h,a=b,d-=1,u=[],g=[]}else v.delete(r),W(r,s,t),x(e,r.prev,r.next),x(e,r,a===null?e.effect.first:a.next),x(e,a,r),a=r;continue}for(u=[],g=[];s!==null&&s!==r;)(v??(v=new Set)).add(s),g.push(s),s=H(s.next);if(s===null)continue}(r.f&A)===0&&u.push(r),a=r,s=H(r.next)}if(e.outrogroups!==null){for(const N of e.outrogroups)N.pending.size===0&&(K(e,U(N.done)),(P=e.outrogroups)==null||P.delete(N));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||v!==void 0){var w=[];if(v!==void 0)for(r of v)(r.f&G)===0&&w.push(r);for(;s!==null;)(s.f&G)===0&&s!==e.fallback&&w.push(s),s=H(s.next);var D=w.length;if(D>0){var S=(o&ve)!==0&&i===0?t:null;if(l){for(d=0;d<D;d+=1)(Q=(X=w[d].nodes)==null?void 0:X.a)==null||Q.measure();for(d=0;d<D;d+=1)($=(Z=w[d].nodes)==null?void 0:Z.a)==null||$.fix()}rn(e,w,S)}}l&&He(()=>{var N,j;if(_!==void 0)for(r of _)(j=(N=r.nodes)==null?void 0:N.a)==null||j.apply()})}function sn(e,n,t,o,c,l,i,f){var s=(i&xe)!==0?(i&Ie)===0?ze(t,!1,!1):ie(t):null,v=(i&De)!==0?ie(c):null;return{v:s,i:v,e:J(()=>(l(n,s??t,v??c,f),()=>{e.delete(o)}))}}function W(e,n,t){if(e.nodes)for(var o=e.nodes.start,c=e.nodes.end,l=n&&(n.f&A)===0?n.nodes.start:t;o!==null;){var i=We(o);if(l.before(o),o===c)return;o=i}}function x(e,n,t){n===null?e.effect.first=t:n.next=t,t===null?e.effect.last=n:t.prev=n}function tn(e,n,t,o,c){var f;p&&Y();var l=(f=n.$$slots)==null?void 0:f[t],i=!1;l===!0&&(l=n.children,i=!0),l===void 0||l(e,i?()=>o:o)}function ln(e,n,t,o,c,l){let i=p;p&&Y();var f=null;p&&z.nodeType===Le&&(f=z,Y());var s=p?z:e,v=new en(s,!1);oe(()=>{const a=n()||null;var _=Ve;if(a===null){v.ensure(null,null);return}return v.ensure(a,u=>{if(a){if(f=p?f:Pe(a,_),he(f,f),o){p&&ge(a)&&f.append(document.createComment(""));var g=p?ce(f):f.appendChild(V());p&&(g===null?L(!1):O(g)),o(f,g)}Ye.nodes.end=f,u.before(f)}p&&O(u)}),()=>{}},qe),Ge(()=>{}),i&&(L(!0),O(s))}/**
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
 */const le=(...e)=>e.filter((n,t,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===t).join(" ").trim();var dn=_e("<svg><!><!></svg>");function _n(e,n){const t=se(n,["children","$$slots","$$events","$$legacy"]),o=se(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Je(n,!1);let c=F(n,"name",8,void 0),l=F(n,"color",8,"currentColor"),i=F(n,"size",8,24),f=F(n,"strokeWidth",8,2),s=F(n,"absoluteStrokeWidth",8,!1),v=F(n,"iconNode",24,()=>[]);me();var a=dn();ne(a,(g,m,k)=>({...on,...g,...o,width:i(),height:i(),stroke:l(),"stroke-width":m,class:k}),[()=>un(o)?void 0:{"aria-hidden":"true"},()=>(R(s()),R(f()),R(i()),fe(()=>s()?Number(f())*24/Number(i()):f())),()=>(R(le),R(c()),R(t),fe(()=>le("lucide-icon","lucide",c()?`lucide-${c()}`:"",t.class)))]);var _=Ue(a);an(_,1,v,nn,(g,m)=>{var k=$e(()=>je(B(m),2));let r=()=>B(k)[0],d=()=>B(k)[1];var T=pe(),h=Xe(T);ln(h,r,!0,(E,y)=>{ne(E,()=>({...d()}))}),ee(g,T)});var u=Qe(_);tn(u,n,"default",{}),Ze(a),ee(e,a),Ke()}export{_n as I,an as e,nn as i,tn as s};
