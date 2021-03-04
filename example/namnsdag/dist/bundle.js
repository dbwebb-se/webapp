(()=>{"use strict";var e={18:(e,t,n)=>{var r=n(178);e.exports=function(e,t,n){var o=[],i=!1,l=!1;function a(){if(i)throw new Error("Nested m.redraw.sync() call");i=!0;for(var t=0;t<o.length;t+=2)try{e(o[t],r(o[t+1]),u)}catch(e){n.error(e)}i=!1}function u(){l||(l=!0,t((function(){l=!1,a()})))}return u.sync=a,{mount:function(t,n){if(null!=n&&null==n.view&&"function"!=typeof n)throw new TypeError("m.mount(element, component) expects a component, not a vnode");var i=o.indexOf(t);i>=0&&(o.splice(i,2),e(t,[],u)),null!=n&&(o.push(t,n),e(t,r(n),u))},redraw:u}}},223:(e,t,n)=>{var r=n(178),o=n(373),i=n(164),l=n(249),a=n(561),u=n(562),s=n(127),c={};e.exports=function(e,t){var n;function f(t,r,o){if(t=l(t,r),null!=n){n();var i=o?o.state:null,a=o?o.title:null;o&&o.replace?e.history.replaceState(i,a,g.prefix+t):e.history.pushState(i,a,g.prefix+t)}else e.location.href=g.prefix+t}var d,p,h,v,m=c,y=g.SKIP={};function g(o,l,w){if(null==o)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var b,x=0,k=Object.keys(w).map((function(e){if("/"!==e[0])throw new SyntaxError("Routes must start with a `/`");if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`");return{route:e,component:w[e],check:u(e)}})),E="function"==typeof setImmediate?setImmediate:setTimeout,S=i.resolve(),j=!1;if(n=null,null!=l){var C=a(l);if(!k.some((function(e){return e.check(C)})))throw new ReferenceError("Default route doesn't match any known routes")}function N(){j=!1;var n=e.location.hash;"#"!==g.prefix[0]&&(n=e.location.search+n,"?"!==g.prefix[0]&&"/"!==(n=e.location.pathname+n)[0]&&(n="/"+n));var r=n.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent).slice(g.prefix.length),o=a(r);function i(){if(r===l)throw new Error("Could not resolve default route "+l);f(l,null,{replace:!0})}s(o.params,e.history.state),function e(n){for(;n<k.length;n++)if(k[n].check(o)){var l=k[n].component,a=k[n].route,u=l,s=v=function(i){if(s===v){if(i===y)return e(n+1);d=null==i||"function"!=typeof i.view&&"function"!=typeof i?"div":i,p=o.params,h=r,v=null,m=l.render?l:null,2===x?t.redraw():(x=2,t.redraw.sync())}};return void(l.view||"function"==typeof l?(l={},s(u)):l.onmatch?S.then((function(){return l.onmatch(o.params,r,a)})).then(s,i):s("div"))}i()}(0)}return n=function(){j||(j=!0,E(N))},"function"==typeof e.history.pushState?(b=function(){e.removeEventListener("popstate",n,!1)},e.addEventListener("popstate",n,!1)):"#"===g.prefix[0]&&(n=null,b=function(){e.removeEventListener("hashchange",N,!1)},e.addEventListener("hashchange",N,!1)),t.mount(o,{onbeforeupdate:function(){return!(!(x=x?2:1)||c===m)},oncreate:N,onremove:b,view:function(){if(x&&c!==m){var e=[r(d,p.key,p)];return m&&(e=m.render(e[0])),e}}})}return g.set=function(e,t,n){null!=v&&((n=n||{}).replace=!0),v=null,f(e,t,n)},g.get=function(){return h},g.prefix="#!",g.Link={view:function(e){var t,n,r=e.attrs.options,i={};s(i,e.attrs),i.selector=i.options=i.key=i.oninit=i.oncreate=i.onbeforeupdate=i.onupdate=i.onbeforeremove=i.onremove=null;var l=o(e.attrs.selector||"a",i,e.children);return(l.attrs.disabled=Boolean(l.attrs.disabled))?(l.attrs.href=null,l.attrs["aria-disabled"]="true",l.attrs.onclick=null):(t=l.attrs.onclick,n=l.attrs.href,l.attrs.href=g.prefix+n,l.attrs.onclick=function(e){var o;"function"==typeof t?o=t.call(e.currentTarget,e):null==t||"object"!=typeof t||"function"==typeof t.handleEvent&&t.handleEvent(e),!1===o||e.defaultPrevented||0!==e.button&&0!==e.which&&1!==e.which||e.currentTarget.target&&"_self"!==e.currentTarget.target||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),e.redraw=!1,g.set(n,null,r))}),l}},g.param=function(e){return p&&null!=e?p[e]:p},g}},262:(e,t,n)=>{var r=n(373);r.trust=n(742),r.fragment=n(621),e.exports=r},865:(e,t,n)=>{var r=n(262),o=n(74),i=n(165),l=function(){return r.apply(this,arguments)};l.m=r,l.trust=r.trust,l.fragment=r.fragment,l.mount=i.mount,l.route=n(843),l.render=n(358),l.redraw=i.redraw,l.request=o.request,l.jsonp=o.jsonp,l.parseQueryString=n(874),l.buildQueryString=n(478),l.parsePathname=n(561),l.buildPathname=n(249),l.vnode=n(178),l.PromisePolyfill=n(803),e.exports=l},165:(e,t,n)=>{var r=n(358);e.exports=n(18)(r,requestAnimationFrame,console)},127:e=>{e.exports=Object.assign||function(e,t){t&&Object.keys(t).forEach((function(n){e[n]=t[n]}))}},249:(e,t,n)=>{var r=n(478),o=n(127);e.exports=function(e,t){if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw new SyntaxError("Template parameter names *must* be separated");if(null==t)return e;var n=e.indexOf("?"),i=e.indexOf("#"),l=i<0?e.length:i,a=n<0?l:n,u=e.slice(0,a),s={};o(s,t);var c=u.replace(/:([^\/\.-]+)(\.{3})?/g,(function(e,n,r){return delete s[n],null==t[n]?e:r?t[n]:encodeURIComponent(String(t[n]))})),f=c.indexOf("?"),d=c.indexOf("#"),p=d<0?c.length:d,h=f<0?p:f,v=c.slice(0,h);n>=0&&(v+=e.slice(n,l)),f>=0&&(v+=(n<0?"?":"&")+c.slice(f,p));var m=r(s);return m&&(v+=(n<0&&f<0?"?":"&")+m),i>=0&&(v+=e.slice(i)),d>=0&&(v+=(i<0?"":"&")+c.slice(d)),v}},562:(e,t,n)=>{var r=n(561);e.exports=function(e){var t=r(e),n=Object.keys(t.params),o=[],i=new RegExp("^"+t.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,(function(e,t,n){return null==t?"\\"+e:(o.push({k:t,r:"..."===n}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))}))+"$");return function(e){for(var r=0;r<n.length;r++)if(t.params[n[r]]!==e.params[n[r]])return!1;if(!o.length)return i.test(e.path);var l=i.exec(e.path);if(null==l)return!1;for(r=0;r<o.length;r++)e.params[o[r].k]=o[r].r?l[r+1]:decodeURIComponent(l[r+1]);return!0}}},561:(e,t,n)=>{var r=n(874);e.exports=function(e){var t=e.indexOf("?"),n=e.indexOf("#"),o=n<0?e.length:n,i=t<0?o:t,l=e.slice(0,i).replace(/\/{2,}/g,"/");return l?("/"!==l[0]&&(l="/"+l),l.length>1&&"/"===l[l.length-1]&&(l=l.slice(0,-1))):l="/",{path:l,params:t<0?{}:r(e.slice(t+1,o))}}},803:e=>{var t=function(e){if(!(this instanceof t))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var n=this,r=[],o=[],i=s(r,!0),l=s(o,!1),a=n._instance={resolvers:r,rejectors:o},u="function"==typeof setImmediate?setImmediate:setTimeout;function s(e,t){return function i(s){var f;try{if(!t||null==s||"object"!=typeof s&&"function"!=typeof s||"function"!=typeof(f=s.then))u((function(){t||0!==e.length||console.error("Possible unhandled promise rejection:",s);for(var n=0;n<e.length;n++)e[n](s);r.length=0,o.length=0,a.state=t,a.retry=function(){i(s)}}));else{if(s===n)throw new TypeError("Promise can't be resolved w/ itself");c(f.bind(s))}}catch(e){l(e)}}}function c(e){var t=0;function n(e){return function(n){t++>0||e(n)}}var r=n(l);try{e(n(i),r)}catch(e){r(e)}}c(e)};t.prototype.then=function(e,n){var r,o,i=this._instance;function l(e,t,n,l){t.push((function(t){if("function"!=typeof e)n(t);else try{r(e(t))}catch(e){o&&o(e)}})),"function"==typeof i.retry&&l===i.state&&i.retry()}var a=new t((function(e,t){r=e,o=t}));return l(e,i.resolvers,r,!0),l(n,i.rejectors,o,!1),a},t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(e){return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},t.resolve=function(e){return e instanceof t?e:new t((function(t){t(e)}))},t.reject=function(e){return new t((function(t,n){n(e)}))},t.all=function(e){return new t((function(t,n){var r=e.length,o=0,i=[];if(0===e.length)t([]);else for(var l=0;l<e.length;l++)!function(l){function a(e){o++,i[l]=e,o===r&&t(i)}null==e[l]||"object"!=typeof e[l]&&"function"!=typeof e[l]||"function"!=typeof e[l].then?a(e[l]):e[l].then(a,n)}(l)}))},t.race=function(e){return new t((function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)}))},e.exports=t},164:(e,t,n)=>{var r=n(803);"undefined"!=typeof window?(void 0===window.Promise?window.Promise=r:window.Promise.prototype.finally||(window.Promise.prototype.finally=r.prototype.finally),e.exports=window.Promise):void 0!==n.g?(void 0===n.g.Promise?n.g.Promise=r:n.g.Promise.prototype.finally||(n.g.Promise.prototype.finally=r.prototype.finally),e.exports=n.g.Promise):e.exports=r},478:e=>{e.exports=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)r(n,e[n]);return t.join("&");function r(e,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(e+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(e+"["+o+"]",n[o]);else t.push(encodeURIComponent(e)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}}},874:e=>{e.exports=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),l=decodeURIComponent(i[0]),a=2===i.length?decodeURIComponent(i[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var u=l.split(/\]\[?|\[/),s=r;l.indexOf("[")>-1&&u.pop();for(var c=0;c<u.length;c++){var f=u[c],d=u[c+1],p=""==d||!isNaN(parseInt(d,10));if(""===f)null==n[l=u.slice(0,c).join()]&&(n[l]=Array.isArray(s)?s.length:0),f=n[l]++;else if("__proto__"===f)break;if(c===u.length-1)s[f]=a;else{var h=Object.getOwnPropertyDescriptor(s,f);null!=h&&(h=h.value),null==h&&(s[f]=h=p?[]:{}),s=h}}}return r}},358:(e,t,n)=>{e.exports=n(452)(window)},621:(e,t,n)=>{var r=n(178),o=n(359);e.exports=function(){var e=o.apply(0,arguments);return e.tag="[",e.children=r.normalizeChildren(e.children),e}},373:(e,t,n)=>{var r=n(178),o=n(359),i=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,l={},a={}.hasOwnProperty;function u(e){for(var t in e)if(a.call(e,t))return!1;return!0}function s(e){for(var t,n="div",r=[],o={};t=i.exec(e);){var a=t[1],u=t[2];if(""===a&&""!==u)n=u;else if("#"===a)o.id=u;else if("."===a)r.push(u);else if("["===t[3][0]){var s=t[6];s&&(s=s.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(s):o[t[4]]=""===s?s:s||!0}}return r.length>0&&(o.className=r.join(" ")),l[e]={tag:n,attrs:o}}function c(e,t){var n=t.attrs,o=r.normalizeChildren(t.children),i=a.call(n,"class"),l=i?n.class:n.className;if(t.tag=e.tag,t.attrs=null,t.children=void 0,!u(e.attrs)&&!u(n)){var s={};for(var c in n)a.call(n,c)&&(s[c]=n[c]);n=s}for(var c in e.attrs)a.call(e.attrs,c)&&"className"!==c&&!a.call(n,c)&&(n[c]=e.attrs[c]);for(var c in null==l&&null==e.attrs.className||(n.className=null!=l?null!=e.attrs.className?String(e.attrs.className)+" "+String(l):l:null!=e.attrs.className?e.attrs.className:null),i&&(n.class=null),n)if(a.call(n,c)&&"key"!==c){t.attrs=n;break}return Array.isArray(o)&&1===o.length&&null!=o[0]&&"#"===o[0].tag?t.text=o[0].children:t.children=o,t}e.exports=function(e){if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");var t=o.apply(1,arguments);return"string"==typeof e&&(t.children=r.normalizeChildren(t.children),"["!==e)?c(l[e]||s(e),t):(t.tag=e,t)}},359:(e,t,n)=>{var r=n(178);e.exports=function(){var e,t=arguments[this],n=this+1;if(null==t?t={}:("object"!=typeof t||null!=t.tag||Array.isArray(t))&&(t={},n=this),arguments.length===n+1)e=arguments[n],Array.isArray(e)||(e=[e]);else for(e=[];n<arguments.length;)e.push(arguments[n++]);return r("",t.key,t,e)}},452:(e,t,n)=>{var r=n(178);e.exports=function(e){var t,n=e&&e.document,o={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function i(e){return e.attrs&&e.attrs.xmlns||o[e.tag]}function l(e,t){if(e.state!==t)throw new Error("`vnode.state` must not be modified")}function a(e){var t=e.state;try{return this.apply(t,arguments)}finally{l(e,t)}}function u(){try{return n.activeElement}catch(e){return null}}function s(e,t,n,r,o,i,l){for(var a=n;a<r;a++){var u=t[a];null!=u&&c(e,u,o,l,i)}}function c(e,t,o,l,u){var f=t.tag;if("string"==typeof f)switch(t.state={},null!=t.attrs&&_(t.attrs,t,o),f){case"#":!function(e,t,r){t.dom=n.createTextNode(t.children),b(e,t.dom,r)}(e,t,u);break;case"<":d(e,t,l,u);break;case"[":!function(e,t,r,o,i){var l=n.createDocumentFragment();if(null!=t.children){var a=t.children;s(l,a,0,a.length,r,null,o)}t.dom=l.firstChild,t.domSize=l.childNodes.length,b(e,l,i)}(e,t,o,l,u);break;default:!function(e,t,o,l,a){var u=t.tag,c=t.attrs,f=c&&c.is,d=(l=i(t)||l)?f?n.createElementNS(l,u,{is:f}):n.createElementNS(l,u):f?n.createElement(u,{is:f}):n.createElement(u);if(t.dom=d,null!=c&&function(e,t,n){for(var r in t)N(e,r,null,t[r],n)}(t,c,l),b(e,d,a),!x(t)&&(null!=t.text&&(""!==t.text?d.textContent=t.text:t.children=[r("#",void 0,void 0,t.text,void 0,void 0)]),null!=t.children)){var p=t.children;s(d,p,0,p.length,o,null,l),"select"===t.tag&&null!=c&&function(e,t){if("value"in t)if(null===t.value)-1!==e.dom.selectedIndex&&(e.dom.value=null);else{var n=""+t.value;e.dom.value===n&&-1!==e.dom.selectedIndex||(e.dom.value=n)}"selectedIndex"in t&&N(e,"selectedIndex",null,t.selectedIndex,void 0)}(t,c)}}(e,t,o,l,u)}else!function(e,t,n,o,i){(function(e,t){var n;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(n=e.state.view).$$reentrantLock$$)return;n.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(n=e.tag).$$reentrantLock$$)return;n.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(_(e.state,e,t),null!=e.attrs&&_(e.attrs,e,t),e.instance=r.normalize(a.call(e.state.view,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");n.$$reentrantLock$$=null})(t,n),null!=t.instance?(c(e,t.instance,n,o,i),t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0):t.domSize=0}(e,t,o,l,u)}var f={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function d(e,t,r,o){var i=t.children.match(/^\s*?<(\w+)/im)||[],l=n.createElement(f[i[1]]||"div");"http://www.w3.org/2000/svg"===r?(l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t.children+"</svg>",l=l.firstChild):l.innerHTML=t.children,t.dom=l.firstChild,t.domSize=l.childNodes.length,t.instance=[];for(var a,u=n.createDocumentFragment();a=l.firstChild;)t.instance.push(a),u.appendChild(a);b(e,u,o)}function p(e,t,n,r,o,i){if(t!==n&&(null!=t||null!=n))if(null==t||0===t.length)s(e,n,0,n.length,r,o,i);else if(null==n||0===n.length)k(e,t,0,t.length);else{var l=null!=t[0]&&null!=t[0].key,a=null!=n[0]&&null!=n[0].key,u=0,f=0;if(!l)for(;f<t.length&&null==t[f];)f++;if(!a)for(;u<n.length&&null==n[u];)u++;if(null===a&&null==l)return;if(l!==a)k(e,t,f,t.length),s(e,n,u,n.length,r,o,i);else if(a){for(var d,p,w,b,x,S=t.length-1,j=n.length-1;S>=f&&j>=u&&(w=t[S],b=n[j],w.key===b.key);)w!==b&&h(e,w,b,r,o,i),null!=b.dom&&(o=b.dom),S--,j--;for(;S>=f&&j>=u&&(d=t[f],p=n[u],d.key===p.key);)f++,u++,d!==p&&h(e,d,p,r,y(t,f,o),i);for(;S>=f&&j>=u&&u!==j&&d.key===b.key&&w.key===p.key;)g(e,w,x=y(t,f,o)),w!==p&&h(e,w,p,r,x,i),++u<=--j&&g(e,d,o),d!==b&&h(e,d,b,r,o,i),null!=b.dom&&(o=b.dom),f++,w=t[--S],b=n[j],d=t[f],p=n[u];for(;S>=f&&j>=u&&w.key===b.key;)w!==b&&h(e,w,b,r,o,i),null!=b.dom&&(o=b.dom),j--,w=t[--S],b=n[j];if(u>j)k(e,t,f,S+1);else if(f>S)s(e,n,u,j+1,r,o,i);else{var C,N,O=o,z=j-u+1,A=new Array(z),T=0,P=0,I=2147483647,$=0;for(P=0;P<z;P++)A[P]=-1;for(P=j;P>=u;P--){null==C&&(C=v(t,f,S+1));var D=C[(b=n[P]).key];null!=D&&(I=D<I?D:-1,A[P-u]=D,w=t[D],t[D]=null,w!==b&&h(e,w,b,r,o,i),null!=b.dom&&(o=b.dom),$++)}if(o=O,$!==S-f+1&&k(e,t,f,S+1),0===$)s(e,n,u,j+1,r,o,i);else if(-1===I)for(T=(N=function(e){var t=[0],n=0,r=0,o=0,i=m.length=e.length;for(o=0;o<i;o++)m[o]=e[o];for(o=0;o<i;++o)if(-1!==e[o]){var l=t[t.length-1];if(e[l]<e[o])m[o]=l,t.push(o);else{for(n=0,r=t.length-1;n<r;){var a=(n>>>1)+(r>>>1)+(n&r&1);e[t[a]]<e[o]?n=a+1:r=a}e[o]<e[t[n]]&&(n>0&&(m[o]=t[n-1]),t[n]=o)}}for(r=t[(n=t.length)-1];n-- >0;)t[n]=r,r=m[r];return m.length=0,t}(A)).length-1,P=j;P>=u;P--)p=n[P],-1===A[P-u]?c(e,p,r,i,o):N[T]===P-u?T--:g(e,p,o),null!=p.dom&&(o=n[P].dom);else for(P=j;P>=u;P--)p=n[P],-1===A[P-u]&&c(e,p,r,i,o),null!=p.dom&&(o=n[P].dom)}}else{var L=t.length<n.length?t.length:n.length;for(u=u<f?u:f;u<L;u++)(d=t[u])===(p=n[u])||null==d&&null==p||(null==d?c(e,p,r,i,y(t,u+1,o)):null==p?E(e,d):h(e,d,p,r,y(t,u+1,o),i));t.length>L&&k(e,t,u,t.length),n.length>L&&s(e,n,u,n.length,r,o,i)}}}function h(e,t,n,o,l,u){var s=t.tag;if(s===n.tag){if(n.state=t.state,n.events=t.events,function(e,t){do{var n;if(null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate&&void 0!==(n=a.call(e.attrs.onbeforeupdate,e,t))&&!n)break;if("string"!=typeof e.tag&&"function"==typeof e.state.onbeforeupdate&&void 0!==(n=a.call(e.state.onbeforeupdate,e,t))&&!n)break;return!1}while(0);return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,e.attrs=t.attrs,e.children=t.children,e.text=t.text,!0}(n,t))return;if("string"==typeof s)switch(null!=n.attrs&&R(n.attrs,n,o),s){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children),t.dom=e.dom}(t,n);break;case"<":!function(e,t,n,r,o){t.children!==n.children?(S(e,t),d(e,n,r,o)):(n.dom=t.dom,n.domSize=t.domSize,n.instance=t.instance)}(e,t,n,u,l);break;case"[":!function(e,t,n,r,o,i){p(e,t.children,n.children,r,o,i);var l=0,a=n.children;if(n.dom=null,null!=a){for(var u=0;u<a.length;u++){var s=a[u];null!=s&&null!=s.dom&&(null==n.dom&&(n.dom=s.dom),l+=s.domSize||1)}1!==l&&(n.domSize=l)}}(e,t,n,o,l,u);break;default:!function(e,t,n,o){var l=t.dom=e.dom;o=i(t)||o,"textarea"===t.tag&&(null==t.attrs&&(t.attrs={}),null!=t.text&&(t.attrs.value=t.text,t.text=void 0)),function(e,t,n,r){if(null!=n)for(var o in n)N(e,o,t&&t[o],n[o],r);var i;if(null!=t)for(var o in t)null==(i=t[o])||null!=n&&null!=n[o]||O(e,o,i,r)}(t,e.attrs,t.attrs,o),x(t)||(null!=e.text&&null!=t.text&&""!==t.text?e.text.toString()!==t.text.toString()&&(e.dom.firstChild.nodeValue=t.text):(null!=e.text&&(e.children=[r("#",void 0,void 0,e.text,void 0,e.dom.firstChild)]),null!=t.text&&(t.children=[r("#",void 0,void 0,t.text,void 0,void 0)]),p(l,e.children,t.children,n,null,o)))}(t,n,o,u)}else!function(e,t,n,o,i,l){if(n.instance=r.normalize(a.call(n.state.view,n)),n.instance===n)throw Error("A view cannot return the vnode it received as argument");R(n.state,n,o),null!=n.attrs&&R(n.attrs,n,o),null!=n.instance?(null==t.instance?c(e,n.instance,o,l,i):h(e,t.instance,n.instance,o,i,l),n.dom=n.instance.dom,n.domSize=n.instance.domSize):null!=t.instance?(E(e,t.instance),n.dom=void 0,n.domSize=0):(n.dom=t.dom,n.domSize=t.domSize)}(e,t,n,o,l,u)}else E(e,t),c(e,n,o,u,l)}function v(e,t,n){for(var r=Object.create(null);t<n;t++){var o=e[t];if(null!=o){var i=o.key;null!=i&&(r[i]=t)}}return r}var m=[];function y(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function g(e,t,r){var o=n.createDocumentFragment();w(e,o,t),b(e,o,r)}function w(e,t,n){for(;null!=n.dom&&n.dom.parentNode===e;){if("string"!=typeof n.tag){if(null!=(n=n.instance))continue}else if("<"===n.tag)for(var r=0;r<n.instance.length;r++)t.appendChild(n.instance[r]);else if("["!==n.tag)t.appendChild(n.dom);else if(1===n.children.length){if(null!=(n=n.children[0]))continue}else for(r=0;r<n.children.length;r++){var o=n.children[r];null!=o&&w(e,t,o)}break}}function b(e,t,n){null!=n?e.insertBefore(t,n):e.appendChild(t)}function x(e){if(null==e.attrs||null==e.attrs.contenteditable&&null==e.attrs.contentEditable)return!1;var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted");return!0}function k(e,t,n,r){for(var o=n;o<r;o++){var i=t[o];null!=i&&E(e,i)}}function E(e,t){var n,r,o,i=0,u=t.state;if("string"!=typeof t.tag&&"function"==typeof t.state.onbeforeremove&&null!=(o=a.call(t.state.onbeforeremove,t))&&"function"==typeof o.then&&(i=1,n=o),t.attrs&&"function"==typeof t.attrs.onbeforeremove&&null!=(o=a.call(t.attrs.onbeforeremove,t))&&"function"==typeof o.then&&(i|=2,r=o),l(t,u),i){if(null!=n){var s=function(){1&i&&((i&=2)||c())};n.then(s,s)}null!=r&&(s=function(){2&i&&((i&=1)||c())},r.then(s,s))}else C(t),j(e,t);function c(){l(t,u),C(t),j(e,t)}}function S(e,t){for(var n=0;n<t.instance.length;n++)e.removeChild(t.instance[n])}function j(e,t){for(;null!=t.dom&&t.dom.parentNode===e;){if("string"!=typeof t.tag){if(null!=(t=t.instance))continue}else if("<"===t.tag)S(e,t);else{if("["!==t.tag&&(e.removeChild(t.dom),!Array.isArray(t.children)))break;if(1===t.children.length){if(null!=(t=t.children[0]))continue}else for(var n=0;n<t.children.length;n++){var r=t.children[n];null!=r&&j(e,r)}}break}}function C(e){if("string"!=typeof e.tag&&"function"==typeof e.state.onremove&&a.call(e.state.onremove,e),e.attrs&&"function"==typeof e.attrs.onremove&&a.call(e.attrs.onremove,e),"string"!=typeof e.tag)null!=e.instance&&C(e.instance);else{var t=e.children;if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];null!=r&&C(r)}}}function N(e,t,r,o,i){if("key"!==t&&"is"!==t&&null!=o&&!z(t)&&(r!==o||function(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===u()||"option"===e.tag&&e.dom.parentNode===n.activeElement}(e,t)||"object"==typeof o)){if("o"===t[0]&&"n"===t[1])return L(e,t,o);if("xlink:"===t.slice(0,6))e.dom.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(6),o);else if("style"===t)$(e.dom,r,o);else if(A(e,t,i)){if("value"===t){if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===""+o&&e.dom===u())return;if("select"===e.tag&&null!==r&&e.dom.value===""+o)return;if("option"===e.tag&&null!==r&&e.dom.value===""+o)return}"input"===e.tag&&"type"===t?e.dom.setAttribute(t,o):e.dom[t]=o}else"boolean"==typeof o?o?e.dom.setAttribute(t,""):e.dom.removeAttribute(t):e.dom.setAttribute("className"===t?"class":t,o)}}function O(e,t,n,r){if("key"!==t&&"is"!==t&&null!=n&&!z(t))if("o"!==t[0]||"n"!==t[1]||z(t))if("style"===t)$(e.dom,n,null);else if(!A(e,t,r)||"className"===t||"value"===t&&("option"===e.tag||"select"===e.tag&&-1===e.dom.selectedIndex&&e.dom===u())||"input"===e.tag&&"type"===t){var o=t.indexOf(":");-1!==o&&(t=t.slice(o+1)),!1!==n&&e.dom.removeAttribute("className"===t?"class":t)}else e.dom[t]=null;else L(e,t,void 0)}function z(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function A(e,t,n){return void 0===n&&(e.tag.indexOf("-")>-1||null!=e.attrs&&e.attrs.is||"href"!==t&&"list"!==t&&"form"!==t&&"width"!==t&&"height"!==t)&&t in e.dom}var T=/[A-Z]/g;function P(e){return"-"+e.toLowerCase()}function I(e){return"-"===e[0]&&"-"===e[1]?e:"cssFloat"===e?"float":e.replace(T,P)}function $(e,t,n){if(t===n);else if(null==n)e.style.cssText="";else if("object"!=typeof n)e.style.cssText=n;else if(null==t||"object"!=typeof t)for(var r in e.style.cssText="",n)null!=(o=n[r])&&e.style.setProperty(I(r),String(o));else{for(var r in n){var o;null!=(o=n[r])&&(o=String(o))!==String(t[r])&&e.style.setProperty(I(r),o)}for(var r in t)null!=t[r]&&null==n[r]&&e.style.removeProperty(I(r))}}function D(){this._=t}function L(e,t,n){if(null!=e.events){if(e.events[t]===n)return;null==n||"function"!=typeof n&&"object"!=typeof n?(null!=e.events[t]&&e.dom.removeEventListener(t.slice(2),e.events,!1),e.events[t]=void 0):(null==e.events[t]&&e.dom.addEventListener(t.slice(2),e.events,!1),e.events[t]=n)}else null==n||"function"!=typeof n&&"object"!=typeof n||(e.events=new D,e.dom.addEventListener(t.slice(2),e.events,!1),e.events[t]=n)}function _(e,t,n){"function"==typeof e.oninit&&a.call(e.oninit,t),"function"==typeof e.oncreate&&n.push(a.bind(e.oncreate,t))}function R(e,t,n){"function"==typeof e.onupdate&&n.push(a.bind(e.onupdate,t))}return D.prototype=Object.create(null),D.prototype.handleEvent=function(e){var t,n=this["on"+e.type];"function"==typeof n?t=n.call(e.currentTarget,e):"function"==typeof n.handleEvent&&n.handleEvent(e),this._&&!1!==e.redraw&&(0,this._)(),!1===t&&(e.preventDefault(),e.stopPropagation())},function(e,n,o){if(!e)throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var i=[],l=u(),a=e.namespaceURI;null==e.vnodes&&(e.textContent=""),n=r.normalizeChildren(Array.isArray(n)?n:[n]);var s=t;try{t="function"==typeof o?o:void 0,p(e,e.vnodes,n,i,null,"http://www.w3.org/1999/xhtml"===a?void 0:a)}finally{t=s}e.vnodes=n,null!=l&&u()!==l&&"function"==typeof l.focus&&l.focus();for(var c=0;c<i.length;c++)i[c]()}}},742:(e,t,n)=>{var r=n(178);e.exports=function(e){return null==e&&(e=""),r("<",void 0,void 0,e,void 0,void 0)}},178:e=>{function t(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,events:void 0,instance:void 0}}t.normalize=function(e){return Array.isArray(e)?t("[",void 0,void 0,t.normalizeChildren(e),void 0,void 0):null==e||"boolean"==typeof e?null:"object"==typeof e?e:t("#",void 0,void 0,String(e),void 0,void 0)},t.normalizeChildren=function(e){var n=[];if(e.length){for(var r=null!=e[0]&&null!=e[0].key,o=1;o<e.length;o++)if((null!=e[o]&&null!=e[o].key)!==r)throw new TypeError("Vnodes must either always have keys or never have keys!");for(o=0;o<e.length;o++)n[o]=t.normalize(e[o])}return n},e.exports=t},74:(e,t,n)=>{var r=n(164),o=n(165);e.exports=n(775)(window,r,o.redraw)},775:(e,t,n)=>{var r=n(249);e.exports=function(e,t,n){var o=0;function i(e){return new t(e)}function l(e){return function(o,l){"string"!=typeof o?(l=o,o=o.url):null==l&&(l={});var a=new t((function(t,n){e(r(o,l.params),l,(function(e){if("function"==typeof l.type)if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]=new l.type(e[n]);else e=new l.type(e);t(e)}),n)}));if(!0===l.background)return a;var u=0;function s(){0==--u&&"function"==typeof n&&n()}return function e(t){var n=t.then;return t.constructor=i,t.then=function(){u++;var r=n.apply(t,arguments);return r.then(s,(function(e){if(s(),0===u)throw e})),e(r)},t}(a)}}function a(e,t){for(var n in e.headers)if({}.hasOwnProperty.call(e.headers,n)&&t.test(n))return!0;return!1}return i.prototype=t.prototype,i.__proto__=t,{request:l((function(t,n,r,o){var i,l=null!=n.method?n.method.toUpperCase():"GET",u=n.body,s=!(null!=n.serialize&&n.serialize!==JSON.serialize||u instanceof e.FormData),c=n.responseType||("function"==typeof n.extract?"":"json"),f=new e.XMLHttpRequest,d=!1,p=f,h=f.abort;for(var v in f.abort=function(){d=!0,h.call(this)},f.open(l,t,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),s&&null!=u&&!a(n,/^content-type$/i)&&f.setRequestHeader("Content-Type","application/json; charset=utf-8"),"function"==typeof n.deserialize||a(n,/^accept$/i)||f.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(f.withCredentials=n.withCredentials),n.timeout&&(f.timeout=n.timeout),f.responseType=c,n.headers)({}).hasOwnProperty.call(n.headers,v)&&f.setRequestHeader(v,n.headers[v]);f.onreadystatechange=function(e){if(!d&&4===e.target.readyState)try{var i,l=e.target.status>=200&&e.target.status<300||304===e.target.status||/^file:\/\//i.test(t),a=e.target.response;if("json"===c?e.target.responseType||"function"==typeof n.extract||(a=JSON.parse(e.target.responseText)):c&&"text"!==c||null==a&&(a=e.target.responseText),"function"==typeof n.extract?(a=n.extract(e.target,n),l=!0):"function"==typeof n.deserialize&&(a=n.deserialize(a)),l)r(a);else{try{i=e.target.responseText}catch(e){i=a}var u=new Error(i);u.code=e.target.status,u.response=a,o(u)}}catch(e){o(e)}},"function"==typeof n.config&&(f=n.config(f,n,t)||f)!==p&&(i=f.abort,f.abort=function(){d=!0,i.call(this)}),null==u?f.send():"function"==typeof n.serialize?f.send(n.serialize(u)):u instanceof e.FormData?f.send(u):f.send(JSON.stringify(u))})),jsonp:l((function(t,n,r,i){var l=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+o++,a=e.document.createElement("script");e[l]=function(t){delete e[l],a.parentNode.removeChild(a),r(t)},a.onerror=function(){delete e[l],a.parentNode.removeChild(a),i(new Error("JSONP request failed"))},a.src=t+(t.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(l),e.document.documentElement.appendChild(a)}))}}},843:(e,t,n)=>{var r=n(165);e.exports=n(223)(window,r)}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(865),t=n.n(e);const r={view:function(e){return t()("main",[t()("div.navbar",[t()("div.container",[t()("ul.nav",[t()("li",[t()("a",{href:"#!/"},"Me")]),t()("li",[t()("a",{href:"#!/hobby"},"Hobby")]),t()("li",[t()("a",{href:"#!/days"},"Namnsdag")])])])]),t()("section.container",e.children)])}},o={view:function(){return[t()("h1","Emil Folino"),t()("p","My name is Emil, I'm originally from Denmark, but now I live in Sweden."),t()("p","I run orienteering and drive an old Saab.")]}},i={view:function(){return[t()("h1","My hobby"),t()("p","I run orienteering most of the time.")]}};function l(e){return e<10&&(e="0"+e),e}function a(e){return e.getFullYear()+"-"+l(parseInt(e.getMonth())+1)+"-"+l(parseInt(e.getDate()))}const u={view:function(){var e=new Date,n=[];n.push(e);for(var r=1;r<10;r++){var o=new Date;o.setDate(e.getDate()+r),n.push(o)}return[t()("h1","Namnsdagar"),t()("ul.days",n.map((function(e){return t()("li",[t()("a",{href:"#!/nameday/"+a(e)},a(e))])})))]}},s={currentDate:"1970-01-01",currentNames:"",load:function(e){s.currentDate=e;var n=e.split("-"),r="https://api.dryg.net/dagar/v2.1/"+n[0]+"/"+n[1]+"/"+n[2];return t().request({method:"GET",url:r}).then((function(e){s.currentNames=e.dagar[0].namnsdag.join(" - ")}))}},c=s,f={oninit:function(e){c.load(e.attrs.date)},view:function(){return[t()("h1","Dagens namn "+c.currentDate),t()("p",c.currentNames)]}};t().route(document.body,"/",{"/":{render:function(){return t()(r,t()(o))}},"/hobby":{render:function(){return t()(r,t()(i))}},"/days":{render:function(){return t()(r,t()(u))}},"/nameday/:date":{render:function(e){return t()(r,t()(f,e.attrs))}}})})()})();