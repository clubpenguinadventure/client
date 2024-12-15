
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import ColorButton from "./buttons/ColorButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ColorsPage extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // page_colors
        const page_colors = scene.add.image(0, 0, "clothingcatalog", "page/colors");
        this.add(page_colors);

        // colorButton
        const colorButton = new ColorButton(scene, 35, -175);
        colorButton.visible = true;
        this.add(colorButton);

        // colorButton_1
        const colorButton_1 = new ColorButton(scene, 35, -76);
        colorButton_1.visible = true;
        this.add(colorButton_1);

        // colorButton_2
        const colorButton_2 = new ColorButton(scene, 35, 24);
        colorButton_2.visible = true;
        this.add(colorButton_2);

        // colorButton_3
        const colorButton_3 = new ColorButton(scene, 140, -175);
        colorButton_3.visible = true;
        this.add(colorButton_3);

        // colorButton_4
        const colorButton_4 = new ColorButton(scene, 140, 24);
        colorButton_4.visible = true;
        this.add(colorButton_4);

        // colorButton_5
        const colorButton_5 = new ColorButton(scene, 140, -76);
        colorButton_5.visible = true;
        this.add(colorButton_5);

        // colorButton_6
        const colorButton_6 = new ColorButton(scene, 245, -175);
        colorButton_6.visible = true;
        this.add(colorButton_6);

        // colorButton_7
        const colorButton_7 = new ColorButton(scene, 245, 24);
        colorButton_7.visible = true;
        this.add(colorButton_7);

        // colorButton_8
        const colorButton_8 = new ColorButton(scene, 245, -76);
        colorButton_8.visible = true;
        this.add(colorButton_8);

        // colorButton_9
        const colorButton_9 = new ColorButton(scene, 350, -175);
        colorButton_9.visible = true;
        this.add(colorButton_9);

        // colorButton_10
        const colorButton_10 = new ColorButton(scene, 455, -175);
        colorButton_10.visible = true;
        this.add(colorButton_10);

        // colorButton_11
        const colorButton_11 = new ColorButton(scene, 350, -76);
        colorButton_11.visible = true;
        this.add(colorButton_11);

        // colorButton_12
        const colorButton_12 = new ColorButton(scene, 455, -76);
        colorButton_12.visible = true;
        this.add(colorButton_12);

        // colorButton_13
        const colorButton_13 = new ColorButton(scene, 455, 24);
        colorButton_13.visible = true;
        this.add(colorButton_13);

        // colorButton_14
        const colorButton_14 = new ColorButton(scene, 350, 24);
        colorButton_14.visible = true;
        this.add(colorButton_14);

        // colorButton (prefab fields)
        colorButton.item = 1;

        // colorButton_1 (prefab fields)
        colorButton_1.item = 6;

        // colorButton_2 (prefab fields)
        colorButton_2.item = 11;

        // colorButton_3 (prefab fields)
        colorButton_3.item = 2;

        // colorButton_4 (prefab fields)
        colorButton_4.item = 12;

        // colorButton_5 (prefab fields)
        colorButton_5.item = 7;

        // colorButton_6 (prefab fields)
        colorButton_6.item = 3;

        // colorButton_7 (prefab fields)
        colorButton_7.item = 13;

        // colorButton_8 (prefab fields)
        colorButton_8.item = 8;

        // colorButton_9 (prefab fields)
        colorButton_9.item = 4;

        // colorButton_10 (prefab fields)
        colorButton_10.item = 5;

        // colorButton_11 (prefab fields)
        colorButton_11.item = 9;

        // colorButton_12 (prefab fields)
        colorButton_12.item = 10;

        // colorButton_13 (prefab fields)
        colorButton_13.item = 16;

        // colorButton_14 (prefab fields)
        colorButton_14.item = 15;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
