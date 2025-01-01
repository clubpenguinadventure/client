
// You can write more code here

/* START OF COMPILED CODE */

import BaseSprite from "../../../../base/BaseSprite";
import SimpleButton from "../../../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Secret extends BaseSprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "clothingcatalog", frame ?? "secret-hoveranim0001");

        this.setOrigin(0.5060240963855421, 0.5060240963855421);

        // this (components)
        const thisSimpleButton = new SimpleButton(this);
        thisSimpleButton.hoverCallback = () => this.onOver();
        thisSimpleButton.hoverOutCallback = () => this.onOut();
        thisSimpleButton.callback = () => this.onClick();

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {number} */
    item = 0;

    /* START-USER-CODE */

    get catalog() {
        return this.interface.loadedWidgets.ClothingCatalog;
    }

    onOver() {
        this.play('clothingcatalog-secret-hoveranim');
    }

    onOut() {
        this.anims.stop();
        this.setFrame('secret-hoveranim0001');
    }

    onClick() {
        this.catalog.showSecret(this.item);
        this.onOut();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
