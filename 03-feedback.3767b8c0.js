!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.constructor===Symbol?"symbol":typeof e}var i="Expected a function",o=NaN,u="[object Symbol]",a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,v=d||m||Function("return this")(),p=Object.prototype.toString,g=Math.max,y=Math.min,b=function(){return v.Date.now()};function E(e,t,n){var r,o,u,a,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=u}function E(){var e=b();if(p(e))return O(e);l=setTimeout(E,function(e){var n=t-(e-f);return d?y(n,u-(e-c)):n}(e))}function O(e){return l=void 0,m&&r?v(e):(r=o=void 0,a)}function j(){var e=b(),n=p(e);if(r=arguments,o=this,f=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(E,t),s?v(e):a}(f);if(d)return l=setTimeout(E,t),v(f)}return void 0===l&&(l=setTimeout(E,t)),a}return t=x(t)||0,S(n)&&(s=!!n.leading,u=(d="maxWait"in n)?g(x(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=o=l=void 0},j.flush=function(){return void 0===l?a:O(b())},j}function S(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==u}(e))return o;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):l.test(e)?o:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return S(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),E(e,t,{leading:r,maxWait:t,trailing:o})};var O={formEl:document.querySelector("form"),inputEl:document.querySelector("input"),textAreaEl:document.querySelector("textarea")},j="feedback-form-state",h={email:"",message:""};null!==localStorage.getItem(j)&&(O.inputEl.value=JSON.parse(localStorage.getItem(j)).email,O.textAreaEl.value=JSON.parse(localStorage.getItem(j)).message,h.email=O.inputEl.value,h.message=O.textAreaEl.value),O.formEl.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(h))}),500)),O.formEl.addEventListener("submit",(function(e){if(""===O.inputEl.value||""===O.textAreaEl.value)return alert("Ops.. All lines must be filled!");e.preventDefault(),localStorage.removeItem(j),O.formEl.reset(),console.log(h)}))}();
//# sourceMappingURL=03-feedback.3767b8c0.js.map
