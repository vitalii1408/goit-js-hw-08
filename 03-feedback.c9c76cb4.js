function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={};i=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var o,a={},u={};o="object"==typeof n&&n&&n.Object===Object&&n;var f="object"==typeof self&&self&&self.Object===Object&&self,l=o||f||Function("return this")();a=function(){return u.Date.now()};var c={},v={},s={},d=/\s/;s=function(e){for(var t=e.length;t--&&d.test(e.charAt(t)););return t};var m=/^\s+/;v=function(e){return e?e.slice(0,s(e)+1).replace(m,""):e};var g,p={},y={};g=(u=l).Symbol;var b={},j=Object.prototype,S=j.hasOwnProperty,h=j.toString,O=g?g.toStringTag:void 0;b=function(e){var t=S.call(e,O),n=e[O];try{e[O]=void 0;var r=!0}catch(e){}var i=h.call(e);return r&&(t?e[O]=n:delete e[O]),i};var T={},w=Object.prototype.toString;T=function(e){return w.call(e)};var x=g?g.toStringTag:void 0;y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?b(e):T(e)};var E={};E=function(e){return null!=e&&"object"==typeof e};p=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==y(e)};var N=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,L=/^0o[0-7]+$/i,M=parseInt;c=function(e){if("number"==typeof e)return e;if(p(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=v(e);var n=I.test(e);return n||L.test(e)?M(e.slice(2),n?2:8):N.test(e)?NaN:+e};var q=Math.max,D=Math.min;r=function(e,t,n){var r,o,u,f,l,v,s=0,d=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,f=e.apply(i,n)}function y(e){return s=e,l=setTimeout(j,t),d?p(e):f}function b(e){var n=e-v;return void 0===v||n>=t||n<0||m&&e-s>=u}function j(){var e=a();if(b(e))return S(e);l=setTimeout(j,function(e){var n=t-(e-v);return m?D(n,u-(e-s)):n}(e))}function S(e){return l=void 0,g&&r?p(e):(r=o=void 0,f)}function h(){var e=a(),n=b(e);if(r=arguments,o=this,v=e,n){if(void 0===l)return y(v);if(m)return clearTimeout(l),l=setTimeout(j,t),p(v)}return void 0===l&&(l=setTimeout(j,t)),f}return t=c(t)||0,i(n)&&(d=!!n.leading,u=(m="maxWait"in n)?q(c(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=v=o=l=void 0},h.flush=function(){return void 0===l?f:S(a())},h};t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:o,maxWait:t,trailing:a})},document.addEventListener("DOMContentLoaded",(function(){const n=document.querySelector(".feedback-form"),r=n.querySelector('[name="email"]'),i=n.querySelector('[name="message"]'),o="feedback-form-state",a=e(t)((function(){const e=u();localStorage.setItem(o,JSON.stringify(e))}),500);function u(){return{email:r.value,message:i.value}}n.addEventListener("input",a),function(){const e=localStorage.getItem(o);if(e){!function(e){"email"in e&&(r.value=e.email);"message"in e&&(i.value=e.message)}(JSON.parse(e))}}(),n.addEventListener("submit",(function(e){e.preventDefault(),""!==r.value.trim()&&""!==i.value.trim()?(localStorage.removeItem(o),console.log(u()),r.value="",i.value=""):alert("Будь ласка, заповніть всі поля перед відправкою.")}))}));
//# sourceMappingURL=03-feedback.c9c76cb4.js.map
