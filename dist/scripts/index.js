/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/scripts/ace-themes.js":(e,t,n)=>{n.r(t),n.d(t,{themes:()=>a});const a=["ambiance","chaos","chrome","clouds","clouds_midnight","cobalt","crimson_editor","dawn","dracula","dreamweaver","eclipse","github","gob","gruvbox","idle_fingers","iplastic","katzenmilch","kr_theme","kuroir","merbivor","merbivor_soft","mono_industrial","monokai","nord_dark","pastel_on_dark","solarized_dark","solarized_light","sqlserver","terminal","textmate","tomorrow","tomorrow_night","tomorrow_night_blue","tomorrow_night_bright","tomorrow_night_eighties","twilight","vibrant_ink","xcode"]},"./src/scripts/index.js":(e,t,n)=>{n.r(t);var a=n("./src/scripts/settings.js"),i=n("./src/scripts/ace-themes.js");function o(e,t){Hooks.once("closeAceConfig",(function(n){e===n.id?t.destroy():o(e,t)}))}Hooks.on("renderMacroConfig",(function(e){const t=e.element,n=game.settings.get("aevtt","enabled"),a=game.settings.get("aevtt","fontSize"),s=game.settings.get("aevtt","theme"),r=game.settings.get("aevtt","autoComplete");if(t.find(".command").append(`<div class="ace-editor" id="aceEditor-${e.object.id}"></div>`),!n)return void t.find(".ace-editor").css("display","none");if(!s instanceof String||!i.themes.includes(s))return void console.error(`Theme: '${s}' does not exist.`);if(!a instanceof Number||a<=0)return void console.error(`Invalid fontSize: ${a}`);t.find('.command textarea[name="command"]').css("display","none");const c=t.find("div.furnace-macro-command");0!==c.length&&c.css("display","none"),t.find(".sheet-footer").append('<button type="button" class="ace-editor-button" title="Toggle Ace Editor" name="editorButton"><i class="fas fa-terminal"></i></button>');let d=ace.edit(`aceEditor-${e.object.id}`);d.setOptions({mode:"ace/mode/javascript",theme:s,fontSize:`${a}pt`,showPrintMargin:!1,foldStyle:"markbegin",enableBasicAutocompletion:r,enableSnippets:r,enableLiveAutocompletion:r}),d.getSession().setUseWrapMode(game.settings.get("aceeditor","lineWrap")),t.find(".ace-editor-button").on("click",(e=>{if(e.preventDefault(),"none"===t.find(".ace-editor").css("display")){t.find('.command textarea[name="command"]').css("display","none"),t.find(".ace-editor").css("display",""),t.find(".ace-editor-expand").css("display",""),d.setValue(t.find('.command textarea[name="command"]').val(),-1);const e=t.find("div.furnace-macro-command");0!==e.length&&e.css("display","none")}else{t.find('.command textarea[name="command"]').css("display",""),t.find(".ace-editor").css("display","none"),t.find(".ace-editor-expand").css("display","none");const e=t.find("div.furnace-macro-command");0!==e.length&&(e.css("display",""),e.trigger("change"))}})),d.setValue(t.find('textarea[name="command"]').val(),-1),d.getSession().on("change",(()=>{t.find('textarea[name="command"]').val(d.getSession().getValue())})),d.commands.addCommand({name:"Save",bindKey:{win:"Ctrl-S",mac:"Command-S"},exec:()=>t.find("form.editable").trigger("submit")}),d.commands.addCommand({name:"Execute",bindKey:{win:"Ctrl-E",mac:"Command-E"},exec:()=>t.find("button.execute").trigger("click")}),new ResizeObserver((()=>{d.resize(),d.renderer.updateFull()})).observe(d.container),o(e.id,d)})),Hooks.on("init",(function(){game.aevtt={},CONFIG.debug.aevtt=!1,a.AceSettings.init()}))},"./src/scripts/settings.js":(e,t,n)=>{n.r(t),n.d(t,{AceSettings:()=>a});class a extends FormApplication{static init(){game.settings.register("aevtt","enabled",{name:"Enable Ace Editor for macros.",type:Boolean,hint:"If disabled you will see the default macro editor.",scope:"client",config:!0,default:!0}),game.settings.register("aevtt","autoComplete",{name:"Enable code autocomplete feature.",type:Boolean,scope:"client",config:!0,default:!0}),game.settings.register("aevtt","fontSize",{name:"Set the Ace Editor font size.",type:Number,scope:"client",config:!0,default:12}),game.settings.register("aevtt","theme",{name:"Set your Ace Editor color/style theme.",type:String,hint:"Themes can be found at https://github.com/ajaxorg/ace/tree/master/lib/ace/theme. Default is solarized_dark",scope:"client",config:!0,default:"solarized_dark"}),game.settings.register("aevtt","lineWrap",{name:"Enable line wrap",type:Boolean,scope:"client",config:!0,default:!0})}getSettingsData(){return{enabled:game.settings.get("aevtt","enabled"),autoComplete:game.settings.get("aevtt","autoComplete"),fontSize:game.settings.get("aevtt","fontSize"),theme:game.settings.get("aevtt","theme"),lineWrap:game.settings.get("aevtt","lineWrap")}}getData(e={}){let t=super.getData();return t.settings=this.getSettingsData(),t}activateListeners(e){super.activateListeners(e)}_updateObject(e,t){const n=expandObject(t);for(let[e,t]of Object.entries(n))game.settings.set("aevtt",e,t).then((()=>{console.debug(`${vtt} | Set Ace Editor setting: ${e} to ${t}`)}))}}}},t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/scripts/index.js")})();
//# sourceMappingURL=index.js.map