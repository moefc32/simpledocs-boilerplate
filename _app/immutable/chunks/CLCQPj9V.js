import{b as _e,i as he,a as ee,d as pe,c as ge}from"./vcfxwmUZ.js";import{i as me}from"./i4vs1WVr.js";import{G as oe,C as p,H as V,i as y,J as Ee,L as we,M as re,N as D,O as B,D as I,ah as ke,ai as Ae,aj as ae,w as Ce,A as P,ak as T,B as G,al as Te,F as Ne,a6 as be,am as Se,an as J,ao as xe,ap as Ie,V as Me,a2 as ne,aq as Re,x as ue,z as de,ar as q,as as ze,at as Oe,y as De,au as Fe,av as ce,aw as ve,R as He,ax as ye,ay as Be,I as We,az as Le,aA as Pe,a0 as Ve,T as qe,p as Ge,a as Ye,j as z,f as ie,c as Je,s as Ue,r as Xe,m as Ke,ag as Qe,aB as Ze}from"./CY0zLpua.js";import{B as $e,l as se,p as O}from"./CwuhY6Fp.js";import{a as fe}from"./Duk-V3Mu.js";function je(e,r){return r}function er(e,r,i){for(var u=[],_=r.length,o,f=r.length,t=0;t<_;t++){let h=r[t];de(h,()=>{if(o){if(o.pending.delete(h),o.done.add(h),o.pending.size===0){var d=e.outrogroups;Y(J(o.done)),d.delete(o),d.size===0&&(e.outrogroups=null)}}else f-=1},!1)}if(f===0){var s=u.length===0&&i!==null;if(s){var v=i,n=v.parentNode;Oe(n),n.append(v),e.items.clear()}Y(r,!s)}else o={pending:new Set(r),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function Y(e,r=!0){for(var i=0;i<e.length;i++)De(e[i],r)}var te;function rr(e,r,i,u,_,o=null){var f=e,t=new Map,s=(r&ve)!==0;if(s){var v=e;f=p?D(ce(v)):v.appendChild(P())}p&&V();var n=null,h=be(()=>{var l=i();return Se(l)?l:l==null?[]:J(l)}),d,c=!0;function w(){a.fallback=n,ar(a,d,f,r,u),n!==null&&(d.length===0?(n.f&T)===0?ue(n):(n.f^=T,H(n,null,f)):de(n,()=>{n=null}))}var k=oe(()=>{d=y(h);var l=d.length;let A=!1;if(p){var N=Ee(f)===we;N!==(l===0)&&(f=re(),D(f),B(!1),A=!0)}for(var g=new Set,b=Ce,M=Ne(),m=0;m<l;m+=1){p&&I.nodeType===ke&&I.data===Ae&&(f=I,A=!0,B(!1));var x=d[m],R=u(x,m),E=c?null:t.get(R);E?(E.v&&ae(E.v,x),E.i&&ae(E.i,m),M&&b.unskip_effect(E.e)):(E=nr(t,c?f:te??(te=P()),x,R,m,_,r,i),c||(E.e.f|=T),t.set(R,E)),g.add(R)}if(l===0&&o&&!n&&(c?n=G(()=>o(f)):(n=G(()=>o(te??(te=P()))),n.f|=T)),l>g.size&&Te(),p&&l>0&&D(re()),!c)if(M){for(const[W,L]of t)g.has(W)||b.skip_effect(L.e);b.oncommit(w),b.ondiscard(()=>{})}else w();A&&B(!0),y(h)}),a={effect:k,items:t,outrogroups:null,fallback:n};c=!1,p&&(f=I)}function F(e){for(;e!==null&&(e.f&ze)===0;)e=e.next;return e}function ar(e,r,i,u,_){var E,W,L,U,X,K,Q,Z,$;var o=(u&ye)!==0,f=r.length,t=e.items,s=F(e.effect.first),v,n=null,h,d=[],c=[],w,k,a,l;if(o)for(l=0;l<f;l+=1)w=r[l],k=_(w,l),a=t.get(k).e,(a.f&T)===0&&((W=(E=a.nodes)==null?void 0:E.a)==null||W.measure(),(h??(h=new Set)).add(a));for(l=0;l<f;l+=1){if(w=r[l],k=_(w,l),a=t.get(k).e,e.outrogroups!==null)for(const C of e.outrogroups)C.pending.delete(a),C.done.delete(a);if((a.f&T)!==0)if(a.f^=T,a===s)H(a,null,i);else{var A=n?n.next:s;a===e.effect.last&&(e.effect.last=a.prev),a.prev&&(a.prev.next=a.next),a.next&&(a.next.prev=a.prev),S(e,n,a),S(e,a,A),H(a,A,i),n=a,d=[],c=[],s=F(n.next);continue}if((a.f&q)!==0&&(ue(a),o&&((U=(L=a.nodes)==null?void 0:L.a)==null||U.unfix(),(h??(h=new Set)).delete(a))),a!==s){if(v!==void 0&&v.has(a)){if(d.length<c.length){var N=c[0],g;n=N.prev;var b=d[0],M=d[d.length-1];for(g=0;g<d.length;g+=1)H(d[g],N,i);for(g=0;g<c.length;g+=1)v.delete(c[g]);S(e,b.prev,M.next),S(e,n,b),S(e,M,N),s=N,n=M,l-=1,d=[],c=[]}else v.delete(a),H(a,s,i),S(e,a.prev,a.next),S(e,a,n===null?e.effect.first:n.next),S(e,n,a),n=a;continue}for(d=[],c=[];s!==null&&s!==a;)(v??(v=new Set)).add(s),c.push(s),s=F(s.next);if(s===null)continue}(a.f&T)===0&&d.push(a),n=a,s=F(a.next)}if(e.outrogroups!==null){for(const C of e.outrogroups)C.pending.size===0&&(Y(J(C.done)),(X=e.outrogroups)==null||X.delete(C));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||v!==void 0){var m=[];if(v!==void 0)for(a of v)(a.f&q)===0&&m.push(a);for(;s!==null;)(s.f&q)===0&&s!==e.fallback&&m.push(s),s=F(s.next);var x=m.length;if(x>0){var R=(u&ve)!==0&&f===0?i:null;if(o){for(l=0;l<x;l+=1)(Q=(K=m[l].nodes)==null?void 0:K.a)==null||Q.measure();for(l=0;l<x;l+=1)($=(Z=m[l].nodes)==null?void 0:Z.a)==null||$.fix()}er(e,m,R)}}o&&He(()=>{var C,j;if(h!==void 0)for(a of h)(j=(C=a.nodes)==null?void 0:C.a)==null||j.apply()})}function nr(e,r,i,u,_,o,f,t){var s=(f&xe)!==0?(f&Ie)===0?Me(i,!1,!1):ne(i):null,v=(f&Re)!==0?ne(_):null;return{v:s,i:v,e:G(()=>(o(r,s??i,v??_,t),()=>{e.delete(u)}))}}function H(e,r,i){if(e.nodes)for(var u=e.nodes.start,_=e.nodes.end,o=r&&(r.f&T)===0?r.nodes.start:i;u!==null;){var f=Fe(u);if(o.before(u),u===_)return;u=f}}function S(e,r,i){r===null?e.effect.first=i:r.next=i,i===null?e.effect.last=r:i.prev=r}function ir(e,r,i,u,_){var t;p&&V();var o=(t=r.$$slots)==null?void 0:t[i],f=!1;o===!0&&(o=r.children,f=!0),o===void 0||o(e,f?()=>u:u)}function sr(e,r,i,u,_,o){let f=p;p&&V();var t=null;p&&I.nodeType===Be&&(t=I,V());var s=p?I:e,v=new $e(s,!1);oe(()=>{const n=r()||null;var h=Pe;if(n===null){v.ensure(null,null);return}return v.ensure(n,d=>{if(n){if(t=p?t:Le(n,h),_e(t,t),u){p&&he(n)&&t.append(document.createComment(""));var c=p?ce(t):t.appendChild(P());p&&(c===null?B(!1):D(c)),u(t,c)}Ve.nodes.end=t,d.before(t)}p&&D(d)}),()=>{}},We),qe(()=>{}),f&&(B(!0),D(s))}/**
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
 */const fr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const tr=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const le=(...e)=>e.filter((r,i,u)=>!!r&&r.trim()!==""&&u.indexOf(r)===i).join(" ").trim();var lr=pe("<svg><!><!></svg>");function _r(e,r){const i=se(r,["children","$$slots","$$events","$$legacy"]),u=se(i,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ge(r,!1);let _=O(r,"name",8,void 0),o=O(r,"color",8,"currentColor"),f=O(r,"size",8,24),t=O(r,"strokeWidth",8,2),s=O(r,"absoluteStrokeWidth",8,!1),v=O(r,"iconNode",24,()=>[]);me();var n=lr();fe(n,(c,w,k)=>({...fr,...c,...u,width:f(),height:f(),stroke:o(),"stroke-width":w,class:k}),[()=>tr(u)?void 0:{"aria-hidden":"true"},()=>(z(s()),z(t()),z(f()),ie(()=>s()?Number(t())*24/Number(f()):t())),()=>(z(le),z(_()),z(i),ie(()=>le("lucide-icon","lucide",_()?`lucide-${_()}`:"",i.class)))]);var h=Je(n);rr(h,1,v,je,(c,w)=>{var k=Qe(()=>Ze(y(w),2));let a=()=>y(k)[0],l=()=>y(k)[1];var A=ge(),N=Ke(A);sr(N,a,!0,(g,b)=>{fe(g,()=>({...l()}))}),ee(c,A)});var d=Ue(h);ir(d,r,"default",{}),Xe(n),ee(e,n),Ye()}export{_r as I,rr as e,je as i,ir as s};
