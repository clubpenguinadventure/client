
// You can write more code here

/* START OF COMPILED CODE */

import BaseSprite from "../../../../base/BaseSprite";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Secret extends BaseSprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "clothingcatalog", frame ?? "secret-hoveranim0001");

        this.setOrigin(0.5060240963855421, 0.5060240963855421);

        // this (components)
        const thisButton = new Button(this);
        thisButton.hoverCallback = () => this.onOver();
        thisButton.hoverOutCallback = () => this.onOut();
        thisButton.callback = () => this.onClick();

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {number} */
    itemId = 0;

    /* START-USER-CODE */

    onOver() {
        this.play('clothingcatalog-secret-hoveranim');
    }

    onOut() {
        this.anims.stop();
        this.setFrame('secret-hoveranim0001');
    }

    onClick() {
        this.scene.showSecret(this.itemId);
        this.onOut();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
