import{_ as F,az as S,aA as k,aB as B,K as A,af as z,ag as J,O as K,Y as T,v as X,aC as Q,w as f,ac as H,W as I,B as g,A as L,C as u,X as w,aD as Z,aE as ee,aF as te,x,aG as O,aH as D,D as re,aI as ae,aJ as ne,R as oe,J as ie,aK as se,F as ue,p as le,b as ce,a as de}from"./D_pRvsFy.js";function Te(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const fe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Le(e){return fe.includes(e)}const _e={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ae(e){return e=e.toLowerCase(),_e[e]??e}const ve=["touchstart","touchmove"];function pe(e){return ve.includes(e)}const he=["textarea","script","style","title"];function Ne(e){return he.includes(e)}function Se(e,t){if(t){const r=document.body;e.autofocus=!0,F(()=>{document.activeElement===r&&e.focus()})}}let V=!1;function me(){V||(V=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function $(e){var t=B,r=A;S(null),k(null);try{return e()}finally{S(t),k(r)}}function ke(e,t,r,o=r){e.addEventListener(t,()=>$(r));const n=e.__on_r;n?e.__on_r=()=>{n(),o(!0)}:e.__on_r=()=>o(!0),me()}const j=new Set,P=new Set;function ye(e,t,r,o={}){function n(a){if(o.capture||b.call(t,a),!a.cancelBubble)return $(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?F(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function Re(e,t,r,o,n){var a={capture:o,passive:n},i=ye(e,t,r,a);(t===document.body||t===window||t===document)&&z(()=>{t.removeEventListener(e,i,a)})}function De(e){for(var t=0;t<e.length;t++)j.add(e[t]);for(var r of P)r(e)}function b(e){var M;var t=this,r=t.ownerDocument,o=e.type,n=((M=e.composedPath)==null?void 0:M.call(e))||[],a=n[0]||e.target,i=0,_=e.__root;if(_){var c=n.indexOf(_);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var y=n.indexOf(t);if(y===-1)return;c<=y&&(i=c)}if(a=n[i]||e.target,a!==t){J(e,"currentTarget",{configurable:!0,get(){return a||r}});var R=B,v=A;S(null),k(null);try{for(var s,l=[];a!==null;){var h=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+o];if(m!=null&&(!a.disabled||e.target===a))if(K(m)){var[G,...U]=m;G.apply(a,[e,...U])}else m.call(a,e)}catch(N){s?l.push(N):s=N}if(e.cancelBubble||h===t||h===null)break;a=h}if(s){for(let N of l)queueMicrotask(()=>{throw N});throw s}}finally{e.__root=t,delete e.currentTarget,S(R),k(v)}}}let d;function Ee(){d=void 0}function Ie(e){let t=null,r=f;var o;if(f){for(t=u,d===void 0&&(d=w(document.head));d!==null&&(d.nodeType!==8||d.data!==H);)d=I(d);d===null?g(!1):d=L(I(d))}f||(o=document.head.appendChild(T()));try{X(()=>e(o),Q)}finally{r&&(g(!0),d=u,L(t))}}function Y(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e,t){var r=A;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Oe(e,t){var r=(t&ee)!==0,o=(t&te)!==0,n,a=!e.startsWith("<!>");return()=>{if(f)return p(u,null),u;n===void 0&&(n=Y(a?e:"<!>"+e),r||(n=w(n)));var i=o||Z?document.importNode(n,!0):n.cloneNode(!0);if(r){var _=w(i),c=i.lastChild;p(_,c)}else p(i,i);return i}}function Pe(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(f)return p(u,null),u;if(!a){var i=Y(n),_=w(i);a=w(_)}var c=a.cloneNode(!0);return p(c,c),c}}function Ce(e=""){if(!f){var t=T(e+"");return p(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=T()),L(r)),p(r,r),r}function Me(){if(f)return p(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=T();return e.append(t,r),p(t,r),e}function Ve(e,t){if(f){A.nodes_end=u,x();return}e!==null&&e.before(t)}function We(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function ge(e,t){return q(e,t)}function Fe(e,t){O(),t.intro=t.intro??!1;const r=t.target,o=f,n=u;try{for(var a=w(r);a&&(a.nodeType!==8||a.data!==H);)a=I(a);if(!a)throw D;g(!0),L(a),x();const i=q(e,{...t,anchor:a});if(u===null||u.nodeType!==8||u.data!==re)throw ae(),D;return g(!1),i}catch(i){if(i===D)return t.recover===!1&&ne(),O(),oe(r),g(!1),ge(e,t);throw i}finally{g(o),L(n),Ee()}}const E=new Map;function q(e,{target:t,anchor:r,props:o={},events:n,context:a,intro:i=!0}){O();var _=new Set,c=v=>{for(var s=0;s<v.length;s++){var l=v[s];if(!_.has(l)){_.add(l);var h=pe(l);t.addEventListener(l,b,{passive:h});var m=E.get(l);m===void 0?(document.addEventListener(l,b,{passive:h}),E.set(l,1)):E.set(l,m+1)}}};c(ie(j)),P.add(c);var y=void 0,R=se(()=>{var v=r??t.appendChild(T());return ue(()=>{if(a){le({});var s=ce;s.c=a}n&&(o.$$events=n),f&&p(v,null),y=e(v,o)||{},f&&(A.nodes_end=u),a&&de()}),()=>{var h;for(var s of _){t.removeEventListener(s,b);var l=E.get(s);--l===0?(document.removeEventListener(s,b),E.delete(s)):E.set(s,l)}P.delete(c),v!==r&&((h=v.parentNode)==null||h.removeChild(v))}});return C.set(y,R),y}let C=new WeakMap;function Be(e,t){const r=C.get(e);return r?(C.delete(e),r(t)):Promise.resolve()}const we="5";var W;typeof window<"u"&&((W=window.__svelte??(window.__svelte={})).v??(W.v=new Set)).add(we);export{Ve as a,p as b,Me as c,Te as d,ye as e,De as f,Se as g,Ie as h,Ne as i,Ae as j,me as k,Le as l,Fe as m,Pe as n,ge as o,Ce as p,ke as q,Re as r,We as s,Oe as t,Be as u};
