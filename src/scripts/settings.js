export class AceSettings extends FormApplication {
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