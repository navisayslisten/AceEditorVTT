/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ace-builds/src-min-noconflict/ace.js":
/*!***********************************************************!*\
  !*** ./node_modules/ace-builds/src-min-noconflict/ace.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.amdD, __webpack_require__.*, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 13:24-38 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
(function(){function o(n){var i=e;n&&(e[n]||(e[n]={}),i=e[n]);if(!i.define||!i.define.packaged)t.original=i.define,i.define=t,i.define.packaged=!0;if(!i.require||!i.require.packaged)r.original=i.require,i.require=r,i.require.packaged=!0}var ACE_NAMESPACE = "ace",e=function(){return this}();!e&&typeof window!="undefined"&&(e=window);if(!ACE_NAMESPACE&&typeof requirejs!="undefined")return;var t=function(e,n,r){if(typeof e!="string"){t.original?t.original.apply(this,arguments):(console.error("dropping module because define wasn't a string."),console.trace());return}arguments.length==2&&(r=n),t.modules[e]||(t.payloads[e]=r,t.modules[e]=null)};t.modules={},t.payloads={};var n=function(e,t,n){if(typeof t=="string"){var i=s(e,t);if(i!=undefined)return n&&n(),i}else if(Object.prototype.toString.call(t)==="[object Array]"){var o=[];for(var u=0,a=t.length;u<a;++u){var f=s(e,t[u]);if(f==undefined&&r.original)return;o.push(f)}return n&&n.apply(null,o)||!0}},r=function(e,t){var i=n("",e,t);return i==undefined&&r.original?r.original.apply(this,arguments):i},i=function(e,t){if(t.indexOf("!")!==-1){var n=t.split("!");return i(e,n[0])+"!"+i(e,n[1])}if(t.charAt(0)=="."){var r=e.split("/").slice(0,-1).join("/");t=r+"/"+t;while(t.indexOf(".")!==-1&&s!=t){var s=t;t=t.replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"")}}return t},s=function(e,r){r=i(e,r);var s=t.modules[r];if(!s){s=t.payloads[r];if(typeof s=="function"){var o={},u={id:r,uri:"",exports:o,packaged:!0},a=function(e,t){return n(r,e,t)},f=s(a,o,u);o=f||u.exports,t.modules[r]=o,delete t.payloads[r]}s=t.modules[r]=o||s}return s};o(ACE_NAMESPACE)})(),ace.define("ace/lib/fixoldbrowsers",["require","exports","module"],function(e,t,n){"use strict";typeof Element!="undefined"&&!Element.prototype.remove&&Object.defineProperty(Element.prototype,"remove",{enumerable:!1,writable:!0,configurable:!0,value:function(){this.parentNode&&this.parentNode.removeChild(this)}})}),ace.define("ace/lib/useragent",["require","exports","module"],function(e,t,n){"use strict";t.OS={LINUX:"LINUX",MAC:"MAC",WINDOWS:"WINDOWS"},t.getOS=function(){return t.isMac?t.OS.MAC:t.isLinux?t.OS.LINUX:t.OS.WINDOWS};var r=typeof navigator=="object"?navigator:{},i=(/mac|win|linux/i.exec(r.platform)||["other"])[0].toLowerCase(),s=r.userAgent||"",o=r.appName||"";t.isWin=i=="win",t.isMac=i=="mac",t.isLinux=i=="linux",t.isIE=o=="Microsoft Internet Explorer"||o.indexOf("MSAppHost")>=0?parseFloat((s.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]):parseFloat((s.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]),t.isOldIE=t.isIE&&t.isIE<9,t.isGecko=t.isMozilla=s.match(/ Gecko\/\d+/),t.isOpera=typeof opera=="object"&&Object.prototype.toString.call(window.opera)=="[object Opera]",t.isWebKit=parseFloat(s.split("WebKit/")[1])||undefined,t.isChrome=parseFloat(s.split(" Chrome/")[1])||undefined,t.isEdge=parseFloat(s.split(" Edge/")[1])||undefined,t.isAIR=s.indexOf("AdobeAIR")>=0,t.isAndroid=s.indexOf("Android")>=0,t.isChromeOS=s.indexOf(" CrOS ")>=0,t.isIOS=/iPad|iPhone|iPod/.test(s)&&!window.MSStream,t.isIOS&&(t.isMac=!0),t.isMobile=t.isIOS||t.isAndroid}),ace.define("ace/lib/dom",["require","exports","module","ace/lib/useragent"],function(e,t,n){"use strict";var r=e("./useragent"),i="http://www.w3.org/1999/xhtml";t.buildDom=function o(e,t,n){if(typeof e=="string"&&e){var r=document.createTextNode(e);return t&&t.appendChild(r),r}if(!Array.isArray(e))return e&&e.appendChild&&t&&t.appendChild(e),e;if(typeof e[0]!="string"||!e[0]){var i=[];for(var s=0;s<e.length;s++){var u=o(e[s],t,n);u&&i.push(u)}return i}var a=document.createElement(e[0]),f=e[1],l=1;f&&typeof f=="object"&&!Array.isArray(f)&&(l=2);for(var s=l;s<e.length;s++)o(e[s],a,n);return l==2&&Object.keys(f).forEach(function(e){var t=f[e];e==="class"?a.className=Array.isArray(t)?t.join(" "):t:typeof t=="function"||e=="value"||e[0]=="$"?a[e]=t:e==="ref"?n&&(n[t]=a):t!=null&&a.setAttribute(e,t)}),t&&t.appendChild(a),a},t.getDocumentHead=function(e){return e||(e=document),e.head||e.getElementsByTagName("head")[0]||e.documentElement},t.createElement=function(e,t){return document.createElementNS?document.createElementNS(t||i,e):document.createElement(e)},t.removeChildren=function(e){e.innerHTML=""},t.createTextNode=function(e,t){var n=t?t.ownerDocument:document;return n.createTextNode(e)},t.createFragment=function(e){var t=e?e.ownerDocument:document;return t.createDocumentFragment()},t.hasCssClass=function(e,t){var n=(e.className+"").split(/\s+/g);return n.indexOf(t)!==-1},t.addCssClass=function(e,n){t.hasCssClass(e,n)||(e.className+=" "+n)},t.removeCssClass=function(e,t){var n=e.className.split(/\s+/g);for(;;){var r=n.indexOf(t);if(r==-1)break;n.splice(r,1)}e.className=n.join(" ")},t.toggleCssClass=function(e,t){var n=e.className.split(/\s+/g),r=!0;for(;;){var i=n.indexOf(t);if(i==-1)break;r=!1,n.splice(i,1)}return r&&n.push(t),e.className=n.join(" "),r},t.setCssClass=function(e,n,r){r?t.addCssClass(e,n):t.removeCssClass(e,n)},t.hasCssString=function(e,t){var n=0,r;t=t||document;if(r=t.querySelectorAll("style"))while(n<r.length)if(r[n++].id===e)return!0},t.importCssString=function(n,r,i){var s=i;if(!i||!i.getRootNode)s=document;else{s=i.getRootNode();if(!s||s==i)s=document}var o=s.ownerDocument||s;if(r&&t.hasCssString(r,s))return null;r&&(n+="\n/*# sourceURL=ace/css/"+r+" */");var u=t.createElement("style");u.appendChild(o.createTextNode(n)),r&&(u.id=r),s==o&&(s=t.getDocumentHead(o)),s.insertBefore(u,s.firstChild)},t.importCssStylsheet=function(e,n){t.buildDom(["link",{rel:"stylesheet",href:e}],t.getDocumentHead(n))},t.scrollbarWidth=function(e){var n=t.createElement("ace_inner");n.style.width="100%",n.style.minWidth="0px",n.style.height="200px",n.style.display="block";var r=t.createElement("ace_outer"),i=r.style;i.position="absolute",i.left="-10000px",i.overflow="hidden",i.width="200px",i.minWidth="0px",i.height="150px",i.display="block",r.appendChild(n);var s=e.documentElement;s.appendChild(r);var o=n.offsetWidth;i.overflow="scroll";var u=n.offsetWidth;return o==u&&(u=r.clientWidth),s.removeChild(r),o-u},typeof document=="undefined"&&(t.importCssString=function(){}),t.computedStyle=function(e,t){return window.getComputedStyle(e,"")||{}},t.setStyle=function(e,t,n){e[t]!==n&&(e[t]=n)},t.HAS_CSS_ANIMATION=!1,t.HAS_CSS_TRANSFORMS=!1,t.HI_DPI=r.isWin?typeof window!="undefined"&&window.devicePixelRatio>=1.5:!0;if(typeof document!="undefined"){var s=document.createElement("div");t.HI_DPI&&s.style.transform!==undefined&&(t.HAS_CSS_TRANSFORMS=!0),!r.isEdge&&typeof s.style.animationName!="undefined"&&(t.HAS_CSS_ANIMATION=!0),s=null}t.HAS_CSS_TRANSFORMS?t.translate=function(e,t,n){e.style.transform="translate("+Math.round(t)+"px, "+Math.round(n)+"px)"}:t.translate=function(e,t,n){e.style.top=Math.round(n)+"px",e.style.left=Math.round(t)+"px"}}),ace.define("ace/lib/oop",["require","exports","module"],function(e,t,n){"use strict";t.inherits=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})},t.mixin=function(e,t){for(var n in t)e[n]=t[n];return e},t.implement=function(e,n){t.mixin(e,n)}}),ace.define("ace/lib/keys",["require","exports","module","ace/lib/oop"],function(e,t,n){"use strict";var r=e("./oop"),i=function(){var e={MODIFIER_KEYS:{16:"Shift",17:"Ctrl",18:"Alt",224:"Meta",91:"MetaLeft",92:"MetaRight",93:"ContextMenu"},KEY_MODS:{ctrl:1,alt:2,option:2,shift:4,"super":8,meta:8,command:8,cmd:8,control:1},FUNCTION_KEYS:{8:"Backspace",9:"Tab",13:"Return",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9","-13":"NumpadEnter",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock"},PRINTABLE_KEYS:{32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",111:"/",106:"*"}},t,n;for(n in e.FUNCTION_KEYS)t=e.FUNCTION_KEYS[n].toLowerCase(),e[t]=parseInt(n,10);for(n in e.PRINTABLE_KEYS)t=e.PRINTABLE_KEYS[n].toLowerCase(),e[t]=parseInt(n,10);return r.mixin(e,e.MODIFIER_KEYS),r.mixin(e,e.PRINTABLE_KEYS),r.mixin(e,e.FUNCTION_KEYS),e.enter=e["return"],e.escape=e.esc,e.del=e["delete"],e[173]="-",function(){var t=["cmd","ctrl","alt","shift"];for(var n=Math.pow(2,t.length);n--;)e.KEY_MODS[n]=t.filter(function(t){return n&e.KEY_MODS[t]}).join("-")+"-"}(),e.KEY_MODS[0]="",e.KEY_MODS[-1]="input-",e}();r.mixin(t,i),t.keyCodeToString=function(e){var t=i[e];return typeof t!="string"&&(t=String.fromCharCode(e)),t.toLowerCase()}}),ace.define("ace/lib/event",["require","exports","module","ace/lib/keys","ace/lib/useragent"],function(e,t,n){"use strict";function a(){u=!1;try{document.createComment("").addEventListener("test",function(){},{get passive(){u={passive:!1}}})}catch(e){}}function f(){return u==undefined&&a(),u}function l(e,t,n){this.elem=e,this.type=t,this.callback=n}function d(e,t,n){var u=p(t);if(!i.isMac&&s){t.getModifierState&&(t.getModifierState("OS")||t.getModifierState("Win"))&&(u|=8);if(s.altGr){if((3&u)==3)return;s.altGr=0}if(n===18||n===17){var a="location"in t?t.location:t.keyLocation;if(n===17&&a===1)s[n]==1&&(o=t.timeStamp);else if(n===18&&u===3&&a===2){var f=t.timeStamp-o;f<50&&(s.altGr=!0)}}}n in r.MODIFIER_KEYS&&(n=-1);if(!u&&n===13){var a="location"in t?t.location:t.keyLocation;if(a===3){e(t,u,-n);if(t.defaultPrevented)return}}if(i.isChromeOS&&u&8){e(t,u,n);if(t.defaultPrevented)return;u&=-9}return!!u||n in r.FUNCTION_KEYS||n in r.PRINTABLE_KEYS?e(t,u,n):!1}function v(){s=Object.create(null)}var r=e("./keys"),i=e("./useragent"),s=null,o=0,u;l.prototype.destroy=function(){h(this.elem,this.type,this.callback),this.elem=this.type=this.callback=undefined};var c=t.addListener=function(e,t,n,r){e.addEventListener(t,n,f()),r&&r.$toDestroy.push(new l(e,t,n))},h=t.removeListener=function(e,t,n){e.removeEventListener(t,n,f())};t.stopEvent=function(e){return t.stopPropagation(e),t.preventDefault(e),!1},t.stopPropagation=function(e){e.stopPropagation&&e.stopPropagation()},t.preventDefault=function(e){e.preventDefault&&e.preventDefault()},t.getButton=function(e){return e.type=="dblclick"?0:e.type=="contextmenu"||i.isMac&&e.ctrlKey&&!e.altKey&&!e.shiftKey?2:e.button},t.capture=function(e,t,n){function i(e){t&&t(e),n&&n(e),h(r,"mousemove",t),h(r,"mouseup",i),h(r,"dragstart",i)}var r=e&&e.ownerDocument||document;return c(r,"mousemove",t),c(r,"mouseup",i),c(r,"dragstart",i),i},t.addMouseWheelListener=function(e,t,n){"onmousewheel"in e?c(e,"mousewheel",function(e){var n=8;e.wheelDeltaX!==undefined?(e.wheelX=-e.wheelDeltaX/n,e.wheelY=-e.wheelDeltaY/n):(e.wheelX=0,e.wheelY=-e.wheelDelta/n),t(e)},n):"onwheel"in e?c(e,"wheel",function(e){var n=.35;switch(e.deltaMode){case e.DOM_DELTA_PIXEL:e.wheelX=e.deltaX*n||0,e.wheelY=e.deltaY*n||0;break;case e.DOM_DELTA_LINE:case e.DOM_DELTA_PAGE:e.wheelX=(e.deltaX||0)*5,e.wheelY=(e.deltaY||0)*5}t(e)},n):c(e,"DOMMouseScroll",function(e){e.axis&&e.axis==e.HORIZONTAL_AXIS?(e.wheelX=(e.detail||0)*5,e.wheelY=0):(e.wheelX=0,e.wheelY=(e.detail||0)*5),t(e)},n)},t.addMultiMouseDownListener=function(e,n,r,s,o){function p(e){t.getButton(e)!==0?u=0:e.detail>1?(u++,u>4&&(u=1)):u=1;if(i.isIE){var o=Math.abs(e.clientX-a)>5||Math.abs(e.clientY-f)>5;if(!l||o)u=1;l&&clearTimeout(l),l=setTimeout(function(){l=null},n[u-1]||600),u==1&&(a=e.clientX,f=e.clientY)}e._clicks=u,r[s]("mousedown",e);if(u>4)u=0;else if(u>1)return r[s](h[u],e)}var u=0,a,f,l,h={2:"dblclick",3:"tripleclick",4:"quadclick"};Array.isArray(e)||(e=[e]),e.forEach(function(e){c(e,"mousedown",p,o)})};var p=function(e){return 0|(e.ctrlKey?1:0)|(e.altKey?2:0)|(e.shiftKey?4:0)|(e.metaKey?8:0)};t.getModifierString=function(e){return r.KEY_MODS[p(e)]},t.addCommandKeyListener=function(e,n,r){if(i.isOldGecko||i.isOpera&&!("KeyboardEvent"in window)){var o=null;c(e,"keydown",function(e){o=e.keyCode},r),c(e,"keypress",function(e){return d(n,e,o)},r)}else{var u=null;c(e,"keydown",function(e){s[e.keyCode]=(s[e.keyCode]||0)+1;var t=d(n,e,e.keyCode);return u=e.defaultPrevented,t},r),c(e,"keypress",function(e){u&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)&&(t.stopEvent(e),u=null)},r),c(e,"keyup",function(e){s[e.keyCode]=null},r),s||(v(),c(window,"focus",v))}};if(typeof window=="object"&&window.postMessage&&!i.isOldIE){var m=1;t.nextTick=function(e,n){n=n||window;var r="zero-timeout-message-"+m++,i=function(s){s.data==r&&(t.stopPropagation(s),h(n,"message",i),e())};c(n,"message",i),n.postMessage(r,"*")}}t.$idleBlocked=!1,t.onIdle=function(e,n){return setTimeout(function r(){t.$idleBlocked?setTimeout(r,100):e()},n)},t.$idleBlockId=null,t.blockIdle=function(e){t.$idleBlockId&&clearTimeout(t.$idleBlockId),t.$idleBlocked=!0,t.$idleBlockId=setTimeout(function(){t.$idleBlocked=!1},e||100)},t.nextFrame=typeof window=="object"&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame),t.nextFrame?t.nextFrame=t.nextFrame.bind(window):t.nextFrame=function(e){setTimeout(e,17)}}),ace.define("ace/range",["require","exports","module"],function(e,t,n){"use strict";var r=function(e,t){return e.row-t.row||e.column-t.column},i=function(e,t,n,r){this.start={row:e,column:t},this.end={row:n,column:r}};(function(){this.isEqual=function(e){return this.start.row===e.start.row&&this.end.row===e.end.row&&this.start.column===e.start.column&&this.end.column===e.end.column},this.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},this.contains=function(e,t){return this.compare(e,t)==0},this.compareRange=function(e){var t,n=e.end,r=e.start;return t=this.compare(n.row,n.column),t==1?(t=this.compare(r.row,r.column),t==1?2:t==0?1:0):t==-1?-2:(t=this.compare(r.row,r.column),t==-1?-1:t==1?42:0)},this.comparePoint=function(e){return this.compare(e.row,e.column)},this.containsRange=function(e){return this.comparePoint(e.start)==0&&this.comparePoint(e.end)==0},this.intersects=function(e){var t=this.compareRange(e);return t==-1||t==0||t==1},this.isEnd=function(e,t){return this.end.row==e&&this.end.column==t},this.isStart=function(e,t){return this.start.row==e&&this.start.column==t},this.setStart=function(e,t){typeof e=="object"?(this.start.column=e.column,this.start.row=e.row):(this.start.row=e,this.start.column=t)},this.setEnd=function(e,t){typeof e=="object"?(this.end.column=e.column,this.end.row=e.row):(this.end.row=e,this.end.column=t)},this.inside=function(e,t){return this.compare(e,t)==0?this.isEnd(e,t)||this.isStart(e,t)?!1:!0:!1},this.insideStart=function(e,t){return this.compare(e,t)==0?this.isEnd(e,t)?!1:!0:!1},this.insideEnd=function(e,t){return this.compare(e,t)==0?this.isStart(e,t)?!1:!0:!1},this.compare=function(e,t){return!this.isMultiLine()&&e===this.start.row?t<this.start.column?-1:t>this.end.column?1:0:e<this.start.row?-1:e>this.end.row?1:this.start.row===e?t>=this.start.column?0:-1:this.end.row===e?t<=this.end.column?0:1:0},this.compareStart=function(e,t){return this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.compareEnd=function(e,t){return this.end.row==e&&this.end.column==t?1:this.compare(e,t)},this.compareInside=function(e,t){return this.end.row==e&&this.end.column==t?1:this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.clipRows=function(e,t){if(this.end.row>t)var n={row:t+1,column:0};else if(this.end.row<e)var n={row:e,column:0};if(this.start.row>t)var r={row:t+1,column:0};else if(this.start.row<e)var r={row:e,column:0};return i.fromPoints(r||this.start,n||this.end)},this.extend=function(e,t){var n=this.compare(e,t);if(n==0)return this;if(n==-1)var r={row:e,column:t};else var s={row:e,column:t};return i.fromPoints(r||this.start,s||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return i.fromPoints(this.start,this.end)},this.collapseRows=function(){return this.end.column==0?new i(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new i(this.start.row,0,this.end.row,0)},this.toScreenRange=function(e){var t=e.documentToScreenPosition(this.start),n=e.documentToScreenPosition(this.end);return new i(t.row,t.column,n.row,n.column)},this.moveBy=function(e,t){this.start.row+=e,this.start.column+=t,this.end.row+=e,this.end.column+=t}}).call(i.prototype),i.fromPoints=function(e,t){return new i(e.row,e.column,t.row,t.column)},i.comparePoints=r,i.comparePoints=function(e,t){return e.row-t.row||e.column-t.column},t.Range=i}),ace.define("ace/lib/lang",["require","exports","module"],function(e,t,n){"use strict";t.last=function(e){return e[e.length-1]},t.stringReverse=function(e){return e.split("").reverse().join("")},t.stringRepeat=function(e,t){var n="";while(t>0){t&1&&(n+=e);if(t>>=1)e+=e}return n};var r=/^\s\s*/,i=/\s\s*$/;t.stringTrimLeft=function(e){return e.replace(r,"")},t.stringTrimRight=function(e){return e.replace(i,"")},t.copyObject=function(e){var t={};for(var n in e)t[n]=e[n];return t},t.copyArray=function(e){var t=[];for(var n=0,r=e.length;n<r;n++)e[n]&&typeof e[n]=="object"?t[n]=this.copyObject(e[n]):t[n]=e[n];return t},t.deepCopy=function s(e){if(typeof e!="object"||!e)return e;var t;if(Array.isArray(e)){t=[];for(var n=0;n<e.length;n++)t[n]=s(e[n]);return t}if(Object.prototype.toString.call(e)!=="[object Object]")return e;t={};for(var n in e)t[n]=s(e[n]);return t},t.arrayToMap=function(e){var t={};for(var n=0;n<e.length;n++)t[e[n]]=1;return t},t.createMap=function(e){var t=Object.create(null);for(var n in e)t[n]=e[n];return t},t.arrayRemove=function(e,t){for(var n=0;n<=e.length;n++)t===e[n]&&e.splice(n,1)},t.escapeRegExp=function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},t.escapeHTML=function(e){return(""+e).replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;")},t.getMatchOffsets=function(e,t){var n=[];return e.replace(t,function(e){n.push({offset:arguments[arguments.length-2],length:e.length})}),n},t.deferredCall=function(e){var t=null,n=function(){t=null,e()},r=function(e){return r.cancel(),t=setTimeout(n,e||0),r};return r.schedule=r,r.call=function(){return this.cancel(),e(),r},r.cancel=function(){return clearTimeout(t),t=null,r},r.isPending=function(){return t},r},t.delayedCall=function(e,t){var n=null,r=function(){n=null,e()},i=function(e){n==null&&(n=setTimeout(r,e||t))};return i.delay=function(e){n&&clearTimeout(n),n=setTimeout(r,e||t)},i.schedule=i,i.call=function(){this.cancel(),e()},i.cancel=function(){n&&clearTimeout(n),n=null},i.isPending=function(){return n},i}}),ace.define("ace/clipboard",["require","exports","module"],function(e,t,n){"use strict";var r;n.exports={lineMode:!1,pasteCancelled:function(){return r&&r>Date.now()-50?!0:r=!1},cancel:function(){r=Date.now()}}}),ace.define("ace/keyboard/textinput",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/dom","ace/lib/lang","ace/clipboard","ace/lib/keys"],function(e,t,n){"use strict";var r=e("../lib/event"),i=e("../lib/useragent"),s=e("../lib/dom"),o=e("../lib/lang"),u=e("../clipboard"),a=i.isChrome<18,f=i.isIE,l=i.isChrome>63,c=400,h=e("../lib/keys"),p=h.KEY_MODS,d=i.isIOS,v=d?/\s/:/\n/,m=i.isMobile,g=function(e,t){function X(){x=!0,n.blur(),n.focus(),x=!1}function $(e){e.keyCode==27&&n.value.length<n.selectionStart&&(b||(T=n.value),N=C=-1,O()),V()}function K(){clearTimeout(J),J=setTimeout(function(){E&&(n.style.cssText=E,E=""),t.renderer.$isMousePressed=!1,t.renderer.$keepTextAreaAtCursor&&t.renderer.$moveTextAreaToCursor()},0)}function G(e,t,n){var r=null,i=!1;n.addEventListener("keydown",function(e){r&&clearTimeout(r),i=!0},!0),n.addEventListener("keyup",function(e){r=setTimeout(function(){i=!1},100)},!0);var s=function(e){if(document.activeElement!==n)return;if(i||b||t.$mouseHandler.isMousePressed)return;if(g)return;var r=n.selectionStart,s=n.selectionEnd,o=null,u=0;if(r==0)o=h.up;else if(r==1)o=h.home;else if(s>C&&T[s]=="\n")o=h.end;else if(r<N&&T[r-1]==" ")o=h.left,u=p.option;else if(r<N||r==N&&C!=N&&r==s)o=h.left;else if(s>C&&T.slice(0,s).split("\n").length>2)o=h.down;else if(s>C&&T[s-1]==" ")o=h.right,u=p.option;else if(s>C||s==C&&C!=N&&r==s)o=h.right;r!==s&&(u|=p.shift);if(o){var a=t.onCommandKey({},u,o);if(!a&&t.commands){o=h.keyCodeToString(o);var f=t.commands.findKeyCommand(u,o);f&&t.execCommand(f)}N=r,C=s,O("")}};document.addEventListener("selectionchange",s),t.on("destroy",function(){document.removeEventListener("selectionchange",s)})}var n=s.createElement("textarea");n.className="ace_text-input",n.setAttribute("wrap","off"),n.setAttribute("autocorrect","off"),n.setAttribute("autocapitalize","off"),n.setAttribute("spellcheck",!1),n.style.opacity="0",e.insertBefore(n,e.firstChild);var g=!1,y=!1,b=!1,w=!1,E="";m||(n.style.fontSize="1px");var S=!1,x=!1,T="",N=0,C=0,k=0;try{var L=document.activeElement===n}catch(A){}r.addListener(n,"blur",function(e){if(x)return;t.onBlur(e),L=!1},t),r.addListener(n,"focus",function(e){if(x)return;L=!0;if(i.isEdge)try{if(!document.hasFocus())return}catch(e){}t.onFocus(e),i.isEdge?setTimeout(O):O()},t),this.$focusScroll=!1,this.focus=function(){if(E||l||this.$focusScroll=="browser")return n.focus({preventScroll:!0});var e=n.style.top;n.style.position="fixed",n.style.top="0px";try{var t=n.getBoundingClientRect().top!=0}catch(r){return}var i=[];if(t){var s=n.parentElement;while(s&&s.nodeType==1)i.push(s),s.setAttribute("ace_nocontext",!0),!s.parentElement&&s.getRootNode?s=s.getRootNode().host:s=s.parentElement}n.focus({preventScroll:!0}),t&&i.forEach(function(e){e.removeAttribute("ace_nocontext")}),setTimeout(function(){n.style.position="",n.style.top=="0px"&&(n.style.top=e)},0)},this.blur=function(){n.blur()},this.isFocused=function(){return L},t.on("beforeEndOperation",function(){var e=t.curOp,r=e&&e.command&&e.command.name;if(r=="insertstring")return;var i=r&&(e.docChanged||e.selectionChanged);b&&i&&(T=n.value="",W()),O()});var O=d?function(e){if(!L||g&&!e||w)return;e||(e="");var r="\n ab"+e+"cde fg\n";r!=n.value&&(n.value=T=r);var i=4,s=4+(e.length||(t.selection.isEmpty()?0:1));(N!=i||C!=s)&&n.setSelectionRange(i,s),N=i,C=s}:function(){if(b||w)return;if(!L&&!P)return;b=!0;var e=0,r=0,i="";if(t.session){var s=t.selection,o=s.getRange(),u=s.cursor.row;e=o.start.column,r=o.end.column,i=t.session.getLine(u);if(o.start.row!=u){var a=t.session.getLine(u-1);e=o.start.row<u-1?0:e,r+=a.length+1,i=a+"\n"+i}else if(o.end.row!=u){var f=t.session.getLine(u+1);r=o.end.row>u+1?f.length:r,r+=i.length+1,i=i+"\n"+f}else m&&u>0&&(i="\n"+i,r+=1,e+=1);i.length>c&&(e<c&&r<c?i=i.slice(0,c):(i="\n",e==r?e=r=0:(e=0,r=1)))}var l=i+"\n\n";l!=T&&(n.value=T=l,N=C=l.length),P&&(N=n.selectionStart,C=n.selectionEnd);if(C!=r||N!=e||n.selectionEnd!=C)try{n.setSelectionRange(e,r),N=e,C=r}catch(h){}b=!1};this.resetSelection=O,L&&t.onFocus();var M=function(e){return e.selectionStart===0&&e.selectionEnd>=T.length&&e.value===T&&T&&e.selectionEnd!==C},_=function(e){if(b)return;g?g=!1:M(n)?(t.selectAll(),O()):m&&n.selectionStart!=N&&O()},D=null;this.setInputHandler=function(e){D=e},this.getInputHandler=function(){return D};var P=!1,H=function(e,r){P&&(P=!1);if(y)return O(),e&&t.onPaste(e),y=!1,"";var s=n.selectionStart,o=n.selectionEnd,u=N,a=T.length-C,f=e,l=e.length-s,c=e.length-o,h=0;while(u>0&&T[h]==e[h])h++,u--;f=f.slice(h),h=1;while(a>0&&T.length-h>N-1&&T[T.length-h]==e[e.length-h])h++,a--;l-=h-1,c-=h-1;var p=f.length-h+1;p<0&&(u=-p,p=0),f=f.slice(0,p);if(!r&&!f&&!l&&!u&&!a&&!c)return"";w=!0;var d=!1;return i.isAndroid&&f==". "&&(f="  ",d=!0),f&&!u&&!a&&!l&&!c||S?t.onTextInput(f):t.onTextInput(f,{extendLeft:u,extendRight:a,restoreStart:l,restoreEnd:c}),w=!1,T=e,N=s,C=o,k=c,d?"\n":f},B=function(e){if(b)return z();if(e&&e.inputType){if(e.inputType=="historyUndo")return t.execCommand("undo");if(e.inputType=="historyRedo")return t.execCommand("redo")}var r=n.value,i=H(r,!0);(r.length>c+100||v.test(i)||m&&N<1&&N==C)&&O()},j=function(e,t,n){var r=e.clipboardData||window.clipboardData;if(!r||a)return;var i=f||n?"Text":"text/plain";try{return t?r.setData(i,t)!==!1:r.getData(i)}catch(e){if(!n)return j(e,t,!0)}},F=function(e,i){var s=t.getCopyText();if(!s)return r.preventDefault(e);j(e,s)?(d&&(O(s),g=s,setTimeout(function(){g=!1},10)),i?t.onCut():t.onCopy(),r.preventDefault(e)):(g=!0,n.value=s,n.select(),setTimeout(function(){g=!1,O(),i?t.onCut():t.onCopy()}))},I=function(e){F(e,!0)},q=function(e){F(e,!1)},R=function(e){var s=j(e);if(u.pasteCancelled())return;typeof s=="string"?(s&&t.onPaste(s,e),i.isIE&&setTimeout(O),r.preventDefault(e)):(n.value="",y=!0)};r.addCommandKeyListener(n,t.onCommandKey.bind(t),t),r.addListener(n,"select",_,t),r.addListener(n,"input",B,t),r.addListener(n,"cut",I,t),r.addListener(n,"copy",q,t),r.addListener(n,"paste",R,t),(!("oncut"in n)||!("oncopy"in n)||!("onpaste"in n))&&r.addListener(e,"keydown",function(e){if(i.isMac&&!e.metaKey||!e.ctrlKey)return;switch(e.keyCode){case 67:q(e);break;case 86:R(e);break;case 88:I(e)}},t);var U=function(e){if(b||!t.onCompositionStart||t.$readOnly)return;b={};if(S)return;e.data&&(b.useTextareaForIME=!1),setTimeout(z,0),t._signal("compositionStart"),t.on("mousedown",X);var r=t.getSelectionRange();r.end.row=r.start.row,r.end.column=r.start.column,b.markerRange=r,b.selectionStart=N,t.onCompositionStart(b),b.useTextareaForIME?(T=n.value="",N=0,C=0):(n.msGetInputContext&&(b.context=n.msGetInputContext()),n.getInputContext&&(b.context=n.getInputContext()))},z=function(){if(!b||!t.onCompositionUpdate||t.$readOnly)return;if(S)return X();if(b.useTextareaForIME)t.onCompositionUpdate(n.value);else{var e=n.value;H(e),b.markerRange&&(b.context&&(b.markerRange.start.column=b.selectionStart=b.context.compositionStartOffset),b.markerRange.end.column=b.markerRange.start.column+C-b.selectionStart+k)}},W=function(e){if(!t.onCompositionEnd||t.$readOnly)return;b=!1,t.onCompositionEnd(),t.off("mousedown",X),e&&B()},V=o.delayedCall(z,50).schedule.bind(null,null);r.addListener(n,"compositionstart",U,t),r.addListener(n,"compositionupdate",z,t),r.addListener(n,"keyup",$,t),r.addListener(n,"keydown",V,t),r.addListener(n,"compositionend",W,t),this.getElement=function(){return n},this.setCommandMode=function(e){S=e,n.readOnly=!1},this.setReadOnly=function(e){S||(n.readOnly=e)},this.setCopyWithEmptySelection=function(e){},this.onContextMenu=function(e){P=!0,O(),t._emit("nativecontextmenu",{target:t,domEvent:e}),this.moveToMouse(e,!0)},this.moveToMouse=function(e,o){E||(E=n.style.cssText),n.style.cssText=(o?"z-index:100000;":"")+(i.isIE?"opacity:0.1;":"")+"text-indent: -"+(N+C)*t.renderer.characterWidth*.5+"px;";var u=t.container.getBoundingClientRect(),a=s.computedStyle(t.container),f=u.top+(parseInt(a.borderTopWidth)||0),l=u.left+(parseInt(u.borderLeftWidth)||0),c=u.bottom-f-n.clientHeight-2,h=function(e){s.translate(n,e.clientX-l-2,Math.min(e.clientY-f-2,c))};h(e);if(e.type!="mousedown")return;t.renderer.$isMousePressed=!0,clearTimeout(J),i.isWin&&r.capture(t.container,h,K)},this.onContextMenuClose=K;var J,Q=function(e){t.textInput.onContextMenu(e),K()};r.addListener(n,"mouseup",Q,t),r.addListener(n,"mousedown",function(e){e.preventDefault(),K()},t),r.addListener(t.renderer.scroller,"contextmenu",Q,t),r.addListener(n,"contextmenu",Q,t),d&&G(e,t,n)};t.TextInput=g,t.$setUserAgentForTests=function(e,t){m=e,d=t}}),ace.define("ace/mouse/default_handlers",["require","exports","module","ace/lib/useragent"],function(e,t,n){"use strict";function o(e){e.$clickSelection=null;var t=e.editor;t.setDefaultHandler("mousedown",this.onMouseDown.bind(e)),t.setDefaultHandler("dblclick",this.onDoubleClick.bind(e)),t.setDefaultHandler("tripleclick",this.onTripleClick.bind(e)),t.setDefaultHandler("quadclick",this.onQuadClick.bind(e)),t.setDefaultHandler("mousewheel",this.onMouseWheel.bind(e));var n=["select","startSelect","selectEnd","selectAllEnd","selectByWordsEnd","selectByLinesEnd","dragWait","dragWaitEnd","focusWait"];n.forEach(function(t){e[t]=this[t]},this),e.selectByLines=this.extendSelectionBy.bind(e,"getLineRange"),e.selectByWords=this.extendSelectionBy.bind(e,"getWordRange")}function u(e,t,n,r){return Math.sqrt(Math.pow(n-e,2)+Math.pow(r-t,2))}function a(e,t){if(e.start.row==e.end.row)var n=2*t.column-e.start.column-e.end.column;else if(e.start.row==e.end.row-1&&!e.start.column&&!e.end.column)var n=t.column-4;else var n=2*t.row-e.start.row-e.end.row;return n<0?{cursor:e.start,anchor:e.end}:{cursor:e.end,anchor:e.start}}var r=e("../lib/useragent"),i=0,s=550;(function(){this.onMouseDown=function(e){var t=e.inSelection(),n=e.getDocumentPosition();this.mousedownEvent=e;var i=this.editor,s=e.getButton();if(s!==0){var o=i.getSelectionRange(),u=o.isEmpty();(u||s==1)&&i.selection.moveToPosition(n),s==2&&(i.textInput.onContextMenu(e.domEvent),r.isMozilla||e.preventDefault());return}this.mousedownEvent.time=Date.now();if(t&&!i.isFocused()){i.focus();if(this.$focusTimeout&&!this.$clickSelection&&!i.inMultiSelectMode){this.setState("focusWait"),this.captureMouse(e);return}}return this.captureMouse(e),this.startSelect(n,e.domEvent._clicks>1),e.preventDefault()},this.startSelect=function(e,t){e=e||this.editor.renderer.screenToTextCoordinates(this.x,this.y);var n=this.editor;if(!this.mousedownEvent)return;this.mousedownEvent.getShiftKey()?n.selection.selectToPosition(e):t||n.selection.moveToPosition(e),t||this.select(),n.renderer.scroller.setCapture&&n.renderer.scroller.setCapture(),n.setStyle("ace_selecting"),this.setState("select")},this.select=function(){var e,t=this.editor,n=t.renderer.screenToTextCoordinates(this.x,this.y);if(this.$clickSelection){var r=this.$clickSelection.comparePoint(n);if(r==-1)e=this.$clickSelection.end;else if(r==1)e=this.$clickSelection.start;else{var i=a(this.$clickSelection,n);n=i.cursor,e=i.anchor}t.selection.setSelectionAnchor(e.row,e.column)}t.selection.selectToPosition(n),t.renderer.scrollCursorIntoView()},this.extendSelectionBy=function(e){var t,n=this.editor,r=n.renderer.screenToTextCoordinates(this.x,this.y),i=n.selection[e](r.row,r.column);if(this.$clickSelection){var s=this.$clickSelection.comparePoint(i.start),o=this.$clickSelection.comparePoint(i.end);if(s==-1&&o<=0){t=this.$clickSelection.end;if(i.end.row!=r.row||i.end.column!=r.column)r=i.start}else if(o==1&&s>=0){t=this.$clickSelection.start;if(i.start.row!=r.row||i.start.column!=r.column)r=i.end}else if(s==-1&&o==1)r=i.end,t=i.start;else{var u=a(this.$clickSelection,r);r=u.cursor,t=u.anchor}n.selection.setSelectionAnchor(t.row,t.column)}n.selection.selectToPosition(r),n.renderer.scrollCursorIntoView()},this.selectEnd=this.selectAllEnd=this.selectByWordsEnd=this.selectByLinesEnd=function(){this.$clickSelection=null,this.editor.unsetStyle("ace_selecting"),this.editor.renderer.scroller.releaseCapture&&this.editor.renderer.scroller.releaseCapture()},this.focusWait=function(){var e=u(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y),t=Date.now();(e>i||t-this.mousedownEvent.time>this.$focusTimeout)&&this.startSelect(this.mousedownEvent.getDocumentPosition())},this.onDoubleClick=function(e){var t=e.getDocumentPosition(),n=this.editor,r=n.session,i=r.getBracketRange(t);i?(i.isEmpty()&&(i.start.column--,i.end.column++),this.setState("select")):(i=n.selection.getWordRange(t.row,t.column),this.setState("selectByWords")),this.$clickSelection=i,this.select()},this.onTripleClick=function(e){var t=e.getDocumentPosition(),n=this.editor;this.setState("selectByLines");var r=n.getSelectionRange();r.isMultiLine()&&r.contains(t.row,t.column)?(this.$clickSelection=n.selection.getLineRange(r.start.row),this.$clickSelection.end=n.selection.getLineRange(r.end.row).end):this.$clickSelection=n.selection.getLineRange(t.row),this.select()},this.onQuadClick=function(e){var t=this.editor;t.selectAll(),this.$clickSelection=t.getSelectionRange(),this.setState("selectAll")},this.onMouseWheel=function(e){if(e.getAccelKey())return;e.getShiftKey()&&e.wheelY&&!e.wheelX&&(e.wheelX=e.wheelY,e.wheelY=0);var t=this.editor;this.$lastScroll||(this.$lastScroll={t:0,vx:0,vy:0,allowed:0});var n=this.$lastScroll,r=e.domEvent.timeStamp,i=r-n.t,o=i?e.wheelX/i:n.vx,u=i?e.wheelY/i:n.vy;i<s&&(o=(o+n.vx)/2,u=(u+n.vy)/2);var a=Math.abs(o/u),f=!1;a>=1&&t.renderer.isScrollableBy(e.wheelX*e.speed,0)&&(f=!0),a<=1&&t.renderer.isScrollableBy(0,e.wheelY*e.speed)&&(f=!0);if(f)n.allowed=r;else if(r-n.allowed<s){var l=Math.abs(o)<=1.5*Math.abs(n.vx)&&Math.abs(u)<=1.5*Math.abs(n.vy);l?(f=!0,n.allowed=r):n.allowed=0}n.t=r,n.vx=o,n.vy=u;if(f)return t.renderer.scrollBy(e.wheelX*e.speed,e.wheelY*e.speed),e.stop()}}).call(o.prototype),t.DefaultHandlers=o}),ace.define("ace/tooltip",["require","exports","module","ace/lib/oop","ace/lib/dom"],function(e,t,n){"use strict";function s(e){this.isOpen=!1,this.$element=null,this.$parentNode=e}var r=e("./lib/oop"),i=e("./lib/dom");(function(){this.$init=function(){return this.$element=i.createElement("div"),this.$element.className="ace_tooltip",this.$element.style.display="none",this.$parentNode.appendChild(this.$element),this.$element},this.getElement=function(){return this.$element||this.$init()},this.setText=function(e){this.getElement().textContent=e},this.setHtml=function(e){this.getElement().innerHTML=e},this.setPosition=function(e,t){this.getElement().style.left=e+"px",this.getElement().style.top=t+"px"},this.setClassName=function(e){i.addCssClass(this.getElement(),e)},this.show=function(e,t,n){e!=null&&this.setText(e),t!=null&&n!=null&&this.setPosition(t,n),this.isOpen||(this.getElement().style.display="block",this.isOpen=!0)},this.hide=function(){this.isOpen&&(this.getElement().style.display="none",this.isOpen=!1)},this.getHeight=function(){return this.getElement().offsetHeight},this.getWidth=function(){return this.getElement().offsetWidth},this.destroy=function(){this.isOpen=!1,this.$element&&this.$element.parentNode&&this.$element.parentNode.removeChild(this.$element)}}).call(s.prototype),t.Tooltip=s}),ace.define("ace/mouse/default_gutter_handler",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event","ace/tooltip"],function(e,t,n){"use strict";function u(e){function l(){var r=u.getDocumentPosition().row,s=n.$annotations[r];if(!s)return c();var o=t.session.getLength();if(r==o){var a=t.renderer.pixelToScreenCoordinates(0,u.y).row,l=u.$pos;if(a>t.session.documentToScreenRow(l.row,l.column))return c()}if(f==s)return;f=s.text.join("<br/>"),i.setHtml(f),i.show(),t._signal("showGutterTooltip",i),t.on("mousewheel",c);if(e.$tooltipFollowsMouse)h(u);else{var p=u.domEvent.target,d=p.getBoundingClientRect(),v=i.getElement().style;v.left=d.right+"px",v.top=d.bottom+"px"}}function c(){o&&(o=clearTimeout(o)),f&&(i.hide(),f=null,t._signal("hideGutterTooltip",i),t.off("mousewheel",c))}function h(e){i.setPosition(e.x,e.y)}var t=e.editor,n=t.renderer.$gutterLayer,i=new a(t.container);e.editor.setDefaultHandler("guttermousedown",function(r){if(!t.isFocused()||r.getButton()!=0)return;var i=n.getRegion(r);if(i=="foldWidgets")return;var s=r.getDocumentPosition().row,o=t.session.selection;if(r.getShiftKey())o.selectTo(s,0);else{if(r.domEvent.detail==2)return t.selectAll(),r.preventDefault();e.$clickSelection=t.selection.getLineRange(s)}return e.setState("selectByLines"),e.captureMouse(r),r.preventDefault()});var o,u,f;e.editor.setDefaultHandler("guttermousemove",function(t){var n=t.domEvent.target||t.domEvent.srcElement;if(r.hasCssClass(n,"ace_fold-widget"))return c();f&&e.$tooltipFollowsMouse&&h(t),u=t;if(o)return;o=setTimeout(function(){o=null,u&&!e.isMousePressed?l():c()},50)}),s.addListener(t.renderer.$gutter,"mouseout",function(e){u=null;if(!f||o)return;o=setTimeout(function(){o=null,c()},50)},t),t.on("changeSession",c)}function a(e){o.call(this,e)}var r=e("../lib/dom"),i=e("../lib/oop"),s=e("../lib/event"),o=e("../tooltip").Tooltip;i.inherits(a,o),function(){this.setPosition=function(e,t){var n=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight,i=this.getWidth(),s=this.getHeight();e+=15,t+=15,e+i>n&&(e-=e+i-n),t+s>r&&(t-=20+s),o.prototype.setPosition.call(this,e,t)}}.call(a.prototype),t.GutterHandler=u}),ace.define("ace/mouse/mouse_event",["require","exports","module","ace/lib/event","ace/lib/useragent"],function(e,t,n){"use strict";var r=e("../lib/event"),i=e("../lib/useragent"),s=t.MouseEvent=function(e,t){this.domEvent=e,this.editor=t,this.x=this.clientX=e.clientX,this.y=this.clientY=e.clientY,this.$pos=null,this.$inSelection=null,this.propagationStopped=!1,this.defaultPrevented=!1};(function(){this.stopPropagation=function(){r.stopPropagation(this.domEvent),this.propagationStopped=!0},this.preventDefault=function(){r.preventDefault(this.domEvent),this.defaultPrevented=!0},this.stop=function(){this.stopPropagation(),this.preventDefault()},this.getDocumentPosition=function(){return this.$pos?this.$pos:(this.$pos=this.editor.renderer.screenToTextCoordinates(this.clientX,this.clientY),this.$pos)},this.inSelection=function(){if(this.$inSelection!==null)return this.$inSelection;var e=this.editor,t=e.getSelectionRange();if(t.isEmpty())this.$inSelection=!1;else{var n=this.getDocumentPosition();this.$inSelection=t.contains(n.row,n.column)}return this.$inSelection},this.getButton=function(){return r.getButton(this.domEvent)},this.getShiftKey=function(){return this.domEvent.shiftKey},this.getAccelKey=i.isMac?function(){return this.domEvent.metaKey}:function(){return this.domEvent.ctrlKey}}).call(s.prototype)}),ace.define("ace/mouse/dragdrop_handler",["require","exports","module","ace/lib/dom","ace/lib/event","ace/lib/useragent"],function(e,t,n){"use strict";function f(e){function T(e,n){var r=Date.now(),i=!n||e.row!=n.row,s=!n||e.column!=n.column;if(!S||i||s)t.moveCursorToPosition(e),S=r,x={x:p,y:d};else{var o=l(x.x,x.y,p,d);o>a?S=null:r-S>=u&&(t.renderer.scrollCursorIntoView(),S=null)}}function N(e,n){var r=Date.now(),i=t.renderer.layerConfig.lineHeight,s=t.renderer.layerConfig.characterWidth,u=t.renderer.scroller.getBoundingClientRect(),a={x:{left:p-u.left,right:u.right-p},y:{top:d-u.top,bottom:u.bottom-d}},f=Math.min(a.x.left,a.x.right),l=Math.min(a.y.top,a.y.bottom),c={row:e.row,column:e.column};f/s<=2&&(c.column+=a.x.left<a.x.right?-3:2),l/i<=1&&(c.row+=a.y.top<a.y.bottom?-1:1);var h=e.row!=c.row,v=e.column!=c.column,m=!n||e.row!=n.row;h||v&&!m?E?r-E>=o&&t.renderer.scrollCursorIntoView(c):E=r:E=null}function C(){var e=g;g=t.renderer.screenToTextCoordinates(p,d),T(g,e),N(g,e)}function k(){m=t.selection.toOrientedRange(),h=t.session.addMarker(m,"ace_selection",t.getSelectionStyle()),t.clearSelection(),t.isFocused()&&t.renderer.$cursorLayer.setBlinking(!1),clearInterval(v),C(),v=setInterval(C,20),y=0,i.addListener(document,"mousemove",O)}function L(){clearInterval(v),t.session.removeMarker(h),h=null,t.selection.fromOrientedRange(m),t.isFocused()&&!w&&t.$resetCursorStyle(),m=null,g=null,y=0,E=null,S=null,i.removeListener(document,"mousemove",O)}function O(){A==null&&(A=setTimeout(function(){A!=null&&h&&L()},20))}function M(e){var t=e.types;return!t||Array.prototype.some.call(t,function(e){return e=="text/plain"||e=="Text"})}function _(e){var t=["copy","copymove","all","uninitialized"],n=["move","copymove","linkmove","all","uninitialized"],r=s.isMac?e.altKey:e.ctrlKey,i="uninitialized";try{i=e.dataTransfer.effectAllowed.toLowerCase()}catch(e){}var o="none";return r&&t.indexOf(i)>=0?o="copy":n.indexOf(i)>=0?o="move":t.indexOf(i)>=0&&(o="copy"),o}var t=e.editor,n=r.createElement("img");n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",s.isOpera&&(n.style.cssText="width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");var f=["dragWait","dragWaitEnd","startDrag","dragReadyEnd","onMouseDrag"];f.forEach(function(t){e[t]=this[t]},this),t.on("mousedown",this.onMouseDown.bind(e));var c=t.container,h,p,d,v,m,g,y=0,b,w,E,S,x;this.onDragStart=function(e){if(this.cancelDrag||!c.draggable){var r=this;return setTimeout(function(){r.startSelect(),r.captureMouse(e)},0),e.preventDefault()}m=t.getSelectionRange();var i=e.dataTransfer;i.effectAllowed=t.getReadOnly()?"copy":"copyMove",s.isOpera&&(t.container.appendChild(n),n.scrollTop=0),i.setDragImage&&i.setDragImage(n,0,0),s.isOpera&&t.container.removeChild(n),i.clearData(),i.setData("Text",t.session.getTextRange()),w=!0,this.setState("drag")},this.onDragEnd=function(e){c.draggable=!1,w=!1,this.setState(null);if(!t.getReadOnly()){var n=e.dataTransfer.dropEffect;!b&&n=="move"&&t.session.remove(t.getSelectionRange()),t.$resetCursorStyle()}this.editor.unsetStyle("ace_dragging"),this.editor.renderer.setCursorStyle("")},this.onDragEnter=function(e){if(t.getReadOnly()||!M(e.dataTransfer))return;return p=e.clientX,d=e.clientY,h||k(),y++,e.dataTransfer.dropEffect=b=_(e),i.preventDefault(e)},this.onDragOver=function(e){if(t.getReadOnly()||!M(e.dataTransfer))return;return p=e.clientX,d=e.clientY,h||(k(),y++),A!==null&&(A=null),e.dataTransfer.dropEffect=b=_(e),i.preventDefault(e)},this.onDragLeave=function(e){y--;if(y<=0&&h)return L(),b=null,i.preventDefault(e)},this.onDrop=function(e){if(!g)return;var n=e.dataTransfer;if(w)switch(b){case"move":m.contains(g.row,g.column)?m={start:g,end:g}:m=t.moveText(m,g);break;case"copy":m=t.moveText(m,g,!0)}else{var r=n.getData("Text");m={start:g,end:t.session.insert(g,r)},t.focus(),b=null}return L(),i.preventDefault(e)},i.addListener(c,"dragstart",this.onDragStart.bind(e),t),i.addListener(c,"dragend",this.onDragEnd.bind(e),t),i.addListener(c,"dragenter",this.onDragEnter.bind(e),t),i.addListener(c,"dragover",this.onDragOver.bind(e),t),i.addListener(c,"dragleave",this.onDragLeave.bind(e),t),i.addListener(c,"drop",this.onDrop.bind(e),t);var A=null}function l(e,t,n,r){return Math.sqrt(Math.pow(n-e,2)+Math.pow(r-t,2))}var r=e("../lib/dom"),i=e("../lib/event"),s=e("../lib/useragent"),o=200,u=200,a=5;(function(){this.dragWait=function(){var e=Date.now()-this.mousedownEvent.time;e>this.editor.getDragDelay()&&this.startDrag()},this.dragWaitEnd=function(){var e=this.editor.container;e.draggable=!1,this.startSelect(this.mousedownEvent.getDocumentPosition()),this.selectEnd()},this.dragReadyEnd=function(e){this.editor.$resetCursorStyle(),this.editor.unsetStyle("ace_dragging"),this.editor.renderer.setCursorStyle(""),this.dragWaitEnd()},this.startDrag=function(){this.cancelDrag=!1;var e=this.editor,t=e.container;t.draggable=!0,e.renderer.$cursorLayer.setBlinking(!1),e.setStyle("ace_dragging");var n=s.isWin?"default":"move";e.renderer.setCursorStyle(n),this.setState("dragReady")},this.onMouseDrag=function(e){var t=this.editor.container;if(s.isIE&&this.state=="dragReady"){var n=l(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y);n>3&&t.dragDrop()}if(this.state==="dragWait"){var n=l(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y);n>0&&(t.draggable=!1,this.startSelect(this.mousedownEvent.getDocumentPosition()))}},this.onMouseDown=function(e){if(!this.$dragEnabled)return;this.mousedownEvent=e;var t=this.editor,n=e.inSelection(),r=e.getButton(),i=e.domEvent.detail||1;if(i===1&&r===0&&n){if(e.editor.inMultiSelectMode&&(e.getAccelKey()||e.getShiftKey()))return;this.mousedownEvent.time=Date.now();var o=e.domEvent.target||e.domEvent.srcElement;"unselectable"in o&&(o.unselectable="on");if(t.getDragDelay()){if(s.isWebKit){this.cancelDrag=!0;var u=t.container;u.draggable=!0}this.setState("dragWait")}else this.startDrag();this.captureMouse(e,this.onMouseDrag.bind(this)),e.defaultPrevented=!0}}}).call(f.prototype),t.DragdropHandler=f}),ace.define("ace/mouse/touch_handler",["require","exports","module","ace/mouse/mouse_event","ace/lib/event","ace/lib/dom"],function(e,t,n){"use strict";var r=e("./mouse_event").MouseEvent,i=e("../lib/event"),s=e("../lib/dom");t.addTouchListeners=function(e,t){function b(){var e=window.navigator&&window.navigator.clipboard,r=!1,i=function(){var n=t.getCopyText(),i=t.session.getUndoManager().hasUndo();y.replaceChild(s.buildDom(r?["span",!n&&["span",{"class":"ace_mobile-button",action:"selectall"},"Select All"],n&&["span",{"class":"ace_mobile-button",action:"copy"},"Copy"],n&&["span",{"class":"ace_mobile-button",action:"cut"},"Cut"],e&&["span",{"class":"ace_mobile-button",action:"paste"},"Paste"],i&&["span",{"class":"ace_mobile-button",action:"undo"},"Undo"],["span",{"class":"ace_mobile-button",action:"find"},"Find"],["span",{"class":"ace_mobile-button",action:"openCommandPallete"},"Pallete"]]:["span"]),y.firstChild)},o=function(n){var s=n.target.getAttribute("action");if(s=="more"||!r)return r=!r,i();if(s=="paste")e.readText().then(function(e){t.execCommand(s,e)});else if(s){if(s=="cut"||s=="copy")e?e.writeText(t.getCopyText()):document.execCommand("copy");t.execCommand(s)}y.firstChild.style.display="none",r=!1,s!="openCommandPallete"&&t.focus()};y=s.buildDom(["div",{"class":"ace_mobile-menu",ontouchstart:function(e){n="menu",e.stopPropagation(),e.preventDefault(),t.textInput.focus()},ontouchend:function(e){e.stopPropagation(),e.preventDefault(),o(e)},onclick:o},["span"],["span",{"class":"ace_mobile-button",action:"more"},"..."]],t.container)}function w(){y||b();var e=t.selection.cursor,n=t.renderer.textToScreenCoordinates(e.row,e.column),r=t.renderer.textToScreenCoordinates(0,0).pageX,i=t.renderer.scrollLeft,s=t.container.getBoundingClientRect();y.style.top=n.pageY-s.top-3+"px",n.pageX-s.left<s.width-70?(y.style.left="",y.style.right="10px"):(y.style.right="",y.style.left=r+i-s.left+"px"),y.style.display="",y.firstChild.style.display="none",t.on("input",E)}function E(e){y&&(y.style.display="none"),t.off("input",E)}function S(){l=null,clearTimeout(l);var e=t.selection.getRange(),r=e.contains(p.row,p.column);if(e.isEmpty()||!r)t.selection.moveToPosition(p),t.selection.selectWord();n="wait",w()}function x(){l=null,clearTimeout(l),t.selection.moveToPosition(p);var e=d>=2?t.selection.getLineRange(p.row):t.session.getBracketRange(p);e&&!e.isEmpty()?t.selection.setRange(e):t.selection.selectWord(),n="wait"}function T(){h+=60,c=setInterval(function(){h--<=0&&(clearInterval(c),c=null),Math.abs(v)<.01&&(v=0),Math.abs(m)<.01&&(m=0),h<20&&(v=.9*v),h<20&&(m=.9*m);var e=t.session.getScrollTop();t.renderer.scrollBy(10*v,10*m),e==t.session.getScrollTop()&&(h=0)},10)}var n="scroll",o,u,a,f,l,c,h=0,p,d=0,v=0,m=0,g,y;i.addListener(e,"contextmenu",function(e){if(!g)return;var n=t.textInput.getElement();n.focus()},t),i.addListener(e,"touchstart",function(e){var i=e.touches;if(l||i.length>1){clearTimeout(l),l=null,a=-1,n="zoom";return}g=t.$mouseHandler.isMousePressed=!0;var s=t.renderer.layerConfig.lineHeight,c=t.renderer.layerConfig.lineHeight,y=e.timeStamp;f=y;var b=i[0],w=b.clientX,E=b.clientY;Math.abs(o-w)+Math.abs(u-E)>s&&(a=-1),o=e.clientX=w,u=e.clientY=E,v=m=0;var T=new r(e,t);p=T.getDocumentPosition();if(y-a<500&&i.length==1&&!h)d++,e.preventDefault(),e.button=0,x();else{d=0;var N=t.selection.cursor,C=t.selection.isEmpty()?N:t.selection.anchor,k=t.renderer.$cursorLayer.getPixelPosition(N,!0),L=t.renderer.$cursorLayer.getPixelPosition(C,!0),A=t.renderer.scroller.getBoundingClientRect(),O=t.renderer.layerConfig.offset,M=t.renderer.scrollLeft,_=function(e,t){return e/=c,t=t/s-.75,e*e+t*t};if(e.clientX<A.left){n="zoom";return}var D=_(e.clientX-A.left-k.left+M,e.clientY-A.top-k.top+O),P=_(e.clientX-A.left-L.left+M,e.clientY-A.top-L.top+O);D<3.5&&P<3.5&&(n=D>P?"cursor":"anchor"),P<3.5?n="anchor":D<3.5?n="cursor":n="scroll",l=setTimeout(S,450)}a=y},t),i.addListener(e,"touchend",function(e){g=t.$mouseHandler.isMousePressed=!1,c&&clearInterval(c),n=="zoom"?(n="",h=0):l?(t.selection.moveToPosition(p),h=0,w()):n=="scroll"?(T(),E()):w(),clearTimeout(l),l=null},t),i.addListener(e,"touchmove",function(e){l&&(clearTimeout(l),l=null);var i=e.touches;if(i.length>1||n=="zoom")return;var s=i[0],a=o-s.clientX,c=u-s.clientY;if(n=="wait"){if(!(a*a+c*c>4))return e.preventDefault();n="cursor"}o=s.clientX,u=s.clientY,e.clientX=s.clientX,e.clientY=s.clientY;var h=e.timeStamp,p=h-f;f=h;if(n=="scroll"){var d=new r(e,t);d.speed=1,d.wheelX=a,d.wheelY=c,10*Math.abs(a)<Math.abs(c)&&(a=0),10*Math.abs(c)<Math.abs(a)&&(c=0),p!=0&&(v=a/p,m=c/p),t._emit("mousewheel",d),d.propagationStopped||(v=m=0)}else{var g=new r(e,t),y=g.getDocumentPosition();n=="cursor"?t.selection.moveCursorToPosition(y):n=="anchor"&&t.selection.setSelectionAnchor(y.row,y.column),t.renderer.scrollCursorIntoView(y),e.preventDefault()}},t)}}),ace.define("ace/lib/net",["require","exports","module","ace/lib/dom"],function(e,t,n){"use strict";var r=e("./dom");t.get=function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){n.readyState===4&&t(n.responseText)},n.send(null)},t.loadScript=function(e,t){var n=r.getDocumentHead(),i=document.createElement("script");i.src=e,n.appendChild(i),i.onload=i.onreadystatechange=function(e,n){if(n||!i.readyState||i.readyState=="loaded"||i.readyState=="complete")i=i.onload=i.onreadystatechange=null,n||t()}},t.qualifyURL=function(e){var t=document.createElement("a");return t.href=e,t.href}}),ace.define("ace/lib/event_emitter",["require","exports","module"],function(e,t,n){"use strict";var r={},i=function(){this.propagationStopped=!0},s=function(){this.defaultPrevented=!0};r._emit=r._dispatchEvent=function(e,t){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var n=this._eventRegistry[e]||[],r=this._defaultHandlers[e];if(!n.length&&!r)return;if(typeof t!="object"||!t)t={};t.type||(t.type=e),t.stopPropagation||(t.stopPropagation=i),t.preventDefault||(t.preventDefault=s),n=n.slice();for(var o=0;o<n.length;o++){n[o](t,this);if(t.propagationStopped)break}if(r&&!t.defaultPrevented)return r(t,this)},r._signal=function(e,t){var n=(this._eventRegistry||{})[e];if(!n)return;n=n.slice();for(var r=0;r<n.length;r++)n[r](t,this)},r.once=function(e,t){var n=this;this.on(e,function r(){n.off(e,r),t.apply(null,arguments)});if(!t)return new Promise(function(e){t=e})},r.setDefaultHandler=function(e,t){var n=this._defaultHandlers;n||(n=this._defaultHandlers={_disabled_:{}});if(n[e]){var r=n[e],i=n._disabled_[e];i||(n._disabled_[e]=i=[]),i.push(r);var s=i.indexOf(t);s!=-1&&i.splice(s,1)}n[e]=t},r.removeDefaultHandler=function(e,t){var n=this._defaultHandlers;if(!n)return;var r=n._disabled_[e];if(n[e]==t)r&&this.setDefaultHandler(e,r.pop());else if(r){var i=r.indexOf(t);i!=-1&&r.splice(i,1)}},r.on=r.addEventListener=function(e,t,n){this._eventRegistry=this._eventRegistry||{};var r=this._eventRegistry[e];return r||(r=this._eventRegistry[e]=[]),r.indexOf(t)==-1&&r[n?"unshift":"push"](t),t},r.off=r.removeListener=r.removeEventListener=function(e,t){this._eventRegistry=this._eventRegistry||{};var n=this._eventRegistry[e];if(!n)return;var r=n.indexOf(t);r!==-1&&n.splice(r,1)},r.removeAllListeners=function(e){e||(this._eventRegistry=this._defaultHandlers=undefined),this._eventRegistry&&(this._eventRegistry[e]=undefined),this._defaultHandlers&&(this._defaultHandlers[e]=undefined)},t.EventEmitter=r}),ace.define("ace/lib/app_config",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){"no use strict";function o(e){typeof console!="undefined"&&console.warn&&console.warn.apply(console,arguments)}function u(e,t){var n=new Error(e);n.data=t,typeof console=="object"&&console.error&&console.error(n),setTimeout(function(){throw n})}var r=e("./oop"),i=e("./event_emitter").EventEmitter,s={setOptions:function(e){Object.keys(e).forEach(function(t){this.setOption(t,e[t])},this)},getOptions:function(e){var t={};if(!e){var n=this.$options;e=Object.keys(n).filter(function(e){return!n[e].hidden})}else Array.isArray(e)||(t=e,e=Object.keys(t));return e.forEach(function(e){t[e]=this.getOption(e)},this),t},setOption:function(e,t){if(this["$"+e]===t)return;var n=this.$options[e];if(!n)return o('misspelled option "'+e+'"');if(n.forwardTo)return this[n.forwardTo]&&this[n.forwardTo].setOption(e,t);n.handlesSet||(this["$"+e]=t),n&&n.set&&n.set.call(this,t)},getOption:function(e){var t=this.$options[e];return t?t.forwardTo?this[t.forwardTo]&&this[t.forwardTo].getOption(e):t&&t.get?t.get.call(this):this["$"+e]:o('misspelled option "'+e+'"')}},a=function(){this.$defaultOptions={}};(function(){r.implement(this,i),this.defineOptions=function(e,t,n){return e.$options||(this.$defaultOptions[t]=e.$options={}),Object.keys(n).forEach(function(t){var r=n[t];typeof r=="string"&&(r={forwardTo:r}),r.name||(r.name=t),e.$options[r.name]=r,"initialValue"in r&&(e["$"+r.name]=r.initialValue)}),r.implement(e,s),this},this.resetOptions=function(e){Object.keys(e.$options).forEach(function(t){var n=e.$options[t];"value"in n&&e.setOption(t,n.value)})},this.setDefaultValue=function(e,t,n){if(!e){for(e in this.$defaultOptions)if(this.$defaultOptions[e][t])break;if(!this.$defaultOptions[e][t])return!1}var r=this.$defaultOptions[e]||(this.$defaultOptions[e]={});r[t]&&(r.forwardTo?this.setDefaultValue(r.forwardTo,t,n):r[t].value=n)},this.setDefaultValues=function(e,t){Object.keys(t).forEach(function(n){this.setDefaultValue(e,n,t[n])},this)},this.warn=o,this.reportError=u}).call(a.prototype),t.AppConfig=a}),ace.define("ace/config",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/lib/net","ace/lib/app_config"],function(e,t,n){"no use strict";function l(r){if(!u||!u.document)return;a.packaged=r||e.packaged||n.packaged||u.define&&__webpack_require__.amdD.packaged;var i={},s="",o=document.currentScript||document._currentScript,f=o&&o.ownerDocument||document,l=f.getElementsByTagName("script");for(var h=0;h<l.length;h++){var p=l[h],d=p.src||p.getAttribute("src");if(!d)continue;var v=p.attributes;for(var m=0,g=v.length;m<g;m++){var y=v[m];y.name.indexOf("data-ace-")===0&&(i[c(y.name.replace(/^data-ace-/,""))]=y.value)}var b=d.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);b&&(s=b[1])}s&&(i.base=i.base||s,i.packaged=!0),i.basePath=i.base,i.workerPath=i.workerPath||i.base,i.modePath=i.modePath||i.base,i.themePath=i.themePath||i.base,delete i.base;for(var w in i)typeof i[w]!="undefined"&&t.set(w,i[w])}function c(e){return e.replace(/-(.)/g,function(e,t){return t.toUpperCase()})}var r=e("./lib/lang"),i=e("./lib/oop"),s=e("./lib/net"),o=e("./lib/app_config").AppConfig;n.exports=t=new o;var u=function(){return this||typeof window!="undefined"&&window}(),a={packaged:!1,workerPath:null,modePath:null,themePath:null,basePath:"",suffix:".js",$moduleUrls:{},loadWorkerFromBlob:!0,sharedPopups:!1};t.get=function(e){if(!a.hasOwnProperty(e))throw new Error("Unknown config key: "+e);return a[e]},t.set=function(e,t){if(a.hasOwnProperty(e))a[e]=t;else if(this.setDefaultValue("",e,t)==0)throw new Error("Unknown config key: "+e)},t.all=function(){return r.copyObject(a)},t.$modes={},t.moduleUrl=function(e,t){if(a.$moduleUrls[e])return a.$moduleUrls[e];var n=e.split("/");t=t||n[n.length-2]||"";var r=t=="snippets"?"/":"-",i=n[n.length-1];if(t=="worker"&&r=="-"){var s=new RegExp("^"+t+"[\\-_]|[\\-_]"+t+"$","g");i=i.replace(s,"")}(!i||i==t)&&n.length>1&&(i=n[n.length-2]);var o=a[t+"Path"];return o==null?o=a.basePath:r=="/"&&(t=r=""),o&&o.slice(-1)!="/"&&(o+="/"),o+t+r+i+this.get("suffix")},t.setModuleUrl=function(e,t){return a.$moduleUrls[e]=t},t.$loading={},t.loadModule=function(n,r){var i,o;Array.isArray(n)&&(o=n[0],n=n[1]);try{i=e(n)}catch(u){}if(i&&!t.$loading[n])return r&&r(i);t.$loading[n]||(t.$loading[n]=[]),t.$loading[n].push(r);if(t.$loading[n].length>1)return;var a=function(){e([n],function(e){t._emit("load.module",{name:n,module:e});var r=t.$loading[n];t.$loading[n]=null,r.forEach(function(t){t&&t(e)})})};if(!t.get("packaged"))return a();s.loadScript(t.moduleUrl(n,o),a),f()};var f=function(){!a.basePath&&!a.workerPath&&!a.modePath&&!a.themePath&&!Object.keys(a.$moduleUrls).length&&(console.error("Unable to infer path to ace from script src,","use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes","or with webpack use ace/webpack-resolver"),f=function(){})};t.init=l,t.version="1.4.12"}),ace.define("ace/mouse/mouse_handler",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/mouse/default_handlers","ace/mouse/default_gutter_handler","ace/mouse/mouse_event","ace/mouse/dragdrop_handler","ace/mouse/touch_handler","ace/config"],function(e,t,n){"use strict";var r=e("../lib/event"),i=e("../lib/useragent"),s=e("./default_handlers").DefaultHandlers,o=e("./default_gutter_handler").GutterHandler,u=e("./mouse_event").MouseEvent,a=e("./dragdrop_handler").DragdropHandler,f=e("./touch_handler").addTouchListeners,l=e("../config"),c=function(e){var t=this;this.editor=e,new s(this),new o(this),new a(this);var n=function(t){var n=!document.hasFocus||!document.hasFocus()||!e.isFocused()&&document.activeElement==(e.textInput&&e.textInput.getElement());n&&window.focus(),e.focus()},u=e.renderer.getMouseEventTarget();r.addListener(u,"click",this.onMouseEvent.bind(this,"click"),e),r.addListener(u,"mousemove",this.onMouseMove.bind(this,"mousemove"),e),r.addMultiMouseDownListener([u,e.renderer.scrollBarV&&e.renderer.scrollBarV.inner,e.renderer.scrollBarH&&e.renderer.scrollBarH.inner,e.textInput&&e.textInput.getElement()].filter(Boolean),[400,300,250],this,"onMouseEvent",e),r.addMouseWheelListener(e.container,this.onMouseWheel.bind(this,"mousewheel"),e),f(e.container,e);var l=e.renderer.$gutter;r.addListener(l,"mousedown",this.onMouseEvent.bind(this,"guttermousedown"),e),r.addListener(l,"click",this.onMouseEvent.bind(this,"gutterclick"),e),r.addListener(l,"dblclick",this.onMouseEvent.bind(this,"gutterdblclick"),e),r.addListener(l,"mousemove",this.onMouseEvent.bind(this,"guttermousemove"),e),r.addListener(u,"mousedown",n,e),r.addListener(l,"mousedown",n,e),i.isIE&&e.renderer.scrollBarV&&(r.addListener(e.renderer.scrollBarV.element,"mousedown",n,e),r.addListener(e.renderer.scrollBarH.element,"mousedown",n,e)),e.on("mousemove",function(n){if(t.state||t.$dragDelay||!t.$dragEnabled)return;var r=e.renderer.screenToTextCoordinates(n.x,n.y),i=e.session.selection.getRange(),s=e.renderer;!i.isEmpty()&&i.insideStart(r.row,r.column)?s.setCursorStyle("default"):s.setCursorStyle("")},e)};(function(){this.onMouseEvent=function(e,t){this.editor._emit(e,new u(t,this.editor))},this.onMouseMove=function(e,t){var n=this.editor._eventRegistry&&this.editor._eventRegistry.mousemove;if(!n||!n.length)return;this.editor._emit(e,new u(t,this.editor))},this.onMouseWheel=function(e,t){var n=new u(t,this.editor);n.speed=this.$scrollSpeed*2,n.wheelX=t.wheelX,n.wheelY=t.wheelY,this.editor._emit(e,n)},this.setState=function(e){this.state=e},this.captureMouse=function(e,t){this.x=e.x,this.y=e.y,this.isMousePressed=!0;var n=this.editor,s=this.editor.renderer;s.$isMousePressed=!0;var o=this,a=function(e){if(!e)return;if(i.isWebKit&&!e.which&&o.releaseMouse)return o.releaseMouse();o.x=e.clientX,o.y=e.clientY,t&&t(e),o.mouseEvent=new u(e,o.editor),o.$mouseMoved=!0},f=function(e){n.off("beforeEndOperation",c),clearInterval(h),l(),o[o.state+"End"]&&o[o.state+"End"](e),o.state="",o.isMousePressed=s.$isMousePressed=!1,s.$keepTextAreaAtCursor&&s.$moveTextAreaToCursor(),o.$onCaptureMouseMove=o.releaseMouse=null,e&&o.onMouseEvent("mouseup",e),n.endOperation()},l=function(){o[o.state]&&o[o.state](),o.$mouseMoved=!1};if(i.isOldIE&&e.domEvent.type=="dblclick")return setTimeout(function(){f(e)});var c=function(e){if(!o.releaseMouse)return;n.curOp.command.name&&n.curOp.selectionChanged&&(o[o.state+"End"]&&o[o.state+"End"](),o.state="",o.releaseMouse())};n.on("beforeEndOperation",c),n.startOperation({command:{name:"mouse"}}),o.$onCaptureMouseMove=a,o.releaseMouse=r.capture(this.editor.container,a,f);var h=setInterval(l,20)},this.releaseMouse=null,this.cancelContextMenu=function(){var e=function(t){if(t&&t.domEvent&&t.domEvent.type!="contextmenu")return;this.editor.off("nativecontextmenu",e),t&&t.domEvent&&r.stopEvent(t.domEvent)}.bind(this);setTimeout(e,10),this.editor.on("nativecontextmenu",e)},this.destroy=function(){this.releaseMouse&&this.releaseMouse()}}).call(c.prototype),l.defineOptions(c.prototype,"mouseHandler",{scrollSpeed:{initialValue:2},dragDelay:{initialValue:i.isMac?150:0},dragEnabled:{initialValue:!0},focusTimeout:{initialValue:0},tooltipFollowsMouse:{initialValue:!0}}),t.MouseHandler=c}),ace.define("ace/mouse/fold_handler",["require","exports","module","ace/lib/dom"],function(e,t,n){"use strict";function i(e){e.on("click",function(t){var n=t.getDocumentPosition(),i=e.session,s=i.getFoldAt(n.row,n.column,1);s&&(t.getAccelKey()?i.removeFold(s):i.expandFold(s),t.stop());var o=t.domEvent&&t.domEvent.target;o&&r.hasCssClass(o,"ace_inline_button")&&r.hasCssClass(o,"ace_toggle_wrap")&&(i.setOption("wrap",!i.getUseWrapMode()),e.renderer.scrollCursorIntoView())}),e.on("gutterclick",function(t){var n=e.renderer.$gutterLayer.getRegion(t);if(n=="foldWidgets"){var r=t.getDocumentPosition().row,i=e.session;i.foldWidgets&&i.foldWidgets[r]&&e.session.onFoldWidgetClick(r,t),e.isFocused()||e.focus(),t.stop()}}),e.on("gutterdblclick",function(t){var n=e.renderer.$gutterLayer.getRegion(t);if(n=="foldWidgets"){var r=t.getDocumentPosition().row,i=e.session,s=i.getParentFoldRangeData(r,!0),o=s.range||s.firstRange;if(o){r=o.start.row;var u=i.getFoldAt(r,i.getLine(r).length,1);u?i.removeFold(u):(i.addFold("...",o),e.renderer.scrollCursorIntoView({row:o.start.row,column:0}))}t.stop()}})}var r=e("../lib/dom");t.FoldHandler=i}),ace.define("ace/keyboard/keybinding",["require","exports","module","ace/lib/keys","ace/lib/event"],function(e,t,n){"use strict";var r=e("../lib/keys"),i=e("../lib/event"),s=function(e){this.$editor=e,this.$data={editor:e},this.$handlers=[],this.setDefaultHandler(e.commands)};(function(){this.setDefaultHandler=function(e){this.removeKeyboardHandler(this.$defaultHandler),this.$defaultHandler=e,this.addKeyboardHandler(e,0)},this.setKeyboardHandler=function(e){var t=this.$handlers;if(t[t.length-1]==e)return;while(t[t.length-1]&&t[t.length-1]!=this.$defaultHandler)this.removeKeyboardHandler(t[t.length-1]);this.addKeyboardHandler(e,1)},this.addKeyboardHandler=function(e,t){if(!e)return;typeof e=="function"&&!e.handleKeyboard&&(e.handleKeyboard=e);var n=this.$handlers.indexOf(e);n!=-1&&this.$handlers.splice(n,1),t==undefined?this.$handlers.push(e):this.$handlers.splice(t,0,e),n==-1&&e.attach&&e.attach(this.$editor)},this.removeKeyboardHandler=function(e){var t=this.$handlers.indexOf(e);return t==-1?!1:(this.$handlers.splice(t,1),e.detach&&e.detach(this.$editor),!0)},this.getKeyboardHandler=function(){return this.$handlers[this.$handlers.length-1]},this.getStatusText=function(){var e=this.$data,t=e.editor;return this.$handlers.map(function(n){return n.getStatusText&&n.getStatusText(t,e)||""}).filter(Boolean).join(" ")},this.$callKeyboardHandlers=function(e,t,n,r){var s,o=!1,u=this.$editor.commands;for(var a=this.$handlers.length;a--;){s=this.$handlers[a].handleKeyboard(this.$data,e,t,n,r);if(!s||!s.command)continue;s.command=="null"?o=!0:o=u.exec(s.command,this.$editor,s.args,r),o&&r&&e!=-1&&s.passEvent!=1&&s.command.passEvent!=1&&i.stopEvent(r);if(o)break}return!o&&e==-1&&(s={command:"insertstring"},o=u.exec("insertstring",this.$editor,t)),o&&this.$editor._signal&&this.$editor._signal("keyboardActivity",s),o},this.onCommandKey=function(e,t,n){var i=r.keyCodeToString(n);return this.$callKeyboardHandlers(t,i,n,e)},this.onTextInput=function(e){return this.$callKeyboardHandlers(-1,e)}}).call(s.prototype),t.KeyBinding=s}),ace.define("ace/lib/bidiutil",["require","exports","module"],function(e,t,n){"use strict";function F(e,t,n,r){var i=s?d:p,c=null,h=null,v=null,m=0,g=null,y=null,b=-1,w=null,E=null,T=[];if(!r)for(w=0,r=[];w<n;w++)r[w]=R(e[w]);o=s,u=!1,a=!1,f=!1,l=!1;for(E=0;E<n;E++){c=m,T[E]=h=q(e,r,T,E),m=i[c][h],g=m&240,m&=15,t[E]=v=i[m][5];if(g>0)if(g==16){for(w=b;w<E;w++)t[w]=1;b=-1}else b=-1;y=i[m][6];if(y)b==-1&&(b=E);else if(b>-1){for(w=b;w<E;w++)t[w]=v;b=-1}r[E]==S&&(t[E]=0),o|=v}if(l)for(w=0;w<n;w++)if(r[w]==x){t[w]=s;for(var C=w-1;C>=0;C--){if(r[C]!=N)break;t[C]=s}}}function I(e,t,n){if(o<e)return;if(e==1&&s==m&&!f){n.reverse();return}var r=n.length,i=0,u,a,l,c;while(i<r){if(t[i]>=e){u=i+1;while(u<r&&t[u]>=e)u++;for(a=i,l=u-1;a<l;a++,l--)c=n[a],n[a]=n[l],n[l]=c;i=u}i++}}function q(e,t,n,r){var i=t[r],o,c,h,p;switch(i){case g:case y:u=!1;case E:case w:return i;case b:return u?w:b;case T:return u=!0,a=!0,y;case N:return E;case C:if(r<1||r+1>=t.length||(o=n[r-1])!=b&&o!=w||(c=t[r+1])!=b&&c!=w)return E;return u&&(c=w),c==o?c:E;case k:o=r>0?n[r-1]:S;if(o==b&&r+1<t.length&&t[r+1]==b)return b;return E;case L:if(r>0&&n[r-1]==b)return b;if(u)return E;p=r+1,h=t.length;while(p<h&&t[p]==L)p++;if(p<h&&t[p]==b)return b;return E;case A:h=t.length,p=r+1;while(p<h&&t[p]==A)p++;if(p<h){var d=e[r],v=d>=1425&&d<=2303||d==64286;o=t[p];if(v&&(o==y||o==T))return y}if(r<1||(o=t[r-1])==S)return E;return n[r-1];case S:return u=!1,f=!0,s;case x:return l=!0,E;case O:case M:case D:case P:case _:u=!1;case H:return E}}function R(e){var t=e.charCodeAt(0),n=t>>8;return n==0?t>191?g:B[t]:n==5?/[\u0591-\u05f4]/.test(e)?y:g:n==6?/[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e)?A:/[\u0660-\u0669\u066b-\u066c]/.test(e)?w:t==1642?L:/[\u06f0-\u06f9]/.test(e)?b:T:n==32&&t<=8287?j[t&255]:n==254?t>=65136?T:E:E}function U(e){return e>="\u064b"&&e<="\u0655"}var r=["\u0621","\u0641"],i=["\u063a","\u064a"],s=0,o=0,u=!1,a=!1,f=!1,l=!1,c=!1,h=!1,p=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],d=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],v=0,m=1,g=0,y=1,b=2,w=3,E=4,S=5,x=6,T=7,N=8,C=9,k=10,L=11,A=12,O=13,M=14,_=15,D=16,P=17,H=18,B=[H,H,H,H,H,H,H,H,H,x,S,x,N,S,H,H,H,H,H,H,H,H,H,H,H,H,H,H,S,S,S,x,N,E,E,L,L,L,E,E,E,E,E,k,C,k,C,C,b,b,b,b,b,b,b,b,b,b,C,E,E,E,E,E,E,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,E,E,E,E,E,E,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,E,E,E,E,H,H,H,H,H,H,S,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,H,C,E,L,L,L,L,E,E,E,E,g,E,E,H,E,E,L,L,b,b,E,g,E,E,E,b,g,E,E,E,E,E],j=[N,N,N,N,N,N,N,N,N,N,N,H,H,H,g,y,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,N,S,O,M,_,D,P,C,L,L,L,L,L,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,C,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,N];t.L=g,t.R=y,t.EN=b,t.ON_R=3,t.AN=4,t.R_H=5,t.B=6,t.RLE=7,t.DOT="\u00b7",t.doBidiReorder=function(e,n,r){if(e.length<2)return{};var i=e.split(""),o=new Array(i.length),u=new Array(i.length),a=[];s=r?m:v,F(i,a,i.length,n);for(var f=0;f<o.length;o[f]=f,f++);I(2,a,o),I(1,a,o);for(var f=0;f<o.length-1;f++)n[f]===w?a[f]=t.AN:a[f]===y&&(n[f]>T&&n[f]<O||n[f]===E||n[f]===H)?a[f]=t.ON_R:f>0&&i[f-1]==="\u0644"&&/\u0622|\u0623|\u0625|\u0627/.test(i[f])&&(a[f-1]=a[f]=t.R_H,f++);i[i.length-1]===t.DOT&&(a[i.length-1]=t.B),i[0]==="\u202b"&&(a[0]=t.RLE);for(var f=0;f<o.length;f++)u[f]=a[o[f]];return{logicalFromVisual:o,bidiLevels:u}},t.hasBidiCharacters=function(e,t){var n=!1;for(var r=0;r<e.length;r++)t[r]=R(e.charAt(r)),!n&&(t[r]==y||t[r]==T||t[r]==w)&&(n=!0);return n},t.getVisualFromLogicalIdx=function(e,t){for(var n=0;n<t.logicalFromVisual.length;n++)if(t.logicalFromVisual[n]==e)return n;return 0}}),ace.define("ace/bidihandler",["require","exports","module","ace/lib/bidiutil","ace/lib/lang"],function(e,t,n){"use strict";var r=e("./lib/bidiutil"),i=e("./lib/lang"),s=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/,o=function(e){this.session=e,this.bidiMap={},this.currentRow=null,this.bidiUtil=r,this.charWidths=[],this.EOL="\u00ac",this.showInvisibles=!0,this.isRtlDir=!1,this.$isRtl=!1,this.line="",this.wrapIndent=0,this.EOF="\u00b6",this.RLE="\u202b",this.contentWidth=0,this.fontMetrics=null,this.rtlLineOffset=0,this.wrapOffset=0,this.isMoveLeftOperation=!1,this.seenBidi=s.test(e.getValue())};(function(){this.isBidiRow=function(e,t,n){return this.seenBidi?(e!==this.currentRow&&(this.currentRow=e,this.updateRowLine(t,n),this.updateBidiMap()),this.bidiMap.bidiLevels):!1},this.onChange=function(e){this.seenBidi?this.currentRow=null:e.action=="insert"&&s.test(e.lines.join("\n"))&&(this.seenBidi=!0,this.currentRow=null)},this.getDocumentRow=function(){var e=0,t=this.session.$screenRowCache;if(t.length){var n=this.session.$getRowCacheIndex(t,this.currentRow);n>=0&&(e=this.session.$docRowCache[n])}return e},this.getSplitIndex=function(){var e=0,t=this.session.$screenRowCache;if(t.length){var n,r=this.session.$getRowCacheIndex(t,this.currentRow);while(this.currentRow-e>0){n=this.session.$getRowCacheIndex(t,this.currentRow-e-1);if(n!==r)break;r=n,e++}}else e=this.currentRow;return e},this.updateRowLine=function(e,t){e===undefined&&(e=this.getDocumentRow());var n=e===this.session.getLength()-1,s=n?this.EOF:this.EOL;this.wrapIndent=0,this.line=this.session.getLine(e),this.isRtlDir=this.$isRtl||this.line.charAt(0)===this.RLE;if(this.session.$useWrapMode){var o=this.session.$wrapData[e];o&&(t===undefined&&(t=this.getSplitIndex()),t>0&&o.length?(this.wrapIndent=o.indent,this.wrapOffset=this.wrapIndent*this.charWidths[r.L],this.line=t<o.length?this.line.substring(o[t-1],o[t]):this.line.substring(o[o.length-1])):this.line=this.line.substring(0,o[t])),t==o.length&&(this.line+=this.showInvisibles?s:r.DOT)}else this.line+=this.showInvisibles?s:r.DOT;var u=this.session,a=0,f;this.line=this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g,function(e,t){return e==="	"||u.isFullWidth(e.charCodeAt(0))?(f=e==="	"?u.getScreenTabSize(t+a):2,a+=f-1,i.stringRepeat(r.DOT,f)):e}),this.isRtlDir&&(this.fontMetrics.$main.textContent=this.line.charAt(this.line.length-1)==r.DOT?this.line.substr(0,this.line.length-1):this.line,this.rtlLineOffset=this.contentWidth-this.fontMetrics.$main.getBoundingClientRect().width)},this.updateBidiMap=function(){var e=[];r.hasBidiCharacters(this.line,e)||this.isRtlDir?this.bidiMap=r.doBidiReorder(this.line,e,this.isRtlDir):this.bidiMap={}},this.markAsDirty=function(){this.currentRow=null},this.updateCharacterWidths=function(e){if(this.characterWidth===e.$characterSize.width)return;this.fontMetrics=e;var t=this.characterWidth=e.$characterSize.width,n=e.$measureCharWidth("\u05d4");this.charWidths[r.L]=this.charWidths[r.EN]=this.charWidths[r.ON_R]=t,this.charWidths[r.R]=this.charWidths[r.AN]=n,this.charWidths[r.R_H]=n*.45,this.charWidths[r.B]=this.charWidths[r.RLE]=0,this.currentRow=null},this.setShowInvisibles=function(e){this.showInvisibles=e,this.currentRow=null},this.setEolChar=function(e){this.EOL=e},this.setContentWidth=function(e){this.contentWidth=e},this.isRtlLine=function(e){return this.$isRtl?!0:e!=undefined?this.session.getLine(e).charAt(0)==this.RLE:this.isRtlDir},this.setRtlDirection=function(e,t){var n=e.getCursorPosition();for(var r=e.selection.getSelectionAnchor().row;r<=n.row;r++)!t&&e.session.getLine(r).charAt(0)===e.session.$bidiHandler.RLE?e.session.doc.removeInLine(r,0,1):t&&e.session.getLine(r).charAt(0)!==e.session.$bidiHandler.RLE&&e.session.doc.insert({column:0,row:r},e.session.$bidiHandler.RLE)},this.getPosLeft=function(e){e-=this.wrapIndent;var t=this.line.charAt(0)===this.RLE?1:0,n=e>t?this.session.getOverwrite()?e:e-1:t,i=r.getVisualFromLogicalIdx(n,this.bidiMap),s=this.bidiMap.bidiLevels,o=0;!this.session.getOverwrite()&&e<=t&&s[i]%2!==0&&i++;for(var u=0;u<i;u++)o+=this.charWidths[s[u]];return!this.session.getOverwrite()&&e>t&&s[i]%2===0&&(o+=this.charWidths[s[i]]),this.wrapIndent&&(o+=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset),this.isRtlDir&&(o+=this.rtlLineOffset),o},this.getSelections=function(e,t){var n=this.bidiMap,r=n.bidiLevels,i,s=[],o=0,u=Math.min(e,t)-this.wrapIndent,a=Math.max(e,t)-this.wrapIndent,f=!1,l=!1,c=0;this.wrapIndent&&(o+=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset);for(var h,p=0;p<r.length;p++)h=n.logicalFromVisual[p],i=r[p],f=h>=u&&h<a,f&&!l?c=o:!f&&l&&s.push({left:c,width:o-c}),o+=this.charWidths[i],l=f;f&&p===r.length&&s.push({left:c,width:o-c});if(this.isRtlDir)for(var d=0;d<s.length;d++)s[d].left+=this.rtlLineOffset;return s},this.offsetToCol=function(e){this.isRtlDir&&(e-=this.rtlLineOffset);var t=0,e=Math.max(e,0),n=0,r=0,i=this.bidiMap.bidiLevels,s=this.charWidths[i[r]];this.wrapIndent&&(e-=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset);while(e>n+s/2){n+=s;if(r===i.length-1){s=0;break}s=this.charWidths[i[++r]]}return r>0&&i[r-1]%2!==0&&i[r]%2===0?(e<n&&r--,t=this.bidiMap.logicalFromVisual[r]):r>0&&i[r-1]%2===0&&i[r]%2!==0?t=1+(e>n?this.bidiMap.logicalFromVisual[r]:this.bidiMap.logicalFromVisual[r-1]):this.isRtlDir&&r===i.length-1&&s===0&&i[r-1]%2===0||!this.isRtlDir&&r===0&&i[r]%2!==0?t=1+this.bidiMap.logicalFromVisual[r]:(r>0&&i[r-1]%2!==0&&s!==0&&r--,t=this.bidiMap.logicalFromVisual[r]),t===0&&this.isRtlDir&&t++,t+this.wrapIndent}}).call(o.prototype),t.BidiHandler=o}),ace.define("ace/selection",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/range"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/lang"),s=e("./lib/event_emitter").EventEmitter,o=e("./range").Range,u=function(e){this.session=e,this.doc=e.getDocument(),this.clearSelection(),this.cursor=this.lead=this.doc.createAnchor(0,0),this.anchor=this.doc.createAnchor(0,0),this.$silent=!1;var t=this;this.cursor.on("change",function(e){t.$cursorChanged=!0,t.$silent||t._emit("changeCursor"),!t.$isEmpty&&!t.$silent&&t._emit("changeSelection"),!t.$keepDesiredColumnOnChange&&e.old.column!=e.value.column&&(t.$desiredColumn=null)}),this.anchor.on("change",function(){t.$anchorChanged=!0,!t.$isEmpty&&!t.$silent&&t._emit("changeSelection")})};(function(){r.implement(this,s),this.isEmpty=function(){return this.$isEmpty||this.anchor.row==this.lead.row&&this.anchor.column==this.lead.column},this.isMultiLine=function(){return!this.$isEmpty&&this.anchor.row!=this.cursor.row},this.getCursor=function(){return this.lead.getPosition()},this.setSelectionAnchor=function(e,t){this.$isEmpty=!1,this.anchor.setPosition(e,t)},this.getAnchor=this.getSelectionAnchor=function(){return this.$isEmpty?this.getSelectionLead():this.anchor.getPosition()},this.getSelectionLead=function(){return this.lead.getPosition()},this.isBackwards=function(){var e=this.anchor,t=this.lead;return e.row>t.row||e.row==t.row&&e.column>t.column},this.getRange=function(){var e=this.anchor,t=this.lead;return this.$isEmpty?o.fromPoints(t,t):this.isBackwards()?o.fromPoints(t,e):o.fromPoints(e,t)},this.clearSelection=function(){this.$isEmpty||(this.$isEmpty=!0,this._emit("changeSelection"))},this.selectAll=function(){this.$setSelection(0,0,Number.MAX_VALUE,Number.MAX_VALUE)},this.setRange=this.setSelectionRange=function(e,t){var n=t?e.end:e.start,r=t?e.start:e.end;this.$setSelection(n.row,n.column,r.row,r.column)},this.$setSelection=function(e,t,n,r){if(this.$silent)return;var i=this.$isEmpty,s=this.inMultiSelectMode;this.$silent=!0,this.$cursorChanged=this.$anchorChanged=!1,this.anchor.setPosition(e,t),this.cursor.setPosition(n,r),this.$isEmpty=!o.comparePoints(this.anchor,this.cursor),this.$silent=!1,this.$cursorChanged&&this._emit("changeCursor"),(this.$cursorChanged||this.$anchorChanged||i!=this.$isEmpty||s)&&this._emit("changeSelection")},this.$moveSelection=function(e){var t=this.lead;this.$isEmpty&&this.setSelectionAnchor(t.row,t.column),e.call(this)},this.selectTo=function(e,t){this.$moveSelection(function(){this.moveCursorTo(e,t)})},this.selectToPosition=function(e){this.$moveSelection(function(){this.moveCursorToPosition(e)})},this.moveTo=function(e,t){this.clearSelection(),this.moveCursorTo(e,t)},this.moveToPosition=function(e){this.clearSelection(),this.moveCursorToPosition(e)},this.selectUp=function(){this.$moveSelection(this.moveCursorUp)},this.selectDown=function(){this.$moveSelection(this.moveCursorDown)},this.selectRight=function(){this.$moveSelection(this.moveCursorRight)},this.selectLeft=function(){this.$moveSelection(this.moveCursorLeft)},this.selectLineStart=function(){this.$moveSelection(this.moveCursorLineStart)},this.selectLineEnd=function(){this.$moveSelection(this.moveCursorLineEnd)},this.selectFileEnd=function(){this.$moveSelection(this.moveCursorFileEnd)},this.selectFileStart=function(){this.$moveSelection(this.moveCursorFileStart)},this.selectWordRight=function(){this.$moveSelection(this.moveCursorWordRight)},this.selectWordLeft=function(){this.$moveSelection(this.moveCursorWordLeft)},this.getWordRange=function(e,t){if(typeof t=="undefined"){var n=e||this.lead;e=n.row,t=n.column}return this.session.getWordRange(e,t)},this.selectWord=function(){this.setSelectionRange(this.getWordRange())},this.selectAWord=function(){var e=this.getCursor(),t=this.session.getAWordRange(e.row,e.column);this.setSelectionRange(t)},this.getLineRange=function(e,t){var n=typeof e=="number"?e:this.lead.row,r,i=this.session.getFoldLine(n);return i?(n=i.start.row,r=i.end.row):r=n,t===!0?new o(n,0,r,this.session.getLine(r).length):new o(n,0,r+1,0)},this.selectLine=function(){this.setSelectionRange(this.getLineRange())},this.moveCursorUp=function(){this.moveCursorBy(-1,0)},this.moveCursorDown=function(){this.moveCursorBy(1,0)},this.wouldMoveIntoSoftTab=function(e,t,n){var r=e.column,i=e.column+t;return n<0&&(r=e.column-t,i=e.column),this.session.isTabStop(e)&&this.doc.getLine(e.row).slice(r,i).split(" ").length-1==t},this.moveCursorLeft=function(){var e=this.lead.getPosition(),t;if(t=this.session.getFoldAt(e.row,e.column,-1))this.moveCursorTo(t.start.row,t.start.column);else if(e.column===0)e.row>0&&this.moveCursorTo(e.row-1,this.doc.getLine(e.row-1).length);else{var n=this.session.getTabSize();this.wouldMoveIntoSoftTab(e,n,-1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,-n):this.moveCursorBy(0,-1)}},this.moveCursorRight=function(){var e=this.lead.getPosition(),t;if(t=this.session.getFoldAt(e.row,e.column,1))this.moveCursorTo(t.end.row,t.end.column);else if(this.lead.column==this.doc.getLine(this.lead.row).length)this.lead.row<this.doc.getLength()-1&&this.moveCursorTo(this.lead.row+1,0);else{var n=this.session.getTabSize(),e=this.lead;this.wouldMoveIntoSoftTab(e,n,1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,n):this.moveCursorBy(0,1)}},this.moveCursorLineStart=function(){var e=this.lead.row,t=this.lead.column,n=this.session.documentToScreenRow(e,t),r=this.session.screenToDocumentPosition(n,0),i=this.session.getDisplayLine(e,null,r.row,r.column),s=i.match(/^\s*/);s[0].length!=t&&!this.session.$useEmacsStyleLineStart&&(r.column+=s[0].length),this.moveCursorToPosition(r)},this.moveCursorLineEnd=function(){var e=this.lead,t=this.session.getDocumentLastRowColumnPosition(e.row,e.column);if(this.lead.column==t.column){var n=this.session.getLine(t.row);if(t.column==n.length){var r=n.search(/\s+$/);r>0&&(t.column=r)}}this.moveCursorTo(t.row,t.column)},this.moveCursorFileEnd=function(){var e=this.doc.getLength()-1,t=this.doc.getLine(e).length;this.moveCursorTo(e,t)},this.moveCursorFileStart=function(){this.moveCursorTo(0,0)},this.moveCursorLongWordRight=function(){var e=this.lead.row,t=this.lead.column,n=this.doc.getLine(e),r=n.substring(t);this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0;var i=this.session.getFoldAt(e,t,1);if(i){this.moveCursorTo(i.end.row,i.end.column);return}this.session.nonTokenRe.exec(r)&&(t+=this.session.nonTokenRe.lastIndex,this.session.nonTokenRe.lastIndex=0,r=n.substring(t));if(t>=n.length){this.moveCursorTo(e,n.length),this.moveCursorRight(),e<this.doc.getLength()-1&&this.moveCursorWordRight();return}this.session.tokenRe.exec(r)&&(t+=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(e,t)},this.moveCursorLongWordLeft=function(){var e=this.lead.row,t=this.lead.column,n;if(n=this.session.getFoldAt(e,t,-1)){this.moveCursorTo(n.start.row,n.start.column);return}var r=this.session.getFoldStringAt(e,t,-1);r==null&&(r=this.doc.getLine(e).substring(0,t));var s=i.stringReverse(r);this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0,this.session.nonTokenRe.exec(s)&&(t-=this.session.nonTokenRe.lastIndex,s=s.slice(this.session.nonTokenRe.lastIndex),this.session.nonTokenRe.lastIndex=0);if(t<=0){this.moveCursorTo(e,0),this.moveCursorLeft(),e>0&&this.moveCursorWordLeft();return}this.session.tokenRe.exec(s)&&(t-=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(e,t)},this.$shortWordEndIndex=function(e){var t=0,n,r=/\s/,i=this.session.tokenRe;i.lastIndex=0;if(this.session.tokenRe.exec(e))t=this.session.tokenRe.lastIndex;else{while((n=e[t])&&r.test(n))t++;if(t<1){i.lastIndex=0;while((n=e[t])&&!i.test(n)){i.lastIndex=0,t++;if(r.test(n)){if(t>2){t--;break}while((n=e[t])&&r.test(n))t++;if(t>2)break}}}}return i.lastIndex=0,t},this.moveCursorShortWordRight=function(){var e=this.lead.row,t=this.lead.column,n=this.doc.getLine(e),r=n.substring(t),i=this.session.getFoldAt(e,t,1);if(i)return this.moveCursorTo(i.end.row,i.end.column);if(t==n.length){var s=this.doc.getLength();do e++,r=this.doc.getLine(e);while(e<s&&/^\s*$/.test(r));/^\s+/.test(r)||(r=""),t=0}var o=this.$shortWordEndIndex(r);this.moveCursorTo(e,t+o)},this.moveCursorShortWordLeft=function(){var e=this.lead.row,t=this.lead.column,n;if(n=this.session.getFoldAt(e,t,-1))return this.moveCursorTo(n.start.row,n.start.column);var r=this.session.getLine(e).substring(0,t);if(t===0){do e--,r=this.doc.getLine(e);while(e>0&&/^\s*$/.test(r));t=r.length,/\s+$/.test(r)||(r="")}var s=i.stringReverse(r),o=this.$shortWordEndIndex(s);return this.moveCursorTo(e,t-o)},this.moveCursorWordRight=function(){this.session.$selectLongWords?this.moveCursorLongWordRight():this.moveCursorShortWordRight()},this.moveCursorWordLeft=function(){this.session.$selectLongWords?this.moveCursorLongWordLeft():this.moveCursorShortWordLeft()},this.moveCursorBy=function(e,t){var n=this.session.documentToScreenPosition(this.lead.row,this.lead.column),r;t===0&&(e!==0&&(this.session.$bidiHandler.isBidiRow(n.row,this.lead.row)?(r=this.session.$bidiHandler.getPosLeft(n.column),n.column=Math.round(r/this.session.$bidiHandler.charWidths[0])):r=n.column*this.session.$bidiHandler.charWidths[0]),this.$desiredColumn?n.column=this.$desiredColumn:this.$desiredColumn=n.column);if(e!=0&&this.session.lineWidgets&&this.session.lineWidgets[this.lead.row]){var i=this.session.lineWidgets[this.lead.row];e<0?e-=i.rowsAbove||0:e>0&&(e+=i.rowCount-(i.rowsAbove||0))}var s=this.session.screenToDocumentPosition(n.row+e,n.column,r);e!==0&&t===0&&s.row===this.lead.row&&s.column===this.lead.column,this.moveCursorTo(s.row,s.column+t,t===0)},this.moveCursorToPosition=function(e){this.moveCursorTo(e.row,e.column)},this.moveCursorTo=function(e,t,n){var r=this.session.getFoldAt(e,t,1);r&&(e=r.start.row,t=r.start.column),this.$keepDesiredColumnOnChange=!0;var i=this.session.getLine(e);/[\uDC00-\uDFFF]/.test(i.charAt(t))&&i.charAt(t-1)&&(this.lead.row==e&&this.lead.column==t+1?t-=1:t+=1),this.lead.setPosition(e,t),this.$keepDesiredColumnOnChange=!1,n||(this.$desiredColumn=null)},this.moveCursorToScreen=function(e,t,n){var r=this.session.screenToDocumentPosition(e,t);this.moveCursorTo(r.row,r.column,n)},this.detach=function(){this.lead.detach(),this.anchor.detach(),this.session=this.doc=null},this.fromOrientedRange=function(e){this.setSelectionRange(e,e.cursor==e.start),this.$desiredColumn=e.desiredColumn||this.$desiredColumn},this.toOrientedRange=function(e){var t=this.getRange();return e?(e.start.column=t.start.column,e.start.row=t.start.row,e.end.column=t.end.column,e.end.row=t.end.row):e=t,e.cursor=this.isBackwards()?e.start:e.end,e.desiredColumn=this.$desiredColumn,e},this.getRangeOfMovements=function(e){var t=this.getCursor();try{e(this);var n=this.getCursor();return o.fromPoints(t,n)}catch(r){return o.fromPoints(t,t)}finally{this.moveCursorToPosition(t)}},this.toJSON=function(){if(this.rangeCount)var e=this.ranges.map(function(e){var t=e.clone();return t.isBackwards=e.cursor==e.start,t});else{var e=this.getRange();e.isBackwards=this.isBackwards()}return e},this.fromJSON=function(e){if(e.start==undefined){if(this.rangeList&&e.length>1){this.toSingleRange(e[0]);for(var t=e.length;t--;){var n=o.fromPoints(e[t].start,e[t].end);e[t].isBackwards&&(n.cursor=n.start),this.addRange(n,!0)}return}e=e[0]}this.rangeList&&this.toSingleRange(e),this.setSelectionRange(e,e.isBackwards)},this.isEqual=function(e){if((e.length||this.rangeCount)&&e.length!=this.rangeCount)return!1;if(!e.length||!this.ranges)return this.getRange().isEqual(e);for(var t=this.ranges.length;t--;)if(!this.ranges[t].isEqual(e[t]))return!1;return!0}}).call(u.prototype),t.Selection=u}),ace.define("ace/tokenizer",["require","exports","module","ace/config"],function(e,t,n){"use strict";var r=e("./config"),i=2e3,s=function(e){this.states=e,this.regExps={},this.matchMappings={};for(var t in this.states){var n=this.states[t],r=[],i=0,s=this.matchMappings[t]={defaultToken:"text"},o="g",u=[];for(var a=0;a<n.length;a++){var f=n[a];f.defaultToken&&(s.defaultToken=f.defaultToken),f.caseInsensitive&&(o="gi");if(f.regex==null)continue;f.regex instanceof RegExp&&(f.regex=f.regex.toString().slice(1,-1));var l=f.regex,c=(new RegExp("(?:("+l+")|(.))")).exec("a").length-2;Array.isArray(f.token)?f.token.length==1||c==1?f.token=f.token[0]:c-1!=f.token.length?(this.reportError("number of classes and regexp groups doesn't match",{rule:f,groupCount:c-1}),f.token=f.token[0]):(f.tokenArray=f.token,f.token=null,f.onMatch=this.$arrayTokens):typeof f.token=="function"&&!f.onMatch&&(c>1?f.onMatch=this.$applyToken:f.onMatch=f.token),c>1&&(/\\\d/.test(f.regex)?l=f.regex.replace(/\\([0-9]+)/g,function(e,t){return"\\"+(parseInt(t,10)+i+1)}):(c=1,l=this.removeCapturingGroups(f.regex)),!f.splitRegex&&typeof f.token!="string"&&u.push(f)),s[i]=a,i+=c,r.push(l),f.onMatch||(f.onMatch=null)}r.length||(s[0]=0,r.push("$")),u.forEach(function(e){e.splitRegex=this.createSplitterRegexp(e.regex,o)},this),this.regExps[t]=new RegExp("("+r.join(")|(")+")|($)",o)}};(function(){this.$setMaxTokenCount=function(e){i=e|0},this.$applyToken=function(e){var t=this.splitRegex.exec(e).slice(1),n=this.token.apply(this,t);if(typeof n=="string")return[{type:n,value:e}];var r=[];for(var i=0,s=n.length;i<s;i++)t[i]&&(r[r.length]={type:n[i],value:t[i]});return r},this.$arrayTokens=function(e){if(!e)return[];var t=this.splitRegex.exec(e);if(!t)return"text";var n=[],r=this.tokenArray;for(var i=0,s=r.length;i<s;i++)t[i+1]&&(n[n.length]={type:r[i],value:t[i+1]});return n},this.removeCapturingGroups=function(e){var t=e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!]|(\()/g,function(e,t){return t?"(?:":e});return t},this.createSplitterRegexp=function(e,t){if(e.indexOf("(?=")!=-1){var n=0,r=!1,i={};e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,function(e,t,s,o,u,a){return r?r=u!="]":u?r=!0:o?(n==i.stack&&(i.end=a+1,i.stack=-1),n--):s&&(n++,s.length!=1&&(i.stack=n,i.start=a)),e}),i.end!=null&&/^\)*$/.test(e.substr(i.end))&&(e=e.substring(0,i.start)+e.substr(i.end))}return e.charAt(0)!="^"&&(e="^"+e),e.charAt(e.length-1)!="$"&&(e+="$"),new RegExp(e,(t||"").replace("g",""))},this.getLineTokens=function(e,t){if(t&&typeof t!="string"){var n=t.slice(0);t=n[0],t==="#tmp"&&(n.shift(),t=n.shift())}else var n=[];var r=t||"start",s=this.states[r];s||(r="start",s=this.states[r]);var o=this.matchMappings[r],u=this.regExps[r];u.lastIndex=0;var a,f=[],l=0,c=0,h={type:null,value:""};while(a=u.exec(e)){var p=o.defaultToken,d=null,v=a[0],m=u.lastIndex;if(m-v.length>l){var g=e.substring(l,m-v.length);h.type==p?h.value+=g:(h.type&&f.push(h),h={type:p,value:g})}for(var y=0;y<a.length-2;y++){if(a[y+1]===undefined)continue;d=s[o[y]],d.onMatch?p=d.onMatch(v,r,n,e):p=d.token,d.next&&(typeof d.next=="string"?r=d.next:r=d.next(r,n),s=this.states[r],s||(this.reportError("state doesn't exist",r),r="start",s=this.states[r]),o=this.matchMappings[r],l=m,u=this.regExps[r],u.lastIndex=m),d.consumeLineEnd&&(l=m);break}if(v)if(typeof p=="string")!!d&&d.merge===!1||h.type!==p?(h.type&&f.push(h),h={type:p,value:v}):h.value+=v;else if(p){h.type&&f.push(h),h={type:null,value:""};for(var y=0;y<p.length;y++)f.push(p[y])}if(l==e.length)break;l=m;if(c++>i){c>2*e.length&&this.reportError("infinite loop with in ace tokenizer",{startState:t,line:e});while(l<e.length)h.type&&f.push(h),h={value:e.substring(l,l+=500),type:"overflow"};r="start",n=[];break}}return h.type&&f.push(h),n.length>1&&n[0]!==r&&n.unshift("#tmp",r),{tokens:f,state:n.length?n:r}},this.reportError=r.reportError}).call(s.prototype),t.Tokenizer=s}),ace.define("ace/mode/text_highlight_rules",["require","exports","module","ace/lib/lang"],function(e,t,n){"use strict";var r=e("../lib/lang"),i=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{defaultToken:"text"}]}};(function(){this.addRules=function(e,t){if(!t){for(var n in e)this.$rules[n]=e[n];return}for(var n in e){var r=e[n];for(var i=0;i<r.length;i++){var s=r[i];if(s.next||s.onMatch)typeof s.next=="string"&&s.next.indexOf(t)!==0&&(s.next=t+s.next),s.nextState&&s.nextState.indexOf(t)!==0&&(s.nextState=t+s.nextState)}this.$rules[t+n]=r}},this.getRules=function(){return this.$rules},this.embedRules=function(e,t,n,i,s){var o=typeof e=="function"?(new e).getRules():e;if(i)for(var u=0;u<i.length;u++)i[u]=t+i[u];else{i=[];for(var a in o)i.push(t+a)}this.addRules(o,t);if(n){var f=Array.prototype[s?"push":"unshift"];for(var u=0;u<i.length;u++)f.apply(this.$rules[i[u]],r.deepCopy(n))}this.$embeds||(this.$embeds=[]),this.$embeds.push(t)},this.getEmbeds=function(){return this.$embeds};var e=function(e,t){return(e!="start"||t.length)&&t.unshift(this.nextState,e),this.nextState},t=function(e,t){return t.shift(),t.shift()||"start"};this.normalizeRules=function(){function i(s){var o=r[s];o.processed=!0;for(var u=0;u<o.length;u++){var a=o[u],f=null;Array.isArray(a)&&(f=a,a={}),!a.regex&&a.start&&(a.regex=a.start,a.next||(a.next=[]),a.next.push({defaultToken:a.token},{token:a.token+".end",regex:a.end||a.start,next:"pop"}),a.token=a.token+".start",a.push=!0);var l=a.next||a.push;if(l&&Array.isArray(l)){var c=a.stateName;c||(c=a.token,typeof c!="string"&&(c=c[0]||""),r[c]&&(c+=n++)),r[c]=l,a.next=c,i(c)}else l=="pop"&&(a.next=t);a.push&&(a.nextState=a.next||a.push,a.next=e,delete a.push);if(a.rules)for(var h in a.rules)r[h]?r[h].push&&r[h].push.apply(r[h],a.rules[h]):r[h]=a.rules[h];var p=typeof a=="string"?a:a.include;p&&(Array.isArray(p)?f=p.map(function(e){return r[e]}):f=r[p]);if(f){var d=[u,1].concat(f);a.noEscape&&(d=d.filter(function(e){return!e.next})),o.splice.apply(o,d),u--}a.keywordMap&&(a.token=this.createKeywordMapper(a.keywordMap,a.defaultToken||"text",a.caseInsensitive),delete a.defaultToken)}}var n=0,r=this.$rules;Object.keys(r).forEach(i,this)},this.createKeywordMapper=function(e,t,n,r){var i=Object.create(null);return this.$keywordList=[],Object.keys(e).forEach(function(t){var s=e[t],o=s.split(r||"|");for(var u=o.length;u--;){var a=o[u];this.$keywordList.push(a),n&&(a=a.toLowerCase()),i[a]=t}},this),e=null,n?function(e){return i[e.toLowerCase()]||t}:function(e){return i[e]||t}},this.getKeywords=function(){return this.$keywords}}).call(i.prototype),t.TextHighlightRules=i}),ace.define("ace/mode/behaviour",["require","exports","module"],function(e,t,n){"use strict";var r=function(){this.$behaviours={}};(function(){this.add=function(e,t,n){switch(undefined){case this.$behaviours:this.$behaviours={};case this.$behaviours[e]:this.$behaviours[e]={}}this.$behaviours[e][t]=n},this.addBehaviours=function(e){for(var t in e)for(var n in e[t])this.add(t,n,e[t][n])},this.remove=function(e){this.$behaviours&&this.$behaviours[e]&&delete this.$behaviours[e]},this.inherit=function(e,t){if(typeof e=="function")var n=(new e).getBehaviours(t);else var n=e.getBehaviours(t);this.addBehaviours(n)},this.getBehaviours=function(e){if(!e)return this.$behaviours;var t={};for(var n=0;n<e.length;n++)this.$behaviours[e[n]]&&(t[e[n]]=this.$behaviours[e[n]]);return t}}).call(r.prototype),t.Behaviour=r}),ace.define("ace/token_iterator",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("./range").Range,i=function(e,t,n){this.$session=e,this.$row=t,this.$rowTokens=e.getTokens(t);var r=e.getTokenAt(t,n);this.$tokenIndex=r?r.index:-1};(function(){this.stepBackward=function(){this.$tokenIndex-=1;while(this.$tokenIndex<0){this.$row-=1;if(this.$row<0)return this.$row=0,null;this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=this.$rowTokens.length-1}return this.$rowTokens[this.$tokenIndex]},this.stepForward=function(){this.$tokenIndex+=1;var e;while(this.$tokenIndex>=this.$rowTokens.length){this.$row+=1,e||(e=this.$session.getLength());if(this.$row>=e)return this.$row=e-1,null;this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=0}return this.$rowTokens[this.$tokenIndex]},this.getCurrentToken=function(){return this.$rowTokens[this.$tokenIndex]},this.getCurrentTokenRow=function(){return this.$row},this.getCurrentTokenColumn=function(){var e=this.$rowTokens,t=this.$tokenIndex,n=e[t].start;if(n!==undefined)return n;n=0;while(t>0)t-=1,n+=e[t].value.length;return n},this.getCurrentTokenPosition=function(){return{row:this.$row,column:this.getCurrentTokenColumn()}},this.getCurrentTokenRange=function(){var e=this.$rowTokens[this.$tokenIndex],t=this.getCurrentTokenColumn();return new r(this.$row,t,this.$row,t+e.value.length)}}).call(i.prototype),t.TokenIterator=i}),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../behaviour").Behaviour,s=e("../../token_iterator").TokenIterator,o=e("../../lib/lang"),u=["text","paren.rparen","rparen","paren","punctuation.operator"],a=["text","paren.rparen","rparen","paren","punctuation.operator","comment"],f,l={},c={'"':'"',"'":"'"},h=function(e){var t=-1;e.multiSelect&&(t=e.selection.index,l.rangeCount!=e.multiSelect.rangeCount&&(l={rangeCount:e.multiSelect.rangeCount}));if(l[t])return f=l[t];f=l[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""}},p=function(e,t,n,r){var i=e.end.row-e.start.row;return{text:n+t+r,selection:[0,e.start.column+1,i,e.end.column+(i?0:1)]}},d=function(e){this.add("braces","insertion",function(t,n,r,i,s){var u=r.getCursorPosition(),a=i.doc.getLine(u.row);if(s=="{"){h(r);var l=r.getSelectionRange(),c=i.doc.getTextRange(l);if(c!==""&&c!=="{"&&r.getWrapBehavioursEnabled())return p(l,c,"{","}");if(d.isSaneInsertion(r,i))return/[\]\}\)]/.test(a[u.column])||r.inMultiSelectMode||e&&e.braces?(d.recordAutoInsert(r,i,"}"),{text:"{}",selection:[1,1]}):(d.recordMaybeInsert(r,i,"{"),{text:"{",selection:[1,1]})}else if(s=="}"){h(r);var v=a.substring(u.column,u.column+1);if(v=="}"){var m=i.$findOpeningBracket("}",{column:u.column+1,row:u.row});if(m!==null&&d.isAutoInsertedClosing(u,a,s))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else{if(s=="\n"||s=="\r\n"){h(r);var g="";d.isMaybeInsertedClosing(u,a)&&(g=o.stringRepeat("}",f.maybeInsertedBrackets),d.clearMaybeInsertedClosing());var v=a.substring(u.column,u.column+1);if(v==="}"){var y=i.findMatchingBracket({row:u.row,column:u.column+1},"}");if(!y)return null;var b=this.$getIndent(i.getLine(y.row))}else{if(!g){d.clearMaybeInsertedClosing();return}var b=this.$getIndent(a)}var w=b+i.getTabString();return{text:"\n"+w+"\n"+b+g,selection:[1,w.length,1,w.length]}}d.clearMaybeInsertedClosing()}}),this.add("braces","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="{"){h(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.end.column,i.end.column+1);if(u=="}")return i.end.column++,i;f.maybeInsertedBrackets--}}),this.add("parens","insertion",function(e,t,n,r,i){if(i=="("){h(n);var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==""&&n.getWrapBehavioursEnabled())return p(s,o,"(",")");if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,")"),{text:"()",selection:[1,1]}}else if(i==")"){h(n);var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f==")"){var l=r.$findOpeningBracket(")",{column:u.column+1,row:u.row});if(l!==null&&d.isAutoInsertedClosing(u,a,i))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="("){h(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==")")return i.end.column++,i}}),this.add("brackets","insertion",function(e,t,n,r,i){if(i=="["){h(n);var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==""&&n.getWrapBehavioursEnabled())return p(s,o,"[","]");if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,"]"),{text:"[]",selection:[1,1]}}else if(i=="]"){h(n);var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f=="]"){var l=r.$findOpeningBracket("]",{column:u.column+1,row:u.row});if(l!==null&&d.isAutoInsertedClosing(u,a,i))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="["){h(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u=="]")return i.end.column++,i}}),this.add("string_dquotes","insertion",function(e,t,n,r,i){var s=r.$mode.$quotes||c;if(i.length==1&&s[i]){if(this.lineCommentStart&&this.lineCommentStart.indexOf(i)!=-1)return;h(n);var o=i,u=n.getSelectionRange(),a=r.doc.getTextRange(u);if(a!==""&&(a.length!=1||!s[a])&&n.getWrapBehavioursEnabled())return p(u,a,o,o);if(!a){var f=n.getCursorPosition(),l=r.doc.getLine(f.row),d=l.substring(f.column-1,f.column),v=l.substring(f.column,f.column+1),m=r.getTokenAt(f.row,f.column),g=r.getTokenAt(f.row,f.column+1);if(d=="\\"&&m&&/escape/.test(m.type))return null;var y=m&&/string|escape/.test(m.type),b=!g||/string|escape/.test(g.type),w;if(v==o)w=y!==b,w&&/string\.end/.test(g.type)&&(w=!1);else{if(y&&!b)return null;if(y&&b)return null;var E=r.$mode.tokenRe;E.lastIndex=0;var S=E.test(d);E.lastIndex=0;var x=E.test(d);if(S||x)return null;if(v&&!/[\s;,.})\]\\]/.test(v))return null;var T=l[f.column-2];if(!(d!=o||T!=o&&!E.test(T)))return null;w=!0}return{text:w?o+o:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,r,i){var s=r.$mode.$quotes||c,o=r.doc.getTextRange(i);if(!i.isMultiLine()&&s.hasOwnProperty(o)){h(n);var u=r.doc.getLine(i.start.row),a=u.substring(i.start.column+1,i.start.column+2);if(a==o)return i.end.column++,i}})};d.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new s(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||"text",u)){if(/[)}\]]/.test(e.session.getLine(n.row)[n.column]))return!0;var i=new s(t,n.row,n.column+1);if(!this.$matchTokenType(i.getCurrentToken()||"text",u))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",a)},d.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},d.recordAutoInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isAutoInsertedClosing(r,i,f.autoInsertedLineEnd[0])||(f.autoInsertedBrackets=0),f.autoInsertedRow=r.row,f.autoInsertedLineEnd=n+i.substr(r.column),f.autoInsertedBrackets++},d.recordMaybeInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isMaybeInsertedClosing(r,i)||(f.maybeInsertedBrackets=0),f.maybeInsertedRow=r.row,f.maybeInsertedLineStart=i.substr(0,r.column)+n,f.maybeInsertedLineEnd=i.substr(r.column),f.maybeInsertedBrackets++},d.isAutoInsertedClosing=function(e,t,n){return f.autoInsertedBrackets>0&&e.row===f.autoInsertedRow&&n===f.autoInsertedLineEnd[0]&&t.substr(e.column)===f.autoInsertedLineEnd},d.isMaybeInsertedClosing=function(e,t){return f.maybeInsertedBrackets>0&&e.row===f.maybeInsertedRow&&t.substr(e.column)===f.maybeInsertedLineEnd&&t.substr(0,e.column)==f.maybeInsertedLineStart},d.popAutoInsertedClosing=function(){f.autoInsertedLineEnd=f.autoInsertedLineEnd.substr(1),f.autoInsertedBrackets--},d.clearMaybeInsertedClosing=function(){f&&(f.maybeInsertedBrackets=0,f.maybeInsertedRow=-1)},r.inherits(d,i),t.CstyleBehaviour=d}),ace.define("ace/unicode",["require","exports","module"],function(e,t,n){"use strict";var r=[48,9,8,25,5,0,2,25,48,0,11,0,5,0,6,22,2,30,2,457,5,11,15,4,8,0,2,0,18,116,2,1,3,3,9,0,2,2,2,0,2,19,2,82,2,138,2,4,3,155,12,37,3,0,8,38,10,44,2,0,2,1,2,1,2,0,9,26,6,2,30,10,7,61,2,9,5,101,2,7,3,9,2,18,3,0,17,58,3,100,15,53,5,0,6,45,211,57,3,18,2,5,3,11,3,9,2,1,7,6,2,2,2,7,3,1,3,21,2,6,2,0,4,3,3,8,3,1,3,3,9,0,5,1,2,4,3,11,16,2,2,5,5,1,3,21,2,6,2,1,2,1,2,1,3,0,2,4,5,1,3,2,4,0,8,3,2,0,8,15,12,2,2,8,2,2,2,21,2,6,2,1,2,4,3,9,2,2,2,2,3,0,16,3,3,9,18,2,2,7,3,1,3,21,2,6,2,1,2,4,3,8,3,1,3,2,9,1,5,1,2,4,3,9,2,0,17,1,2,5,4,2,2,3,4,1,2,0,2,1,4,1,4,2,4,11,5,4,4,2,2,3,3,0,7,0,15,9,18,2,2,7,2,2,2,22,2,9,2,4,4,7,2,2,2,3,8,1,2,1,7,3,3,9,19,1,2,7,2,2,2,22,2,9,2,4,3,8,2,2,2,3,8,1,8,0,2,3,3,9,19,1,2,7,2,2,2,22,2,15,4,7,2,2,2,3,10,0,9,3,3,9,11,5,3,1,2,17,4,23,2,8,2,0,3,6,4,0,5,5,2,0,2,7,19,1,14,57,6,14,2,9,40,1,2,0,3,1,2,0,3,0,7,3,2,6,2,2,2,0,2,0,3,1,2,12,2,2,3,4,2,0,2,5,3,9,3,1,35,0,24,1,7,9,12,0,2,0,2,0,5,9,2,35,5,19,2,5,5,7,2,35,10,0,58,73,7,77,3,37,11,42,2,0,4,328,2,3,3,6,2,0,2,3,3,40,2,3,3,32,2,3,3,6,2,0,2,3,3,14,2,56,2,3,3,66,5,0,33,15,17,84,13,619,3,16,2,25,6,74,22,12,2,6,12,20,12,19,13,12,2,2,2,1,13,51,3,29,4,0,5,1,3,9,34,2,3,9,7,87,9,42,6,69,11,28,4,11,5,11,11,39,3,4,12,43,5,25,7,10,38,27,5,62,2,28,3,10,7,9,14,0,89,75,5,9,18,8,13,42,4,11,71,55,9,9,4,48,83,2,2,30,14,230,23,280,3,5,3,37,3,5,3,7,2,0,2,0,2,0,2,30,3,52,2,6,2,0,4,2,2,6,4,3,3,5,5,12,6,2,2,6,67,1,20,0,29,0,14,0,17,4,60,12,5,0,4,11,18,0,5,0,3,9,2,0,4,4,7,0,2,0,2,0,2,3,2,10,3,3,6,4,5,0,53,1,2684,46,2,46,2,132,7,6,15,37,11,53,10,0,17,22,10,6,2,6,2,6,2,6,2,6,2,6,2,6,2,6,2,31,48,0,470,1,36,5,2,4,6,1,5,85,3,1,3,2,2,89,2,3,6,40,4,93,18,23,57,15,513,6581,75,20939,53,1164,68,45,3,268,4,27,21,31,3,13,13,1,2,24,9,69,11,1,38,8,3,102,3,1,111,44,25,51,13,68,12,9,7,23,4,0,5,45,3,35,13,28,4,64,15,10,39,54,10,13,3,9,7,22,4,1,5,66,25,2,227,42,2,1,3,9,7,11171,13,22,5,48,8453,301,3,61,3,105,39,6,13,4,6,11,2,12,2,4,2,0,2,1,2,1,2,107,34,362,19,63,3,53,41,11,5,15,17,6,13,1,25,2,33,4,2,134,20,9,8,25,5,0,2,25,12,88,4,5,3,5,3,5,3,2],i=0,s=[];for(var o=0;o<r.length;o+=2)s.push(i+=r[o]),r[o+1]&&s.push(45,i+=r[o+1]);t.wordChars=String.fromCharCode.apply(null,s)}),ace.define("ace/mode/text",["require","exports","module","ace/config","ace/tokenizer","ace/mode/text_highlight_rules","ace/mode/behaviour/cstyle","ace/unicode","ace/lib/lang","ace/token_iterator","ace/range"],function(e,t,n){"use strict";var r=e("../config"),i=e("../tokenizer").Tokenizer,s=e("./text_highlight_rules").TextHighlightRules,o=e("./behaviour/cstyle").CstyleBehaviour,u=e("../unicode"),a=e("../lib/lang"),f=e("../token_iterator").TokenIterator,l=e("../range").Range,c=function(){this.HighlightRules=s};(function(){this.$defaultBehaviour=new o,this.tokenRe=new RegExp("^["+u.wordChars+"\\$_]+","g"),this.nonTokenRe=new RegExp("^(?:[^"+u.wordChars+"\\$_]|\\s])+","g"),this.getTokenizer=function(){return this.$tokenizer||(this.$highlightRules=this.$highlightRules||new this.HighlightRules(this.$highlightRuleConfig),this.$tokenizer=new i(this.$highlightRules.getRules())),this.$tokenizer},this.lineCommentStart="",this.blockComment="",this.toggleCommentLines=function(e,t,n,r){function w(e){for(var t=n;t<=r;t++)e(i.getLine(t),t)}var i=t.doc,s=!0,o=!0,u=Infinity,f=t.getTabSize(),l=!1;if(!this.lineCommentStart){if(!this.blockComment)return!1;var c=this.blockComment.start,h=this.blockComment.end,p=new RegExp("^(\\s*)(?:"+a.escapeRegExp(c)+")"),d=new RegExp("(?:"+a.escapeRegExp(h)+")\\s*$"),v=function(e,t){if(g(e,t))return;if(!s||/\S/.test(e))i.insertInLine({row:t,column:e.length},h),i.insertInLine({row:t,column:u},c)},m=function(e,t){var n;(n=e.match(d))&&i.removeInLine(t,e.length-n[0].length,e.length),(n=e.match(p))&&i.removeInLine(t,n[1].length,n[0].length)},g=function(e,n){if(p.test(e))return!0;var r=t.getTokens(n);for(var i=0;i<r.length;i++)if(r[i].type==="comment")return!0}}else{if(Array.isArray(this.lineCommentStart))var p=this.lineCommentStart.map(a.escapeRegExp).join("|"),c=this.lineCommentStart[0];else var p=a.escapeRegExp(this.lineCommentStart),c=this.lineCommentStart;p=new RegExp("^(\\s*)(?:"+p+") ?"),l=t.getUseSoftTabs();var m=function(e,t){var n=e.match(p);if(!n)return;var r=n[1].length,s=n[0].length;!b(e,r,s)&&n[0][s-1]==" "&&s--,i.removeInLine(t,r,s)},y=c+" ",v=function(e,t){if(!s||/\S/.test(e))b(e,u,u)?i.insertInLine({row:t,column:u},y):i.insertInLine({row:t,column:u},c)},g=function(e,t){return p.test(e)},b=function(e,t,n){var r=0;while(t--&&e.charAt(t)==" ")r++;if(r%f!=0)return!1;var r=0;while(e.charAt(n++)==" ")r++;return f>2?r%f!=f-1:r%f==0}}var E=Infinity;w(function(e,t){var n=e.search(/\S/);n!==-1?(n<u&&(u=n),o&&!g(e,t)&&(o=!1)):E>e.length&&(E=e.length)}),u==Infinity&&(u=E,s=!1,o=!1),l&&u%f!=0&&(u=Math.floor(u/f)*f),w(o?m:v)},this.toggleBlockComment=function(e,t,n,r){var i=this.blockComment;if(!i)return;!i.start&&i[0]&&(i=i[0]);var s=new f(t,r.row,r.column),o=s.getCurrentToken(),u=t.selection,a=t.selection.toOrientedRange(),c,h;if(o&&/comment/.test(o.type)){var p,d;while(o&&/comment/.test(o.type)){var v=o.value.indexOf(i.start);if(v!=-1){var m=s.getCurrentTokenRow(),g=s.getCurrentTokenColumn()+v;p=new l(m,g,m,g+i.start.length);break}o=s.stepBackward()}var s=new f(t,r.row,r.column),o=s.getCurrentToken();while(o&&/comment/.test(o.type)){var v=o.value.indexOf(i.end);if(v!=-1){var m=s.getCurrentTokenRow(),g=s.getCurrentTokenColumn()+v;d=new l(m,g,m,g+i.end.length);break}o=s.stepForward()}d&&t.remove(d),p&&(t.remove(p),c=p.start.row,h=-i.start.length)}else h=i.start.length,c=n.start.row,t.insert(n.end,i.end),t.insert(n.start,i.start);a.start.row==c&&(a.start.column+=h),a.end.row==c&&(a.end.column+=h),t.selection.fromOrientedRange(a)},this.getNextLineIndent=function(e,t,n){return this.$getIndent(t)},this.checkOutdent=function(e,t,n){return!1},this.autoOutdent=function(e,t,n){},this.$getIndent=function(e){return e.match(/^\s*/)[0]},this.createWorker=function(e){return null},this.createModeDelegates=function(e){this.$embeds=[],this.$modes={};for(var t in e)if(e[t]){var n=e[t],i=n.prototype.$id,s=r.$modes[i];s||(r.$modes[i]=s=new n),r.$modes[t]||(r.$modes[t]=s),this.$embeds.push(t),this.$modes[t]=s}var o=["toggleBlockComment","toggleCommentLines","getNextLineIndent","checkOutdent","autoOutdent","transformAction","getCompletions"];for(var t=0;t<o.length;t++)(function(e){var n=o[t],r=e[n];e[o[t]]=function(){return this.$delegator(n,arguments,r)}})(this)},this.$delegator=function(e,t,n){var r=t[0]||"start";if(typeof r!="string"){if(Array.isArray(r[2])){var i=r[2][r[2].length-1],s=this.$modes[i];if(s)return s[e].apply(s,[r[1]].concat([].slice.call(t,1)))}r=r[0]||"start"}for(var o=0;o<this.$embeds.length;o++){if(!this.$modes[this.$embeds[o]])continue;var u=r.split(this.$embeds[o]);if(!u[0]&&u[1]){t[0]=u[1];var s=this.$modes[this.$embeds[o]];return s[e].apply(s,t)}}var a=n.apply(this,t);return n?a:undefined},this.transformAction=function(e,t,n,r,i){if(this.$behaviour){var s=this.$behaviour.getBehaviours();for(var o in s)if(s[o][t]){var u=s[o][t].apply(this,arguments);if(u)return u}}},this.getKeywords=function(e){if(!this.completionKeywords){var t=this.$tokenizer.rules,n=[];for(var r in t){var i=t[r];for(var s=0,o=i.length;s<o;s++)if(typeof i[s].token=="string")/keyword|support|storage/.test(i[s].token)&&n.push(i[s].regex);else if(typeof i[s].token=="object")for(var u=0,a=i[s].token.length;u<a;u++)if(/keyword|support|storage/.test(i[s].token[u])){var r=i[s].regex.match(/\(.+?\)/g)[u];n.push(r.substr(1,r.length-2))}}this.completionKeywords=n}return e?n.concat(this.$keywordList||[]):this.$keywordList},this.$createKeywordList=function(){return this.$highlightRules||this.getTokenizer(),this.$keywordList=this.$highlightRules.$keywordList||[]},this.getCompletions=function(e,t,n,r){var i=this.$keywordList||this.$createKeywordList();return i.map(function(e){return{name:e,value:e,score:0,meta:"keyword"}})},this.$id="ace/mode/text"}).call(c.prototype),t.Mode=c}),ace.define("ace/apply_delta",["require","exports","module"],function(e,t,n){"use strict";function r(e,t){throw console.log("Invalid Delta:",e),"Invalid Delta: "+t}function i(e,t){return t.row>=0&&t.row<e.length&&t.column>=0&&t.column<=e[t.row].length}function s(e,t){t.action!="insert"&&t.action!="remove"&&r(t,"delta.action must be 'insert' or 'remove'"),t.lines instanceof Array||r(t,"delta.lines must be an Array"),(!t.start||!t.end)&&r(t,"delta.start/end must be an present");var n=t.start;i(e,t.start)||r(t,"delta.start must be contained in document");var s=t.end;t.action=="remove"&&!i(e,s)&&r(t,"delta.end must contained in document for 'remove' actions");var o=s.row-n.row,u=s.column-(o==0?n.column:0);(o!=t.lines.length-1||t.lines[o].length!=u)&&r(t,"delta.range must match delta lines")}t.applyDelta=function(e,t,n){var r=t.start.row,i=t.start.column,s=e[r]||"";switch(t.action){case"insert":var o=t.lines;if(o.length===1)e[r]=s.substring(0,i)+t.lines[0]+s.substring(i);else{var u=[r,1].concat(t.lines);e.splice.apply(e,u),e[r]=s.substring(0,i)+e[r],e[r+t.lines.length-1]+=s.substring(i)}break;case"remove":var a=t.end.column,f=t.end.row;r===f?e[r]=s.substring(0,i)+s.substring(a):e.splice(r,f-r+1,s.substring(0,i)+e[f].substring(a))}}}),ace.define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,s=t.Anchor=function(e,t,n){this.$onChange=this.onChange.bind(this),this.attach(e),typeof n=="undefined"?this.setPosition(t.row,t.column):this.setPosition(t,n)};(function(){function e(e,t,n){var r=n?e.column<=t.column:e.column<t.column;return e.row<t.row||e.row==t.row&&r}function t(t,n,r){var i=t.action=="insert",s=(i?1:-1)*(t.end.row-t.start.row),o=(i?1:-1)*(t.end.column-t.start.column),u=t.start,a=i?u:t.end;return e(n,u,r)?{row:n.row,column:n.column}:e(a,n,!r)?{row:n.row+s,column:n.column+(n.row==a.row?o:0)}:{row:u.row,column:u.column}}r.implement(this,i),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(e){if(e.start.row==e.end.row&&e.start.row!=this.row)return;if(e.start.row>this.row)return;var n=t(e,{row:this.row,column:this.column},this.$insertRight);this.setPosition(n.row,n.column,!0)},this.setPosition=function(e,t,n){var r;n?r={row:e,column:t}:r=this.$clipPositionToDocument(e,t);if(this.row==r.row&&this.column==r.column)return;var i={row:this.row,column:this.column};this.row=r.row,this.column=r.column,this._signal("change",{old:i,value:r})},this.detach=function(){this.document.off("change",this.$onChange)},this.attach=function(e){this.document=e||this.document,this.document.on("change",this.$onChange)},this.$clipPositionToDocument=function(e,t){var n={};return e>=this.document.getLength()?(n.row=Math.max(0,this.document.getLength()-1),n.column=this.document.getLine(n.row).length):e<0?(n.row=0,n.column=0):(n.row=e,n.column=Math.min(this.document.getLine(n.row).length,Math.max(0,t))),t<0&&(n.column=0),n}}).call(s.prototype)}),ace.define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./apply_delta").applyDelta,s=e("./lib/event_emitter").EventEmitter,o=e("./range").Range,u=e("./anchor").Anchor,a=function(e){this.$lines=[""],e.length===0?this.$lines=[""]:Array.isArray(e)?this.insertMergedLines({row:0,column:0},e):this.insert({row:0,column:0},e)};(function(){r.implement(this,s),this.setValue=function(e){var t=this.getLength()-1;this.remove(new o(0,0,t,this.getLine(t).length)),this.insert({row:0,column:0},e)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(e,t){return new u(this,e,t)},"aaa".split(/a/).length===0?this.$split=function(e){return e.replace(/\r\n|\r/g,"\n").split("\n")}:this.$split=function(e){return e.split(/\r\n|\r|\n/)},this.$detectNewLine=function(e){var t=e.match(/^.*?(\r\n|\r|\n)/m);this.$autoNewLine=t?t[1]:"\n",this._signal("changeNewLineMode")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\r\n";case"unix":return"\n";default:return this.$autoNewLine||"\n"}},this.$autoNewLine="",this.$newLineMode="auto",this.setNewLineMode=function(e){if(this.$newLineMode===e)return;this.$newLineMode=e,this._signal("changeNewLineMode")},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(e){return e=="\r\n"||e=="\r"||e=="\n"},this.getLine=function(e){return this.$lines[e]||""},this.getLines=function(e,t){return this.$lines.slice(e,t+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(e){return this.getLinesForRange(e).join(this.getNewLineCharacter())},this.getLinesForRange=function(e){var t;if(e.start.row===e.end.row)t=[this.getLine(e.start.row).substring(e.start.column,e.end.column)];else{t=this.getLines(e.start.row,e.end.row),t[0]=(t[0]||"").substring(e.start.column);var n=t.length-1;e.end.row-e.start.row==n&&(t[n]=t[n].substring(0,e.end.column))}return t},this.insertLines=function(e,t){return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."),this.insertFullLines(e,t)},this.removeLines=function(e,t){return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."),this.removeFullLines(e,t)},this.insertNewLine=function(e){return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."),this.insertMergedLines(e,["",""])},this.insert=function(e,t){return this.getLength()<=1&&this.$detectNewLine(t),this.insertMergedLines(e,this.$split(t))},this.insertInLine=function(e,t){var n=this.clippedPos(e.row,e.column),r=this.pos(e.row,e.column+t.length);return this.applyDelta({start:n,end:r,action:"insert",lines:[t]},!0),this.clonePos(r)},this.clippedPos=function(e,t){var n=this.getLength();e===undefined?e=n:e<0?e=0:e>=n&&(e=n-1,t=undefined);var r=this.getLine(e);return t==undefined&&(t=r.length),t=Math.min(Math.max(t,0),r.length),{row:e,column:t}},this.clonePos=function(e){return{row:e.row,column:e.column}},this.pos=function(e,t){return{row:e,column:t}},this.$clipPosition=function(e){var t=this.getLength();return e.row>=t?(e.row=Math.max(0,t-1),e.column=this.getLine(t-1).length):(e.row=Math.max(0,e.row),e.column=Math.min(Math.max(e.column,0),this.getLine(e.row).length)),e},this.insertFullLines=function(e,t){e=Math.min(Math.max(e,0),this.getLength());var n=0;e<this.getLength()?(t=t.concat([""]),n=0):(t=[""].concat(t),e--,n=this.$lines[e].length),this.insertMergedLines({row:e,column:n},t)},this.insertMergedLines=function(e,t){var n=this.clippedPos(e.row,e.column),r={row:n.row+t.length-1,column:(t.length==1?n.column:0)+t[t.length-1].length};return this.applyDelta({start:n,end:r,action:"insert",lines:t}),this.clonePos(r)},this.remove=function(e){var t=this.clippedPos(e.start.row,e.start.column),n=this.clippedPos(e.end.row,e.end.column);return this.applyDelta({start:t,end:n,action:"remove",lines:this.getLinesForRange({start:t,end:n})}),this.clonePos(t)},this.removeInLine=function(e,t,n){var r=this.clippedPos(e,t),i=this.clippedPos(e,n);return this.applyDelta({start:r,end:i,action:"remove",lines:this.getLinesForRange({start:r,end:i})},!0),this.clonePos(r)},this.removeFullLines=function(e,t){e=Math.min(Math.max(0,e),this.getLength()-1),t=Math.min(Math.max(0,t),this.getLength()-1);var n=t==this.getLength()-1&&e>0,r=t<this.getLength()-1,i=n?e-1:e,s=n?this.getLine(i).length:0,u=r?t+1:t,a=r?0:this.getLine(u).length,f=new o(i,s,u,a),l=this.$lines.slice(e,t+1);return this.applyDelta({start:f.start,end:f.end,action:"remove",lines:this.getLinesForRange(f)}),l},this.removeNewLine=function(e){e<this.getLength()-1&&e>=0&&this.applyDelta({start:this.pos(e,this.getLine(e).length),end:this.pos(e+1,0),action:"remove",lines:["",""]})},this.replace=function(e,t){e instanceof o||(e=o.fromPoints(e.start,e.end));if(t.length===0&&e.isEmpty())return e.start;if(t==this.getTextRange(e))return e.end;this.remove(e);var n;return t?n=this.insert(e.start,t):n=e.start,n},this.applyDeltas=function(e){for(var t=0;t<e.length;t++)this.applyDelta(e[t])},this.revertDeltas=function(e){for(var t=e.length-1;t>=0;t--)this.revertDelta(e[t])},this.applyDelta=function(e,t){var n=e.action=="insert";if(n?e.lines.length<=1&&!e.lines[0]:!o.comparePoints(e.start,e.end))return;n&&e.lines.length>2e4?this.$splitAndapplyLargeDelta(e,2e4):(i(this.$lines,e,t),this._signal("change",e))},this.$safeApplyDelta=function(e){var t=this.$lines.length;(e.action=="remove"&&e.start.row<t&&e.end.row<t||e.action=="insert"&&e.start.row<=t)&&this.applyDelta(e)},this.$splitAndapplyLargeDelta=function(e,t){var n=e.lines,r=n.length-t+1,i=e.start.row,s=e.start.column;for(var o=0,u=0;o<r;o=u){u+=t-1;var a=n.slice(o,u);a.push(""),this.applyDelta({start:this.pos(i+o,s),end:this.pos(i+u,s=0),action:e.action,lines:a},!0)}e.lines=n.slice(o),e.start.row=i+o,e.start.column=s,this.applyDelta(e,!0)},this.revertDelta=function(e){this.$safeApplyDelta({start:this.clonePos(e.start),end:this.clonePos(e.end),action:e.action=="insert"?"remove":"insert",lines:e.lines.slice()})},this.indexToPosition=function(e,t){var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length;for(var i=t||0,s=n.length;i<s;i++){e-=n[i].length+r;if(e<0)return{row:i,column:e+n[i].length+r}}return{row:s-1,column:e+n[s-1].length+r}},this.positionToIndex=function(e,t){var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length,i=0,s=Math.min(e.row,n.length);for(var o=t||0;o<s;++o)i+=n[o].length+r;return i+e.column}}).call(a.prototype),t.Document=a}),ace.define("ace/background_tokenizer",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,s=function(e,t){this.running=!1,this.lines=[],this.states=[],this.currentLine=0,this.tokenizer=e;var n=this;this.$worker=function(){if(!n.running)return;var e=new Date,t=n.currentLine,r=-1,i=n.doc,s=t;while(n.lines[t])t++;var o=i.getLength(),u=0;n.running=!1;while(t<o){n.$tokenizeRow(t),r=t;do t++;while(n.lines[t]);u++;if(u%5===0&&new Date-e>20){n.running=setTimeout(n.$worker,20);break}}n.currentLine=t,r==-1&&(r=t),s<=r&&n.fireUpdateEvent(s,r)}};(function(){r.implement(this,i),this.setTokenizer=function(e){this.tokenizer=e,this.lines=[],this.states=[],this.start(0)},this.setDocument=function(e){this.doc=e,this.lines=[],this.states=[],this.stop()},this.fireUpdateEvent=function(e,t){var n={first:e,last:t};this._signal("update",{data:n})},this.start=function(e){this.currentLine=Math.min(e||0,this.currentLine,this.doc.getLength()),this.lines.splice(this.currentLine,this.lines.length),this.states.splice(this.currentLine,this.states.length),this.stop(),this.running=setTimeout(this.$worker,700)},this.scheduleStart=function(){this.running||(this.running=setTimeout(this.$worker,700))},this.$updateOnChange=function(e){var t=e.start.row,n=e.end.row-t;if(n===0)this.lines[t]=null;else if(e.action=="remove")this.lines.splice(t,n+1,null),this.states.splice(t,n+1,null);else{var r=Array(n+1);r.unshift(t,1),this.lines.splice.apply(this.lines,r),this.states.splice.apply(this.states,r)}this.currentLine=Math.min(t,this.currentLine,this.doc.getLength()),this.stop()},this.stop=function(){this.running&&clearTimeout(this.running),this.running=!1},this.getTokens=function(e){return this.lines[e]||this.$tokenizeRow(e)},this.getState=function(e){return this.currentLine==e&&this.$tokenizeRow(e),this.states[e]||"start"},this.$tokenizeRow=function(e){var t=this.doc.getLine(e),n=this.states[e-1],r=this.tokenizer.getLineTokens(t,n,e);return this.states[e]+""!=r.state+""?(this.states[e]=r.state,this.lines[e+1]=null,this.currentLine>e+1&&(this.currentLine=e+1)):this.currentLine==e&&(this.currentLine=e+1),this.lines[e]=r.tokens}}).call(s.prototype),t.BackgroundTokenizer=s}),ace.define("ace/search_highlight",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(e,t,n){"use strict";var r=e("./lib/lang"),i=e("./lib/oop"),s=e("./range").Range,o=function(e,t,n){this.setRegexp(e),this.clazz=t,this.type=n||"text"};(function(){this.MAX_RANGES=500,this.setRegexp=function(e){if(this.regExp+""==e+"")return;this.regExp=e,this.cache=[]},this.update=function(e,t,n,i){if(!this.regExp)return;var o=i.firstRow,u=i.lastRow;for(var a=o;a<=u;a++){var f=this.cache[a];f==null&&(f=r.getMatchOffsets(n.getLine(a),this.regExp),f.length>this.MAX_RANGES&&(f=f.slice(0,this.MAX_RANGES)),f=f.map(function(e){return new s(a,e.offset,a,e.offset+e.length)}),this.cache[a]=f.length?f:"");for(var l=f.length;l--;)t.drawSingleLineMarker(e,f[l].toScreenRange(n),this.clazz,i)}}}).call(o.prototype),t.SearchHighlight=o}),ace.define("ace/edit_session/fold_line",["require","exports","module","ace/range"],function(e,t,n){"use strict";function i(e,t){this.foldData=e,Array.isArray(t)?this.folds=t:t=this.folds=[t];var n=t[t.length-1];this.range=new r(t[0].start.row,t[0].start.column,n.end.row,n.end.column),this.start=this.range.start,this.end=this.range.end,this.folds.forEach(function(e){e.setFoldLine(this)},this)}var r=e("../range").Range;(function(){this.shiftRow=function(e){this.start.row+=e,this.end.row+=e,this.folds.forEach(function(t){t.start.row+=e,t.end.row+=e})},this.addFold=function(e){if(e.sameRow){if(e.start.row<this.startRow||e.endRow>this.endRow)throw new Error("Can't add a fold to this FoldLine as it has no connection");this.folds.push(e),this.folds.sort(function(e,t){return-e.range.compareEnd(t.start.row,t.start.column)}),this.range.compareEnd(e.start.row,e.start.column)>0?(this.end.row=e.end.row,this.end.column=e.end.column):this.range.compareStart(e.end.row,e.end.column)<0&&(this.start.row=e.start.row,this.start.column=e.start.column)}else if(e.start.row==this.end.row)this.folds.push(e),this.end.row=e.end.row,this.end.column=e.end.column;else{if(e.end.row!=this.start.row)throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");this.folds.unshift(e),this.start.row=e.start.row,this.start.column=e.start.column}e.foldLine=this},this.containsRow=function(e){return e>=this.start.row&&e<=this.end.row},this.walk=function(e,t,n){var r=0,i=this.folds,s,o,u,a=!0;t==null&&(t=this.end.row,n=this.end.column);for(var f=0;f<i.length;f++){s=i[f],o=s.range.compareStart(t,n);if(o==-1){e(null,t,n,r,a);return}u=e(null,s.start.row,s.start.column,r,a),u=!u&&e(s.placeholder,s.start.row,s.start.column,r);if(u||o===0)return;a=!s.sameRow,r=s.end.column}e(null,t,n,r,a)},this.getNextFoldTo=function(e,t){var n,r;for(var i=0;i<this.folds.length;i++){n=this.folds[i],r=n.range.compareEnd(e,t);if(r==-1)return{fold:n,kind:"after"};if(r===0)return{fold:n,kind:"inside"}}return null},this.addRemoveChars=function(e,t,n){var r=this.getNextFoldTo(e,t),i,s;if(r){i=r.fold;if(r.kind=="inside"&&i.start.column!=t&&i.start.row!=e)window.console&&window.console.log(e,t,i);else if(i.start.row==e){s=this.folds;var o=s.indexOf(i);o===0&&(this.start.column+=n);for(o;o<s.length;o++){i=s[o],i.start.column+=n;if(!i.sameRow)return;i.end.column+=n}this.end.column+=n}}},this.split=function(e,t){var n=this.getNextFoldTo(e,t);if(!n||n.kind=="inside")return null;var r=n.fold,s=this.folds,o=this.foldData,u=s.indexOf(r),a=s[u-1];this.end.row=a.end.row,this.end.column=a.end.column,s=s.splice(u,s.length-u);var f=new i(o,s);return o.splice(o.indexOf(this)+1,0,f),f},this.merge=function(e){var t=e.folds;for(var n=0;n<t.length;n++)this.addFold(t[n]);var r=this.foldData;r.splice(r.indexOf(e),1)},this.toString=function(){var e=[this.range.toString()+": ["];return this.folds.forEach(function(t){e.push("  "+t.toString())}),e.push("]"),e.join("\n")},this.idxToPosition=function(e){var t=0;for(var n=0;n<this.folds.length;n++){var r=this.folds[n];e-=r.start.column-t;if(e<0)return{row:r.start.row,column:r.start.column+e};e-=r.placeholder.length;if(e<0)return r.start;t=r.end.column}return{row:this.end.row,column:this.end.column+e}}}).call(i.prototype),t.FoldLine=i}),ace.define("ace/range_list",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("./range").Range,i=r.comparePoints,s=function(){this.ranges=[],this.$bias=1};(function(){this.comparePoints=i,this.pointIndex=function(e,t,n){var r=this.ranges;for(var s=n||0;s<r.length;s++){var o=r[s],u=i(e,o.end);if(u>0)continue;var a=i(e,o.start);return u===0?t&&a!==0?-s-2:s:a>0||a===0&&!t?s:-s-1}return-s-1},this.add=function(e){var t=!e.isEmpty(),n=this.pointIndex(e.start,t);n<0&&(n=-n-1);var r=this.pointIndex(e.end,t,n);return r<0?r=-r-1:r++,this.ranges.splice(n,r-n,e)},this.addList=function(e){var t=[];for(var n=e.length;n--;)t.push.apply(t,this.add(e[n]));return t},this.substractPoint=function(e){var t=this.pointIndex(e);if(t>=0)return this.ranges.splice(t,1)},this.merge=function(){var e=[],t=this.ranges;t=t.sort(function(e,t){return i(e.start,t.start)});var n=t[0],r;for(var s=1;s<t.length;s++){r=n,n=t[s];var o=i(r.end,n.start);if(o<0)continue;if(o==0&&!r.isEmpty()&&!n.isEmpty())continue;i(r.end,n.end)<0&&(r.end.row=n.end.row,r.end.column=n.end.column),t.splice(s,1),e.push(n),n=r,s--}return this.ranges=t,e},this.contains=function(e,t){return this.pointIndex({row:e,column:t})>=0},this.containsPoint=function(e){return this.pointIndex(e)>=0},this.rangeAtPoint=function(e){var t=this.pointIndex(e);if(t>=0)return this.ranges[t]},this.clipRows=function(e,t){var n=this.ranges;if(n[0].start.row>t||n[n.length-1].start.row<e)return[];var r=this.pointIndex({row:e,column:0});r<0&&(r=-r-1);var i=this.pointIndex({row:t,column:0},r);i<0&&(i=-i-1);var s=[];for(var o=r;o<i;o++)s.push(n[o]);return s},this.removeAll=function(){return this.ranges.splice(0,this.ranges.length)},this.attach=function(e){this.session&&this.detach(),this.session=e,this.onChange=this.$onChange.bind(this),this.session.on("change",this.onChange)},this.detach=function(){if(!this.session)return;this.session.removeListener("change",this.onChange),this.session=null},this.$onChange=function(e){var t=e.start,n=e.end,r=t.row,i=n.row,s=this.ranges;for(var o=0,u=s.length;o<u;o++){var a=s[o];if(a.end.row>=r)break}if(e.action=="insert"){var f=i-r,l=-t.column+n.column;for(;o<u;o++){var a=s[o];if(a.start.row>r)break;a.start.row==r&&a.start.column>=t.column&&(a.start.column==t.column&&this.$bias<=0||(a.start.column+=l,a.start.row+=f));if(a.end.row==r&&a.end.column>=t.column){if(a.end.column==t.column&&this.$bias<0)continue;a.end.column==t.column&&l>0&&o<u-1&&a.end.column>a.start.column&&a.end.column==s[o+1].start.column&&(a.end.column-=l),a.end.column+=l,a.end.row+=f}}}else{var f=r-i,l=t.column-n.column;for(;o<u;o++){var a=s[o];if(a.start.row>i)break;if(a.end.row<i&&(r<a.end.row||r==a.end.row&&t.column<a.end.column))a.end.row=r,a.end.column=t.column;else if(a.end.row==i)if(a.end.column<=n.column){if(f||a.end.column>t.column)a.end.column=t.column,a.end.row=t.row}else a.end.column+=l,a.end.row+=f;else a.end.row>i&&(a.end.row+=f);if(a.start.row<i&&(r<a.start.row||r==a.start.row&&t.column<a.start.column))a.start.row=r,a.start.column=t.column;else if(a.start.row==i)if(a.start.column<=n.column){if(f||a.start.column>t.column)a.start.column=t.column,a.start.row=t.row}else a.start.column+=l,a.start.row+=f;else a.start.row>i&&(a.start.row+=f)}}if(f!=0&&o<u)for(;o<u;o++){var a=s[o];a.start.row+=f,a.end.row+=f}}}).call(s.prototype),t.RangeList=s}),ace.define("ace/edit_session/fold",["require","exports","module","ace/range_list","ace/lib/oop"],function(e,t,n){"use strict";function o(e,t){e.row-=t.row,e.row==0&&(e.column-=t.column)}function u(e,t){o(e.start,t),o(e.end,t)}function a(e,t){e.row==0&&(e.column+=t.column),e.row+=t.row}function f(e,t){a(e.start,t),a(e.end,t)}var r=e("../range_list").RangeList,i=e("../lib/oop"),s=t.Fold=function(e,t){this.foldLine=null,this.placeholder=t,this.range=e,this.start=e.start,this.end=e.end,this.sameRow=e.start.row==e.end.row,this.subFolds=this.ranges=[]};i.inherits(s,r),function(){this.toString=function(){return'"'+this.placeholder+'" '+this.range.toString()},this.setFoldLine=function(e){this.foldLine=e,this.subFolds.forEach(function(t){t.setFoldLine(e)})},this.clone=function(){var e=this.range.clone(),t=new s(e,this.placeholder);return this.subFolds.forEach(function(e){t.subFolds.push(e.clone())}),t.collapseChildren=this.collapseChildren,t},this.addSubFold=function(e){if(this.range.isEqual(e))return;u(e,this.start);var t=e.start.row,n=e.start.column;for(var r=0,i=-1;r<this.subFolds.length;r++){i=this.subFolds[r].range.compare(t,n);if(i!=1)break}var s=this.subFolds[r],o=0;if(i==0){if(s.range.containsRange(e))return s.addSubFold(e);o=1}var t=e.range.end.row,n=e.range.end.column;for(var a=r,i=-1;a<this.subFolds.length;a++){i=this.subFolds[a].range.compare(t,n);if(i!=1)break}i==0&&a++;var f=this.subFolds.splice(r,a-r,e),l=i==0?f.length-1:f.length;for(var c=o;c<l;c++)e.addSubFold(f[c]);return e.setFoldLine(this.foldLine),e},this.restoreRange=function(e){return f(e,this.start)}}.call(s.prototype)}),ace.define("ace/edit_session/folding",["require","exports","module","ace/range","ace/edit_session/fold_line","ace/edit_session/fold","ace/token_iterator"],function(e,t,n){"use strict";function u(){this.getFoldAt=function(e,t,n){var r=this.getFoldLine(e);if(!r)return null;var i=r.folds;for(var s=0;s<i.length;s++){var o=i[s].range;if(o.contains(e,t)){if(n==1&&o.isEnd(e,t)&&!o.isEmpty())continue;if(n==-1&&o.isStart(e,t)&&!o.isEmpty())continue;return i[s]}}},this.getFoldsInRange=function(e){var t=e.start,n=e.end,r=this.$foldData,i=[];t.column+=1,n.column-=1;for(var s=0;s<r.length;s++){var o=r[s].range.compareRange(e);if(o==2)continue;if(o==-2)break;var u=r[s].folds;for(var a=0;a<u.length;a++){var f=u[a];o=f.range.compareRange(e);if(o==-2)break;if(o==2)continue;if(o==42)break;i.push(f)}}return t.column-=1,n.column+=1,i},this.getFoldsInRangeList=function(e){if(Array.isArray(e)){var t=[];e.forEach(function(e){t=t.concat(this.getFoldsInRange(e))},this)}else var t=this.getFoldsInRange(e);return t},this.getAllFolds=function(){var e=[],t=this.$foldData;for(var n=0;n<t.length;n++)for(var r=0;r<t[n].folds.length;r++)e.push(t[n].folds[r]);return e},this.getFoldStringAt=function(e,t,n,r){r=r||this.getFoldLine(e);if(!r)return null;var i={end:{column:0}},s,o;for(var u=0;u<r.folds.length;u++){o=r.folds[u];var a=o.range.compareEnd(e,t);if(a==-1){s=this.getLine(o.start.row).substring(i.end.column,o.start.column);break}if(a===0)return null;i=o}return s||(s=this.getLine(o.start.row).substring(i.end.column)),n==-1?s.substring(0,t-i.end.column):n==1?s.substring(t-i.end.column):s},this.getFoldLine=function(e,t){var n=this.$foldData,r=0;t&&(r=n.indexOf(t)),r==-1&&(r=0);for(r;r<n.length;r++){var i=n[r];if(i.start.row<=e&&i.end.row>=e)return i;if(i.end.row>e)return null}return null},this.getNextFoldLine=function(e,t){var n=this.$foldData,r=0;t&&(r=n.indexOf(t)),r==-1&&(r=0);for(r;r<n.length;r++){var i=n[r];if(i.end.row>=e)return i}return null},this.getFoldedRowCount=function(e,t){var n=this.$foldData,r=t-e+1;for(var i=0;i<n.length;i++){var s=n[i],o=s.end.row,u=s.start.row;if(o>=t){u<t&&(u>=e?r-=t-u:r=0);break}o>=e&&(u>=e?r-=o-u:r-=o-e+1)}return r},this.$addFoldLine=function(e){return this.$foldData.push(e),this.$foldData.sort(function(e,t){return e.start.row-t.start.row}),e},this.addFold=function(e,t){var n=this.$foldData,r=!1,o;e instanceof s?o=e:(o=new s(t,e),o.collapseChildren=t.collapseChildren),this.$clipRangeToDocument(o.range);var u=o.start.row,a=o.start.column,f=o.end.row,l=o.end.column,c=this.getFoldAt(u,a,1),h=this.getFoldAt(f,l,-1);if(c&&h==c)return c.addSubFold(o);c&&!c.range.isStart(u,a)&&this.removeFold(c),h&&!h.range.isEnd(f,l)&&this.removeFold(h);var p=this.getFoldsInRange(o.range);p.length>0&&(this.removeFolds(p),o.collapseChildren||p.forEach(function(e){o.addSubFold(e)}));for(var d=0;d<n.length;d++){var v=n[d];if(f==v.start.row){v.addFold(o),r=!0;break}if(u==v.end.row){v.addFold(o),r=!0;if(!o.sameRow){var m=n[d+1];if(m&&m.start.row==f){v.merge(m);break}}break}if(f<=v.start.row)break}return r||(v=this.$addFoldLine(new i(this.$foldData,o))),this.$useWrapMode?this.$updateWrapData(v.start.row,v.start.row):this.$updateRowLengthCache(v.start.row,v.start.row),this.$modified=!0,this._signal("changeFold",{data:o,action:"add"}),o},this.addFolds=function(e){e.forEach(function(e){this.addFold(e)},this)},this.removeFold=function(e){var t=e.foldLine,n=t.start.row,r=t.end.row,i=this.$foldData,s=t.folds;if(s.length==1)i.splice(i.indexOf(t),1);else if(t.range.isEnd(e.end.row,e.end.column))s.pop(),t.end.row=s[s.length-1].end.row,t.end.column=s[s.length-1].end.column;else if(t.range.isStart(e.start.row,e.start.column))s.shift(),t.start.row=s[0].start.row,t.start.column=s[0].start.column;else if(e.sameRow)s.splice(s.indexOf(e),1);else{var o=t.split(e.start.row,e.start.column);s=o.folds,s.shift(),o.start.row=s[0].start.row,o.start.column=s[0].start.column}this.$updating||(this.$useWrapMode?this.$updateWrapData(n,r):this.$updateRowLengthCache(n,r)),this.$modified=!0,this._signal("changeFold",{data:e,action:"remove"})},this.removeFolds=function(e){var t=[];for(var n=0;n<e.length;n++)t.push(e[n]);t.forEach(function(e){this.removeFold(e)},this),this.$modified=!0},this.expandFold=function(e){this.removeFold(e),e.subFolds.forEach(function(t){e.restoreRange(t),this.addFold(t)},this),e.collapseChildren>0&&this.foldAll(e.start.row+1,e.end.row,e.collapseChildren-1),e.subFolds=[]},this.expandFolds=function(e){e.forEach(function(e){this.expandFold(e)},this)},this.unfold=function(e,t){var n,i;e==null?(n=new r(0,0,this.getLength(),0),t==null&&(t=!0)):typeof e=="number"?n=new r(e,0,e,this.getLine(e).length):"row"in e?n=r.fromPoints(e,e):n=e,i=this.getFoldsInRangeList(n),t!=0?this.removeFolds(i):this.expandFolds(i);if(i.length)return i},this.isRowFolded=function(e,t){return!!this.getFoldLine(e,t)},this.getRowFoldEnd=function(e,t){var n=this.getFoldLine(e,t);return n?n.end.row:e},this.getRowFoldStart=function(e,t){var n=this.getFoldLine(e,t);return n?n.start.row:e},this.getFoldDisplayLine=function(e,t,n,r,i){r==null&&(r=e.start.row),i==null&&(i=0),t==null&&(t=e.end.row),n==null&&(n=this.getLine(t).length);var s=this.doc,o="";return e.walk(function(e,t,n,u){if(t<r)return;if(t==r){if(n<i)return;u=Math.max(i,u)}e!=null?o+=e:o+=s.getLine(t).substring(u,n)},t,n),o},this.getDisplayLine=function(e,t,n,r){var i=this.getFoldLine(e);if(!i){var s;return s=this.doc.getLine(e),s.substring(r||0,t||s.length)}return this.getFoldDisplayLine(i,e,t,n,r)},this.$cloneFoldData=function(){var e=[];return e=this.$foldData.map(function(t){var n=t.folds.map(function(e){return e.clone()});return new i(e,n)}),e},this.toggleFold=function(e){var t=this.selection,n=t.getRange(),r,i;if(n.isEmpty()){var s=n.start;r=this.getFoldAt(s.row,s.column);if(r){this.expandFold(r);return}(i=this.findMatchingBracket(s))?n.comparePoint(i)==1?n.end=i:(n.start=i,n.start.column++,n.end.column--):(i=this.findMatchingBracket({row:s.row,column:s.column+1}))?(n.comparePoint(i)==1?n.end=i:n.start=i,n.start.column++):n=this.getCommentFoldRange(s.row,s.column)||n}else{var o=this.getFoldsInRange(n);if(e&&o.length){this.expandFolds(o);return}o.length==1&&(r=o[0])}r||(r=this.getFoldAt(n.start.row,n.start.column));if(r&&r.range.toString()==n.toString()){this.expandFold(r);return}var u="...";if(!n.isMultiLine()){u=this.getTextRange(n);if(u.length<4)return;u=u.trim().substring(0,2)+".."}this.addFold(u,n)},this.getCommentFoldRange=function(e,t,n){var i=new o(this,e,t),s=i.getCurrentToken(),u=s&&s.type;if(s&&/^comment|string/.test(u)){u=u.match(/comment|string/)[0],u=="comment"&&(u+="|doc-start");var a=new RegExp(u),f=new r;if(n!=1){do s=i.stepBackward();while(s&&a.test(s.type));i.stepForward()}f.start.row=i.getCurrentTokenRow(),f.start.column=i.getCurrentTokenColumn()+2,i=new o(this,e,t);if(n!=-1){var l=-1;do{s=i.stepForward();if(l==-1){var c=this.getState(i.$row);a.test(c)||(l=i.$row)}else if(i.$row>l)break}while(s&&a.test(s.type));s=i.stepBackward()}else s=i.getCurrentToken();return f.end.row=i.getCurrentTokenRow(),f.end.column=i.getCurrentTokenColumn()+s.value.length-2,f}},this.foldAll=function(e,t,n,r){n==undefined&&(n=1e5);var i=this.foldWidgets;if(!i)return;t=t||this.getLength(),e=e||0;for(var s=e;s<t;s++){i[s]==null&&(i[s]=this.getFoldWidget(s));if(i[s]!="start")continue;if(r&&!r(s))continue;var o=this.getFoldWidgetRange(s);o&&o.isMultiLine()&&o.end.row<=t&&o.start.row>=e&&(s=o.end.row,o.collapseChildren=n,this.addFold("...",o))}},this.foldToLevel=function(e){this.foldAll();while(e-->0)this.unfold(null,!1)},this.foldAllComments=function(){var e=this;this.foldAll(null,null,null,function(t){var n=e.getTokens(t);for(var r=0;r<n.length;r++){var i=n[r];if(i.type=="text"&&/^\s+$/.test(i.value))continue;return/comment/.test(i.type)?!0:!1}})},this.$foldStyles={manual:1,markbegin:1,markbeginend:1},this.$foldStyle="markbegin",this.setFoldStyle=function(e){if(!this.$foldStyles[e])throw new Error("invalid fold style: "+e+"["+Object.keys(this.$foldStyles).join(", ")+"]");if(this.$foldStyle==e)return;this.$foldStyle=e,e=="manual"&&this.unfold();var t=this.$foldMode;this.$setFolding(null),this.$setFolding(t)},this.$setFolding=function(e){if(this.$foldMode==e)return;this.$foldMode=e,this.off("change",this.$updateFoldWidgets),this.off("tokenizerUpdate",this.$tokenizerUpdateFoldWidgets),this._signal("changeAnnotation");if(!e||this.$foldStyle=="manual"){this.foldWidgets=null;return}this.foldWidgets=[],this.getFoldWidget=e.getFoldWidget.bind(e,this,this.$foldStyle),this.getFoldWidgetRange=e.getFoldWidgetRange.bind(e,this,this.$foldStyle),this.$updateFoldWidgets=this.updateFoldWidgets.bind(this),this.$tokenizerUpdateFoldWidgets=this.tokenizerUpdateFoldWidgets.bind(this),this.on("change",this.$updateFoldWidgets),this.on("tokenizerUpdate",this.$tokenizerUpdateFoldWidgets)},this.getParentFoldRangeData=function(e,t){var n=this.foldWidgets;if(!n||t&&n[e])return{};var r=e-1,i;while(r>=0){var s=n[r];s==null&&(s=n[r]=this.getFoldWidget(r));if(s=="start"){var o=this.getFoldWidgetRange(r);i||(i=o);if(o&&o.end.row>=e)break}r--}return{range:r!==-1&&o,firstRange:i}},this.onFoldWidgetClick=function(e,t){t=t.domEvent;var n={children:t.shiftKey,all:t.ctrlKey||t.metaKey,siblings:t.altKey},r=this.$toggleFoldWidget(e,n);if(!r){var i=t.target||t.srcElement;i&&/ace_fold-widget/.test(i.className)&&(i.className+=" ace_invalid")}},this.$toggleFoldWidget=function(e,t){if(!this.getFoldWidget)return;var n=this.getFoldWidget(e),r=this.getLine(e),i=n==="end"?-1:1,s=this.getFoldAt(e,i===-1?0:r.length,i);if(s)return t.children||t.all?this.removeFold(s):this.expandFold(s),s;var o=this.getFoldWidgetRange(e,!0);if(o&&!o.isMultiLine()){s=this.getFoldAt(o.start.row,o.start.column,1);if(s&&o.isEqual(s.range))return this.removeFold(s),s}if(t.siblings){var u=this.getParentFoldRangeData(e);if(u.range)var a=u.range.start.row+1,f=u.range.end.row;this.foldAll(a,f,t.all?1e4:0)}else t.children?(f=o?o.end.row:this.getLength(),this.foldAll(e+1,f,t.all?1e4:0)):o&&(t.all&&(o.collapseChildren=1e4),this.addFold("...",o));return o},this.toggleFoldWidget=function(e){var t=this.selection.getCursor().row;t=this.getRowFoldStart(t);var n=this.$toggleFoldWidget(t,{});if(n)return;var r=this.getParentFoldRangeData(t,!0);n=r.range||r.firstRange;if(n){t=n.start.row;var i=this.getFoldAt(t,this.getLine(t).length,1);i?this.removeFold(i):this.addFold("...",n)}},this.updateFoldWidgets=function(e){var t=e.start.row,n=e.end.row-t;if(n===0)this.foldWidgets[t]=null;else if(e.action=="remove")this.foldWidgets.splice(t,n+1,null);else{var r=Array(n+1);r.unshift(t,1),this.foldWidgets.splice.apply(this.foldWidgets,r)}},this.tokenizerUpdateFoldWidgets=function(e){var t=e.data;t.first!=t.last&&this.foldWidgets.length>t.first&&this.foldWidgets.splice(t.first,this.foldWidgets.length)}}var r=e("../range").Range,i=e("./fold_line").FoldLine,s=e("./fold").Fold,o=e("../token_iterator").TokenIterator;t.Folding=u}),ace.define("ace/edit_session/bracket_match",["require","exports","module","ace/token_iterator","ace/range"],function(e,t,n){"use strict";function s(){this.findMatchingBracket=function(e,t){if(e.column==0)return null;var n=t||this.getLine(e.row).charAt(e.column-1);if(n=="")return null;var r=n.match(/([\(\[\{])|([\)\]\}])/);return r?r[1]?this.$findClosingBracket(r[1],e):this.$findOpeningBracket(r[2],e):null},this.getBracketRange=function(e){var t=this.getLine(e.row),n=!0,r,s=t.charAt(e.column-1),o=s&&s.match(/([\(\[\{])|([\)\]\}])/);o||(s=t.charAt(e.column),e={row:e.row,column:e.column+1},o=s&&s.match(/([\(\[\{])|([\)\]\}])/),n=!1);if(!o)return null;if(o[1]){var u=this.$findClosingBracket(o[1],e);if(!u)return null;r=i.fromPoints(e,u),n||(r.end.column++,r.start.column--),r.cursor=r.end}else{var u=this.$findOpeningBracket(o[2],e);if(!u)return null;r=i.fromPoints(u,e),n||(r.start.column++,r.end.column--),r.cursor=r.start}return r},this.getMatchingBracketRanges=function(e){var t=this.getLine(e.row),n=t.charAt(e.column-1),r=n&&n.match(/([\(\[\{])|([\)\]\}])/);r||(n=t.charAt(e.column),e={row:e.row,column:e.column+1},r=n&&n.match(/([\(\[\{])|([\)\]\}])/));if(!r)return null;var s=new i(e.row,e.column-1,e.row,e.column),o=r[1]?this.$findClosingBracket(r[1],e):this.$findOpeningBracket(r[2],e);if(!o)return[s];var u=new i(o.row,o.column,o.row,o.column+1);return[s,u]},this.$brackets={")":"(","(":")","]":"[","[":"]","{":"}","}":"{","<":">",">":"<"},this.$findOpeningBracket=function(e,t,n){var i=this.$brackets[e],s=1,o=new r(this,t.row,t.column),u=o.getCurrentToken();u||(u=o.stepForward());if(!u)return;n||(n=new RegExp("(\\.?"+u.type.replace(".","\\.").replace("rparen",".paren").replace(/\b(?:end)\b/,"(?:start|begin|end)")+")+"));var a=t.column-o.getCurrentTokenColumn()-2,f=u.value;for(;;){while(a>=0){var l=f.charAt(a);if(l==i){s-=1;if(s==0)return{row:o.getCurrentTokenRow(),column:a+o.getCurrentTokenColumn()}}else l==e&&(s+=1);a-=1}do u=o.stepBackward();while(u&&!n.test(u.type));if(u==null)break;f=u.value,a=f.length-1}return null},this.$findClosingBracket=function(e,t,n){var i=this.$brackets[e],s=1,o=new r(this,t.row,t.column),u=o.getCurrentToken();u||(u=o.stepForward());if(!u)return;n||(n=new RegExp("(\\.?"+u.type.replace(".","\\.").replace("lparen",".paren").replace(/\b(?:start|begin)\b/,"(?:start|begin|end)")+")+"));var a=t.column-o.getCurrentTokenColumn();for(;;){var f=u.value,l=f.length;while(a<l){var c=f.charAt(a);if(c==i){s-=1;if(s==0)return{row:o.getCurrentTokenRow(),column:a+o.getCurrentTokenColumn()}}else c==e&&(s+=1);a+=1}do u=o.stepForward();while(u&&!n.test(u.type));if(u==null)break;a=0}return null}}var r=e("../token_iterator").TokenIterator,i=e("../range").Range;t.BracketMatch=s}),ace.define("ace/edit_session",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/bidihandler","ace/config","ace/lib/event_emitter","ace/selection","ace/mode/text","ace/range","ace/document","ace/background_tokenizer","ace/search_highlight","ace/edit_session/folding","ace/edit_session/bracket_match"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/lang"),s=e("./bidihandler").BidiHandler,o=e("./config"),u=e("./lib/event_emitter").EventEmitter,a=e("./selection").Selection,f=e("./mode/text").Mode,l=e("./range").Range,c=e("./document").Document,h=e("./background_tokenizer").BackgroundTokenizer,p=e("./search_highlight").SearchHighlight,d=function(e,t){this.$breakpoints=[],this.$decorations=[],this.$frontMarkers={},this.$backMarkers={},this.$markerId=1,this.$undoSelect=!0,this.$foldData=[],this.id="session"+ ++d.$uid,this.$foldData.toString=function(){return this.join("\n")},this.on("changeFold",this.onChangeFold.bind(this)),this.$onChange=this.onChange.bind(this);if(typeof e!="object"||!e.getLine)e=new c(e);this.setDocument(e),this.selection=new a(this),this.$bidiHandler=new s(this),o.resetOptions(this),this.setMode(t),o._signal("session",this)};d.$uid=0,function(){function m(e){return e<4352?!1:e>=4352&&e<=4447||e>=4515&&e<=4519||e>=4602&&e<=4607||e>=9001&&e<=9002||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12283||e>=12288&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12589||e>=12593&&e<=12686||e>=12688&&e<=12730||e>=12736&&e<=12771||e>=12784&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=13054||e>=13056&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=55216&&e<=55238||e>=55243&&e<=55291||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=65281&&e<=65376||e>=65504&&e<=65510}r.implement(this,u),this.setDocument=function(e){this.doc&&this.doc.removeListener("change",this.$onChange),this.doc=e,e.on("change",this.$onChange),this.bgTokenizer&&this.bgTokenizer.setDocument(this.getDocument()),this.resetCaches()},this.getDocument=function(){return this.doc},this.$resetRowCache=function(e){if(!e){this.$docRowCache=[],this.$screenRowCache=[];return}var t=this.$docRowCache.length,n=this.$getRowCacheIndex(this.$docRowCache,e)+1;t>n&&(this.$docRowCache.splice(n,t),this.$screenRowCache.splice(n,t))},this.$getRowCacheIndex=function(e,t){var n=0,r=e.length-1;while(n<=r){var i=n+r>>1,s=e[i];if(t>s)n=i+1;else{if(!(t<s))return i;r=i-1}}return n-1},this.resetCaches=function(){this.$modified=!0,this.$wrapData=[],this.$rowLengthCache=[],this.$resetRowCache(0),this.bgTokenizer&&this.bgTokenizer.start(0)},this.onChangeFold=function(e){var t=e.data;this.$resetRowCache(t.start.row)},this.onChange=function(e){this.$modified=!0,this.$bidiHandler.onChange(e),this.$resetRowCache(e.start.row);var t=this.$updateInternalDataOnChange(e);!this.$fromUndo&&this.$undoManager&&(t&&t.length&&(this.$undoManager.add({action:"removeFolds",folds:t},this.mergeUndoDeltas),this.mergeUndoDeltas=!0),this.$undoManager.add(e,this.mergeUndoDeltas),this.mergeUndoDeltas=!0,this.$informUndoManager.schedule()),this.bgTokenizer&&this.bgTokenizer.$updateOnChange(e),this._signal("change",e)},this.setValue=function(e){this.doc.setValue(e),this.selection.moveTo(0,0),this.$resetRowCache(0),this.setUndoManager(this.$undoManager),this.getUndoManager().reset()},this.getValue=this.toString=function(){return this.doc.getValue()},this.getSelection=function(){return this.selection},this.getState=function(e){return this.bgTokenizer.getState(e)},this.getTokens=function(e){return this.bgTokenizer.getTokens(e)},this.getTokenAt=function(e,t){var n=this.bgTokenizer.getTokens(e),r,i=0;if(t==null){var s=n.length-1;i=this.getLine(e).length}else for(var s=0;s<n.length;s++){i+=n[s].value.length;if(i>=t)break}return r=n[s],r?(r.index=s,r.start=i-r.value.length,r):null},this.setUndoManager=function(e){this.$undoManager=e,this.$informUndoManager&&this.$informUndoManager.cancel();if(e){var t=this;e.addSession(this),this.$syncInformUndoManager=function(){t.$informUndoManager.cancel(),t.mergeUndoDeltas=!1},this.$informUndoManager=i.delayedCall(this.$syncInformUndoManager)}else this.$syncInformUndoManager=function(){}},this.markUndoGroup=function(){this.$syncInformUndoManager&&this.$syncInformUndoManager()},this.$defaultUndoManager={undo:function(){},redo:function(){},hasUndo:function(){},hasRedo:function(){},reset:function(){},add:function(){},addSelection:function(){},startNewGroup:function(){},addSession:function(){}},this.getUndoManager=function(){return this.$undoManager||this.$defaultUndoManager},this.getTabString=function(){return this.getUseSoftTabs()?i.stringRepeat(" ",this.getTabSize()):"	"},this.setUseSoftTabs=function(e){this.setOption("useSoftTabs",e)},this.getUseSoftTabs=function(){return this.$useSoftTabs&&!this.$mode.$indentWithTabs},this.setTabSize=function(e){this.setOption("tabSize",e)},this.getTabSize=function(){return this.$tabSize},this.isTabStop=function(e){return this.$useSoftTabs&&e.column%this.$tabSize===0},this.setNavigateWithinSoftTabs=function(e){this.setOption("navigateWithinSoftTabs",e)},this.getNavigateWithinSoftTabs=function(){return this.$navigateWithinSoftTabs},this.$overwrite=!1,this.setOverwrite=function(e){this.setOption("overwrite",e)},this.getOverwrite=function(){return this.$overwrite},this.toggleOverwrite=function(){this.setOverwrite(!this.$overwrite)},this.addGutterDecoration=function(e,t){this.$decorations[e]||(this.$decorations[e]=""),this.$decorations[e]+=" "+t,this._signal("changeBreakpoint",{})},this.removeGutterDecoration=function(e,t){this.$decorations[e]=(this.$decorations[e]||"").replace(" "+t,""),this._signal("changeBreakpoint",{})},this.getBreakpoints=function(){return this.$breakpoints},this.setBreakpoints=function(e){this.$breakpoints=[];for(var t=0;t<e.length;t++)this.$breakpoints[e[t]]="ace_breakpoint";this._signal("changeBreakpoint",{})},this.clearBreakpoints=function(){this.$breakpoints=[],this._signal("changeBreakpoint",{})},this.setBreakpoint=function(e,t){t===undefined&&(t="ace_breakpoint"),t?this.$breakpoints[e]=t:delete this.$breakpoints[e],this._signal("changeBreakpoint",{})},this.clearBreakpoint=function(e){delete this.$breakpoints[e],this._signal("changeBreakpoint",{})},this.addMarker=function(e,t,n,r){var i=this.$markerId++,s={range:e,type:n||"line",renderer:typeof n=="function"?n:null,clazz:t,inFront:!!r,id:i};return r?(this.$frontMarkers[i]=s,this._signal("changeFrontMarker")):(this.$backMarkers[i]=s,this._signal("changeBackMarker")),i},this.addDynamicMarker=function(e,t){if(!e.update)return;var n=this.$markerId++;return e.id=n,e.inFront=!!t,t?(this.$frontMarkers[n]=e,this._signal("changeFrontMarker")):(this.$backMarkers[n]=e,this._signal("changeBackMarker")),e},this.removeMarker=function(e){var t=this.$frontMarkers[e]||this.$backMarkers[e];if(!t)return;var n=t.inFront?this.$frontMarkers:this.$backMarkers;delete n[e],this._signal(t.inFront?"changeFrontMarker":"changeBackMarker")},this.getMarkers=function(e){return e?this.$frontMarkers:this.$backMarkers},this.highlight=function(e){if(!this.$searchHighlight){var t=new p(null,"ace_selected-word","text");this.$searchHighlight=this.addDynamicMarker(t)}this.$searchHighlight.setRegexp(e)},this.highlightLines=function(e,t,n,r){typeof t!="number"&&(n=t,t=e),n||(n="ace_step");var i=new l(e,0,t,Infinity);return i.id=this.addMarker(i,n,"fullLine",r),i},this.setAnnotations=function(e){this.$annotations=e,this._signal("changeAnnotation",{})},this.getAnnotations=function(){return this.$annotations||[]},this.clearAnnotations=function(){this.setAnnotations([])},this.$detectNewLine=function(e){var t=e.match(/^.*?(\r?\n)/m);t?this.$autoNewLine=t[1]:this.$autoNewLine="\n"},this.getWordRange=function(e,t){var n=this.getLine(e),r=!1;t>0&&(r=!!n.charAt(t-1).match(this.tokenRe)),r||(r=!!n.charAt(t).match(this.tokenRe));if(r)var i=this.tokenRe;else if(/^\s+$/.test(n.slice(t-1,t+1)))var i=/\s/;else var i=this.nonTokenRe;var s=t;if(s>0){do s--;while(s>=0&&n.charAt(s).match(i));s++}var o=t;while(o<n.length&&n.charAt(o).match(i))o++;return new l(e,s,e,o)},this.getAWordRange=function(e,t){var n=this.getWordRange(e,t),r=this.getLine(n.end.row);while(r.charAt(n.end.column).match(/[ \t]/))n.end.column+=1;return n},this.setNewLineMode=function(e){this.doc.setNewLineMode(e)},this.getNewLineMode=function(){return this.doc.getNewLineMode()},this.setUseWorker=function(e){this.setOption("useWorker",e)},this.getUseWorker=function(){return this.$useWorker},this.onReloadTokenizer=function(e){var t=e.data;this.bgTokenizer.start(t.first),this._signal("tokenizerUpdate",e)},this.$modes=o.$modes,this.$mode=null,this.$modeId=null,this.setMode=function(e,t){if(e&&typeof e=="object"){if(e.getTokenizer)return this.$onChangeMode(e);var n=e,r=n.path}else r=e||"ace/mode/text";this.$modes["ace/mode/text"]||(this.$modes["ace/mode/text"]=new f);if(this.$modes[r]&&!n){this.$onChangeMode(this.$modes[r]),t&&t();return}this.$modeId=r,o.loadModule(["mode",r],function(e){if(this.$modeId!==r)return t&&t();this.$modes[r]&&!n?this.$onChangeMode(this.$modes[r]):e&&e.Mode&&(e=new e.Mode(n),n||(this.$modes[r]=e,e.$id=r),this.$onChangeMode(e)),t&&t()}.bind(this)),this.$mode||this.$onChangeMode(this.$modes["ace/mode/text"],!0)},this.$onChangeMode=function(e,t){t||(this.$modeId=e.$id);if(this.$mode===e)return;var n=this.$mode;this.$mode=e,this.$stopWorker(),this.$useWorker&&this.$startWorker();var r=e.getTokenizer();if(r.on!==undefined){var i=this.onReloadTokenizer.bind(this);r.on("update",i)}if(!this.bgTokenizer){this.bgTokenizer=new h(r);var s=this;this.bgTokenizer.on("update",function(e){s._signal("tokenizerUpdate",e)})}else this.bgTokenizer.setTokenizer(r);this.bgTokenizer.setDocument(this.getDocument()),this.tokenRe=e.tokenRe,this.nonTokenRe=e.nonTokenRe,t||(e.attachToSession&&e.attachToSession(this),this.$options.wrapMethod.set.call(this,this.$wrapMethod),this.$setFolding(e.foldingRules),this.bgTokenizer.start(0),this._emit("changeMode",{oldMode:n,mode:e}))},this.$stopWorker=function(){this.$worker&&(this.$worker.terminate(),this.$worker=null)},this.$startWorker=function(){try{this.$worker=this.$mode.createWorker(this)}catch(e){o.warn("Could not load worker",e),this.$worker=null}},this.getMode=function(){return this.$mode},this.$scrollTop=0,this.setScrollTop=function(e){if(this.$scrollTop===e||isNaN(e))return;this.$scrollTop=e,this._signal("changeScrollTop",e)},this.getScrollTop=function(){return this.$scrollTop},this.$scrollLeft=0,this.setScrollLeft=function(e){if(this.$scrollLeft===e||isNaN(e))return;this.$scrollLeft=e,this._signal("changeScrollLeft",e)},this.getScrollLeft=function(){return this.$scrollLeft},this.getScreenWidth=function(){return this.$computeWidth(),this.lineWidgets?Math.max(this.getLineWidgetMaxWidth(),this.screenWidth):this.screenWidth},this.getLineWidgetMaxWidth=function(){if(this.lineWidgetsWidth!=null)return this.lineWidgetsWidth;var e=0;return this.lineWidgets.forEach(function(t){t&&t.screenWidth>e&&(e=t.screenWidth)}),this.lineWidgetWidth=e},this.$computeWidth=function(e){if(this.$modified||e){this.$modified=!1;if(this.$useWrapMode)return this.screenWidth=this.$wrapLimit;var t=this.doc.getAllLines(),n=this.$rowLengthCache,r=0,i=0,s=this.$foldData[i],o=s?s.start.row:Infinity,u=t.length;for(var a=0;a<u;a++){if(a>o){a=s.end.row+1;if(a>=u)break;s=this.$foldData[i++],o=s?s.start.row:Infinity}n[a]==null&&(n[a]=this.$getStringScreenWidth(t[a])[0]),n[a]>r&&(r=n[a])}this.screenWidth=r}},this.getLine=function(e){return this.doc.getLine(e)},this.getLines=function(e,t){return this.doc.getLines(e,t)},this.getLength=function(){return this.doc.getLength()},this.getTextRange=function(e){return this.doc.getTextRange(e||this.selection.getRange())},this.insert=function(e,t){return this.doc.insert(e,t)},this.remove=function(e){return this.doc.remove(e)},this.removeFullLines=function(e,t){return this.doc.removeFullLines(e,t)},this.undoChanges=function(e,t){if(!e.length)return;this.$fromUndo=!0;for(var n=e.length-1;n!=-1;n--){var r=e[n];r.action=="insert"||r.action=="remove"?this.doc.revertDelta(r):r.folds&&this.addFolds(r.folds)}!t&&this.$undoSelect&&(e.selectionBefore?this.selection.fromJSON(e.selectionBefore):this.selection.setRange(this.$getUndoSelection(e,!0))),this.$fromUndo=!1},this.redoChanges=function(e,t){if(!e.length)return;this.$fromUndo=!0;for(var n=0;n<e.length;n++){var r=e[n];(r.action=="insert"||r.action=="remove")&&this.doc.$safeApplyDelta(r)}!t&&this.$undoSelect&&(e.selectionAfter?this.selection.fromJSON(e.selectionAfter):this.selection.setRange(this.$getUndoSelection(e,!1))),this.$fromUndo=!1},this.setUndoSelect=function(e){this.$undoSelect=e},this.$getUndoSelection=function(e,t){function n(e){return t?e.action!=="insert":e.action==="insert"}var r,i;for(var s=0;s<e.length;s++){var o=e[s];if(!o.start)continue;if(!r){n(o)?r=l.fromPoints(o.start,o.end):r=l.fromPoints(o.start,o.start);continue}n(o)?(i=o.start,r.compare(i.row,i.column)==-1&&r.setStart(i),i=o.end,r.compare(i.row,i.column)==1&&r.setEnd(i)):(i=o.start,r.compare(i.row,i.column)==-1&&(r=l.fromPoints(o.start,o.start)))}return r},this.replace=function(e,t){return this.doc.replace(e,t)},this.moveText=function(e,t,n){var r=this.getTextRange(e),i=this.getFoldsInRange(e),s=l.fromPoints(t,t);if(!n){this.remove(e);var o=e.start.row-e.end.row,u=o?-e.end.column:e.start.column-e.end.column;u&&(s.start.row==e.end.row&&s.start.column>e.end.column&&(s.start.column+=u),s.end.row==e.end.row&&s.end.column>e.end.column&&(s.end.column+=u)),o&&s.start.row>=e.end.row&&(s.start.row+=o,s.end.row+=o)}s.end=this.insert(s.start,r);if(i.length){var a=e.start,f=s.start,o=f.row-a.row,u=f.column-a.column;this.addFolds(i.map(function(e){return e=e.clone(),e.start.row==a.row&&(e.start.column+=u),e.end.row==a.row&&(e.end.column+=u),e.start.row+=o,e.end.row+=o,e}))}return s},this.indentRows=function(e,t,n){n=n.replace(/\t/g,this.getTabString());for(var r=e;r<=t;r++)this.doc.insertInLine({row:r,column:0},n)},this.outdentRows=function(e){var t=e.collapseRows(),n=new l(0,0,0,0),r=this.getTabSize();for(var i=t.start.row;i<=t.end.row;++i){var s=this.getLine(i);n.start.row=i,n.end.row=i;for(var o=0;o<r;++o)if(s.charAt(o)!=" ")break;o<r&&s.charAt(o)=="	"?(n.start.column=o,n.end.column=o+1):(n.start.column=0,n.end.column=o),this.remove(n)}},this.$moveLines=function(e,t,n){e=this.getRowFoldStart(e),t=this.getRowFoldEnd(t);if(n<0){var r=this.getRowFoldStart(e+n);if(r<0)return 0;var i=r-e}else if(n>0){var r=this.getRowFoldEnd(t+n);if(r>this.doc.getLength()-1)return 0;var i=r-t}else{e=this.$clipRowToDocument(e),t=this.$clipRowToDocument(t);var i=t-e+1}var s=new l(e,0,t,Number.MAX_VALUE),o=this.getFoldsInRange(s).map(function(e){return e=e.clone(),e.start.row+=i,e.end.row+=i,e}),u=n==0?this.doc.getLines(e,t):this.doc.removeFullLines(e,t);return this.doc.insertFullLines(e+i,u),o.length&&this.addFolds(o),i},this.moveLinesUp=function(e,t){return this.$moveLines(e,t,-1)},this.moveLinesDown=function(e,t){return this.$moveLines(e,t,1)},this.duplicateLines=function(e,t){return this.$moveLines(e,t,0)},this.$clipRowToDocument=function(e){return Math.max(0,Math.min(e,this.doc.getLength()-1))},this.$clipColumnToRow=function(e,t){return t<0?0:Math.min(this.doc.getLine(e).length,t)},this.$clipPositionToDocument=function(e,t){t=Math.max(0,t);if(e<0)e=0,t=0;else{var n=this.doc.getLength();e>=n?(e=n-1,t=this.doc.getLine(n-1).length):t=Math.min(this.doc.getLine(e).length,t)}return{row:e,column:t}},this.$clipRangeToDocument=function(e){e.start.row<0?(e.start.row=0,e.start.column=0):e.start.column=this.$clipColumnToRow(e.start.row,e.start.column);var t=this.doc.getLength()-1;return e.end.row>t?(e.end.row=t,e.end.column=this.doc.getLine(t).length):e.end.column=this.$clipColumnToRow(e.end.row,e.end.column),e},this.$wrapLimit=80,this.$useWrapMode=!1,this.$wrapLimitRange={min:null,max:null},this.setUseWrapMode=function(e){if(e!=this.$useWrapMode){this.$useWrapMode=e,this.$modified=!0,this.$resetRowCache(0);if(e){var t=this.getLength();this.$wrapData=Array(t),this.$updateWrapData(0,t-1)}this._signal("changeWrapMode")}},this.getUseWrapMode=function(){return this.$useWrapMode},this.setWrapLimitRange=function(e,t){if(this.$wrapLimitRange.min!==e||this.$wrapLimitRange.max!==t)this.$wrapLimitRange={min:e,max:t},this.$modified=!0,this.$bidiHandler.markAsDirty(),this.$useWrapMode&&this._signal("changeWrapMode")},this.adjustWrapLimit=function(e,t){var n=this.$wrapLimitRange;n.max<0&&(n={min:t,max:t});var r=this.$constrainWrapLimit(e,n.min,n.max);return r!=this.$wrapLimit&&r>1?(this.$wrapLimit=r,this.$modified=!0,this.$useWrapMode&&(this.$updateWrapData(0,this.getLength()-1),this.$resetRowCache(0),this._signal("changeWrapLimit")),!0):!1},this.$constrainWrapLimit=function(e,t,n){return t&&(e=Math.max(t,e)),n&&(e=Math.min(n,e)),e},this.getWrapLimit=function(){return this.$wrapLimit},this.setWrapLimit=function(e){this.setWrapLimitRange(e,e)},this.getWrapLimitRange=function(){return{min:this.$wrapLimitRange.min,max:this.$wrapLimitRange.max}},this.$updateInternalDataOnChange=function(e){var t=this.$useWrapMode,n=e.action,r=e.start,i=e.end,s=r.row,o=i.row,u=o-s,a=null;this.$updating=!0;if(u!=0)if(n==="remove"){this[t?"$wrapData":"$rowLengthCache"].splice(s,u);var f=this.$foldData;a=this.getFoldsInRange(e),this.removeFolds(a);var l=this.getFoldLine(i.row),c=0;if(l){l.addRemoveChars(i.row,i.column,r.column-i.column),l.shiftRow(-u);var h=this.getFoldLine(s);h&&h!==l&&(h.merge(l),l=h),c=f.indexOf(l)+1}for(c;c<f.length;c++){var l=f[c];l.start.row>=i.row&&l.shiftRow(-u)}o=s}else{var p=Array(u);p.unshift(s,0);var d=t?this.$wrapData:this.$rowLengthCache;d.splice.apply(d,p);var f=this.$foldData,l=this.getFoldLine(s),c=0;if(l){var v=l.range.compareInside(r.row,r.column);v==0?(l=l.split(r.row,r.column),l&&(l.shiftRow(u),l.addRemoveChars(o,0,i.column-r.column))):v==-1&&(l.addRemoveChars(s,0,i.column-r.column),l.shiftRow(u)),c=f.indexOf(l)+1}for(c;c<f.length;c++){var l=f[c];l.start.row>=s&&l.shiftRow(u)}}else{u=Math.abs(e.start.column-e.end.column),n==="remove"&&(a=this.getFoldsInRange(e),this.removeFolds(a),u=-u);var l=this.getFoldLine(s);l&&l.addRemoveChars(s,r.column,u)}return t&&this.$wrapData.length!=this.doc.getLength()&&console.error("doc.getLength() and $wrapData.length have to be the same!"),this.$updating=!1,t?this.$updateWrapData(s,o):this.$updateRowLengthCache(s,o),a},this.$updateRowLengthCache=function(e,t,n){this.$rowLengthCache[e]=null,this.$rowLengthCache[t]=null},this.$updateWrapData=function(e,t){var r=this.doc.getAllLines(),i=this.getTabSize(),o=this.$wrapData,u=this.$wrapLimit,a,f,l=e;t=Math.min(t,r.length-1);while(l<=t)f=this.getFoldLine(l,f),f?(a=[],f.walk(function(e,t,i,o){var u;if(e!=null){u=this.$getDisplayTokens(e,a.length),u[0]=n;for(var f=1;f<u.length;f++)u[f]=s}else u=this.$getDisplayTokens(r[t].substring(o,i),a.length);a=a.concat(u)}.bind(this),f.end.row,r[f.end.row].length+1),o[f.start.row]=this.$computeWrapSplits(a,u,i),l=f.end.row+1):(a=this.$getDisplayTokens(r[l]),o[l]=this.$computeWrapSplits(a,u,i),l++)};var e=1,t=2,n=3,s=4,a=9,c=10,d=11,v=12;this.$computeWrapSplits=function(e,r,i){function g(){var t=0;if(m===0)return t;if(p)for(var n=0;n<e.length;n++){var r=e[n];if(r==c)t+=1;else{if(r!=d){if(r==v)continue;break}t+=i}}return h&&p!==!1&&(t+=i),Math.min(t,m)}function y(t){var n=t-f;for(var r=f;r<t;r++){var i=e[r];if(i===12||i===2)n-=1}o.length||(b=g(),o.indent=b),l+=n,o.push(l),f=t}if(e.length==0)return[];var o=[],u=e.length,f=0,l=0,h=this.$wrapAsCode,p=this.$indentedSoftWrap,m=r<=Math.max(2*i,8)||p===!1?0:Math.floor(r/2),b=0;while(u-f>r-b){var w=f+r-b;if(e[w-1]>=c&&e[w]>=c){y(w);continue}if(e[w]==n||e[w]==s){for(w;w!=f-1;w--)if(e[w]==n)break;if(w>f){y(w);continue}w=f+r;for(w;w<e.length;w++)if(e[w]!=s)break;if(w==e.length)break;y(w);continue}var E=Math.max(w-(r-(r>>2)),f-1);while(w>E&&e[w]<n)w--;if(h){while(w>E&&e[w]<n)w--;while(w>E&&e[w]==a)w--}else while(w>E&&e[w]<c)w--;if(w>E){y(++w);continue}w=f+r,e[w]==t&&w--,y(w-b)}return o},this.$getDisplayTokens=function(n,r){var i=[],s;r=r||0;for(var o=0;o<n.length;o++){var u=n.charCodeAt(o);if(u==9){s=this.getScreenTabSize(i.length+r),i.push(d);for(var f=1;f<s;f++)i.push(v)}else u==32?i.push(c):u>39&&u<48||u>57&&u<64?i.push(a):u>=4352&&m(u)?i.push(e,t):i.push(e)}return i},this.$getStringScreenWidth=function(e,t,n){if(t==0)return[0,0];t==null&&(t=Infinity),n=n||0;var r,i;for(i=0;i<e.length;i++){r=e.charCodeAt(i),r==9?n+=this.getScreenTabSize(n):r>=4352&&m(r)?n+=2:n+=1;if(n>t)break}return[n,i]},this.lineWidgets=null,this.getRowLength=function(e){var t=1;return this.lineWidgets&&(t+=this.lineWidgets[e]&&this.lineWidgets[e].rowCount||0),!this.$useWrapMode||!this.$wrapData[e]?t:this.$wrapData[e].length+t},this.getRowLineCount=function(e){return!this.$useWrapMode||!this.$wrapData[e]?1:this.$wrapData[e].length+1},this.getRowWrapIndent=function(e){if(this.$useWrapMode){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE),n=this.$wrapData[t.row];return n.length&&n[0]<t.column?n.indent:0}return 0},this.getScreenLastRowColumn=function(e){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE);return this.documentToScreenColumn(t.row,t.column)},this.getDocumentLastRowColumn=function(e,t){var n=this.documentToScreenRow(e,t);return this.getScreenLastRowColumn(n)},this.getDocumentLastRowColumnPosition=function(e,t){var n=this.documentToScreenRow(e,t);return this.screenToDocumentPosition(n,Number.MAX_VALUE/10)},this.getRowSplitData=function(e){return this.$useWrapMode?this.$wrapData[e]:undefined},this.getScreenTabSize=function(e){return this.$tabSize-(e%this.$tabSize|0)},this.screenToDocumentRow=function(e,t){return this.screenToDocumentPosition(e,t).row},this.screenToDocumentColumn=function(e,t){return this.screenToDocumentPosition(e,t).column},this.screenToDocumentPosition=function(e,t,n){if(e<0)return{row:0,column:0};var r,i=0,s=0,o,u=0,a=0,f=this.$screenRowCache,l=this.$getRowCacheIndex(f,e),c=f.length;if(c&&l>=0)var u=f[l],i=this.$docRowCache[l],h=e>f[c-1];else var h=!c;var p=this.getLength()-1,d=this.getNextFoldLine(i),v=d?d.start.row:Infinity;while(u<=e){a=this.getRowLength(i);if(u+a>e||i>=p)break;u+=a,i++,i>v&&(i=d.end.row+1,d=this.getNextFoldLine(i,d),v=d?d.start.row:Infinity),h&&(this.$docRowCache.push(i),this.$screenRowCache.push(u))}if(d&&d.start.row<=i)r=this.getFoldDisplayLine(d),i=d.start.row;else{if(u+a<=e||i>p)return{row:p,column:this.getLine(p).length};r=this.getLine(i),d=null}var m=0,g=Math.floor(e-u);if(this.$useWrapMode){var y=this.$wrapData[i];y&&(o=y[g],g>0&&y.length&&(m=y.indent,s=y[g-1]||y[y.length-1],r=r.substring(s)))}return n!==undefined&&this.$bidiHandler.isBidiRow(u+g,i,g)&&(t=this.$bidiHandler.offsetToCol(n)),s+=this.$getStringScreenWidth(r,t-m)[1],this.$useWrapMode&&s>=o&&(s=o-1),d?d.idxToPosition(s):{row:i,column:s}},this.documentToScreenPosition=function(e,t){if(typeof t=="undefined")var n=this.$clipPositionToDocument(e.row,e.column);else n=this.$clipPositionToDocument(e,t);e=n.row,t=n.column;var r=0,i=null,s=null;s=this.getFoldAt(e,t,1),s&&(e=s.start.row,t=s.start.column);var o,u=0,a=this.$docRowCache,f=this.$getRowCacheIndex(a,e),l=a.length;if(l&&f>=0)var u=a[f],r=this.$screenRowCache[f],c=e>a[l-1];else var c=!l;var h=this.getNextFoldLine(u),p=h?h.start.row:Infinity;while(u<e){if(u>=p){o=h.end.row+1;if(o>e)break;h=this.getNextFoldLine(o,h),p=h?h.start.row:Infinity}else o=u+1;r+=this.getRowLength(u),u=o,c&&(this.$docRowCache.push(u),this.$screenRowCache.push(r))}var d="";h&&u>=p?(d=this.getFoldDisplayLine(h,e,t),i=h.start.row):(d=this.getLine(e).substring(0,t),i=e);var v=0;if(this.$useWrapMode){var m=this.$wrapData[i];if(m){var g=0;while(d.length>=m[g])r++,g++;d=d.substring(m[g-1]||0,d.length),v=g>0?m.indent:0}}return this.lineWidgets&&this.lineWidgets[u]&&this.lineWidgets[u].rowsAbove&&(r+=this.lineWidgets[u].rowsAbove),{row:r,column:v+this.$getStringScreenWidth(d)[0]}},this.documentToScreenColumn=function(e,t){return this.documentToScreenPosition(e,t).column},this.documentToScreenRow=function(e,t){return this.documentToScreenPosition(e,t).row},this.getScreenLength=function(){var e=0,t=null;if(!this.$useWrapMode){e=this.getLength();var n=this.$foldData;for(var r=0;r<n.length;r++)t=n[r],e-=t.end.row-t.start.row}else{var i=this.$wrapData.length,s=0,r=0,t=this.$foldData[r++],o=t?t.start.row:Infinity;while(s<i){var u=this.$wrapData[s];e+=u?u.length+1:1,s++,s>o&&(s=t.end.row+1,t=this.$foldData[r++],o=t?t.start.row:Infinity)}}return this.lineWidgets&&(e+=this.$getWidgetScreenLength()),e},this.$setFontMetrics=function(e){if(!this.$enableVarChar)return;this.$getStringScreenWidth=function(t,n,r){if(n===0)return[0,0];n||(n=Infinity),r=r||0;var i,s;for(s=0;s<t.length;s++){i=t.charAt(s),i==="	"?r+=this.getScreenTabSize(r):r+=e.getCharacterWidth(i);if(r>n)break}return[r,s]}},this.destroy=function(){this.bgTokenizer&&(this.bgTokenizer.setDocument(null),this.bgTokenizer=null),this.$stopWorker(),this.removeAllListeners(),this.selection.detach()},this.isFullWidth=m}.call(d.prototype),e("./edit_session/folding").Folding.call(d.prototype),e("./edit_session/bracket_match").BracketMatch.call(d.prototype),o.defineOptions(d.prototype,"session",{wrap:{set:function(e){!e||e=="off"?e=!1:e=="free"?e=!0:e=="printMargin"?e=-1:typeof e=="string"&&(e=parseInt(e,10)||!1);if(this.$wrap==e)return;this.$wrap=e;if(!e)this.setUseWrapMode(!1);else{var t=typeof e=="number"?e:null;this.setWrapLimitRange(t,t),this.setUseWrapMode(!0)}},get:function(){return this.getUseWrapMode()?this.$wrap==-1?"printMargin":this.getWrapLimitRange().min?this.$wrap:"free":"off"},handlesSet:!0},wrapMethod:{set:function(e){e=e=="auto"?this.$mode.type!="text":e!="text",e!=this.$wrapAsCode&&(this.$wrapAsCode=e,this.$useWrapMode&&(this.$useWrapMode=!1,this.setUseWrapMode(!0)))},initialValue:"auto"},indentedSoftWrap:{set:function(){this.$useWrapMode&&(this.$useWrapMode=!1,this.setUseWrapMode(!0))},initialValue:!0},firstLineNumber:{set:function(){this._signal("changeBreakpoint")},initialValue:1},useWorker:{set:function(e){this.$useWorker=e,this.$stopWorker(),e&&this.$startWorker()},initialValue:!0},useSoftTabs:{initialValue:!0},tabSize:{set:function(e){e=parseInt(e),e>0&&this.$tabSize!==e&&(this.$modified=!0,this.$rowLengthCache=[],this.$tabSize=e,this._signal("changeTabSize"))},initialValue:4,handlesSet:!0},navigateWithinSoftTabs:{initialValue:!1},foldStyle:{set:function(e){this.setFoldStyle(e)},handlesSet:!0},overwrite:{set:function(e){this._signal("changeOverwrite")},initialValue:!1},newLineMode:{set:function(e){this.doc.setNewLineMode(e)},get:function(){return this.doc.getNewLineMode()},handlesSet:!0},mode:{set:function(e){this.setMode(e)},get:function(){return this.$modeId},handlesSet:!0}}),t.EditSession=d}),ace.define("ace/search",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(e,t,n){"use strict";function u(e,t){function n(e){return/\w/.test(e)||t.regExp?"\\b":""}return n(e[0])+e+n(e[e.length-1])}var r=e("./lib/lang"),i=e("./lib/oop"),s=e("./range").Range,o=function(){this.$options={}};(function(){this.set=function(e){return i.mixin(this.$options,e),this},this.getOptions=function(){return r.copyObject(this.$options)},this.setOptions=function(e){this.$options=e},this.find=function(e){var t=this.$options,n=this.$matchIterator(e,t);if(!n)return!1;var r=null;return n.forEach(function(e,n,i,o){return r=new s(e,n,i,o),n==o&&t.start&&t.start.start&&t.skipCurrent!=0&&r.isEqual(t.start)?(r=null,!1):!0}),r},this.findAll=function(e){var t=this.$options;if(!t.needle)return[];this.$assembleRegExp(t);var n=t.range,i=n?e.getLines(n.start.row,n.end.row):e.doc.getAllLines(),o=[],u=t.re;if(t.$isMultiLine){var a=u.length,f=i.length-a,l;e:for(var c=u.offset||0;c<=f;c++){for(var h=0;h<a;h++)if(i[c+h].search(u[h])==-1)continue e;var p=i[c],d=i[c+a-1],v=p.length-p.match(u[0])[0].length,m=d.match(u[a-1])[0].length;if(l&&l.end.row===c&&l.end.column>v)continue;o.push(l=new s(c,v,c+a-1,m)),a>2&&(c=c+a-2)}}else for(var g=0;g<i.length;g++){var y=r.getMatchOffsets(i[g],u);for(var h=0;h<y.length;h++){var b=y[h];o.push(new s(g,b.offset,g,b.offset+b.length))}}if(n){var w=n.start.column,E=n.start.column,g=0,h=o.length-1;while(g<h&&o[g].start.column<w&&o[g].start.row==n.start.row)g++;while(g<h&&o[h].end.column>E&&o[h].end.row==n.end.row)h--;o=o.slice(g,h+1);for(g=0,h=o.length;g<h;g++)o[g].start.row+=n.start.row,o[g].end.row+=n.start.row}return o},this.replace=function(e,t){var n=this.$options,r=this.$assembleRegExp(n);if(n.$isMultiLine)return t;if(!r)return;var i=r.exec(e);if(!i||i[0].length!=e.length)return null;t=e.replace(r,t);if(n.preserveCase){t=t.split("");for(var s=Math.min(e.length,e.length);s--;){var o=e[s];o&&o.toLowerCase()!=o?t[s]=t[s].toUpperCase():t[s]=t[s].toLowerCase()}t=t.join("")}return t},this.$assembleRegExp=function(e,t){if(e.needle instanceof RegExp)return e.re=e.needle;var n=e.needle;if(!e.needle)return e.re=!1;e.regExp||(n=r.escapeRegExp(n)),e.wholeWord&&(n=u(n,e));var i=e.caseSensitive?"gm":"gmi";e.$isMultiLine=!t&&/[\n\r]/.test(n);if(e.$isMultiLine)return e.re=this.$assembleMultilineRegExp(n,i);try{var s=new RegExp(n,i)}catch(o){s=!1}return e.re=s},this.$assembleMultilineRegExp=function(e,t){var n=e.replace(/\r\n|\r|\n/g,"$\n^").split("\n"),r=[];for(var i=0;i<n.length;i++)try{r.push(new RegExp(n[i],t))}catch(s){return!1}return r},this.$matchIterator=function(e,t){var n=this.$assembleRegExp(t);if(!n)return!1;var r=t.backwards==1,i=t.skipCurrent!=0,s=t.range,o=t.start;o||(o=s?s[r?"end":"start"]:e.selection.getRange()),o.start&&(o=o[i!=r?"end":"start"]);var u=s?s.start.row:0,a=s?s.end.row:e.getLength()-1;if(r)var f=function(e){var n=o.row;if(c(n,o.column,e))return;for(n--;n>=u;n--)if(c(n,Number.MAX_VALUE,e))return;if(t.wrap==0)return;for(n=a,u=o.row;n>=u;n--)if(c(n,Number.MAX_VALUE,e))return};else var f=function(e){var n=o.row;if(c(n,o.column,e))return;for(n+=1;n<=a;n++)if(c(n,0,e))return;if(t.wrap==0)return;for(n=u,a=o.row;n<=a;n++)if(c(n,0,e))return};if(t.$isMultiLine)var l=n.length,c=function(t,i,s){var o=r?t-l+1:t;if(o<0)return;var u=e.getLine(o),a=u.search(n[0]);if(!r&&a<i||a===-1)return;for(var f=1;f<l;f++){u=e.getLine(o+f);if(u.search(n[f])==-1)return}var c=u.match(n[l-1])[0].length;if(r&&c>i)return;if(s(o,a,o+l-1,c))return!0};else if(r)var c=function(t,r,i){var s=e.getLine(t),o=[],u,a=0;n.lastIndex=0;while(u=n.exec(s)){var f=u[0].length;a=u.index;if(!f){if(a>=s.length)break;n.lastIndex=a+=1}if(u.index+f>r)break;o.push(u.index,f)}for(var l=o.length-1;l>=0;l-=2){var c=o[l-1],f=o[l];if(i(t,c,t,c+f))return!0}};else var c=function(t,r,i){var s=e.getLine(t),o,u;n.lastIndex=r;while(u=n.exec(s)){var a=u[0].length;o=u.index;if(i(t,o,t,o+a))return!0;if(!a){n.lastIndex=o+=1;if(o>=s.length)return!1}}};return{forEach:f}}}).call(o.prototype),t.Search=o}),ace.define("ace/keyboard/hash_handler",["require","exports","module","ace/lib/keys","ace/lib/useragent"],function(e,t,n){"use strict";function o(e,t){this.platform=t||(i.isMac?"mac":"win"),this.commands={},this.commandKeyBinding={},this.addCommands(e),this.$singleCommand=!0}function u(e,t){o.call(this,e,t),this.$singleCommand=!1}var r=e("../lib/keys"),i=e("../lib/useragent"),s=r.KEY_MODS;u.prototype=o.prototype,function(){function e(e){return typeof e=="object"&&e.bindKey&&e.bindKey.position||(e.isDefault?-100:0)}this.addCommand=function(e){this.commands[e.name]&&this.removeCommand(e),this.commands[e.name]=e,e.bindKey&&this._buildKeyHash(e)},this.removeCommand=function(e,t){var n=e&&(typeof e=="string"?e:e.name);e=this.commands[n],t||delete this.commands[n];var r=this.commandKeyBinding;for(var i in r){var s=r[i];if(s==e)delete r[i];else if(Array.isArray(s)){var o=s.indexOf(e);o!=-1&&(s.splice(o,1),s.length==1&&(r[i]=s[0]))}}},this.bindKey=function(e,t,n){typeof e=="object"&&e&&(n==undefined&&(n=e.position),e=e[this.platform]);if(!e)return;if(typeof t=="function")return this.addCommand({exec:t,bindKey:e,name:t.name||e});e.split("|").forEach(function(e){var r="";if(e.indexOf(" ")!=-1){var i=e.split(/\s+/);e=i.pop(),i.forEach(function(e){var t=this.parseKeys(e),n=s[t.hashId]+t.key;r+=(r?" ":"")+n,this._addCommandToBinding(r,"chainKeys")},this),r+=" "}var o=this.parseKeys(e),u=s[o.hashId]+o.key;this._addCommandToBinding(r+u,t,n)},this)},this._addCommandToBinding=function(t,n,r){var i=this.commandKeyBinding,s;if(!n)delete i[t];else if(!i[t]||this.$singleCommand)i[t]=n;else{Array.isArray(i[t])?(s=i[t].indexOf(n))!=-1&&i[t].splice(s,1):i[t]=[i[t]],typeof r!="number"&&(r=e(n));var o=i[t];for(s=0;s<o.length;s++){var u=o[s],a=e(u);if(a>r)break}o.splice(s,0,n)}},this.addCommands=function(e){e&&Object.keys(e).forEach(function(t){var n=e[t];if(!n)return;if(typeof n=="string")return this.bindKey(n,t);typeof n=="function"&&(n={exec:n});if(typeof n!="object")return;n.name||(n.name=t),this.addCommand(n)},this)},this.removeCommands=function(e){Object.keys(e).forEach(function(t){this.removeCommand(e[t])},this)},this.bindKeys=function(e){Object.keys(e).forEach(function(t){this.bindKey(t,e[t])},this)},this._buildKeyHash=function(e){this.bindKey(e.bindKey,e)},this.parseKeys=function(e){var t=e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(e){return e}),n=t.pop(),i=r[n];if(r.FUNCTION_KEYS[i])n=r.FUNCTION_KEYS[i].toLowerCase();else{if(!t.length)return{key:n,hashId:-1};if(t.length==1&&t[0]=="shift")return{key:n.toUpperCase(),hashId:-1}}var s=0;for(var o=t.length;o--;){var u=r.KEY_MODS[t[o]];if(u==null)return typeof console!="undefined"&&console.error("invalid modifier "+t[o]+" in "+e),!1;s|=u}return{key:n,hashId:s}},this.findKeyCommand=function(t,n){var r=s[t]+n;return this.commandKeyBinding[r]},this.handleKeyboard=function(e,t,n,r){if(r<0)return;var i=s[t]+n,o=this.commandKeyBinding[i];e.$keyChain&&(e.$keyChain+=" "+i,o=this.commandKeyBinding[e.$keyChain]||o);if(o)if(o=="chainKeys"||o[o.length-1]=="chainKeys")return e.$keyChain=e.$keyChain||i,{command:"null"};if(e.$keyChain)if(!!t&&t!=4||n.length!=1){if(t==-1||r>0)e.$keyChain=""}else e.$keyChain=e.$keyChain.slice(0,-i.length-1);return{command:o}},this.getStatusText=function(e,t){return t.$keyChain||""}}.call(o.prototype),t.HashHandler=o,t.MultiHashHandler=u}),ace.define("ace/commands/command_manager",["require","exports","module","ace/lib/oop","ace/keyboard/hash_handler","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("../keyboard/hash_handler").MultiHashHandler,s=e("../lib/event_emitter").EventEmitter,o=function(e,t){i.call(this,t,e),this.byName=this.commands,this.setDefaultHandler("exec",function(e){return e.command.exec(e.editor,e.args||{})})};r.inherits(o,i),function(){r.implement(this,s),this.exec=function(e,t,n){if(Array.isArray(e)){for(var r=e.length;r--;)if(this.exec(e[r],t,n))return!0;return!1}typeof e=="string"&&(e=this.commands[e]);if(!e)return!1;if(t&&t.$readOnly&&!e.readOnly)return!1;if(this.$checkCommandState!=0&&e.isAvailable&&!e.isAvailable(t))return!1;var i={editor:t,command:e,args:n};return i.returnValue=this._emit("exec",i),this._signal("afterExec",i),i.returnValue===!1?!1:!0},this.toggleRecording=function(e){if(this.$inReplay)return;return e&&e._emit("changeStatus"),this.recording?(this.macro.pop(),this.off("exec",this.$addCommandToMacro),this.macro.length||(this.macro=this.oldMacro),this.recording=!1):(this.$addCommandToMacro||(this.$addCommandToMacro=function(e){this.macro.push([e.command,e.args])}.bind(this)),this.oldMacro=this.macro,this.macro=[],this.on("exec",this.$addCommandToMacro),this.recording=!0)},this.replay=function(e){if(this.$inReplay||!this.macro)return;if(this.recording)return this.toggleRecording(e);try{this.$inReplay=!0,this.macro.forEach(function(t){typeof t=="string"?this.exec(t,e):this.exec(t[0],e,t[1])},this)}finally{this.$inReplay=!1}},this.trimMacro=function(e){return e.map(function(e){return typeof e[0]!="string"&&(e[0]=e[0].name),e[1]||(e=e[0]),e})}}.call(o.prototype),t.CommandManager=o}),ace.define("ace/commands/default_commands",["require","exports","module","ace/lib/lang","ace/config","ace/range"],function(e,t,n){"use strict";function o(e,t){return{win:e,mac:t}}var r=e("../lib/lang"),i=e("../config"),s=e("../range").Range;t.commands=[{name:"showSettingsMenu",bindKey:o("Ctrl-,","Command-,"),exec:function(e){i.loadModule("ace/ext/settings_menu",function(t){t.init(e),e.showSettingsMenu()})},readOnly:!0},{name:"goToNextError",bindKey:o("Alt-E","F4"),exec:function(e){i.loadModule("./ext/error_marker",function(t){t.showErrorMarker(e,1)})},scrollIntoView:"animate",readOnly:!0},{name:"goToPreviousError",bindKey:o("Alt-Shift-E","Shift-F4"),exec:function(e){i.loadModule("./ext/error_marker",function(t){t.showErrorMarker(e,-1)})},scrollIntoView:"animate",readOnly:!0},{name:"selectall",description:"Select all",bindKey:o("Ctrl-A","Command-A"),exec:function(e){e.selectAll()},readOnly:!0},{name:"centerselection",description:"Center selection",bindKey:o(null,"Ctrl-L"),exec:function(e){e.centerSelection()},readOnly:!0},{name:"gotoline",description:"Go to line...",bindKey:o("Ctrl-L","Command-L"),exec:function(e,t){typeof t=="number"&&!isNaN(t)&&e.gotoLine(t),e.prompt({$type:"gotoLine"})},readOnly:!0},{name:"fold",bindKey:o("Alt-L|Ctrl-F1","Command-Alt-L|Command-F1"),exec:function(e){e.session.toggleFold(!1)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"unfold",bindKey:o("Alt-Shift-L|Ctrl-Shift-F1","Command-Alt-Shift-L|Command-Shift-F1"),exec:function(e){e.session.toggleFold(!0)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"toggleFoldWidget",bindKey:o("F2","F2"),exec:function(e){e.session.toggleFoldWidget()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"toggleParentFoldWidget",bindKey:o("Alt-F2","Alt-F2"),exec:function(e){e.session.toggleFoldWidget(!0)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"foldall",description:"Fold all",bindKey:o(null,"Ctrl-Command-Option-0"),exec:function(e){e.session.foldAll()},scrollIntoView:"center",readOnly:!0},{name:"foldAllComments",description:"Fold all comments",bindKey:o(null,"Ctrl-Command-Option-0"),exec:function(e){e.session.foldAllComments()},scrollIntoView:"center",readOnly:!0},{name:"foldOther",description:"Fold other",bindKey:o("Alt-0","Command-Option-0"),exec:function(e){e.session.foldAll(),e.session.unfold(e.selection.getAllRanges())},scrollIntoView:"center",readOnly:!0},{name:"unfoldall",description:"Unfold all",bindKey:o("Alt-Shift-0","Command-Option-Shift-0"),exec:function(e){e.session.unfold()},scrollIntoView:"center",readOnly:!0},{name:"findnext",description:"Find next",bindKey:o("Ctrl-K","Command-G"),exec:function(e){e.findNext()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"findprevious",description:"Find previous",bindKey:o("Ctrl-Shift-K","Command-Shift-G"),exec:function(e){e.findPrevious()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"selectOrFindNext",description:"Select or find next",bindKey:o("Alt-K","Ctrl-G"),exec:function(e){e.selection.isEmpty()?e.selection.selectWord():e.findNext()},readOnly:!0},{name:"selectOrFindPrevious",description:"Select or find previous",bindKey:o("Alt-Shift-K","Ctrl-Shift-G"),exec:function(e){e.selection.isEmpty()?e.selection.selectWord():e.findPrevious()},readOnly:!0},{name:"find",description:"Find",bindKey:o("Ctrl-F","Command-F"),exec:function(e){i.loadModule("ace/ext/searchbox",function(t){t.Search(e)})},readOnly:!0},{name:"overwrite",description:"Overwrite",bindKey:"Insert",exec:function(e){e.toggleOverwrite()},readOnly:!0},{name:"selecttostart",description:"Select to start",bindKey:o("Ctrl-Shift-Home","Command-Shift-Home|Command-Shift-Up"),exec:function(e){e.getSelection().selectFileStart()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotostart",description:"Go to start",bindKey:o("Ctrl-Home","Command-Home|Command-Up"),exec:function(e){e.navigateFileStart()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectup",description:"Select up",bindKey:o("Shift-Up","Shift-Up|Ctrl-Shift-P"),exec:function(e){e.getSelection().selectUp()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"golineup",description:"Go line up",bindKey:o("Up","Up|Ctrl-P"),exec:function(e,t){e.navigateUp(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttoend",description:"Select to end",bindKey:o("Ctrl-Shift-End","Command-Shift-End|Command-Shift-Down"),exec:function(e){e.getSelection().selectFileEnd()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotoend",description:"Go to end",bindKey:o("Ctrl-End","Command-End|Command-Down"),exec:function(e){e.navigateFileEnd()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectdown",description:"Select down",bindKey:o("Shift-Down","Shift-Down|Ctrl-Shift-N"),exec:function(e){e.getSelection().selectDown()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"golinedown",description:"Go line down",bindKey:o("Down","Down|Ctrl-N"),exec:function(e,t){e.navigateDown(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectwordleft",description:"Select word left",bindKey:o("Ctrl-Shift-Left","Option-Shift-Left"),exec:function(e){e.getSelection().selectWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotowordleft",description:"Go to word left",bindKey:o("Ctrl-Left","Option-Left"),exec:function(e){e.navigateWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttolinestart",description:"Select to line start",bindKey:o("Alt-Shift-Left","Command-Shift-Left|Ctrl-Shift-A"),exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotolinestart",description:"Go to line start",bindKey:o("Alt-Left|Home","Command-Left|Home|Ctrl-A"),exec:function(e){e.navigateLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectleft",description:"Select left",bindKey:o("Shift-Left","Shift-Left|Ctrl-Shift-B"),exec:function(e){e.getSelection().selectLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotoleft",description:"Go to left",bindKey:o("Left","Left|Ctrl-B"),exec:function(e,t){e.navigateLeft(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectwordright",description:"Select word right",bindKey:o("Ctrl-Shift-Right","Option-Shift-Right"),exec:function(e){e.getSelection().selectWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotowordright",description:"Go to word right",bindKey:o("Ctrl-Right","Option-Right"),exec:function(e){e.navigateWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttolineend",description:"Select to line end",bindKey:o("Alt-Shift-Right","Command-Shift-Right|Shift-End|Ctrl-Shift-E"),exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotolineend",description:"Go to line end",bindKey:o("Alt-Right|End","Command-Right|End|Ctrl-E"),exec:function(e){e.navigateLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectright",description:"Select right",bindKey:o("Shift-Right","Shift-Right"),exec:function(e){e.getSelection().selectRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotoright",description:"Go to right",bindKey:o("Right","Right|Ctrl-F"),exec:function(e,t){e.navigateRight(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectpagedown",description:"Select page down",bindKey:"Shift-PageDown",exec:function(e){e.selectPageDown()},readOnly:!0},{name:"pagedown",description:"Page down",bindKey:o(null,"Option-PageDown"),exec:function(e){e.scrollPageDown()},readOnly:!0},{name:"gotopagedown",description:"Go to page down",bindKey:o("PageDown","PageDown|Ctrl-V"),exec:function(e){e.gotoPageDown()},readOnly:!0},{name:"selectpageup",description:"Select page up",bindKey:"Shift-PageUp",exec:function(e){e.selectPageUp()},readOnly:!0},{name:"pageup",description:"Page up",bindKey:o(null,"Option-PageUp"),exec:function(e){e.scrollPageUp()},readOnly:!0},{name:"gotopageup",description:"Go to page up",bindKey:"PageUp",exec:function(e){e.gotoPageUp()},readOnly:!0},{name:"scrollup",description:"Scroll up",bindKey:o("Ctrl-Up",null),exec:function(e){e.renderer.scrollBy(0,-2*e.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"scrolldown",description:"Scroll down",bindKey:o("Ctrl-Down",null),exec:function(e){e.renderer.scrollBy(0,2*e.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"selectlinestart",description:"Select line start",bindKey:"Shift-Home",exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectlineend",description:"Select line end",bindKey:"Shift-End",exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"togglerecording",description:"Toggle recording",bindKey:o("Ctrl-Alt-E","Command-Option-E"),exec:function(e){e.commands.toggleRecording(e)},readOnly:!0},{name:"replaymacro",description:"Replay macro",bindKey:o("Ctrl-Shift-E","Command-Shift-E"),exec:function(e){e.commands.replay(e)},readOnly:!0},{name:"jumptomatching",description:"Jump to matching",bindKey:o("Ctrl-\\|Ctrl-P","Command-\\"),exec:function(e){e.jumpToMatching()},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"selecttomatching",description:"Select to matching",bindKey:o("Ctrl-Shift-\\|Ctrl-Shift-P","Command-Shift-\\"),exec:function(e){e.jumpToMatching(!0)},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"expandToMatching",description:"Expand to matching",bindKey:o("Ctrl-Shift-M","Ctrl-Shift-M"),exec:function(e){e.jumpToMatching(!0,!0)},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"passKeysToBrowser",description:"Pass keys to browser",bindKey:o(null,null),exec:function(){},passEvent:!0,readOnly:!0},{name:"copy",description:"Copy",exec:function(e){},readOnly:!0},{name:"cut",description:"Cut",exec:function(e){var t=e.$copyWithEmptySelection&&e.selection.isEmpty(),n=t?e.selection.getLineRange():e.selection.getRange();e._emit("cut",n),n.isEmpty()||e.session.remove(n),e.clearSelection()},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"paste",description:"Paste",exec:function(e,t){e.$handlePaste(t)},scrollIntoView:"cursor"},{name:"removeline",description:"Remove line",bindKey:o("Ctrl-D","Command-D"),exec:function(e){e.removeLines()},scrollIntoView:"cursor",multiSelectAction:"forEachLine"},{name:"duplicateSelection",description:"Duplicate selection",bindKey:o("Ctrl-Shift-D","Command-Shift-D"),exec:function(e){e.duplicateSelection()},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"sortlines",description:"Sort lines",bindKey:o("Ctrl-Alt-S","Command-Alt-S"),exec:function(e){e.sortLines()},scrollIntoView:"selection",multiSelectAction:"forEachLine"},{name:"togglecomment",description:"Toggle comment",bindKey:o("Ctrl-/","Command-/"),exec:function(e){e.toggleCommentLines()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"toggleBlockComment",description:"Toggle block comment",bindKey:o("Ctrl-Shift-/","Command-Shift-/"),exec:function(e){e.toggleBlockComment()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"modifyNumberUp",description:"Modify number up",bindKey:o("Ctrl-Shift-Up","Alt-Shift-Up"),exec:function(e){e.modifyNumber(1)},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"modifyNumberDown",description:"Modify number down",bindKey:o("Ctrl-Shift-Down","Alt-Shift-Down"),exec:function(e){e.modifyNumber(-1)},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"replace",description:"Replace",bindKey:o("Ctrl-H","Command-Option-F"),exec:function(e){i.loadModule("ace/ext/searchbox",function(t){t.Search(e,!0)})}},{name:"undo",description:"Undo",bindKey:o("Ctrl-Z","Command-Z"),exec:function(e){e.undo()}},{name:"redo",description:"Redo",bindKey:o("Ctrl-Shift-Z|Ctrl-Y","Command-Shift-Z|Command-Y"),exec:function(e){e.redo()}},{name:"copylinesup",description:"Copy lines up",bindKey:o("Alt-Shift-Up","Command-Option-Up"),exec:function(e){e.copyLinesUp()},scrollIntoView:"cursor"},{name:"movelinesup",description:"Move lines up",bindKey:o("Alt-Up","Option-Up"),exec:function(e){e.moveLinesUp()},scrollIntoView:"cursor"},{name:"copylinesdown",description:"Copy lines down",bindKey:o("Alt-Shift-Down","Command-Option-Down"),exec:function(e){e.copyLinesDown()},scrollIntoView:"cursor"},{name:"movelinesdown",description:"Move lines down",bindKey:o("Alt-Down","Option-Down"),exec:function(e){e.moveLinesDown()},scrollIntoView:"cursor"},{name:"del",description:"Delete",bindKey:o("Delete","Delete|Ctrl-D|Shift-Delete"),exec:function(e){e.remove("right")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"backspace",description:"Backspace",bindKey:o("Shift-Backspace|Backspace","Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),exec:function(e){e.remove("left")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"cut_or_delete",description:"Cut or delete",bindKey:o("Shift-Delete",null),exec:function(e){if(!e.selection.isEmpty())return!1;e.remove("left")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolinestart",description:"Remove to line start",bindKey:o("Alt-Backspace","Command-Backspace"),exec:function(e){e.removeToLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolineend",description:"Remove to line end",bindKey:o("Alt-Delete","Ctrl-K|Command-Delete"),exec:function(e){e.removeToLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolinestarthard",description:"Remove to line start hard",bindKey:o("Ctrl-Shift-Backspace",null),exec:function(e){var t=e.selection.getRange();t.start.column=0,e.session.remove(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolineendhard",description:"Remove to line end hard",bindKey:o("Ctrl-Shift-Delete",null),exec:function(e){var t=e.selection.getRange();t.end.column=Number.MAX_VALUE,e.session.remove(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordleft",description:"Remove word left",bindKey:o("Ctrl-Backspace","Alt-Backspace|Ctrl-Alt-Backspace"),exec:function(e){e.removeWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordright",description:"Remove word right",bindKey:o("Ctrl-Delete","Alt-Delete"),exec:function(e){e.removeWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"outdent",description:"Outdent",bindKey:o("Shift-Tab","Shift-Tab"),exec:function(e){e.blockOutdent()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"indent",description:"Indent",bindKey:o("Tab","Tab"),exec:function(e){e.indent()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"blockoutdent",description:"Block outdent",bindKey:o("Ctrl-[","Ctrl-["),exec:function(e){e.blockOutdent()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"blockindent",description:"Block indent",bindKey:o("Ctrl-]","Ctrl-]"),exec:function(e){e.blockIndent()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"insertstring",description:"Insert string",exec:function(e,t){e.insert(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"inserttext",description:"Insert text",exec:function(e,t){e.insert(r.stringRepeat(t.text||"",t.times||1))},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"splitline",description:"Split line",bindKey:o(null,"Ctrl-O"),exec:function(e){e.splitLine()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"transposeletters",description:"Transpose letters",bindKey:o("Alt-Shift-X","Ctrl-T"),exec:function(e){e.transposeLetters()},multiSelectAction:function(e){e.transposeSelections(1)},scrollIntoView:"cursor"},{name:"touppercase",description:"To uppercase",bindKey:o("Ctrl-U","Ctrl-U"),exec:function(e){e.toUpperCase()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"tolowercase",description:"To lowercase",bindKey:o("Ctrl-Shift-U","Ctrl-Shift-U"),exec:function(e){e.toLowerCase()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"autoindent",description:"Auto Indent",bindKey:o(null,null),exec:function(e){e.autoIndent()},multiSelectAction:"forEachLine",scrollIntoView:"animate"},{name:"expandtoline",description:"Expand to line",bindKey:o("Ctrl-Shift-L","Command-Shift-L"),exec:function(e){var t=e.selection.getRange();t.start.column=t.end.column=0,t.end.row++,e.selection.setRange(t,!1)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"joinlines",description:"Join lines",bindKey:o(null,null),exec:function(e){var t=e.selection.isBackwards(),n=t?e.selection.getSelectionLead():e.selection.getSelectionAnchor(),i=t?e.selection.getSelectionAnchor():e.selection.getSelectionLead(),o=e.session.doc.getLine(n.row).length,u=e.session.doc.getTextRange(e.selection.getRange()),a=u.replace(/\n\s*/," ").length,f=e.session.doc.getLine(n.row);for(var l=n.row+1;l<=i.row+1;l++){var c=r.stringTrimLeft(r.stringTrimRight(e.session.doc.getLine(l)));c.length!==0&&(c=" "+c),f+=c}i.row+1<e.session.doc.getLength()-1&&(f+=e.session.doc.getNewLineCharacter()),e.clearSelection(),e.session.doc.replace(new s(n.row,0,i.row+2,0),f),a>0?(e.selection.moveCursorTo(n.row,n.column),e.selection.selectTo(n.row,n.column+a)):(o=e.session.doc.getLine(n.row).length>o?o+1:o,e.selection.moveCursorTo(n.row,o))},multiSelectAction:"forEach",readOnly:!0},{name:"invertSelection",description:"Invert selection",bindKey:o(null,null),exec:function(e){var t=e.session.doc.getLength()-1,n=e.session.doc.getLine(t).length,r=e.selection.rangeList.ranges,i=[];r.length<1&&(r=[e.selection.getRange()]);for(var o=0;o<r.length;o++)o==r.length-1&&(r[o].end.row!==t||r[o].end.column!==n)&&i.push(new s(r[o].end.row,r[o].end.column,t,n)),o===0?(r[o].start.row!==0||r[o].start.column!==0)&&i.push(new s(0,0,r[o].start.row,r[o].start.column)):i.push(new s(r[o-1].end.row,r[o-1].end.column,r[o].start.row,r[o].start.column));e.exitMultiSelectMode(),e.clearSelection();for(var o=0;o<i.length;o++)e.selection.addRange(i[o],!1)},readOnly:!0,scrollIntoView:"none"},{name:"addLineAfter",exec:function(e){e.selection.clearSelection(),e.navigateLineEnd(),e.insert("\n")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"addLineBefore",exec:function(e){e.selection.clearSelection();var t=e.getCursorPosition();e.selection.moveTo(t.row-1,Number.MAX_VALUE),e.insert("\n"),t.row===0&&e.navigateUp()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"openCommandPallete",description:"Open command pallete",bindKey:o("F1","F1"),exec:function(e){e.prompt({$type:"commands"})},readOnly:!0},{name:"modeSelect",description:"Change language mode...",bindKey:o(null,null),exec:function(e){e.prompt({$type:"modes"})},readOnly:!0}];for(var u=1;u<9;u++)t.commands.push({name:"foldToLevel"+u,description:"Fold To Level "+u,level:u,exec:function(e){e.session.foldToLevel(this.level)},scrollIntoView:"center",readOnly:!0})}),ace.define("ace/editor",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/keyboard/textinput","ace/mouse/mouse_handler","ace/mouse/fold_handler","ace/keyboard/keybinding","ace/edit_session","ace/search","ace/range","ace/lib/event_emitter","ace/commands/command_manager","ace/commands/default_commands","ace/config","ace/token_iterator","ace/clipboard"],function(e,t,n){"use strict";e("./lib/fixoldbrowsers");var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./lib/lang"),o=e("./lib/useragent"),u=e("./keyboard/textinput").TextInput,a=e("./mouse/mouse_handler").MouseHandler,f=e("./mouse/fold_handler").FoldHandler,l=e("./keyboard/keybinding").KeyBinding,c=e("./edit_session").EditSession,h=e("./search").Search,p=e("./range").Range,d=e("./lib/event_emitter").EventEmitter,v=e("./commands/command_manager").CommandManager,m=e("./commands/default_commands").commands,g=e("./config"),y=e("./token_iterator").TokenIterator,b=e("./clipboard"),w=function(e,t,n){this.$toDestroy=[];var r=e.getContainerElement();this.container=r,this.renderer=e,this.id="editor"+ ++w.$uid,this.commands=new v(o.isMac?"mac":"win",m),typeof document=="object"&&(this.textInput=new u(e.getTextAreaContainer(),this),this.renderer.textarea=this.textInput.getElement(),this.$mouseHandler=new a(this),new f(this)),this.keyBinding=new l(this),this.$search=(new h).set({wrap:!0}),this.$historyTracker=this.$historyTracker.bind(this),this.commands.on("exec",this.$historyTracker),this.$initOperationListeners(),this._$emitInputEvent=s.delayedCall(function(){this._signal("input",{}),this.session&&this.session.bgTokenizer&&this.session.bgTokenizer.scheduleStart()}.bind(this)),this.on("change",function(e,t){t._$emitInputEvent.schedule(31)}),this.setSession(t||n&&n.session||new c("")),g.resetOptions(this),n&&this.setOptions(n),g._signal("editor",this)};w.$uid=0,function(){r.implement(this,d),this.$initOperationListeners=function(){this.commands.on("exec",this.startOperation.bind(this),!0),this.commands.on("afterExec",this.endOperation.bind(this),!0),this.$opResetTimer=s.delayedCall(this.endOperation.bind(this,!0)),this.on("change",function(){this.curOp||(this.startOperation(),this.curOp.selectionBefore=this.$lastSel),this.curOp.docChanged=!0}.bind(this),!0),this.on("changeSelection",function(){this.curOp||(this.startOperation(),this.curOp.selectionBefore=this.$lastSel),this.curOp.selectionChanged=!0}.bind(this),!0)},this.curOp=null,this.prevOp={},this.startOperation=function(e){if(this.curOp){if(!e||this.curOp.command)return;this.prevOp=this.curOp}e||(this.previousCommand=null,e={}),this.$opResetTimer.schedule(),this.curOp=this.session.curOp={command:e.command||{},args:e.args,scrollTop:this.renderer.scrollTop},this.curOp.selectionBefore=this.selection.toJSON()},this.endOperation=function(e){if(this.curOp&&this.session){if(e&&e.returnValue===!1||!this.session)return this.curOp=null;if(e==1&&this.curOp.command&&this.curOp.command.name=="mouse")return;this._signal("beforeEndOperation");if(!this.curOp)return;var t=this.curOp.command,n=t&&t.scrollIntoView;if(n){switch(n){case"center-animate":n="animate";case"center":this.renderer.scrollCursorIntoView(null,.5);break;case"animate":case"cursor":this.renderer.scrollCursorIntoView();break;case"selectionPart":var r=this.selection.getRange(),i=this.renderer.layerConfig;(r.start.row>=i.lastRow||r.end.row<=i.firstRow)&&this.renderer.scrollSelectionIntoView(this.selection.anchor,this.selection.lead);break;default:}n=="animate"&&this.renderer.animateScrolling(this.curOp.scrollTop)}var s=this.selection.toJSON();this.curOp.selectionAfter=s,this.$lastSel=this.selection.toJSON(),this.session.getUndoManager().addSelection(s),this.prevOp=this.curOp,this.curOp=null}},this.$mergeableCommands=["backspace","del","insertstring"],this.$historyTracker=function(e){if(!this.$mergeUndoDeltas)return;var t=this.prevOp,n=this.$mergeableCommands,r=t.command&&e.command.name==t.command.name;if(e.command.name=="insertstring"){var i=e.args;this.mergeNextCommand===undefined&&(this.mergeNextCommand=!0),r=r&&this.mergeNextCommand&&(!/\s/.test(i)||/\s/.test(t.args)),this.mergeNextCommand=!0}else r=r&&n.indexOf(e.command.name)!==-1;this.$mergeUndoDeltas!="always"&&Date.now()-this.sequenceStartTime>2e3&&(r=!1),r?this.session.mergeUndoDeltas=!0:n.indexOf(e.command.name)!==-1&&(this.sequenceStartTime=Date.now())},this.setKeyboardHandler=function(e,t){if(e&&typeof e=="string"&&e!="ace"){this.$keybindingId=e;var n=this;g.loadModule(["keybinding",e],function(r){n.$keybindingId==e&&n.keyBinding.setKeyboardHandler(r&&r.handler),t&&t()})}else this.$keybindingId=null,this.keyBinding.setKeyboardHandler(e),t&&t()},this.getKeyboardHandler=function(){return this.keyBinding.getKeyboardHandler()},this.setSession=function(e){if(this.session==e)return;this.curOp&&this.endOperation(),this.curOp={};var t=this.session;if(t){this.session.off("change",this.$onDocumentChange),this.session.off("changeMode",this.$onChangeMode),this.session.off("tokenizerUpdate",this.$onTokenizerUpdate),this.session.off("changeTabSize",this.$onChangeTabSize),this.session.off("changeWrapLimit",this.$onChangeWrapLimit),this.session.off("changeWrapMode",this.$onChangeWrapMode),this.session.off("changeFold",this.$onChangeFold),this.session.off("changeFrontMarker",this.$onChangeFrontMarker),this.session.off("changeBackMarker",this.$onChangeBackMarker),this.session.off("changeBreakpoint",this.$onChangeBreakpoint),this.session.off("changeAnnotation",this.$onChangeAnnotation),this.session.off("changeOverwrite",this.$onCursorChange),this.session.off("changeScrollTop",this.$onScrollTopChange),this.session.off("changeScrollLeft",this.$onScrollLeftChange);var n=this.session.getSelection();n.off("changeCursor",this.$onCursorChange),n.off("changeSelection",this.$onSelectionChange)}this.session=e,e?(this.$onDocumentChange=this.onDocumentChange.bind(this),e.on("change",this.$onDocumentChange),this.renderer.setSession(e),this.$onChangeMode=this.onChangeMode.bind(this),e.on("changeMode",this.$onChangeMode),this.$onTokenizerUpdate=this.onTokenizerUpdate.bind(this),e.on("tokenizerUpdate",this.$onTokenizerUpdate),this.$onChangeTabSize=this.renderer.onChangeTabSize.bind(this.renderer),e.on("changeTabSize",this.$onChangeTabSize),this.$onChangeWrapLimit=this.onChangeWrapLimit.bind(this),e.on("changeWrapLimit",this.$onChangeWrapLimit),this.$onChangeWrapMode=this.onChangeWrapMode.bind(this),e.on("changeWrapMode",this.$onChangeWrapMode),this.$onChangeFold=this.onChangeFold.bind(this),e.on("changeFold",this.$onChangeFold),this.$onChangeFrontMarker=this.onChangeFrontMarker.bind(this),this.session.on("changeFrontMarker",this.$onChangeFrontMarker),this.$onChangeBackMarker=this.onChangeBackMarker.bind(this),this.session.on("changeBackMarker",this.$onChangeBackMarker),this.$onChangeBreakpoint=this.onChangeBreakpoint.bind(this),this.session.on("changeBreakpoint",this.$onChangeBreakpoint),this.$onChangeAnnotation=this.onChangeAnnotation.bind(this),this.session.on("changeAnnotation",this.$onChangeAnnotation),this.$onCursorChange=this.onCursorChange.bind(this),this.session.on("changeOverwrite",this.$onCursorChange),this.$onScrollTopChange=this.onScrollTopChange.bind(this),this.session.on("changeScrollTop",this.$onScrollTopChange),this.$onScrollLeftChange=this.onScrollLeftChange.bind(this),this.session.on("changeScrollLeft",this.$onScrollLeftChange),this.selection=e.getSelection(),this.selection.on("changeCursor",this.$onCursorChange),this.$onSelectionChange=this.onSelectionChange.bind(this),this.selection.on("changeSelection",this.$onSelectionChange),this.onChangeMode(),this.onCursorChange(),this.onScrollTopChange(),this.onScrollLeftChange(),this.onSelectionChange(),this.onChangeFrontMarker(),this.onChangeBackMarker(),this.onChangeBreakpoint(),this.onChangeAnnotation(),this.session.getUseWrapMode()&&this.renderer.adjustWrapLimit(),this.renderer.updateFull()):(this.selection=null,this.renderer.setSession(e)),this._signal("changeSession",{session:e,oldSession:t}),this.curOp=null,t&&t._signal("changeEditor",{oldEditor:this}),e&&e._signal("changeEditor",{editor:this}),e&&e.bgTokenizer&&e.bgTokenizer.scheduleStart()},this.getSession=function(){return this.session},this.setValue=function(e,t){return this.session.doc.setValue(e),t?t==1?this.navigateFileEnd():t==-1&&this.navigateFileStart():this.selectAll(),e},this.getValue=function(){return this.session.getValue()},this.getSelection=function(){return this.selection},this.resize=function(e){this.renderer.onResize(e)},this.setTheme=function(e,t){this.renderer.setTheme(e,t)},this.getTheme=function(){return this.renderer.getTheme()},this.setStyle=function(e){this.renderer.setStyle(e)},this.unsetStyle=function(e){this.renderer.unsetStyle(e)},this.getFontSize=function(){return this.getOption("fontSize")||i.computedStyle(this.container).fontSize},this.setFontSize=function(e){this.setOption("fontSize",e)},this.$highlightBrackets=function(){if(this.$highlightPending)return;var e=this;this.$highlightPending=!0,setTimeout(function(){e.$highlightPending=!1;var t=e.session;if(!t||!t.bgTokenizer)return;t.$bracketHighlight&&(t.$bracketHighlight.markerIds.forEach(function(e){t.removeMarker(e)}),t.$bracketHighlight=null);var n=t.getMatchingBracketRanges(e.getCursorPosition());!n&&t.$mode.getMatching&&(n=t.$mode.getMatching(e.session));if(!n)return;var r="ace_bracket";Array.isArray(n)?n.length==1&&(r="ace_error_bracket"):n=[n],n.length==2&&(p.comparePoints(n[0].end,n[1].start)==0?n=[p.fromPoints(n[0].start,n[1].end)]:p.comparePoints(n[0].start,n[1].end)==0&&(n=[p.fromPoints(n[1].start,n[0].end)])),t.$bracketHighlight={ranges:n,markerIds:n.map(function(e){return t.addMarker(e,r,"text")})}},50)},this.$highlightTags=function(){if(this.$highlightTagPending)return;var e=this;this.$highlightTagPending=!0,setTimeout(function(){e.$highlightTagPending=!1;var t=e.session;if(!t||!t.bgTokenizer)return;var n=e.getCursorPosition(),r=new y(e.session,n.row,n.column),i=r.getCurrentToken();if(!i||!/\b(?:tag-open|tag-name)/.test(i.type)){t.removeMarker(t.$tagHighlight),t.$tagHighlight=null;return}if(i.type.indexOf("tag-open")!==-1){i=r.stepForward();if(!i)return}var s=i.value,o=i.value,u=0,a=r.stepBackward();if(a.value==="<"){do a=i,i=r.stepForward(),i&&(i.type.indexOf("tag-name")!==-1?(o=i.value,s===o&&(a.value==="<"?u++:a.value==="</"&&u--)):s===o&&i.value==="/>"&&u--);while(i&&u>=0)}else{do{i=a,a=r.stepBackward();if(i)if(i.type.indexOf("tag-name")!==-1)s===i.value&&(a.value==="<"?u++:a.value==="</"&&u--);else if(i.value==="/>"){var f=0,l=a;while(l){if(l.type.indexOf("tag-name")!==-1&&l.value===s){u--;break}if(l.value==="<")break;l=r.stepBackward(),f++}for(var c=0;c<f;c++)r.stepForward()}}while(a&&u<=0);r.stepForward()}if(!i){t.removeMarker(t.$tagHighlight),t.$tagHighlight=null;return}var h=r.getCurrentTokenRow(),d=r.getCurrentTokenColumn(),v=new p(h,d,h,d+i.value.length),m=t.$backMarkers[t.$tagHighlight];t.$tagHighlight&&m!=undefined&&v.compareRange(m.range)!==0&&(t.removeMarker(t.$tagHighlight),t.$tagHighlight=null),t.$tagHighlight||(t.$tagHighlight=t.addMarker(v,"ace_bracket","text"))},50)},this.focus=function(){var e=this;setTimeout(function(){e.isFocused()||e.textInput.focus()}),this.textInput.focus()},this.isFocused=function(){return this.textInput.isFocused()},this.blur=function(){this.textInput.blur()},this.onFocus=function(e){if(this.$isFocused)return;this.$isFocused=!0,this.renderer.showCursor(),this.renderer.visualizeFocus(),this._emit("focus",e)},this.onBlur=function(e){if(!this.$isFocused)return;this.$isFocused=!1,this.renderer.hideCursor(),this.renderer.visualizeBlur(),this._emit("blur",e)},this.$cursorChange=function(){this.renderer.updateCursor(),this.$highlightBrackets(),this.$highlightTags(),this.$updateHighlightActiveLine()},this.onDocumentChange=function(e){var t=this.session.$useWrapMode,n=e.start.row==e.end.row?e.end.row:Infinity;this.renderer.updateLines(e.start.row,n,t),this._signal("change",e),this.$cursorChange()},this.onTokenizerUpdate=function(e){var t=e.data;this.renderer.updateLines(t.first,t.last)},this.onScrollTopChange=function(){this.renderer.scrollToY(this.session.getScrollTop())},this.onScrollLeftChange=function(){this.renderer.scrollToX(this.session.getScrollLeft())},this.onCursorChange=function(){this.$cursorChange(),this._signal("changeSelection")},this.$updateHighlightActiveLine=function(){var e=this.getSession(),t;if(this.$highlightActiveLine){if(this.$selectionStyle!="line"||!this.selection.isMultiLine())t=this.getCursorPosition();this.renderer.theme&&this.renderer.theme.$selectionColorConflict&&!this.selection.isEmpty()&&(t=!1),this.renderer.$maxLines&&this.session.getLength()===1&&!(this.renderer.$minLines>1)&&(t=!1)}if(e.$highlightLineMarker&&!t)e.removeMarker(e.$highlightLineMarker.id),e.$highlightLineMarker=null;else if(!e.$highlightLineMarker&&t){var n=new p(t.row,t.column,t.row,Infinity);n.id=e.addMarker(n,"ace_active-line","screenLine"),e.$highlightLineMarker=n}else t&&(e.$highlightLineMarker.start.row=t.row,e.$highlightLineMarker.end.row=t.row,e.$highlightLineMarker.start.column=t.column,e._signal("changeBackMarker"))},this.onSelectionChange=function(e){var t=this.session;t.$selectionMarker&&t.removeMarker(t.$selectionMarker),t.$selectionMarker=null;if(!this.selection.isEmpty()){var n=this.selection.getRange(),r=this.getSelectionStyle();t.$selectionMarker=t.addMarker(n,"ace_selection",r)}else this.$updateHighlightActiveLine();var i=this.$highlightSelectedWord&&this.$getSelectionHighLightRegexp();this.session.highlight(i),this._signal("changeSelection")},this.$getSelectionHighLightRegexp=function(){var e=this.session,t=this.getSelectionRange();if(t.isEmpty()||t.isMultiLine())return;var n=t.start.column,r=t.end.column,i=e.getLine(t.start.row),s=i.substring(n,r);if(s.length>5e3||!/[\w\d]/.test(s))return;var o=this.$search.$assembleRegExp({wholeWord:!0,caseSensitive:!0,needle:s}),u=i.substring(n-1,r+1);if(!o.test(u))return;return o},this.onChangeFrontMarker=function(){this.renderer.updateFrontMarkers()},this.onChangeBackMarker=function(){this.renderer.updateBackMarkers()},this.onChangeBreakpoint=function(){this.renderer.updateBreakpoints()},this.onChangeAnnotation=function(){this.renderer.setAnnotations(this.session.getAnnotations())},this.onChangeMode=function(e){this.renderer.updateText(),this._emit("changeMode",e)},this.onChangeWrapLimit=function(){this.renderer.updateFull()},this.onChangeWrapMode=function(){this.renderer.onResize(!0)},this.onChangeFold=function(){this.$updateHighlightActiveLine(),this.renderer.updateFull()},this.getSelectedText=function(){return this.session.getTextRange(this.getSelectionRange())},this.getCopyText=function(){var e=this.getSelectedText(),t=this.session.doc.getNewLineCharacter(),n=!1;if(!e&&this.$copyWithEmptySelection){n=!0;var r=this.selection.getAllRanges();for(var i=0;i<r.length;i++){var s=r[i];if(i&&r[i-1].start.row==s.start.row)continue;e+=this.session.getLine(s.start.row)+t}}var o={text:e};return this._signal("copy",o),b.lineMode=n?o.text:"",o.text},this.onCopy=function(){this.commands.exec("copy",this)},this.onCut=function(){this.commands.exec("cut",this)},this.onPaste=function(e,t){var n={text:e,event:t};this.commands.exec("paste",this,n)},this.$handlePaste=function(e){typeof e=="string"&&(e={text:e}),this._signal("paste",e);var t=e.text,n=t==b.lineMode,r=this.session;if(!this.inMultiSelectMode||this.inVirtualSelectionMode)n?r.insert({row:this.selection.lead.row,column:0},t):this.insert(t);else if(n)this.selection.rangeList.ranges.forEach(function(e){r.insert({row:e.start.row,column:0},t)});else{var i=t.split(/\r\n|\r|\n/),s=this.selection.rangeList.ranges,o=i.length==2&&(!i[0]||!i[1]);if(i.length!=s.length||o)return this.commands.exec("insertstring",this,t);for(var u=s.length;u--;){var a=s[u];a.isEmpty()||r.remove(a),r.insert(a.start,i[u])}}},this.execCommand=function(e,t){return this.commands.exec(e,this,t)},this.insert=function(e,t){var n=this.session,r=n.getMode(),i=this.getCursorPosition();if(this.getBehavioursEnabled()&&!t){var s=r.transformAction(n.getState(i.row),"insertion",this,n,e);s&&(e!==s.text&&(this.inVirtualSelectionMode||(this.session.mergeUndoDeltas=!1,this.mergeNextCommand=!1)),e=s.text)}e=="	"&&(e=this.session.getTabString());if(!this.selection.isEmpty()){var o=this.getSelectionRange();i=this.session.remove(o),this.clearSelection()}else if(this.session.getOverwrite()&&e.indexOf("\n")==-1){var o=new p.fromPoints(i,i);o.end.column+=e.length,this.session.remove(o)}if(e=="\n"||e=="\r\n"){var u=n.getLine(i.row);if(i.column>u.search(/\S|$/)){var a=u.substr(i.column).search(/\S|$/);n.doc.removeInLine(i.row,i.column,i.column+a)}}this.clearSelection();var f=i.column,l=n.getState(i.row),u=n.getLine(i.row),c=r.checkOutdent(l,u,e);n.insert(i,e),s&&s.selection&&(s.selection.length==2?this.selection.setSelectionRange(new p(i.row,f+s.selection[0],i.row,f+s.selection[1])):this.selection.setSelectionRange(new p(i.row+s.selection[0],s.selection[1],i.row+s.selection[2],s.selection[3])));if(this.$enableAutoIndent){if(n.getDocument().isNewLine(e)){var h=r.getNextLineIndent(l,u.slice(0,i.column),n.getTabString());n.insert({row:i.row+1,column:0},h)}c&&r.autoOutdent(l,n,i.row)}},this.autoIndent=function(){var e=this.session,t=e.getMode(),n,r;if(this.selection.isEmpty())n=0,r=e.doc.getLength()-1;else{var i=this.getSelectionRange();n=i.start.row,r=i.end.row}var s="",o="",u="",a,f,l,c=e.getTabString();for(var h=n;h<=r;h++)h>0&&(s=e.getState(h-1),o=e.getLine(h-1),u=t.getNextLineIndent(s,o,c)),a=e.getLine(h),f=t.$getIndent(a),u!==f&&(f.length>0&&(l=new p(h,0,h,f.length),e.remove(l)),u.length>0&&e.insert({row:h,column:0},u)),t.autoOutdent(s,e,h)},this.onTextInput=function(e,t){if(!t)return this.keyBinding.onTextInput(e);this.startOperation({command:{name:"insertstring"}});var n=this.applyComposition.bind(this,e,t);this.selection.rangeCount?this.forEachSelection(n):n(),this.endOperation()},this.applyComposition=function(e,t){if(t.extendLeft||t.extendRight){var n=this.selection.getRange();n.start.column-=t.extendLeft,n.end.column+=t.extendRight,n.start.column<0&&(n.start.row--,n.start.column+=this.session.getLine(n.start.row).length+1),this.selection.setRange(n),!e&&!n.isEmpty()&&this.remove()}(e||!this.selection.isEmpty())&&this.insert(e,!0);if(t.restoreStart||t.restoreEnd){var n=this.selection.getRange();n.start.column-=t.restoreStart,n.end.column-=t.restoreEnd,this.selection.setRange(n)}},this.onCommandKey=function(e,t,n){return this.keyBinding.onCommandKey(e,t,n)},this.setOverwrite=function(e){this.session.setOverwrite(e)},this.getOverwrite=function(){return this.session.getOverwrite()},this.toggleOverwrite=function(){this.session.toggleOverwrite()},this.setScrollSpeed=function(e){this.setOption("scrollSpeed",e)},this.getScrollSpeed=function(){return this.getOption("scrollSpeed")},this.setDragDelay=function(e){this.setOption("dragDelay",e)},this.getDragDelay=function(){return this.getOption("dragDelay")},this.setSelectionStyle=function(e){this.setOption("selectionStyle",e)},this.getSelectionStyle=function(){return this.getOption("selectionStyle")},this.setHighlightActiveLine=function(e){this.setOption("highlightActiveLine",e)},this.getHighlightActiveLine=function(){return this.getOption("highlightActiveLine")},this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)},this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},this.setHighlightSelectedWord=function(e){this.setOption("highlightSelectedWord",e)},this.getHighlightSelectedWord=function(){return this.$highlightSelectedWord},this.setAnimatedScroll=function(e){this.renderer.setAnimatedScroll(e)},this.getAnimatedScroll=function(){return this.renderer.getAnimatedScroll()},this.setShowInvisibles=function(e){this.renderer.setShowInvisibles(e)},this.getShowInvisibles=function(){return this.renderer.getShowInvisibles()},this.setDisplayIndentGuides=function(e){this.renderer.setDisplayIndentGuides(e)},this.getDisplayIndentGuides=function(){return this.renderer.getDisplayIndentGuides()},this.setShowPrintMargin=function(e){this.renderer.setShowPrintMargin(e)},this.getShowPrintMargin=function(){return this.renderer.getShowPrintMargin()},this.setPrintMarginColumn=function(e){this.renderer.setPrintMarginColumn(e)},this.getPrintMarginColumn=function(){return this.renderer.getPrintMarginColumn()},this.setReadOnly=function(e){this.setOption("readOnly",e)},this.getReadOnly=function(){return this.getOption("readOnly")},this.setBehavioursEnabled=function(e){this.setOption("behavioursEnabled",e)},this.getBehavioursEnabled=function(){return this.getOption("behavioursEnabled")},this.setWrapBehavioursEnabled=function(e){this.setOption("wrapBehavioursEnabled",e)},this.getWrapBehavioursEnabled=function(){return this.getOption("wrapBehavioursEnabled")},this.setShowFoldWidgets=function(e){this.setOption("showFoldWidgets",e)},this.getShowFoldWidgets=function(){return this.getOption("showFoldWidgets")},this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)},this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},this.remove=function(e){this.selection.isEmpty()&&(e=="left"?this.selection.selectLeft():this.selection.selectRight());var t=this.getSelectionRange();if(this.getBehavioursEnabled()){var n=this.session,r=n.getState(t.start.row),i=n.getMode().transformAction(r,"deletion",this,n,t);if(t.end.column===0){var s=n.getTextRange(t);if(s[s.length-1]=="\n"){var o=n.getLine(t.end.row);/^\s+$/.test(o)&&(t.end.column=o.length)}}i&&(t=i)}this.session.remove(t),this.clearSelection()},this.removeWordRight=function(){this.selection.isEmpty()&&this.selection.selectWordRight(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeWordLeft=function(){this.selection.isEmpty()&&this.selection.selectWordLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeToLineStart=function(){this.selection.isEmpty()&&this.selection.selectLineStart(),this.selection.isEmpty()&&this.selection.selectLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeToLineEnd=function(){this.selection.isEmpty()&&this.selection.selectLineEnd();var e=this.getSelectionRange();e.start.column==e.end.column&&e.start.row==e.end.row&&(e.end.column=0,e.end.row++),this.session.remove(e),this.clearSelection()},this.splitLine=function(){this.selection.isEmpty()||(this.session.remove(this.getSelectionRange()),this.clearSelection());var e=this.getCursorPosition();this.insert("\n"),this.moveCursorToPosition(e)},this.transposeLetters=function(){if(!this.selection.isEmpty())return;var e=this.getCursorPosition(),t=e.column;if(t===0)return;var n=this.session.getLine(e.row),r,i;t<n.length?(r=n.charAt(t)+n.charAt(t-1),i=new p(e.row,t-1,e.row,t+1)):(r=n.charAt(t-1)+n.charAt(t-2),i=new p(e.row,t-2,e.row,t)),this.session.replace(i,r),this.session.selection.moveToPosition(i.end)},this.toLowerCase=function(){var e=this.getSelectionRange();this.selection.isEmpty()&&this.selection.selectWord();var t=this.getSelectionRange(),n=this.session.getTextRange(t);this.session.replace(t,n.toLowerCase()),this.selection.setSelectionRange(e)},this.toUpperCase=function(){var e=this.getSelectionRange();this.selection.isEmpty()&&this.selection.selectWord();var t=this.getSelectionRange(),n=this.session.getTextRange(t);this.session.replace(t,n.toUpperCase()),this.selection.setSelectionRange(e)},this.indent=function(){var e=this.session,t=this.getSelectionRange();if(t.start.row<t.end.row){var n=this.$getSelectedRows();e.indentRows(n.first,n.last,"	");return}if(t.start.column<t.end.column){var r=e.getTextRange(t);if(!/^\s+$/.test(r)){var n=this.$getSelectedRows();e.indentRows(n.first,n.last,"	");return}}var i=e.getLine(t.start.row),o=t.start,u=e.getTabSize(),a=e.documentToScreenColumn(o.row,o.column);if(this.session.getUseSoftTabs())var f=u-a%u,l=s.stringRepeat(" ",f);else{var f=a%u;while(i[t.start.column-1]==" "&&f)t.start.column--,f--;this.selection.setSelectionRange(t),l="	"}return this.insert(l)},this.blockIndent=function(){var e=this.$getSelectedRows();this.session.indentRows(e.first,e.last,"	")},this.blockOutdent=function(){var e=this.session.getSelection();this.session.outdentRows(e.getRange())},this.sortLines=function(){var e=this.$getSelectedRows(),t=this.session,n=[];for(var r=e.first;r<=e.last;r++)n.push(t.getLine(r));n.sort(function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0});var i=new p(0,0,0,0);for(var r=e.first;r<=e.last;r++){var s=t.getLine(r);i.start.row=r,i.end.row=r,i.end.column=s.length,t.replace(i,n[r-e.first])}},this.toggleCommentLines=function(){var e=this.session.getState(this.getCursorPosition().row),t=this.$getSelectedRows();this.session.getMode().toggleCommentLines(e,this.session,t.first,t.last)},this.toggleBlockComment=function(){var e=this.getCursorPosition(),t=this.session.getState(e.row),n=this.getSelectionRange();this.session.getMode().toggleBlockComment(t,this.session,n,e)},this.getNumberAt=function(e,t){var n=/[\-]?[0-9]+(?:\.[0-9]+)?/g;n.lastIndex=0;var r=this.session.getLine(e);while(n.lastIndex<t){var i=n.exec(r);if(i.index<=t&&i.index+i[0].length>=t){var s={value:i[0],start:i.index,end:i.index+i[0].length};return s}}return null},this.modifyNumber=function(e){var t=this.selection.getCursor().row,n=this.selection.getCursor().column,r=new p(t,n-1,t,n),i=this.session.getTextRange(r);if(!isNaN(parseFloat(i))&&isFinite(i)){var s=this.getNumberAt(t,n);if(s){var o=s.value.indexOf(".")>=0?s.start+s.value.indexOf(".")+1:s.end,u=s.start+s.value.length-o,a=parseFloat(s.value);a*=Math.pow(10,u),o!==s.end&&n<o?e*=Math.pow(10,s.end-n-1):e*=Math.pow(10,s.end-n),a+=e,a/=Math.pow(10,u);var f=a.toFixed(u),l=new p(t,s.start,t,s.end);this.session.replace(l,f),this.moveCursorTo(t,Math.max(s.start+1,n+f.length-s.value.length))}}else this.toggleWord()},this.$toggleWordPairs=[["first","last"],["true","false"],["yes","no"],["width","height"],["top","bottom"],["right","left"],["on","off"],["x","y"],["get","set"],["max","min"],["horizontal","vertical"],["show","hide"],["add","remove"],["up","down"],["before","after"],["even","odd"],["in","out"],["inside","outside"],["next","previous"],["increase","decrease"],["attach","detach"],["&&","||"],["==","!="]],this.toggleWord=function(){var e=this.selection.getCursor().row,t=this.selection.getCursor().column;this.selection.selectWord();var n=this.getSelectedText(),r=this.selection.getWordRange().start.column,i=n.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g,"$1 ").split(/\s/),o=t-r-1;o<0&&(o=0);var u=0,a=0,f=this;n.match(/[A-Za-z0-9_]+/)&&i.forEach(function(t,i){a=u+t.length,o>=u&&o<=a&&(n=t,f.selection.clearSelection(),f.moveCursorTo(e,u+r),f.selection.selectTo(e,a+r)),u=a});var l=this.$toggleWordPairs,c;for(var h=0;h<l.length;h++){var p=l[h];for(var d=0;d<=1;d++){var v=+!d,m=n.match(new RegExp("^\\s?_?("+s.escapeRegExp(p[d])+")\\s?$","i"));if(m){var g=n.match(new RegExp("([_]|^|\\s)("+s.escapeRegExp(m[1])+")($|\\s)","g"));g&&(c=n.replace(new RegExp(s.escapeRegExp(p[d]),"i"),function(e){var t=p[v];return e.toUpperCase()==e?t=t.toUpperCase():e.charAt(0).toUpperCase()==e.charAt(0)&&(t=t.substr(0,0)+p[v].charAt(0).toUpperCase()+t.substr(1)),t}),this.insert(c),c="")}}}},this.removeLines=function(){var e=this.$getSelectedRows();this.session.removeFullLines(e.first,e.last),this.clearSelection()},this.duplicateSelection=function(){var e=this.selection,t=this.session,n=e.getRange(),r=e.isBackwards();if(n.isEmpty()){var i=n.start.row;t.duplicateLines(i,i)}else{var s=r?n.start:n.end,o=t.insert(s,t.getTextRange(n),!1);n.start=s,n.end=o,e.setSelectionRange(n,r)}},this.moveLinesDown=function(){this.$moveLines(1,!1)},this.moveLinesUp=function(){this.$moveLines(-1,!1)},this.moveText=function(e,t,n){return this.session.moveText(e,t,n)},this.copyLinesUp=function(){this.$moveLines(-1,!0)},this.copyLinesDown=function(){this.$moveLines(1,!0)},this.$moveLines=function(e,t){var n,r,i=this.selection;if(!i.inMultiSelectMode||this.inVirtualSelectionMode){var s=i.toOrientedRange();n=this.$getSelectedRows(s),r=this.session.$moveLines(n.first,n.last,t?0:e),t&&e==-1&&(r=0),s.moveBy(r,0),i.fromOrientedRange(s)}else{var o=i.rangeList.ranges;i.rangeList.detach(this.session),this.inVirtualSelectionMode=!0;var u=0,a=0,f=o.length;for(var l=0;l<f;l++){var c=l;o[l].moveBy(u,0),n=this.$getSelectedRows(o[l]);var h=n.first,p=n.last;while(++l<f){a&&o[l].moveBy(a,0);var d=this.$getSelectedRows(o[l]);if(t&&d.first!=p)break;if(!t&&d.first>p+1)break;p=d.last}l--,u=this.session.$moveLines(h,p,t?0:e),t&&e==-1&&(c=l+1);while(c<=l)o[c].moveBy(u,0),c++;t||(u=0),a+=u}i.fromOrientedRange(i.ranges[0]),i.rangeList.attach(this.session),this.inVirtualSelectionMode=!1}},this.$getSelectedRows=function(e){return e=(e||this.getSelectionRange()).collapseRows(),{first:this.session.getRowFoldStart(e.start.row),last:this.session.getRowFoldEnd(e.end.row)}},this.onCompositionStart=function(e){this.renderer.showComposition(e)},this.onCompositionUpdate=function(e){this.renderer.setCompositionText(e)},this.onCompositionEnd=function(){this.renderer.hideComposition()},this.getFirstVisibleRow=function(){return this.renderer.getFirstVisibleRow()},this.getLastVisibleRow=function(){return this.renderer.getLastVisibleRow()},this.isRowVisible=function(e){return e>=this.getFirstVisibleRow()&&e<=this.getLastVisibleRow()},this.isRowFullyVisible=function(e){return e>=this.renderer.getFirstFullyVisibleRow()&&e<=this.renderer.getLastFullyVisibleRow()},this.$getVisibleRowCount=function(){return this.renderer.getScrollBottomRow()-this.renderer.getScrollTopRow()+1},this.$moveByPage=function(e,t){var n=this.renderer,r=this.renderer.layerConfig,i=e*Math.floor(r.height/r.lineHeight);t===!0?this.selection.$moveSelection(function(){this.moveCursorBy(i,0)}):t===!1&&(this.selection.moveCursorBy(i,0),this.selection.clearSelection());var s=n.scrollTop;n.scrollBy(0,i*r.lineHeight),t!=null&&n.scrollCursorIntoView(null,.5),n.animateScrolling(s)},this.selectPageDown=function(){this.$moveByPage(1,!0)},this.selectPageUp=function(){this.$moveByPage(-1,!0)},this.gotoPageDown=function(){this.$moveByPage(1,!1)},this.gotoPageUp=function(){this.$moveByPage(-1,!1)},this.scrollPageDown=function(){this.$moveByPage(1)},this.scrollPageUp=function(){this.$moveByPage(-1)},this.scrollToRow=function(e){this.renderer.scrollToRow(e)},this.scrollToLine=function(e,t,n,r){this.renderer.scrollToLine(e,t,n,r)},this.centerSelection=function(){var e=this.getSelectionRange(),t={row:Math.floor(e.start.row+(e.end.row-e.start.row)/2),column:Math.floor(e.start.column+(e.end.column-e.start.column)/2)};this.renderer.alignCursor(t,.5)},this.getCursorPosition=function(){return this.selection.getCursor()},this.getCursorPositionScreen=function(){return this.session.documentToScreenPosition(this.getCursorPosition())},this.getSelectionRange=function(){return this.selection.getRange()},this.selectAll=function(){this.selection.selectAll()},this.clearSelection=function(){this.selection.clearSelection()},this.moveCursorTo=function(e,t){this.selection.moveCursorTo(e,t)},this.moveCursorToPosition=function(e){this.selection.moveCursorToPosition(e)},this.jumpToMatching=function(e,t){var n=this.getCursorPosition(),r=new y(this.session,n.row,n.column),i=r.getCurrentToken(),s=i||r.stepForward();if(!s)return;var o,u=!1,a={},f=n.column-s.start,l,c={")":"(","(":"(","]":"[","[":"[","{":"{","}":"{"};do{if(s.value.match(/[{}()\[\]]/g))for(;f<s.value.length&&!u;f++){if(!c[s.value[f]])continue;l=c[s.value[f]]+"."+s.type.replace("rparen","lparen"),isNaN(a[l])&&(a[l]=0);switch(s.value[f]){case"(":case"[":case"{":a[l]++;break;case")":case"]":case"}":a[l]--,a[l]===-1&&(o="bracket",u=!0)}}else s.type.indexOf("tag-name")!==-1&&(isNaN(a[s.value])&&(a[s.value]=0),i.value==="<"?a[s.value]++:i.value==="</"&&a[s.value]--,a[s.value]===-1&&(o="tag",u=!0));u||(i=s,s=r.stepForward(),f=0)}while(s&&!u);if(!o)return;var h,d;if(o==="bracket"){h=this.session.getBracketRange(n);if(!h){h=new p(r.getCurrentTokenRow(),r.getCurrentTokenColumn()+f-1,r.getCurrentTokenRow(),r.getCurrentTokenColumn()+f-1),d=h.start;if(t||d.row===n.row&&Math.abs(d.column-n.column)<2)h=this.session.getBracketRange(d)}}else if(o==="tag"){if(!s||s.type.indexOf("tag-name")===-1)return;var v=s.value;h=new p(r.getCurrentTokenRow(),r.getCurrentTokenColumn()-2,r.getCurrentTokenRow(),r.getCurrentTokenColumn()-2);if(h.compare(n.row,n.column)===0){u=!1;do s=i,i=r.stepBackward(),i&&(i.type.indexOf("tag-close")!==-1&&h.setEnd(r.getCurrentTokenRow(),r.getCurrentTokenColumn()+1),s.value===v&&s.type.indexOf("tag-name")!==-1&&(i.value==="<"?a[v]++:i.value==="</"&&a[v]--,a[v]===0&&(u=!0)));while(i&&!u)}s&&s.type.indexOf("tag-name")&&(d=h.start,d.row==n.row&&Math.abs(d.column-n.column)<2&&(d=h.end))}d=h&&h.cursor||d,d&&(e?h&&t?this.selection.setRange(h):h&&h.isEqual(this.getSelectionRange())?this.clearSelection():this.selection.selectTo(d.row,d.column):this.selection.moveTo(d.row,d.column))},this.gotoLine=function(e,t,n){this.selection.clearSelection(),this.session.unfold({row:e-1,column:t||0}),this.exitMultiSelectMode&&this.exitMultiSelectMode(),this.moveCursorTo(e-1,t||0),this.isRowFullyVisible(e-1)||this.scrollToLine(e-1,!0,n)},this.navigateTo=function(e,t){this.selection.moveTo(e,t)},this.navigateUp=function(e){if(this.selection.isMultiLine()&&!this.selection.isBackwards()){var t=this.selection.anchor.getPosition();return this.moveCursorToPosition(t)}this.selection.clearSelection(),this.selection.moveCursorBy(-e||-1,0)},this.navigateDown=function(e){if(this.selection.isMultiLine()&&this.selection.isBackwards()){var t=this.selection.anchor.getPosition();return this.moveCursorToPosition(t)}this.selection.clearSelection(),this.selection.moveCursorBy(e||1,0)},this.navigateLeft=function(e){if(!this.selection.isEmpty()){var t=this.getSelectionRange().start;this.moveCursorToPosition(t)}else{e=e||1;while(e--)this.selection.moveCursorLeft()}this.clearSelection()},this.navigateRight=function(e){if(!this.selection.isEmpty()){var t=this.getSelectionRange().end;this.moveCursorToPosition(t)}else{e=e||1;while(e--)this.selection.moveCursorRight()}this.clearSelection()},this.navigateLineStart=function(){this.selection.moveCursorLineStart(),this.clearSelection()},this.navigateLineEnd=function(){this.selection.moveCursorLineEnd(),this.clearSelection()},this.navigateFileEnd=function(){this.selection.moveCursorFileEnd(),this.clearSelection()},this.navigateFileStart=function(){this.selection.moveCursorFileStart(),this.clearSelection()},this.navigateWordRight=function(){this.selection.moveCursorWordRight(),this.clearSelection()},this.navigateWordLeft=function(){this.selection.moveCursorWordLeft(),this.clearSelection()},this.replace=function(e,t){t&&this.$search.set(t);var n=this.$search.find(this.session),r=0;return n?(this.$tryReplace(n,e)&&(r=1),this.selection.setSelectionRange(n),this.renderer.scrollSelectionIntoView(n.start,n.end),r):r},this.replaceAll=function(e,t){t&&this.$search.set(t);var n=this.$search.findAll(this.session),r=0;if(!n.length)return r;var i=this.getSelectionRange();this.selection.moveTo(0,0);for(var s=n.length-1;s>=0;--s)this.$tryReplace(n[s],e)&&r++;return this.selection.setSelectionRange(i),r},this.$tryReplace=function(e,t){var n=this.session.getTextRange(e);return t=this.$search.replace(n,t),t!==null?(e.end=this.session.replace(e,t),e):null},this.getLastSearchOptions=function(){return this.$search.getOptions()},this.find=function(e,t,n){t||(t={}),typeof e=="string"||e instanceof RegExp?t.needle=e:typeof e=="object"&&r.mixin(t,e);var i=this.selection.getRange();t.needle==null&&(e=this.session.getTextRange(i)||this.$search.$options.needle,e||(i=this.session.getWordRange(i.start.row,i.start.column),e=this.session.getTextRange(i)),this.$search.set({needle:e})),this.$search.set(t),t.start||this.$search.set({start:i});var s=this.$search.find(this.session);if(t.preventScroll)return s;if(s)return this.revealRange(s,n),s;t.backwards?i.start=i.end:i.end=i.start,this.selection.setRange(i)},this.findNext=function(e,t){this.find({skipCurrent:!0,backwards:!1},e,t)},this.findPrevious=function(e,t){this.find(e,{skipCurrent:!0,backwards:!0},t)},this.revealRange=function(e,t){this.session.unfold(e),this.selection.setSelectionRange(e);var n=this.renderer.scrollTop;this.renderer.scrollSelectionIntoView(e.start,e.end,.5),t!==!1&&this.renderer.animateScrolling(n)},this.undo=function(){this.session.getUndoManager().undo(this.session),this.renderer.scrollCursorIntoView(null,.5)},this.redo=function(){this.session.getUndoManager().redo(this.session),this.renderer.scrollCursorIntoView(null,.5)},this.destroy=function(){this.$toDestroy&&(this.$toDestroy.forEach(function(e){e.destroy()}),this.$toDestroy=null),this.$mouseHandler&&this.$mouseHandler.destroy(),this.renderer.destroy(),this._signal("destroy",this),this.session&&this.session.destroy(),this._$emitInputEvent&&this._$emitInputEvent.cancel(),this.removeAllListeners()},this.setAutoScrollEditorIntoView=function(e){if(!e)return;var t,n=this,r=!1;this.$scrollAnchor||(this.$scrollAnchor=document.createElement("div"));var i=this.$scrollAnchor;i.style.cssText="position:absolute",this.container.insertBefore(i,this.container.firstChild);var s=this.on("changeSelection",function(){r=!0}),o=this.renderer.on("beforeRender",function(){r&&(t=n.renderer.container.getBoundingClientRect())}),u=this.renderer.on("afterRender",function(){if(r&&t&&(n.isFocused()||n.searchBox&&n.searchBox.isFocused())){var e=n.renderer,s=e.$cursorLayer.$pixelPos,o=e.layerConfig,u=s.top-o.offset;s.top>=0&&u+t.top<0?r=!0:s.top<o.height&&s.top+t.top+o.lineHeight>window.innerHeight?r=!1:r=null,r!=null&&(i.style.top=u+"px",i.style.left=s.left+"px",i.style.height=o.lineHeight+"px",i.scrollIntoView(r)),r=t=null}});this.setAutoScrollEditorIntoView=function(e){if(e)return;delete this.setAutoScrollEditorIntoView,this.off("changeSelection",s),this.renderer.off("afterRender",u),this.renderer.off("beforeRender",o)}},this.$resetCursorStyle=function(){var e=this.$cursorStyle||"ace",t=this.renderer.$cursorLayer;if(!t)return;t.setSmoothBlinking(/smooth/.test(e)),t.isBlinking=!this.$readOnly&&e!="wide",i.setCssClass(t.element,"ace_slim-cursors",/slim/.test(e))},this.prompt=function(e,t,n){var r=this;g.loadModule("./ext/prompt",function(i){i.prompt(r,e,t,n)})}}.call(w.prototype),g.defineOptions(w.prototype,"editor",{selectionStyle:{set:function(e){this.onSelectionChange(),this._signal("changeSelectionStyle",{data:e})},initialValue:"line"},highlightActiveLine:{set:function(){this.$updateHighlightActiveLine()},initialValue:!0},highlightSelectedWord:{set:function(e){this.$onSelectionChange()},initialValue:!0},readOnly:{set:function(e){this.textInput.setReadOnly(e),this.$resetCursorStyle()},initialValue:!1},copyWithEmptySelection:{set:function(e){this.textInput.setCopyWithEmptySelection(e)},initialValue:!1},cursorStyle:{set:function(e){this.$resetCursorStyle()},values:["ace","slim","smooth","wide"],initialValue:"ace"},mergeUndoDeltas:{values:[!1,!0,"always"],initialValue:!0},behavioursEnabled:{initialValue:!0},wrapBehavioursEnabled:{initialValue:!0},enableAutoIndent:{initialValue:!0},autoScrollEditorIntoView:{set:function(e){this.setAutoScrollEditorIntoView(e)}},keyboardHandler:{set:function(e){this.setKeyboardHandler(e)},get:function(){return this.$keybindingId},handlesSet:!0},value:{set:function(e){this.session.setValue(e)},get:function(){return this.getValue()},handlesSet:!0,hidden:!0},session:{set:function(e){this.setSession(e)},get:function(){return this.session},handlesSet:!0,hidden:!0},showLineNumbers:{set:function(e){this.renderer.$gutterLayer.setShowLineNumbers(e),this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER),e&&this.$relativeLineNumbers?E.attach(this):E.detach(this)},initialValue:!0},relativeLineNumbers:{set:function(e){this.$showLineNumbers&&e?E.attach(this):E.detach(this)}},placeholder:{set:function(e){this.$updatePlaceholder||(this.$updatePlaceholder=function(){var e=this.session&&(this.renderer.$composition||this.getValue());if(e&&this.renderer.placeholderNode)this.renderer.off("afterRender",this.$updatePlaceholder),i.removeCssClass(this.container,"ace_hasPlaceholder"),this.renderer.placeholderNode.remove(),this.renderer.placeholderNode=null;else if(!e&&!this.renderer.placeholderNode){this.renderer.on("afterRender",this.$updatePlaceholder),i.addCssClass(this.container,"ace_hasPlaceholder");var t=i.createElement("div");t.className="ace_placeholder",t.textContent=this.$placeholder||"",this.renderer.placeholderNode=t,this.renderer.content.appendChild(this.renderer.placeholderNode)}else!e&&this.renderer.placeholderNode&&(this.renderer.placeholderNode.textContent=this.$placeholder||"")}.bind(this),this.on("input",this.$updatePlaceholder)),this.$updatePlaceholder()}},hScrollBarAlwaysVisible:"renderer",vScrollBarAlwaysVisible:"renderer",highlightGutterLine:"renderer",animatedScroll:"renderer",showInvisibles:"renderer",showPrintMargin:"renderer",printMarginColumn:"renderer",printMargin:"renderer",fadeFoldWidgets:"renderer",showFoldWidgets:"renderer",displayIndentGuides:"renderer",showGutter:"renderer",fontSize:"renderer",fontFamily:"renderer",maxLines:"renderer",minLines:"renderer",scrollPastEnd:"renderer",fixedWidthGutter:"renderer",theme:"renderer",hasCssTransforms:"renderer",maxPixelHeight:"renderer",useTextareaForIME:"renderer",scrollSpeed:"$mouseHandler",dragDelay:"$mouseHandler",dragEnabled:"$mouseHandler",focusTimeout:"$mouseHandler",tooltipFollowsMouse:"$mouseHandler",firstLineNumber:"session",overwrite:"session",newLineMode:"session",useWorker:"session",useSoftTabs:"session",navigateWithinSoftTabs:"session",tabSize:"session",wrap:"session",indentedSoftWrap:"session",foldStyle:"session",mode:"session"});var E={getText:function(e,t){return(Math.abs(e.selection.lead.row-t)||t+1+(t<9?"\u00b7":""))+""},getWidth:function(e,t,n){return Math.max(t.toString().length,(n.lastRow+1).toString().length,2)*n.characterWidth},update:function(e,t){t.renderer.$loop.schedule(t.renderer.CHANGE_GUTTER)},attach:function(e){e.renderer.$gutterLayer.$renderer=this,e.on("changeSelection",this.update),this.update(null,e)},detach:function(e){e.renderer.$gutterLayer.$renderer==this&&(e.renderer.$gutterLayer.$renderer=null),e.off("changeSelection",this.update),this.update(null,e)}};t.Editor=w}),ace.define("ace/undomanager",["require","exports","module","ace/range"],function(e,t,n){"use strict";function i(e,t){for(var n=t;n--;){var r=e[n];if(r&&!r[0].ignore){while(n<t-1){var i=d(e[n],e[n+1]);e[n]=i[0],e[n+1]=i[1],n++}return!0}}}function a(e){var t=e.action=="insert",n=e.start,r=e.end,i=(r.row-n.row)*(t?1:-1),s=(r.column-n.column)*(t?1:-1);t&&(r=n);for(var o in this.marks){var a=this.marks[o],f=u(a,n);if(f<0)continue;if(f===0&&t){if(a.bias!=1){a.bias==-1;continue}f=1}var l=t?f:u(a,r);if(l>0){a.row+=i,a.column+=a.row==r.row?s:0;continue}!t&&l<=0&&(a.row=n.row,a.column=n.column,l===0&&(a.bias=1))}}function f(e){return{row:e.row,column:e.column}}function l(e){return{start:f(e.start),end:f(e.end),action:e.action,lines:e.lines.slice()}}function c(e){e=e||this;if(Array.isArray(e))return e.map(c).join("\n");var t="";e.action?(t=e.action=="insert"?"+":"-",t+="["+e.lines+"]"):e.value&&(Array.isArray(e.value)?t=e.value.map(h).join("\n"):t=h(e.value)),e.start&&(t+=h(e));if(e.id||e.rev)t+="	("+(e.id||e.rev)+")";return t}function h(e){return e.start.row+":"+e.start.column+"=>"+e.end.row+":"+e.end.column}function p(e,t){var n=e.action=="insert",r=t.action=="insert";if(n&&r)if(o(t.start,e.end)>=0)m(t,e,-1);else{if(!(o(t.start,e.start)<=0))return null;m(e,t,1)}else if(n&&!r)if(o(t.start,e.end)>=0)m(t,e,-1);else{if(!(o(t.end,e.start)<=0))return null;m(e,t,-1)}else if(!n&&r)if(o(t.start,e.start)>=0)m(t,e,1);else{if(!(o(t.start,e.start)<=0))return null;m(e,t,1)}else if(!n&&!r)if(o(t.start,e.start)>=0)m(t,e,1);else{if(!(o(t.end,e.start)<=0))return null;m(e,t,-1)}return[t,e]}function d(e,t){for(var n=e.length;n--;)for(var r=0;r<t.length;r++)if(!p(e[n],t[r])){while(n<e.length){while(r--)p(t[r],e[n]);r=t.length,n++}return[e,t]}return e.selectionBefore=t.selectionBefore=e.selectionAfter=t.selectionAfter=null,[t,e]}function v(e,t){var n=e.action=="insert",r=t.action=="insert";if(n&&r)o(e.start,t.start)<0?m(t,e,1):m(e,t,1);else if(n&&!r)o(e.start,t.end)>=0?m(e,t,-1):o(e.start,t.start)<=0?m(t,e,1):(m(e,s.fromPoints(t.start,e.start),-1),m(t,e,1));else if(!n&&r)o(t.start,e.end)>=0?m(t,e,-1):o(t.start,e.start)<=0?m(e,t,1):(m(t,s.fromPoints(e.start,t.start),-1),m(e,t,1));else if(!n&&!r)if(o(t.start,e.end)>=0)m(t,e,-1);else{if(!(o(t.end,e.start)<=0)){var i,u;return o(e.start,t.start)<0&&(i=e,e=y(e,t.start)),o(e.end,t.end)>0&&(u=y(e,t.end)),g(t.end,e.start,e.end,-1),u&&!i&&(e.lines=u.lines,e.start=u.start,e.end=u.end,u=e),[t,i,u].filter(Boolean)}m(e,t,-1)}return[t,e]}function m(e,t,n){g(e.start,t.start,t.end,n),g(e.end,t.start,t.end,n)}function g(e,t,n,r){e.row==(r==1?t:n).row&&(e.column+=r*(n.column-t.column)),e.row+=r*(n.row-t.row)}function y(e,t){var n=e.lines,r=e.end;e.end=f(t);var i=e.end.row-e.start.row,s=n.splice(i,n.length),o=i?t.column:t.column-e.start.column;n.push(s[0].substring(0,o)),s[0]=s[0].substr(o);var u={start:f(t),end:r,lines:s,action:e.action};return u}function b(e,t){t=l(t);for(var n=e.length;n--;){var r=e[n];for(var i=0;i<r.length;i++){var s=r[i],o=v(s,t);t=o[0],o.length!=2&&(o[2]?(r.splice(i+1,1,o[1],o[2]),i++):o[1]||(r.splice(i,1),i--))}r.length||e.splice(n,1)}return e}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];for(var i=0;i<r.length;i++)b(e,r[i])}}var r=function(){this.$maxRev=0,this.$fromUndo=!1,this.reset()};(function(){this.addSession=function(e){this.$session=e},this.add=function(e,t,n){if(this.$fromUndo)return;if(e==this.$lastDelta)return;this.$keepRedoStack||(this.$redoStack.length=0);if(t===!1||!this.lastDeltas)this.lastDeltas=[],this.$undoStack.push(this.lastDeltas),e.id=this.$rev=++this.$maxRev;if(e.action=="remove"||e.action=="insert")this.$lastDelta=e;this.lastDeltas.push(e)},this.addSelection=function(e,t){this.selections.push({value:e,rev:t||this.$rev})},this.startNewGroup=function(){return this.lastDeltas=null,this.$rev},this.markIgnored=function(e,t){t==null&&(t=this.$rev+1);var n=this.$undoStack;for(var r=n.length;r--;){var i=n[r][0];if(i.id<=e)break;i.id<t&&(i.ignore=!0)}this.lastDeltas=null},this.getSelection=function(e,t){var n=this.selections;for(var r=n.length;r--;){var i=n[r];if(i.rev<e)return t&&(i=n[r+1]),i}},this.getRevision=function(){return this.$rev},this.getDeltas=function(e,t){t==null&&(t=this.$rev+1);var n=this.$undoStack,r=null,i=0;for(var s=n.length;s--;){var o=n[s][0];o.id<t&&!r&&(r=s+1);if(o.id<=e){i=s+1;break}}return n.slice(i,r)},this.getChangedRanges=function(e,t){t==null&&(t=this.$rev+1)},this.getChangedLines=function(e,t){t==null&&(t=this.$rev+1)},this.undo=function(e,t){this.lastDeltas=null;var n=this.$undoStack;if(!i(n,n.length))return;e||(e=this.$session),this.$redoStackBaseRev!==this.$rev&&this.$redoStack.length&&(this.$redoStack=[]),this.$fromUndo=!0;var r=n.pop(),s=null;return r&&(s=e.undoChanges(r,t),this.$redoStack.push(r),this.$syncRev()),this.$fromUndo=!1,s},this.redo=function(e,t){this.lastDeltas=null,e||(e=this.$session),this.$fromUndo=!0;if(this.$redoStackBaseRev!=this.$rev){var n=this.getDeltas(this.$redoStackBaseRev,this.$rev+1);w(this.$redoStack,n),this.$redoStackBaseRev=this.$rev,this.$redoStack.forEach(function(e){e[0].id=++this.$maxRev},this)}var r=this.$redoStack.pop(),i=null;return r&&(i=e.redoChanges(r,t),this.$undoStack.push(r),this.$syncRev()),this.$fromUndo=!1,i},this.$syncRev=function(){var e=this.$undoStack,t=e[e.length-1],n=t&&t[0].id||0;this.$redoStackBaseRev=n,this.$rev=n},this.reset=function(){this.lastDeltas=null,this.$lastDelta=null,this.$undoStack=[],this.$redoStack=[],this.$rev=0,this.mark=0,this.$redoStackBaseRev=this.$rev,this.selections=[]},this.canUndo=function(){return this.$undoStack.length>0},this.canRedo=function(){return this.$redoStack.length>0},this.bookmark=function(e){e==undefined&&(e=this.$rev),this.mark=e},this.isAtBookmark=function(){return this.$rev===this.mark},this.toJSON=function(){},this.fromJSON=function(){},this.hasUndo=this.canUndo,this.hasRedo=this.canRedo,this.isClean=this.isAtBookmark,this.markClean=this.bookmark,this.$prettyPrint=function(e){return e?c(e):c(this.$undoStack)+"\n---\n"+c(this.$redoStack)}}).call(r.prototype);var s=e("./range").Range,o=s.comparePoints,u=s.comparePoints;t.UndoManager=r}),ace.define("ace/layer/lines",["require","exports","module","ace/lib/dom"],function(e,t,n){"use strict";var r=e("../lib/dom"),i=function(e,t){this.element=e,this.canvasHeight=t||5e5,this.element.style.height=this.canvasHeight*2+"px",this.cells=[],this.cellCache=[],this.$offsetCoefficient=0};(function(){this.moveContainer=function(e){r.translate(this.element,0,-(e.firstRowScreen*e.lineHeight%this.canvasHeight)-e.offset*this.$offsetCoefficient)},this.pageChanged=function(e,t){return Math.floor(e.firstRowScreen*e.lineHeight/this.canvasHeight)!==Math.floor(t.firstRowScreen*t.lineHeight/this.canvasHeight)},this.computeLineTop=function(e,t,n){var r=t.firstRowScreen*t.lineHeight,i=Math.floor(r/this.canvasHeight),s=n.documentToScreenRow(e,0)*t.lineHeight;return s-i*this.canvasHeight},this.computeLineHeight=function(e,t,n){return t.lineHeight*n.getRowLineCount(e)},this.getLength=function(){return this.cells.length},this.get=function(e){return this.cells[e]},this.shift=function(){this.$cacheCell(this.cells.shift())},this.pop=function(){this.$cacheCell(this.cells.pop())},this.push=function(e){if(Array.isArray(e)){this.cells.push.apply(this.cells,e);var t=r.createFragment(this.element);for(var n=0;n<e.length;n++)t.appendChild(e[n].element);this.element.appendChild(t)}else this.cells.push(e),this.element.appendChild(e.element)},this.unshift=function(e){if(Array.isArray(e)){this.cells.unshift.apply(this.cells,e);var t=r.createFragment(this.element);for(var n=0;n<e.length;n++)t.appendChild(e[n].element);this.element.firstChild?this.element.insertBefore(t,this.element.firstChild):this.element.appendChild(t)}else this.cells.unshift(e),this.element.insertAdjacentElement("afterbegin",e.element)},this.last=function(){return this.cells.length?this.cells[this.cells.length-1]:null},this.$cacheCell=function(e){if(!e)return;e.element.remove(),this.cellCache.push(e)},this.createCell=function(e,t,n,i){var s=this.cellCache.pop();if(!s){var o=r.createElement("div");i&&i(o),this.element.appendChild(o),s={element:o,text:"",row:e}}return s.row=e,s}}).call(i.prototype),t.Lines=i}),ace.define("ace/layer/gutter",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/layer/lines"],function(e,t,n){"use strict";function f(e){var t=document.createTextNode("");e.appendChild(t);var n=r.createElement("span");return e.appendChild(n),e}var r=e("../lib/dom"),i=e("../lib/oop"),s=e("../lib/lang"),o=e("../lib/event_emitter").EventEmitter,u=e("./lines").Lines,a=function(e){this.element=r.createElement("div"),this.element.className="ace_layer ace_gutter-layer",e.appendChild(this.element),this.setShowFoldWidgets(this.$showFoldWidgets),this.gutterWidth=0,this.$annotations=[],this.$updateAnnotations=this.$updateAnnotations.bind(this),this.$lines=new u(this.element),this.$lines.$offsetCoefficient=1};(function(){i.implement(this,o),this.setSession=function(e){this.session&&this.session.off("change",this.$updateAnnotations),this.session=e,e&&e.on("change",this.$updateAnnotations)},this.addGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.addGutterDecoration"),this.session.addGutterDecoration(e,t)},this.removeGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.removeGutterDecoration"),this.session.removeGutterDecoration(e,t)},this.setAnnotations=function(e){this.$annotations=[];for(var t=0;t<e.length;t++){var n=e[t],r=n.row,i=this.$annotations[r];i||(i=this.$annotations[r]={text:[]});var o=n.text;o=o?s.escapeHTML(o):n.html||"",i.text.indexOf(o)===-1&&i.text.push(o);var u=n.type;u=="error"?i.className=" ace_error":u=="warning"&&i.className!=" ace_error"?i.className=" ace_warning":u=="info"&&!i.className&&(i.className=" ace_info")}},this.$updateAnnotations=function(e){if(!this.$annotations.length)return;var t=e.start.row,n=e.end.row-t;if(n!==0)if(e.action=="remove")this.$annotations.splice(t,n+1,null);else{var r=new Array(n+1);r.unshift(t,1),this.$annotations.splice.apply(this.$annotations,r)}},this.update=function(e){this.config=e;var t=this.session,n=e.firstRow,r=Math.min(e.lastRow+e.gutterOffset,t.getLength()-1);this.oldLastRow=r,this.config=e,this.$lines.moveContainer(e),this.$updateCursorRow();var i=t.getNextFoldLine(n),s=i?i.start.row:Infinity,o=null,u=-1,a=n;for(;;){a>s&&(a=i.end.row+1,i=t.getNextFoldLine(a,i),s=i?i.start.row:Infinity);if(a>r){while(this.$lines.getLength()>u+1)this.$lines.pop();break}o=this.$lines.get(++u),o?o.row=a:(o=this.$lines.createCell(a,e,this.session,f),this.$lines.push(o)),this.$renderCell(o,e,i,a),a++}this._signal("afterRender"),this.$updateGutterWidth(e)},this.$updateGutterWidth=function(e){var t=this.session,n=t.gutterRenderer||this.$renderer,r=t.$firstLineNumber,i=this.$lines.last()?this.$lines.last().text:"";if(this.$fixedWidth||t.$useWrapMode)i=t.getLength()+r-1;var s=n?n.getWidth(t,i,e):i.toString().length*e.characterWidth,o=this.$padding||this.$computePadding();s+=o.left+o.right,s!==this.gutterWidth&&!isNaN(s)&&(this.gutterWidth=s,this.element.parentNode.style.width=this.element.style.width=Math.ceil(this.gutterWidth)+"px",this._signal("changeGutterWidth",s))},this.$updateCursorRow=function(){if(!this.$highlightGutterLine)return;var e=this.session.selection.getCursor();if(this.$cursorRow===e.row)return;this.$cursorRow=e.row},this.updateLineHighlight=function(){if(!this.$highlightGutterLine)return;var e=this.session.selection.cursor.row;this.$cursorRow=e;if(this.$cursorCell&&this.$cursorCell.row==e)return;this.$cursorCell&&(this.$cursorCell.element.className=this.$cursorCell.element.className.replace("ace_gutter-active-line ",""));var t=this.$lines.cells;this.$cursorCell=null;for(var n=0;n<t.length;n++){var r=t[n];if(r.row>=this.$cursorRow){if(r.row>this.$cursorRow){var i=this.session.getFoldLine(this.$cursorRow);if(!(n>0&&i&&i.start.row==t[n-1].row))break;r=t[n-1]}r.element.className="ace_gutter-active-line "+r.element.className,this.$cursorCell=r;break}}},this.scrollLines=function(e){var t=this.config;this.config=e,this.$updateCursorRow();if(this.$lines.pageChanged(t,e))return this.update(e);this.$lines.moveContainer(e);var n=Math.min(e.lastRow+e.gutterOffset,this.session.getLength()-1),r=this.oldLastRow;this.oldLastRow=n;if(!t||r<e.firstRow)return this.update(e);if(n<t.firstRow)return this.update(e);if(t.firstRow<e.firstRow)for(var i=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);i>0;i--)this.$lines.shift();if(r>n)for(var i=this.session.getFoldedRowCount(n+1,r);i>0;i--)this.$lines.pop();e.firstRow<t.firstRow&&this.$lines.unshift(this.$renderLines(e,e.firstRow,t.firstRow-1)),n>r&&this.$lines.push(this.$renderLines(e,r+1,n)),this.updateLineHighlight(),this._signal("afterRender"),this.$updateGutterWidth(e)},this.$renderLines=function(e,t,n){var r=[],i=t,s=this.session.getNextFoldLine(i),o=s?s.start.row:Infinity;for(;;){i>o&&(i=s.end.row+1,s=this.session.getNextFoldLine(i,s),o=s?s.start.row:Infinity);if(i>n)break;var u=this.$lines.createCell(i,e,this.session,f);this.$renderCell(u,e,s,i),r.push(u),i++}return r},this.$renderCell=function(e,t,n,i){var s=e.element,o=this.session,u=s.childNodes[0],a=s.childNodes[1],f=o.$firstLineNumber,l=o.$breakpoints,c=o.$decorations,h=o.gutterRenderer||this.$renderer,p=this.$showFoldWidgets&&o.foldWidgets,d=n?n.start.row:Number.MAX_VALUE,v="ace_gutter-cell ";this.$highlightGutterLine&&(i==this.$cursorRow||n&&i<this.$cursorRow&&i>=d&&this.$cursorRow<=n.end.row)&&(v+="ace_gutter-active-line ",this.$cursorCell!=e&&(this.$cursorCell&&(this.$cursorCell.element.className=this.$cursorCell.element.className.replace("ace_gutter-active-line ","")),this.$cursorCell=e)),l[i]&&(v+=l[i]),c[i]&&(v+=c[i]),this.$annotations[i]&&(v+=this.$annotations[i].className),s.className!=v&&(s.className=v);if(p){var m=p[i];m==null&&(m=p[i]=o.getFoldWidget(i))}if(m){var v="ace_fold-widget ace_"+m;m=="start"&&i==d&&i<n.end.row?v+=" ace_closed":v+=" ace_open",a.className!=v&&(a.className=v);var g=t.lineHeight+"px";r.setStyle(a.style,"height",g),r.setStyle(a.style,"display","inline-block")}else a&&r.setStyle(a.style,"display","none");var y=(h?h.getText(o,i):i+f).toString();return y!==u.data&&(u.data=y),r.setStyle(e.element.style,"height",this.$lines.computeLineHeight(i,t,o)+"px"),r.setStyle(e.element.style,"top",this.$lines.computeLineTop(i,t,o)+"px"),e.text=y,e},this.$fixedWidth=!1,this.$highlightGutterLine=!0,this.$renderer="",this.setHighlightGutterLine=function(e){this.$highlightGutterLine=e},this.$showLineNumbers=!0,this.$renderer="",this.setShowLineNumbers=function(e){this.$renderer=!e&&{getWidth:function(){return 0},getText:function(){return""}}},this.getShowLineNumbers=function(){return this.$showLineNumbers},this.$showFoldWidgets=!0,this.setShowFoldWidgets=function(e){e?r.addCssClass(this.element,"ace_folding-enabled"):r.removeCssClass(this.element,"ace_folding-enabled"),this.$showFoldWidgets=e,this.$padding=null},this.getShowFoldWidgets=function(){return this.$showFoldWidgets},this.$computePadding=function(){if(!this.element.firstChild)return{left:0,right:0};var e=r.computedStyle(this.element.firstChild);return this.$padding={},this.$padding.left=(parseInt(e.borderLeftWidth)||0)+(parseInt(e.paddingLeft)||0)+1,this.$padding.right=(parseInt(e.borderRightWidth)||0)+(parseInt(e.paddingRight)||0),this.$padding},this.getRegion=function(e){var t=this.$padding||this.$computePadding(),n=this.element.getBoundingClientRect();if(e.x<t.left+n.left)return"markers";if(this.$showFoldWidgets&&e.x>n.right-t.right)return"foldWidgets"}}).call(a.prototype),t.Gutter=a}),ace.define("ace/layer/marker",["require","exports","module","ace/range","ace/lib/dom"],function(e,t,n){"use strict";var r=e("../range").Range,i=e("../lib/dom"),s=function(e){this.element=i.createElement("div"),this.element.className="ace_layer ace_marker-layer",e.appendChild(this.element)};(function(){function e(e,t,n,r){return(e?1:0)|(t?2:0)|(n?4:0)|(r?8:0)}this.$padding=0,this.setPadding=function(e){this.$padding=e},this.setSession=function(e){this.session=e},this.setMarkers=function(e){this.markers=e},this.elt=function(e,t){var n=this.i!=-1&&this.element.childNodes[this.i];n?this.i++:(n=document.createElement("div"),this.element.appendChild(n),this.i=-1),n.style.cssText=t,n.className=e},this.update=function(e){if(!e)return;this.config=e,this.i=0;var t;for(var n in this.markers){var r=this.markers[n];if(!r.range){r.update(t,this,this.session,e);continue}var i=r.range.clipRows(e.firstRow,e.lastRow);if(i.isEmpty())continue;i=i.toScreenRange(this.session);if(r.renderer){var s=this.$getTop(i.start.row,e),o=this.$padding+i.start.column*e.characterWidth;r.renderer(t,i,o,s,e)}else r.type=="fullLine"?this.drawFullLineMarker(t,i,r.clazz,e):r.type=="screenLine"?this.drawScreenLineMarker(t,i,r.clazz,e):i.isMultiLine()?r.type=="text"?this.drawTextMarker(t,i,r.clazz,e):this.drawMultiLineMarker(t,i,r.clazz,e):this.drawSingleLineMarker(t,i,r.clazz+" ace_start"+" ace_br15",e)}if(this.i!=-1)while(this.i<this.element.childElementCount)this.element.removeChild(this.element.lastChild)},this.$getTop=function(e,t){return(e-t.firstRowScreen)*t.lineHeight},this.drawTextMarker=function(t,n,i,s,o){var u=this.session,a=n.start.row,f=n.end.row,l=a,c=0,h=0,p=u.getScreenLastRowColumn(l),d=new r(l,n.start.column,l,h);for(;l<=f;l++)d.start.row=d.end.row=l,d.start.column=l==a?n.start.column:u.getRowWrapIndent(l),d.end.column=p,c=h,h=p,p=l+1<f?u.getScreenLastRowColumn(l+1):l==f?0:n.end.column,this.drawSingleLineMarker(t,d,i+(l==a?" ace_start":"")+" ace_br"+e(l==a||l==a+1&&n.start.column,c<h,h>p,l==f),s,l==f?0:1,o)},this.drawMultiLineMarker=function(e,t,n,r,i){var s=this.$padding,o=r.lineHeight,u=this.$getTop(t.start.row,r),a=s+t.start.column*r.characterWidth;i=i||"";if(this.session.$bidiHandler.isBidiRow(t.start.row)){var f=t.clone();f.end.row=f.start.row,f.end.column=this.session.getLine(f.start.row).length,this.drawBidiSingleLineMarker(e,f,n+" ace_br1 ace_start",r,null,i)}else this.elt(n+" ace_br1 ace_start","height:"+o+"px;"+"right:0;"+"top:"+u+"px;left:"+a+"px;"+(i||""));if(this.session.$bidiHandler.isBidiRow(t.end.row)){var f=t.clone();f.start.row=f.end.row,f.start.column=0,this.drawBidiSingleLineMarker(e,f,n+" ace_br12",r,null,i)}else{u=this.$getTop(t.end.row,r);var l=t.end.column*r.characterWidth;this.elt(n+" ace_br12","height:"+o+"px;"+"width:"+l+"px;"+"top:"+u+"px;"+"left:"+s+"px;"+(i||""))}o=(t.end.row-t.start.row-1)*r.lineHeight;if(o<=0)return;u=this.$getTop(t.start.row+1,r);var c=(t.start.column?1:0)|(t.end.column?0:8);this.elt(n+(c?" ace_br"+c:""),"height:"+o+"px;"+"right:0;"+"top:"+u+"px;"+"left:"+s+"px;"+(i||""))},this.drawSingleLineMarker=function(e,t,n,r,i,s){if(this.session.$bidiHandler.isBidiRow(t.start.row))return this.drawBidiSingleLineMarker(e,t,n,r,i,s);var o=r.lineHeight,u=(t.end.column+(i||0)-t.start.column)*r.characterWidth,a=this.$getTop(t.start.row,r),f=this.$padding+t.start.column*r.characterWidth;this.elt(n,"height:"+o+"px;"+"width:"+u+"px;"+"top:"+a+"px;"+"left:"+f+"px;"+(s||""))},this.drawBidiSingleLineMarker=function(e,t,n,r,i,s){var o=r.lineHeight,u=this.$getTop(t.start.row,r),a=this.$padding,f=this.session.$bidiHandler.getSelections(t.start.column,t.end.column);f.forEach(function(e){this.elt(n,"height:"+o+"px;"+"width:"+e.width+(i||0)+"px;"+"top:"+u+"px;"+"left:"+(a+e.left)+"px;"+(s||""))},this)},this.drawFullLineMarker=function(e,t,n,r,i){var s=this.$getTop(t.start.row,r),o=r.lineHeight;t.start.row!=t.end.row&&(o+=this.$getTop(t.end.row,r)-s),this.elt(n,"height:"+o+"px;"+"top:"+s+"px;"+"left:0;right:0;"+(i||""))},this.drawScreenLineMarker=function(e,t,n,r,i){var s=this.$getTop(t.start.row,r),o=r.lineHeight;this.elt(n,"height:"+o+"px;"+"top:"+s+"px;"+"left:0;right:0;"+(i||""))}}).call(s.prototype),t.Marker=s}),ace.define("ace/layer/text",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/layer/lines","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("../lib/dom"),s=e("../lib/lang"),o=e("./lines").Lines,u=e("../lib/event_emitter").EventEmitter,a=function(e){this.dom=i,this.element=this.dom.createElement("div"),this.element.className="ace_layer ace_text-layer",e.appendChild(this.element),this.$updateEolChar=this.$updateEolChar.bind(this),this.$lines=new o(this.element)};(function(){r.implement(this,u),this.EOF_CHAR="\u00b6",this.EOL_CHAR_LF="\u00ac",this.EOL_CHAR_CRLF="\u00a4",this.EOL_CHAR=this.EOL_CHAR_LF,this.TAB_CHAR="\u2014",this.SPACE_CHAR="\u00b7",this.$padding=0,this.MAX_LINE_LENGTH=1e4,this.$updateEolChar=function(){var e=this.session.doc,t=e.getNewLineCharacter()=="\n"&&e.getNewLineMode()!="windows",n=t?this.EOL_CHAR_LF:this.EOL_CHAR_CRLF;if(this.EOL_CHAR!=n)return this.EOL_CHAR=n,!0},this.setPadding=function(e){this.$padding=e,this.element.style.margin="0 "+e+"px"},this.getLineHeight=function(){return this.$fontMetrics.$characterSize.height||0},this.getCharacterWidth=function(){return this.$fontMetrics.$characterSize.width||0},this.$setFontMetrics=function(e){this.$fontMetrics=e,this.$fontMetrics.on("changeCharacterSize",function(e){this._signal("changeCharacterSize",e)}.bind(this)),this.$pollSizeChanges()},this.checkForSizeChanges=function(){this.$fontMetrics.checkForSizeChanges()},this.$pollSizeChanges=function(){return this.$pollSizeChangesTimer=this.$fontMetrics.$pollSizeChanges()},this.setSession=function(e){this.session=e,e&&this.$computeTabString()},this.showInvisibles=!1,this.showSpaces=!1,this.showTabs=!1,this.showEOL=!1,this.setShowInvisibles=function(e){return this.showInvisibles==e?!1:(this.showInvisibles=e,typeof e=="string"?(this.showSpaces=/tab/i.test(e),this.showTabs=/space/i.test(e),this.showEOL=/eol/i.test(e)):this.showSpaces=this.showTabs=this.showEOL=e,this.$computeTabString(),!0)},this.displayIndentGuides=!0,this.setDisplayIndentGuides=function(e){return this.displayIndentGuides==e?!1:(this.displayIndentGuides=e,this.$computeTabString(),!0)},this.$tabStrings=[],this.onChangeTabSize=this.$computeTabString=function(){var e=this.session.getTabSize();this.tabSize=e;var t=this.$tabStrings=[0];for(var n=1;n<e+1;n++)if(this.showTabs){var r=this.dom.createElement("span");r.className="ace_invisible ace_invisible_tab",r.textContent=s.stringRepeat(this.TAB_CHAR,n),t.push(r)}else t.push(this.dom.createTextNode(s.stringRepeat(" ",n),this.element));if(this.displayIndentGuides){this.$indentGuideRe=/\s\S| \t|\t |\s$/;var i="ace_indent-guide",o=this.showSpaces?" ace_invisible ace_invisible_space":"",u=this.showSpaces?s.stringRepeat(this.SPACE_CHAR,this.tabSize):s.stringRepeat(" ",this.tabSize),a=this.showTabs?" ace_invisible ace_invisible_tab":"",f=this.showTabs?s.stringRepeat(this.TAB_CHAR,this.tabSize):u,r=this.dom.createElement("span");r.className=i+o,r.textContent=u,this.$tabStrings[" "]=r;var r=this.dom.createElement("span");r.className=i+a,r.textContent=f,this.$tabStrings["	"]=r}},this.updateLines=function(e,t,n){if(this.config.lastRow!=e.lastRow||this.config.firstRow!=e.firstRow)return this.update(e);this.config=e;var r=Math.max(t,e.firstRow),i=Math.min(n,e.lastRow),s=this.element.childNodes,o=0;for(var u=e.firstRow;u<r;u++){var a=this.session.getFoldLine(u);if(a){if(a.containsRow(r)){r=a.start.row;break}u=a.end.row}o++}var f=!1,u=r,a=this.session.getNextFoldLine(u),l=a?a.start.row:Infinity;for(;;){u>l&&(u=a.end.row+1,a=this.session.getNextFoldLine(u,a),l=a?a.start.row:Infinity);if(u>i)break;var c=s[o++];if(c){this.dom.removeChildren(c),this.$renderLine(c,u,u==l?a:!1),f&&(c.style.top=this.$lines.computeLineTop(u,e,this.session)+"px");var h=e.lineHeight*this.session.getRowLength(u)+"px";c.style.height!=h&&(f=!0,c.style.height=h)}u++}if(f)while(o<this.$lines.cells.length){var p=this.$lines.cells[o++];p.element.style.top=this.$lines.computeLineTop(p.row,e,this.session)+"px"}},this.scrollLines=function(e){var t=this.config;this.config=e;if(this.$lines.pageChanged(t,e))return this.update(e);this.$lines.moveContainer(e);var n=e.lastRow,r=t?t.lastRow:-1;if(!t||r<e.firstRow)return this.update(e);if(n<t.firstRow)return this.update(e);if(!t||t.lastRow<e.firstRow)return this.update(e);if(e.lastRow<t.firstRow)return this.update(e);if(t.firstRow<e.firstRow)for(var i=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);i>0;i--)this.$lines.shift();if(t.lastRow>e.lastRow)for(var i=this.session.getFoldedRowCount(e.lastRow+1,t.lastRow);i>0;i--)this.$lines.pop();e.firstRow<t.firstRow&&this.$lines.unshift(this.$renderLinesFragment(e,e.firstRow,t.firstRow-1)),e.lastRow>t.lastRow&&this.$lines.push(this.$renderLinesFragment(e,t.lastRow+1,e.lastRow))},this.$renderLinesFragment=function(e,t,n){var r=[],s=t,o=this.session.getNextFoldLine(s),u=o?o.start.row:Infinity;for(;;){s>u&&(s=o.end.row+1,o=this.session.getNextFoldLine(s,o),u=o?o.start.row:Infinity);if(s>n)break;var a=this.$lines.createCell(s,e,this.session),f=a.element;this.dom.removeChildren(f),i.setStyle(f.style,"height",this.$lines.computeLineHeight(s,e,this.session)+"px"),i.setStyle(f.style,"top",this.$lines.computeLineTop(s,e,this.session)+"px"),this.$renderLine(f,s,s==u?o:!1),this.$useLineGroups()?f.className="ace_line_group":f.className="ace_line",r.push(a),s++}return r},this.update=function(e){this.$lines.moveContainer(e),this.config=e;var t=e.firstRow,n=e.lastRow,r=this.$lines;while(r.getLength())r.pop();r.push(this.$renderLinesFragment(e,t,n))},this.$textToken={text:!0,rparen:!0,lparen:!0},this.$renderToken=function(e,t,n,r){var i=this,o=/(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g,u=this.dom.createFragment(this.element),a,f=0;while(a=o.exec(r)){var l=a[1],c=a[2],h=a[3],p=a[4],d=a[5];if(!i.showSpaces&&c)continue;var v=f!=a.index?r.slice(f,a.index):"";f=a.index+a[0].length,v&&u.appendChild(this.dom.createTextNode(v,this.element));if(l){var m=i.session.getScreenTabSize(t+a.index);u.appendChild(i.$tabStrings[m].cloneNode(!0)),t+=m-1}else if(c)if(i.showSpaces){var g=this.dom.createElement("span");g.className="ace_invisible ace_invisible_space",g.textContent=s.stringRepeat(i.SPACE_CHAR,c.length),u.appendChild(g)}else u.appendChild(this.com.createTextNode(c,this.element));else if(h){var g=this.dom.createElement("span");g.className="ace_invisible ace_invisible_space ace_invalid",g.textContent=s.stringRepeat(i.SPACE_CHAR,h.length),u.appendChild(g)}else if(p){t+=1;var g=this.dom.createElement("span");g.style.width=i.config.characterWidth*2+"px",g.className=i.showSpaces?"ace_cjk ace_invisible ace_invisible_space":"ace_cjk",g.textContent=i.showSpaces?i.SPACE_CHAR:p,u.appendChild(g)}else if(d){t+=1;var g=this.dom.createElement("span");g.style.width=i.config.characterWidth*2+"px",g.className="ace_cjk",g.textContent=d,u.appendChild(g)}}u.appendChild(this.dom.createTextNode(f?r.slice(f):r,this.element));if(!this.$textToken[n.type]){var y="ace_"+n.type.replace(/\./g," ace_"),g=this.dom.createElement("span");n.type=="fold"&&(g.style.width=n.value.length*this.config.characterWidth+"px"),g.className=y,g.appendChild(u),e.appendChild(g)}else e.appendChild(u);return t+r.length},this.renderIndentGuide=function(e,t,n){var r=t.search(this.$indentGuideRe);if(r<=0||r>=n)return t;if(t[0]==" "){r-=r%this.tabSize;var i=r/this.tabSize;for(var s=0;s<i;s++)e.appendChild(this.$tabStrings[" "].cloneNode(!0));return t.substr(r)}if(t[0]=="	"){for(var s=0;s<r;s++)e.appendChild(this.$tabStrings["	"].cloneNode(!0));return t.substr(r)}return t},this.$createLineElement=function(e){var t=this.dom.createElement("div");return t.className="ace_line",t.style.height=this.config.lineHeight+"px",t},this.$renderWrappedLine=function(e,t,n){var r=0,i=0,o=n[0],u=0,a=this.$createLineElement();e.appendChild(a);for(var f=0;f<t.length;f++){var l=t[f],c=l.value;if(f==0&&this.displayIndentGuides){r=c.length,c=this.renderIndentGuide(a,c,o);if(!c)continue;r-=c.length}if(r+c.length<o)u=this.$renderToken(a,u,l,c),r+=c.length;else{while(r+c.length>=o)u=this.$renderToken(a,u,l,c.substring(0,o-r)),c=c.substring(o-r),r=o,a=this.$createLineElement(),e.appendChild(a),a.appendChild(this.dom.createTextNode(s.stringRepeat("\u00a0",n.indent),this.element)),i++,u=0,o=n[i]||Number.MAX_VALUE;c.length!=0&&(r+=c.length,u=this.$renderToken(a,u,l,c))}}n[n.length-1]>this.MAX_LINE_LENGTH&&this.$renderOverflowMessage(a,u,null,"",!0)},this.$renderSimpleLine=function(e,t){var n=0,r=t[0],i=r.value;this.displayIndentGuides&&(i=this.renderIndentGuide(e,i)),i&&(n=this.$renderToken(e,n,r,i));for(var s=1;s<t.length;s++){r=t[s],i=r.value;if(n+i.length>this.MAX_LINE_LENGTH)return this.$renderOverflowMessage(e,n,r,i);n=this.$renderToken(e,n,r,i)}},this.$renderOverflowMessage=function(e,t,n,r,i){n&&this.$renderToken(e,t,n,r.slice(0,this.MAX_LINE_LENGTH-t));var s=this.dom.createElement("span");s.className="ace_inline_button ace_keyword ace_toggle_wrap",s.textContent=i?"<hide>":"<click to see more...>",e.appendChild(s)},this.$renderLine=function(e,t,n){!n&&n!=0&&(n=this.session.getFoldLine(t));if(n)var r=this.$getFoldLineTokens(t,n);else var r=this.session.getTokens(t);var i=e;if(r.length){var s=this.session.getRowSplitData(t);if(s&&s.length){this.$renderWrappedLine(e,r,s);var i=e.lastChild}else{var i=e;this.$useLineGroups()&&(i=this.$createLineElement(),e.appendChild(i)),this.$renderSimpleLine(i,r)}}else this.$useLineGroups()&&(i=this.$createLineElement(),e.appendChild(i));if(this.showEOL&&i){n&&(t=n.end.row);var o=this.dom.createElement("span");o.className="ace_invisible ace_invisible_eol",o.textContent=t==this.session.getLength()-1?this.EOF_CHAR:this.EOL_CHAR,i.appendChild(o)}},this.$getFoldLineTokens=function(e,t){function i(e,t,n){var i=0,s=0;while(s+e[i].value.length<t){s+=e[i].value.length,i++;if(i==e.length)return}if(s!=t){var o=e[i].value.substring(t-s);o.length>n-t&&(o=o.substring(0,n-t)),r.push({type:e[i].type,value:o}),s=t+o.length,i+=1}while(s<n&&i<e.length){var o=e[i].value;o.length+s>n?r.push({type:e[i].type,value:o.substring(0,n-s)}):r.push(e[i]),s+=o.length,i+=1}}var n=this.session,r=[],s=n.getTokens(e);return t.walk(function(e,t,o,u,a){e!=null?r.push({type:"fold",value:e}):(a&&(s=n.getTokens(t)),s.length&&i(s,u,o))},t.end.row,this.session.getLine(t.end.row).length),r},this.$useLineGroups=function(){return this.session.getUseWrapMode()},this.destroy=function(){}}).call(a.prototype),t.Text=a}),ace.define("ace/layer/cursor",["require","exports","module","ace/lib/dom"],function(e,t,n){"use strict";var r=e("../lib/dom"),i=function(e){this.element=r.createElement("div"),this.element.className="ace_layer ace_cursor-layer",e.appendChild(this.element),this.isVisible=!1,this.isBlinking=!0,this.blinkInterval=1e3,this.smoothBlinking=!1,this.cursors=[],this.cursor=this.addCursor(),r.addCssClass(this.element,"ace_hidden-cursors"),this.$updateCursors=this.$updateOpacity.bind(this)};(function(){this.$updateOpacity=function(e){var t=this.cursors;for(var n=t.length;n--;)r.setStyle(t[n].style,"opacity",e?"":"0")},this.$startCssAnimation=function(){var e=this.cursors;for(var t=e.length;t--;)e[t].style.animationDuration=this.blinkInterval+"ms";setTimeout(function(){r.addCssClass(this.element,"ace_animate-blinking")}.bind(this))},this.$stopCssAnimation=function(){r.removeCssClass(this.element,"ace_animate-blinking")},this.$padding=0,this.setPadding=function(e){this.$padding=e},this.setSession=function(e){this.session=e},this.setBlinking=function(e){e!=this.isBlinking&&(this.isBlinking=e,this.restartTimer())},this.setBlinkInterval=function(e){e!=this.blinkInterval&&(this.blinkInterval=e,this.restartTimer())},this.setSmoothBlinking=function(e){e!=this.smoothBlinking&&(this.smoothBlinking=e,r.setCssClass(this.element,"ace_smooth-blinking",e),this.$updateCursors(!0),this.restartTimer())},this.addCursor=function(){var e=r.createElement("div");return e.className="ace_cursor",this.element.appendChild(e),this.cursors.push(e),e},this.removeCursor=function(){if(this.cursors.length>1){var e=this.cursors.pop();return e.parentNode.removeChild(e),e}},this.hideCursor=function(){this.isVisible=!1,r.addCssClass(this.element,"ace_hidden-cursors"),this.restartTimer()},this.showCursor=function(){this.isVisible=!0,r.removeCssClass(this.element,"ace_hidden-cursors"),this.restartTimer()},this.restartTimer=function(){var e=this.$updateCursors;clearInterval(this.intervalId),clearTimeout(this.timeoutId),this.$stopCssAnimation(),this.smoothBlinking&&r.removeCssClass(this.element,"ace_smooth-blinking"),e(!0);if(!this.isBlinking||!this.blinkInterval||!this.isVisible){this.$stopCssAnimation();return}this.smoothBlinking&&setTimeout(function(){r.addCssClass(this.element,"ace_smooth-blinking")}.bind(this));if(r.HAS_CSS_ANIMATION)this.$startCssAnimation();else{var t=function(){this.timeoutId=setTimeout(function(){e(!1)},.6*this.blinkInterval)}.bind(this);this.intervalId=setInterval(function(){e(!0),t()},this.blinkInterval),t()}},this.getPixelPosition=function(e,t){if(!this.config||!this.session)return{left:0,top:0};e||(e=this.session.selection.getCursor());var n=this.session.documentToScreenPosition(e),r=this.$padding+(this.session.$bidiHandler.isBidiRow(n.row,e.row)?this.session.$bidiHandler.getPosLeft(n.column):n.column*this.config.characterWidth),i=(n.row-(t?this.config.firstRowScreen:0))*this.config.lineHeight;return{left:r,top:i}},this.isCursorInView=function(e,t){return e.top>=0&&e.top<t.maxHeight},this.update=function(e){this.config=e;var t=this.session.$selectionMarkers,n=0,i=0;if(t===undefined||t.length===0)t=[{cursor:null}];for(var n=0,s=t.length;n<s;n++){var o=this.getPixelPosition(t[n].cursor,!0);if((o.top>e.height+e.offset||o.top<0)&&n>1)continue;var u=this.cursors[i++]||this.addCursor(),a=u.style;this.drawCursor?this.drawCursor(u,o,e,t[n],this.session):this.isCursorInView(o,e)?(r.setStyle(a,"display","block"),r.translate(u,o.left,o.top),r.setStyle(a,"width",Math.round(e.characterWidth)+"px"),r.setStyle(a,"height",e.lineHeight+"px")):r.setStyle(a,"display","none")}while(this.cursors.length>i)this.removeCursor();var f=this.session.getOverwrite();this.$setOverwrite(f),this.$pixelPos=o,this.restartTimer()},this.drawCursor=null,this.$setOverwrite=function(e){e!=this.overwrite&&(this.overwrite=e,e?r.addCssClass(this.element,"ace_overwrite-cursors"):r.removeCssClass(this.element,"ace_overwrite-cursors"))},this.destroy=function(){clearInterval(this.intervalId),clearTimeout(this.timeoutId)}}).call(i.prototype),t.Cursor=i}),ace.define("ace/scrollbar",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./lib/event"),o=e("./lib/event_emitter").EventEmitter,u=32768,a=function(e){this.element=i.createElement("div"),this.element.className="ace_scrollbar ace_scrollbar"+this.classSuffix,this.inner=i.createElement("div"),this.inner.className="ace_scrollbar-inner",this.inner.textContent="\u00a0",this.element.appendChild(this.inner),e.appendChild(this.element),this.setVisible(!1),this.skipEvent=!1,s.addListener(this.element,"scroll",this.onScroll.bind(this)),s.addListener(this.element,"mousedown",s.preventDefault)};(function(){r.implement(this,o),this.setVisible=function(e){this.element.style.display=e?"":"none",this.isVisible=e,this.coeff=1}}).call(a.prototype);var f=function(e,t){a.call(this,e),this.scrollTop=0,this.scrollHeight=0,t.$scrollbarWidth=this.width=i.scrollbarWidth(e.ownerDocument),this.inner.style.width=this.element.style.width=(this.width||15)+5+"px",this.$minWidth=0};r.inherits(f,a),function(){this.classSuffix="-v",this.onScroll=function(){if(!this.skipEvent){this.scrollTop=this.element.scrollTop;if(this.coeff!=1){var e=this.element.clientHeight/this.scrollHeight;this.scrollTop=this.scrollTop*(1-e)/(this.coeff-e)}this._emit("scroll",{data:this.scrollTop})}this.skipEvent=!1},this.getWidth=function(){return Math.max(this.isVisible?this.width:0,this.$minWidth||0)},this.setHeight=function(e){this.element.style.height=e+"px"},this.setInnerHeight=this.setScrollHeight=function(e){this.scrollHeight=e,e>u?(this.coeff=u/e,e=u):this.coeff!=1&&(this.coeff=1),this.inner.style.height=e+"px"},this.setScrollTop=function(e){this.scrollTop!=e&&(this.skipEvent=!0,this.scrollTop=e,this.element.scrollTop=e*this.coeff)}}.call(f.prototype);var l=function(e,t){a.call(this,e),this.scrollLeft=0,this.height=t.$scrollbarWidth,this.inner.style.height=this.element.style.height=(this.height||15)+5+"px"};r.inherits(l,a),function(){this.classSuffix="-h",this.onScroll=function(){this.skipEvent||(this.scrollLeft=this.element.scrollLeft,this._emit("scroll",{data:this.scrollLeft})),this.skipEvent=!1},this.getHeight=function(){return this.isVisible?this.height:0},this.setWidth=function(e){this.element.style.width=e+"px"},this.setInnerWidth=function(e){this.inner.style.width=e+"px"},this.setScrollWidth=function(e){this.inner.style.width=e+"px"},this.setScrollLeft=function(e){this.scrollLeft!=e&&(this.skipEvent=!0,this.scrollLeft=this.element.scrollLeft=e)}}.call(l.prototype),t.ScrollBar=f,t.ScrollBarV=f,t.ScrollBarH=l,t.VScrollBar=f,t.HScrollBar=l}),ace.define("ace/renderloop",["require","exports","module","ace/lib/event"],function(e,t,n){"use strict";var r=e("./lib/event"),i=function(e,t){this.onRender=e,this.pending=!1,this.changes=0,this.$recursionLimit=2,this.window=t||window;var n=this;this._flush=function(e){n.pending=!1;var t=n.changes;t&&(r.blockIdle(100),n.changes=0,n.onRender(t));if(n.changes){if(n.$recursionLimit--<0)return;n.schedule()}else n.$recursionLimit=2}};(function(){this.schedule=function(e){this.changes=this.changes|e,this.changes&&!this.pending&&(r.nextFrame(this._flush),this.pending=!0)},this.clear=function(e){var t=this.changes;return this.changes=0,t}}).call(i.prototype),t.RenderLoop=i}),ace.define("ace/layer/font_metrics",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/lib/useragent","ace/lib/event_emitter"],function(e,t,n){var r=e("../lib/oop"),i=e("../lib/dom"),s=e("../lib/lang"),o=e("../lib/event"),u=e("../lib/useragent"),a=e("../lib/event_emitter").EventEmitter,f=256,l=typeof ResizeObserver=="function",c=200,h=t.FontMetrics=function(e){this.el=i.createElement("div"),this.$setMeasureNodeStyles(this.el.style,!0),this.$main=i.createElement("div"),this.$setMeasureNodeStyles(this.$main.style),this.$measureNode=i.createElement("div"),this.$setMeasureNodeStyles(this.$measureNode.style),this.el.appendChild(this.$main),this.el.appendChild(this.$measureNode),e.appendChild(this.el),this.$measureNode.textContent=s.stringRepeat("X",f),this.$characterSize={width:0,height:0},l?this.$addObserver():this.checkForSizeChanges()};(function(){r.implement(this,a),this.$characterSize={width:0,height:0},this.$setMeasureNodeStyles=function(e,t){e.width=e.height="auto",e.left=e.top="0px",e.visibility="hidden",e.position="absolute",e.whiteSpace="pre",u.isIE<8?e["font-family"]="inherit":e.font="inherit",e.overflow=t?"hidden":"visible"},this.checkForSizeChanges=function(e){e===undefined&&(e=this.$measureSizes());if(e&&(this.$characterSize.width!==e.width||this.$characterSize.height!==e.height)){this.$measureNode.style.fontWeight="bold";var t=this.$measureSizes();this.$measureNode.style.fontWeight="",this.$characterSize=e,this.charSizes=Object.create(null),this.allowBoldFonts=t&&t.width===e.width&&t.height===e.height,this._emit("changeCharacterSize",{data:e})}},this.$addObserver=function(){var e=this;this.$observer=new window.ResizeObserver(function(t){e.checkForSizeChanges()}),this.$observer.observe(this.$measureNode)},this.$pollSizeChanges=function(){if(this.$pollSizeChangesTimer||this.$observer)return this.$pollSizeChangesTimer;var e=this;return this.$pollSizeChangesTimer=o.onIdle(function t(){e.checkForSizeChanges(),o.onIdle(t,500)},500)},this.setPolling=function(e){e?this.$pollSizeChanges():this.$pollSizeChangesTimer&&(clearInterval(this.$pollSizeChangesTimer),this.$pollSizeChangesTimer=0)},this.$measureSizes=function(e){var t={height:(e||this.$measureNode).clientHeight,width:(e||this.$measureNode).clientWidth/f};return t.width===0||t.height===0?null:t},this.$measureCharWidth=function(e){this.$main.textContent=s.stringRepeat(e,f);var t=this.$main.getBoundingClientRect();return t.width/f},this.getCharacterWidth=function(e){var t=this.charSizes[e];return t===undefined&&(t=this.charSizes[e]=this.$measureCharWidth(e)/this.$characterSize.width),t},this.destroy=function(){clearInterval(this.$pollSizeChangesTimer),this.$observer&&this.$observer.disconnect(),this.el&&this.el.parentNode&&this.el.parentNode.removeChild(this.el)},this.$getZoom=function e(t){return!t||!t.parentElement?1:(window.getComputedStyle(t).zoom||1)*e(t.parentElement)},this.$initTransformMeasureNodes=function(){var e=function(e,t){return["div",{style:"position: absolute;top:"+e+"px;left:"+t+"px;"}]};this.els=i.buildDom([e(0,0),e(c,0),e(0,c),e(c,c)],this.el)},this.transformCoordinates=function(e,t){function r(e,t,n){var r=e[1]*t[0]-e[0]*t[1];return[(-t[1]*n[0]+t[0]*n[1])/r,(+e[1]*n[0]-e[0]*n[1])/r]}function i(e,t){return[e[0]-t[0],e[1]-t[1]]}function s(e,t){return[e[0]+t[0],e[1]+t[1]]}function o(e,t){return[e*t[0],e*t[1]]}function u(e){var t=e.getBoundingClientRect();return[t.left,t.top]}if(e){var n=this.$getZoom(this.el);e=o(1/n,e)}this.els||this.$initTransformMeasureNodes();var a=u(this.els[0]),f=u(this.els[1]),l=u(this.els[2]),h=u(this.els[3]),p=r(i(h,f),i(h,l),i(s(f,l),s(h,a))),d=o(1+p[0],i(f,a)),v=o(1+p[1],i(l,a));if(t){var m=t,g=p[0]*m[0]/c+p[1]*m[1]/c+1,y=s(o(m[0],d),o(m[1],v));return s(o(1/g/c,y),a)}var b=i(e,a),w=r(i(d,o(p[0],b)),i(v,o(p[1],b)),b);return o(c,w)}}).call(h.prototype)}),ace.define("ace/virtual_renderer",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/config","ace/layer/gutter","ace/layer/marker","ace/layer/text","ace/layer/cursor","ace/scrollbar","ace/scrollbar","ace/renderloop","ace/layer/font_metrics","ace/lib/event_emitter","ace/lib/useragent"],function(e,t,n){"use strict";var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./config"),o=e("./layer/gutter").Gutter,u=e("./layer/marker").Marker,a=e("./layer/text").Text,f=e("./layer/cursor").Cursor,l=e("./scrollbar").HScrollBar,c=e("./scrollbar").VScrollBar,h=e("./renderloop").RenderLoop,p=e("./layer/font_metrics").FontMetrics,d=e("./lib/event_emitter").EventEmitter,v='.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;padding: 0;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;font-variant-ligatures: no-common-ligatures;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {opacity: 0;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_error_bracket {position: absolute;border-bottom: 1px solid #DE5555;border-radius: 0;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}.ace_placeholder {font-family: arial;transform: scale(0.9);transform-origin: left;white-space: pre;opacity: 0.7;margin: 0 10px;}',m=e("./lib/useragent"),g=m.isIE;i.importCssString(v,"ace_editor.css");var y=function(e,t){var n=this;this.container=e||i.createElement("div"),i.addCssClass(this.container,"ace_editor"),i.HI_DPI&&i.addCssClass(this.container,"ace_hidpi"),this.setTheme(t),this.$gutter=i.createElement("div"),this.$gutter.className="ace_gutter",this.container.appendChild(this.$gutter),this.$gutter.setAttribute("aria-hidden",!0),this.scroller=i.createElement("div"),this.scroller.className="ace_scroller",this.container.appendChild(this.scroller),this.content=i.createElement("div"),this.content.className="ace_content",this.scroller.appendChild(this.content),this.$gutterLayer=new o(this.$gutter),this.$gutterLayer.on("changeGutterWidth",this.onGutterResize.bind(this)),this.$markerBack=new u(this.content);var r=this.$textLayer=new a(this.content);this.canvas=r.element,this.$markerFront=new u(this.content),this.$cursorLayer=new f(this.content),this.$horizScroll=!1,this.$vScroll=!1,this.scrollBar=this.scrollBarV=new c(this.container,this),this.scrollBarH=new l(this.container,this),this.scrollBarV.on("scroll",function(e){n.$scrollAnimation||n.session.setScrollTop(e.data-n.scrollMargin.top)}),this.scrollBarH.on("scroll",function(e){n.$scrollAnimation||n.session.setScrollLeft(e.data-n.scrollMargin.left)}),this.scrollTop=0,this.scrollLeft=0,this.cursorPos={row:0,column:0},this.$fontMetrics=new p(this.container),this.$textLayer.$setFontMetrics(this.$fontMetrics),this.$textLayer.on("changeCharacterSize",function(e){n.updateCharacterSize(),n.onResize(!0,n.gutterWidth,n.$size.width,n.$size.height),n._signal("changeCharacterSize",e)}),this.$size={width:0,height:0,scrollerHeight:0,scrollerWidth:0,$dirty:!0},this.layerConfig={width:1,padding:0,firstRow:0,firstRowScreen:0,lastRow:0,lineHeight:0,characterWidth:0,minHeight:1,maxHeight:1,offset:0,height:1,gutterOffset:1},this.scrollMargin={left:0,right:0,top:0,bottom:0,v:0,h:0},this.margin={left:0,right:0,top:0,bottom:0,v:0,h:0},this.$keepTextAreaAtCursor=!m.isIOS,this.$loop=new h(this.$renderChanges.bind(this),this.container.ownerDocument.defaultView),this.$loop.schedule(this.CHANGE_FULL),this.updateCharacterSize(),this.setPadding(4),s.resetOptions(this),s._signal("renderer",this)};(function(){this.CHANGE_CURSOR=1,this.CHANGE_MARKER=2,this.CHANGE_GUTTER=4,this.CHANGE_SCROLL=8,this.CHANGE_LINES=16,this.CHANGE_TEXT=32,this.CHANGE_SIZE=64,this.CHANGE_MARKER_BACK=128,this.CHANGE_MARKER_FRONT=256,this.CHANGE_FULL=512,this.CHANGE_H_SCROLL=1024,r.implement(this,d),this.updateCharacterSize=function(){this.$textLayer.allowBoldFonts!=this.$allowBoldFonts&&(this.$allowBoldFonts=this.$textLayer.allowBoldFonts,this.setStyle("ace_nobold",!this.$allowBoldFonts)),this.layerConfig.characterWidth=this.characterWidth=this.$textLayer.getCharacterWidth(),this.layerConfig.lineHeight=this.lineHeight=this.$textLayer.getLineHeight(),this.$updatePrintMargin(),i.setStyle(this.scroller.style,"line-height",this.lineHeight+"px")},this.setSession=function(e){this.session&&this.session.doc.off("changeNewLineMode",this.onChangeNewLineMode),this.session=e,e&&this.scrollMargin.top&&e.getScrollTop()<=0&&e.setScrollTop(-this.scrollMargin.top),this.$cursorLayer.setSession(e),this.$markerBack.setSession(e),this.$markerFront.setSession(e),this.$gutterLayer.setSession(e),this.$textLayer.setSession(e);if(!e)return;this.$loop.schedule(this.CHANGE_FULL),this.session.$setFontMetrics(this.$fontMetrics),this.scrollBarH.scrollLeft=this.scrollBarV.scrollTop=null,this.onChangeNewLineMode=this.onChangeNewLineMode.bind(this),this.onChangeNewLineMode(),this.session.doc.on("changeNewLineMode",this.onChangeNewLineMode)},this.updateLines=function(e,t,n){t===undefined&&(t=Infinity),this.$changedLines?(this.$changedLines.firstRow>e&&(this.$changedLines.firstRow=e),this.$changedLines.lastRow<t&&(this.$changedLines.lastRow=t)):this.$changedLines={firstRow:e,lastRow:t};if(this.$changedLines.lastRow<this.layerConfig.firstRow){if(!n)return;this.$changedLines.lastRow=this.layerConfig.lastRow}if(this.$changedLines.firstRow>this.layerConfig.lastRow)return;this.$loop.schedule(this.CHANGE_LINES)},this.onChangeNewLineMode=function(){this.$loop.schedule(this.CHANGE_TEXT),this.$textLayer.$updateEolChar(),this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR)},this.onChangeTabSize=function(){this.$loop.schedule(this.CHANGE_TEXT|this.CHANGE_MARKER),this.$textLayer.onChangeTabSize()},this.updateText=function(){this.$loop.schedule(this.CHANGE_TEXT)},this.updateFull=function(e){e?this.$renderChanges(this.CHANGE_FULL,!0):this.$loop.schedule(this.CHANGE_FULL)},this.updateFontSize=function(){this.$textLayer.checkForSizeChanges()},this.$changes=0,this.$updateSizeAsync=function(){this.$loop.pending?this.$size.$dirty=!0:this.onResize()},this.onResize=function(e,t,n,r){if(this.resizing>2)return;this.resizing>0?this.resizing++:this.resizing=e?1:0;var i=this.container;r||(r=i.clientHeight||i.scrollHeight),n||(n=i.clientWidth||i.scrollWidth);var s=this.$updateCachedSize(e,t,n,r);if(!this.$size.scrollerHeight||!n&&!r)return this.resizing=0;e&&(this.$gutterLayer.$padding=null),e?this.$renderChanges(s|this.$changes,!0):this.$loop.schedule(s|this.$changes),this.resizing&&(this.resizing=0),this.scrollBarV.scrollLeft=this.scrollBarV.scrollTop=null},this.$updateCachedSize=function(e,t,n,r){r-=this.$extraHeight||0;var s=0,o=this.$size,u={width:o.width,height:o.height,scrollerHeight:o.scrollerHeight,scrollerWidth:o.scrollerWidth};r&&(e||o.height!=r)&&(o.height=r,s|=this.CHANGE_SIZE,o.scrollerHeight=o.height,this.$horizScroll&&(o.scrollerHeight-=this.scrollBarH.getHeight()),this.scrollBarV.element.style.bottom=this.scrollBarH.getHeight()+"px",s|=this.CHANGE_SCROLL);if(n&&(e||o.width!=n)){s|=this.CHANGE_SIZE,o.width=n,t==null&&(t=this.$showGutter?this.$gutter.offsetWidth:0),this.gutterWidth=t,i.setStyle(this.scrollBarH.element.style,"left",t+"px"),i.setStyle(this.scroller.style,"left",t+this.margin.left+"px"),o.scrollerWidth=Math.max(0,n-t-this.scrollBarV.getWidth()-this.margin.h),i.setStyle(this.$gutter.style,"left",this.margin.left+"px");var a=this.scrollBarV.getWidth()+"px";i.setStyle(this.scrollBarH.element.style,"right",a),i.setStyle(this.scroller.style,"right",a),i.setStyle(this.scroller.style,"bottom",this.scrollBarH.getHeight());if(this.session&&this.session.getUseWrapMode()&&this.adjustWrapLimit()||e)s|=this.CHANGE_FULL}return o.$dirty=!n||!r,s&&this._signal("resize",u),s},this.onGutterResize=function(e){var t=this.$showGutter?e:0;t!=this.gutterWidth&&(this.$changes|=this.$updateCachedSize(!0,t,this.$size.width,this.$size.height)),this.session.getUseWrapMode()&&this.adjustWrapLimit()?this.$loop.schedule(this.CHANGE_FULL):this.$size.$dirty?this.$loop.schedule(this.CHANGE_FULL):this.$computeLayerConfig()},this.adjustWrapLimit=function(){var e=this.$size.scrollerWidth-this.$padding*2,t=Math.floor(e/this.characterWidth);return this.session.adjustWrapLimit(t,this.$showPrintMargin&&this.$printMarginColumn)},this.setAnimatedScroll=function(e){this.setOption("animatedScroll",e)},this.getAnimatedScroll=function(){return this.$animatedScroll},this.setShowInvisibles=function(e){this.setOption("showInvisibles",e),this.session.$bidiHandler.setShowInvisibles(e)},this.getShowInvisibles=function(){return this.getOption("showInvisibles")},this.getDisplayIndentGuides=function(){return this.getOption("displayIndentGuides")},this.setDisplayIndentGuides=function(e){this.setOption("displayIndentGuides",e)},this.setShowPrintMargin=function(e){this.setOption("showPrintMargin",e)},this.getShowPrintMargin=function(){return this.getOption("showPrintMargin")},this.setPrintMarginColumn=function(e){this.setOption("printMarginColumn",e)},this.getPrintMarginColumn=function(){return this.getOption("printMarginColumn")},this.getShowGutter=function(){return this.getOption("showGutter")},this.setShowGutter=function(e){return this.setOption("showGutter",e)},this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)},this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)},this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},this.$updatePrintMargin=function(){if(!this.$showPrintMargin&&!this.$printMarginEl)return;if(!this.$printMarginEl){var e=i.createElement("div");e.className="ace_layer ace_print-margin-layer",this.$printMarginEl=i.createElement("div"),this.$printMarginEl.className="ace_print-margin",e.appendChild(this.$printMarginEl),this.content.insertBefore(e,this.content.firstChild)}var t=this.$printMarginEl.style;t.left=Math.round(this.characterWidth*this.$printMarginColumn+this.$padding)+"px",t.visibility=this.$showPrintMargin?"visible":"hidden",this.session&&this.session.$wrap==-1&&this.adjustWrapLimit()},this.getContainerElement=function(){return this.container},this.getMouseEventTarget=function(){return this.scroller},this.getTextAreaContainer=function(){return this.container},this.$moveTextAreaToCursor=function(){if(this.$isMousePressed)return;var e=this.textarea.style,t=this.$composition;if(!this.$keepTextAreaAtCursor&&!t){i.translate(this.textarea,-100,0);return}var n=this.$cursorLayer.$pixelPos;if(!n)return;t&&t.markerRange&&(n=this.$cursorLayer.getPixelPosition(t.markerRange.start,!0));var r=this.layerConfig,s=n.top,o=n.left;s-=r.offset;var u=t&&t.useTextareaForIME?this.lineHeight:g?0:1;if(s<0||s>r.height-u){i.translate(this.textarea,0,0);return}var a=1,f=this.$size.height-u;if(!t)s+=this.lineHeight;else if(t.useTextareaForIME){var l=this.textarea.value;a=this.characterWidth*this.session.$getStringScreenWidth(l)[0]}else s+=this.lineHeight+2;o-=this.scrollLeft,o>this.$size.scrollerWidth-a&&(o=this.$size.scrollerWidth-a),o+=this.gutterWidth+this.margin.left,i.setStyle(e,"height",u+"px"),i.setStyle(e,"width",a+"px"),i.translate(this.textarea,Math.min(o,this.$size.scrollerWidth-a),Math.min(s,f))},this.getFirstVisibleRow=function(){return this.layerConfig.firstRow},this.getFirstFullyVisibleRow=function(){return this.layerConfig.firstRow+(this.layerConfig.offset===0?0:1)},this.getLastFullyVisibleRow=function(){var e=this.layerConfig,t=e.lastRow,n=this.session.documentToScreenRow(t,0)*e.lineHeight;return n-this.session.getScrollTop()>e.height-e.lineHeight?t-1:t},this.getLastVisibleRow=function(){return this.layerConfig.lastRow},this.$padding=null,this.setPadding=function(e){this.$padding=e,this.$textLayer.setPadding(e),this.$cursorLayer.setPadding(e),this.$markerFront.setPadding(e),this.$markerBack.setPadding(e),this.$loop.schedule(this.CHANGE_FULL),this.$updatePrintMargin()},this.setScrollMargin=function(e,t,n,r){var i=this.scrollMargin;i.top=e|0,i.bottom=t|0,i.right=r|0,i.left=n|0,i.v=i.top+i.bottom,i.h=i.left+i.right,i.top&&this.scrollTop<=0&&this.session&&this.session.setScrollTop(-i.top),this.updateFull()},this.setMargin=function(e,t,n,r){var i=this.margin;i.top=e|0,i.bottom=t|0,i.right=r|0,i.left=n|0,i.v=i.top+i.bottom,i.h=i.left+i.right,this.$updateCachedSize(!0,this.gutterWidth,this.$size.width,this.$size.height),this.updateFull()},this.getHScrollBarAlwaysVisible=function(){return this.$hScrollBarAlwaysVisible},this.setHScrollBarAlwaysVisible=function(e){this.setOption("hScrollBarAlwaysVisible",e)},this.getVScrollBarAlwaysVisible=function(){return this.$vScrollBarAlwaysVisible},this.setVScrollBarAlwaysVisible=function(e){this.setOption("vScrollBarAlwaysVisible",e)},this.$updateScrollBarV=function(){var e=this.layerConfig.maxHeight,t=this.$size.scrollerHeight;!this.$maxLines&&this.$scrollPastEnd&&(e-=(t-this.lineHeight)*this.$scrollPastEnd,this.scrollTop>e-t&&(e=this.scrollTop+t,this.scrollBarV.scrollTop=null)),this.scrollBarV.setScrollHeight(e+this.scrollMargin.v),this.scrollBarV.setScrollTop(this.scrollTop+this.scrollMargin.top)},this.$updateScrollBarH=function(){this.scrollBarH.setScrollWidth(this.layerConfig.width+2*this.$padding+this.scrollMargin.h),this.scrollBarH.setScrollLeft(this.scrollLeft+this.scrollMargin.left)},this.$frozen=!1,this.freeze=function(){this.$frozen=!0},this.unfreeze=function(){this.$frozen=!1},this.$renderChanges=function(e,t){this.$changes&&(e|=this.$changes,this.$changes=0);if(!this.session||!this.container.offsetWidth||this.$frozen||!e&&!t){this.$changes|=e;return}if(this.$size.$dirty)return this.$changes|=e,this.onResize(!0);this.lineHeight||this.$textLayer.checkForSizeChanges(),this._signal("beforeRender",e),this.session&&this.session.$bidiHandler&&this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);var n=this.layerConfig;if(e&this.CHANGE_FULL||e&this.CHANGE_SIZE||e&this.CHANGE_TEXT||e&this.CHANGE_LINES||e&this.CHANGE_SCROLL||e&this.CHANGE_H_SCROLL){e|=this.$computeLayerConfig()|this.$loop.clear();if(n.firstRow!=this.layerConfig.firstRow&&n.firstRowScreen==this.layerConfig.firstRowScreen){var r=this.scrollTop+(n.firstRow-this.layerConfig.firstRow)*this.lineHeight;r>0&&(this.scrollTop=r,e|=this.CHANGE_SCROLL,e|=this.$computeLayerConfig()|this.$loop.clear())}n=this.layerConfig,this.$updateScrollBarV(),e&this.CHANGE_H_SCROLL&&this.$updateScrollBarH(),i.translate(this.content,-this.scrollLeft,-n.offset);var s=n.width+2*this.$padding+"px",o=n.minHeight+"px";i.setStyle(this.content.style,"width",s),i.setStyle(this.content.style,"height",o)}e&this.CHANGE_H_SCROLL&&(i.translate(this.content,-this.scrollLeft,-n.offset),this.scroller.className=this.scrollLeft<=0?"ace_scroller":"ace_scroller ace_scroll-left");if(e&this.CHANGE_FULL){this.$changedLines=null,this.$textLayer.update(n),this.$showGutter&&this.$gutterLayer.update(n),this.$markerBack.update(n),this.$markerFront.update(n),this.$cursorLayer.update(n),this.$moveTextAreaToCursor(),this._signal("afterRender",e);return}if(e&this.CHANGE_SCROLL){this.$changedLines=null,e&this.CHANGE_TEXT||e&this.CHANGE_LINES?this.$textLayer.update(n):this.$textLayer.scrollLines(n),this.$showGutter&&(e&this.CHANGE_GUTTER||e&this.CHANGE_LINES?this.$gutterLayer.update(n):this.$gutterLayer.scrollLines(n)),this.$markerBack.update(n),this.$markerFront.update(n),this.$cursorLayer.update(n),this.$moveTextAreaToCursor(),this._signal("afterRender",e);return}e&this.CHANGE_TEXT?(this.$changedLines=null,this.$textLayer.update(n),this.$showGutter&&this.$gutterLayer.update(n)):e&this.CHANGE_LINES?(this.$updateLines()||e&this.CHANGE_GUTTER&&this.$showGutter)&&this.$gutterLayer.update(n):e&this.CHANGE_TEXT||e&this.CHANGE_GUTTER?this.$showGutter&&this.$gutterLayer.update(n):e&this.CHANGE_CURSOR&&this.$highlightGutterLine&&this.$gutterLayer.updateLineHighlight(n),e&this.CHANGE_CURSOR&&(this.$cursorLayer.update(n),this.$moveTextAreaToCursor()),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_FRONT)&&this.$markerFront.update(n),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_BACK)&&this.$markerBack.update(n),this._signal("afterRender",e)},this.$autosize=function(){var e=this.session.getScreenLength()*this.lineHeight,t=this.$maxLines*this.lineHeight,n=Math.min(t,Math.max((this.$minLines||1)*this.lineHeight,e))+this.scrollMargin.v+(this.$extraHeight||0);this.$horizScroll&&(n+=this.scrollBarH.getHeight()),this.$maxPixelHeight&&n>this.$maxPixelHeight&&(n=this.$maxPixelHeight);var r=n<=2*this.lineHeight,i=!r&&e>t;if(n!=this.desiredHeight||this.$size.height!=this.desiredHeight||i!=this.$vScroll){i!=this.$vScroll&&(this.$vScroll=i,this.scrollBarV.setVisible(i));var s=this.container.clientWidth;this.container.style.height=n+"px",this.$updateCachedSize(!0,this.$gutterWidth,s,n),this.desiredHeight=n,this._signal("autosize")}},this.$computeLayerConfig=function(){var e=this.session,t=this.$size,n=t.height<=2*this.lineHeight,r=this.session.getScreenLength(),i=r*this.lineHeight,s=this.$getLongestLine(),o=!n&&(this.$hScrollBarAlwaysVisible||t.scrollerWidth-s-2*this.$padding<0),u=this.$horizScroll!==o;u&&(this.$horizScroll=o,this.scrollBarH.setVisible(o));var a=this.$vScroll;this.$maxLines&&this.lineHeight>1&&this.$autosize();var f=t.scrollerHeight+this.lineHeight,l=!this.$maxLines&&this.$scrollPastEnd?(t.scrollerHeight-this.lineHeight)*this.$scrollPastEnd:0;i+=l;var c=this.scrollMargin;this.session.setScrollTop(Math.max(-c.top,Math.min(this.scrollTop,i-t.scrollerHeight+c.bottom))),this.session.setScrollLeft(Math.max(-c.left,Math.min(this.scrollLeft,s+2*this.$padding-t.scrollerWidth+c.right)));var h=!n&&(this.$vScrollBarAlwaysVisible||t.scrollerHeight-i+l<0||this.scrollTop>c.top),p=a!==h;p&&(this.$vScroll=h,this.scrollBarV.setVisible(h));var d=this.scrollTop%this.lineHeight,v=Math.ceil(f/this.lineHeight)-1,m=Math.max(0,Math.round((this.scrollTop-d)/this.lineHeight)),g=m+v,y,b,w=this.lineHeight;m=e.screenToDocumentRow(m,0);var E=e.getFoldLine(m);E&&(m=E.start.row),y=e.documentToScreenRow(m,0),b=e.getRowLength(m)*w,g=Math.min(e.screenToDocumentRow(g,0),e.getLength()-1),f=t.scrollerHeight+e.getRowLength(g)*w+b,d=this.scrollTop-y*w;var S=0;if(this.layerConfig.width!=s||u)S=this.CHANGE_H_SCROLL;if(u||p)S|=this.$updateCachedSize(!0,this.gutterWidth,t.width,t.height),this._signal("scrollbarVisibilityChanged"),p&&(s=this.$getLongestLine());return this.layerConfig={width:s,padding:this.$padding,firstRow:m,firstRowScreen:y,lastRow:g,lineHeight:w,characterWidth:this.characterWidth,minHeight:f,maxHeight:i,offset:d,gutterOffset:w?Math.max(0,Math.ceil((d+t.height-t.scrollerHeight)/w)):0,height:this.$size.scrollerHeight},this.session.$bidiHandler&&this.session.$bidiHandler.setContentWidth(s-this.$padding),S},this.$updateLines=function(){if(!this.$changedLines)return;var e=this.$changedLines.firstRow,t=this.$changedLines.lastRow;this.$changedLines=null;var n=this.layerConfig;if(e>n.lastRow+1)return;if(t<n.firstRow)return;if(t===Infinity){this.$showGutter&&this.$gutterLayer.update(n),this.$textLayer.update(n);return}return this.$textLayer.updateLines(n,e,t),!0},this.$getLongestLine=function(){var e=this.session.getScreenWidth();return this.showInvisibles&&!this.session.$useWrapMode&&(e+=1),this.$textLayer&&e>this.$textLayer.MAX_LINE_LENGTH&&(e=this.$textLayer.MAX_LINE_LENGTH+30),Math.max(this.$size.scrollerWidth-2*this.$padding,Math.round(e*this.characterWidth))},this.updateFrontMarkers=function(){this.$markerFront.setMarkers(this.session.getMarkers(!0)),this.$loop.schedule(this.CHANGE_MARKER_FRONT)},this.updateBackMarkers=function(){this.$markerBack.setMarkers(this.session.getMarkers()),this.$loop.schedule(this.CHANGE_MARKER_BACK)},this.addGutterDecoration=function(e,t){this.$gutterLayer.addGutterDecoration(e,t)},this.removeGutterDecoration=function(e,t){this.$gutterLayer.removeGutterDecoration(e,t)},this.updateBreakpoints=function(e){this.$loop.schedule(this.CHANGE_GUTTER)},this.setAnnotations=function(e){this.$gutterLayer.setAnnotations(e),this.$loop.schedule(this.CHANGE_GUTTER)},this.updateCursor=function(){this.$loop.schedule(this.CHANGE_CURSOR)},this.hideCursor=function(){this.$cursorLayer.hideCursor()},this.showCursor=function(){this.$cursorLayer.showCursor()},this.scrollSelectionIntoView=function(e,t,n){this.scrollCursorIntoView(e,n),this.scrollCursorIntoView(t,n)},this.scrollCursorIntoView=function(e,t,n){if(this.$size.scrollerHeight===0)return;var r=this.$cursorLayer.getPixelPosition(e),i=r.left,s=r.top,o=n&&n.top||0,u=n&&n.bottom||0,a=this.$scrollAnimation?this.session.getScrollTop():this.scrollTop;a+o>s?(t&&a+o>s+this.lineHeight&&(s-=t*this.$size.scrollerHeight),s===0&&(s=-this.scrollMargin.top),this.session.setScrollTop(s)):a+this.$size.scrollerHeight-u<s+this.lineHeight&&(t&&a+this.$size.scrollerHeight-u<s-this.lineHeight&&(s+=t*this.$size.scrollerHeight),this.session.setScrollTop(s+this.lineHeight+u-this.$size.scrollerHeight));var f=this.scrollLeft;f>i?(i<this.$padding+2*this.layerConfig.characterWidth&&(i=-this.scrollMargin.left),this.session.setScrollLeft(i)):f+this.$size.scrollerWidth<i+this.characterWidth?this.session.setScrollLeft(Math.round(i+this.characterWidth-this.$size.scrollerWidth)):f<=this.$padding&&i-f<this.characterWidth&&this.session.setScrollLeft(0)},this.getScrollTop=function(){return this.session.getScrollTop()},this.getScrollLeft=function(){return this.session.getScrollLeft()},this.getScrollTopRow=function(){return this.scrollTop/this.lineHeight},this.getScrollBottomRow=function(){return Math.max(0,Math.floor((this.scrollTop+this.$size.scrollerHeight)/this.lineHeight)-1)},this.scrollToRow=function(e){this.session.setScrollTop(e*this.lineHeight)},this.alignCursor=function(e,t){typeof e=="number"&&(e={row:e,column:0});var n=this.$cursorLayer.getPixelPosition(e),r=this.$size.scrollerHeight-this.lineHeight,i=n.top-r*(t||0);return this.session.setScrollTop(i),i},this.STEPS=8,this.$calcSteps=function(e,t){var n=0,r=this.STEPS,i=[],s=function(e,t,n){return n*(Math.pow(e-1,3)+1)+t};for(n=0;n<r;++n)i.push(s(n/this.STEPS,e,t-e));return i},this.scrollToLine=function(e,t,n,r){var i=this.$cursorLayer.getPixelPosition({row:e,column:0}),s=i.top;t&&(s-=this.$size.scrollerHeight/2);var o=this.scrollTop;this.session.setScrollTop(s),n!==!1&&this.animateScrolling(o,r)},this.animateScrolling=function(e,t){var n=this.scrollTop;if(!this.$animatedScroll)return;var r=this;if(e==n)return;if(this.$scrollAnimation){var i=this.$scrollAnimation.steps;if(i.length){e=i[0];if(e==n)return}}var s=r.$calcSteps(e,n);this.$scrollAnimation={from:e,to:n,steps:s},clearInterval(this.$timer),r.session.setScrollTop(s.shift()),r.session.$scrollTop=n,this.$timer=setInterval(function(){if(!r.session)return clearInterval(r.$timer);s.length?(r.session.setScrollTop(s.shift()),r.session.$scrollTop=n):n!=null?(r.session.$scrollTop=-1,r.session.setScrollTop(n),n=null):(r.$timer=clearInterval(r.$timer),r.$scrollAnimation=null,t&&t())},10)},this.scrollToY=function(e){this.scrollTop!==e&&(this.$loop.schedule(this.CHANGE_SCROLL),this.scrollTop=e)},this.scrollToX=function(e){this.scrollLeft!==e&&(this.scrollLeft=e),this.$loop.schedule(this.CHANGE_H_SCROLL)},this.scrollTo=function(e,t){this.session.setScrollTop(t),this.session.setScrollLeft(t)},this.scrollBy=function(e,t){t&&this.session.setScrollTop(this.session.getScrollTop()+t),e&&this.session.setScrollLeft(this.session.getScrollLeft()+e)},this.isScrollableBy=function(e,t){if(t<0&&this.session.getScrollTop()>=1-this.scrollMargin.top)return!0;if(t>0&&this.session.getScrollTop()+this.$size.scrollerHeight-this.layerConfig.maxHeight<-1+this.scrollMargin.bottom)return!0;if(e<0&&this.session.getScrollLeft()>=1-this.scrollMargin.left)return!0;if(e>0&&this.session.getScrollLeft()+this.$size.scrollerWidth-this.layerConfig.width<-1+this.scrollMargin.right)return!0},this.pixelToScreenCoordinates=function(e,t){var n;if(this.$hasCssTransforms){n={top:0,left:0};var r=this.$fontMetrics.transformCoordinates([e,t]);e=r[1]-this.gutterWidth-this.margin.left,t=r[0]}else n=this.scroller.getBoundingClientRect();var i=e+this.scrollLeft-n.left-this.$padding,s=i/this.characterWidth,o=Math.floor((t+this.scrollTop-n.top)/this.lineHeight),u=this.$blockCursor?Math.floor(s):Math.round(s);return{row:o,column:u,side:s-u>0?1:-1,offsetX:i}},this.screenToTextCoordinates=function(e,t){var n;if(this.$hasCssTransforms){n={top:0,left:0};var r=this.$fontMetrics.transformCoordinates([e,t]);e=r[1]-this.gutterWidth-this.margin.left,t=r[0]}else n=this.scroller.getBoundingClientRect();var i=e+this.scrollLeft-n.left-this.$padding,s=i/this.characterWidth,o=this.$blockCursor?Math.floor(s):Math.round(s),u=Math.floor((t+this.scrollTop-n.top)/this.lineHeight);return this.session.screenToDocumentPosition(u,Math.max(o,0),i)},this.textToScreenCoordinates=function(e,t){var n=this.scroller.getBoundingClientRect(),r=this.session.documentToScreenPosition(e,t),i=this.$padding+(this.session.$bidiHandler.isBidiRow(r.row,e)?this.session.$bidiHandler.getPosLeft(r.column):Math.round(r.column*this.characterWidth)),s=r.row*this.lineHeight;return{pageX:n.left+i-this.scrollLeft,pageY:n.top+s-this.scrollTop}},this.visualizeFocus=function(){i.addCssClass(this.container,"ace_focus")},this.visualizeBlur=function(){i.removeCssClass(this.container,"ace_focus")},this.showComposition=function(e){this.$composition=e,e.cssText||(e.cssText=this.textarea.style.cssText),e.useTextareaForIME==undefined&&(e.useTextareaForIME=this.$useTextareaForIME),this.$useTextareaForIME?(i.addCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText="",this.$moveTextAreaToCursor(),this.$cursorLayer.element.style.display="none"):e.markerId=this.session.addMarker(e.markerRange,"ace_composition_marker","text")},this.setCompositionText=function(e){var t=this.session.selection.cursor;this.addToken(e,"composition_placeholder",t.row,t.column),this.$moveTextAreaToCursor()},this.hideComposition=function(){if(!this.$composition)return;this.$composition.markerId&&this.session.removeMarker(this.$composition.markerId),i.removeCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText=this.$composition.cssText;var e=this.session.selection.cursor;this.removeExtraToken(e.row,e.column),this.$composition=null,this.$cursorLayer.element.style.display=""},this.addToken=function(e,t,n,r){var i=this.session;i.bgTokenizer.lines[n]=null;var s={type:t,value:e},o=i.getTokens(n);if(r==null)o.push(s);else{var u=0;for(var a=0;a<o.length;a++){var f=o[a];u+=f.value.length;if(r<=u){var l=f.value.length-(u-r),c=f.value.slice(0,l),h=f.value.slice(l);o.splice(a,1,{type:f.type,value:c},s,{type:f.type,value:h});break}}}this.updateLines(n,n)},this.removeExtraToken=function(e,t){this.updateLines(e,e)},this.setTheme=function(e,t){function o(r){if(n.$themeId!=e)return t&&t();if(!r||!r.cssClass)throw new Error("couldn't load module "+e+" or it didn't call define");r.$id&&(n.$themeId=r.$id),i.importCssString(r.cssText,r.cssClass,n.container),n.theme&&i.removeCssClass(n.container,n.theme.cssClass);var s="padding"in r?r.padding:"padding"in(n.theme||{})?4:n.$padding;n.$padding&&s!=n.$padding&&n.setPadding(s),n.$theme=r.cssClass,n.theme=r,i.addCssClass(n.container,r.cssClass),i.setCssClass(n.container,"ace_dark",r.isDark),n.$size&&(n.$size.width=0,n.$updateSizeAsync()),n._dispatchEvent("themeLoaded",{theme:r}),t&&t()}var n=this;this.$themeId=e,n._dispatchEvent("themeChange",{theme:e});if(!e||typeof e=="string"){var r=e||this.$options.theme.initialValue;s.loadModule(["theme",r],o)}else o(e)},this.getTheme=function(){return this.$themeId},this.setStyle=function(e,t){i.setCssClass(this.container,e,t!==!1)},this.unsetStyle=function(e){i.removeCssClass(this.container,e)},this.setCursorStyle=function(e){i.setStyle(this.scroller.style,"cursor",e)},this.setMouseCursor=function(e){i.setStyle(this.scroller.style,"cursor",e)},this.attachToShadowRoot=function(){i.importCssString(v,"ace_editor.css",this.container)},this.destroy=function(){this.freeze(),this.$fontMetrics.destroy(),this.$cursorLayer.destroy(),this.removeAllListeners(),this.container.textContent=""}}).call(y.prototype),s.defineOptions(y.prototype,"renderer",{animatedScroll:{initialValue:!1},showInvisibles:{set:function(e){this.$textLayer.setShowInvisibles(e)&&this.$loop.schedule(this.CHANGE_TEXT)},initialValue:!1},showPrintMargin:{set:function(){this.$updatePrintMargin()},initialValue:!0},printMarginColumn:{set:function(){this.$updatePrintMargin()},initialValue:80},printMargin:{set:function(e){typeof e=="number"&&(this.$printMarginColumn=e),this.$showPrintMargin=!!e,this.$updatePrintMargin()},get:function(){return this.$showPrintMargin&&this.$printMarginColumn}},showGutter:{set:function(e){this.$gutter.style.display=e?"block":"none",this.$loop.schedule(this.CHANGE_FULL),this.onGutterResize()},initialValue:!0},fadeFoldWidgets:{set:function(e){i.setCssClass(this.$gutter,"ace_fade-fold-widgets",e)},initialValue:!1},showFoldWidgets:{set:function(e){this.$gutterLayer.setShowFoldWidgets(e),this.$loop.schedule(this.CHANGE_GUTTER)},initialValue:!0},displayIndentGuides:{set:function(e){this.$textLayer.setDisplayIndentGuides(e)&&this.$loop.schedule(this.CHANGE_TEXT)},initialValue:!0},highlightGutterLine:{set:function(e){this.$gutterLayer.setHighlightGutterLine(e),this.$loop.schedule(this.CHANGE_GUTTER)},initialValue:!0},hScrollBarAlwaysVisible:{set:function(e){(!this.$hScrollBarAlwaysVisible||!this.$horizScroll)&&this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:!1},vScrollBarAlwaysVisible:{set:function(e){(!this.$vScrollBarAlwaysVisible||!this.$vScroll)&&this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:!1},fontSize:{set:function(e){typeof e=="number"&&(e+="px"),this.container.style.fontSize=e,this.updateFontSize()},initialValue:12},fontFamily:{set:function(e){this.container.style.fontFamily=e,this.updateFontSize()}},maxLines:{set:function(e){this.updateFull()}},minLines:{set:function(e){this.$minLines<562949953421311||(this.$minLines=0),this.updateFull()}},maxPixelHeight:{set:function(e){this.updateFull()},initialValue:0},scrollPastEnd:{set:function(e){e=+e||0;if(this.$scrollPastEnd==e)return;this.$scrollPastEnd=e,this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:0,handlesSet:!0},fixedWidthGutter:{set:function(e){this.$gutterLayer.$fixedWidth=!!e,this.$loop.schedule(this.CHANGE_GUTTER)}},theme:{set:function(e){this.setTheme(e)},get:function(){return this.$themeId||this.theme},initialValue:"./theme/textmate",handlesSet:!0},hasCssTransforms:{},useTextareaForIME:{initialValue:!m.isMobile&&!m.isIE}}),t.VirtualRenderer=y}),ace.define("ace/worker/worker_client",["require","exports","module","ace/lib/oop","ace/lib/net","ace/lib/event_emitter","ace/config"],function(e,t,n){"use strict";function u(e){var t="importScripts('"+i.qualifyURL(e)+"');";try{return new Blob([t],{type:"application/javascript"})}catch(n){var r=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder,s=new r;return s.append(t),s.getBlob("application/javascript")}}function a(e){if(typeof Worker=="undefined")return{postMessage:function(){},terminate:function(){}};if(o.get("loadWorkerFromBlob")){var t=u(e),n=window.URL||window.webkitURL,r=n.createObjectURL(t);return new Worker(r)}return new Worker(e)}var r=e("../lib/oop"),i=e("../lib/net"),s=e("../lib/event_emitter").EventEmitter,o=e("../config"),f=function(e){e.postMessage||(e=this.$createWorkerFromOldConfig.apply(this,arguments)),this.$worker=e,this.$sendDeltaQueue=this.$sendDeltaQueue.bind(this),this.changeListener=this.changeListener.bind(this),this.onMessage=this.onMessage.bind(this),this.callbackId=1,this.callbacks={},this.$worker.onmessage=this.onMessage};(function(){r.implement(this,s),this.$createWorkerFromOldConfig=function(t,n,r,i,s){e.nameToUrl&&!e.toUrl&&(e.toUrl=e.nameToUrl);if(o.get("packaged")||!e.toUrl)i=i||o.moduleUrl(n,"worker");else{var u=this.$normalizePath;i=i||u(e.toUrl("ace/worker/worker.js",null,"_"));var f={};t.forEach(function(t){f[t]=u(e.toUrl(t,null,"_").replace(/(\.js)?(\?.*)?$/,""))})}return this.$worker=a(i),s&&this.send("importScripts",s),this.$worker.postMessage({init:!0,tlns:f,module:n,classname:r}),this.$worker},this.onMessage=function(e){var t=e.data;switch(t.type){case"event":this._signal(t.name,{data:t.data});break;case"call":var n=this.callbacks[t.id];n&&(n(t.data),delete this.callbacks[t.id]);break;case"error":this.reportError(t.data);break;case"log":window.console&&console.log&&console.log.apply(console,t.data)}},this.reportError=function(e){window.console&&console.error&&console.error(e)},this.$normalizePath=function(e){return i.qualifyURL(e)},this.terminate=function(){this._signal("terminate",{}),this.deltaQueue=null,this.$worker.terminate(),this.$worker=null,this.$doc&&this.$doc.off("change",this.changeListener),this.$doc=null},this.send=function(e,t){this.$worker.postMessage({command:e,args:t})},this.call=function(e,t,n){if(n){var r=this.callbackId++;this.callbacks[r]=n,t.push(r)}this.send(e,t)},this.emit=function(e,t){try{t.data&&t.data.err&&(t.data.err={message:t.data.err.message,stack:t.data.err.stack,code:t.data.err.code}),this.$worker.postMessage({event:e,data:{data:t.data}})}catch(n){console.error(n.stack)}},this.attachToDocument=function(e){this.$doc&&this.terminate(),this.$doc=e,this.call("setValue",[e.getValue()]),e.on("change",this.changeListener)},this.changeListener=function(e){this.deltaQueue||(this.deltaQueue=[],setTimeout(this.$sendDeltaQueue,0)),e.action=="insert"?this.deltaQueue.push(e.start,e.lines):this.deltaQueue.push(e.start,e.end)},this.$sendDeltaQueue=function(){var e=this.deltaQueue;if(!e)return;this.deltaQueue=null,e.length>50&&e.length>this.$doc.getLength()>>1?this.call("setValue",[this.$doc.getValue()]):this.emit("change",{data:e})}}).call(f.prototype);var l=function(e,t,n){var r=null,i=!1,u=Object.create(s),a=[],l=new f({messageBuffer:a,terminate:function(){},postMessage:function(e){a.push(e);if(!r)return;i?setTimeout(c):c()}});l.setEmitSync=function(e){i=e};var c=function(){var e=a.shift();e.command?r[e.command].apply(r,e.args):e.event&&u._signal(e.event,e.data)};return u.postMessage=function(e){l.onMessage({data:e})},u.callback=function(e,t){this.postMessage({type:"call",id:t,data:e})},u.emit=function(e,t){this.postMessage({type:"event",name:e,data:t})},o.loadModule(["worker",t],function(e){r=new e[n](u);while(a.length)c()}),l};t.UIWorkerClient=l,t.WorkerClient=f,t.createWorker=a}),ace.define("ace/placeholder",["require","exports","module","ace/range","ace/lib/event_emitter","ace/lib/oop"],function(e,t,n){"use strict";var r=e("./range").Range,i=e("./lib/event_emitter").EventEmitter,s=e("./lib/oop"),o=function(e,t,n,r,i,s){var o=this;this.length=t,this.session=e,this.doc=e.getDocument(),this.mainClass=i,this.othersClass=s,this.$onUpdate=this.onUpdate.bind(this),this.doc.on("change",this.$onUpdate),this.$others=r,this.$onCursorChange=function(){setTimeout(function(){o.onCursorChange()})},this.$pos=n;var u=e.getUndoManager().$undoStack||e.getUndoManager().$undostack||{length:-1};this.$undoStackDepth=u.length,this.setup(),e.selection.on("changeCursor",this.$onCursorChange)};(function(){s.implement(this,i),this.setup=function(){var e=this,t=this.doc,n=this.session;this.selectionBefore=n.selection.toJSON(),n.selection.inMultiSelectMode&&n.selection.toSingleRange(),this.pos=t.createAnchor(this.$pos.row,this.$pos.column);var i=this.pos;i.$insertRight=!0,i.detach(),i.markerId=n.addMarker(new r(i.row,i.column,i.row,i.column+this.length),this.mainClass,null,!1),this.others=[],this.$others.forEach(function(n){var r=t.createAnchor(n.row,n.column);r.$insertRight=!0,r.detach(),e.others.push(r)}),n.setUndoSelect(!1)},this.showOtherMarkers=function(){if(this.othersActive)return;var e=this.session,t=this;this.othersActive=!0,this.others.forEach(function(n){n.markerId=e.addMarker(new r(n.row,n.column,n.row,n.column+t.length),t.othersClass,null,!1)})},this.hideOtherMarkers=function(){if(!this.othersActive)return;this.othersActive=!1;for(var e=0;e<this.others.length;e++)this.session.removeMarker(this.others[e].markerId)},this.onUpdate=function(e){if(this.$updating)return this.updateAnchors(e);var t=e;if(t.start.row!==t.end.row)return;if(t.start.row!==this.pos.row)return;this.$updating=!0;var n=e.action==="insert"?t.end.column-t.start.column:t.start.column-t.end.column,i=t.start.column>=this.pos.column&&t.start.column<=this.pos.column+this.length+1,s=t.start.column-this.pos.column;this.updateAnchors(e),i&&(this.length+=n);if(i&&!this.session.$fromUndo)if(e.action==="insert")for(var o=this.others.length-1;o>=0;o--){var u=this.others[o],a={row:u.row,column:u.column+s};this.doc.insertMergedLines(a,e.lines)}else if(e.action==="remove")for(var o=this.others.length-1;o>=0;o--){var u=this.others[o],a={row:u.row,column:u.column+s};this.doc.remove(new r(a.row,a.column,a.row,a.column-n))}this.$updating=!1,this.updateMarkers()},this.updateAnchors=function(e){this.pos.onChange(e);for(var t=this.others.length;t--;)this.others[t].onChange(e);this.updateMarkers()},this.updateMarkers=function(){if(this.$updating)return;var e=this,t=this.session,n=function(n,i){t.removeMarker(n.markerId),n.markerId=t.addMarker(new r(n.row,n.column,n.row,n.column+e.length),i,null,!1)};n(this.pos,this.mainClass);for(var i=this.others.length;i--;)n(this.others[i],this.othersClass)},this.onCursorChange=function(e){if(this.$updating||!this.session)return;var t=this.session.selection.getCursor();t.row===this.pos.row&&t.column>=this.pos.column&&t.column<=this.pos.column+this.length?(this.showOtherMarkers(),this._emit("cursorEnter",e)):(this.hideOtherMarkers(),this._emit("cursorLeave",e))},this.detach=function(){this.session.removeMarker(this.pos&&this.pos.markerId),this.hideOtherMarkers(),this.doc.off("change",this.$onUpdate),this.session.selection.off("changeCursor",this.$onCursorChange),this.session.setUndoSelect(!0),this.session=null},this.cancel=function(){if(this.$undoStackDepth===-1)return;var e=this.session.getUndoManager(),t=(e.$undoStack||e.$undostack).length-this.$undoStackDepth;for(var n=0;n<t;n++)e.undo(this.session,!0);this.selectionBefore&&this.session.selection.fromJSON(this.selectionBefore)}}).call(o.prototype),t.PlaceHolder=o}),ace.define("ace/mouse/multi_select_handler",["require","exports","module","ace/lib/event","ace/lib/useragent"],function(e,t,n){function s(e,t){return e.row==t.row&&e.column==t.column}function o(e){var t=e.domEvent,n=t.altKey,o=t.shiftKey,u=t.ctrlKey,a=e.getAccelKey(),f=e.getButton();u&&i.isMac&&(f=t.button);if(e.editor.inMultiSelectMode&&f==2){e.editor.textInput.onContextMenu(e.domEvent);return}if(!u&&!n&&!a){f===0&&e.editor.inMultiSelectMode&&e.editor.exitMultiSelectMode();return}if(f!==0)return;var l=e.editor,c=l.selection,h=l.inMultiSelectMode,p=e.getDocumentPosition(),d=c.getCursor(),v=e.inSelection()||c.isEmpty()&&s(p,d),m=e.x,g=e.y,y=function(e){m=e.clientX,g=e.clientY},b=l.session,w=l.renderer.pixelToScreenCoordinates(m,g),E=w,S;if(l.$mouseHandler.$enableJumpToDef)u&&n||a&&n?S=o?"block":"add":n&&l.$blockSelectEnabled&&(S="block");else if(a&&!n){S="add";if(!h&&o)return}else n&&l.$blockSelectEnabled&&(S="block");S&&i.isMac&&t.ctrlKey&&l.$mouseHandler.cancelContextMenu();if(S=="add"){if(!h&&v)return;if(!h){var x=c.toOrientedRange();l.addSelectionMarker(x)}var T=c.rangeList.rangeAtPoint(p);l.inVirtualSelectionMode=!0,o&&(T=null,x=c.ranges[0]||x,l.removeSelectionMarker(x)),l.once("mouseup",function(){var e=c.toOrientedRange();T&&e.isEmpty()&&s(T.cursor,e.cursor)?c.substractPoint(e.cursor):(o?c.substractPoint(x.cursor):x&&(l.removeSelectionMarker(x),c.addRange(x)),c.addRange(e)),l.inVirtualSelectionMode=!1})}else if(S=="block"){e.stop(),l.inVirtualSelectionMode=!0;var N,C=[],k=function(){var e=l.renderer.pixelToScreenCoordinates(m,g),t=b.screenToDocumentPosition(e.row,e.column,e.offsetX);if(s(E,e)&&s(t,c.lead))return;E=e,l.selection.moveToPosition(t),l.renderer.scrollCursorIntoView(),l.removeSelectionMarkers(C),C=c.rectangularRangeBlock(E,w),l.$mouseHandler.$clickSelection&&C.length==1&&C[0].isEmpty()&&(C[0]=l.$mouseHandler.$clickSelection.clone()),C.forEach(l.addSelectionMarker,l),l.updateSelectionMarkers()};h&&!a?c.toSingleRange():!h&&a&&(N=c.toOrientedRange(),l.addSelectionMarker(N)),o?w=b.documentToScreenPosition(c.lead):c.moveToPosition(p),E={row:-1,column:-1};var L=function(e){k(),clearInterval(O),l.removeSelectionMarkers(C),C.length||(C=[c.toOrientedRange()]),N&&(l.removeSelectionMarker(N),c.toSingleRange(N));for(var t=0;t<C.length;t++)c.addRange(C[t]);l.inVirtualSelectionMode=!1,l.$mouseHandler.$clickSelection=null},A=k;r.capture(l.container,y,L);var O=setInterval(function(){A()},20);return e.preventDefault()}}var r=e("../lib/event"),i=e("../lib/useragent");t.onMouseDown=o}),ace.define("ace/commands/multi_select_commands",["require","exports","module","ace/keyboard/hash_handler"],function(e,t,n){t.defaultCommands=[{name:"addCursorAbove",description:"Add cursor above",exec:function(e){e.selectMoreLines(-1)},bindKey:{win:"Ctrl-Alt-Up",mac:"Ctrl-Alt-Up"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorBelow",description:"Add cursor below",exec:function(e){e.selectMoreLines(1)},bindKey:{win:"Ctrl-Alt-Down",mac:"Ctrl-Alt-Down"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorAboveSkipCurrent",description:"Add cursor above (skip current)",exec:function(e){e.selectMoreLines(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Up",mac:"Ctrl-Alt-Shift-Up"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorBelowSkipCurrent",description:"Add cursor below (skip current)",exec:function(e){e.selectMoreLines(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Down",mac:"Ctrl-Alt-Shift-Down"},scrollIntoView:"cursor",readOnly:!0},{name:"selectMoreBefore",description:"Select more before",exec:function(e){e.selectMore(-1)},bindKey:{win:"Ctrl-Alt-Left",mac:"Ctrl-Alt-Left"},scrollIntoView:"cursor",readOnly:!0},{name:"selectMoreAfter",description:"Select more after",exec:function(e){e.selectMore(1)},bindKey:{win:"Ctrl-Alt-Right",mac:"Ctrl-Alt-Right"},scrollIntoView:"cursor",readOnly:!0},{name:"selectNextBefore",description:"Select next before",exec:function(e){e.selectMore(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Left",mac:"Ctrl-Alt-Shift-Left"},scrollIntoView:"cursor",readOnly:!0},{name:"selectNextAfter",description:"Select next after",exec:function(e){e.selectMore(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Right",mac:"Ctrl-Alt-Shift-Right"},scrollIntoView:"cursor",readOnly:!0},{name:"toggleSplitSelectionIntoLines",description:"Split into lines",exec:function(e){e.multiSelect.rangeCount>1?e.multiSelect.joinSelections():e.multiSelect.splitIntoLines()},bindKey:{win:"Ctrl-Alt-L",mac:"Ctrl-Alt-L"},readOnly:!0},{name:"splitSelectionIntoLines",description:"Split into lines",exec:function(e){e.multiSelect.splitIntoLines()},readOnly:!0},{name:"alignCursors",description:"Align cursors",exec:function(e){e.alignCursors()},bindKey:{win:"Ctrl-Alt-A",mac:"Ctrl-Alt-A"},scrollIntoView:"cursor"},{name:"findAll",description:"Find all",exec:function(e){e.findAll()},bindKey:{win:"Ctrl-Alt-K",mac:"Ctrl-Alt-G"},scrollIntoView:"cursor",readOnly:!0}],t.multiSelectCommands=[{name:"singleSelection",description:"Single selection",bindKey:"esc",exec:function(e){e.exitMultiSelectMode()},scrollIntoView:"cursor",readOnly:!0,isAvailable:function(e){return e&&e.inMultiSelectMode}}];var r=e("../keyboard/hash_handler").HashHandler;t.keyboardHandler=new r(t.multiSelectCommands)}),ace.define("ace/multi_select",["require","exports","module","ace/range_list","ace/range","ace/selection","ace/mouse/multi_select_handler","ace/lib/event","ace/lib/lang","ace/commands/multi_select_commands","ace/search","ace/edit_session","ace/editor","ace/config"],function(e,t,n){function h(e,t,n){return c.$options.wrap=!0,c.$options.needle=t,c.$options.backwards=n==-1,c.find(e)}function v(e,t){return e.row==t.row&&e.column==t.column}function m(e){if(e.$multiselectOnSessionChange)return;e.$onAddRange=e.$onAddRange.bind(e),e.$onRemoveRange=e.$onRemoveRange.bind(e),e.$onMultiSelect=e.$onMultiSelect.bind(e),e.$onSingleSelect=e.$onSingleSelect.bind(e),e.$multiselectOnSessionChange=t.onSessionChange.bind(e),e.$checkMultiselectChange=e.$checkMultiselectChange.bind(e),e.$multiselectOnSessionChange(e),e.on("changeSession",e.$multiselectOnSessionChange),e.on("mousedown",o),e.commands.addCommands(f.defaultCommands),g(e)}function g(e){function r(t){n&&(e.renderer.setMouseCursor(""),n=!1)}if(!e.textInput)return;var t=e.textInput.getElement(),n=!1;u.addListener(t,"keydown",function(t){var i=t.keyCode==18&&!(t.ctrlKey||t.shiftKey||t.metaKey);e.$blockSelectEnabled&&i?n||(e.renderer.setMouseCursor("crosshair"),n=!0):n&&r()},e),u.addListener(t,"keyup",r,e),u.addListener(t,"blur",r,e)}var r=e("./range_list").RangeList,i=e("./range").Range,s=e("./selection").Selection,o=e("./mouse/multi_select_handler").onMouseDown,u=e("./lib/event"),a=e("./lib/lang"),f=e("./commands/multi_select_commands");t.commands=f.defaultCommands.concat(f.multiSelectCommands);var l=e("./search").Search,c=new l,p=e("./edit_session").EditSession;(function(){this.getSelectionMarkers=function(){return this.$selectionMarkers}}).call(p.prototype),function(){this.ranges=null,this.rangeList=null,this.addRange=function(e,t){if(!e)return;if(!this.inMultiSelectMode&&this.rangeCount===0){var n=this.toOrientedRange();this.rangeList.add(n),this.rangeList.add(e);if(this.rangeList.ranges.length!=2)return this.rangeList.removeAll(),t||this.fromOrientedRange(e);this.rangeList.removeAll(),this.rangeList.add(n),this.$onAddRange(n)}e.cursor||(e.cursor=e.end);var r=this.rangeList.add(e);return this.$onAddRange(e),r.length&&this.$onRemoveRange(r),this.rangeCount>1&&!this.inMultiSelectMode&&(this._signal("multiSelect"),this.inMultiSelectMode=!0,this.session.$undoSelect=!1,this.rangeList.attach(this.session)),t||this.fromOrientedRange(e)},this.toSingleRange=function(e){e=e||this.ranges[0];var t=this.rangeList.removeAll();t.length&&this.$onRemoveRange(t),e&&this.fromOrientedRange(e)},this.substractPoint=function(e){var t=this.rangeList.substractPoint(e);if(t)return this.$onRemoveRange(t),t[0]},this.mergeOverlappingRanges=function(){var e=this.rangeList.merge();e.length&&this.$onRemoveRange(e)},this.$onAddRange=function(e){this.rangeCount=this.rangeList.ranges.length,this.ranges.unshift(e),this._signal("addRange",{range:e})},this.$onRemoveRange=function(e){this.rangeCount=this.rangeList.ranges.length;if(this.rangeCount==1&&this.inMultiSelectMode){var t=this.rangeList.ranges.pop();e.push(t),this.rangeCount=0}for(var n=e.length;n--;){var r=this.ranges.indexOf(e[n]);this.ranges.splice(r,1)}this._signal("removeRange",{ranges:e}),this.rangeCount===0&&this.inMultiSelectMode&&(this.inMultiSelectMode=!1,this._signal("singleSelect"),this.session.$undoSelect=!0,this.rangeList.detach(this.session)),t=t||this.ranges[0],t&&!t.isEqual(this.getRange())&&this.fromOrientedRange(t)},this.$initRangeList=function(){if(this.rangeList)return;this.rangeList=new r,this.ranges=[],this.rangeCount=0},this.getAllRanges=function(){return this.rangeCount?this.rangeList.ranges.concat():[this.getRange()]},this.splitIntoLines=function(){var e=this.ranges.length?this.ranges:[this.getRange()],t=[];for(var n=0;n<e.length;n++){var r=e[n],s=r.start.row,o=r.end.row;if(s===o)t.push(r.clone());else{t.push(new i(s,r.start.column,s,this.session.getLine(s).length));while(++s<o)t.push(this.getLineRange(s,!0));t.push(new i(o,0,o,r.end.column))}n==0&&!this.isBackwards()&&(t=t.reverse())}this.toSingleRange();for(var n=t.length;n--;)this.addRange(t[n])},this.joinSelections=function(){var e=this.rangeList.ranges,t=e[e.length-1],n=i.fromPoints(e[0].start,t.end);this.toSingleRange(),this.setSelectionRange(n,t.cursor==t.start)},this.toggleBlockSelection=function(){if(this.rangeCount>1){var e=this.rangeList.ranges,t=e[e.length-1],n=i.fromPoints(e[0].start,t.end);this.toSingleRange(),this.setSelectionRange(n,t.cursor==t.start)}else{var r=this.session.documentToScreenPosition(this.cursor),s=this.session.documentToScreenPosition(this.anchor),o=this.rectangularRangeBlock(r,s);o.forEach(this.addRange,this)}},this.rectangularRangeBlock=function(e,t,n){var r=[],s=e.column<t.column;if(s)var o=e.column,u=t.column,a=e.offsetX,f=t.offsetX;else var o=t.column,u=e.column,a=t.offsetX,f=e.offsetX;var l=e.row<t.row;if(l)var c=e.row,h=t.row;else var c=t.row,h=e.row;o<0&&(o=0),c<0&&(c=0),c==h&&(n=!0);var p;for(var d=c;d<=h;d++){var m=i.fromPoints(this.session.screenToDocumentPosition(d,o,a),this.session.screenToDocumentPosition(d,u,f));if(m.isEmpty()){if(p&&v(m.end,p))break;p=m.end}m.cursor=s?m.start:m.end,r.push(m)}l&&r.reverse();if(!n){var g=r.length-1;while(r[g].isEmpty()&&g>0)g--;if(g>0){var y=0;while(r[y].isEmpty())y++}for(var b=g;b>=y;b--)r[b].isEmpty()&&r.splice(b,1)}return r}}.call(s.prototype);var d=e("./editor").Editor;(function(){this.updateSelectionMarkers=function(){this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.addSelectionMarker=function(e){e.cursor||(e.cursor=e.end);var t=this.getSelectionStyle();return e.marker=this.session.addMarker(e,"ace_selection",t),this.session.$selectionMarkers.push(e),this.session.selectionMarkerCount=this.session.$selectionMarkers.length,e},this.removeSelectionMarker=function(e){if(!e.marker)return;this.session.removeMarker(e.marker);var t=this.session.$selectionMarkers.indexOf(e);t!=-1&&this.session.$selectionMarkers.splice(t,1),this.session.selectionMarkerCount=this.session.$selectionMarkers.length},this.removeSelectionMarkers=function(e){var t=this.session.$selectionMarkers;for(var n=e.length;n--;){var r=e[n];if(!r.marker)continue;this.session.removeMarker(r.marker);var i=t.indexOf(r);i!=-1&&t.splice(i,1)}this.session.selectionMarkerCount=t.length},this.$onAddRange=function(e){this.addSelectionMarker(e.range),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onRemoveRange=function(e){this.removeSelectionMarkers(e.ranges),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onMultiSelect=function(e){if(this.inMultiSelectMode)return;this.inMultiSelectMode=!0,this.setStyle("ace_multiselect"),this.keyBinding.addKeyboardHandler(f.keyboardHandler),this.commands.setDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onSingleSelect=function(e){if(this.session.multiSelect.inVirtualMode)return;this.inMultiSelectMode=!1,this.unsetStyle("ace_multiselect"),this.keyBinding.removeKeyboardHandler(f.keyboardHandler),this.commands.removeDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers(),this._emit("changeSelection")},this.$onMultiSelectExec=function(e){var t=e.command,n=e.editor;if(!n.multiSelect)return;if(!t.multiSelectAction){var r=t.exec(n,e.args||{});n.multiSelect.addRange(n.multiSelect.toOrientedRange()),n.multiSelect.mergeOverlappingRanges()}else t.multiSelectAction=="forEach"?r=n.forEachSelection(t,e.args):t.multiSelectAction=="forEachLine"?r=n.forEachSelection(t,e.args,!0):t.multiSelectAction=="single"?(n.exitMultiSelectMode(),r=t.exec(n,e.args||{})):r=t.multiSelectAction(n,e.args||{});return r},this.forEachSelection=function(e,t,n){if(this.inVirtualSelectionMode)return;var r=n&&n.keepOrder,i=n==1||n&&n.$byLines,o=this.session,u=this.selection,a=u.rangeList,f=(r?u:a).ranges,l;if(!f.length)return e.exec?e.exec(this,t||{}):e(this,t||{});var c=u._eventRegistry;u._eventRegistry={};var h=new s(o);this.inVirtualSelectionMode=!0;for(var p=f.length;p--;){if(i)while(p>0&&f[p].start.row==f[p-1].end.row)p--;h.fromOrientedRange(f[p]),h.index=p,this.selection=o.selection=h;var d=e.exec?e.exec(this,t||{}):e(this,t||{});!l&&d!==undefined&&(l=d),h.toOrientedRange(f[p])}h.detach(),this.selection=o.selection=u,this.inVirtualSelectionMode=!1,u._eventRegistry=c,u.mergeOverlappingRanges(),u.ranges[0]&&u.fromOrientedRange(u.ranges[0]);var v=this.renderer.$scrollAnimation;return this.onCursorChange(),this.onSelectionChange(),v&&v.from==v.to&&this.renderer.animateScrolling(v.from),l},this.exitMultiSelectMode=function(){if(!this.inMultiSelectMode||this.inVirtualSelectionMode)return;this.multiSelect.toSingleRange()},this.getSelectedText=function(){var e="";if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var t=this.multiSelect.rangeList.ranges,n=[];for(var r=0;r<t.length;r++)n.push(this.session.getTextRange(t[r]));var i=this.session.getDocument().getNewLineCharacter();e=n.join(i),e.length==(n.length-1)*i.length&&(e="")}else this.selection.isEmpty()||(e=this.session.getTextRange(this.getSelectionRange()));return e},this.$checkMultiselectChange=function(e,t){if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var n=this.multiSelect.ranges[0];if(this.multiSelect.isEmpty()&&t==this.multiSelect.anchor)return;var r=t==this.multiSelect.anchor?n.cursor==n.start?n.end:n.start:n.cursor;r.row!=t.row||this.session.$clipPositionToDocument(r.row,r.column).column!=t.column?this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()):this.multiSelect.mergeOverlappingRanges()}},this.findAll=function(e,t,n){t=t||{},t.needle=e||t.needle;if(t.needle==undefined){var r=this.selection.isEmpty()?this.selection.getWordRange():this.selection.getRange();t.needle=this.session.getTextRange(r)}this.$search.set(t);var i=this.$search.findAll(this.session);if(!i.length)return 0;var s=this.multiSelect;n||s.toSingleRange(i[0]);for(var o=i.length;o--;)s.addRange(i[o],!0);return r&&s.rangeList.rangeAtPoint(r.start)&&s.addRange(r,!0),i.length},this.selectMoreLines=function(e,t){var n=this.selection.toOrientedRange(),r=n.cursor==n.end,s=this.session.documentToScreenPosition(n.cursor);this.selection.$desiredColumn&&(s.column=this.selection.$desiredColumn);var o=this.session.screenToDocumentPosition(s.row+e,s.column);if(!n.isEmpty())var u=this.session.documentToScreenPosition(r?n.end:n.start),a=this.session.screenToDocumentPosition(u.row+e,u.column);else var a=o;if(r){var f=i.fromPoints(o,a);f.cursor=f.start}else{var f=i.fromPoints(a,o);f.cursor=f.end}f.desiredColumn=s.column;if(!this.selection.inMultiSelectMode)this.selection.addRange(n);else if(t)var l=n.cursor;this.selection.addRange(f),l&&this.selection.substractPoint(l)},this.transposeSelections=function(e){var t=this.session,n=t.multiSelect,r=n.ranges;for(var i=r.length;i--;){var s=r[i];if(s.isEmpty()){var o=t.getWordRange(s.start.row,s.start.column);s.start.row=o.start.row,s.start.column=o.start.column,s.end.row=o.end.row,s.end.column=o.end.column}}n.mergeOverlappingRanges();var u=[];for(var i=r.length;i--;){var s=r[i];u.unshift(t.getTextRange(s))}e<0?u.unshift(u.pop()):u.push(u.shift());for(var i=r.length;i--;){var s=r[i],o=s.clone();t.replace(s,u[i]),s.start.row=o.start.row,s.start.column=o.start.column}n.fromOrientedRange(n.ranges[0])},this.selectMore=function(e,t,n){var r=this.session,i=r.multiSelect,s=i.toOrientedRange();if(s.isEmpty()){s=r.getWordRange(s.start.row,s.start.column),s.cursor=e==-1?s.start:s.end,this.multiSelect.addRange(s);if(n)return}var o=r.getTextRange(s),u=h(r,o,e);u&&(u.cursor=e==-1?u.start:u.end,this.session.unfold(u),this.multiSelect.addRange(u),this.renderer.scrollCursorIntoView(null,.5)),t&&this.multiSelect.substractPoint(s.cursor)},this.alignCursors=function(){var e=this.session,t=e.multiSelect,n=t.ranges,r=-1,s=n.filter(function(e){if(e.cursor.row==r)return!0;r=e.cursor.row});if(!n.length||s.length==n.length-1){var o=this.selection.getRange(),u=o.start.row,f=o.end.row,l=u==f;if(l){var c=this.session.getLength(),h;do h=this.session.getLine(f);while(/[=:]/.test(h)&&++f<c);do h=this.session.getLine(u);while(/[=:]/.test(h)&&--u>0);u<0&&(u=0),f>=c&&(f=c-1)}var p=this.session.removeFullLines(u,f);p=this.$reAlignText(p,l),this.session.insert({row:u,column:0},p.join("\n")+"\n"),l||(o.start.column=0,o.end.column=p[p.length-1].length),this.selection.setRange(o)}else{s.forEach(function(e){t.substractPoint(e.cursor)});var d=0,v=Infinity,m=n.map(function(t){var n=t.cursor,r=e.getLine(n.row),i=r.substr(n.column).search(/\S/g);return i==-1&&(i=0),n.column>d&&(d=n.column),i<v&&(v=i),i});n.forEach(function(t,n){var r=t.cursor,s=d-r.column,o=m[n]-v;s>o?e.insert(r,a.stringRepeat(" ",s-o)):e.remove(new i(r.row,r.column,r.row,r.column-s+o)),t.start.column=t.end.column=d,t.start.row=t.end.row=r.row,t.cursor=t.end}),t.fromOrientedRange(n[0]),this.renderer.updateCursor(),this.renderer.updateBackMarkers()}},this.$reAlignText=function(e,t){function u(e){return a.stringRepeat(" ",e)}function f(e){return e[2]?u(i)+e[2]+u(s-e[2].length+o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}function l(e){return e[2]?u(i+s-e[2].length)+e[2]+u(o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}function c(e){return e[2]?u(i)+e[2]+u(o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}var n=!0,r=!0,i,s,o;return e.map(function(e){var t=e.match(/(\s*)(.*?)(\s*)([=:].*)/);return t?i==null?(i=t[1].length,s=t[2].length,o=t[3].length,t):(i+s+o!=t[1].length+t[2].length+t[3].length&&(r=!1),i!=t[1].length&&(n=!1),i>t[1].length&&(i=t[1].length),s<t[2].length&&(s=t[2].length),o>t[3].length&&(o=t[3].length),t):[e]}).map(t?f:n?r?l:f:c)}}).call(d.prototype),t.onSessionChange=function(e){var t=e.session;t&&!t.multiSelect&&(t.$selectionMarkers=[],t.selection.$initRangeList(),t.multiSelect=t.selection),this.multiSelect=t&&t.multiSelect;var n=e.oldSession;n&&(n.multiSelect.off("addRange",this.$onAddRange),n.multiSelect.off("removeRange",this.$onRemoveRange),n.multiSelect.off("multiSelect",this.$onMultiSelect),n.multiSelect.off("singleSelect",this.$onSingleSelect),n.multiSelect.lead.off("change",this.$checkMultiselectChange),n.multiSelect.anchor.off("change",this.$checkMultiselectChange)),t&&(t.multiSelect.on("addRange",this.$onAddRange),t.multiSelect.on("removeRange",this.$onRemoveRange),t.multiSelect.on("multiSelect",this.$onMultiSelect),t.multiSelect.on("singleSelect",this.$onSingleSelect),t.multiSelect.lead.on("change",this.$checkMultiselectChange),t.multiSelect.anchor.on("change",this.$checkMultiselectChange)),t&&this.inMultiSelectMode!=t.selection.inMultiSelectMode&&(t.selection.inMultiSelectMode?this.$onMultiSelect():this.$onSingleSelect())},t.MultiSelect=m,e("./config").defineOptions(d.prototype,"editor",{enableMultiselect:{set:function(e){m(this),e?(this.on("changeSession",this.$multiselectOnSessionChange),this.on("mousedown",o)):(this.off("changeSession",this.$multiselectOnSessionChange),this.off("mousedown",o))},value:!0},enableBlockSelect:{set:function(e){this.$blockSelectEnabled=e},value:!0}})}),ace.define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("../../range").Range,i=t.FoldMode=function(){};(function(){this.foldingStartMarker=null,this.foldingStopMarker=null,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);return this.foldingStartMarker.test(r)?"start":t=="markbeginend"&&this.foldingStopMarker&&this.foldingStopMarker.test(r)?"end":""},this.getFoldWidgetRange=function(e,t,n){return null},this.indentationBlock=function(e,t,n){var i=/\S/,s=e.getLine(t),o=s.search(i);if(o==-1)return;var u=n||s.length,a=e.getLength(),f=t,l=t;while(++t<a){var c=e.getLine(t).search(i);if(c==-1)continue;if(c<=o){var h=e.getTokenAt(t,0);if(!h||h.type!=="string")break}l=t}if(l>f){var p=e.getLine(l).length;return new r(f,u,l,p)}},this.openingBracketBlock=function(e,t,n,i,s){var o={row:n,column:i+1},u=e.$findClosingBracket(t,o,s);if(!u)return;var a=e.foldWidgets[u.row];return a==null&&(a=e.getFoldWidget(u.row)),a=="start"&&u.row>o.row&&(u.row--,u.column=e.getLine(u.row).length),r.fromPoints(o,u)},this.closingBracketBlock=function(e,t,n,i,s){var o={row:n,column:i},u=e.$findOpeningBracket(t,o);if(!u)return;return u.column++,o.column--,r.fromPoints(u,o)}}).call(i.prototype)}),ace.define("ace/theme/textmate",["require","exports","module","ace/lib/dom"],function(e,t,n){"use strict";t.isDark=!1,t.cssClass="ace-tm",t.cssText='.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}',t.$id="ace/theme/textmate";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)}),ace.define("ace/line_widgets",["require","exports","module","ace/lib/dom"],function(e,t,n){"use strict";function i(e){this.session=e,this.session.widgetManager=this,this.session.getRowLength=this.getRowLength,this.session.$getWidgetScreenLength=this.$getWidgetScreenLength,this.updateOnChange=this.updateOnChange.bind(this),this.renderWidgets=this.renderWidgets.bind(this),this.measureWidgets=this.measureWidgets.bind(this),this.session._changedWidgets=[],this.$onChangeEditor=this.$onChangeEditor.bind(this),this.session.on("change",this.updateOnChange),this.session.on("changeFold",this.updateOnFold),this.session.on("changeEditor",this.$onChangeEditor)}var r=e("./lib/dom");(function(){this.getRowLength=function(e){var t;return this.lineWidgets?t=this.lineWidgets[e]&&this.lineWidgets[e].rowCount||0:t=0,!this.$useWrapMode||!this.$wrapData[e]?1+t:this.$wrapData[e].length+1+t},this.$getWidgetScreenLength=function(){var e=0;return this.lineWidgets.forEach(function(t){t&&t.rowCount&&!t.hidden&&(e+=t.rowCount)}),e},this.$onChangeEditor=function(e){this.attach(e.editor)},this.attach=function(e){e&&e.widgetManager&&e.widgetManager!=this&&e.widgetManager.detach();if(this.editor==e)return;this.detach(),this.editor=e,e&&(e.widgetManager=this,e.renderer.on("beforeRender",this.measureWidgets),e.renderer.on("afterRender",this.renderWidgets))},this.detach=function(e){var t=this.editor;if(!t)return;this.editor=null,t.widgetManager=null,t.renderer.off("beforeRender",this.measureWidgets),t.renderer.off("afterRender",this.renderWidgets);var n=this.session.lineWidgets;n&&n.forEach(function(e){e&&e.el&&e.el.parentNode&&(e._inDocument=!1,e.el.parentNode.removeChild(e.el))})},this.updateOnFold=function(e,t){var n=t.lineWidgets;if(!n||!e.action)return;var r=e.data,i=r.start.row,s=r.end.row,o=e.action=="add";for(var u=i+1;u<s;u++)n[u]&&(n[u].hidden=o);n[s]&&(o?n[i]?n[s].hidden=o:n[i]=n[s]:(n[i]==n[s]&&(n[i]=undefined),n[s].hidden=o))},this.updateOnChange=function(e){var t=this.session.lineWidgets;if(!t)return;var n=e.start.row,r=e.end.row-n;if(r!==0)if(e.action=="remove"){var i=t.splice(n+1,r);!t[n]&&i[i.length-1]&&(t[n]=i.pop()),i.forEach(function(e){e&&this.removeLineWidget(e)},this),this.$updateRows()}else{var s=new Array(r);t[n]&&t[n].column!=null&&e.start.column>t[n].column&&n++,s.unshift(n,0),t.splice.apply(t,s),this.$updateRows()}},this.$updateRows=function(){var e=this.session.lineWidgets;if(!e)return;var t=!0;e.forEach(function(e,n){if(e){t=!1,e.row=n;while(e.$oldWidget)e.$oldWidget.row=n,e=e.$oldWidget}}),t&&(this.session.lineWidgets=null)},this.$registerLineWidget=function(e){this.session.lineWidgets||(this.session.lineWidgets=new Array(this.session.getLength()));var t=this.session.lineWidgets[e.row];return t&&(e.$oldWidget=t,t.el&&t.el.parentNode&&(t.el.parentNode.removeChild(t.el),t._inDocument=!1)),this.session.lineWidgets[e.row]=e,e},this.addLineWidget=function(e){this.$registerLineWidget(e),e.session=this.session;if(!this.editor)return e;var t=this.editor.renderer;e.html&&!e.el&&(e.el=r.createElement("div"),e.el.innerHTML=e.html),e.el&&(r.addCssClass(e.el,"ace_lineWidgetContainer"),e.el.style.position="absolute",e.el.style.zIndex=5,t.container.appendChild(e.el),e._inDocument=!0,e.coverGutter||(e.el.style.zIndex=3),e.pixelHeight==null&&(e.pixelHeight=e.el.offsetHeight)),e.rowCount==null&&(e.rowCount=e.pixelHeight/t.layerConfig.lineHeight);var n=this.session.getFoldAt(e.row,0);e.$fold=n;if(n){var i=this.session.lineWidgets;e.row==n.end.row&&!i[n.start.row]?i[n.start.row]=e:e.hidden=!0}return this.session._emit("changeFold",{data:{start:{row:e.row}}}),this.$updateRows(),this.renderWidgets(null,t),this.onWidgetChanged(e),e},this.removeLineWidget=function(e){e._inDocument=!1,e.session=null,e.el&&e.el.parentNode&&e.el.parentNode.removeChild(e.el);if(e.editor&&e.editor.destroy)try{e.editor.destroy()}catch(t){}if(this.session.lineWidgets){var n=this.session.lineWidgets[e.row];if(n==e)this.session.lineWidgets[e.row]=e.$oldWidget,e.$oldWidget&&this.onWidgetChanged(e.$oldWidget);else while(n){if(n.$oldWidget==e){n.$oldWidget=e.$oldWidget;break}n=n.$oldWidget}}this.session._emit("changeFold",{data:{start:{row:e.row}}}),this.$updateRows()},this.getWidgetsAtRow=function(e){var t=this.session.lineWidgets,n=t&&t[e],r=[];while(n)r.push(n),n=n.$oldWidget;return r},this.onWidgetChanged=function(e){this.session._changedWidgets.push(e),this.editor&&this.editor.renderer.updateFull()},this.measureWidgets=function(e,t){var n=this.session._changedWidgets,r=t.layerConfig;if(!n||!n.length)return;var i=Infinity;for(var s=0;s<n.length;s++){var o=n[s];if(!o||!o.el)continue;if(o.session!=this.session)continue;if(!o._inDocument){if(this.session.lineWidgets[o.row]!=o)continue;o._inDocument=!0,t.container.appendChild(o.el)}o.h=o.el.offsetHeight,o.fixedWidth||(o.w=o.el.offsetWidth,o.screenWidth=Math.ceil(o.w/r.characterWidth));var u=o.h/r.lineHeight;o.coverLine&&(u-=this.session.getRowLineCount(o.row),u<0&&(u=0)),o.rowCount!=u&&(o.rowCount=u,o.row<i&&(i=o.row))}i!=Infinity&&(this.session._emit("changeFold",{data:{start:{row:i}}}),this.session.lineWidgetWidth=null),this.session._changedWidgets=[]},this.renderWidgets=function(e,t){var n=t.layerConfig,r=this.session.lineWidgets;if(!r)return;var i=Math.min(this.firstRow,n.firstRow),s=Math.max(this.lastRow,n.lastRow,r.length);while(i>0&&!r[i])i--;this.firstRow=n.firstRow,this.lastRow=n.lastRow,t.$cursorLayer.config=n;for(var o=i;o<=s;o++){var u=r[o];if(!u||!u.el)continue;if(u.hidden){u.el.style.top=-100-(u.pixelHeight||0)+"px";continue}u._inDocument||(u._inDocument=!0,t.container.appendChild(u.el));var a=t.$cursorLayer.getPixelPosition({row:o,column:0},!0).top;u.coverLine||(a+=n.lineHeight*this.session.getRowLineCount(u.row)),u.el.style.top=a-n.offset+"px";var f=u.coverGutter?0:t.gutterWidth;u.fixedWidth||(f-=t.scrollLeft),u.el.style.left=f+"px",u.fullWidth&&u.screenWidth&&(u.el.style.minWidth=n.width+2*n.padding+"px"),u.fixedWidth?u.el.style.right=t.scrollBar.getWidth()+"px":u.el.style.right=""}}}).call(i.prototype),t.LineWidgets=i}),ace.define("ace/ext/error_marker",["require","exports","module","ace/line_widgets","ace/lib/dom","ace/range"],function(e,t,n){"use strict";function o(e,t,n){var r=0,i=e.length-1;while(r<=i){var s=r+i>>1,o=n(t,e[s]);if(o>0)r=s+1;else{if(!(o<0))return s;i=s-1}}return-(r+1)}function u(e,t,n){var r=e.getAnnotations().sort(s.comparePoints);if(!r.length)return;var i=o(r,{row:t,column:-1},s.comparePoints);i<0&&(i=-i-1),i>=r.length?i=n>0?0:r.length-1:i===0&&n<0&&(i=r.length-1);var u=r[i];if(!u||!n)return;if(u.row===t){do u=r[i+=n];while(u&&u.row===t);if(!u)return r.slice()}var a=[];t=u.row;do a[n<0?"unshift":"push"](u),u=r[i+=n];while(u&&u.row==t);return a.length&&a}var r=e("../line_widgets").LineWidgets,i=e("../lib/dom"),s=e("../range").Range;t.showErrorMarker=function(e,t){var n=e.session;n.widgetManager||(n.widgetManager=new r(n),n.widgetManager.attach(e));var s=e.getCursorPosition(),o=s.row,a=n.widgetManager.getWidgetsAtRow(o).filter(function(e){return e.type=="errorMarker"})[0];a?a.destroy():o-=t;var f=u(n,o,t),l;if(f){var c=f[0];s.column=(c.pos&&typeof c.column!="number"?c.pos.sc:c.column)||0,s.row=c.row,l=e.renderer.$gutterLayer.$annotations[s.row]}else{if(a)return;l={text:["Looks good!"],className:"ace_ok"}}e.session.unfold(s.row),e.selection.moveToPosition(s);var h={row:s.row,fixedWidth:!0,coverGutter:!0,el:i.createElement("div"),type:"errorMarker"},p=h.el.appendChild(i.createElement("div")),d=h.el.appendChild(i.createElement("div"));d.className="error_widget_arrow "+l.className;var v=e.renderer.$cursorLayer.getPixelPosition(s).left;d.style.left=v+e.renderer.gutterWidth-5+"px",h.el.className="error_widget_wrapper",p.className="error_widget "+l.className,p.innerHTML=l.text.join("<br>"),p.appendChild(i.createElement("div"));var m=function(e,t,n){if(t===0&&(n==="esc"||n==="return"))return h.destroy(),{command:"null"}};h.destroy=function(){if(e.$mouseHandler.isMousePressed)return;e.keyBinding.removeKeyboardHandler(m),n.widgetManager.removeLineWidget(h),e.off("changeSelection",h.destroy),e.off("changeSession",h.destroy),e.off("mouseup",h.destroy),e.off("change",h.destroy)},e.keyBinding.addKeyboardHandler(m),e.on("changeSelection",h.destroy),e.on("changeSession",h.destroy),e.on("mouseup",h.destroy),e.on("change",h.destroy),e.session.widgetManager.addLineWidget(h),h.el.onmousedown=e.focus.bind(e),e.renderer.scrollCursorIntoView(null,.5,{bottom:h.el.offsetHeight})},i.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }","")}),ace.define("ace/ace",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/dom","ace/lib/event","ace/range","ace/editor","ace/edit_session","ace/undomanager","ace/virtual_renderer","ace/worker/worker_client","ace/keyboard/hash_handler","ace/placeholder","ace/multi_select","ace/mode/folding/fold_mode","ace/theme/textmate","ace/ext/error_marker","ace/config"],function(e,t,n){"use strict";e("./lib/fixoldbrowsers");var r=e("./lib/dom"),i=e("./lib/event"),s=e("./range").Range,o=e("./editor").Editor,u=e("./edit_session").EditSession,a=e("./undomanager").UndoManager,f=e("./virtual_renderer").VirtualRenderer;e("./worker/worker_client"),e("./keyboard/hash_handler"),e("./placeholder"),e("./multi_select"),e("./mode/folding/fold_mode"),e("./theme/textmate"),e("./ext/error_marker"),t.config=e("./config"),t.require=e, true&&(t.define=__webpack_require__.amdD),t.edit=function(e,n){if(typeof e=="string"){var s=e;e=document.getElementById(s);if(!e)throw new Error("ace.edit can't find div #"+s)}if(e&&e.env&&e.env.editor instanceof o)return e.env.editor;var u="";if(e&&/input|textarea/i.test(e.tagName)){var a=e;u=a.value,e=r.createElement("pre"),a.parentNode.replaceChild(e,a)}else e&&(u=e.textContent,e.innerHTML="");var l=t.createEditSession(u),c=new o(new f(e),l,n),h={document:l,editor:c,onResize:c.resize.bind(c,null)};return a&&(h.textarea=a),i.addListener(window,"resize",h.onResize),c.on("destroy",function(){i.removeListener(window,"resize",h.onResize),h.editor.container.env=null}),c.container.env=c.env=h,c},t.createEditSession=function(e,t){var n=new u(e,t);return n.setUndoManager(new a),n},t.Range=s,t.Editor=o,t.EditSession=u,t.UndoManager=a,t.VirtualRenderer=f,t.version=t.config.version});            (function() {
                ace.require(["ace/ace"], function(a) {
                    if (a) {
                        a.config.init(true);
                        a.define = ace.define;
                    }
                    if (!window.ace)
                        window.ace = a;
                    for (var key in a) if (a.hasOwnProperty(key))
                        window.ace[key] = a[key];
                    window.ace["default"] = window.ace;
                    if ( true && module) {
                        module.exports = window.ace;
                    }
                });
            })();
        

/***/ }),

/***/ "./node_modules/ace-builds/src-min-noconflict/ext-error_marker.js":
/*!************************************************************************!*\
  !*** ./node_modules/ace-builds/src-min-noconflict/ext-error_marker.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 4:28-42 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
;                (function() {
                    ace.require(["ace/ext/error_marker"], function(m) {
                        if ( true && module) {
                            module.exports = m;
                        }
                    });
                })();
            

/***/ }),

/***/ "./node_modules/ace-builds/src-min-noconflict/ext-language_tools.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ace-builds/src-min-noconflict/ext-language_tools.js ***!
  \**************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 4:28-42 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
ace.define("ace/snippets",["require","exports","module","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/lib/dom","ace/editor"],function(e,t,n){"use strict";function h(e){var t=(new Date).toLocaleString("en-us",e);return t.length==1?"0"+t:t}var r=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,s=e("./lib/lang"),o=e("./range").Range,u=e("./range_list").RangeList,a=e("./keyboard/hash_handler").HashHandler,f=e("./tokenizer").Tokenizer,l=e("./clipboard"),c={CURRENT_WORD:function(e){return e.session.getTextRange(e.session.getWordRange())},SELECTION:function(e,t,n){var r=e.session.getTextRange();return n?r.replace(/\n\r?([ \t]*\S)/g,"\n"+n+"$1"):r},CURRENT_LINE:function(e){return e.session.getLine(e.getCursorPosition().row)},PREV_LINE:function(e){return e.session.getLine(e.getCursorPosition().row-1)},LINE_INDEX:function(e){return e.getCursorPosition().row},LINE_NUMBER:function(e){return e.getCursorPosition().row+1},SOFT_TABS:function(e){return e.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(e){return e.session.getTabSize()},CLIPBOARD:function(e){return l.getText&&l.getText()},FILENAME:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0]},FILENAME_BASE:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(e){return this.FILEPATH(e).replace(/[^/\\]*$/,"")},FILEPATH:function(e){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.start||""},BLOCK_COMMENT_END:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.end||""},LINE_COMMENT:function(e){var t=e.session.$mode||{};return t.lineCommentStart||""},CURRENT_YEAR:h.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:h.bind(null,{year:"2-digit"}),CURRENT_MONTH:h.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:h.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:h.bind(null,{month:"short"}),CURRENT_DATE:h.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:h.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:h.bind(null,{weekday:"short"}),CURRENT_HOUR:h.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:h.bind(null,{minute:"2-digit"}),CURRENT_SECOND:h.bind(null,{second:"2-digit"})};c.SELECTED_TEXT=c.SELECTION;var p=function(){this.snippetMap={},this.snippetNameMap={}};(function(){r.implement(this,i),this.getTokenizer=function(){return p.$tokenizer||this.createTokenizer()},this.createTokenizer=function(){function e(e){return e=e.substr(1),/^\d+$/.test(e)?[{tabstopId:parseInt(e,10)}]:[{text:e}]}function t(e){return"(?:[^\\\\"+e+"]|\\\\.)"}var n={regex:"/("+t("/")+"+)/",onMatch:function(e,t,n){var r=n[0];return r.fmtString=!0,r.guard=e.slice(1,-1),r.flag="",""},next:"formatString"};return p.$tokenizer=new f({start:[{regex:/\\./,onMatch:function(e,t,n){var r=e[1];return r=="}"&&n.length?e=r:"`$\\".indexOf(r)!=-1&&(e=r),[e]}},{regex:/}/,onMatch:function(e,t,n){return[n.length?n.shift():e]}},{regex:/\$(?:\d+|\w+)/,onMatch:e},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(t,n,r){var i=e(t.substr(1));return r.unshift(i[0]),i},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+t("\\|")+"*\\|",onMatch:function(e,t,n){var r=e.slice(1,-1).replace(/\\[,|\\]|,/g,function(e){return e.length==2?e[1]:"\0"}).split("\0").map(function(e){return{value:e}});return n[0].choices=r,[r[0]]},next:"start"},n,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(e,t,n){return n.length&&n[0].expectElse?(n[0].expectElse=!1,n[0].ifEnd={elseEnd:n[0]},[n[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(e,t,n){var r=e[1];return r=="}"&&n.length?e=r:"`$\\".indexOf(r)!=-1?e=r:r=="n"?e="\n":r=="t"?e="	":"ulULE".indexOf(r)!=-1&&(e={changeCase:r,local:r>"a"}),[e]}},{regex:"/\\w*}",onMatch:function(e,t,n){var r=n.shift();return r&&(r.flag=e.slice(1,-1)),this.next=r&&r.tabstopId?"start":"",[r||e]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(e,t,n){return[{text:e.slice(1)}]}},{regex:/\${\w+/,onMatch:function(e,t,n){var r={text:e.slice(2)};return n.unshift(r),[r]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(e,t,n){var r=n.shift();return this.next=r&&r.tabstopId?"start":"",[r||e]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(e,t,n){var r=n[0];return r.formatFunction=e.slice(2,-1),[n.shift()]},next:"formatString"},n,{regex:/:[\?\-+]?/,onMatch:function(e,t,n){e[1]=="+"&&(n[0].ifEnd=n[0]),e[1]=="?"&&(n[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),p.$tokenizer},this.tokenizeTmSnippet=function(e,t){return this.getTokenizer().getLineTokens(e,t).tokens.map(function(e){return e.value||e})},this.getVariableValue=function(e,t,n){if(/^\d+$/.test(t))return(this.variables.__||{})[t]||"";if(/^[A-Z]\d+$/.test(t))return(this.variables[t[0]+"__"]||{})[t.substr(1)]||"";t=t.replace(/^TM_/,"");if(!this.variables.hasOwnProperty(t))return"";var r=this.variables[t];return typeof r=="function"&&(r=this.variables[t](e,t,n)),r==null?"":r},this.variables=c,this.tmStrFormat=function(e,t,n){if(!t.fmt)return e;var r=t.flag||"",i=t.guard;i=new RegExp(i,r.replace(/[^gim]/g,""));var s=typeof t.fmt=="string"?this.tokenizeTmSnippet(t.fmt,"formatString"):t.fmt,o=this,u=e.replace(i,function(){var e=o.variables.__;o.variables.__=[].slice.call(arguments);var t=o.resolveVariables(s,n),r="E";for(var i=0;i<t.length;i++){var u=t[i];if(typeof u=="object"){t[i]="";if(u.changeCase&&u.local){var a=t[i+1];a&&typeof a=="string"&&(u.changeCase=="u"?t[i]=a[0].toUpperCase():t[i]=a[0].toLowerCase(),t[i+1]=a.substr(1))}else u.changeCase&&(r=u.changeCase)}else r=="U"?t[i]=u.toUpperCase():r=="L"&&(t[i]=u.toLowerCase())}return o.variables.__=e,t.join("")});return u},this.tmFormatFunction=function(e,t,n){return t.formatFunction=="upcase"?e.toUpperCase():t.formatFunction=="downcase"?e.toLowerCase():e},this.resolveVariables=function(e,t){function f(t){var n=e.indexOf(t,s+1);n!=-1&&(s=n)}var n=[],r="",i=!0;for(var s=0;s<e.length;s++){var o=e[s];if(typeof o=="string"){n.push(o),o=="\n"?(i=!0,r=""):i&&(r=/^\t*/.exec(o)[0],i=/\S/.test(o));continue}if(!o)continue;i=!1;if(o.fmtString){var u=e.indexOf(o,s+1);u==-1&&(u=e.length),o.fmt=e.slice(s+1,u),s=u}if(o.text){var a=this.getVariableValue(t,o.text,r)+"";o.fmtString&&(a=this.tmStrFormat(a,o,t)),o.formatFunction&&(a=this.tmFormatFunction(a,o,t)),a&&!o.ifEnd?(n.push(a),f(o)):!a&&o.ifEnd&&f(o.ifEnd)}else o.elseEnd?f(o.elseEnd):o.tabstopId!=null?n.push(o):o.changeCase!=null&&n.push(o)}return n},this.insertSnippetForSelection=function(e,t){function f(e){var t=[];for(var n=0;n<e.length;n++){var r=e[n];if(typeof r=="object"){if(a[r.tabstopId])continue;var i=e.lastIndexOf(r,n-1);r=t[i]||{tabstopId:r.tabstopId}}t[n]=r}return t}var n=e.getCursorPosition(),r=e.session.getLine(n.row),i=e.session.getTabString(),s=r.match(/^\s*/)[0];n.column<s.length&&(s=s.slice(0,n.column)),t=t.replace(/\r/g,"");var o=this.tokenizeTmSnippet(t);o=this.resolveVariables(o,e),o=o.map(function(e){return e=="\n"?e+s:typeof e=="string"?e.replace(/\t/g,i):e});var u=[];o.forEach(function(e,t){if(typeof e!="object")return;var n=e.tabstopId,r=u[n];r||(r=u[n]=[],r.index=n,r.value="",r.parents={});if(r.indexOf(e)!==-1)return;e.choices&&!r.choices&&(r.choices=e.choices),r.push(e);var i=o.indexOf(e,t+1);if(i===-1)return;var s=o.slice(t+1,i),a=s.some(function(e){return typeof e=="object"});a&&!r.value?r.value=s:s.length&&(!r.value||typeof r.value!="string")&&(r.value=s.join(""))}),u.forEach(function(e){e.length=0});var a={};for(var l=0;l<o.length;l++){var c=o[l];if(typeof c!="object")continue;var h=c.tabstopId,p=u[h],v=o.indexOf(c,l+1);if(a[h]){a[h]===c&&(delete a[h],Object.keys(a).forEach(function(e){p.parents[e]=!0}));continue}a[h]=c;var m=p.value;typeof m!="string"?m=f(m):c.fmt&&(m=this.tmStrFormat(m,c,e)),o.splice.apply(o,[l+1,Math.max(0,v-l)].concat(m,c)),p.indexOf(c)===-1&&p.push(c)}var g=0,y=0,b="";o.forEach(function(e){if(typeof e=="string"){var t=e.split("\n");t.length>1?(y=t[t.length-1].length,g+=t.length-1):y+=e.length,b+=e}else e&&(e.start?e.end={row:g,column:y}:e.start={row:g,column:y})});var w=e.getSelectionRange(),E=e.session.replace(w,b),S=new d(e),x=e.inVirtualSelectionMode&&e.selection.index;S.addTabstops(u,w.start,E,x)},this.insertSnippet=function(e,t){var n=this;if(e.inVirtualSelectionMode)return n.insertSnippetForSelection(e,t);e.forEachSelection(function(){n.insertSnippetForSelection(e,t)},null,{keepOrder:!0}),e.tabstopManager&&e.tabstopManager.tabNext()},this.$getScope=function(e){var t=e.session.$mode.$id||"";t=t.split("/").pop();if(t==="html"||t==="php"){t==="php"&&!e.session.$mode.inlinePhp&&(t="html");var n=e.getCursorPosition(),r=e.session.getState(n.row);typeof r=="object"&&(r=r[0]),r.substring&&(r.substring(0,3)=="js-"?t="javascript":r.substring(0,4)=="css-"?t="css":r.substring(0,4)=="php-"&&(t="php"))}return t},this.getActiveScopes=function(e){var t=this.$getScope(e),n=[t],r=this.snippetMap;return r[t]&&r[t].includeScopes&&n.push.apply(n,r[t].includeScopes),n.push("_"),n},this.expandWithTab=function(e,t){var n=this,r=e.forEachSelection(function(){return n.expandSnippetForSelection(e,t)},null,{keepOrder:!0});return r&&e.tabstopManager&&e.tabstopManager.tabNext(),r},this.expandSnippetForSelection=function(e,t){var n=e.getCursorPosition(),r=e.session.getLine(n.row),i=r.substring(0,n.column),s=r.substr(n.column),o=this.snippetMap,u;return this.getActiveScopes(e).some(function(e){var t=o[e];return t&&(u=this.findMatchingSnippet(t,i,s)),!!u},this),u?t&&t.dryRun?!0:(e.session.doc.removeInLine(n.row,n.column-u.replaceBefore.length,n.column+u.replaceAfter.length),this.variables.M__=u.matchBefore,this.variables.T__=u.matchAfter,this.insertSnippetForSelection(e,u.content),this.variables.M__=this.variables.T__=null,!0):!1},this.findMatchingSnippet=function(e,t,n){for(var r=e.length;r--;){var i=e[r];if(i.startRe&&!i.startRe.test(t))continue;if(i.endRe&&!i.endRe.test(n))continue;if(!i.startRe&&!i.endRe)continue;return i.matchBefore=i.startRe?i.startRe.exec(t):[""],i.matchAfter=i.endRe?i.endRe.exec(n):[""],i.replaceBefore=i.triggerRe?i.triggerRe.exec(t)[0]:"",i.replaceAfter=i.endTriggerRe?i.endTriggerRe.exec(n)[0]:"",i}},this.snippetMap={},this.snippetNameMap={},this.register=function(e,t){function o(e){return e&&!/^\^?\(.*\)\$?$|^\\b$/.test(e)&&(e="(?:"+e+")"),e||""}function u(e,t,n){return e=o(e),t=o(t),n?(e=t+e,e&&e[e.length-1]!="$"&&(e+="$")):(e+=t,e&&e[0]!="^"&&(e="^"+e)),new RegExp(e)}function a(e){e.scope||(e.scope=t||"_"),t=e.scope,n[t]||(n[t]=[],r[t]={});var o=r[t];if(e.name){var a=o[e.name];a&&i.unregister(a),o[e.name]=e}n[t].push(e),e.prefix&&(e.tabTrigger=e.prefix),!e.content&&e.body&&(e.content=Array.isArray(e.body)?e.body.join("\n"):e.body),e.tabTrigger&&!e.trigger&&(!e.guard&&/^\w/.test(e.tabTrigger)&&(e.guard="\\b"),e.trigger=s.escapeRegExp(e.tabTrigger));if(!e.trigger&&!e.guard&&!e.endTrigger&&!e.endGuard)return;e.startRe=u(e.trigger,e.guard,!0),e.triggerRe=new RegExp(e.trigger),e.endRe=u(e.endTrigger,e.endGuard,!0),e.endTriggerRe=new RegExp(e.endTrigger)}var n=this.snippetMap,r=this.snippetNameMap,i=this;e||(e=[]),Array.isArray(e)?e.forEach(a):Object.keys(e).forEach(function(t){a(e[t])}),this._signal("registerSnippets",{scope:t})},this.unregister=function(e,t){function i(e){var i=r[e.scope||t];if(i&&i[e.name]){delete i[e.name];var s=n[e.scope||t],o=s&&s.indexOf(e);o>=0&&s.splice(o,1)}}var n=this.snippetMap,r=this.snippetNameMap;e.content?i(e):Array.isArray(e)&&e.forEach(i)},this.parseSnippetFile=function(e){e=e.replace(/\r/g,"");var t=[],n={},r=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,i;while(i=r.exec(e)){if(i[1])try{n=JSON.parse(i[1]),t.push(n)}catch(s){}if(i[4])n.content=i[4].replace(/^\t/gm,""),t.push(n),n={};else{var o=i[2],u=i[3];if(o=="regex"){var a=/\/((?:[^\/\\]|\\.)*)|$/g;n.guard=a.exec(u)[1],n.trigger=a.exec(u)[1],n.endTrigger=a.exec(u)[1],n.endGuard=a.exec(u)[1]}else o=="snippet"?(n.tabTrigger=u.match(/^\S*/)[0],n.name||(n.name=u)):o&&(n[o]=u)}}return t},this.getSnippetByName=function(e,t){var n=this.snippetNameMap,r;return this.getActiveScopes(t).some(function(t){var i=n[t];return i&&(r=i[e]),!!r},this),r}}).call(p.prototype);var d=function(e){if(e.tabstopManager)return e.tabstopManager;e.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=s.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(e)};(function(){this.attach=function(e){this.index=0,this.ranges=[],this.tabstops=[],this.$openTabstops=null,this.selectedTabstop=null,this.editor=e,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},this.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges=null,this.tabstops=null,this.selectedTabstop=null,this.editor.removeListener("change",this.$onChange),this.editor.removeListener("changeSelection",this.$onChangeSelection),this.editor.removeListener("changeSession",this.$onChangeSession),this.editor.commands.removeListener("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.editor=null},this.onChange=function(e){var t=e.action[0]=="r",n=this.selectedTabstop||{},r=n.parents||{},i=(this.tabstops||[]).slice();for(var s=0;s<i.length;s++){var o=i[s],u=o==n||r[o.index];o.rangeList.$bias=u?0:1;if(e.action=="remove"&&o!==n){var a=o.parents&&o.parents[n.index],f=o.rangeList.pointIndex(e.start,a);f=f<0?-f-1:f+1;var l=o.rangeList.pointIndex(e.end,a);l=l<0?-l-1:l-1;var c=o.rangeList.ranges.slice(f,l);for(var h=0;h<c.length;h++)this.removeRange(c[h])}o.rangeList.$onChange(e)}var p=this.editor.session;!this.$inChange&&t&&p.getLength()==1&&!p.getValue()&&this.detach()},this.updateLinkedFields=function(){var e=this.selectedTabstop;if(!e||!e.hasLinkedRanges||!e.firstNonLinked)return;this.$inChange=!0;var n=this.editor.session,r=n.getTextRange(e.firstNonLinked);for(var i=0;i<e.length;i++){var s=e[i];if(!s.linked)continue;var o=s.original,u=t.snippetManager.tmStrFormat(r,o,this.editor);n.replace(s,u)}this.$inChange=!1},this.onAfterExec=function(e){e.command&&!e.command.readOnly&&this.updateLinkedFields()},this.onChangeSelection=function(){if(!this.editor)return;var e=this.editor.selection.lead,t=this.editor.selection.anchor,n=this.editor.selection.isEmpty();for(var r=0;r<this.ranges.length;r++){if(this.ranges[r].linked)continue;var i=this.ranges[r].contains(e.row,e.column),s=n||this.ranges[r].contains(t.row,t.column);if(i&&s)return}this.detach()},this.onChangeSession=function(){this.detach()},this.tabNext=function(e){var t=this.tabstops.length,n=this.index+(e||1);n=Math.min(Math.max(n,1),t),n==t&&(n=0),this.selectTabstop(n),n===0&&this.detach()},this.selectTabstop=function(e){this.$openTabstops=null;var t=this.tabstops[this.index];t&&this.addTabstopMarkers(t),this.index=e,t=this.tabstops[this.index];if(!t||!t.length)return;this.selectedTabstop=t;var n=t.firstNonLinked||t;t.choices&&(n.cursor=n.start);if(!this.editor.inVirtualSelectionMode){var r=this.editor.multiSelect;r.toSingleRange(n);for(var i=0;i<t.length;i++){if(t.hasLinkedRanges&&t[i].linked)continue;r.addRange(t[i].clone(),!0)}}else this.editor.selection.fromOrientedRange(n);this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})},this.addTabstops=function(e,t,n){var r=this.useLink||!this.editor.getOption("enableMultiselect");this.$openTabstops||(this.$openTabstops=[]);if(!e[0]){var i=o.fromPoints(n,n);m(i.start,t),m(i.end,t),e[0]=[i],e[0].index=0}var s=this.index,a=[s+1,0],f=this.ranges;e.forEach(function(e,n){var i=this.$openTabstops[n]||e;for(var s=0;s<e.length;s++){var l=e[s],c=o.fromPoints(l.start,l.end||l.start);v(c.start,t),v(c.end,t),c.original=l,c.tabstop=i,f.push(c),i!=e?i.unshift(c):i[s]=c,l.fmtString||i.firstNonLinked&&r?(c.linked=!0,i.hasLinkedRanges=!0):i.firstNonLinked||(i.firstNonLinked=c)}i.firstNonLinked||(i.hasLinkedRanges=!1),i===e&&(a.push(i),this.$openTabstops[n]=i),this.addTabstopMarkers(i),i.rangeList=i.rangeList||new u,i.rangeList.$bias=0,i.rangeList.addList(i)},this),a.length>2&&(this.tabstops.length&&a.push(a.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,a))},this.addTabstopMarkers=function(e){var t=this.editor.session;e.forEach(function(e){e.markerId||(e.markerId=t.addMarker(e,"ace_snippet-marker","text"))})},this.removeTabstopMarkers=function(e){var t=this.editor.session;e.forEach(function(e){t.removeMarker(e.markerId),e.markerId=null})},this.removeRange=function(e){var t=e.tabstop.indexOf(e);t!=-1&&e.tabstop.splice(t,1),t=this.ranges.indexOf(e),t!=-1&&this.ranges.splice(t,1),t=e.tabstop.rangeList.ranges.indexOf(e),t!=-1&&e.tabstop.splice(t,1),this.editor.session.removeMarker(e.markerId),e.tabstop.length||(t=this.tabstops.indexOf(e.tabstop),t!=-1&&this.tabstops.splice(t,1),this.tabstops.length||this.detach())},this.keyboardHandler=new a,this.keyboardHandler.bindKeys({Tab:function(e){if(t.snippetManager&&t.snippetManager.expandWithTab(e))return;e.tabstopManager.tabNext(1),e.renderer.scrollCursorIntoView()},"Shift-Tab":function(e){e.tabstopManager.tabNext(-1),e.renderer.scrollCursorIntoView()},Esc:function(e){e.tabstopManager.detach()}})}).call(d.prototype);var v=function(e,t){e.row==0&&(e.column+=t.column),e.row+=t.row},m=function(e,t){e.row==t.row&&(e.column-=t.column),e.row-=t.row};e("./lib/dom").importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"),t.snippetManager=new p;var g=e("./editor").Editor;(function(){this.insertSnippet=function(e,n){return t.snippetManager.insertSnippet(this,e,n)},this.expandSnippet=function(e){return t.snippetManager.expandWithTab(this,e)}}).call(g.prototype)}),ace.define("ace/autocomplete/popup",["require","exports","module","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom"],function(e,t,n){"use strict";var r=e("../virtual_renderer").VirtualRenderer,i=e("../editor").Editor,s=e("../range").Range,o=e("../lib/event"),u=e("../lib/lang"),a=e("../lib/dom"),f=function(e){var t=new r(e);t.$maxLines=4;var n=new i(t);return n.setHighlightActiveLine(!1),n.setShowPrintMargin(!1),n.renderer.setShowGutter(!1),n.renderer.setHighlightGutterLine(!1),n.$mouseHandler.$focusTimeout=0,n.$highlightTagPending=!0,n},l=function(e){var t=a.createElement("div"),n=new f(t);e&&e.appendChild(t),t.style.display="none",n.renderer.content.style.cursor="default",n.renderer.setStyle("ace_autocomplete"),n.setOption("displayIndentGuides",!1),n.setOption("dragDelay",150);var r=function(){};n.focus=r,n.$isFocused=!0,n.renderer.$cursorLayer.restartTimer=r,n.renderer.$cursorLayer.element.style.opacity=0,n.renderer.$maxLines=8,n.renderer.$keepTextAreaAtCursor=!1,n.setHighlightActiveLine(!1),n.session.highlight(""),n.session.$searchHighlight.clazz="ace_highlight-marker",n.on("mousedown",function(e){var t=e.getDocumentPosition();n.selection.moveToPosition(t),c.start.row=c.end.row=t.row,e.stop()});var i,l=new s(-1,0,-1,Infinity),c=new s(-1,0,-1,Infinity);c.id=n.session.addMarker(c,"ace_active-line","fullLine"),n.setSelectOnHover=function(e){e?l.id&&(n.session.removeMarker(l.id),l.id=null):l.id=n.session.addMarker(l,"ace_line-hover","fullLine")},n.setSelectOnHover(!1),n.on("mousemove",function(e){if(!i){i=e;return}if(i.x==e.x&&i.y==e.y)return;i=e,i.scrollTop=n.renderer.scrollTop;var t=i.getDocumentPosition().row;l.start.row!=t&&(l.id||n.setRow(t),p(t))}),n.renderer.on("beforeRender",function(){if(i&&l.start.row!=-1){i.$pos=null;var e=i.getDocumentPosition().row;l.id||n.setRow(e),p(e,!0)}}),n.renderer.on("afterRender",function(){var e=n.getRow(),t=n.renderer.$textLayer,r=t.element.childNodes[e-t.config.firstRow];r!==t.selectedNode&&t.selectedNode&&a.removeCssClass(t.selectedNode,"ace_selected"),t.selectedNode=r,r&&a.addCssClass(r,"ace_selected")});var h=function(){p(-1)},p=function(e,t){e!==l.start.row&&(l.start.row=l.end.row=e,t||n.session._emit("changeBackMarker"),n._emit("changeHoverMarker"))};n.getHoveredRow=function(){return l.start.row},o.addListener(n.container,"mouseout",h),n.on("hide",h),n.on("changeSelection",h),n.session.doc.getLength=function(){return n.data.length},n.session.doc.getLine=function(e){var t=n.data[e];return typeof t=="string"?t:t&&t.value||""};var d=n.session.bgTokenizer;return d.$tokenizeRow=function(e){function s(e,n){e&&r.push({type:(t.className||"")+(n||""),value:e})}var t=n.data[e],r=[];if(!t)return r;typeof t=="string"&&(t={value:t});var i=t.caption||t.value||t.name,o=i.toLowerCase(),u=(n.filterText||"").toLowerCase(),a=0,f=0;for(var l=0;l<=u.length;l++)if(l!=f&&(t.matchMask&1<<l||l==u.length)){var c=u.slice(f,l);f=l;var h=o.indexOf(c,a);if(h==-1)continue;s(i.slice(a,h),""),a=h+c.length,s(i.slice(h,a),"completion-highlight")}return s(i.slice(a,i.length),""),t.meta&&r.push({type:"completion-meta",value:t.meta}),t.message&&r.push({type:"completion-message",value:t.message}),r},d.$updateOnChange=r,d.start=r,n.session.$computeWidth=function(){return this.screenWidth=0},n.isOpen=!1,n.isTopdown=!1,n.autoSelect=!0,n.filterText="",n.data=[],n.setData=function(e,t){n.filterText=t||"",n.setValue(u.stringRepeat("\n",e.length),-1),n.data=e||[],n.setRow(0)},n.getData=function(e){return n.data[e]},n.getRow=function(){return c.start.row},n.setRow=function(e){e=Math.max(this.autoSelect?0:-1,Math.min(this.data.length,e)),c.start.row!=e&&(n.selection.clearSelection(),c.start.row=c.end.row=e||0,n.session._emit("changeBackMarker"),n.moveCursorTo(e||0,0),n.isOpen&&n._signal("select"))},n.on("changeSelection",function(){n.isOpen&&n.setRow(n.selection.lead.row),n.renderer.scrollCursorIntoView()}),n.hide=function(){this.container.style.display="none",this._signal("hide"),n.isOpen=!1},n.show=function(e,t,r){var s=this.container,o=window.innerHeight,u=window.innerWidth,a=this.renderer,f=a.$maxLines*t*1.4,l=e.top+this.$borderSize,c=l>o/2&&!r;c&&l+t+f>o?(a.$maxPixelHeight=l-2*this.$borderSize,s.style.top="",s.style.bottom=o-l+"px",n.isTopdown=!1):(l+=t,a.$maxPixelHeight=o-l-.2*t,s.style.top=l+"px",s.style.bottom="",n.isTopdown=!0),s.style.display="";var h=e.left;h+s.offsetWidth>u&&(h=u-s.offsetWidth),s.style.left=h+"px",this._signal("show"),i=null,n.isOpen=!0},n.goTo=function(e){var t=this.getRow(),n=this.session.getLength()-1;switch(e){case"up":t=t<=0?n:t-1;break;case"down":t=t>=n?-1:t+1;break;case"start":t=0;break;case"end":t=n}this.setRow(t)},n.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},n.$imageSize=0,n.$borderSize=1,n};a.importCssString(".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #3a674e;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);    position: absolute;    z-index: 2;}.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid rgba(109, 150, 13, 0.8);    background: rgba(58, 103, 78, 0.62);}.ace_completion-meta {    opacity: 0.5;    margin: 0.9em;}.ace_completion-message {    color: blue;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #2d69c7;}.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #93ca12;}.ace_editor.ace_autocomplete {    width: 300px;    z-index: 200000;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;    background: #fefefe;    color: #111;}.ace_dark.ace_editor.ace_autocomplete {    border: 1px #484747 solid;    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);    line-height: 1.4;    background: #25282c;    color: #c1c1c1;}","autocompletion.css"),t.AcePopup=l,t.$singleLineEditor=f}),ace.define("ace/autocomplete/util",["require","exports","module"],function(e,t,n){"use strict";t.parForEach=function(e,t,n){var r=0,i=e.length;i===0&&n();for(var s=0;s<i;s++)t(e[s],function(e,t){r++,r===i&&n(e,t)})};var r=/[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;t.retrievePrecedingIdentifier=function(e,t,n){n=n||r;var i=[];for(var s=t-1;s>=0;s--){if(!n.test(e[s]))break;i.push(e[s])}return i.reverse().join("")},t.retrieveFollowingIdentifier=function(e,t,n){n=n||r;var i=[];for(var s=t;s<e.length;s++){if(!n.test(e[s]))break;i.push(e[s])}return i},t.getCompletionPrefix=function(e){var t=e.getCursorPosition(),n=e.session.getLine(t.row),r;return e.completers.forEach(function(e){e.identifierRegexps&&e.identifierRegexps.forEach(function(e){!r&&e&&(r=this.retrievePrecedingIdentifier(n,t.column,e))}.bind(this))}.bind(this)),r||this.retrievePrecedingIdentifier(n,t.column)}}),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/lang","ace/lib/dom","ace/snippets","ace/config"],function(e,t,n){"use strict";var r=e("./keyboard/hash_handler").HashHandler,i=e("./autocomplete/popup").AcePopup,s=e("./autocomplete/util"),o=e("./lib/lang"),u=e("./lib/dom"),a=e("./snippets").snippetManager,f=e("./config"),l=function(){this.autoInsert=!1,this.autoSelect=!0,this.exactMatch=!1,this.gatherCompletionsId=0,this.keyboardHandler=new r,this.keyboardHandler.bindKeys(this.commands),this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.changeTimer=o.delayedCall(function(){this.updateCompletions(!0)}.bind(this)),this.tooltipTimer=o.delayedCall(this.updateDocTooltip.bind(this),50)};(function(){this.$init=function(){return this.popup=new i(document.body||document.documentElement),this.popup.on("click",function(e){this.insertMatch(),e.stop()}.bind(this)),this.popup.focus=this.editor.focus.bind(this.editor),this.popup.on("show",this.tooltipTimer.bind(null,null)),this.popup.on("select",this.tooltipTimer.bind(null,null)),this.popup.on("changeHoverMarker",this.tooltipTimer.bind(null,null)),this.popup},this.getPopup=function(){return this.popup||this.$init()},this.openPopup=function(e,t,n){this.popup||this.$init(),this.popup.autoSelect=this.autoSelect,this.popup.setData(this.completions.filtered,this.completions.filterText),e.keyBinding.addKeyboardHandler(this.keyboardHandler);var r=e.renderer;this.popup.setRow(this.autoSelect?0:-1);if(!n){this.popup.setTheme(e.getTheme()),this.popup.setFontSize(e.getFontSize());var i=r.layerConfig.lineHeight,s=r.$cursorLayer.getPixelPosition(this.base,!0);s.left-=this.popup.getTextLeftOffset();var o=e.container.getBoundingClientRect();s.top+=o.top-r.layerConfig.offset,s.left+=o.left-e.renderer.scrollLeft,s.left+=r.gutterWidth,this.popup.show(s,i)}else n&&!t&&this.detach();this.changeTimer.cancel()},this.detach=function(){this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener),this.changeTimer.cancel(),this.hideDocTooltip(),this.gatherCompletionsId+=1,this.popup&&this.popup.isOpen&&this.popup.hide(),this.base&&this.base.detach(),this.activated=!1,this.completions=this.base=null},this.changeListener=function(e){var t=this.editor.selection.lead;(t.row!=this.base.row||t.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},this.blurListener=function(e){var t=document.activeElement,n=this.editor.textInput.getElement(),r=e.relatedTarget&&this.tooltipNode&&this.tooltipNode.contains(e.relatedTarget),i=this.popup&&this.popup.container;t!=n&&t.parentNode!=i&&!r&&t!=this.tooltipNode&&e.relatedTarget!=n&&this.detach()},this.mousedownListener=function(e){this.detach()},this.mousewheelListener=function(e){this.detach()},this.goTo=function(e){this.popup.goTo(e)},this.insertMatch=function(e,t){e||(e=this.popup.getData(this.popup.getRow()));if(!e)return!1;var n=this.completions;this.editor.startOperation({command:{name:"insertMatch"}});if(e.completer&&e.completer.insertMatch)e.completer.insertMatch(this.editor,e);else{if(n.filterText){var r=this.editor.selection.getAllRanges();for(var i=0,s;s=r[i];i++)s.start.column-=n.filterText.length,this.editor.session.remove(s)}e.snippet?a.insertSnippet(this.editor,e.snippet):this.editor.execCommand("insertstring",e.value||e)}this.completions==n&&this.detach(),this.editor.endOperation()},this.commands={Up:function(e){e.completer.goTo("up")},Down:function(e){e.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(e){e.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(e){e.completer.goTo("end")},Esc:function(e){e.completer.detach()},Return:function(e){return e.completer.insertMatch()},"Shift-Return":function(e){e.completer.insertMatch(null,{deleteSuffix:!0})},Tab:function(e){var t=e.completer.insertMatch();if(!!t||!!e.tabstopManager)return t;e.completer.goTo("down")},PageUp:function(e){e.completer.popup.gotoPageUp()},PageDown:function(e){e.completer.popup.gotoPageDown()}},this.gatherCompletions=function(e,t){var n=e.getSession(),r=e.getCursorPosition(),i=s.getCompletionPrefix(e);this.base=n.doc.createAnchor(r.row,r.column-i.length),this.base.$insertRight=!0;var o=[],u=e.completers.length;return e.completers.forEach(function(a,f){a.getCompletions(e,n,r,i,function(n,r){!n&&r&&(o=o.concat(r)),t(null,{prefix:s.getCompletionPrefix(e),matches:o,finished:--u===0})})}),!0},this.showPopup=function(e,t){this.editor&&this.detach(),this.activated=!0,this.editor=e,e.completer!=this&&(e.completer&&e.completer.detach(),e.completer=this),e.on("changeSelection",this.changeListener),e.on("blur",this.blurListener),e.on("mousedown",this.mousedownListener),e.on("mousewheel",this.mousewheelListener),this.updateCompletions(!1,t)},this.updateCompletions=function(e,t){if(e&&this.base&&this.completions){var n=this.editor.getCursorPosition(),r=this.editor.session.getTextRange({start:this.base,end:n});if(r==this.completions.filterText)return;this.completions.setFilter(r);if(!this.completions.filtered.length)return this.detach();if(this.completions.filtered.length==1&&this.completions.filtered[0].value==r&&!this.completions.filtered[0].snippet)return this.detach();this.openPopup(this.editor,r,e);return}if(t&&t.matches){var n=this.editor.getSelectionRange().start;return this.base=this.editor.session.doc.createAnchor(n.row,n.column),this.base.$insertRight=!0,this.completions=new c(t.matches),this.openPopup(this.editor,"",e)}var i=this.gatherCompletionsId;this.gatherCompletions(this.editor,function(t,n){var r=function(){if(!n.finished)return;return this.detach()}.bind(this),s=n.prefix,o=n&&n.matches;if(!o||!o.length)return r();if(s.indexOf(n.prefix)!==0||i!=this.gatherCompletionsId)return;this.completions=new c(o),this.exactMatch&&(this.completions.exactMatch=!0),this.completions.setFilter(s);var u=this.completions.filtered;if(!u.length)return r();if(u.length==1&&u[0].value==s&&!u[0].snippet)return r();if(this.autoInsert&&u.length==1&&n.finished)return this.insertMatch(u[0]);this.openPopup(this.editor,s,e)}.bind(this))},this.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()},this.updateDocTooltip=function(){var e=this.popup,t=e.data,n=t&&(t[e.getHoveredRow()]||t[e.getRow()]),r=null;if(!n||!this.editor||!this.popup.isOpen)return this.hideDocTooltip();this.editor.completers.some(function(e){return e.getDocTooltip&&(r=e.getDocTooltip(n)),r}),!r&&typeof n!="string"&&(r=n),typeof r=="string"&&(r={docText:r});if(!r||!r.docHTML&&!r.docText)return this.hideDocTooltip();this.showDocTooltip(r)},this.showDocTooltip=function(e){this.tooltipNode||(this.tooltipNode=u.createElement("div"),this.tooltipNode.className="ace_tooltip ace_doc-tooltip",this.tooltipNode.style.margin=0,this.tooltipNode.style.pointerEvents="auto",this.tooltipNode.tabIndex=-1,this.tooltipNode.onblur=this.blurListener.bind(this),this.tooltipNode.onclick=this.onTooltipClick.bind(this));var t=this.tooltipNode;e.docHTML?t.innerHTML=e.docHTML:e.docText&&(t.textContent=e.docText),t.parentNode||document.body.appendChild(t);var n=this.popup,r=n.container.getBoundingClientRect();t.style.top=n.container.style.top,t.style.bottom=n.container.style.bottom,t.style.display="block",window.innerWidth-r.right<320?r.left<320?n.isTopdown?(t.style.top=r.bottom+"px",t.style.left=r.left+"px",t.style.right="",t.style.bottom=""):(t.style.top=n.container.offsetTop-t.offsetHeight+"px",t.style.left=r.left+"px",t.style.right="",t.style.bottom=""):(t.style.right=window.innerWidth-r.left+"px",t.style.left=""):(t.style.left=r.right+1+"px",t.style.right="")},this.hideDocTooltip=function(){this.tooltipTimer.cancel();if(!this.tooltipNode)return;var e=this.tooltipNode;!this.editor.isFocused()&&document.activeElement==e&&this.editor.focus(),this.tooltipNode=null,e.parentNode&&e.parentNode.removeChild(e)},this.onTooltipClick=function(e){var t=e.target;while(t&&t!=this.tooltipNode){if(t.nodeName=="A"&&t.href){t.rel="noreferrer",t.target="_blank";break}t=t.parentNode}},this.destroy=function(){this.detach();if(this.popup){this.popup.destroy();var e=this.popup.container;e&&e.parentNode&&e.parentNode.removeChild(e)}this.editor&&this.editor.completer==this&&this.editor.completer==null,this.popup=null}}).call(l.prototype),l.for=function(e){return e.completer?e.completer:(f.get("sharedPopups")?(l.$shared||(l.$sharedInstance=new l),e.completer=l.$sharedInstance):(e.completer=new l,e.once("destroy",function(e,t){t.completer.destroy()})),e.completer)},l.startCommand={name:"startAutocomplete",exec:function(e,t){var n=l.for(e);n.autoInsert=!1,n.autoSelect=!0,n.showPopup(e,t),n.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var c=function(e,t){this.all=e,this.filtered=e,this.filterText=t||"",this.exactMatch=!1};(function(){this.setFilter=function(e){if(e.length>this.filterText&&e.lastIndexOf(this.filterText,0)===0)var t=this.filtered;else var t=this.all;this.filterText=e,t=this.filterCompletions(t,this.filterText),t=t.sort(function(e,t){return t.exactMatch-e.exactMatch||t.$score-e.$score||(e.caption||e.value).localeCompare(t.caption||t.value)});var n=null;t=t.filter(function(e){var t=e.snippet||e.caption||e.value;return t===n?!1:(n=t,!0)}),this.filtered=t},this.filterCompletions=function(e,t){var n=[],r=t.toUpperCase(),i=t.toLowerCase();e:for(var s=0,o;o=e[s];s++){var u=o.caption||o.value||o.snippet;if(!u)continue;var a=-1,f=0,l=0,c,h;if(this.exactMatch){if(t!==u.substr(0,t.length))continue e}else{var p=u.toLowerCase().indexOf(i);if(p>-1)l=p;else for(var d=0;d<t.length;d++){var v=u.indexOf(i[d],a+1),m=u.indexOf(r[d],a+1);c=v>=0?m<0||v<m?v:m:m;if(c<0)continue e;h=c-a-1,h>0&&(a===-1&&(l+=10),l+=h,f|=1<<d),a=c}}o.matchMask=f,o.exactMatch=l?0:1,o.$score=(o.score||0)-l,n.push(o)}return n}}).call(c.prototype),t.Autocomplete=l,t.FilteredList=c}),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],function(e,t,n){function s(e,t){var n=e.getTextRange(r.fromPoints({row:0,column:0},t));return n.split(i).length-1}function o(e,t){var n=s(e,t),r=e.getValue().split(i),o=Object.create(null),u=r[n];return r.forEach(function(e,t){if(!e||e===u)return;var i=Math.abs(n-t),s=r.length-i;o[e]?o[e]=Math.max(s,o[e]):o[e]=s}),o}var r=e("../range").Range,i=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;t.getCompletions=function(e,t,n,r,i){var s=o(t,n),u=Object.keys(s);i(null,u.map(function(e){return{caption:e,value:e,score:s[e],meta:"local"}}))}}),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/lib/lang","ace/autocomplete/util","ace/autocomplete/text_completer","ace/editor","ace/config"],function(e,t,n){"use strict";var r=e("../snippets").snippetManager,i=e("../autocomplete").Autocomplete,s=e("../config"),o=e("../lib/lang"),u=e("../autocomplete/util"),a=e("../autocomplete/text_completer"),f={getCompletions:function(e,t,n,r,i){if(t.$mode.completer)return t.$mode.completer.getCompletions(e,t,n,r,i);var s=e.session.getState(n.row),o=t.$mode.getCompletions(s,t,n,r);i(null,o)}},l={getCompletions:function(e,t,n,i,s){var o=[],u=t.getTokenAt(n.row,n.column);u&&u.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/)?o.push("html-tag"):o=r.getActiveScopes(e);var a=r.snippetMap,f=[];o.forEach(function(e){var t=a[e]||[];for(var n=t.length;n--;){var r=t[n],i=r.name||r.tabTrigger;if(!i)continue;f.push({caption:i,snippet:r.content,meta:r.tabTrigger&&!r.name?r.tabTrigger+"\u21e5 ":"snippet",type:"snippet"})}},this),s(null,f)},getDocTooltip:function(e){e.type=="snippet"&&!e.docHTML&&(e.docHTML=["<b>",o.escapeHTML(e.caption),"</b>","<hr></hr>",o.escapeHTML(e.snippet)].join(""))}},c=[l,a,f];t.setCompleters=function(e){c.length=0,e&&c.push.apply(c,e)},t.addCompleter=function(e){c.push(e)},t.textCompleter=a,t.keyWordCompleter=f,t.snippetCompleter=l;var h={name:"expandSnippet",exec:function(e){return r.expandWithTab(e)},bindKey:"Tab"},p=function(e,t){d(t.session.$mode)},d=function(e){typeof e=="string"&&(e=s.$modes[e]);if(!e)return;r.files||(r.files={}),v(e.$id,e.snippetFileId),e.modes&&e.modes.forEach(d)},v=function(e,t){if(!t||!e||r.files[e])return;r.files[e]={},s.loadModule(t,function(t){if(!t)return;r.files[e]=t,!t.snippets&&t.snippetText&&(t.snippets=r.parseSnippetFile(t.snippetText)),r.register(t.snippets||[],t.scope),t.includeScopes&&(r.snippetMap[t.scope].includeScopes=t.includeScopes,t.includeScopes.forEach(function(e){d("ace/mode/"+e)}))})},m=function(e){var t=e.editor,n=t.completer&&t.completer.activated;if(e.command.name==="backspace")n&&!u.getCompletionPrefix(t)&&t.completer.detach();else if(e.command.name==="insertstring"){var r=u.getCompletionPrefix(t);if(r&&!n){var s=i.for(t);s.autoInsert=!1,s.showPopup(t)}}},g=e("../editor").Editor;e("../config").defineOptions(g.prototype,"editor",{enableBasicAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:c),this.commands.addCommand(i.startCommand)):this.commands.removeCommand(i.startCommand)},value:!1},enableLiveAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:c),this.commands.on("afterExec",m)):this.commands.removeListener("afterExec",m)},value:!1},enableSnippets:{set:function(e){e?(this.commands.addCommand(h),this.on("changeMode",p),p(null,this)):(this.commands.removeCommand(h),this.off("changeMode",p))},value:!1}})});                (function() {
                    ace.require(["ace/ext/language_tools"], function(m) {
                        if ( true && module) {
                            module.exports = m;
                        }
                    });
                })();
            

/***/ }),

/***/ "./node_modules/ace-builds/webpack-resolver.js":
/*!*****************************************************!*\
  !*** ./node_modules/ace-builds/webpack-resolver.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


ace.config.setModuleUrl('ace/ext/beautify', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-beautify.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-beautify.js"))
ace.config.setModuleUrl('ace/ext/code_lens', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-code_lens.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-code_lens.js"))
ace.config.setModuleUrl('ace/ext/elastic_tabstops_lite', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-elastic_tabstops_lite.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-elastic_tabstops_lite.js"))
ace.config.setModuleUrl('ace/ext/emmet', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-emmet.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-emmet.js"))
ace.config.setModuleUrl('ace/ext/error_marker', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-error_marker.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-error_marker.js"))
ace.config.setModuleUrl('ace/ext/keyboard_menu', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-keybinding_menu.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-keybinding_menu.js"))
ace.config.setModuleUrl('ace/ext/language_tools', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-language_tools.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-language_tools.js"))
ace.config.setModuleUrl('ace/ext/linking', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-linking.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-linking.js"))
ace.config.setModuleUrl('ace/ext/modelist', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-modelist.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-modelist.js"))
ace.config.setModuleUrl('ace/ext/options', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-options.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-options.js"))
ace.config.setModuleUrl('ace/ext/prompt', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-prompt.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-prompt.js"))
ace.config.setModuleUrl('ace/ext/rtl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-rtl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-rtl.js"))
ace.config.setModuleUrl('ace/ext/searchbox', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-searchbox.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-searchbox.js"))
ace.config.setModuleUrl('ace/ext/settings_menu', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-settings_menu.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-settings_menu.js"))
ace.config.setModuleUrl('ace/ext/spellcheck', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-spellcheck.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-spellcheck.js"))
ace.config.setModuleUrl('ace/ext/split', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-split.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-split.js"))
ace.config.setModuleUrl('ace/ext/static_highlight', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-static_highlight.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-static_highlight.js"))
ace.config.setModuleUrl('ace/ext/statusbar', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-statusbar.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-statusbar.js"))
ace.config.setModuleUrl('ace/ext/textarea', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-textarea.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-textarea.js"))
ace.config.setModuleUrl('ace/ext/themelist', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-themelist.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-themelist.js"))
ace.config.setModuleUrl('ace/ext/whitespace', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/ext-whitespace.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-whitespace.js"))
ace.config.setModuleUrl('ace/keyboard/emacs', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/keybinding-emacs.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-emacs.js"))
ace.config.setModuleUrl('ace/keyboard/sublime', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/keybinding-sublime.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-sublime.js"))
ace.config.setModuleUrl('ace/keyboard/vim', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/keybinding-vim.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-vim.js"))
ace.config.setModuleUrl('ace/keyboard/vscode', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/keybinding-vscode.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-vscode.js"))
ace.config.setModuleUrl('ace/mode/abap', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-abap.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-abap.js"))
ace.config.setModuleUrl('ace/mode/abc', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-abc.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-abc.js"))
ace.config.setModuleUrl('ace/mode/actionscript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-actionscript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-actionscript.js"))
ace.config.setModuleUrl('ace/mode/ada', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-ada.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ada.js"))
ace.config.setModuleUrl('ace/mode/alda', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-alda.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-alda.js"))
ace.config.setModuleUrl('ace/mode/apache_conf', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-apache_conf.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-apache_conf.js"))
ace.config.setModuleUrl('ace/mode/apex', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-apex.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-apex.js"))
ace.config.setModuleUrl('ace/mode/applescript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-applescript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-applescript.js"))
ace.config.setModuleUrl('ace/mode/aql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-aql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-aql.js"))
ace.config.setModuleUrl('ace/mode/asciidoc', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-asciidoc.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-asciidoc.js"))
ace.config.setModuleUrl('ace/mode/asl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-asl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-asl.js"))
ace.config.setModuleUrl('ace/mode/assembly_x86', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-assembly_x86.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-assembly_x86.js"))
ace.config.setModuleUrl('ace/mode/autohotkey', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-autohotkey.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-autohotkey.js"))
ace.config.setModuleUrl('ace/mode/batchfile', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-batchfile.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-batchfile.js"))
ace.config.setModuleUrl('ace/mode/c9search', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-c9search.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-c9search.js"))
ace.config.setModuleUrl('ace/mode/cirru', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-cirru.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-cirru.js"))
ace.config.setModuleUrl('ace/mode/clojure', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-clojure.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-clojure.js"))
ace.config.setModuleUrl('ace/mode/cobol', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-cobol.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-cobol.js"))
ace.config.setModuleUrl('ace/mode/coffee', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-coffee.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-coffee.js"))
ace.config.setModuleUrl('ace/mode/coldfusion', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-coldfusion.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-coldfusion.js"))
ace.config.setModuleUrl('ace/mode/crystal', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-crystal.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-crystal.js"))
ace.config.setModuleUrl('ace/mode/csharp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-csharp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csharp.js"))
ace.config.setModuleUrl('ace/mode/csound_document', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-csound_document.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csound_document.js"))
ace.config.setModuleUrl('ace/mode/csound_orchestra', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-csound_orchestra.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csound_orchestra.js"))
ace.config.setModuleUrl('ace/mode/csound_score', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-csound_score.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csound_score.js"))
ace.config.setModuleUrl('ace/mode/csp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-csp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csp.js"))
ace.config.setModuleUrl('ace/mode/css', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-css.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-css.js"))
ace.config.setModuleUrl('ace/mode/curly', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-curly.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-curly.js"))
ace.config.setModuleUrl('ace/mode/c_cpp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-c_cpp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-c_cpp.js"))
ace.config.setModuleUrl('ace/mode/d', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-d.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-d.js"))
ace.config.setModuleUrl('ace/mode/dart', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-dart.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-dart.js"))
ace.config.setModuleUrl('ace/mode/diff', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-diff.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-diff.js"))
ace.config.setModuleUrl('ace/mode/django', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-django.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-django.js"))
ace.config.setModuleUrl('ace/mode/dockerfile', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-dockerfile.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-dockerfile.js"))
ace.config.setModuleUrl('ace/mode/dot', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-dot.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-dot.js"))
ace.config.setModuleUrl('ace/mode/drools', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-drools.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-drools.js"))
ace.config.setModuleUrl('ace/mode/edifact', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-edifact.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-edifact.js"))
ace.config.setModuleUrl('ace/mode/eiffel', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-eiffel.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-eiffel.js"))
ace.config.setModuleUrl('ace/mode/ejs', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-ejs.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ejs.js"))
ace.config.setModuleUrl('ace/mode/elixir', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-elixir.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-elixir.js"))
ace.config.setModuleUrl('ace/mode/elm', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-elm.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-elm.js"))
ace.config.setModuleUrl('ace/mode/erlang', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-erlang.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-erlang.js"))
ace.config.setModuleUrl('ace/mode/forth', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-forth.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-forth.js"))
ace.config.setModuleUrl('ace/mode/fortran', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-fortran.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-fortran.js"))
ace.config.setModuleUrl('ace/mode/fsharp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-fsharp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-fsharp.js"))
ace.config.setModuleUrl('ace/mode/fsl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-fsl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-fsl.js"))
ace.config.setModuleUrl('ace/mode/ftl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-ftl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ftl.js"))
ace.config.setModuleUrl('ace/mode/gcode', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-gcode.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gcode.js"))
ace.config.setModuleUrl('ace/mode/gherkin', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-gherkin.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gherkin.js"))
ace.config.setModuleUrl('ace/mode/gitignore', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-gitignore.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gitignore.js"))
ace.config.setModuleUrl('ace/mode/glsl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-glsl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-glsl.js"))
ace.config.setModuleUrl('ace/mode/gobstones', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-gobstones.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gobstones.js"))
ace.config.setModuleUrl('ace/mode/golang', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-golang.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-golang.js"))
ace.config.setModuleUrl('ace/mode/graphqlschema', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-graphqlschema.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-graphqlschema.js"))
ace.config.setModuleUrl('ace/mode/groovy', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-groovy.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-groovy.js"))
ace.config.setModuleUrl('ace/mode/haml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-haml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haml.js"))
ace.config.setModuleUrl('ace/mode/handlebars', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-handlebars.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-handlebars.js"))
ace.config.setModuleUrl('ace/mode/haskell', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-haskell.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haskell.js"))
ace.config.setModuleUrl('ace/mode/haskell_cabal', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-haskell_cabal.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haskell_cabal.js"))
ace.config.setModuleUrl('ace/mode/haxe', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-haxe.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haxe.js"))
ace.config.setModuleUrl('ace/mode/hjson', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-hjson.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-hjson.js"))
ace.config.setModuleUrl('ace/mode/html', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-html.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-html.js"))
ace.config.setModuleUrl('ace/mode/html_elixir', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-html_elixir.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-html_elixir.js"))
ace.config.setModuleUrl('ace/mode/html_ruby', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-html_ruby.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-html_ruby.js"))
ace.config.setModuleUrl('ace/mode/ini', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-ini.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ini.js"))
ace.config.setModuleUrl('ace/mode/io', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-io.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-io.js"))
ace.config.setModuleUrl('ace/mode/jack', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-jack.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jack.js"))
ace.config.setModuleUrl('ace/mode/jade', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-jade.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jade.js"))
ace.config.setModuleUrl('ace/mode/java', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-java.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-java.js"))
ace.config.setModuleUrl('ace/mode/javascript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-javascript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-javascript.js"))
ace.config.setModuleUrl('ace/mode/json', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-json.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-json.js"))
ace.config.setModuleUrl('ace/mode/json5', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-json5.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-json5.js"))
ace.config.setModuleUrl('ace/mode/jsoniq', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-jsoniq.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jsoniq.js"))
ace.config.setModuleUrl('ace/mode/jsp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-jsp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jsp.js"))
ace.config.setModuleUrl('ace/mode/jssm', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-jssm.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jssm.js"))
ace.config.setModuleUrl('ace/mode/jsx', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-jsx.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jsx.js"))
ace.config.setModuleUrl('ace/mode/julia', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-julia.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-julia.js"))
ace.config.setModuleUrl('ace/mode/kotlin', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-kotlin.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-kotlin.js"))
ace.config.setModuleUrl('ace/mode/latex', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-latex.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-latex.js"))
ace.config.setModuleUrl('ace/mode/less', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-less.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-less.js"))
ace.config.setModuleUrl('ace/mode/liquid', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-liquid.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-liquid.js"))
ace.config.setModuleUrl('ace/mode/lisp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-lisp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lisp.js"))
ace.config.setModuleUrl('ace/mode/livescript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-livescript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-livescript.js"))
ace.config.setModuleUrl('ace/mode/logiql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-logiql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-logiql.js"))
ace.config.setModuleUrl('ace/mode/logtalk', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-logtalk.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-logtalk.js"))
ace.config.setModuleUrl('ace/mode/lsl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-lsl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lsl.js"))
ace.config.setModuleUrl('ace/mode/lua', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-lua.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lua.js"))
ace.config.setModuleUrl('ace/mode/luapage', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-luapage.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-luapage.js"))
ace.config.setModuleUrl('ace/mode/lucene', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-lucene.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lucene.js"))
ace.config.setModuleUrl('ace/mode/makefile', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-makefile.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-makefile.js"))
ace.config.setModuleUrl('ace/mode/markdown', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-markdown.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-markdown.js"))
ace.config.setModuleUrl('ace/mode/mask', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-mask.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mask.js"))
ace.config.setModuleUrl('ace/mode/matlab', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-matlab.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-matlab.js"))
ace.config.setModuleUrl('ace/mode/maze', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-maze.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-maze.js"))
ace.config.setModuleUrl('ace/mode/mediawiki', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-mediawiki.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mediawiki.js"))
ace.config.setModuleUrl('ace/mode/mel', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-mel.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mel.js"))
ace.config.setModuleUrl('ace/mode/mixal', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-mixal.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mixal.js"))
ace.config.setModuleUrl('ace/mode/mushcode', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-mushcode.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mushcode.js"))
ace.config.setModuleUrl('ace/mode/mysql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-mysql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mysql.js"))
ace.config.setModuleUrl('ace/mode/nginx', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-nginx.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nginx.js"))
ace.config.setModuleUrl('ace/mode/nim', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-nim.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nim.js"))
ace.config.setModuleUrl('ace/mode/nix', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-nix.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nix.js"))
ace.config.setModuleUrl('ace/mode/nsis', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-nsis.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nsis.js"))
ace.config.setModuleUrl('ace/mode/nunjucks', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-nunjucks.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nunjucks.js"))
ace.config.setModuleUrl('ace/mode/objectivec', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-objectivec.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-objectivec.js"))
ace.config.setModuleUrl('ace/mode/ocaml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-ocaml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ocaml.js"))
ace.config.setModuleUrl('ace/mode/pascal', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-pascal.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-pascal.js"))
ace.config.setModuleUrl('ace/mode/perl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-perl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-perl.js"))
ace.config.setModuleUrl('ace/mode/perl6', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-perl6.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-perl6.js"))
ace.config.setModuleUrl('ace/mode/pgsql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-pgsql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-pgsql.js"))
ace.config.setModuleUrl('ace/mode/php', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-php.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-php.js"))
ace.config.setModuleUrl('ace/mode/php_laravel_blade', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-php_laravel_blade.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-php_laravel_blade.js"))
ace.config.setModuleUrl('ace/mode/pig', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-pig.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-pig.js"))
ace.config.setModuleUrl('ace/mode/plain_text', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-plain_text.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-plain_text.js"))
ace.config.setModuleUrl('ace/mode/powershell', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-powershell.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-powershell.js"))
ace.config.setModuleUrl('ace/mode/praat', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-praat.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-praat.js"))
ace.config.setModuleUrl('ace/mode/prisma', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-prisma.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-prisma.js"))
ace.config.setModuleUrl('ace/mode/prolog', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-prolog.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-prolog.js"))
ace.config.setModuleUrl('ace/mode/properties', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-properties.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-properties.js"))
ace.config.setModuleUrl('ace/mode/protobuf', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-protobuf.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-protobuf.js"))
ace.config.setModuleUrl('ace/mode/puppet', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-puppet.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-puppet.js"))
ace.config.setModuleUrl('ace/mode/python', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-python.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-python.js"))
ace.config.setModuleUrl('ace/mode/qml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-qml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-qml.js"))
ace.config.setModuleUrl('ace/mode/r', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-r.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-r.js"))
ace.config.setModuleUrl('ace/mode/razor', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-razor.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-razor.js"))
ace.config.setModuleUrl('ace/mode/rdoc', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-rdoc.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rdoc.js"))
ace.config.setModuleUrl('ace/mode/red', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-red.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-red.js"))
ace.config.setModuleUrl('ace/mode/redshift', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-redshift.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-redshift.js"))
ace.config.setModuleUrl('ace/mode/rhtml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-rhtml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rhtml.js"))
ace.config.setModuleUrl('ace/mode/rst', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-rst.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rst.js"))
ace.config.setModuleUrl('ace/mode/ruby', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-ruby.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ruby.js"))
ace.config.setModuleUrl('ace/mode/rust', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-rust.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rust.js"))
ace.config.setModuleUrl('ace/mode/sass', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-sass.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sass.js"))
ace.config.setModuleUrl('ace/mode/scad', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-scad.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scad.js"))
ace.config.setModuleUrl('ace/mode/scala', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-scala.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scala.js"))
ace.config.setModuleUrl('ace/mode/scheme', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-scheme.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scheme.js"))
ace.config.setModuleUrl('ace/mode/scss', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-scss.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scss.js"))
ace.config.setModuleUrl('ace/mode/sh', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-sh.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sh.js"))
ace.config.setModuleUrl('ace/mode/sjs', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-sjs.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sjs.js"))
ace.config.setModuleUrl('ace/mode/slim', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-slim.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-slim.js"))
ace.config.setModuleUrl('ace/mode/smarty', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-smarty.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-smarty.js"))
ace.config.setModuleUrl('ace/mode/snippets', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-snippets.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-snippets.js"))
ace.config.setModuleUrl('ace/mode/soy_template', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-soy_template.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-soy_template.js"))
ace.config.setModuleUrl('ace/mode/space', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-space.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-space.js"))
ace.config.setModuleUrl('ace/mode/sparql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-sparql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sparql.js"))
ace.config.setModuleUrl('ace/mode/sql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-sql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sql.js"))
ace.config.setModuleUrl('ace/mode/sqlserver', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-sqlserver.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sqlserver.js"))
ace.config.setModuleUrl('ace/mode/stylus', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-stylus.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-stylus.js"))
ace.config.setModuleUrl('ace/mode/svg', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-svg.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-svg.js"))
ace.config.setModuleUrl('ace/mode/swift', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-swift.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-swift.js"))
ace.config.setModuleUrl('ace/mode/tcl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-tcl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-tcl.js"))
ace.config.setModuleUrl('ace/mode/terraform', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-terraform.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-terraform.js"))
ace.config.setModuleUrl('ace/mode/tex', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-tex.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-tex.js"))
ace.config.setModuleUrl('ace/mode/text', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-text.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-text.js"))
ace.config.setModuleUrl('ace/mode/textile', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-textile.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-textile.js"))
ace.config.setModuleUrl('ace/mode/toml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-toml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-toml.js"))
ace.config.setModuleUrl('ace/mode/tsx', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-tsx.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-tsx.js"))
ace.config.setModuleUrl('ace/mode/turtle', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-turtle.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-turtle.js"))
ace.config.setModuleUrl('ace/mode/twig', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-twig.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-twig.js"))
ace.config.setModuleUrl('ace/mode/typescript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-typescript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-typescript.js"))
ace.config.setModuleUrl('ace/mode/vala', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-vala.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-vala.js"))
ace.config.setModuleUrl('ace/mode/vbscript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-vbscript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-vbscript.js"))
ace.config.setModuleUrl('ace/mode/velocity', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-velocity.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-velocity.js"))
ace.config.setModuleUrl('ace/mode/verilog', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-verilog.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-verilog.js"))
ace.config.setModuleUrl('ace/mode/vhdl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-vhdl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-vhdl.js"))
ace.config.setModuleUrl('ace/mode/visualforce', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-visualforce.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-visualforce.js"))
ace.config.setModuleUrl('ace/mode/wollok', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-wollok.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-wollok.js"))
ace.config.setModuleUrl('ace/mode/xml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-xml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-xml.js"))
ace.config.setModuleUrl('ace/mode/xquery', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-xquery.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-xquery.js"))
ace.config.setModuleUrl('ace/mode/yaml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-yaml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-yaml.js"))
ace.config.setModuleUrl('ace/mode/zeek', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/mode-zeek.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-zeek.js"))

ace.config.setModuleUrl('ace/theme/ambiance', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-ambiance.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-ambiance.js"))
ace.config.setModuleUrl('ace/theme/chaos', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-chaos.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-chaos.js"))
ace.config.setModuleUrl('ace/theme/chrome', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-chrome.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-chrome.js"))
ace.config.setModuleUrl('ace/theme/clouds', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-clouds.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-clouds.js"))
ace.config.setModuleUrl('ace/theme/clouds_midnight', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-clouds_midnight.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-clouds_midnight.js"))
ace.config.setModuleUrl('ace/theme/cobalt', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-cobalt.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-cobalt.js"))
ace.config.setModuleUrl('ace/theme/crimson_editor', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-crimson_editor.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-crimson_editor.js"))
ace.config.setModuleUrl('ace/theme/dawn', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-dawn.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-dawn.js"))
ace.config.setModuleUrl('ace/theme/dracula', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-dracula.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-dracula.js"))
ace.config.setModuleUrl('ace/theme/dreamweaver', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-dreamweaver.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-dreamweaver.js"))
ace.config.setModuleUrl('ace/theme/eclipse', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-eclipse.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-eclipse.js"))
ace.config.setModuleUrl('ace/theme/github', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-github.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-github.js"))
ace.config.setModuleUrl('ace/theme/gob', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-gob.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-gob.js"))
ace.config.setModuleUrl('ace/theme/gruvbox', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-gruvbox.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-gruvbox.js"))
ace.config.setModuleUrl('ace/theme/idle_fingers', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-idle_fingers.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-idle_fingers.js"))
ace.config.setModuleUrl('ace/theme/iplastic', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-iplastic.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-iplastic.js"))
ace.config.setModuleUrl('ace/theme/katzenmilch', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-katzenmilch.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-katzenmilch.js"))
ace.config.setModuleUrl('ace/theme/kr_theme', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-kr_theme.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-kr_theme.js"))
ace.config.setModuleUrl('ace/theme/kuroir', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-kuroir.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-kuroir.js"))
ace.config.setModuleUrl('ace/theme/merbivore', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-merbivore.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-merbivore.js"))
ace.config.setModuleUrl('ace/theme/merbivore_soft', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-merbivore_soft.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-merbivore_soft.js"))
ace.config.setModuleUrl('ace/theme/monokai', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-monokai.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-monokai.js"))
ace.config.setModuleUrl('ace/theme/mono_industrial', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-mono_industrial.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-mono_industrial.js"))
ace.config.setModuleUrl('ace/theme/nord_dark', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-nord_dark.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-nord_dark.js"))
ace.config.setModuleUrl('ace/theme/pastel_on_dark', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-pastel_on_dark.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-pastel_on_dark.js"))
ace.config.setModuleUrl('ace/theme/solarized_dark', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-solarized_dark.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-solarized_dark.js"))
ace.config.setModuleUrl('ace/theme/solarized_light', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-solarized_light.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-solarized_light.js"))
ace.config.setModuleUrl('ace/theme/sqlserver', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-sqlserver.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-sqlserver.js"))
ace.config.setModuleUrl('ace/theme/terminal', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-terminal.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-terminal.js"))
ace.config.setModuleUrl('ace/theme/textmate', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-textmate.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-textmate.js"))
ace.config.setModuleUrl('ace/theme/tomorrow', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-tomorrow.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow.js"))
ace.config.setModuleUrl('ace/theme/tomorrow_night', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-tomorrow_night.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night.js"))
ace.config.setModuleUrl('ace/theme/tomorrow_night_blue', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-tomorrow_night_blue.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night_blue.js"))
ace.config.setModuleUrl('ace/theme/tomorrow_night_bright', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-tomorrow_night_bright.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night_bright.js"))
ace.config.setModuleUrl('ace/theme/tomorrow_night_eighties', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-tomorrow_night_eighties.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night_eighties.js"))
ace.config.setModuleUrl('ace/theme/twilight', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-twilight.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-twilight.js"))
ace.config.setModuleUrl('ace/theme/vibrant_ink', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-vibrant_ink.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-vibrant_ink.js"))
ace.config.setModuleUrl('ace/theme/xcode', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/theme-xcode.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-xcode.js"))
ace.config.setModuleUrl('ace/mode/coffee_worker', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/worker-coffee.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-coffee.js"))
ace.config.setModuleUrl('ace/mode/css_worker', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/worker-css.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-css.js"))
ace.config.setModuleUrl('ace/mode/html_worker', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/worker-html.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-html.js"))
ace.config.setModuleUrl('ace/mode/javascript_worker', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/worker-javascript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-javascript.js"))
ace.config.setModuleUrl('ace/mode/json_worker', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/worker-json.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-json.js"))
ace.config.setModuleUrl('ace/mode/lua_worker', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/worker-lua.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-lua.js"))
ace.config.setModuleUrl('ace/mode/php_worker', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/worker-php.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-php.js"))
ace.config.setModuleUrl('ace/mode/xml_worker', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/worker-xml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-xml.js"))
ace.config.setModuleUrl('ace/mode/xquery_worker', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/worker-xquery.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-xquery.js"))
ace.config.setModuleUrl('ace/snippets/abap', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/abap.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/abap.js"))
ace.config.setModuleUrl('ace/snippets/abc', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/abc.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/abc.js"))
ace.config.setModuleUrl('ace/snippets/actionscript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/actionscript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/actionscript.js"))
ace.config.setModuleUrl('ace/snippets/ada', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/ada.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ada.js"))
ace.config.setModuleUrl('ace/snippets/alda', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/alda.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/alda.js"))
ace.config.setModuleUrl('ace/snippets/apache_conf', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/apache_conf.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/apache_conf.js"))
ace.config.setModuleUrl('ace/snippets/apex', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/apex.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/apex.js"))
ace.config.setModuleUrl('ace/snippets/applescript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/applescript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/applescript.js"))
ace.config.setModuleUrl('ace/snippets/aql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/aql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/aql.js"))
ace.config.setModuleUrl('ace/snippets/asciidoc', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/asciidoc.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/asciidoc.js"))
ace.config.setModuleUrl('ace/snippets/asl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/asl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/asl.js"))
ace.config.setModuleUrl('ace/snippets/assembly_x86', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/assembly_x86.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/assembly_x86.js"))
ace.config.setModuleUrl('ace/snippets/autohotkey', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/autohotkey.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/autohotkey.js"))
ace.config.setModuleUrl('ace/snippets/batchfile', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/batchfile.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/batchfile.js"))
ace.config.setModuleUrl('ace/snippets/c9search', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/c9search.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/c9search.js"))
ace.config.setModuleUrl('ace/snippets/cirru', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/cirru.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/cirru.js"))
ace.config.setModuleUrl('ace/snippets/clojure', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/clojure.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/clojure.js"))
ace.config.setModuleUrl('ace/snippets/cobol', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/cobol.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/cobol.js"))
ace.config.setModuleUrl('ace/snippets/coffee', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/coffee.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/coffee.js"))
ace.config.setModuleUrl('ace/snippets/coldfusion', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/coldfusion.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/coldfusion.js"))
ace.config.setModuleUrl('ace/snippets/crystal', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/crystal.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/crystal.js"))
ace.config.setModuleUrl('ace/snippets/csharp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/csharp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csharp.js"))
ace.config.setModuleUrl('ace/snippets/csound_document', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/csound_document.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csound_document.js"))
ace.config.setModuleUrl('ace/snippets/csound_orchestra', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/csound_orchestra.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csound_orchestra.js"))
ace.config.setModuleUrl('ace/snippets/csound_score', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/csound_score.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csound_score.js"))
ace.config.setModuleUrl('ace/snippets/csp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/csp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csp.js"))
ace.config.setModuleUrl('ace/snippets/css', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/css.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/css.js"))
ace.config.setModuleUrl('ace/snippets/curly', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/curly.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/curly.js"))
ace.config.setModuleUrl('ace/snippets/c_cpp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/c_cpp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/c_cpp.js"))
ace.config.setModuleUrl('ace/snippets/d', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/d.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/d.js"))
ace.config.setModuleUrl('ace/snippets/dart', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/dart.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/dart.js"))
ace.config.setModuleUrl('ace/snippets/diff', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/diff.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/diff.js"))
ace.config.setModuleUrl('ace/snippets/django', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/django.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/django.js"))
ace.config.setModuleUrl('ace/snippets/dockerfile', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/dockerfile.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/dockerfile.js"))
ace.config.setModuleUrl('ace/snippets/dot', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/dot.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/dot.js"))
ace.config.setModuleUrl('ace/snippets/drools', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/drools.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/drools.js"))
ace.config.setModuleUrl('ace/snippets/edifact', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/edifact.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/edifact.js"))
ace.config.setModuleUrl('ace/snippets/eiffel', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/eiffel.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/eiffel.js"))
ace.config.setModuleUrl('ace/snippets/ejs', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/ejs.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ejs.js"))
ace.config.setModuleUrl('ace/snippets/elixir', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/elixir.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/elixir.js"))
ace.config.setModuleUrl('ace/snippets/elm', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/elm.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/elm.js"))
ace.config.setModuleUrl('ace/snippets/erlang', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/erlang.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/erlang.js"))
ace.config.setModuleUrl('ace/snippets/forth', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/forth.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/forth.js"))
ace.config.setModuleUrl('ace/snippets/fortran', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/fortran.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/fortran.js"))
ace.config.setModuleUrl('ace/snippets/fsharp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/fsharp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/fsharp.js"))
ace.config.setModuleUrl('ace/snippets/fsl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/fsl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/fsl.js"))
ace.config.setModuleUrl('ace/snippets/ftl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/ftl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ftl.js"))
ace.config.setModuleUrl('ace/snippets/gcode', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/gcode.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gcode.js"))
ace.config.setModuleUrl('ace/snippets/gherkin', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/gherkin.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gherkin.js"))
ace.config.setModuleUrl('ace/snippets/gitignore', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/gitignore.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gitignore.js"))
ace.config.setModuleUrl('ace/snippets/glsl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/glsl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/glsl.js"))
ace.config.setModuleUrl('ace/snippets/gobstones', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/gobstones.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gobstones.js"))
ace.config.setModuleUrl('ace/snippets/golang', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/golang.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/golang.js"))
ace.config.setModuleUrl('ace/snippets/graphqlschema', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/graphqlschema.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/graphqlschema.js"))
ace.config.setModuleUrl('ace/snippets/groovy', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/groovy.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/groovy.js"))
ace.config.setModuleUrl('ace/snippets/haml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/haml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haml.js"))
ace.config.setModuleUrl('ace/snippets/handlebars', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/handlebars.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/handlebars.js"))
ace.config.setModuleUrl('ace/snippets/haskell', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/haskell.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haskell.js"))
ace.config.setModuleUrl('ace/snippets/haskell_cabal', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/haskell_cabal.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haskell_cabal.js"))
ace.config.setModuleUrl('ace/snippets/haxe', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/haxe.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haxe.js"))
ace.config.setModuleUrl('ace/snippets/hjson', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/hjson.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/hjson.js"))
ace.config.setModuleUrl('ace/snippets/html', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/html.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/html.js"))
ace.config.setModuleUrl('ace/snippets/html_elixir', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/html_elixir.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/html_elixir.js"))
ace.config.setModuleUrl('ace/snippets/html_ruby', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/html_ruby.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/html_ruby.js"))
ace.config.setModuleUrl('ace/snippets/ini', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/ini.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ini.js"))
ace.config.setModuleUrl('ace/snippets/io', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/io.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/io.js"))
ace.config.setModuleUrl('ace/snippets/jack', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/jack.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jack.js"))
ace.config.setModuleUrl('ace/snippets/jade', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/jade.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jade.js"))
ace.config.setModuleUrl('ace/snippets/java', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/java.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/java.js"))
ace.config.setModuleUrl('ace/snippets/javascript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/javascript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/javascript.js"))
ace.config.setModuleUrl('ace/snippets/json', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/json.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/json.js"))
ace.config.setModuleUrl('ace/snippets/json5', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/json5.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/json5.js"))
ace.config.setModuleUrl('ace/snippets/jsoniq', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/jsoniq.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jsoniq.js"))
ace.config.setModuleUrl('ace/snippets/jsp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/jsp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jsp.js"))
ace.config.setModuleUrl('ace/snippets/jssm', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/jssm.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jssm.js"))
ace.config.setModuleUrl('ace/snippets/jsx', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/jsx.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jsx.js"))
ace.config.setModuleUrl('ace/snippets/julia', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/julia.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/julia.js"))
ace.config.setModuleUrl('ace/snippets/kotlin', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/kotlin.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/kotlin.js"))
ace.config.setModuleUrl('ace/snippets/latex', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/latex.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/latex.js"))
ace.config.setModuleUrl('ace/snippets/less', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/less.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/less.js"))
ace.config.setModuleUrl('ace/snippets/liquid', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/liquid.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/liquid.js"))
ace.config.setModuleUrl('ace/snippets/lisp', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/lisp.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lisp.js"))
ace.config.setModuleUrl('ace/snippets/livescript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/livescript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/livescript.js"))
ace.config.setModuleUrl('ace/snippets/logiql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/logiql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/logiql.js"))
ace.config.setModuleUrl('ace/snippets/logtalk', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/logtalk.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/logtalk.js"))
ace.config.setModuleUrl('ace/snippets/lsl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/lsl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lsl.js"))
ace.config.setModuleUrl('ace/snippets/lua', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/lua.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lua.js"))
ace.config.setModuleUrl('ace/snippets/luapage', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/luapage.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/luapage.js"))
ace.config.setModuleUrl('ace/snippets/lucene', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/lucene.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lucene.js"))
ace.config.setModuleUrl('ace/snippets/makefile', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/makefile.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/makefile.js"))
ace.config.setModuleUrl('ace/snippets/markdown', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/markdown.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/markdown.js"))
ace.config.setModuleUrl('ace/snippets/mask', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/mask.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mask.js"))
ace.config.setModuleUrl('ace/snippets/matlab', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/matlab.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/matlab.js"))
ace.config.setModuleUrl('ace/snippets/maze', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/maze.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/maze.js"))
ace.config.setModuleUrl('ace/snippets/mediawiki', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/mediawiki.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mediawiki.js"))
ace.config.setModuleUrl('ace/snippets/mel', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/mel.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mel.js"))
ace.config.setModuleUrl('ace/snippets/mixal', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/mixal.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mixal.js"))
ace.config.setModuleUrl('ace/snippets/mushcode', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/mushcode.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mushcode.js"))
ace.config.setModuleUrl('ace/snippets/mysql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/mysql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mysql.js"))
ace.config.setModuleUrl('ace/snippets/nginx', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/nginx.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nginx.js"))
ace.config.setModuleUrl('ace/snippets/nim', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/nim.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nim.js"))
ace.config.setModuleUrl('ace/snippets/nix', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/nix.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nix.js"))
ace.config.setModuleUrl('ace/snippets/nsis', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/nsis.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nsis.js"))
ace.config.setModuleUrl('ace/snippets/nunjucks', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/nunjucks.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nunjucks.js"))
ace.config.setModuleUrl('ace/snippets/objectivec', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/objectivec.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/objectivec.js"))
ace.config.setModuleUrl('ace/snippets/ocaml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/ocaml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ocaml.js"))
ace.config.setModuleUrl('ace/snippets/pascal', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/pascal.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/pascal.js"))
ace.config.setModuleUrl('ace/snippets/perl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/perl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/perl.js"))
ace.config.setModuleUrl('ace/snippets/perl6', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/perl6.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/perl6.js"))
ace.config.setModuleUrl('ace/snippets/pgsql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/pgsql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/pgsql.js"))
ace.config.setModuleUrl('ace/snippets/php', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/php.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/php.js"))
ace.config.setModuleUrl('ace/snippets/php_laravel_blade', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/php_laravel_blade.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/php_laravel_blade.js"))
ace.config.setModuleUrl('ace/snippets/pig', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/pig.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/pig.js"))
ace.config.setModuleUrl('ace/snippets/plain_text', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/plain_text.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/plain_text.js"))
ace.config.setModuleUrl('ace/snippets/powershell', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/powershell.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/powershell.js"))
ace.config.setModuleUrl('ace/snippets/praat', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/praat.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/praat.js"))
ace.config.setModuleUrl('ace/snippets/prisma', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/prisma.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/prisma.js"))
ace.config.setModuleUrl('ace/snippets/prolog', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/prolog.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/prolog.js"))
ace.config.setModuleUrl('ace/snippets/properties', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/properties.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/properties.js"))
ace.config.setModuleUrl('ace/snippets/protobuf', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/protobuf.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/protobuf.js"))
ace.config.setModuleUrl('ace/snippets/puppet', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/puppet.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/puppet.js"))
ace.config.setModuleUrl('ace/snippets/python', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/python.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/python.js"))
ace.config.setModuleUrl('ace/snippets/qml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/qml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/qml.js"))
ace.config.setModuleUrl('ace/snippets/r', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/r.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/r.js"))
ace.config.setModuleUrl('ace/snippets/razor', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/razor.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/razor.js"))
ace.config.setModuleUrl('ace/snippets/rdoc', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/rdoc.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rdoc.js"))
ace.config.setModuleUrl('ace/snippets/red', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/red.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/red.js"))
ace.config.setModuleUrl('ace/snippets/redshift', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/redshift.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/redshift.js"))
ace.config.setModuleUrl('ace/snippets/rhtml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/rhtml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rhtml.js"))
ace.config.setModuleUrl('ace/snippets/rst', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/rst.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rst.js"))
ace.config.setModuleUrl('ace/snippets/ruby', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/ruby.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ruby.js"))
ace.config.setModuleUrl('ace/snippets/rust', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/rust.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rust.js"))
ace.config.setModuleUrl('ace/snippets/sass', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/sass.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sass.js"))
ace.config.setModuleUrl('ace/snippets/scad', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/scad.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scad.js"))
ace.config.setModuleUrl('ace/snippets/scala', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/scala.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scala.js"))
ace.config.setModuleUrl('ace/snippets/scheme', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/scheme.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scheme.js"))
ace.config.setModuleUrl('ace/snippets/scss', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/scss.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scss.js"))
ace.config.setModuleUrl('ace/snippets/sh', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/sh.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sh.js"))
ace.config.setModuleUrl('ace/snippets/sjs', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/sjs.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sjs.js"))
ace.config.setModuleUrl('ace/snippets/slim', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/slim.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/slim.js"))
ace.config.setModuleUrl('ace/snippets/smarty', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/smarty.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/smarty.js"))
ace.config.setModuleUrl('ace/snippets/snippets', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/snippets.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/snippets.js"))
ace.config.setModuleUrl('ace/snippets/soy_template', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/soy_template.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/soy_template.js"))
ace.config.setModuleUrl('ace/snippets/space', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/space.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/space.js"))
ace.config.setModuleUrl('ace/snippets/sparql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/sparql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sparql.js"))
ace.config.setModuleUrl('ace/snippets/sql', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/sql.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sql.js"))
ace.config.setModuleUrl('ace/snippets/sqlserver', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/sqlserver.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sqlserver.js"))
ace.config.setModuleUrl('ace/snippets/stylus', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/stylus.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/stylus.js"))
ace.config.setModuleUrl('ace/snippets/svg', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/svg.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/svg.js"))
ace.config.setModuleUrl('ace/snippets/swift', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/swift.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/swift.js"))
ace.config.setModuleUrl('ace/snippets/tcl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/tcl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/tcl.js"))
ace.config.setModuleUrl('ace/snippets/terraform', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/terraform.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/terraform.js"))
ace.config.setModuleUrl('ace/snippets/tex', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/tex.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/tex.js"))
ace.config.setModuleUrl('ace/snippets/text', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/text.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/text.js"))
ace.config.setModuleUrl('ace/snippets/textile', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/textile.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/textile.js"))
ace.config.setModuleUrl('ace/snippets/toml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/toml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/toml.js"))
ace.config.setModuleUrl('ace/snippets/tsx', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/tsx.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/tsx.js"))
ace.config.setModuleUrl('ace/snippets/turtle', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/turtle.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/turtle.js"))
ace.config.setModuleUrl('ace/snippets/twig', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/twig.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/twig.js"))
ace.config.setModuleUrl('ace/snippets/typescript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/typescript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/typescript.js"))
ace.config.setModuleUrl('ace/snippets/vala', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/vala.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/vala.js"))
ace.config.setModuleUrl('ace/snippets/vbscript', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/vbscript.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/vbscript.js"))
ace.config.setModuleUrl('ace/snippets/velocity', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/velocity.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/velocity.js"))
ace.config.setModuleUrl('ace/snippets/verilog', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/verilog.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/verilog.js"))
ace.config.setModuleUrl('ace/snippets/vhdl', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/vhdl.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/vhdl.js"))
ace.config.setModuleUrl('ace/snippets/visualforce', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/visualforce.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/visualforce.js"))
ace.config.setModuleUrl('ace/snippets/wollok', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/wollok.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/wollok.js"))
ace.config.setModuleUrl('ace/snippets/xml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/xml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/xml.js"))
ace.config.setModuleUrl('ace/snippets/xquery', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/xquery.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/xquery.js"))
ace.config.setModuleUrl('ace/snippets/yaml', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/yaml.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/yaml.js"))
ace.config.setModuleUrl('ace/snippets/zeek', __webpack_require__(/*! file-loader?esModule=false!./src-noconflict/snippets/zeek.js */ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/zeek.js"))

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-beautify.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-beautify.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a46e90b37415c639a6633f73e1cb1831.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-code_lens.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-code_lens.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef726a596b666599e6ab8a3c6fe87da6.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-elastic_tabstops_lite.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-elastic_tabstops_lite.js ***!
  \***********************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75d2dae20d7bac5ecfa9dafc48ec04eb.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-emmet.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-emmet.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc01c76461e0bea970f368ed0a6df7d2.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-error_marker.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-error_marker.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c530988d2b1966fd10a4d99fa3877e1b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-keybinding_menu.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-keybinding_menu.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bc8540c08925f6cdf6d7c3ce8fbcea0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-language_tools.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-language_tools.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e55fabb1403649e428fbba4b51ab90d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-linking.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-linking.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b8e2282f60f104ff3ace5b905af4d62.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-modelist.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-modelist.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44c949690b47955390a085175b1647a6.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-options.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-options.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69e9b4cb1e86677ea0abea312069496e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-prompt.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-prompt.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42efc1d5450a9a3f9d83ed2d30b678da.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-rtl.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-rtl.js ***!
  \*****************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74fa46809aba9625071aa51bc0a71561.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-searchbox.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-searchbox.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b5b48da5c5105b48553ea966aeb42f2.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-settings_menu.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-settings_menu.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bec560527365ce4294ec5a9b6cd1f2c6.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-spellcheck.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-spellcheck.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bf75743fb14fea7cf02a5da1bda79d4.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-split.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-split.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55892adefebc0d53993fb108151ed150.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-static_highlight.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-static_highlight.js ***!
  \******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a9cd3d62e7f1cd404606c50d9da86fb.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-statusbar.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-statusbar.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6292be0125d3720498496eaa7f541618.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-textarea.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-textarea.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9dd9cc0ee0c8abcbe4e7c47679b278f1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-themelist.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-themelist.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f312f155667dc5295b1fbfa8a978964.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-whitespace.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/ext-whitespace.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40e6f6cb52a24a747b1046614db3b164.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-emacs.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-emacs.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e45b09d2016829aba6f70f59f6e428e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-sublime.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-sublime.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19e684db1b08c82963634abc8b2c989f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-vim.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-vim.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c39df88966f20b18513bc231ba539721.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-vscode.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/keybinding-vscode.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1850762f1bfaf1a1044765b02b243ed4.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-abap.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-abap.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ada4185d70a1852b578b2063de58e37.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-abc.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-abc.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03748243ac7148ca150ba06c2919ff81.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-actionscript.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-actionscript.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fe2d583da5f073431d81a6ea13ffc0c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ada.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ada.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "760eb6458a048f3cba7bc3ae52ef2ba4.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-alda.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-alda.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd358d9acaaa7049d85b15ac766fc314.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-apache_conf.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-apache_conf.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b460e24d77f9c0d8b21e65d899840adb.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-apex.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-apex.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aaf5c3a4f1a188fd051577cea7b87209.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-applescript.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-applescript.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "985d6749688c18f94994794f88492444.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-aql.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-aql.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eba5ee3fb1f3e92af88c69e50b2a8fd1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-asciidoc.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-asciidoc.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4860a6a7c59b9ed5c779f7201dc1f591.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-asl.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-asl.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0878cc386a608146dbc8fb3b6745c42.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-assembly_x86.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-assembly_x86.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a1dab236c2844d28f73c5c128afe299.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-autohotkey.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-autohotkey.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4565878df49fd4ce3edd3f1022c1695.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-batchfile.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-batchfile.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c71a5c0e85afc5486ee9ac29099843d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-c9search.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-c9search.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e6c2744429a8fac6e536b179c1f31d0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-c_cpp.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-c_cpp.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c7262d7b1ffe2850fad47c66d798b0d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-cirru.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-cirru.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "506d44d8712a22011ce2bec8adbb19b2.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-clojure.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-clojure.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2ff96fbe6501ff45c37491b94c96c5f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-cobol.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-cobol.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e37c1ef17a219449c8c6aa37a87a941.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-coffee.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-coffee.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7ca9dccbac3af7ebc82b271dd2aa570.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-coldfusion.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-coldfusion.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecd02712f5a40fcdaa3bfa8190470024.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-crystal.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-crystal.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b61fe945e9e73aba22717e5d6f080df.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csharp.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csharp.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e277a4ce5486a806a00497aea8ecdd3.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csound_document.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csound_document.js ***!
  \******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25f492a94b705a466446909aeaa337b0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csound_orchestra.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csound_orchestra.js ***!
  \*******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68161fc575c65183ae1646c6d01e44db.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csound_score.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csound_score.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6144815fed7dc327eb6a82bcdbfad74b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csp.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-csp.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44ac2a2398075299754707d4bac7c276.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-css.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-css.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c9c55eb1a1e5c1dfd63631511d9a1f0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-curly.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-curly.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "875e553a27bee88a73df34a90b3058e4.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-d.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-d.js ***!
  \****************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f7c864f08b00c01f04ac22375f7ddd9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-dart.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-dart.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad03544c5a63e9c58d4d280bc5851cec.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-diff.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-diff.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "440f4d477b586c7a6ba4c1c966ca79fc.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-django.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-django.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc1eb6c1c92d7067c72b82b2833a7d2c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-dockerfile.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-dockerfile.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b25188cf2652d63136d5e54c38abf84e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-dot.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-dot.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "716879b6ef8945d579595d88534ae402.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-drools.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-drools.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c4e2829082a68aace54050cc1c5749c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-edifact.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-edifact.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4c53706e1721b08e8b2f650c8bd35c4.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-eiffel.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-eiffel.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30e80558090a09477e4466af8af4c40e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ejs.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ejs.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f582d9feb91d31036d3dae4cdaea865f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-elixir.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-elixir.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "291611f874a2bc54dbc291b52d74c512.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-elm.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-elm.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c27341a2599ffb713c8fb7beced7601.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-erlang.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-erlang.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecd37b343c4dcc8dac849b1c680dcbef.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-forth.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-forth.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8fa659263d5ca9e0d1be69c048133a8.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-fortran.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-fortran.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f407a1006eb830d6f0aaad96c133d26.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-fsharp.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-fsharp.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df5710d97a899b672060afaa8c4891c2.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-fsl.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-fsl.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "444ababf8edc26948943fbb45bd06a19.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ftl.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ftl.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28474eb7ee45a125e49cc5cbe69e336f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gcode.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gcode.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "367ad31e6d99d0021d05133b85bb9faf.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gherkin.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gherkin.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ebdef8c548fca6c51280e915d6f4c3f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gitignore.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gitignore.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8707a7b49421dbbb842506674ff87fa3.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-glsl.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-glsl.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "641021f265c44248f23e7e04936868dc.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gobstones.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-gobstones.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34791bf31a4236531bc887b48f872c1c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-golang.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-golang.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4700af84801dbda8a3880e3469c21130.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-graphqlschema.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-graphqlschema.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0872e65446d05c1c443180c6280b015f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-groovy.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-groovy.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41d8a58fd52b6a06e8d3fb06cdabf67a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haml.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haml.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b64f97eed4a3837a93f8bdd363295fb.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-handlebars.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-handlebars.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4306aa43824ec1a4ee422b59a851e6f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haskell.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haskell.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e26167b5f75d5b94add34f1f4d8b044.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haskell_cabal.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haskell_cabal.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1a58542777d072396d7cee5487304f9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haxe.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-haxe.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df37029cdf8359ecac0aebdf4f257d03.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-hjson.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-hjson.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "179a93d3148b7edb72581279c3787d0c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-html.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-html.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c728b4ef87cfd5f561d1601f0867c39d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-html_elixir.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-html_elixir.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da1c1b1569c4d5872c9a18c29f0b5c90.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-html_ruby.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-html_ruby.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c53d90bf4029cfd1b6a0945d1cae142.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ini.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ini.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcb197c0214e800da9d9436dfc9437d6.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-io.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-io.js ***!
  \*****************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abb40a9a6ef0b2fe14c66dcadc9857a2.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jack.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jack.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e3e2243675fa4fb4b320dc57daf2d4f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jade.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jade.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "263f7107e9357b1c91997e1a21b59ff5.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-java.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-java.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbe575aa738ad773a96526b46498df06.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-javascript.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-javascript.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b425eb8188febc5a89674b89a72d296.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-json.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-json.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25c99a71d30112583893bc5277402c46.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-json5.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-json5.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f12d133c88ce53d0837a6c4c0287a37.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jsoniq.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jsoniq.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ef082035f74b3d7324f95a7498ea656.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jsp.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jsp.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18c1c3975e34bff803c5f6e212df4281.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jssm.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jssm.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4eed3725a00fc2bab78accdb014b7826.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jsx.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-jsx.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a98ead014d010899b35ee25c7c225542.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-julia.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-julia.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82fed7ec74be91e0db61c500d9c6d7ee.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-kotlin.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-kotlin.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ddd0346681f9f12fd3a191245aa41df.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-latex.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-latex.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d04707d65591e86810ebc56d48b10810.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-less.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-less.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f90003058d7087f15baa27b80bf08c1d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-liquid.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-liquid.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ff54aa3c655216f360438bc7f5b181a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lisp.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lisp.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47541c23870e955fff15de4be490ba74.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-livescript.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-livescript.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d30fa4070abd6929228505790744e180.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-logiql.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-logiql.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c45445ab45defa960329c6f8e6224e57.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-logtalk.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-logtalk.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c2816c26725f7aae5b490142e31112f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lsl.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lsl.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "244b1a234ec1728d0268214de601449d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lua.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lua.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3646668820dc96864fbed7746f805947.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-luapage.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-luapage.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85a977f41a907dba8c672f9bf4943da0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lucene.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-lucene.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5da9145440d57c9b84d469253e84898d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-makefile.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-makefile.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c32ec7d45ccd947b98fe458a8ca1405b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-markdown.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-markdown.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbd05051a3ecf6b10e2f7b8904153f2d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mask.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mask.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a67fdd5293af0a35defd2574c05cd04.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-matlab.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-matlab.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09563004132aabcfcc186943555a92a1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-maze.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-maze.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f758ea78954547fed0a8d999691dd7c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mediawiki.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mediawiki.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b98206b2175363f1150c074608603942.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mel.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mel.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "365b89ceec577ebec0a39c938c2363f0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mixal.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mixal.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a164d0e40c4dfa485dcf8e6d5258d767.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mushcode.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mushcode.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf90a39d245bf7e6c1b41c7a9a28f0a1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mysql.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-mysql.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12b520593765ef7e714d7fb3764633ed.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nginx.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nginx.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0071564b0854c39e3de8b99d66e4dfd.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nim.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nim.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80a171b7595d1161735e23dec8efddd6.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nix.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nix.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95eab4af456c8e8b2f30d3a733ea0825.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nsis.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nsis.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72fa12126ab1140dbf95fc16549569e6.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nunjucks.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-nunjucks.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57f9654d8ecdebfb02c636e1889af2e4.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-objectivec.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-objectivec.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f27ea796db6b7ed61b49a1e65a7d6aeb.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ocaml.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ocaml.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0548260c0ac6b0e7cdb8909df1a5333.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-pascal.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-pascal.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1efdca26800423a363b769b1834cfcf.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-perl.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-perl.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0736a7477d7aac4c669bb94ccae25d9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-perl6.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-perl6.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c2dea390c14a45539fdcf72c009d47a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-pgsql.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-pgsql.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bb61adbbc13088ee1c32d88b5c7e754.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-php.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-php.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ccf23f751ac7990c38c272fa5b3c515.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-php_laravel_blade.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-php_laravel_blade.js ***!
  \********************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d57d8d576cd63242136f3c8271592f4.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-pig.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-pig.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d143a2d103a9e376a9e3b55e680eef7.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-plain_text.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-plain_text.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "baa5bf4cfefed057a4657a1b02cfa114.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-powershell.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-powershell.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1324f89bd8db0bae85b79b7f90f6c119.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-praat.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-praat.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "866bf6ca5057dcb24503761af061d486.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-prisma.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-prisma.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1ac30076824f72cdff7ea29ae0b6801.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-prolog.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-prolog.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c96efcfd419a70a93c96557979bc66d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-properties.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-properties.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6a6a4adaab4f09a7835ff64a5096198.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-protobuf.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-protobuf.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc784296b938a0c4988271d20ce946a8.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-puppet.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-puppet.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "010d0560a00a032c33da819e3c86596a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-python.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-python.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3dcc18a5dee46b57ad7f85c0bee86802.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-qml.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-qml.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "114c58e47951fe3f6d25f683e0cd54e7.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-r.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-r.js ***!
  \****************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c631c95d9019218dfd22d028f215e1d1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-razor.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-razor.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee694c1bcbdc9439e50f816c39fd1023.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rdoc.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rdoc.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2a705f6bc3a6827d6c94c5978aec36d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-red.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-red.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64c45b6610e353ba59a58afc6dd090ca.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-redshift.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-redshift.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bad2df0e3bfd8fdc1a332fb6276cb39.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rhtml.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rhtml.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec32839f8f3353e66b85450525fa3114.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rst.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rst.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b2fe1a34cdf81c656a47e493ca9d658.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ruby.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-ruby.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2a00e1726c71ca10fbaf4b9c4374458.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rust.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-rust.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e4e2772f701dd58ffb554bcfce0195b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sass.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sass.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6fb5287a46e030336c006e3f50ade3a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scad.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scad.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89d3c35a5ef97a600927b477a9ba06b4.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scala.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scala.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cda6c5c52fa5d595982da0fac9da25a5.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scheme.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scheme.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23da8ba64540ff4aa68a34d3445db680.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scss.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-scss.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c1cd1223bd45600763f8c152ad167d5.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sh.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sh.js ***!
  \*****************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aaddd877950d1e3bf1b3ef0fc0ff596e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sjs.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sjs.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3df92508d7112d83474f31fe9590e289.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-slim.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-slim.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2fe7592ff2fdda099b2b6355abe8c06.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-smarty.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-smarty.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6fae0b04a3000a57f22bb25325c8afe.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-snippets.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-snippets.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6df2278bd475169749bab512944b7ec.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-soy_template.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-soy_template.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47f0fbf038314894ac52f2d67466b5e9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-space.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-space.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "595aef8d8b0a2017e2fc27db5703e0d1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sparql.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sparql.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adc5e81257ed3f8d70d03cf79150eec1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sql.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sql.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44f69b70923b6104f066464bf87ec997.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sqlserver.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-sqlserver.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0731d7568a06d2e28351781370bc52bb.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-stylus.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-stylus.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb4175466ea600940f2927fa03a217e8.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-svg.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-svg.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0780e66c6b1ade0fa22283ce1f9c402.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-swift.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-swift.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88bbfb9fdb8730ffc23f546b42d8d620.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-tcl.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-tcl.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d46734b57c7408a41473abcd515b64c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-terraform.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-terraform.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e3f006db26e9b277b1bdbc130611a14.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-tex.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-tex.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c40023acde0f3d5f4806f5fccbb4284b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-text.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-text.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25718a469574ade47e23567d8c543169.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-textile.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-textile.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7493f0c3c9bf268d6ad785019d993dd7.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-toml.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-toml.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6cf8898b285b71e2abe832717ac7060.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-tsx.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-tsx.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bd84be066027e61c84c9c2aa9543c2a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-turtle.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-turtle.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1bc72d79cc6161590fc01c6b139fccd.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-twig.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-twig.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8361542d34c46713c9aff6c4ce65a9a3.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-typescript.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-typescript.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07101530302fe1d03dcd731992f7a899.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-vala.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-vala.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd5e2efd3b2d047abe8473f99c650a35.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-vbscript.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-vbscript.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80efec9a63094f19edae0480a0f2cd8.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-velocity.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-velocity.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b20056c149af6b50c851ecfff90e0ccb.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-verilog.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-verilog.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6903d8ef977a1424c4e2eb22b96feb77.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-vhdl.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-vhdl.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18e63e724098792b95b076412a860636.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-visualforce.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-visualforce.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75bffda9455d77087f34708ac4e85371.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-wollok.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-wollok.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c797511423f91a877e7fdffa74d015cb.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-xml.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-xml.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4639c30a609d986a255ccc684404527e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-xquery.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-xquery.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16563bfaf4741097d38cc6ce3ccc1a2d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-yaml.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-yaml.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d2a42eeeeec801ab35f2fff7d900e43.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-zeek.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/mode-zeek.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ceabd28d8dc751f41002ebf2b6fed88.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/abap.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/abap.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b02d982ccb1011197a5a24800b178a0a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/abc.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/abc.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1441681e52f3ae9ab33afbc5517359a0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/actionscript.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/actionscript.js ***!
  \*******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44701e25bb6f2ab9ff18343f2357d1b0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ada.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ada.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f055ac4066041b9008dd6aebf9df34b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/alda.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/alda.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d542dda7308361c34af2afb9b70d755a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/apache_conf.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/apache_conf.js ***!
  \******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4bedde07e392f8ebf64341b61f75df2.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/apex.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/apex.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77aaca51c1c32acaf32656d45f4dc017.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/applescript.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/applescript.js ***!
  \******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "725da29f1643c2263a437c08a1454aea.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/aql.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/aql.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efc14cdf19554635e477781704353ec2.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/asciidoc.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/asciidoc.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eaa55a522fb2cb2f0287711f42344984.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/asl.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/asl.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b808fb222140a85b23ebbe0fffa906d9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/assembly_x86.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/assembly_x86.js ***!
  \*******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e874d975c9128dc6eb9a513d088bed9f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/autohotkey.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/autohotkey.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7e1a807af3160b342e0a3550cf8f7c5.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/batchfile.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/batchfile.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48e9351c5623d4da657ce7d5d0267ea6.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/c9search.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/c9search.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb5bab7a675544fe31ddb7f4a77dffb9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/c_cpp.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/c_cpp.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fd6a6ddbcbbebe735c9d21e594203ec.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/cirru.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/cirru.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23bb1a9f279e7a732bfd405350aab114.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/clojure.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/clojure.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "222d52530e9db0a0ec565c6306c5db35.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/cobol.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/cobol.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c57b3481f295105588972ffa1305521.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/coffee.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/coffee.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54b3396acd2c700969248de4b20cbf7c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/coldfusion.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/coldfusion.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c67587c2093ac3a19da9f2196e040b7.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/crystal.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/crystal.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a496ae20cc576bef1d35972548207cf.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csharp.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csharp.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e55b301888460bd06c8e26d1011e01a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csound_document.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csound_document.js ***!
  \**********************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03487ba89c7b63069d63c1b3802a472c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csound_orchestra.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csound_orchestra.js ***!
  \***********************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3bb2c8deddd8c2afcf73f6f5d711596.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csound_score.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csound_score.js ***!
  \*******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64d6924350bd7706850cdc0dcc76ccf6.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csp.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/csp.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1f3f77a9279cdb38846ebe13c3438bc.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/css.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/css.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fee62e3e043728a265935971fa26200.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/curly.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/curly.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58598705e7012f4ca1eb1dd21d3c59a5.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/d.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/d.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70074e0c785c9a808dea76c7c7d17af3.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/dart.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/dart.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ec4bf56a876c2bf34ea174c584ce628.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/diff.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/diff.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50c073327491a2ed3bfa2ebb466c4204.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/django.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/django.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "909adc4a16e0f97d869e3dd16d561430.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/dockerfile.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/dockerfile.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06d958315fc6cdbb28576b03e43203aa.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/dot.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/dot.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c51840077c684be0e7e13339f85cd4a9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/drools.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/drools.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f79630d85284a7f6dadc25c1d256af0a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/edifact.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/edifact.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "663234c150f2097f3812c6065491497c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/eiffel.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/eiffel.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e4099fc2d04c7c1cf96892b962ba4ec.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ejs.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ejs.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c0a75dc5671c3f237a79f6e45b9891c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/elixir.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/elixir.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa5623ec68d23fedb9c9c115c7d99063.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/elm.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/elm.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ef80ee74467e0297eec3cc03092da01.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/erlang.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/erlang.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d83f2acd25388452582e5a4c727255b0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/forth.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/forth.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bf3bc1fbdd26ac698fef1bdf26e3ff4.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/fortran.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/fortran.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70286c33cab463fd576766adecd2d5d9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/fsharp.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/fsharp.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1533058f0ce13acdaa8d5bdc7d147bef.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/fsl.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/fsl.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cb83aa3fea85e950c29450b8237fb72.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ftl.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ftl.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03aae8272914723a7bf85b984385032c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gcode.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gcode.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "029ed9161a8d24a9c2ba97124020989d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gherkin.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gherkin.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb652f200fc3dd740b2e7f678a9272ea.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gitignore.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gitignore.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d43ad5f9bad9a042b49b2592c7639c28.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/glsl.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/glsl.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d78d3b050ea95b068380d975fd413fd7.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gobstones.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/gobstones.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfb7dd1fab06b2403f76c23f80b15738.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/golang.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/golang.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28785bea435918d49b290d27bf660baa.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/graphqlschema.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/graphqlschema.js ***!
  \********************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4736a562251eeaea46dd06892b489f35.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/groovy.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/groovy.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dd82c65030101b60dffccedd8741c6e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haml.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haml.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ccde58de5468dd353dbee74d631ebdf0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/handlebars.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/handlebars.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e61779df91186b23e7adf2d1968b2708.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haskell.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haskell.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87932c8321c9985ed3b6979e86d2a50e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haskell_cabal.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haskell_cabal.js ***!
  \********************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3567d1ea443427e944a6f189a0898819.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haxe.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/haxe.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c80e89199aef31e48addb2b35ea96365.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/hjson.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/hjson.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b6a626249d0bc43e412fffa6a9ee177.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/html.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/html.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5f38911951801dbd201b30dbc1c4a70.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/html_elixir.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/html_elixir.js ***!
  \******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57f4109bd1f06be4dc2bcb8ff7eaf1e5.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/html_ruby.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/html_ruby.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd9a17f94a922c7c88000b1b3cdd67df.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ini.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ini.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "755114145e5b97e5571a160a39e716db.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/io.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/io.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f55ba1c6515db2f98bb996c1a5bc9e3.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jack.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jack.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0adad8a8579bf99f3e22f7c214a5c64.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jade.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jade.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b190e5159c72fb7e27271956772bcba.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/java.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/java.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e4131e1241a5b81d54c7d9cb66b0e87.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/javascript.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/javascript.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "656f53e1b4c6e37a31799737faf6d639.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/json.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/json.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d38cef4a006e6cfe54a6117aba7b600.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/json5.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/json5.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d9bb1799d9b98db107e84f10132e17f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jsoniq.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jsoniq.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "707fa1de4d2096da1951c4bc9d21cb6d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jsp.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jsp.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02d5c4961ca855a88b1cd3e1b7fa7aa2.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jssm.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jssm.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b881dca9d9a80f61d87374b4bd5a2dd5.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jsx.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/jsx.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffd3b83e8b5878f4785591ff54b1dfff.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/julia.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/julia.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88e2feda80ac8cfb28f1dc0ec833b40d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/kotlin.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/kotlin.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64a5f4d62507d032038dcd76d15188e1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/latex.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/latex.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa0eee504d52a12d3a30bbd523afcc34.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/less.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/less.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbdbd623038183a8c068dd24ecd90682.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/liquid.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/liquid.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "104959bdb953a3792a203e98d2bf530f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lisp.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lisp.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d8cb7033879cb7fcc7a43798e2bde22.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/livescript.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/livescript.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58aab872dbdb5e1607076e1935130e03.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/logiql.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/logiql.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecdb4966f685f3e44b1f28fae46827a3.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/logtalk.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/logtalk.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d3314103b00c8ea165c6f9f6757f794.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lsl.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lsl.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a7bf4fb4484f6f48d8e4337f126a61d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lua.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lua.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af959c2a870f08dd8abccae97c9b9bae.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/luapage.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/luapage.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5f79987405c2169278f8de37bcc9d05.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lucene.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/lucene.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de0fd4fd7c2d7a4887cbc99eed91f797.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/makefile.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/makefile.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "740f4264cd757fcf28331fd30daf295e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/markdown.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/markdown.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f980fd09c34c277299e2d3f83aebdba5.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mask.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mask.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2b38a8393be2cf23f3894ace3efb1c3.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/matlab.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/matlab.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27730a0bdc6f430cc85049a46a73a029.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/maze.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/maze.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5bea0e1099339b99b21ee2d3c0fc489.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mediawiki.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mediawiki.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15f3800d33b854ba476c9daf1b9e0326.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mel.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mel.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "211511e7b374f57ad31acaf49dbdccb1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mixal.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mixal.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "582e24f5ba929e358fadfc7be4c18025.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mushcode.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mushcode.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37ee3b5201ae2e2dc5dc8b1b20ad900e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mysql.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/mysql.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf3f6b1c74c72cb5d02870022dbc9f94.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nginx.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nginx.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9696a4229fb787eeb25b26f1274b75ee.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nim.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nim.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf188b3f83735389d47bb12fc9f7069a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nix.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nix.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba6b8b3e06cd9d0aee9c69278ee84647.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nsis.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nsis.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "130340e2c62b9e858f186dab5f491e55.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nunjucks.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/nunjucks.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6faa9e5f2a0122d2333fa450337a09b0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/objectivec.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/objectivec.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fc0239242a898632ca8aa451cb930c2.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ocaml.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ocaml.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92f4aab5c66f6269c7054c8fbcb3de13.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/pascal.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/pascal.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5352ecd8e5f1a2637b48e18cc406edb1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/perl.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/perl.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fb6059ab5d7abab7a74eb73028a3aeb.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/perl6.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/perl6.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71ef0f55140f0dd02fce0f6d892e8861.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/pgsql.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/pgsql.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fedbf948ed123687f77167fac1faf8b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/php.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/php.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26fb247a2e0630e1f435cb4d91ec51fd.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/php_laravel_blade.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/php_laravel_blade.js ***!
  \************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25eda4bb98e40a82cfd5b4bf9fbc06ec.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/pig.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/pig.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b6e7dc98c47eeafd851ca5072db4be6.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/plain_text.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/plain_text.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbdc4ca43a8c940a6c3f59a8b6f17df5.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/powershell.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/powershell.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c5b59a666c5d39d9ba9cc054d36a410.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/praat.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/praat.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13eda3507db9cbfb400f46b9b3ff6553.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/prisma.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/prisma.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "894edcaf39c3c95818e3949d737ed459.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/prolog.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/prolog.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a1d9862d917663419ac2dd2e8193267.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/properties.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/properties.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51f903c5ce5284a63196247cffb5ca40.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/protobuf.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/protobuf.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4917fa7632b01d28e99304d32d989f7.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/puppet.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/puppet.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "805cb6232d7a9fa46025d48a43622ecf.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/python.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/python.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d79b3962938d65fb85c6f844e86d92d9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/qml.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/qml.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10132993df2cf9c9423b53a8a44379ab.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/r.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/r.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fc5c77d4df4f5d77f8530f6b23ecd1e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/razor.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/razor.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "870184211838006214be1c23c98672fc.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rdoc.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rdoc.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5a6140d581e5c4eb200259ce372f40b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/red.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/red.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a533e643002830be2da76c9527265860.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/redshift.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/redshift.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83387cb17a7680f59240e7b399e3ac2b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rhtml.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rhtml.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37172facd8a534a38f378ca2a9c7c11b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rst.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rst.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a934b622dd8bdcdcdc1dde985a07ac14.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ruby.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/ruby.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "460c67d8fe31ef229704bd5ab6d1dd26.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rust.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/rust.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24a3ff38afde257888d755ece9bfd704.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sass.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sass.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "170487867de05784a96608617bdd544d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scad.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scad.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5861dfe4f2c7823623e82d0619c5bf06.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scala.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scala.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2272c6632c52c3e402ab27b8045ab8f1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scheme.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scheme.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03980cb12dacd26148c22bb61fce440f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scss.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/scss.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd5bc50b18c9f46380cbe5ec1ac2127b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sh.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sh.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da55f4fe3daed3f79fc4565668ecf7dd.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sjs.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sjs.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e389cce6fb8f78845fab249bce43c0b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/slim.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/slim.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17dc98279d24649d3ca77cbce8c44e83.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/smarty.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/smarty.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a1c8660c5bcc6b6a43a7fb3c351174d9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/snippets.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/snippets.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4968d8264b40c14f123f28419eb456d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/soy_template.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/soy_template.js ***!
  \*******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddbc961769cd2ff4d4a7a136168ebf4c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/space.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/space.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b544bb2c5a4e7b225a4b50235a0fd6d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sparql.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sparql.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1034e3807d1bcf55cb564491950237ab.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sql.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sql.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b402b938ca2da72e0984a1360eda5897.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sqlserver.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/sqlserver.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87d6bf8becf2d5ebe2f71fda95a313ea.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/stylus.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/stylus.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f3ce6efab3c679ec1ad25ab0b3f6b2f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/svg.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/svg.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db8ca5cfb6fe4aaef215f116f6991784.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/swift.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/swift.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53e3600928916423671f3388e2d67844.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/tcl.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/tcl.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40dc555a17f1c85020333a41f01dd9ba.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/terraform.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/terraform.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b15b9f88acaf59b96e59c6b5f32da12.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/tex.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/tex.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fdf4d851b44839d8fdfa77b3419bce19.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/text.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/text.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "191feb6103c36b202bc01ba262916cdf.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/textile.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/textile.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "621b99ed1a029c36b4e91ec35f36c344.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/toml.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/toml.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1170472ae4b50e3b0070eb991e502fe.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/tsx.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/tsx.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9807cf1e443a7440371904b6525f37eb.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/turtle.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/turtle.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b1fd9cf4206cc32e84150c49707d811.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/twig.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/twig.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7d616d4aa8fd3f51d681242853dcde9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/typescript.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/typescript.js ***!
  \*****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6ad50b520736b595970c9e07029c3f1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/vala.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/vala.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60340be8eea1d704a17f399b3c3f9577.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/vbscript.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/vbscript.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7080d2a1db1608264a6d9d9fbaf2cce8.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/velocity.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/velocity.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e97cfa120fde26da0359ca29afaf3171.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/verilog.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/verilog.js ***!
  \**************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f326f2f263b1498fedbe1d07d7254d10.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/vhdl.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/vhdl.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "962969a46fefcace3305abd4d6e14a2e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/visualforce.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/visualforce.js ***!
  \******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b33ef9b4202539d3690251cb8213a034.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/wollok.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/wollok.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9671c350e11f1569edb5066cbfeb3334.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/xml.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/xml.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ed58ed9c7e1cb1ae1f2830d29011ffb.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/xquery.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/xquery.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbc87324ecf271d088a2ab0823de9c5d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/yaml.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/yaml.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59cc05504a1c823b6d4796bf6b430822.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/zeek.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/snippets/zeek.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b20cd9acf45420fcacfd923754185663.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-ambiance.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-ambiance.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7508d134804c21d34e50379103e765c0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-chaos.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-chaos.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "525f94195669090c2c9ddc149e6f0599.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-chrome.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-chrome.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "685f9dc3231d6a52855919bbcc8d8e8e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-clouds.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-clouds.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c85862f6de1eae7f4e50cbfe7c80b9f.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-clouds_midnight.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-clouds_midnight.js ***!
  \*******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76cb9827afdb9572851dc1d8d03e5750.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-cobalt.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-cobalt.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38fba56fde71a835512d2b6072832858.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-crimson_editor.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-crimson_editor.js ***!
  \******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83b8277db0b3c46f118c37b93cacbd62.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-dawn.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-dawn.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70444b162e14964ab08d5956e765b3d9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-dracula.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-dracula.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e5c69c01b5cb218a1f3d21d4e96f6f0.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-dreamweaver.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-dreamweaver.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "376ee0869ec49e5524dd216db8f7020e.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-eclipse.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-eclipse.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12f4a310110e02f9031132de6d8548bf.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-github.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-github.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2eb6240af39282952504b5e016895183.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-gob.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-gob.js ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d228be11b45e9a0bbd44acf24b9a2b41.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-gruvbox.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-gruvbox.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "600ab46b2572f32c5a4abf0f960e3c61.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-idle_fingers.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-idle_fingers.js ***!
  \****************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26aa6a394ec36fa291bb1b6c75faca71.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-iplastic.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-iplastic.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cf89836df93b01b418c4e55a5cbc0f8.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-katzenmilch.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-katzenmilch.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20fa0fd52cafcf5176d15a23e497a835.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-kr_theme.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-kr_theme.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b239aaf669748b6ce7bb6ecf372e783.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-kuroir.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-kuroir.js ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0170112234bab2a295eb3a18f218e724.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-merbivore.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-merbivore.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "101432b7228de09425cb10683cd7a721.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-merbivore_soft.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-merbivore_soft.js ***!
  \******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f693e8290e3a15a35d2b28f78c3d3533.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-mono_industrial.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-mono_industrial.js ***!
  \*******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf816f70242478c5fd7060c4a028ae50.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-monokai.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-monokai.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d21451f11085978633c326c46bab30db.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-nord_dark.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-nord_dark.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ef987bad3b8fbb56f596649fbedee0b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-pastel_on_dark.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-pastel_on_dark.js ***!
  \******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8a90b8da6f1cc34bb3ae09d2dae077d.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-solarized_dark.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-solarized_dark.js ***!
  \******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01df918a3b14ccabba84acb00178c57c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-solarized_light.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-solarized_light.js ***!
  \*******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e920af9f7a50e1c8fe0b0b3cd19937bf.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-sqlserver.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-sqlserver.js ***!
  \*************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5039d230111eb20d09d845f3bd9e240.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-terminal.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-terminal.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b150c2332452066eaed1f53e1572720.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-textmate.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-textmate.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ade5c4002b4710f2a1f6a5cd36c08c9.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0858b0836367ea324bc9c5f6749db9a1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night.js ***!
  \******************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18e852d001368f75e7f75aaaee6dfe71.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night_blue.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night_blue.js ***!
  \***********************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95e69fbb6dbd2e50782c54240da95fa1.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night_bright.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night_bright.js ***!
  \*************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7ee57271362584c03afcd3587284a2b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night_eighties.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-tomorrow_night_eighties.js ***!
  \***************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39b630eb9c2c0319472cbf8f72e79691.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-twilight.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-twilight.js ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59bde89bce5c1126ba5ee99c55ec48c8.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-vibrant_ink.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-vibrant_ink.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d3efd157f0bf2a3a0d6dd932878880b.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-xcode.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/theme-xcode.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aab0e77c1d1dba595ee4e19112eec921.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-coffee.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-coffee.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7b7be8216519adf62d75f123f9c6423.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-css.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-css.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed4792eae087d02a3b34f0bcb7d6c1d2.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-html.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-html.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "964646d64dd3196a9c27fe302511414a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-javascript.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-javascript.js ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c56345ae11027262df8c5983822c7355.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-json.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-json.js ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7186078e00d958aa2b316483dfc7e1c.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-lua.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-lua.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8235ebecd3b3d28b5475f1f89136a91a.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-php.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-php.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab4b314445b23359319c14cce9a0e321.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-xml.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-xml.js ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11dc77ef2ea3a04834945a52f7de2072.js";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-xquery.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?esModule=false!./node_modules/ace-builds/src-noconflict/worker-xquery.js ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63b15fb6fc8f897b22a4bf72b7e8452a.js";

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/scripts/settings.js");

// import {themes} from "./ace-themes";
const ace = __webpack_require__(/*! ace-builds/src-min-noconflict/ace */ "./node_modules/ace-builds/src-min-noconflict/ace.js");
__webpack_require__(/*! ace-builds/webpack-resolver */ "./node_modules/ace-builds/webpack-resolver.js");
__webpack_require__(/*! ace-builds/src-min-noconflict/ext-language_tools */ "./node_modules/ace-builds/src-min-noconflict/ext-language_tools.js");
__webpack_require__(/*! ace-builds/src-min-noconflict/ext-error_marker */ "./node_modules/ace-builds/src-min-noconflict/ext-error_marker.js");
ace.config.set("basePath", "modules/AceEditorVTT/scripts/");


Hooks.on("renderMacroConfig", function (aceConfig) {
    const enabled = game.settings.get('AceEditorVTT', 'enabled');
    const fontSize = game.settings.get('AceEditorVTT', 'fontSize');
    // const themeName = game.settings.get('AceEditorVTT', 'theme');
    // let theme = '';
    const autoComplete = game.settings.get('AceEditorVTT', 'autoComplete');
    const errorCheck = game.settings.get('AceEditorVTT', 'errorCheck');

    const configElement = aceConfig.element;

    if (!enabled) {
        configElement.find(".ace-editor").css("display", "none");
        return;
    }

    // TODO: Figure out how to detect Furnace. For some reason this is true even if Furnace isn't installed. Weird.
    /*if (configElement.has(".furnace-macro-command")) {
        const message = 'Ace Editor VTT is not compatible with Furnace. Disabling Ace in favor of Furnace.';
        ui.notifications.error(message);
        console.error(message)
        game.settings.set('AceEditorVTT', 'enabled', false)
            .then(r => console.info(`AEVTT now set to ${r}`));
        return;
    }*/


    configElement
        .find("div.form-group.stacked.command")
        .append(
            `<div class="ace-editor" id="aceEditor-${aceConfig.object.id}"></div>`
        );

    // TODO: Figure out how to allow selecting themes
    // if (!themeName instanceof String || !themes.includes(themeName)) {
    //     console.error(`Theme: '${theme}' does not exist.`);
    //     return;
    // } else {
    //     theme = `ace/themes/${themeName}`;
    // }

    if (!fontSize instanceof Number || fontSize <= 0) {
        console.error(`Invalid fontSize: ${fontSize}`);
        return;
    }

    configElement.find('.command textarea[name="command"]').css("display", "");
    configElement
        .find(".sheet-footer")
        .append('<button type="button" class="ace-editor-button" title="Toggle Ace Editor" name="editorButton"><i class="fas fa-terminal"></i></button>');

    let editor = ace.edit(`aceEditor-${aceConfig.object.id}`);
    editor.getSession().setUseWorker(errorCheck);
    editor.setOptions({
        mode: "ace/mode/javascript",
        fontSize: `${fontSize}pt`,
        showPrintMargin: false,
        foldStyle: "markbegin",
        enableBasicAutocompletion: autoComplete,
        enableSnippets: autoComplete,
        enableLiveAutocompletion: autoComplete,
        minLines: 15,
        maxLines: 50,
    });
    editor.setTheme("ace/theme/solarized_dark");
    editor.getSession().setUseWrapMode(game.settings.get("AceEditorVTT", "lineWrap"));

    configElement.find(".ace-editor-button").on("click", (event) => {
        event.preventDefault();
        if (configElement.find(".ace-editor").css("display") === "none") {
            configElement.find('.command textarea[name="command"]').css("display", "none");
            configElement.find(".ace-editor").css("display", "");
            editor.setValue(configElement.find('.command textarea[name="command"]').val(), -1);
        } else {
            configElement.find('.command textarea[name="command"]').css("display", "");
            configElement.find(".ace-editor").css("display", "none");
        }
    });

    configElement.find('.command textarea[name="command"]').css("display", "");
    configElement.find(".ace-editor").css("display", "none");

    editor.getSession().on("change", () => {
        configElement.find('textarea[name="command"]').val(editor.getSession().getValue());
    });

    editor.commands.addCommand({
        name: "Save",
        bindKey: { win: "Ctrl-S", mac: "Command-S" },
        exec: () => configElement.find("form.editable").trigger("submit"),
    });

    editor.commands.addCommand({
        name: "Execute",
        bindKey: { win: "Ctrl-E", mac: "Command-E" },
        exec: () => configElement.find("button.execute").trigger("click"),
    });

    // watch for resizing of editor
    new ResizeObserver(() => {
        editor.resize();
        editor.renderer.updateFull(true);
    }).observe(editor.container);

    createMacroConfigHook(aceConfig.id, editor);
});

function createMacroConfigHook(id, editor) {
    Hooks.once("closeMacroConfig", function (aceConfig) {
        if (id === aceConfig.id) {
            editor.destroy();
        } else {
            createMacroConfigHook(id, editor);
        }
    });
}

Hooks.once('init', function () {
    game.AceEditorVTT= {};
    CONFIG.debug.AceEditorVTT = false;
    _settings__WEBPACK_IMPORTED_MODULE_0__.AceSettings.init();
})

/***/ }),

/***/ "./src/scripts/settings.js":
/*!*********************************!*\
  !*** ./src/scripts/settings.js ***!
  \*********************************/
/*! namespace exports */
/*! export AceSettings [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AceSettings": () => /* binding */ AceSettings
/* harmony export */ });
class AceSettings extends FormApplication {
    static init() {
        game.settings.register('AceEditorVTT', 'enabled', {
            name: 'Enable Ace Editor for macros.',
            type: Boolean,
            hint:
                'If disabled you will only see the default macro editor.',
            scope: 'client',
            config: true,
            default: true,
        });

        game.settings.register('AceEditorVTT', 'autoComplete', {
            name: 'Enable code autocomplete feature.',
            hint:
                'Will allow auto-complete features for Javascript. Ctrl+Spacebar shortcut will activate it manually.',
            type: Boolean,
            scope: 'client',
            config: true,
            default: false,
        });

        game.settings.register('AceEditorVTT', 'errorCheck', {
            name: 'Enable Javascript error checking.',
            hint:
                'Errors will show up for chat macros too; these can be ignored. Or disable this feature.',
            type: Boolean,
            scope: 'client',
            config: true,
            default: false,
        });

        game.settings.register('AceEditorVTT', 'fontSize', {
            name: "Set the Ace Editor font size.",
            type: Number,
            scope: 'client',
            config: true,
            default: 11,
        });

        // TODO: Figure out how to make this work & a dropdown

        // game.settings.register('AceEditorVTT', 'theme', {
        //     name: "Set your Ace Editor color/style theme.",
        //     type: String,
        //     hint:
        //         'Themes can be found at https://github.com/ajaxorg/ace/tree/master/lib/ace/theme. ' +
        //         'Default is solarized_dark',
        //     scope: 'client',
        //     config: true,
        //     default: "solarized_dark",
        // });

        game.settings.register('AceEditorVTT', 'lineWrap', {
            name: "Enable line wrap",
            type: Boolean,
            scope: "client",
            config: true,
            default: true,
        });
    }



    static get defaultOptions() {
        return {
            ...super.defaultOptions,
            height: 'auto',
            title: 'AceEditorVTT',
            width: 600,
            classes: ['AceEditorVTT', 'settings'],
            tabs: [
                {
                    navSelector: '.tabs',
                    contentSelector: 'form',
                    initial: 'name',
                },
            ],
            submitOnClose: true,
        };
    }

    constructor(object = {}, options) {
        super(object, options);
    }

    getSettingsData() {
        return {
            'enabled': game.settings.get('AceEditorVTT', 'enabled'),
            'autoComplete': game.settings.get('AceEditorVTT', 'autoComplete'),
            'errorCheck': game.settings.get('AceEditorVTT', 'errorCheck'),
            'fontSize': game.settings.get('AceEditorVTT', 'fontSize'),
            // 'theme': game.settings.get('AceEditorVTT', 'theme'),
            'lineWrap': game.settings.get('AceEditorVTT', 'lineWrap'),
        };
    }

    _getHeaderButtons() {
        let btns = super._getHeaderButtons();
        btns[0].label = 'Save & Close';
        return btns;
    }

    getData(options={}) {
        let data = super.getData();
        data.settings = this.getSettingsData();
        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);
    }

    _updateObject(ev, formData) {
        const data = expandObject(formData);
        for (let [key, value] of Object.entries(data)) {
            game.settings.set('AceEditorVTT', key, value).then(r =>
                console.debug(`${vtt} | Set Ace Editor setting: ${key} to ${value}`)
            );
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "modules/AceEditorVTT/scripts/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=index.js.map