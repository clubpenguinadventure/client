
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import PhotoButton from "./buttons/PhotoButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BackgroundsPage extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // page_backgrounds
        const page_backgrounds = scene.add.image(0, 0, "clothingcatalog", "page/backgrounds");
        this.add(page_backgrounds);

        // photoButton
        const photoButton = new PhotoButton(scene, -420, -100);
        photoButton.scaleX = 0.6;
        photoButton.scaleY = 0.6;
        this.add(photoButton);

        // photoButton_1
        const photoButton_1 = new PhotoButton(scene, -150, -100);
        photoButton_1.scaleX = 0.6;
        photoButton_1.scaleY = 0.6;
        this.add(photoButton_1);

        // photoButton_2
        const photoButton_2 = new PhotoButton(scene, -420, 170);
        photoButton_2.scaleX = 0.6;
        photoButton_2.scaleY = 0.6;
        this.add(photoButton_2);

        // photoButton_3
        const photoButton_3 = new PhotoButton(scene, -150, 170);
        photoButton_3.scaleX = 0.6;
        photoButton_3.scaleY = 0.6;
        this.add(photoButton_3);

        // photoButton_4
        const photoButton_4 = new PhotoButton(scene, 155, -100);
        photoButton_4.scaleX = 0.6;
        photoButton_4.scaleY = 0.6;
        this.add(photoButton_4);

        // photoButton_5
        const photoButton_5 = new PhotoButton(scene, 425, -100);
        photoButton_5.scaleX = 0.6;
        photoButton_5.scaleY = 0.6;
        this.add(photoButton_5);

        // photoButton_6
        const photoButton_6 = new PhotoButton(scene, 425, 170);
        photoButton_6.scaleX = 0.6;
        photoButton_6.scaleY = 0.6;
        this.add(photoButton_6);

        // photoButton_7
        const photoButton_7 = new PhotoButton(scene, 155, 170);
        photoButton_7.scaleX = 0.6;
        photoButton_7.scaleY = 0.6;
        this.add(photoButton_7);

        // lists
        const backgrounds = [photoButton, photoButton_1, photoButton_2, photoButton_3, photoButton_4, photoButton_5, photoButton_7, photoButton_6];

        this.backgrounds = backgrounds;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {PhotoButton[]} */
    backgrounds;

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
