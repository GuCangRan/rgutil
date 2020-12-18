var e="1.1.7";const t=(e,t)=>![,null].includes(t)&&t.constructor===e,r=e=>null==e,o=e=>null===e,n=e=>!isNaN(parseFloat(e))&&isFinite(e),a=e=>Array.isArray(e),l=e=>/^[1-9]\d*$/.test(e),u=e=>/^-[1-9]\d*$/.test(e),c=e=>/^(-|\+)?\d+$/.test(e),d=e=>/^[1-9]\d*.\d*|0.\d*[1-9]\d*$/.test(e),i=e=>/^-([1-9]\d*.\d*|0.\d*[1-9]\d*)$/.test(e),s=e=>/^-?([1-9]\d*.\d*|0.\d*[1-9]\d*|0?.0+|0)$/.test(e),f=()=>![typeof window,typeof document].includes("undefined"),h=e=>e>1&&Array(Math.floor(Math.sqrt(e))-1).fill(0).map(((e,t)=>t+2)).every((t=>e%t!=0)),p=e=>/^[\x00-\x7F]+$/.test(e),g=e=>/\s/.test(e),m=e=>/^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e),y=e=>/^[A-F0-9]+$/i.test(e),b=e=>!!e&&"object"==typeof e&&(null===e.__proto__||e.__proto__===Object.prototype),S=e=>"[object RegExp]"===Object.prototype.toString.call(e),C=e=>"[object String]"===Object.prototype.toString.call(e),w=e=>null!==e&&"object"==typeof e,A=e=>["[object Function]","[object GeneratorFunction]","[object AsyncFunction]","[object Promise]"].includes(Object.prototype.toString.call(e)),M=e=>/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(e),$=e=>/^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(e),x=e=>/(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(e),j=e=>/^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(e),_=e=>/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e),F=e=>/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e);let O=[];const k=e=>(0==O.length&&(O="html,body,base,head,link,meta,style,title, \n        address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section, \n        div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul, \n        a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby, \n        s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video, \n        embed,object,param,source,canvas,script,noscript,del,ins, \n        caption,col,colgroup,table,thead,tbody,td,th,tr, \n        button,datalist,fieldset,form,input,label,legend,meter,optgroup,option, \n        output,progress,select,textarea, \n        details,dialog,menu,menuitem,summary, \n        content,element,shadow,template,blockquote,iframe,tfoot".replace(/\s+/g,"").split(",")),O.includes(e));let B=[];const D=e=>(0==B.length&&(B="svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face, \n        foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern, \n        polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view".replace(/\s+/g,"").split(",")),B.includes(e)),T=e=>"[object Date]"===Object.prototype.toString.call(e),I=e=>/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\ufe0f|\u200d|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g.test(e),Z=e=>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}(?:(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/.test(e),v=e=>/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(e),E=e=>/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e),N=e=>/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i.test(e),R=e=>/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(e),H=e=>/^\d+(?:\.\d+){2}$/.test(e),J=e=>0==e%4&&(e%100!=0||e%400==0),z=e=>[...new Set(e)],P=e=>Math.max(...e),L=e=>Math.min(...e),U=(e,t)=>e.reduce(((e,r)=>r===t?e+1:e+0),0),q=(e,t=1/0)=>e.flat(t),Y=(e,t)=>{const r=new Set(t);return e.filter((e=>!r.has(e)))},W=e=>e.filter((t=>e.indexOf(t)!==e.lastIndexOf(t))),G=(e,t=0)=>Array(e).fill(t),K=(e,t)=>{const r=new Set(t);return e.filter((e=>r.has(e)))},Q=(e,t=0)=>t>=e.length?[]:(t>0?e.slice(t,t+1):e.slice(t))[0],V=(...e)=>e.reduce(((e,t)=>e+t),0)/e.length,X=(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((e,t)=>e+t),0)/e.length,ee=e=>Array.isArray(e)?e:[e],te=(e,t)=>e.reduce(((e,r,o)=>r===t?[...e,o]:e),[]),re=(e,t=1)=>[...e].sort(((e,t)=>e-t)).slice(0,t),oe=(e,t,r=1)=>Array.from({length:r},(()=>Math.floor(Math.random()*(t-e+1))+e)),ne=e=>e[Math.floor(Math.random()*e.length)],ae=([...e],t=1)=>{let r=e.length;for(;r;){const t=Math.floor(Math.random()*r--);[e[r],e[t]]=[e[t],e[r]]}return e.slice(0,t)},le=([...e])=>{let t=e.length;for(;t;){const r=Math.floor(Math.random()*t--);[e[t],e[r]]=[e[r],e[t]]}return e},ue=(e,t=null,r="parent_id")=>e.filter((e=>e[r]===t)).map((t=>({...t,children:ue(e,t.id)}))),ce=e=>e[0].map(((t,r)=>e.map((e=>e[r])))),de=(...e)=>Array.from({length:Math.max(...e.map((e=>e.length)))},((t,r)=>e.map((e=>e[r])))),ie=e=>e.reduce(((e,t)=>(t.forEach(((t,r)=>e[r].push(t))),e)),Array.from({length:Math.max(...e.map((e=>e.length)))},(e=>[]))),se=e=>Object.prototype.toString.call(e).slice(8,-1),fe=e=>new Blob([e]).size,he=e=>e.split(/\r?\n/),pe=e=>e.replace(/<[^>]*>/g,""),ge=e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e))),me=e=>e.replace(/(&amp;|&lt;|&gt;|&#39;|&quot;)/g,(e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'}[e]||e))),ye=(e,t=3,r=",")=>{let o=new RegExp(`\\B(?=(\\d{${t}})+(?!\\d))`,"g");return e.toString().replace(o,r)},be=(e,t=3,r=",")=>{let o=new RegExp(`\\B(?=(\\w{${t}})+(?!\\w))`,"g");return e.replace(o,r)},Se=(e,t=100)=>{let r=!1;return(...o)=>{r||(r=!0,r=setTimeout((()=>{e(...o),r=!1}),t))}},Ce=(e,t)=>{let r=null;return(...o)=>{clearTimeout(r),r=setTimeout((()=>{e(...o)}),t)}},we=(e,t=null,r=window.location.href)=>new URLSearchParams(new URL(r).search).get(e)||t,Ae=(e=0,t=0)=>parseInt(Math.random()*(t-e+1)+e,10),Me=(e=4)=>{let t="",r=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];for(;e--;)t+=r[Ae(0,r.length-1)];return t},$e=()=>Array(4).fill(0).map(((e,t)=>Math.floor(255*Math.random())+(0===t?1:0))).join("."),xe=()=>"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6),je=()=>Math.random()>=.5,_e=(e=0,t=1)=>Math.random()*(t-e)+e,Fe=([e,...t])=>e.toUpperCase()+t.join(""),Oe=e=>e.replace(/\b[a-z]/g,(e=>e.toUpperCase())),ke=([e,...t])=>e.toLowerCase()+t.join(""),Be=e=>e.replace(/\b[A-Z]/g,(e=>e.toLowerCase())),De=e=>{const t=e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/[_.\- ]+/g,"-").replace(/(^-)|(-$)/g,"").split("-");let r=t[0];return t.shift(),r+t.map((e=>e.replace(/\w/,(e=>e.toUpperCase())))).join("")},Te=e=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),Ie=(e,t="****")=>(e+"").replace(/(\d{3})\d{1,}(\d{4})/,`$1${t}$2`),Ze=(e,t="**")=>e.replace(/^(\S)(\S|\s)*$/,`$1${t}`),ve=e=>{if(0===e)return"0 B";let t=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,t)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]},Ee={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){e=String(e);let t,r,o,n,a,l,u,c="",d=0;for(e=Ee._utf8_encode(e);d<e.length;)t=e.charCodeAt(d++),r=e.charCodeAt(d++),o=e.charCodeAt(d++),n=t>>2,a=(3&t)<<4|r>>4,l=(15&r)<<2|o>>6,u=63&o,isNaN(r)?l=u=64:isNaN(o)&&(u=64),c=c+Ee._keyStr.charAt(n)+Ee._keyStr.charAt(a)+Ee._keyStr.charAt(l)+Ee._keyStr.charAt(u);return c},decode:function(e){let t,r,o,n,a,l,u,c="",d=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");d<e.length;)n=Ee._keyStr.indexOf(e.charAt(d++)),a=Ee._keyStr.indexOf(e.charAt(d++)),l=Ee._keyStr.indexOf(e.charAt(d++)),u=Ee._keyStr.indexOf(e.charAt(d++)),t=n<<2|a>>4,r=(15&a)<<4|l>>2,o=(3&l)<<6|u,c+=String.fromCharCode(t),64!=l&&(c+=String.fromCharCode(r)),64!=u&&(c+=String.fromCharCode(o));return c=Ee._utf8_decode(c),c},_utf8_encode:function(e){e=e.replace(/rn/g,"n");let t="";for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(e){let t="",r=0,o=0,n=0;for(;r<e.length;)o=e.charCodeAt(r),o<128?(t+=String.fromCharCode(o),r++):o>191&&o<224?(n=e.charCodeAt(r+1),t+=String.fromCharCode((31&o)<<6|63&n),r+=2):(n=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&o)<<12|(63&n)<<6|63&c3),r+=3);return t}},Ne=Ee.encode,Re=Ee.decode,He=function(e){function t(e,t){return e<<t|e>>>32-t}function r(e,t){let r,o,n,a,l;return n=2147483648&e,a=2147483648&t,r=1073741824&e,o=1073741824&t,l=(1073741823&e)+(1073741823&t),r&o?2147483648^l^n^a:r|o?1073741824&l?3221225472^l^n^a:1073741824^l^n^a:l^n^a}function o(e,o,n,a,l,u,c){return e=r(e,r(r(function(e,t,r){return e&t|~e&r}(o,n,a),l),c)),r(t(e,u),o)}function n(e,o,n,a,l,u,c){return e=r(e,r(r(function(e,t,r){return e&r|t&~r}(o,n,a),l),c)),r(t(e,u),o)}function a(e,o,n,a,l,u,c){return e=r(e,r(r(function(e,t,r){return e^t^r}(o,n,a),l),c)),r(t(e,u),o)}function l(e,o,n,a,l,u,c){return e=r(e,r(r(function(e,t,r){return t^(e|~r)}(o,n,a),l),c)),r(t(e,u),o)}function u(e){let t,r,o="",n="";for(r=0;r<=3;r++)t=e>>>8*r&255,n="0"+t.toString(16),o+=n.substr(n.length-2,2);return o}let c,d,i,s,f,h,p,g,m,y=Array();for(y=function(e){let t,r=e.length,o=r+8,n=16*((o-o%64)/64+1),a=Array(n-1),l=0,u=0;for(;u<r;)t=(u-u%4)/4,l=u%4*8,a[t]=a[t]|e.charCodeAt(u)<<l,u++;return t=(u-u%4)/4,l=u%4*8,a[t]=a[t]|128<<l,a[n-2]=r<<3,a[n-1]=r>>>29,a}(e=function(e){e=e.replace(/\r\n/g,"\n");let t="";for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t}(e)),h=1732584193,p=4023233417,g=2562383102,m=271733878,c=0;c<y.length;c+=16)d=h,i=p,s=g,f=m,h=o(h,p,g,m,y[c+0],7,3614090360),m=o(m,h,p,g,y[c+1],12,3905402710),g=o(g,m,h,p,y[c+2],17,606105819),p=o(p,g,m,h,y[c+3],22,3250441966),h=o(h,p,g,m,y[c+4],7,4118548399),m=o(m,h,p,g,y[c+5],12,1200080426),g=o(g,m,h,p,y[c+6],17,2821735955),p=o(p,g,m,h,y[c+7],22,4249261313),h=o(h,p,g,m,y[c+8],7,1770035416),m=o(m,h,p,g,y[c+9],12,2336552879),g=o(g,m,h,p,y[c+10],17,4294925233),p=o(p,g,m,h,y[c+11],22,2304563134),h=o(h,p,g,m,y[c+12],7,1804603682),m=o(m,h,p,g,y[c+13],12,4254626195),g=o(g,m,h,p,y[c+14],17,2792965006),p=o(p,g,m,h,y[c+15],22,1236535329),h=n(h,p,g,m,y[c+1],5,4129170786),m=n(m,h,p,g,y[c+6],9,3225465664),g=n(g,m,h,p,y[c+11],14,643717713),p=n(p,g,m,h,y[c+0],20,3921069994),h=n(h,p,g,m,y[c+5],5,3593408605),m=n(m,h,p,g,y[c+10],9,38016083),g=n(g,m,h,p,y[c+15],14,3634488961),p=n(p,g,m,h,y[c+4],20,3889429448),h=n(h,p,g,m,y[c+9],5,568446438),m=n(m,h,p,g,y[c+14],9,3275163606),g=n(g,m,h,p,y[c+3],14,4107603335),p=n(p,g,m,h,y[c+8],20,1163531501),h=n(h,p,g,m,y[c+13],5,2850285829),m=n(m,h,p,g,y[c+2],9,4243563512),g=n(g,m,h,p,y[c+7],14,1735328473),p=n(p,g,m,h,y[c+12],20,2368359562),h=a(h,p,g,m,y[c+5],4,4294588738),m=a(m,h,p,g,y[c+8],11,2272392833),g=a(g,m,h,p,y[c+11],16,1839030562),p=a(p,g,m,h,y[c+14],23,4259657740),h=a(h,p,g,m,y[c+1],4,2763975236),m=a(m,h,p,g,y[c+4],11,1272893353),g=a(g,m,h,p,y[c+7],16,4139469664),p=a(p,g,m,h,y[c+10],23,3200236656),h=a(h,p,g,m,y[c+13],4,681279174),m=a(m,h,p,g,y[c+0],11,3936430074),g=a(g,m,h,p,y[c+3],16,3572445317),p=a(p,g,m,h,y[c+6],23,76029189),h=a(h,p,g,m,y[c+9],4,3654602809),m=a(m,h,p,g,y[c+12],11,3873151461),g=a(g,m,h,p,y[c+15],16,530742520),p=a(p,g,m,h,y[c+2],23,3299628645),h=l(h,p,g,m,y[c+0],6,4096336452),m=l(m,h,p,g,y[c+7],10,1126891415),g=l(g,m,h,p,y[c+14],15,2878612391),p=l(p,g,m,h,y[c+5],21,4237533241),h=l(h,p,g,m,y[c+12],6,1700485571),m=l(m,h,p,g,y[c+3],10,2399980690),g=l(g,m,h,p,y[c+10],15,4293915773),p=l(p,g,m,h,y[c+1],21,2240044497),h=l(h,p,g,m,y[c+8],6,1873313359),m=l(m,h,p,g,y[c+15],10,4264355552),g=l(g,m,h,p,y[c+6],15,2734768916),p=l(p,g,m,h,y[c+13],21,1309151649),h=l(h,p,g,m,y[c+4],6,4149444226),m=l(m,h,p,g,y[c+11],10,3174756917),g=l(g,m,h,p,y[c+2],15,718787259),p=l(p,g,m,h,y[c+9],21,3951481745),h=r(h,d),p=r(p,i),g=r(g,s),m=r(m,f);return(u(h)+u(p)+u(g)+u(m)).toLowerCase()},Je=(e="-")=>{let t=[],r="0123456789abcdef";for(let e=0;e<36;e++)t[e]=r.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=r.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]=e,t.join("")},ze=(e,t=new WeakMap)=>{if(e instanceof RegExp)return new RegExp(e);if(e instanceof Date)return new Date(e);if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);let r=new e.constructor;t.set(e,r);for(let o in e)e.hasOwnProperty(o)&&(r[o]=ze(e[o],t));return r},Pe=(e="")=>{const t=e.match(/^([\s\S]*?)((?:\.{1,2}|[^\\/]+?|)(\.[^./\\]*|))(?:[\\/]*)$/);return{dir:t[1],name:t[2],ext:t[3]}},Le=(e=0)=>{let t=["角","分"],r=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],o=[["元","万","亿"],["","拾","佰","仟"]],n=e<0?"欠":"";e=Math.abs(e);let a="";for(let o=0;o<t.length;o++)a+=(r[Math.floor(10*e*Math.pow(10,o))%10]+t[o]).replace(/零./,"");a=a||"整",e=Math.floor(e);for(let t=0;t<o[0].length&&e>0;t++){let n="";for(let t=0;t<o[1].length&&e>0;t++)n=r[e%10]+o[1][t]+n,e=Math.floor(e/10);a=n.replace(/(零.)*零$/,"").replace(/^$/,"零")+o[0][t]+a}return n+a.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},Ue=(e,t=0,r="...")=>e.length>t?e.substr(0,t)+r:e,qe=e=>e.replace(/[\\/]+/g,"/"),Ye=(e="",t="")=>e.split(t).length-1,We=e=>{var t,r;for(r in Object.freeze(e),e)t=e[r],e.hasOwnProperty(r)&&"object"==typeof t&&!Object.isFrozen(t)&&We(t)},Ge=e=>(e<0&&(e=0),e>5&&(e=5),"★★★★★☆☆☆☆☆".slice(5-e,10-e)),Ke=(e=!1)=>{if(e)return window.scrollTo(0,0),!0;const t=document.documentElement.scrollTop||document.body.scrollTop;return t>0&&(window.requestAnimationFrame(scrollToTop),window.scrollTo(0,t-t/8)),!0},Qe=e=>{let t=document.getElementsByClassName(e);if(!t[0])throw`未能找到class为 ${e} 的节点,请确认`;t[0].scrollTo(0,0)},Ve=e=>{let t=document.getElementById(e);if(!t)throw`未能找到id为 ${ID} 的节点,请确认`;t.scrollTo(0,0)},Xe=()=>window.getSelection().toString(),et=(e,t)=>("object"==typeof t&&(t=JSON.stringify(t)),localStorage.setItem(e,t),!0),tt=e=>localStorage.getItem(e),rt=(e,t,r=24)=>{let o=Date.now()+60*r*60*1e3;return o=new Date(o).toUTCString(),document.cookie=e+"="+encodeURIComponent(t)+(r?"; expires="+o:"")+";path=/;",!0},ot=e=>{let t=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),r=document.cookie.match(t);return r?r[2]:null},nt=e=>!!ot(e)&&rt(e,"",-1),at=()=>{let e=document;return("BackCompat"==e.compatMode?e.body:e.documentElement).clientHeight},lt=()=>{let e=document;return("BackCompat"==e.compatMode?e.body:e.documentElement).clientWidth},ut=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",document.body.appendChild(t);const r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);return t.select(),document.execCommand("copy"),document.body.removeChild(t),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r)),!0},ct=(e,t=new Date)=>{let r=new Date(t.getTime());r.setHours(r.getHours()+8);let[o,n,a,l,u,c,d]=r.toISOString().split(/[^0-9]/).slice(0,-1),i={yyyy:o,yyy:o.substring(1,4),yy:o.substring(2,4),MM:n,M:parseInt(n),dd:a,d:parseInt(a),HH:l,H:parseInt(l),mm:u,m:parseInt(u),ss:c,s:parseInt(c),fff:d,ff:parseInt(d),f:parseInt(d)};return e.replace(/y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}/g,(e=>i[e]))},dt=(e,t)=>Math.ceil(Math.abs(e-t)/864e5),it=(e,t)=>Math.max(0,12*(t.getFullYear()-e.getFullYear())-e.getMonth()+t.getMonth()),st=e=>Math.floor((e-new Date(e.getFullYear(),0,0))/864e5),ft=(e,t)=>new Date(e,t,0).getDate(),ht=e=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],pt=e=>["周日","周一","周二","周三","周四","周五","周六"][e.getDay()],gt=(e,t=!1)=>t?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]:["January","February","March","April","May","June","July","August","September","October"," November","December"][e.getMonth()],mt=(e,t=!0)=>t?["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"][e.getMonth()]:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"][e.getMonth()],yt=e=>{let t=Math.round((Date.now()-e.getTime())/1e3);if(0==t)return"此刻";let r=["年","个月","星期","天","小时","分钟","秒"],o=[31536e3,2592e3,604800,86400,3600,60,1];for(let e=0;e<o.length;e++){let n=Math.floor(t/o[e]);if(0!=n)return n+r[e]+"前"}};export{ee as arrAsList,V as arrAverage,X as arrAverageBy,U as arrCountOcc,q as arrDeepFlatten,Y as arrDiff,z as arrDistinct,te as arrIndexOfAll,K as arrIntersection,P as arrMax,L as arrMin,re as arrMinN,W as arrNonUnique,Q as arrNthElement,oe as arrRandomInRange,ae as arrRandomN,ne as arrRandomSample,le as arrShuffle,ue as arrToTree,ce as arrTranspose,ie as arrUnZip,G as arrWithValues,de as arrZip,Re as base64Decode,Ne as base64Encode,fe as byteSize,ve as bytesToSize,De as camelCase,Fe as capitalize,Oe as capitalizeEveryWord,Ye as characterCount,ut as copyText,ct as dateFormat,st as dayOfYear,dt as daysDiff,ft as daysInMonth,Ce as debounce,ke as decapitalize,Be as decapitalizeEveryWord,ze as deepClone,We as deepFreeze,nt as delCookie,Le as digitUpperCase,ge as escapeHTML,ye as formatNumber,qe as formatPath,be as formatString,ot as getCookie,tt as getLocalStorage,Xe as getSelectedText,Je as getUUID,Ke as goToTop,Qe as goToTopClassName,Ve as goToTopId,Te as hyphenate,t as is,a as isArray,p as isAscii,f as isBrowser,$ as isChineseName,T as isDate,F as isEmail,I as isEmoji,x as isEnglishName,s as isFloat,A as isFunction,k as isHTMLTag,g as isHasWhitespace,m as isHexColor,y as isHexadecimal,E as isIPV4,c as isInteger,J as isLeapYear,Z as isLicensePlate,N as isMacAddress,i as isNegativeFloat,u as isNegativeNum,r as isNil,o as isNull,n as isNumber,w as isObject,_ as isPhone,b as isPlainObject,l as isPositiveNum,d as isPostiveFloat,h as isPrime,v as isPwdStrength,S as isRegExp,C as isString,j as isSubnetMask,D as isSvgTag,R as isUrl,H as isVersion,M as isWeChat,He as md5,it as monthDiff,mt as monthNameChinese,gt as monthNameEnglish,se as objType,at as pageViewHeight,lt as pageViewWidth,Ze as privacyName,Ie as privacyPhone,je as randomBoolean,Me as randomCode,_e as randomFloat,xe as randomHexColor,$e as randomIP,Ae as randomNum,pe as removeHTMLTags,rt as setCookie,et as setLocalStorage,he as splitLines,Pe as splitPath,Ge as starScore,Ue as subText,Se as throttle,yt as timeDistance,me as unescapeHTML,we as urlParam,e as version,pt as weekDayChinese,ht as weekDayEnglish};
