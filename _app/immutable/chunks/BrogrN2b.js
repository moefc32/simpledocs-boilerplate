import{o as S,ao as z,ap as D,aq as G,y as j,ar as K,as as F}from"./B1iluEif.js";import{d as J,e as Q,f as W,g as X,j as Z,k as y,l as m}from"./Bol9LUmm.js";function R(r){var i,f,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var u=r.length;for(i=0;i<u;i++)r[i]&&(f=R(r[i]))&&(s&&(s+=" "),s+=f)}else for(f in r)r[f]&&(s&&(s+=" "),s+=f);return s}function x(){for(var r,i,f=0,s="",u=arguments.length;f<u;f++)(r=arguments[f])&&(i=R(r))&&(s&&(s+=" "),s+=i);return s}function rr(r){return typeof r=="object"?x(r):r??""}const w=[...` 	
\r\f \v\uFEFF`];function fr(r,i,f){var s=r==null?"":""+r;if(i&&(s=s?s+" "+i:i),f){for(var u in f)if(f[u])s=s?s+" "+u:u;else if(s.length)for(var t=u.length,l=0;(l=s.indexOf(u,l))>=0;){var e=l+t;(l===0||w.includes(s[l-1]))&&(e===s.length||w.includes(s[e]))?s=(l===0?"":s.substring(0,l))+s.substring(e+1):l=e}}return s===""?null:s}function k(r,i=!1){var f=i?" !important;":";",s="";for(var u in r){var t=r[u];t!=null&&t!==""&&(s+=" "+u+": "+t+f)}return s}function I(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function ir(r,i){if(i){var f="",s,u;if(Array.isArray(i)?(s=i[0],u=i[1]):s=i,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var t=!1,l=0,e=!1,A=[];s&&A.push(...Object.keys(s).map(I)),u&&A.push(...Object.keys(u).map(I));var c=0,b=-1;const L=r.length;for(var v=0;v<L;v++){var g=r[v];if(e?g==="/"&&r[v-1]==="*"&&(e=!1):t?t===g&&(t=!1):g==="/"&&r[v+1]==="*"?e=!0:g==='"'||g==="'"?t=g:g==="("?l++:g===")"&&l--,!e&&t===!1&&l===0){if(g===":"&&b===-1)b=v;else if(g===";"||v===L-1){if(b!==-1){var O=I(r.substring(c,b).trim());if(!A.includes(O)){g!==";"&&v++;var T=r.substring(c,v).trim();f+=" "+T+";"}}c=v+1,b=-1}}}}return s&&(f+=k(s)),u&&(f+=k(u,!0)),f=f.trim(),f===""?null:f}return r==null?null:String(r)}function sr(r,i,f,s,u,t){var l=r.__className;if(S||l!==f||l===void 0){var e=fr(f,s,t);(!S||e!==r.getAttribute("class"))&&(e==null?r.removeAttribute("class"):i?r.className=e:r.setAttribute("class",e)),r.__className=f}else if(t&&u!==t)for(var A in t){var c=!!t[A];(u==null||c!==!!u[A])&&r.classList.toggle(A,c)}return t}function M(r,i={},f,s){for(var u in f){var t=f[u];i[u]!==t&&(f[u]==null?r.style.removeProperty(u):r.style.setProperty(u,t,s))}}function ur(r,i,f,s){var u=r.__style;if(S||u!==i){var t=ir(i,s);(!S||t!==r.getAttribute("style"))&&(t==null?r.removeAttribute("style"):r.style.cssText=t),r.__style=i}else s&&(Array.isArray(s)?(M(r,f==null?void 0:f[0],s[0]),M(r,f==null?void 0:f[1],s[1],"important")):M(r,f,s));return s}const _=Symbol("class"),p=Symbol("style"),U=Symbol("is custom element"),V=Symbol("is html");function lr(r){if(S){var i=!1,f=()=>{if(!i){if(i=!0,r.hasAttribute("value")){var s=r.value;E(r,"value",null),r.value=s}if(r.hasAttribute("checked")){var u=r.checked;E(r,"checked",null),r.checked=u}}};r.__on_r=f,K(f),y()}}function tr(r,i){i?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function E(r,i,f,s){var u=q(r);S&&(u[i]=r.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&r.nodeName==="LINK")||u[i]!==(u[i]=f)&&(i==="loading"&&(r[F]=f),f==null?r.removeAttribute(i):typeof f!="string"&&B(r).includes(i)?r[i]=f:r.setAttribute(i,f))}function cr(r,i,f,s,u=!1){var t=q(r),l=t[U],e=!t[V];let A=S&&l;A&&j(!1);var c=i||{},b=r.tagName==="OPTION";for(var v in i)v in f||(f[v]=null);f.class?f.class=rr(f.class):f[_]&&(f.class=null),f[p]&&(f.style??(f.style=null));var g=B(r);for(const a in f){let o=f[a];if(b&&a==="value"&&o==null){r.value=r.__value="",c[a]=o;continue}if(a==="class"){var O=r.namespaceURI==="http://www.w3.org/1999/xhtml";sr(r,O,o,s,i==null?void 0:i[_],f[_]),c[a]=o,c[_]=f[_];continue}if(a==="style"){ur(r,o,i==null?void 0:i[p],f[p]),c[a]=o,c[p]=f[p];continue}var T=c[a];if(o!==T){c[a]=o;var L=a[0]+a[1];if(L!=="$$")if(L==="on"){const d={},N="$$"+a;let n=a.slice(2);var C=m(n);if(J(n)&&(n=n.slice(0,-7),d.capture=!0),!C&&T){if(o!=null)continue;r.removeEventListener(n,c[N],d),c[N]=null}if(o!=null)if(C)r[`__${n}`]=o,W([n]);else{let H=function(Y){c[a].call(this,Y)};c[N]=Q(n,r,H,d)}else C&&(r[`__${n}`]=void 0)}else if(a==="style")E(r,a,o);else if(a==="autofocus")X(r,!!o);else if(!l&&(a==="__value"||a==="value"&&o!=null))r.value=r.__value=o;else if(a==="selected"&&b)tr(r,o);else{var h=a;e||(h=Z(h));var $=h==="defaultValue"||h==="defaultChecked";if(o==null&&!l&&!$)if(t[a]=null,h==="value"||h==="checked"){let d=r;const N=i===void 0;if(h==="value"){let n=d.defaultValue;d.removeAttribute(h),d.defaultValue=n,d.value=d.__value=N?n:null}else{let n=d.defaultChecked;d.removeAttribute(h),d.defaultChecked=n,d.checked=N?n:!1}}else r.removeAttribute(a);else $||g.includes(h)&&(l||typeof o!="string")?r[h]=o:typeof o!="function"&&E(r,h,o)}}}return A&&j(!0),c}function q(r){return r.__attributes??(r.__attributes={[U]:r.nodeName.includes("-"),[V]:r.namespaceURI===z})}var P=new Map;function B(r){var i=P.get(r.nodeName);if(i)return i;P.set(r.nodeName,i=[]);for(var f,s=r,u=Element.prototype;u!==s;){f=G(s);for(var t in f)f[t].set&&i.push(t);s=D(s)}return i}export{cr as a,sr as b,ur as c,rr as d,lr as r,E as s};
