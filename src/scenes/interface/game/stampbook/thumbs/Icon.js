/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Zone from "../../../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Icon extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // background
        const background = scene.add.image(10, 8, "stampbook-assets", "color_thumb/1");
        this.add(background);

        // foreground
        const foreground = scene.add.image(0, 0, "stampbook-assets", "clasp_thumb/1_1");
        this.add(foreground);

        // zone
        const zone = scene.add.rectangle(0, 0, 115, 80);
        zone.isFilled = true;
        zone.fillColor = 1234926;
        zone.fillAlpha = 0.3;
        this.add(zone);

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.parentContainer.onZoneOver(this.id, "icon");
        zoneZone.hoverOutCallback = () => this.parentContainer.onZoneOut(this.id, "icon");

        this.background = background;
        this.foreground = foreground;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    background;
    /** @type {Phaser.GameObjects.Image} */
    foreground;

    /* START-USER-CODE */

    setId(id) {
        this.id = id;
        this.background.setTexture(`stampbook-assets`, `color_thumb/${this.world.stampbook.playerdata.color}`);
        this.foreground.setTexture(`stampbook-assets`, `clasp_thumb/${id}_${this.world.stampbook.playerdata.highlight}`);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
