/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import SenseiMenuItem from "./SenseiMenuItem";
/* START-USER-IMPORTS */

import * as menus from '../config/SenseiMenus'

/* END-USER-IMPORTS */

export default class SenseiMenu extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {SenseiMenuItem[]} */
        this.items;


        // bg
        const bg = scene.add.nineslice(0, -162, "sensei", "menu/bg", 848, 323, 60, 60, 40, 45);
        bg.setOrigin(0.5, 0);
        this.add(bg);

        // senseiMenuItem4
        const senseiMenuItem4 = new SenseiMenuItem(scene, 0, 92);
        senseiMenuItem4.visible = false;
        this.add(senseiMenuItem4);

        // senseiMenuItem3
        const senseiMenuItem3 = new SenseiMenuItem(scene, 0, 30);
        senseiMenuItem3.visible = false;
        this.add(senseiMenuItem3);

        // senseiMenuItem2
        const senseiMenuItem2 = new SenseiMenuItem(scene, 0, -32);
        senseiMenuItem2.visible = false;
        this.add(senseiMenuItem2);

        // senseiMenuItem1
        const senseiMenuItem1 = new SenseiMenuItem(scene, 0, -94);
        senseiMenuItem1.visible = false;
        this.add(senseiMenuItem1);

        // lists
        const items = [senseiMenuItem1, senseiMenuItem2, senseiMenuItem3, senseiMenuItem4];

        this.bg = bg;
        this.items = items;

        /* START-USER-CTR-CODE */

        this.currentMenu
        this.currentItems

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(menu) {
        this.reset()

        this.currentMenu = menu
        // Pass SenseiMenu dependency
        this.currentItems = this.currentMenu(this)

        this.updateMenu()

        super.show()
    }

    get isStartMenuActive() {
        return this.currentMenu === menus.start
    }

    showStartMenu() {
        this.show(menus.start)
    }

    showPreviousMenu() {
        if (!this.currentMenu) {
            this.showStartMenu()
            return
        }

        // Use last menu stored in this.currentMenu
        this.show(this.currentMenu)
    }

    updateMenu() {
        for (let i = 0; i < this.currentItems.length; i++) {
            const config = this.currentItems[i]
            const item = this.items[i]

            item.show(config)
        }

        this.resizeMenu()
    }

    resizeMenu() {
        this.bg.setSize(this.bg.width, (this.currentItems.length * 61) + 78)
    }

    startSequence(sequence) {
        this.scene.startSequence(sequence)
    }

    showSpeech(text) {
        this.scene.showSpeech(text)
    }

    hideSpeech() {
        this.scene.hideSpeech()
    }

    showMatch() {
        this.scene.showMatch()
    }

    reset() {
        for (const item of this.items) {
            item.close()
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
