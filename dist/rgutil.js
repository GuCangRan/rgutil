var $R=function(e){"use strict";const t=(e,r=null,o="parent_id")=>e.filter((e=>e[o]===r)).map((r=>({...r,children:t(e,r.id)}))),r=(e=0,t=0)=>parseInt(Math.random()*(t-e+1)+e,10),o={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){e=String(e);let t,r,a,n,i,l,s,c="",d=0;for(e=o._utf8_encode(e);d<e.length;)t=e.charCodeAt(d++),r=e.charCodeAt(d++),a=e.charCodeAt(d++),n=t>>2,i=(3&t)<<4|r>>4,l=(15&r)<<2|a>>6,s=63&a,isNaN(r)?l=s=64:isNaN(a)&&(s=64),c=c+o._keyStr.charAt(n)+o._keyStr.charAt(i)+o._keyStr.charAt(l)+o._keyStr.charAt(s);return c},decode:function(e){let t,r,a,n,i,l,s,c="",d=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");d<e.length;)n=o._keyStr.indexOf(e.charAt(d++)),i=o._keyStr.indexOf(e.charAt(d++)),l=o._keyStr.indexOf(e.charAt(d++)),s=o._keyStr.indexOf(e.charAt(d++)),t=n<<2|i>>4,r=(15&i)<<4|l>>2,a=(3&l)<<6|s,c+=String.fromCharCode(t),64!=l&&(c+=String.fromCharCode(r)),64!=s&&(c+=String.fromCharCode(a));return c=o._utf8_decode(c),c},_utf8_encode:function(e){e=e.replace(/rn/g,"n");let t="";for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(e){let t="",r=0,o=0,a=0;for(;r<e.length;)o=e.charCodeAt(r),o<128?(t+=String.fromCharCode(o),r++):o>191&&o<224?(a=e.charCodeAt(r+1),t+=String.fromCharCode((31&o)<<6|63&a),r+=2):(a=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&o)<<12|(63&a)<<6|63&c3),r+=3);return t}},a=o.encode,n=o.decode,i=(e,t,r=24)=>{let o=Date.now()+24*r*60*60*1e3;return o=new Date(o).toUTCString(),document.cookie=e+"="+encodeURIComponent(t)+(r?"; expires="+o:"")+";path=/;",!0},l=e=>{let t=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),r=document.cookie.match(t);return r?r[2]:null};return e.arrAsList=e=>Array.isArray(e)?e:[e],e.arrAverage=(...e)=>e.reduce(((e,t)=>e+t),0)/e.length,e.arrAverageBy=(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((e,t)=>e+t),0)/e.length,e.arrCountOcc=(e,t)=>e.reduce(((e,r)=>r===t?e+1:e+0),0),e.arrDeepFlatten=(e,t=1/0)=>e.flat(t),e.arrDiff=(e,t)=>{const r=new Set(t);return e.filter((e=>!r.has(e)))},e.arrDistinct=e=>[...new Set(e)],e.arrIndexOfAll=(e,t)=>e.reduce(((e,r,o)=>r===t?[...e,o]:e),[]),e.arrIntersection=(e,t)=>{const r=new Set(t);return e.filter((e=>r.has(e)))},e.arrMax=e=>Math.max(...e),e.arrMin=e=>Math.min(...e),e.arrMinN=(e,t=1)=>[...e].sort(((e,t)=>e-t)).slice(0,t),e.arrNonUnique=e=>e.filter((t=>e.indexOf(t)!==e.lastIndexOf(t))),e.arrNthElement=(e,t=0)=>t>=e.length?[]:(t>0?e.slice(t,t+1):e.slice(t))[0],e.arrRandomInRange=(e,t,r=1)=>Array.from({length:r},(()=>Math.floor(Math.random()*(t-e+1))+e)),e.arrRandomN=([...e],t=1)=>{let r=e.length;for(;r;){const t=Math.floor(Math.random()*r--);[e[r],e[t]]=[e[t],e[r]]}return e.slice(0,t)},e.arrRandomSample=e=>e[Math.floor(Math.random()*e.length)],e.arrShuffle=([...e])=>{let t=e.length;for(;t;){const r=Math.floor(Math.random()*t--);[e[t],e[r]]=[e[r],e[t]]}return e},e.arrToTree=t,e.arrWithValues=(e,t=0)=>Array(e).fill(t),e.base64Decode=n,e.base64Encode=a,e.byteSize=e=>new Blob([e]).size,e.capitalize=([e,...t])=>e.toUpperCase()+t.join(""),e.capitalizeEveryWord=e=>e.replace(/\b[a-z]/g,(e=>e.toUpperCase())),e.dateFormat=(e,t=new Date)=>{let r=new Date(t.getTime());r.setHours(r.getHours()+8);let[o,a,n,i,l,s,c]=r.toISOString().split(/[^0-9]/).slice(0,-1),d={yyyy:o,yyy:o.substring(1,4),yy:o.substring(2,4),MM:a,M:parseInt(a),dd:n,d:parseInt(n),HH:i,H:parseInt(i),mm:l,m:parseInt(l),ss:s,s:parseInt(s),fff:c,ff:parseInt(c),f:parseInt(c)};return e.replace(/y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}/g,(e=>d[e]))},e.dayOfYear=e=>Math.floor((e-new Date(e.getFullYear(),0,0))/864e5),e.daysDiff=(e,t)=>Math.ceil(Math.abs(e-t)/864e5),e.daysInMonth=(e,t)=>new Date(e,t,0).getDate(),e.debounce=(e,t)=>{let r=null;return(...o)=>{clearTimeout(r),r=setTimeout((()=>{e(...o)}),t)}},e.decapitalize=([e,...t])=>e.toLowerCase()+t.join(""),e.decapitalizeEveryWord=e=>e.replace(/\b[A-Z]/g,(e=>e.toLowerCase())),e.delCookie=e=>!!l(e)&&i(e,"",-1),e.escapeHTML=e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e))),e.formatNumber=(e,t=3,r=",")=>{let o=new RegExp(`\\B(?=(\\d{${t}})+(?!\\d))`,"g");return e.toString().replace(o,r)},e.formatString=(e,t=3,r=",")=>{let o=new RegExp(`\\B(?=(\\w{${t}})+(?!\\w))`,"g");return e.replace(o,r)},e.getCookie=l,e.getLocalStorage=e=>localStorage.getItem(e),e.getSelectedText=()=>window.getSelection().toString(),e.getType=e=>void 0===e?"undefined":null===e?"null":e.constructor.name.toLowerCase(),e.getUUID=(e="-")=>{let t=[],r="0123456789abcdef";for(let e=0;e<36;e++)t[e]=r.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=r.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]=e,t.join("")},e.goToTop=(e=!1)=>{if(e)return window.scrollTo(0,0),!0;const t=document.documentElement.scrollTop||document.body.scrollTop;return t>0&&(window.requestAnimationFrame(scrollToTop),window.scrollTo(0,t-t/8)),!0},e.goToTopClassName=e=>{let t=document.getElementsByClassName(e);if(!t[0])throw`未能找到class为 ${e} 的节点,请确认`;t[0].scrollTo(0,0)},e.goToTopId=e=>{let t=document.getElementById(e);if(!t)throw`未能找到id为 ${ID} 的节点,请确认`;t.scrollTo(0,0)},e.is=(e,t)=>![,null].includes(t)&&t.constructor===e,e.isArray=e=>Array.isArray(e),e.isAscii=e=>/^[\x00-\x7F]+$/.test(e),e.isBrowser=()=>![typeof window,typeof document].includes("undefined"),e.isChineseName=e=>/^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(e),e.isEnglishName=e=>/(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(e),e.isFunction=e=>["[object Function]","[object GeneratorFunction]","[object AsyncFunction]","[object Promise]"].includes(Object.prototype.toString.call(e)),e.isHasWhitespace=e=>/\s/.test(e),e.isHexColor=e=>/^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e),e.isHexadecimal=e=>/^[A-F0-9]+$/i.test(e),e.isInteger=e=>/^(-|\+)?\d+$/.test(e),e.isNegativeNum=e=>/^-[1-9]\d*$/.test(e),e.isNil=e=>null==e,e.isNull=e=>null===e,e.isNumber=e=>!isNaN(parseFloat(e))&&isFinite(e),e.isObject=e=>null!==e&&"object"==typeof e,e.isPlainObject=e=>!!e&&"object"==typeof e&&(null===e.__proto__||e.__proto__===Object.prototype),e.isPositiveNum=e=>/^[1-9]\d*$/.test(e),e.isPrime=e=>e>1&&Array(Math.floor(Math.sqrt(e))-1).fill(0).map(((e,t)=>t+2)).every((t=>e%t!=0)),e.isRegExp=e=>"[object RegExp]"===Object.prototype.toString.call(e),e.isString=e=>"[object String]"===Object.prototype.toString.call(e),e.isSubnetMask=e=>/^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(e),e.isWeChat=e=>/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(e),e.monthDiff=(e,t)=>Math.max(0,12*(t.getFullYear()-e.getFullYear())-e.getMonth()+t.getMonth()),e.monthNameChinese=(e,t=!0)=>t?["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"][e.getMonth()]:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"][e.getMonth()],e.monthNameEnglish=e=>["January","February","March","April","May","June","July","August","September","October"," November","December"][e.getMonth()],e.randomCode=(e=4)=>{let t="",o=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];for(;e--;)t+=o[r(0,o.length)];return t},e.randomIP=()=>Array(4).fill(0).map(((e,t)=>Math.floor(255*Math.random())+(0===t?1:0))).join("."),e.randomNum=r,e.removeHTMLTags=e=>e.replace(/<[^>]*>/g,""),e.setCookie=i,e.setLocalStorage=(e,t)=>("object"==typeof t&&(t=JSON.stringify(t)),localStorage.setItem(e,t),!0),e.splitLines=e=>e.split(/\r?\n/),e.throttle=(e,t=100)=>{let r=!1;return(...o)=>{r||(r=!0,r=setTimeout((()=>{e(...o),r=!1}),t))}},e.urlParam=(e,t=null,r=window.location.href)=>new URLSearchParams(new URL(r).search).get(e)||t,e.version="1.0.6",e.weekDayChinese=e=>["周日","周一","周二","周三","周四","周五","周六"][e.getDay()],e.weekDayEnglish=e=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],Object.defineProperty(e,"__esModule",{value:!0}),e}({});
