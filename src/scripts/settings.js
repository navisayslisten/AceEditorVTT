export class AceSettings extends FormApplication {
    static init() {
        game.settings.register('aevtt', 'enabled', {
            name: 'Enable Ace Editor for macros.',
            type: Boolean,
            hint:
                'If disabled you will see the default macro editor.',
            scope: 'client',
            config: true,
            default: true,
        });

        game.settings.register('aevtt', 'autoComplete', {
            name: 'Enable code autocomplete feature.',
            type: Boolean,
            scope: 'client',
            config: true,
            default: true,
        });

        game.settings.register('aevtt', 'fontSize', {
            name: "Set the Ace Editor font size.",
            type: Number,
            scope: 'client',
            config: true,
            default: 12,
        });

        game.settings.register('aevtt', 'theme', {
            name: "Set your Ace Editor color/style theme.",
            type: String,
            hint:
                'Themes can be found at https://github.com/ajaxorg/ace/tree/master/lib/ace/theme. ' +
                'Default is solarized_dark',
            scope: 'client',
            config: true,
            default: "solarized_dark",
        });

        game.settings.register('aevtt', 'lineWrap', {
            name: "Enable line wrap",
            type: Boolean,
            scope: "client",
            config: true,
            default: true,
        });
    }

    getSettingsData() {
        return {
            'enabled': game.settings.get('aevtt', 'enabled'),
            'autoComplete': game.settings.get('aevtt', 'autoComplete'),
            'fontSize': game.settings.get('aevtt', 'fontSize'),
            'theme': game.settings.get('aevtt', 'theme'),
            'lineWrap': game.settings.get('aevtt', 'lineWrap'),
        };
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
            game.settings.set('aevtt', key, value).then(() => {
                console.debug(`${vtt} | Set Ace Editor setting: ${key} to ${value}`);
            });
        }
    }
}