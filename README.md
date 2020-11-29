# AceEditorVTT ![](https://badgen.net/github/last-commit/navisayslisten/AceEditorVTT?color=blue)
Foundry VTT module that replaces the macro editor with Ajax.org Cloud9 Editor (ACE) for Javascript.

Maintained by NaviSaysListen. The work within is based on a repo by [Ardittristan](https://github.com/ardittristan/VTTMacroEditor).

If you like what you see and want me to keep maintaining this, send me some CoffeeBucks [![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=KLTFGF965DSJ2&item_name=github&currency_code=USD)

## This Module is NOT compatible with [Furnace](https://github.com/kakaroto/fvtt-module-furnace), as they both use Ace.

---

## [Ace (Ajax.org Cloud9 Editor)](https://github.com/ajaxorg/ace)
Features included for AceEditorVTT:
* Javascript syntax highlighting.
* Code autocompletion.
* Error markings.
* Line wrap.
* Font size.

### TODO
* Select a theme instead of defaulting to `solarized_dark`.
* More editor options, with some being in the macro-editor instead of Module Settings.
* Option for the editor to be default (don't have to click editor button).
* Maybe Furnace compatibility?
* Suggest more if you have ideas.

---

# How to contribute
Requires:
* Nodejs (as of 11/2020 I'm using: v12.18.4 with NPM v6.14.6)

### Suggestions: 
1. While developing, download the Foundry app to test changes.
2. Before the next step, install using the module.json URL.
3. After Gulp build, copy-paste build directory to your Foundry Data Module directory for AceEditorVTT.
4. Use Developer Tools to debug 3rd party module conflicts, issues, and look for styling issues.
---
### Development
1. Install. `npm install`
2. Create a new branch for edits
3. Make changes, then...
4. Push current build to dist folder `gulp build`. Use suggestion steps to debug before creating a PR.
5. Once satisfied, commit changes and push your branch.

PRs will be reviewed by navisayslisten. Assistance is welcome.

Otherwise create enhancement requests in the Issue tracker.
