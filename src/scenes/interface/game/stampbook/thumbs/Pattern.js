
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Zone from "../../../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Pattern extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // background
        const background = scene.add.image(10, 8, "stampbook-assets", "pattern_thumbs/1_1");
        this.add(background);

        // remove_pattern
        const remove_pattern = scene.add.rectangle(0, 0, 145, 5);
        remove_pattern.angle = 34;
        remove_pattern.isFilled = true;
        this.add(remove_pattern);

        // zone
        const zone = scene.add.rectangle(0, 0, 115, 80);
        zone.isFilled = true;
        zone.fillColor = 1234926;
        zone.fillAlpha = 0.3;
        this.add(zone);

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.parentContainer.onZoneOver(this.id, "pattern");
        zoneZone.hoverOutCallback = () => this.parentContainer.onZoneOut(this.id, "pattern");
        zoneZone.callback = () => { if (!this.rootModule) this.interface.stampbook.updatePattern(this.id) };;

        this.background = background;
        this.remove_pattern = remove_pattern;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    background;
    /** @type {Phaser.GameObjects.Rectangle} */
    remove_pattern;
    /** @type {boolean} */
    rootModule = false;

    /* START-USER-CODE */

    setId(id) {
        if (!this.hasListeners) {
            this.interface.events.on("updateStampbookColor", (color) => {
                this.background.setTexture(`stampbook-assets`, `pattern_thumbs/${color}_${this.id}`);
            });
            this.interface.events.on("updateStampbookPattern", (pattern) => {
                this.remove_pattern.visible = pattern == id && !this.rootModule;
            });
            this.hasListeners = true;
        }
        this.id = id;
        this.background.setTexture(`stampbook-assets`, `pattern_thumbs/${this.interface.stampbook.playerdata.color}_${id}`);
        this.remove_pattern.visible = this.interface.stampbook.playerdata.pattern == id && !this.rootModule;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
