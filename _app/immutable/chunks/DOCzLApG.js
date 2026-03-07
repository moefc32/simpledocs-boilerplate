import{b as he,i as _e,a as ee,d as ge,c as pe}from"./D-iZ_dOH.js";import{i as me}from"./D29YnwSh.js";import{G as oe,C as p,H as Y,i as W,K as Ee,ah as we,L as ne,M as O,N as L,D as M,ai as ke,aj as Ae,ak as re,B as Ce,z as V,al as T,A as U,am as Te,F as Ne,a5 as Se,an as be,ao as K,ap as xe,aq as Ie,U as Me,a1 as ae,ar as Re,a0 as ze,w as ue,y as de,I as G,as as De,at as Fe,E as Oe,x as ye,au as ce,Q as He,av as Be,aw as ve,ax as We,ay as Le,J as Pe,az as qe,aA as Ve,_ as Ye,R as Ge,p as Ue,a as Je,j as D,f as ie,c as Ke,m as Qe,s as Xe,r as Ze,ag as $e,aB as je}from"./E4UaktVC.js";import{B as en,l as fe,p as F}from"./Bte8RW3y.js";import{a as se}from"./BQR_6r2F.js";function nn(e,n){return n}function rn(e,n,t){for(var o=[],c=n.length,l,i=n.length,f=0;f<c;f++){let g=n[f];de(g,()=>{if(l){if(l.pending.delete(g),l.done.add(g),l.pending.size===0){var u=e.outrogroups;J(e,K(l.done)),u.delete(l),u.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var s=o.length===0&&t!==null;if(s){var v=t,a=v.parentNode;Fe(a),a.append(v),e.items.clear()}J(e,n,!s)}else l={pending:new Set(n),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(l)}function J(e,n,t=!0){var o;if(e.pending.size>0){o=new Set;for(const i of e.pending.values())for(const f of i)o.add(e.items.get(f).e)}for(var c=0;c<n.length;c++){var l=n[c];if(o!=null&&o.has(l)){l.f|=T;const i=document.createDocumentFragment();Oe(l,i)}else ye(n[c],t)}}var te;function an(e,n,t,o,c,l=null){var i=e,f=new Map,s=(n&ve)!==0;if(s){var v=e;i=p?O(ce(v)):v.appendChild(V())}p&&Y();var a=null,g=Se(()=>{var h=t();return be(h)?h:h==null?[]:K(h)}),u,_=new Map,m=!0;function k(h){(C.effect.f&ze)===0&&(C.pending.delete(h),C.fallback=a,fn(C,u,i,n,o),a!==null&&(u.length===0?(a.f&T)===0?ue(a):(a.f^=T,B(a,null,i)):de(a,()=>{a=null})))}function r(h){C.pending.delete(h)}var d=oe(()=>{u=W(g);var h=u.length;let E=!1;if(p){var y=Ee(i)===we;y!==(h===0)&&(i=ne(),O(i),L(!1),E=!0)}for(var S=new Set,w=Ce,R=Ne(),b=0;b<h;b+=1){p&&M.nodeType===ke&&M.data===Ae&&(i=M,E=!0,L(!1));var z=u[b],I=o(z,b),A=m?null:f.get(I);A?(A.v&&re(A.v,z),A.i&&re(A.i,b),R&&w.unskip_effect(A.e)):(A=sn(f,m?i:te??(te=V()),z,I,b,c,n,t),m||(A.e.f|=T),f.set(I,A)),S.add(I)}if(h===0&&l&&!a&&(m?a=U(()=>l(i)):(a=U(()=>l(te??(te=V()))),a.f|=T)),h>S.size&&Te(),p&&h>0&&O(ne()),!m)if(_.set(w,S),R){for(const[P,q]of f)S.has(P)||w.skip_effect(q.e);w.oncommit(k),w.ondiscard(r)}else k(w);E&&L(!0),W(g)}),C={effect:d,items:f,pending:_,outrogroups:null,fallback:a};m=!1,p&&(i=M)}function H(e){for(;e!==null&&(e.f&De)===0;)e=e.next;return e}function fn(e,n,t,o,c){var z,I,A,P,q,Q,X,Z,$;var l=(o&We)!==0,i=n.length,f=e.items,s=H(e.effect.first),v,a=null,g,u=[],_=[],m,k,r,d;if(l)for(d=0;d<i;d+=1)m=n[d],k=c(m,d),r=f.get(k).e,(r.f&T)===0&&((I=(z=r.nodes)==null?void 0:z.a)==null||I.measure(),(g??(g=new Set)).add(r));for(d=0;d<i;d+=1){if(m=n[d],k=c(m,d),r=f.get(k).e,e.outrogroups!==null)for(const N of e.outrogroups)N.pending.delete(r),N.done.delete(r);if((r.f&T)!==0)if(r.f^=T,r===s)B(r,null,t);else{var C=a?a.next:s;r===e.effect.last&&(e.effect.last=r.prev),r.prev&&(r.prev.next=r.next),r.next&&(r.next.prev=r.prev),x(e,a,r),x(e,r,C),B(r,C,t),a=r,u=[],_=[],s=H(a.next);continue}if((r.f&G)!==0&&(ue(r),l&&((P=(A=r.nodes)==null?void 0:A.a)==null||P.unfix(),(g??(g=new Set)).delete(r))),r!==s){if(v!==void 0&&v.has(r)){if(u.length<_.length){var h=_[0],E;a=h.prev;var y=u[0],S=u[u.length-1];for(E=0;E<u.length;E+=1)B(u[E],h,t);for(E=0;E<_.length;E+=1)v.delete(_[E]);x(e,y.prev,S.next),x(e,a,y),x(e,S,h),s=h,a=S,d-=1,u=[],_=[]}else v.delete(r),B(r,s,t),x(e,r.prev,r.next),x(e,r,a===null?e.effect.first:a.next),x(e,a,r),a=r;continue}for(u=[],_=[];s!==null&&s!==r;)(v??(v=new Set)).add(s),_.push(s),s=H(s.next);if(s===null)continue}(r.f&T)===0&&u.push(r),a=r,s=H(r.next)}if(e.outrogroups!==null){for(const N of e.outrogroups)N.pending.size===0&&(J(e,K(N.done)),(q=e.outrogroups)==null||q.delete(N));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||v!==void 0){var w=[];if(v!==void 0)for(r of v)(r.f&G)===0&&w.push(r);for(;s!==null;)(s.f&G)===0&&s!==e.fallback&&w.push(s),s=H(s.next);var R=w.length;if(R>0){var b=(o&ve)!==0&&i===0?t:null;if(l){for(d=0;d<R;d+=1)(X=(Q=w[d].nodes)==null?void 0:Q.a)==null||X.measure();for(d=0;d<R;d+=1)($=(Z=w[d].nodes)==null?void 0:Z.a)==null||$.fix()}rn(e,w,b)}}l&&He(()=>{var N,j;if(g!==void 0)for(r of g)(j=(N=r.nodes)==null?void 0:N.a)==null||j.apply()})}function sn(e,n,t,o,c,l,i,f){var s=(i&xe)!==0?(i&Ie)===0?Me(t,!1,!1):ae(t):null,v=(i&Re)!==0?ae(c):null;return{v:s,i:v,e:U(()=>(l(n,s??t,v??c,f),()=>{e.delete(o)}))}}function B(e,n,t){if(e.nodes)for(var o=e.nodes.start,c=e.nodes.end,l=n&&(n.f&T)===0?n.nodes.start:t;o!==null;){var i=Be(o);if(l.before(o),o===c)return;o=i}}function x(e,n,t){n===null?e.effect.first=t:n.next=t,t===null?e.effect.last=n:t.prev=n}function tn(e,n,t,o,c){var f;p&&Y();var l=(f=n.$$slots)==null?void 0:f[t],i=!1;l===!0&&(l=n.children,i=!0),l===void 0||l(e,i?()=>o:o)}function ln(e,n,t,o,c,l){let i=p;p&&Y();var f=null;p&&M.nodeType===Le&&(f=M,Y());var s=p?M:e,v=new en(s,!1);oe(()=>{const a=n()||null;var g=Ve;if(a===null){v.ensure(null,null);return}return v.ensure(a,u=>{if(a){if(f=p?f:qe(a,g),he(f,f),o){p&&_e(a)&&f.append(document.createComment(""));var _=p?ce(f):f.appendChild(V());p&&(_===null?L(!1):O(_)),o(f,_)}Ye.nodes.end=f,u.before(f)}p&&O(u)}),()=>{}},Pe),Ge(()=>{}),i&&(L(!0),O(s))}/**
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
 */const le=(...e)=>e.filter((n,t,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===t).join(" ").trim();var dn=ge("<svg><!><!></svg>");function pn(e,n){const t=fe(n,["children","$$slots","$$events","$$legacy"]),o=fe(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ue(n,!1);let c=F(n,"name",8,void 0),l=F(n,"color",8,"currentColor"),i=F(n,"size",8,24),f=F(n,"strokeWidth",8,2),s=F(n,"absoluteStrokeWidth",8,!1),v=F(n,"iconNode",24,()=>[]);me();var a=dn();se(a,(_,m,k)=>({...on,..._,...o,width:i(),height:i(),stroke:l(),"stroke-width":m,class:k}),[()=>un(o)?void 0:{"aria-hidden":"true"},()=>(D(s()),D(f()),D(i()),ie(()=>s()?Number(f())*24/Number(i()):f())),()=>(D(le),D(c()),D(t),ie(()=>le("lucide-icon","lucide",c()?`lucide-${c()}`:"",t.class)))]);var g=Ke(a);an(g,1,v,nn,(_,m)=>{var k=$e(()=>je(W(m),2));let r=()=>W(k)[0],d=()=>W(k)[1];var C=pe(),h=Qe(C);ln(h,r,!0,(E,y)=>{se(E,()=>({...d()}))}),ee(_,C)});var u=Xe(g);tn(u,n,"default",{}),Ze(a),ee(e,a),Je()}export{pn as I,an as e,nn as i,tn as s};
