import{v as G,h as S,aq as K,Q,ar as _,i as j,as as F}from"./CCxjcWvL.js";import{d as J,e as W,f as X,g as Z,j as k}from"./DtJBtnD3.js";function y(r,f){if(f){const i=document.body;r.autofocus=!0,G(()=>{document.activeElement===i&&r.focus()})}}function V(r){var f,i,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var u=r.length;for(f=0;f<u;f++)r[f]&&(i=V(r[f]))&&(s&&(s+=" "),s+=i)}else for(i in r)r[i]&&(s&&(s+=" "),s+=i);return s}function m(){for(var r,f,i=0,s="",u=arguments.length;i<u;i++)(r=arguments[i])&&(f=V(r))&&(s&&(s+=" "),s+=f);return s}function x(r){return typeof r=="object"?m(r):r??""}const w=[...` 	
\r\f \v\uFEFF`];function rr(r,f,i){var s=r==null?"":""+r;if(i){for(var u in i)if(i[u])s=s?s+" "+u:u;else if(s.length)for(var t=u.length,c=0;(c=s.indexOf(u,c))>=0;){var n=c+t;(c===0||w.includes(s[c-1]))&&(n===s.length||w.includes(s[n]))?s=(c===0?"":s.substring(0,c))+s.substring(n+1):c=n}}return s===""?null:s}function P(r,f=!1){var i=f?" !important;":";",s="";for(var u in r){var t=r[u];t!=null&&t!==""&&(s+=" "+u+": "+t+i)}return s}function I(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function ir(r,f){if(f){var i="",s,u;if(Array.isArray(f)?(s=f[0],u=f[1]):s=f,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var t=!1,c=0,n=!1,b=[];s&&b.push(...Object.keys(s).map(I)),u&&b.push(...Object.keys(u).map(I));var l=0,d=-1;const N=r.length;for(var g=0;g<N;g++){var h=r[g];if(n?h==="/"&&r[g-1]==="*"&&(n=!1):t?t===h&&(t=!1):h==="/"&&r[g+1]==="*"?n=!0:h==='"'||h==="'"?t=h:h==="("?c++:h===")"&&c--,!n&&t===!1&&c===0){if(h===":"&&d===-1)d=g;else if(h===";"||g===N-1){if(d!==-1){var O=I(r.substring(l,d).trim());if(!b.includes(O)){h!==";"&&g++;var T=r.substring(l,g).trim();i+=" "+T+";"}}l=g+1,d=-1}}}}return s&&(i+=P(s)),u&&(i+=P(u,!0)),i=i.trim(),i===""?null:i}return r==null?null:String(r)}function fr(r,f,i,s,u,t){var c=r.__className;if(S||c!==i){var n=rr(i,s,t);(!S||n!==r.getAttribute("class"))&&(n==null?r.removeAttribute("class"):f?r.className=n:r.setAttribute("class",n)),r.__className=i}else if(t&&u!==t)for(var b in t){var l=!!t[b];(u==null||l!==!!u[b])&&r.classList.toggle(b,l)}return t}function M(r,f={},i,s){for(var u in i){var t=i[u];f[u]!==t&&(i[u]==null?r.style.removeProperty(u):r.style.setProperty(u,t,s))}}function sr(r,f,i,s){var u=r.__style;if(S||u!==f){var t=ir(f,s);(!S||t!==r.getAttribute("style"))&&(t==null?r.removeAttribute("style"):r.style.cssText=t),r.__style=f}else s&&(Array.isArray(s)?(M(r,i==null?void 0:i[0],s[0]),M(r,i==null?void 0:i[1],s[1],"important")):M(r,i,s));return s}const L=Symbol("class"),E=Symbol("style"),q=Symbol("is custom element"),B=Symbol("is html");function ur(r,f){f?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function R(r,f,i,s){var u=H(r);S&&(u[f]=r.getAttribute(f),f==="src"||f==="srcset"||f==="href"&&r.nodeName==="LINK")||u[f]!==(u[f]=i)&&(f==="loading"&&(r[F]=i),i==null?r.removeAttribute(f):typeof i!="string"&&Y(r).includes(f)?r[f]=i:r.setAttribute(f,i))}function ar(r,f,i,s,u=!1){var t=H(r),c=t[q],n=!t[B];let b=S&&c;b&&j(!1);var l=f||{},d=r.tagName==="OPTION";for(var g in f)g in i||(i[g]=null);i.class?i.class=x(i.class):i[L]&&(i.class=null),i[E]&&(i.style??(i.style=null));var h=Y(r);for(const o in i){let a=i[o];if(d&&o==="value"&&a==null){r.value=r.__value="",l[o]=a;continue}if(o==="class"){var O=r.namespaceURI==="http://www.w3.org/1999/xhtml";fr(r,O,a,s,f==null?void 0:f[L],i[L]),l[o]=a,l[L]=i[L];continue}if(o==="style"){sr(r,a,f==null?void 0:f[E],i[E]),l[o]=a,l[E]=i[E];continue}var T=l[o];if(a!==T){l[o]=a;var N=o[0]+o[1];if(N!=="$$")if(N==="on"){const v={},p="$$"+o;let e=o.slice(2);var C=k(e);if(J(e)&&(e=e.slice(0,-7),v.capture=!0),!C&&T){if(a!=null)continue;r.removeEventListener(e,l[p],v),l[p]=null}if(a!=null)if(C)r[`__${e}`]=a,X([e]);else{let z=function(D){l[o].call(this,D)};l[p]=W(e,r,z,v)}else C&&(r[`__${e}`]=void 0)}else if(o==="style")R(r,o,a);else if(o==="autofocus")y(r,!!a);else if(!c&&(o==="__value"||o==="value"&&a!=null))r.value=r.__value=a;else if(o==="selected"&&d)ur(r,a);else{var A=o;n||(A=Z(A));var $=A==="defaultValue"||A==="defaultChecked";if(a==null&&!c&&!$)if(t[o]=null,A==="value"||A==="checked"){let v=r;const p=f===void 0;if(A==="value"){let e=v.defaultValue;v.removeAttribute(A),v.defaultValue=e,v.value=v.__value=p?e:null}else{let e=v.defaultChecked;v.removeAttribute(A),v.defaultChecked=e,v.checked=p?e:!1}}else r.removeAttribute(o);else $||h.includes(A)&&(c||typeof a!="string")?r[A]=a:typeof a!="function"&&R(r,A,a)}}}return b&&j(!0),l}function H(r){return r.__attributes??(r.__attributes={[q]:r.nodeName.includes("-"),[B]:r.namespaceURI===K})}var U=new Map;function Y(r){var f=U.get(r.nodeName);if(f)return f;U.set(r.nodeName,f=[]);for(var i,s=r,u=Element.prototype;u!==s;){i=_(s);for(var t in i)i[t].set&&f.push(t);s=Q(s)}return f}export{ar as a,fr as b,R as s};
