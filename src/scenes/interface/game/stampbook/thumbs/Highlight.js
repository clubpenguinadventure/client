
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Zone from "../../../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Highlight extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // background
        const background = scene.add.image(10, 8, "stampbook-assets", "color_thumb/1");
        this.add(background);

        // foreground
        const foreground = scene.add.image(0, 0, "stampbook-assets", "highlight_thumb/1");
        this.add(foreground);

        // zone
        const zone = scene.add.rectangle(0, 0, 115, 80);
        zone.isFilled = true;
        zone.fillColor = 1234926;
        zone.fillAlpha = 0.3;
        this.add(zone);

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.parentContainer.onZoneOver(this.id, "highlight");
        zoneZone.hoverOutCallback = () => this.parentContainer.onZoneOut(this.id, "highlight");
        zoneZone.callback = () => { if (!this.rootModule) this.interface.stampbook.updateHighlight(this.id) };;

        this.background = background;
        this.foreground = foreground;

        /* START-USER-CTR-CODE */
        this.hasListeners = false;
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    background;
    /** @type {Phaser.GameObjects.Image} */
    foreground;
    /** @type {boolean} */
    rootModule = false;

    /* START-USER-CODE */

    setId(id) {
        if (!this.hasListeners) {
            this.interface.events.on("updateStampbookColor", (color) => {
                this.background.setTexture(`stampbook-assets`, `color_thumb/${color}`);
            }, this);
            this.hasListeners = true;
        }
        this.id = id;
        this.background.setTexture(`stampbook-assets`, `color_thumb/${this.interface.stampbook.playerdata.color}`);
        this.foreground.setTexture(`stampbook-assets`, `highlight_thumb/${id}`);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
