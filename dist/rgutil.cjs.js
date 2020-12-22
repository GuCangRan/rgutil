"use strict";Object.defineProperty(exports,"__esModule",{value:!0});let e=[];let t=[];const r=(e,t=null,o="parent_id")=>e.filter((e=>e[o]===t)).map((t=>({...t,children:r(e,t.id)}))),o=(e=0,t=0)=>parseInt(Math.random()*(t-e+1)+e,10),a=(e,t=new WeakMap)=>{if(e instanceof RegExp)return new RegExp(e);if(e instanceof Date)return new Date(e);if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);let r=new e.constructor;t.set(e,r);for(let o in e)e.hasOwnProperty(o)&&(r[o]=a(e[o],t));return r},s=e=>{var t,r;for(r in Object.freeze(e),e)t=e[r],e.hasOwnProperty(r)&&"object"==typeof t&&!Object.isFrozen(t)&&s(t)},n=(e,t,r=24)=>{let o=Date.now()+60*r*60*1e3;return o=new Date(o).toUTCString(),document.cookie=e+"="+encodeURIComponent(t)+(r?"; expires="+o:"")+";path=/;",!0},i=e=>{let t=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),r=document.cookie.match(t);return r?r[2]:null};const l={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){e=String(e);let t,r,o,a,s,n,i,c="",p=0;for(e=l._utf8_encode(e);p<e.length;)t=e.charCodeAt(p++),r=e.charCodeAt(p++),o=e.charCodeAt(p++),a=t>>2,s=(3&t)<<4|r>>4,n=(15&r)<<2|o>>6,i=63&o,isNaN(r)?n=i=64:isNaN(o)&&(i=64),c=c+l._keyStr.charAt(a)+l._keyStr.charAt(s)+l._keyStr.charAt(n)+l._keyStr.charAt(i);return c},decode:function(e){let t,r,o,a,s,n,i,c="",p=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");p<e.length;)a=l._keyStr.indexOf(e.charAt(p++)),s=l._keyStr.indexOf(e.charAt(p++)),n=l._keyStr.indexOf(e.charAt(p++)),i=l._keyStr.indexOf(e.charAt(p++)),t=a<<2|s>>4,r=(15&s)<<4|n>>2,o=(3&n)<<6|i,c+=String.fromCharCode(t),64!=n&&(c+=String.fromCharCode(r)),64!=i&&(c+=String.fromCharCode(o));return c=l._utf8_decode(c),c},_utf8_encode:function(e){e=e.replace(/rn/g,"n");let t="";for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(e){let t="",r=0,o=0,a=0;for(;r<e.length;)o=e.charCodeAt(r),o<128?(t+=String.fromCharCode(o),r++):o>191&&o<224?(a=e.charCodeAt(r+1),t+=String.fromCharCode((31&o)<<6|63&a),r+=2):(a=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&o)<<12|(63&a)<<6|63&c3),r+=3);return t}},c=function(e){function t(e,t){return e<<t|e>>>32-t}function r(e,t){let r,o,a,s,n;return a=2147483648&e,s=2147483648&t,r=1073741824&e,o=1073741824&t,n=(1073741823&e)+(1073741823&t),r&o?2147483648^n^a^s:r|o?1073741824&n?3221225472^n^a^s:1073741824^n^a^s:n^a^s}function o(e,o,a,s,n,i,l){return e=r(e,r(r(function(e,t,r){return e&t|~e&r}(o,a,s),n),l)),r(t(e,i),o)}function a(e,o,a,s,n,i,l){return e=r(e,r(r(function(e,t,r){return e&r|t&~r}(o,a,s),n),l)),r(t(e,i),o)}function s(e,o,a,s,n,i,l){return e=r(e,r(r(function(e,t,r){return e^t^r}(o,a,s),n),l)),r(t(e,i),o)}function n(e,o,a,s,n,i,l){return e=r(e,r(r(function(e,t,r){return t^(e|~r)}(o,a,s),n),l)),r(t(e,i),o)}function i(e){let t,r,o="",a="";for(r=0;r<=3;r++)t=e>>>8*r&255,a="0"+t.toString(16),o+=a.substr(a.length-2,2);return o}let l,c,p,u,d,h,f,g,m,x=Array();for(x=function(e){let t,r=e.length,o=r+8,a=16*((o-o%64)/64+1),s=Array(a-1),n=0,i=0;for(;i<r;)t=(i-i%4)/4,n=i%4*8,s[t]=s[t]|e.charCodeAt(i)<<n,i++;return t=(i-i%4)/4,n=i%4*8,s[t]=s[t]|128<<n,s[a-2]=r<<3,s[a-1]=r>>>29,s}(e=function(e){e=e.replace(/\r\n/g,"\n");let t="";for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t}(e)),h=1732584193,f=4023233417,g=2562383102,m=271733878,l=0;l<x.length;l+=16)c=h,p=f,u=g,d=m,h=o(h,f,g,m,x[l+0],7,3614090360),m=o(m,h,f,g,x[l+1],12,3905402710),g=o(g,m,h,f,x[l+2],17,606105819),f=o(f,g,m,h,x[l+3],22,3250441966),h=o(h,f,g,m,x[l+4],7,4118548399),m=o(m,h,f,g,x[l+5],12,1200080426),g=o(g,m,h,f,x[l+6],17,2821735955),f=o(f,g,m,h,x[l+7],22,4249261313),h=o(h,f,g,m,x[l+8],7,1770035416),m=o(m,h,f,g,x[l+9],12,2336552879),g=o(g,m,h,f,x[l+10],17,4294925233),f=o(f,g,m,h,x[l+11],22,2304563134),h=o(h,f,g,m,x[l+12],7,1804603682),m=o(m,h,f,g,x[l+13],12,4254626195),g=o(g,m,h,f,x[l+14],17,2792965006),f=o(f,g,m,h,x[l+15],22,1236535329),h=a(h,f,g,m,x[l+1],5,4129170786),m=a(m,h,f,g,x[l+6],9,3225465664),g=a(g,m,h,f,x[l+11],14,643717713),f=a(f,g,m,h,x[l+0],20,3921069994),h=a(h,f,g,m,x[l+5],5,3593408605),m=a(m,h,f,g,x[l+10],9,38016083),g=a(g,m,h,f,x[l+15],14,3634488961),f=a(f,g,m,h,x[l+4],20,3889429448),h=a(h,f,g,m,x[l+9],5,568446438),m=a(m,h,f,g,x[l+14],9,3275163606),g=a(g,m,h,f,x[l+3],14,4107603335),f=a(f,g,m,h,x[l+8],20,1163531501),h=a(h,f,g,m,x[l+13],5,2850285829),m=a(m,h,f,g,x[l+2],9,4243563512),g=a(g,m,h,f,x[l+7],14,1735328473),f=a(f,g,m,h,x[l+12],20,2368359562),h=s(h,f,g,m,x[l+5],4,4294588738),m=s(m,h,f,g,x[l+8],11,2272392833),g=s(g,m,h,f,x[l+11],16,1839030562),f=s(f,g,m,h,x[l+14],23,4259657740),h=s(h,f,g,m,x[l+1],4,2763975236),m=s(m,h,f,g,x[l+4],11,1272893353),g=s(g,m,h,f,x[l+7],16,4139469664),f=s(f,g,m,h,x[l+10],23,3200236656),h=s(h,f,g,m,x[l+13],4,681279174),m=s(m,h,f,g,x[l+0],11,3936430074),g=s(g,m,h,f,x[l+3],16,3572445317),f=s(f,g,m,h,x[l+6],23,76029189),h=s(h,f,g,m,x[l+9],4,3654602809),m=s(m,h,f,g,x[l+12],11,3873151461),g=s(g,m,h,f,x[l+15],16,530742520),f=s(f,g,m,h,x[l+2],23,3299628645),h=n(h,f,g,m,x[l+0],6,4096336452),m=n(m,h,f,g,x[l+7],10,1126891415),g=n(g,m,h,f,x[l+14],15,2878612391),f=n(f,g,m,h,x[l+5],21,4237533241),h=n(h,f,g,m,x[l+12],6,1700485571),m=n(m,h,f,g,x[l+3],10,2399980690),g=n(g,m,h,f,x[l+10],15,4293915773),f=n(f,g,m,h,x[l+1],21,2240044497),h=n(h,f,g,m,x[l+8],6,1873313359),m=n(m,h,f,g,x[l+15],10,4264355552),g=n(g,m,h,f,x[l+6],15,2734768916),f=n(f,g,m,h,x[l+13],21,1309151649),h=n(h,f,g,m,x[l+4],6,4149444226),m=n(m,h,f,g,x[l+11],10,3174756917),g=n(g,m,h,f,x[l+2],15,718787259),f=n(f,g,m,h,x[l+9],21,3951481745),h=r(h,c),f=r(f,p),g=r(g,u),m=r(m,d);return(i(h)+i(f)+i(g)+i(m)).toLowerCase()},p=l.encode,u=l.decode;class d{constructor(e){this.cache=new Map,this.capacity=e}get(e){if(!this.cache.has(e))return-1;const t=this.cache.get(e);return this.cache.delete(e),this.cache.set(e,t),t}put(e,t){this.size<=0||(this.cache.has(e)&&this.cache.delete(e),this.cache.set(e,t),this.cache.size>this.capacity&&this.cache.delete(this.cache.keys().next().value))}clear(){this.cache.clear()}}class h{constructor(e){this.size=e,this.values=new Map,this.times=new Map}get(e){if(this.values.has(e)){let t=this.values.get(e)||0,r=this.times.get(e)||0;return this.values.delete(e),this.times.delete(e),this.values.set(e,t),this.times.set(e,r+1),t}return-1}put(e,t){if(this.size<=0)return;let r=1,o=Math.min(...this.times.values());if(this.values.has(e)&&(r=(this.times.get(e)||0)+1,this.values.delete(e),this.times.delete(e)),this.values.set(e,t),this.times.set(e,r),this.size<this.values.size){let e=this.values.keys(),t=e.next().value;for(;t&&this.times.get(t)!==o;)t=e.next().value;this.values.delete(t),this.times.delete(t)}}clear(){this.values.clear(),this.times.clear()}}exports.LFUCache=e=>new h(e),exports.LRUCache=e=>new d(e),exports.arrAsList=e=>Array.isArray(e)?e:[e],exports.arrAverage=(...e)=>e.reduce(((e,t)=>e+t),0)/e.length,exports.arrAverageBy=(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((e,t)=>e+t),0)/e.length,exports.arrCountOcc=(e,t)=>e.reduce(((e,r)=>r===t?e+1:e+0),0),exports.arrDeepFlatten=(e,t=1/0)=>e.flat(t),exports.arrDiff=(e,t)=>{const r=new Set(t);return e.filter((e=>!r.has(e)))},exports.arrDistinct=e=>[...new Set(e)],exports.arrIndexOfAll=(e,t)=>e.reduce(((e,r,o)=>r===t?[...e,o]:e),[]),exports.arrIntersection=(e,t)=>{const r=new Set(t);return e.filter((e=>r.has(e)))},exports.arrMax=e=>Math.max(...e),exports.arrMin=e=>Math.min(...e),exports.arrMinN=(e,t=1)=>[...e].sort(((e,t)=>e-t)).slice(0,t),exports.arrNonUnique=e=>e.filter((t=>e.indexOf(t)!==e.lastIndexOf(t))),exports.arrNthElement=(e,t=0)=>t>=e.length?[]:(t>0?e.slice(t,t+1):e.slice(t))[0],exports.arrRandomInRange=(e,t,r=1)=>Array.from({length:r},(()=>Math.floor(Math.random()*(t-e+1))+e)),exports.arrRandomN=([...e],t=1)=>{let r=e.length;for(;r;){const t=Math.floor(Math.random()*r--);[e[r],e[t]]=[e[t],e[r]]}return e.slice(0,t)},exports.arrRandomSample=e=>e[Math.floor(Math.random()*e.length)],exports.arrShuffle=([...e])=>{let t=e.length;for(;t;){const r=Math.floor(Math.random()*t--);[e[t],e[r]]=[e[r],e[t]]}return e},exports.arrToTree=r,exports.arrTranspose=e=>e[0].map(((t,r)=>e.map((e=>e[r])))),exports.arrUnZip=e=>e.reduce(((e,t)=>(t.forEach(((t,r)=>e[r].push(t))),e)),Array.from({length:Math.max(...e.map((e=>e.length)))},(e=>[]))),exports.arrWithValues=(e,t=0)=>Array(e).fill(t),exports.arrZip=(...e)=>Array.from({length:Math.max(...e.map((e=>e.length)))},((t,r)=>e.map((e=>e[r])))),exports.base64Decode=u,exports.base64Encode=p,exports.byteSize=e=>new Blob([e]).size,exports.bytesToSize=e=>{if(0===e)return"0 B";let t=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,t)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]},exports.camelCase=e=>{const t=e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/[_.\- ]+/g,"-").replace(/(^-)|(-$)/g,"").split("-");let r=t[0];return t.shift(),r+t.map((e=>e.replace(/\w/,(e=>e.toUpperCase())))).join("")},exports.capitalize=([e,...t])=>e.toUpperCase()+t.join(""),exports.capitalizeEveryWord=e=>e.replace(/\b[a-z]/g,(e=>e.toUpperCase())),exports.characterCount=(e="",t="")=>e.split(t).length-1,exports.copyText=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",document.body.appendChild(t);const r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);return t.select(),document.execCommand("copy"),document.body.removeChild(t),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r)),!0},exports.dateFormat=(e,t,r=8)=>{let o=t?new Date(t.getTime()):new Date;o.setHours(o.getHours()+r);let[a,s,n,i,l,c,p]=o.toISOString().split(/[^0-9]/).slice(0,-1),u={yyyy:a,yyy:a.substring(1,4),yy:a.substring(2,4),MM:s,M:parseInt(s),dd:n,d:parseInt(n),HH:i,H:parseInt(i),mm:l,m:parseInt(l),ss:c,s:parseInt(c),fff:p,ff:parseInt(p),f:parseInt(p)};return e.replace(/y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}/g,(e=>u[e]))},exports.dayOfYear=e=>Math.floor((e-new Date(e.getFullYear(),0,0))/864e5),exports.daysDiff=(e,t)=>Math.ceil(Math.abs(e-t)/864e5),exports.daysInMonth=(e,t)=>new Date(e,t,0).getDate(),exports.debounce=(e,t)=>{let r=null;return(...o)=>{clearTimeout(r),r=setTimeout((()=>{e(...o)}),t)}},exports.decapitalize=([e,...t])=>e.toLowerCase()+t.join(""),exports.decapitalizeEveryWord=e=>e.replace(/\b[A-Z]/g,(e=>e.toLowerCase())),exports.deepClone=a,exports.deepFreeze=s,exports.delCookie=e=>!!i(e)&&n(e,"",-1),exports.digitUpperCase=(e=0)=>{let t=["角","分"],r=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],o=[["元","万","亿"],["","拾","佰","仟"]],a=e<0?"欠":"";e=Math.abs(e);let s="";for(let o=0;o<t.length;o++)s+=(r[Math.floor(10*e*Math.pow(10,o))%10]+t[o]).replace(/零./,"");s=s||"整",e=Math.floor(e);for(let t=0;t<o[0].length&&e>0;t++){let a="";for(let t=0;t<o[1].length&&e>0;t++)a=r[e%10]+o[1][t]+a,e=Math.floor(e/10);s=a.replace(/(零.)*零$/,"").replace(/^$/,"零")+o[0][t]+s}return a+s.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},exports.escapeHTML=e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e))),exports.formatNumber=(e,t=3,r=",")=>{let o=new RegExp(`\\B(?=(\\d{${t}})+(?!\\d))`,"g");return e.toString().replace(o,r)},exports.formatPath=e=>e.replace(/[\\/]+/g,"/"),exports.formatString=(e,t=3,r=",")=>{let o=new RegExp(`\\B(?=(\\w{${t}})+(?!\\w))`,"g");return e.replace(o,r)},exports.getCookie=i,exports.getLocalStorage=e=>localStorage.getItem(e),exports.getSelectedText=()=>window.getSelection().toString(),exports.getUUID=(e="-")=>{let t=[],r="0123456789abcdef";for(let e=0;e<36;e++)t[e]=r.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=r.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]=e,t.join("")},exports.goToTop=(e=!1)=>{if(e)return window.scrollTo(0,0),!0;const t=document.documentElement.scrollTop||document.body.scrollTop;return t>0&&(window.requestAnimationFrame(scrollToTop),window.scrollTo(0,t-t/8)),!0},exports.goToTopClassName=e=>{let t=document.getElementsByClassName(e);if(!t[0])throw`未能找到class为 ${e} 的节点,请确认`;t[0].scrollTo(0,0)},exports.goToTopId=e=>{let t=document.getElementById(e);if(!t)throw`未能找到id为 ${ID} 的节点,请确认`;t.scrollTo(0,0)},exports.hyphenate=e=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),exports.is=(e,t)=>![,null].includes(t)&&t.constructor===e,exports.isArray=e=>Array.isArray(e),exports.isAscii=e=>/^[\x00-\x7F]+$/.test(e),exports.isBrowser=()=>![typeof window,typeof document].includes("undefined"),exports.isChineseName=e=>/^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(e),exports.isDate=e=>"[object Date]"===Object.prototype.toString.call(e),exports.isEmail=e=>/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e),exports.isEmoji=e=>/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\ufe0f|\u200d|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g.test(e),exports.isEnglishName=e=>/(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(e),exports.isFloat=e=>/^-?([1-9]\d*.\d*|0.\d*[1-9]\d*|0?.0+|0)$/.test(e),exports.isFunction=e=>["[object Function]","[object GeneratorFunction]","[object AsyncFunction]","[object Promise]"].includes(Object.prototype.toString.call(e)),exports.isHTMLTag=t=>(0==e.length&&(e="html,body,base,head,link,meta,style,title, \n        address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section, \n        div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul, \n        a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby, \n        s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video, \n        embed,object,param,source,canvas,script,noscript,del,ins, \n        caption,col,colgroup,table,thead,tbody,td,th,tr, \n        button,datalist,fieldset,form,input,label,legend,meter,optgroup,option, \n        output,progress,select,textarea, \n        details,dialog,menu,menuitem,summary, \n        content,element,shadow,template,blockquote,iframe,tfoot".replace(/\s+/g,"").split(",")),e.includes(t)),exports.isHasWhitespace=e=>/\s/.test(e),exports.isHexColor=e=>/^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e),exports.isHexadecimal=e=>/^[A-F0-9]+$/i.test(e),exports.isIPV4=e=>/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e),exports.isIPV6=e=>/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(e),exports.isInteger=e=>/^(-|\+)?\d+$/.test(e),exports.isLeapYear=e=>0==e%4&&(e%100!=0||e%400==0),exports.isLicensePlate=e=>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}(?:(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/.test(e),exports.isMacAddress=e=>/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i.test(e),exports.isNegativeFloat=e=>/^-([1-9]\d*.\d*|0.\d*[1-9]\d*)$/.test(e),exports.isNegativeNum=e=>/^-[1-9]\d*$/.test(e),exports.isNil=e=>null==e,exports.isNull=e=>null===e,exports.isNumber=e=>!isNaN(parseFloat(e))&&isFinite(e),exports.isObject=e=>null!==e&&"object"==typeof e,exports.isPhone=e=>/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e),exports.isPlainObject=e=>!!e&&"object"==typeof e&&(null===e.__proto__||e.__proto__===Object.prototype),exports.isPositiveNum=e=>/^[1-9]\d*$/.test(e),exports.isPostiveFloat=e=>/^[1-9]\d*.\d*|0.\d*[1-9]\d*$/.test(e),exports.isPrime=e=>e>1&&Array(Math.floor(Math.sqrt(e))-1).fill(0).map(((e,t)=>t+2)).every((t=>e%t!=0)),exports.isPwdStrength=e=>/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(e),exports.isRegExp=e=>"[object RegExp]"===Object.prototype.toString.call(e),exports.isString=e=>"[object String]"===Object.prototype.toString.call(e),exports.isSubnetMask=e=>/^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(e),exports.isSvgTag=e=>(0==t.length&&(t="svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face, \n        foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern, \n        polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view".replace(/\s+/g,"").split(",")),t.includes(e)),exports.isUrl=e=>/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(e),exports.isVersion=e=>/^\d+(?:\.\d+){2}$/.test(e),exports.isWeChat=e=>/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(e),exports.md5=c,exports.monthDiff=(e,t)=>Math.max(0,12*(t.getFullYear()-e.getFullYear())-e.getMonth()+t.getMonth()),exports.monthNameChinese=(e,t=!0)=>t?["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"][e.getMonth()]:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"][e.getMonth()],exports.monthNameEnglish=(e,t=!1)=>t?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]:["January","February","March","April","May","June","July","August","September","October"," November","December"][e.getMonth()],exports.objType=e=>Object.prototype.toString.call(e).slice(8,-1),exports.once=e=>{let t,r=!1;return(...o)=>(r||(r=!0,t=e.apply(null,o),e=null),t)},exports.pageViewHeight=()=>{let e=document;return("BackCompat"==e.compatMode?e.body:e.documentElement).clientHeight},exports.pageViewWidth=()=>{let e=document;return("BackCompat"==e.compatMode?e.body:e.documentElement).clientWidth},exports.privacyName=(e,t="**")=>e.replace(/^(\S)(\S|\s)*$/,`$1${t}`),exports.privacyPhone=(e,t="****")=>(e+"").replace(/(\d{3})\d{1,}(\d{4})/,`$1${t}$2`),exports.randomBoolean=()=>Math.random()>=.5,exports.randomCode=(e=4)=>{let t="",r=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];for(;e--;)t+=r[o(0,r.length-1)];return t},exports.randomFloat=(e=0,t=1)=>Math.random()*(t-e)+e,exports.randomHexColor=()=>"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6),exports.randomIP=()=>Array(4).fill(0).map(((e,t)=>Math.floor(255*Math.random())+(0===t?1:0))).join("."),exports.randomNum=o,exports.removeHTMLTags=e=>e.replace(/<[^>]*>/g,""),exports.scrollPostion=(e=window)=>({x:void 0!==e.pageXOffset?e.pageXOffset:e.scrollLeft,y:void 0!==e.pageYOffset?e.pageYOffset:e.scrollTop}),exports.setCookie=n,exports.setLocalStorage=(e,t)=>("object"==typeof t&&(t=JSON.stringify(t)),localStorage.setItem(e,t),!0),exports.splitLines=e=>e.split(/\r?\n/),exports.splitPath=(e="")=>{const t=e.match(/^([\s\S]*?)((?:\.{1,2}|[^\\/]+?|)(\.[^./\\]*|))(?:[\\/]*)$/);return{dir:t[1],name:t[2],ext:t[3]}},exports.starScore=e=>(e<0?e=0:e>5&&(e=5),"★★★★★☆☆☆☆☆".slice(5-e,10-e)),exports.subText=(e,t=0,r="...")=>e.length>t?e.substr(0,t)+r:e,exports.throttle=(e,t=100)=>{let r=!1;return(...o)=>{r||(r=!0,r=setTimeout((()=>{e(...o),r=!1}),t))}},exports.timeDistance=e=>{let t=Math.round((Date.now()-e.getTime())/1e3);if(0==t)return"此刻";let r=["年","个月","星期","天","小时","分钟","秒"],o=[31536e3,2592e3,604800,86400,3600,60,1];for(let e=0;e<o.length;e++){let a=Math.floor(t/o[e]);if(0!=a)return a+r[e]+"前"}},exports.unescapeHTML=e=>e.replace(/(&amp;|&lt;|&gt;|&#39;|&quot;)/g,(e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'}[e]||e))),exports.urlParam=(e,t=null,r=window.location.href)=>new URLSearchParams(new URL(r).search).get(e)||t,exports.version="1.1.9",exports.weekDayChinese=e=>["周日","周一","周二","周三","周四","周五","周六"][e.getDay()],exports.weekDayEnglish=e=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()];
