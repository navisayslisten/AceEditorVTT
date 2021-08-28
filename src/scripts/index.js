import { themes } from "./ace-themes";
const ace = require("ace-builds/src-min-noconflict/ace");
require("ace-builds/webpack-resolver");
require("ace-builds/src-min-noconflict/ext-language_tools");
require("ace-builds/src-min-noconflict/ext-error_marker");
ace.config.set("basePath", "modules/AceEditorVTT/scripts/");
const furnaceMessage =
  "Ace Editor VTT is not compatible with Furnace. Ace is now disabled, in favor of Furnace.";

let aceConfig;
let editor;
let configElement;

Hooks.once("ready", function () {
  furnaceUICheck();
});

Hooks.on("init", function () {
  game.AceEditorVTT = {};
  CONFIG.debug.AceEditorVTT = false;
  AceSettings.init();
});

Hooks.on("closeSettingsConfig", function () {
  updateEditor();
});

Hooks.on("renderMacroConfig", function (config) {
  aceConfig = config;
  configElement = config.element;
  setupAceUI();

  configElement.find(".ace-editor-button").on("click", (event) => {
    event.preventDefault();
    if (furnaceUICheck()) {
      editor.container.remove();
      editor.destroy();
      return;
    }
    if (configElement.find(".ace-editor").css("display") === "none") {
      updateEditor();
      configElement.find(".command label").css("display", "none");
      configElement
        .find('.command textarea[name="command"]')
        .css("display", "none");
      configElement.find(".ace-editor").css("display", "");
      editor.setValue(
        configElement.find('.command textarea[name="command"]').val(),
        -1
      );
      editor.resize();
      editor.renderer.updateFull(true);
    } else {
      configElement.find(".command label").css("display", "");
      configElement
        .find('.command textarea[name="command"]')
        .css("display", "");
      configElement.find(".ace-editor").css("display", "none");
    }
  });

  configElement.find('.command textarea[name="command"]').css("display", "");
  configElement.find(".ace-editor").css("display", "none");

  editor.getSession().on("change", () => {
    configElement
      .find('textarea[name="command"]')
      .val(editor.getSession().getValue());
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

  createMacroConfigHook(config.id, editor);
});

function setupAceUI() {
  const settings = new AceSettings().getSettingsData();

  // If not enabled, or if Furnace is enabled, bail!
  if (!settings.enabled)
    return configElement.find(".ace-editor").css("display", "none");
  if (furnaceUICheck()) return;

  configElement
    .find("div.form-group.stacked.command")
    .append(
      `<div class="ace-editor" id="aceEditor-${aceConfig.object.id}"></div>`
    );

  if (!settings.fontSize instanceof Number || settings.fontSize <= 0) {
    console.error(`Invalid fontSize: ${settings.fontSize}`);
    return;
  }

  configElement.find('.command textarea[name="command"]').css("display", "");
  var relativeElement = configElement.find(
    ".window-content .form-group:nth-of-type(2)"
  );
  $(
    '<div class="form-group stacked" style="align-self: flex-end;"><button type="button" class="ace-editor-button" title="Toggle Ace Editor" name="editorButton" style="min-width: 50px;width: auto;padding: 0 16px;border-radius: 3px;"><i class="fas fa-terminal"></i> Toggle ACE</button></div>'
  ).insertAfter(relativeElement);

  editor = ace.edit(`aceEditor-${aceConfig.object.id}`);
  editor.getSession().setUseWorker(settings.errorCheck);
  editor.setOptions({
    mode: "ace/mode/javascript",
    fontSize: `${settings.fontSize}pt`,
    showPrintMargin: false,
    foldStyle: "markbegin",
    enableBasicAutocompletion: settings.autoComplete,
    enableSnippets: settings.autoComplete,
    enableLiveAutocompletion: settings.autoComplete,
    minLines: 15,
    wrap: settings.lineWrap,
    theme: `ace/theme/${settings.theme}`,
  });
}

function createMacroConfigHook(id, editor) {
  Hooks.once("closeMacroConfig", function (aceConfig) {
    if (id === aceConfig.id) {
      editor.destroy();
      editor.container.remove();
    } else {
      createMacroConfigHook(id, editor);
    }
  });
}

function furnaceUICheck() {
  const aceEnabled = game.settings.get("AceEditorVTT", "enabled");
  if (!aceEnabled) return;
  if (
    $("div.furnace-macro-expand").length > 0 ||
    $('link[href*="furnace"]').length > 0
  ) {
    ui.notifications.error(furnaceMessage);
    console.error(furnaceMessage);
    disableAce();
    $("a.close").trigger("click");
    return true;
  }
  return false;
}

function disableAce() {
  game.settings
    .set("AceEditorVTT", "enabled", false)
    .then((r) => console.debug(`AEVTT now set to ${r}`));
}

function updateEditor() {
  const enabled = game.settings.get("AceEditorVTT", "enabled");
  if (!enabled) {
    editor.destroy();
    editor.container.remove();
    configElement.find('.command textarea[name="command"]').css("display", "");
    configElement.find(".ace-editor").css("display", "none");
    configElement.find(".ace-editor-button").css("display", "none");
    return;
  } else {
  }
  const settings = new AceSettings().getSettingsData();

  editor.getSession().setUseWorker(settings.errorCheck);
  editor.setOptions({
    mode: "ace/mode/javascript",
    fontSize: `${settings.fontSize}pt`,
    showPrintMargin: false,
    foldStyle: "markbegin",
    enableBasicAutocompletion: settings.autoComplete,
    enableSnippets: settings.autoComplete,
    enableLiveAutocompletion: settings.autoComplete,
    minLines: 15,
    wrap: settings.lineWrap,
    theme: `ace/theme/${settings.theme}`,
  });
  editor.renderer.updateFull(true);
}

class AceSettings extends FormApplication {
  constructor(object = {}, options) {
    super(object, options);
  }

  static get defaultOptions() {
    return {
      ...super.defaultOptions,
      height: "auto",
      title: "AceEditorVTT",
      width: 600,
      classes: ["AceEditorVTT", "settings"],
      tabs: [
        {
          navSelector: ".tabs",
          contentSelector: "form",
          initial: "name",
        },
      ],
      submitOnClose: true,
    };
  }

  static init() {
    game.settings.register("AceEditorVTT", "enabled", {
      name: "Enable Ace Editor for macros.",
      type: Boolean,
      hint: "If disabled you will only see the default macro editor.",
      scope: "client",
      config: true,
      default: true,
    });

    game.settings.register("AceEditorVTT", "autoComplete", {
      name: "Enable code autocomplete feature.",
      hint: "Will allow auto-complete features for Javascript. Ctrl+Spacebar shortcut will activate it manually.",
      type: Boolean,
      scope: "client",
      config: true,
      default: false,
    });

    game.settings.register("AceEditorVTT", "errorCheck", {
      name: "Enable Javascript error checking.",
      hint: "Errors will show up for chat macros too; these can be ignored. Or disable this feature.",
      type: Boolean,
      scope: "client",
      config: true,
      default: false,
    });

    game.settings.register("AceEditorVTT", "lineWrap", {
      name: "Enable line wrap",
      type: Boolean,
      scope: "client",
      config: true,
      default: true,
    });

    game.settings.register("AceEditorVTT", "theme", {
      name: "Set your Ace Editor color/style theme.",
      type: String,
      hint:
        "Themes can be found at https://github.com/ajaxorg/ace/tree/master/lib/ace/theme. " +
        "Default is solarized_dark",
      scope: "client",
      config: true,
      choices: themes,
      default: "solarized_dark",
    });

    game.settings.register("AceEditorVTT", "fontSize", {
      name: "Set the Ace Editor font size.",
      type: Number,
      scope: "client",
      config: true,
      default: 11,
    });
  }

  getSettingsData() {
    return {
      enabled: game.settings.get("AceEditorVTT", "enabled"),
      autoComplete: game.settings.get("AceEditorVTT", "autoComplete"),
      errorCheck: game.settings.get("AceEditorVTT", "errorCheck"),
      lineWrap: game.settings.get("AceEditorVTT", "lineWrap"),
      fontSize: game.settings.get("AceEditorVTT", "fontSize"),
      theme: game.settings.get("AceEditorVTT", "theme"),
    };
  }

  _getHeaderButtons() {
    let btns = super._getHeaderButtons();
    btns[0].label = "Save & Close";
    return btns;
  }

  getData(options = {}) {
    let data = super.getData();
    data.settings = this.getSettingsData();
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);
    updateEditor();
  }

  _updateObject(ev, formData) {
    const data = expandObject(formData);
    for (let [key, value] of Object.entries(data)) {
      game.settings
        .set("AceEditorVTT", key, value)
        .then((r) =>
          console.debug(`${vtt} | Set Ace Editor setting: ${key} to ${value}`)
        );
    }
  }
}
