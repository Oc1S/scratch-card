(()=>{"use strict";var e,a,t,r,o,n={},f={};function c(e){var a=f[e];if(void 0!==a)return a.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=n,c.c=f,e=[],c.O=(a,t,r,o)=>{if(!t){var n=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],o=e[u][2];for(var f=!0,d=0;d<t.length;d++)(!1&o||n>=o)&&Object.keys(c.O).every((e=>c.O[e](t[d])))?t.splice(d--,1):(f=!1,o<n&&(n=o));if(f){e.splice(u--,1);var i=r();void 0!==i&&(a=i)}}return a}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,r,o]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var n={};a=a||[null,t({}),t([]),t(t)];for(var f=2&r&&e;"object"==typeof f&&!~a.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((a=>n[a]=()=>e[a]));return n.default=()=>e,c.d(o,n),o},c.d=(e,a)=>{for(var t in a)c.o(a,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,t)=>(c.f[t](e,a),a)),[])),c.u=e=>"assets/js/"+({48:"a94703ab",98:"a7bd4aaa",235:"a7456010",262:"18c41134",317:"af76aa86",401:"17896441",579:"9a2ef5f8",583:"1df93b7f",647:"5e95c892",724:"dff1c289",736:"e44a2883",742:"aba21aa0",748:"822bd8ab",863:"f55d3e7a",933:"603f1ac4",953:"1e4232ab",969:"14eb3368",974:"5c868d36",976:"0e384e19"}[e]||e)+"."+{48:"05cb1730",98:"05ea238d",235:"0b45bc0b",262:"8608993a",276:"d2fb0807",317:"f33f228d",401:"555710df",579:"79324227",583:"b5e028d3",647:"a99da092",723:"285d1dee",724:"dac39e1d",736:"7c205566",742:"68c8a52d",748:"b91f7a65",863:"e4c4068c",933:"706a4d2d",953:"fce71f15",969:"4c01d153",974:"cba2f3f5",976:"64443ae0"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},o="apps-docs:",c.l=(e,a,t,n)=>{if(r[e])r[e].push(a);else{var f,d;if(void 0!==t)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var b=i[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==o+t){f=b;break}}f||(d=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",o+t),f.src=e),r[e]=[a];var l=(a,t)=>{f.onerror=f.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),d&&document.head.appendChild(f)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/scratch-card/zh-Hans/",c.gca=function(e){return e={17896441:"401",a94703ab:"48",a7bd4aaa:"98",a7456010:"235","18c41134":"262",af76aa86:"317","9a2ef5f8":"579","1df93b7f":"583","5e95c892":"647",dff1c289:"724",e44a2883:"736",aba21aa0:"742","822bd8ab":"748",f55d3e7a:"863","603f1ac4":"933","1e4232ab":"953","14eb3368":"969","5c868d36":"974","0e384e19":"976"}[e]||e,c.p+c.u(e)},(()=>{var e={354:0,869:0};c.f.j=(a,t)=>{var r=c.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(354|869)$/.test(a))e[a]=0;else{var o=new Promise(((t,o)=>r=e[a]=[t,o]));t.push(r[2]=o);var n=c.p+c.u(a),f=new Error;c.l(n,(t=>{if(c.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+a+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,r[1](f)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,t)=>{var r,o,n=t[0],f=t[1],d=t[2],i=0;if(n.some((a=>0!==e[a]))){for(r in f)c.o(f,r)&&(c.m[r]=f[r]);if(d)var u=d(c)}for(a&&a(t);i<n.length;i++)o=n[i],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(u)},t=self.webpackChunkapps_docs=self.webpackChunkapps_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();