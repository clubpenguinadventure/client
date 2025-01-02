/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import SimpleButton from "../../../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PhotoButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.photo;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hover;
        /** @type {number} */
        this.item = 0;


        // photo
        const photo = scene.add.image(0, 0, "_MISSING");
        this.add(photo);

        // hover
        const hover = scene.add.rectangle(0, 0, 420, 420);
        hover.isFilled = true;
        hover.fillAlpha = 0;
        hover.isStroked = true;
        hover.strokeColor = 133418;
        hover.lineWidth = 5;
        this.add(hover);

        // hover (components)
        const hoverSimpleButton = new SimpleButton(hover);
        hoverSimpleButton.hoverCallback = () => this.onOver();
        hoverSimpleButton.hoverOutCallback = () => this.onOut();
        hoverSimpleButton.callback = () => this.onClick();

        this.photo = photo;
        this.hover = hover;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    onOver() {
        this.hover.fillAlpha = 0.2;
    }

    onOut() {
        this.hover.fillAlpha = 0;
    }

    onClick() {
        this.interface.prompt.showItem(this.item);
    }

    setItem(item, photoLoader) {
        this.item = item;

        photoLoader.loadPhoto(item, () => {
            this.photo.setTexture(`clothing/photos/${item}`);
        });
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
