var e="1.2.4";const t=(e,t)=>![,null].includes(t)&&t.constructor===e,r=e=>null==e,n=e=>null===e,o=e=>!isNaN(parseFloat(e))&&isFinite(e),a=e=>Array.isArray(e),l=e=>/^[1-9]\d*$/.test(e),s=e=>/^-[1-9]\d*$/.test(e),c=e=>/^(-|\+)?\d+$/.test(e),i=e=>/^[1-9]\d*.\d*|0.\d*[1-9]\d*$/.test(e),u=e=>/^-([1-9]\d*.\d*|0.\d*[1-9]\d*)$/.test(e),d=e=>/^-?([1-9]\d*.\d*|0.\d*[1-9]\d*|0?.0+|0)$/.test(e),h=()=>![typeof window,typeof document].includes("undefined"),f=e=>e>1&&Array(Math.floor(Math.sqrt(e))-1).fill(0).map(((e,t)=>t+2)).every((t=>e%t!=0)),m=e=>/^[\x00-\x7F]+$/.test(e),p=e=>/\s/.test(e),g=e=>/^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e),y=e=>/^[A-F0-9]+$/i.test(e),b=e=>!!e&&"object"==typeof e&&(null===e.__proto__||e.__proto__===Object.prototype),S=e=>"[object RegExp]"===Object.prototype.toString.call(e),w=e=>"[object String]"===Object.prototype.toString.call(e),A=e=>null!==e&&"object"==typeof e,C=e=>["[object Function]","[object GeneratorFunction]","[object AsyncFunction]","[object Promise]"].includes(Object.prototype.toString.call(e)),F=e=>/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(e),M=e=>/^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(e),x=e=>/(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(e),$=e=>/^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(e),v=e=>/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e),k=e=>/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e);let O=[];const I=e=>(0==O.length&&(O="html,body,base,head,link,meta,style,title, \n        address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section, \n        div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul, \n        a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby, \n        s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video, \n        embed,object,param,source,canvas,script,noscript,del,ins, \n        caption,col,colgroup,table,thead,tbody,td,th,tr, \n        button,datalist,fieldset,form,input,label,legend,meter,optgroup,option, \n        output,progress,select,textarea, \n        details,dialog,menu,menuitem,summary, \n        content,element,shadow,template,blockquote,iframe,tfoot".replace(/\s+/g,"").split(",")),O.includes(e));let j=[];const _=e=>(0==j.length&&(j="svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face, \n        foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern, \n        polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view".replace(/\s+/g,"").split(",")),j.includes(e)),z=e=>"[object Date]"===Object.prototype.toString.call(e),E=e=>/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\ufe0f|\u200d|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g.test(e),R=e=>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-HJ-NP-Z]{1}(?:(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/.test(e),B=e=>/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(e),D=e=>/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e),T=e=>/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(e),N=e=>/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i.test(e),Z=e=>/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(e),q=e=>/^\d+(?:\.\d+){2}$/.test(e),H=e=>0==e%4&&(e%100!=0||e%400==0),J=e=>[...new Set(e)],L=e=>Math.max(...e),P=e=>Math.min(...e),U=(e,t)=>e.reduce(((e,r)=>r===t?e+1:e+0),0),Y=(e,t=1/0)=>e.flat(t),V=(e,t)=>{const r=new Set(t);return e.filter((e=>!r.has(e)))},W=e=>e.filter((t=>e.indexOf(t)!==e.lastIndexOf(t))),G=(e,t=0)=>Array(e).fill(t),X=(e,t)=>{const r=new Set(t);return e.filter((e=>r.has(e)))},K=(e,t=0)=>t>=e.length?[]:(t>0?e.slice(t,t+1):e.slice(t))[0],Q=(...e)=>e.reduce(((e,t)=>e+t),0)/e.length,ee=(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((e,t)=>e+t),0)/e.length,te=e=>Array.isArray(e)?e:[e],re=(e,t)=>e.reduce(((e,r,n)=>r===t?[...e,n]:e),[]),ne=(e,t=1)=>[...e].sort(((e,t)=>e-t)).slice(0,t),oe=(e,t,r=1)=>Array.from({length:r},(()=>Math.floor(Math.random()*(t-e+1))+e)),ae=e=>e[Math.floor(Math.random()*e.length)],le=([...e],t=1)=>{let r=e.length;for(;r;){const t=Math.floor(Math.random()*r--);[e[r],e[t]]=[e[t],e[r]]}return e.slice(0,t)},se=([...e])=>{let t=e.length;for(;t;){const r=Math.floor(Math.random()*t--);[e[t],e[r]]=[e[r],e[t]]}return e},ce=(e,t=null,r="parent_id")=>e.filter((e=>e[r]===t)).map((t=>({...t,children:ce(e,t.id)}))),ie=e=>e[0].map(((t,r)=>e.map((e=>e[r])))),ue=(...e)=>Array.from({length:Math.max(...e.map((e=>e.length)))},((t,r)=>e.map((e=>e[r])))),de=e=>e.reduce(((e,t)=>(t.forEach(((t,r)=>e[r].push(t))),e)),Array.from({length:Math.max(...e.map((e=>e.length)))},(e=>[]))),he=e=>Object.prototype.toString.call(e).slice(8,-1),fe=e=>new Blob([e]).size,me=e=>e.split(/\r?\n/),pe=e=>e.replace(/<[^>]*>/g,""),ge=e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e))),ye=e=>e.replace(/(&amp;|&lt;|&gt;|&#39;|&quot;)/g,(e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'}[e]||e))),be=(e,t=3,r=",")=>{let n=new RegExp(`\\B(?=(\\d{${t}})+(?!\\d))`,"g");return e.toString().replace(n,r)},Se=(e,t=3,r=",")=>{let n=new RegExp(`\\B(?=(\\w{${t}})+(?!\\w))`,"g");return e.replace(n,r)},we=(e,t=100)=>{let r=!1;return(...n)=>{r||(r=!0,r=setTimeout((()=>{e(...n),r=!1}),t))}},Ae=(e,t)=>{let r=null;return(...n)=>{clearTimeout(r),r=setTimeout((()=>{e(...n)}),t)}},Ce=(e,t=null,r=window.location.href)=>new URLSearchParams(new URL(r).search).get(e)||t,Fe=(e=0,t=0)=>parseInt(Math.random()*(t-e+1)+e,10),Me=(e=4)=>{let t="",r=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];for(;e--;)t+=r[Fe(0,r.length-1)];return t},xe=()=>Array(4).fill(0).map(((e,t)=>Math.floor(255*Math.random())+(0===t?1:0))).join("."),$e=()=>"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6),ve=()=>Math.random()>=.5,ke=(e=0,t=1)=>Math.random()*(t-e)+e,Oe=([e,...t])=>e.toUpperCase()+t.join(""),Ie=e=>e.replace(/\b[a-z]/g,(e=>e.toUpperCase())),je=([e,...t])=>e.toLowerCase()+t.join(""),_e=e=>e.replace(/\b[A-Z]/g,(e=>e.toLowerCase())),ze=e=>{const t=e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/[_.\- ]+/g,"-").replace(/(^-)|(-$)/g,"").split("-");let r=t[0];return t.shift(),r+t.map((e=>e.replace(/\w/,(e=>e.toUpperCase())))).join("")},Ee=e=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),Re=(e,t="****")=>(e+"").replace(/(\d{3})\d{1,}(\d{4})/,`$1${t}$2`),Be=(e,t="**")=>e.replace(/^(\S)(\S|\s)*$/,`$1${t}`),De=e=>{if(0===e)return"0 B";let t=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,t)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]},Te=(e="-")=>{let t=[],r="0123456789abcdef";for(let e=0;e<36;e++)t[e]=r.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=r.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]=e,t.join("")},Ne=(e,t=new WeakMap)=>{if(e instanceof RegExp)return new RegExp(e);if(e instanceof Date)return new Date(e);if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);let r=new e.constructor;t.set(e,r);for(let n in e)e.hasOwnProperty(n)&&(r[n]=Ne(e[n],t));return r},Ze=e=>{var t,r;for(r in Object.freeze(e),e)t=e[r],e.hasOwnProperty(r)&&"object"==typeof t&&!Object.isFrozen(t)&&Ze(t)},qe=(e="")=>{const t=e.match(/^([\s\S]*?)((?:\.{1,2}|[^\\/]+?|)(\.[^./\\]*|))(?:[\\/]*)$/);return{dir:t[1],name:t[2],ext:t[3]}},He=(e=0)=>{let t=["角","分"],r=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],n=[["元","万","亿"],["","拾","佰","仟"]],o=e<0?"欠":"";e=Math.abs(e);let a="";for(let n=0;n<t.length;n++)a+=(r[Math.floor(10*e*Math.pow(10,n))%10]+t[n]).replace(/零./,"");a=a||"整",e=Math.floor(e);for(let t=0;t<n[0].length&&e>0;t++){let o="";for(let t=0;t<n[1].length&&e>0;t++)o=r[e%10]+n[1][t]+o,e=Math.floor(e/10);a=o.replace(/(零.)*零$/,"").replace(/^$/,"零")+n[0][t]+a}return o+a.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},Je=(e,t=0,r="...")=>e.length>t?e.substr(0,t)+r:e,Le=e=>e.replace(/[\\/]+/g,"/"),Pe=(e="",t="")=>e.split(t).length-1,Ue=e=>(e<0?e=0:e>5&&(e=5),"★★★★★☆☆☆☆☆".slice(5-e,10-e)),Ye=e=>{let t,r=!1;return(...n)=>(r||(r=!0,t=e.apply(null,n),e=null),t)},Ve=(e,t=",",r=!1)=>e.slice(r?e.indexOf("\n")+1:0).split("\n").map((e=>e.split(t))),We=(e,t=",")=>{const r=e.slice(0,e.indexOf("\n")).split(t);return e.slice(e.indexOf("\n")+1).split("\n").map((e=>{const n=e.split(t);return r.reduce(((e,t,r)=>(e[t]=n[r],e)),{})}))},Ge=(e=!1)=>{if(e)return window.scrollTo(0,0),!0;const t=document.documentElement.scrollTop||document.body.scrollTop;return t>0&&(window.requestAnimationFrame(scrollToTop),window.scrollTo(0,t-t/8)),!0},Xe=e=>{let t=document.getElementsByClassName(e);if(!t[0])throw`未能找到class为 ${e} 的节点,请确认`;t[0].scrollTo(0,0)},Ke=(e,t=!1)=>{let r=document.getElementById(e);if(!r)throw`未能找到id为 ${ID} 的节点,请确认`;t?r.scrollIntoView({behavior:"smooth"}):r.scrollIntoView?r.scrollIntoView():r.scrollIntoViewIfNeeded&&r.scrollIntoViewIfNeeded()},Qe=()=>window.getSelection().toString(),et=(e,t)=>("object"==typeof t&&(t=JSON.stringify(t)),localStorage.setItem(e,t),!0),tt=e=>localStorage.getItem(e),rt=e=>localStorage.removeItem(e),nt=(e,t)=>sessionStorage.setItem(e,t),ot=e=>sessionStorage.getItem(e),at=e=>sessionStorage.removeItem(e),lt=(e,t,r=24)=>{let n=Date.now()+60*r*60*1e3;return n=new Date(n).toUTCString(),document.cookie=e+"="+encodeURIComponent(t)+(r?"; expires="+n:"")+";path=/;",!0},st=e=>{let t=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),r=document.cookie.match(t);return r?r[2]:null},ct=e=>!!st(e)&&lt(e,"",-1),it=()=>{let e=document;return("BackCompat"==e.compatMode?e.body:e.documentElement).clientHeight},ut=()=>{let e=document;return("BackCompat"==e.compatMode?e.body:e.documentElement).clientWidth},dt=(e=window)=>({x:void 0!==e.pageXOffset?e.pageXOffset:e.scrollLeft,y:void 0!==e.pageYOffset?e.pageYOffset:e.scrollTop}),ht=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",document.body.appendChild(t);const r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);return t.select(),document.execCommand("copy"),document.body.removeChild(t),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r)),!0},ft=(e=document.body)=>{e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},mt=()=>{document.exitFullScreen?document.exitFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},pt=()=>!!(document.mozFullScreen||document.webkitIsFullScreen||document.webkitFullScreen||document.msFullScreen),gt=(e,t,r=8)=>{let n=t?new Date(t.getTime()):new Date;n.setHours(n.getHours()+r);let[o,a,l,s,c,i,u]=n.toISOString().split(/[^0-9]/).slice(0,-1),d={yyyy:o,yyy:o.substring(1,4),yy:o.substring(2,4),MM:a,M:parseInt(a),dd:l,d:parseInt(l),HH:s,H:parseInt(s),mm:c,m:parseInt(c),ss:i,s:parseInt(i),fff:u,ff:parseInt(u),f:parseInt(u)};return e.replace(/y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}/g,(e=>d[e]))},yt=(e,t)=>Math.ceil(Math.abs(e-t)/864e5),bt=(e,t)=>Math.max(0,12*(t.getFullYear()-e.getFullYear())-e.getMonth()+t.getMonth()),St=e=>Math.floor((e-new Date(e.getFullYear(),0,0))/864e5),wt=(e,t)=>new Date(e,t,0).getDate(),At=e=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],Ct=e=>["周日","周一","周二","周三","周四","周五","周六"][e.getDay()],Ft=(e,t=!1)=>t?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]:["January","February","March","April","May","June","July","August","September","October"," November","December"][e.getMonth()],Mt=(e,t=!0)=>t?["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"][e.getMonth()]:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"][e.getMonth()],xt=e=>{let t=Math.round((Date.now()-e.getTime())/1e3);if(console.log(t),0==t)return"此刻";let r=t>0?"前":"后";t=Math.abs(t);let n=["年","个月","星期","天","小时","分钟","秒"],o=[31536e3,2592e3,604800,86400,3600,60,1];for(let e=0;e<o.length;e++){let a=Math.floor(t/o[e]);if(0!=a)return a+n[e]+r}};const $t={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){e=String(e);let t,r,n,o,a,l,s,c="",i=0;for(e=$t._utf8_encode(e);i<e.length;)t=e.charCodeAt(i++),r=e.charCodeAt(i++),n=e.charCodeAt(i++),o=t>>2,a=(3&t)<<4|r>>4,l=(15&r)<<2|n>>6,s=63&n,isNaN(r)?l=s=64:isNaN(n)&&(s=64),c=c+$t._keyStr.charAt(o)+$t._keyStr.charAt(a)+$t._keyStr.charAt(l)+$t._keyStr.charAt(s);return c},decode:function(e){let t,r,n,o,a,l,s,c="",i=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");i<e.length;)o=$t._keyStr.indexOf(e.charAt(i++)),a=$t._keyStr.indexOf(e.charAt(i++)),l=$t._keyStr.indexOf(e.charAt(i++)),s=$t._keyStr.indexOf(e.charAt(i++)),t=o<<2|a>>4,r=(15&a)<<4|l>>2,n=(3&l)<<6|s,c+=String.fromCharCode(t),64!=l&&(c+=String.fromCharCode(r)),64!=s&&(c+=String.fromCharCode(n));return c=$t._utf8_decode(c),c},_utf8_encode:function(e){e=e.replace(/rn/g,"n");let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t},_utf8_decode:function(e){let t="",r=0,n=0,o=0;for(;r<e.length;)n=e.charCodeAt(r),n<128?(t+=String.fromCharCode(n),r++):n>191&&n<224?(o=e.charCodeAt(r+1),t+=String.fromCharCode((31&n)<<6|63&o),r+=2):(o=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&n)<<12|(63&o)<<6|63&c3),r+=3);return t}},vt=function(e){function t(e,t){return e<<t|e>>>32-t}function r(e,t){let r,n,o,a,l;return o=2147483648&e,a=2147483648&t,r=1073741824&e,n=1073741824&t,l=(1073741823&e)+(1073741823&t),r&n?2147483648^l^o^a:r|n?1073741824&l?3221225472^l^o^a:1073741824^l^o^a:l^o^a}function n(e,n,o,a,l,s,c){return e=r(e,r(r(function(e,t,r){return e&t|~e&r}(n,o,a),l),c)),r(t(e,s),n)}function o(e,n,o,a,l,s,c){return e=r(e,r(r(function(e,t,r){return e&r|t&~r}(n,o,a),l),c)),r(t(e,s),n)}function a(e,n,o,a,l,s,c){return e=r(e,r(r(function(e,t,r){return e^t^r}(n,o,a),l),c)),r(t(e,s),n)}function l(e,n,o,a,l,s,c){return e=r(e,r(r(function(e,t,r){return t^(e|~r)}(n,o,a),l),c)),r(t(e,s),n)}function s(e){let t,r,n="",o="";for(r=0;r<=3;r++)t=e>>>8*r&255,o="0"+t.toString(16),n+=o.substr(o.length-2,2);return n}let c,i,u,d,h,f,m,p,g,y=Array();for(y=function(e){let t,r=e.length,n=r+8,o=16*((n-n%64)/64+1),a=Array(o-1),l=0,s=0;for(;s<r;)t=(s-s%4)/4,l=s%4*8,a[t]=a[t]|e.charCodeAt(s)<<l,s++;return t=(s-s%4)/4,l=s%4*8,a[t]=a[t]|128<<l,a[o-2]=r<<3,a[o-1]=r>>>29,a}(e=function(e){e=e.replace(/\r\n/g,"\n");let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t}(e)),f=1732584193,m=4023233417,p=2562383102,g=271733878,c=0;c<y.length;c+=16)i=f,u=m,d=p,h=g,f=n(f,m,p,g,y[c+0],7,3614090360),g=n(g,f,m,p,y[c+1],12,3905402710),p=n(p,g,f,m,y[c+2],17,606105819),m=n(m,p,g,f,y[c+3],22,3250441966),f=n(f,m,p,g,y[c+4],7,4118548399),g=n(g,f,m,p,y[c+5],12,1200080426),p=n(p,g,f,m,y[c+6],17,2821735955),m=n(m,p,g,f,y[c+7],22,4249261313),f=n(f,m,p,g,y[c+8],7,1770035416),g=n(g,f,m,p,y[c+9],12,2336552879),p=n(p,g,f,m,y[c+10],17,4294925233),m=n(m,p,g,f,y[c+11],22,2304563134),f=n(f,m,p,g,y[c+12],7,1804603682),g=n(g,f,m,p,y[c+13],12,4254626195),p=n(p,g,f,m,y[c+14],17,2792965006),m=n(m,p,g,f,y[c+15],22,1236535329),f=o(f,m,p,g,y[c+1],5,4129170786),g=o(g,f,m,p,y[c+6],9,3225465664),p=o(p,g,f,m,y[c+11],14,643717713),m=o(m,p,g,f,y[c+0],20,3921069994),f=o(f,m,p,g,y[c+5],5,3593408605),g=o(g,f,m,p,y[c+10],9,38016083),p=o(p,g,f,m,y[c+15],14,3634488961),m=o(m,p,g,f,y[c+4],20,3889429448),f=o(f,m,p,g,y[c+9],5,568446438),g=o(g,f,m,p,y[c+14],9,3275163606),p=o(p,g,f,m,y[c+3],14,4107603335),m=o(m,p,g,f,y[c+8],20,1163531501),f=o(f,m,p,g,y[c+13],5,2850285829),g=o(g,f,m,p,y[c+2],9,4243563512),p=o(p,g,f,m,y[c+7],14,1735328473),m=o(m,p,g,f,y[c+12],20,2368359562),f=a(f,m,p,g,y[c+5],4,4294588738),g=a(g,f,m,p,y[c+8],11,2272392833),p=a(p,g,f,m,y[c+11],16,1839030562),m=a(m,p,g,f,y[c+14],23,4259657740),f=a(f,m,p,g,y[c+1],4,2763975236),g=a(g,f,m,p,y[c+4],11,1272893353),p=a(p,g,f,m,y[c+7],16,4139469664),m=a(m,p,g,f,y[c+10],23,3200236656),f=a(f,m,p,g,y[c+13],4,681279174),g=a(g,f,m,p,y[c+0],11,3936430074),p=a(p,g,f,m,y[c+3],16,3572445317),m=a(m,p,g,f,y[c+6],23,76029189),f=a(f,m,p,g,y[c+9],4,3654602809),g=a(g,f,m,p,y[c+12],11,3873151461),p=a(p,g,f,m,y[c+15],16,530742520),m=a(m,p,g,f,y[c+2],23,3299628645),f=l(f,m,p,g,y[c+0],6,4096336452),g=l(g,f,m,p,y[c+7],10,1126891415),p=l(p,g,f,m,y[c+14],15,2878612391),m=l(m,p,g,f,y[c+5],21,4237533241),f=l(f,m,p,g,y[c+12],6,1700485571),g=l(g,f,m,p,y[c+3],10,2399980690),p=l(p,g,f,m,y[c+10],15,4293915773),m=l(m,p,g,f,y[c+1],21,2240044497),f=l(f,m,p,g,y[c+8],6,1873313359),g=l(g,f,m,p,y[c+15],10,4264355552),p=l(p,g,f,m,y[c+6],15,2734768916),m=l(m,p,g,f,y[c+13],21,1309151649),f=l(f,m,p,g,y[c+4],6,4149444226),g=l(g,f,m,p,y[c+11],10,3174756917),p=l(p,g,f,m,y[c+2],15,718787259),m=l(m,p,g,f,y[c+9],21,3951481745),f=r(f,i),m=r(m,u),p=r(p,d),g=r(g,h);return(s(f)+s(m)+s(p)+s(g)).toLowerCase()},kt=$t.encode,Ot=$t.decode;class It{constructor(e){this.cache=new Map,this.capacity=e}get(e){if(!this.cache.has(e))return-1;const t=this.cache.get(e);return this.cache.delete(e),this.cache.set(e,t),t}put(e,t){this.size<=0||(this.cache.has(e)&&this.cache.delete(e),this.cache.set(e,t),this.cache.size>this.capacity&&this.cache.delete(this.cache.keys().next().value))}clear(){this.cache.clear()}}class jt{constructor(e){this.size=e,this.values=new Map,this.times=new Map}get(e){if(this.values.has(e)){let t=this.values.get(e)||0,r=this.times.get(e)||0;return this.values.delete(e),this.times.delete(e),this.values.set(e,t),this.times.set(e,r+1),t}return-1}put(e,t){if(this.size<=0)return;let r=1,n=Math.min(...this.times.values());if(this.values.has(e)&&(r=(this.times.get(e)||0)+1,this.values.delete(e),this.times.delete(e)),this.values.set(e,t),this.times.set(e,r),this.size<this.values.size){let e=this.values.keys(),t=e.next().value;for(;t&&this.times.get(t)!==n;)t=e.next().value;this.values.delete(t),this.times.delete(t)}}clear(){this.values.clear(),this.times.clear()}}const _t=e=>new It(e),zt=e=>new jt(e);class Et{constructor(){this.list={}}on(e,t){return(this.list[e]||(this.list[e]=[])).push(t),this}once(e,t){const r=(...n)=>{this.off(e,r),t.apply(this,n)};r.fn=t,this.on(e,r)}off(e,t){return this.list[e]?t?(this.list[e]=this.list[e].filter((e=>e!==t||e.fn===t)),this):(this.list[e]=[],this):this}emit(...e){let t=e.shift()||"",r=this.list[t];return r&&0!==r.length?(r.forEach((t=>{t.apply(this,e)})),this):this}}const Rt=()=>new Et;export{zt as LFUCache,_t as LRUCache,te as arrAsList,Q as arrAverage,ee as arrAverageBy,U as arrCountOcc,Y as arrDeepFlatten,V as arrDiff,J as arrDistinct,re as arrIndexOfAll,X as arrIntersection,L as arrMax,P as arrMin,ne as arrMinN,W as arrNonUnique,K as arrNthElement,oe as arrRandomInRange,le as arrRandomN,ae as arrRandomSample,se as arrShuffle,ce as arrToTree,ie as arrTranspose,de as arrUnZip,G as arrWithValues,ue as arrZip,Ot as base64Decode,kt as base64Encode,fe as byteSize,De as bytesToSize,ze as camelCase,Oe as capitalize,Ie as capitalizeEveryWord,Pe as characterCount,ht as copyText,Ve as csvToArray,We as csvToJSON,gt as dateFormat,St as dayOfYear,yt as daysDiff,wt as daysInMonth,Ae as debounce,je as decapitalize,_e as decapitalizeEveryWord,Ne as deepClone,Ze as deepFreeze,ct as delCookie,rt as delLocalStorage,at as delSessionStorage,He as digitUpperCase,ge as escapeHTML,Rt as eventEmitter,mt as exitFullscreen,be as formatNumber,Le as formatPath,Se as formatString,ft as fullscreen,st as getCookie,tt as getLocalStorage,Qe as getSelectedText,ot as getSessionStorage,Te as getUUID,Ge as goToTop,Xe as goToTopClassName,Ke as goToTopId,Ee as hyphenate,t as is,a as isArray,m as isAscii,h as isBrowser,M as isChineseName,z as isDate,k as isEmail,E as isEmoji,x as isEnglishName,d as isFloat,pt as isFullScreen,C as isFunction,I as isHTMLTag,p as isHasWhitespace,g as isHexColor,y as isHexadecimal,D as isIPV4,T as isIPV6,c as isInteger,H as isLeapYear,R as isLicensePlate,N as isMacAddress,u as isNegativeFloat,s as isNegativeNum,r as isNil,n as isNull,o as isNumber,A as isObject,v as isPhone,b as isPlainObject,l as isPositiveNum,i as isPostiveFloat,f as isPrime,B as isPwdStrength,S as isRegExp,w as isString,$ as isSubnetMask,_ as isSvgTag,Z as isUrl,q as isVersion,F as isWeChat,vt as md5,bt as monthDiff,Mt as monthNameChinese,Ft as monthNameEnglish,he as objType,Ye as once,it as pageViewHeight,ut as pageViewWidth,Be as privacyName,Re as privacyPhone,ve as randomBoolean,Me as randomCode,ke as randomFloat,$e as randomHexColor,xe as randomIP,Fe as randomNum,pe as removeHTMLTags,dt as scrollPostion,lt as setCookie,et as setLocalStorage,nt as setSessionStorage,me as splitLines,qe as splitPath,Ue as starScore,Je as subText,we as throttle,xt as timeDistance,ye as unescapeHTML,Ce as urlParam,e as version,Ct as weekDayChinese,At as weekDayEnglish};
