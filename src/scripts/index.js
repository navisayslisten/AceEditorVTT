import {AceSettings} from "./settings";
// import {themes} from "./ace-themes";
const ace = require("ace-builds/src-min-noconflict/ace");
require("ace-builds/webpack-resolver");
require("ace-builds/src-min-noconflict/ext-language_tools");
require("ace-builds/src-min-noconflict/ext-error_marker");
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
    AceSettings.init();
})