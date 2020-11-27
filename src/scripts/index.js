import {AceSettings} from "./settings";
// import {themes} from "./ace-themes";
const ace = require("ace-builds/src-min-noconflict/ace");
require("ace-builds/webpack-resolver");
require("ace-builds/src-min-noconflict/ext-language_tools");
require("ace-builds/src-min-noconflict/ext-error_marker");
ace.config.set("basePath", "modules/ace-editor-vtt/scripts/");


Hooks.on("renderMacroConfig", function (aceConfig) {
    const configElement = aceConfig.element;
    const enabled = game.settings.get('aevtt', 'enabled');
    const fontSize = game.settings.get('aevtt', 'fontSize');
    // const themeName = game.settings.get('aevtt', 'theme');
    // let theme = '';
    const autoComplete = game.settings.get('aevtt', 'autoComplete');
    const errorCheck = game.settings.get('aevtt', 'errorCheck');

    configElement
        .find(".sheet-footer")
        .append(
            `<div class="ace-editor" id="aceEditor-${aceConfig.object.id}"></div>`
        );

    if (!enabled) {
        configElement.find(".ace-editor").css("display", "none");
        return;
    }

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

    configElement.find('.command textarea[name="command"]').css("display", "none");

    // furnace compat
    const furnace = configElement.find("div.furnace-macro-command");
    if (furnace.length !== 0) {
        furnace.css("display", "none");
    }

    // shift the editor div to the right location now.
    document.getElementsByClassName("command")[0].appendChild(document.getElementsByClassName("ace-editor")[0]);

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
        maxLines: 40,
    });
    editor.setTheme("ace/theme/solarized_dark");
    editor.getSession().setUseWrapMode(game.settings.get("aevtt", "lineWrap"));

    configElement.find(".ace-editor-button").on("click", (event) => {
        event.preventDefault();
        if (configElement.find(".ace-editor").css("display") === "none") {
            configElement.find('.command textarea[name="command"]').css("display", "none");
            configElement.find(".ace-editor").css("display", "");
            configElement.find(".ace-editor-expand").css("display", "");
            editor.setValue(configElement.find('.command textarea[name="command"]').val(), -1);

            // furnace compat
            const furnace = configElement.find("div.furnace-macro-command");
            if (furnace.length !== 0) {
                furnace.css("display", "none");
            }
        } else {
            configElement.find('.command textarea[name="command"]').css("display", "");
            configElement.find(".ace-editor").css("display", "none");

            // furnace compat
            const furnace = configElement.find("div.furnace-macro-command");
            if (furnace.length !== 0) {
                furnace.css("display", "");
                furnace.trigger("change");
            }
        }
    });

    editor.setValue(configElement.find('textarea[name="command"]').val(), -1);

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
        editor.renderer.updateFull();
    }).observe(editor.container);

    createAceConfigHook(aceConfig.id, editor);
});

function createAceConfigHook(id, editor) {
    Hooks.once("closeAceConfig", function (aceConfig) {
        if (id === aceConfig.id) {
            editor.destroy();
        } else {
            createAceConfigHook(id, editor);
        }
    });
}

Hooks.on('init', function () {
    game.aevtt= {};
    CONFIG.debug.aevtt = true;
    AceSettings.init();
})