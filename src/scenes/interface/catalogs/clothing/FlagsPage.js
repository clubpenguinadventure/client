
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import FlagButton from "./buttons/FlagButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FlagsPage extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // page_flags
        const page_flags = scene.add.image(0, 0, "clothingcatalog", "page/flags");
        this.add(page_flags);

        // flagButton
        const flagButton = new FlagButton(scene, -497, -280);
        this.add(flagButton);

        // flagButton_1
        const flagButton_1 = new FlagButton(scene, -357, -280);
        this.add(flagButton_1);

        // flagButton_3
        const flagButton_3 = new FlagButton(scene, -217, -280);
        this.add(flagButton_3);

        // flagButton_4
        const flagButton_4 = new FlagButton(scene, -77, -280);
        this.add(flagButton_4);

        // flagButton_2
        const flagButton_2 = new FlagButton(scene, -77, -117);
        this.add(flagButton_2);

        // flagButton_5
        const flagButton_5 = new FlagButton(scene, -217, -117);
        this.add(flagButton_5);

        // flagButton_6
        const flagButton_6 = new FlagButton(scene, -357, -117);
        this.add(flagButton_6);

        // flagButton_7
        const flagButton_7 = new FlagButton(scene, -497, -117);
        this.add(flagButton_7);

        // flagButton_8
        const flagButton_8 = new FlagButton(scene, -77, 46);
        this.add(flagButton_8);

        // flagButton_9
        const flagButton_9 = new FlagButton(scene, -217, 46);
        this.add(flagButton_9);

        // flagButton_10
        const flagButton_10 = new FlagButton(scene, -357, 46);
        this.add(flagButton_10);

        // flagButton_11
        const flagButton_11 = new FlagButton(scene, -497, 46);
        this.add(flagButton_11);

        // flagButton_12
        const flagButton_12 = new FlagButton(scene, -77, 209);
        this.add(flagButton_12);

        // flagButton_13
        const flagButton_13 = new FlagButton(scene, -217, 209);
        this.add(flagButton_13);

        // flagButton_14
        const flagButton_14 = new FlagButton(scene, -357, 209);
        this.add(flagButton_14);

        // flagButton_15
        const flagButton_15 = new FlagButton(scene, -497, 209);
        this.add(flagButton_15);

        // flagButton_16
        const flagButton_16 = new FlagButton(scene, 81, 209);
        this.add(flagButton_16);

        // flagButton_17
        const flagButton_17 = new FlagButton(scene, 221, 209);
        this.add(flagButton_17);

        // flagButton_18
        const flagButton_18 = new FlagButton(scene, 361, 209);
        this.add(flagButton_18);

        // flagButton_19
        const flagButton_19 = new FlagButton(scene, 501, 209);
        this.add(flagButton_19);

        // flagButton_20
        const flagButton_20 = new FlagButton(scene, 81, 46);
        this.add(flagButton_20);

        // flagButton_21
        const flagButton_21 = new FlagButton(scene, 221, 46);
        this.add(flagButton_21);

        // flagButton_22
        const flagButton_22 = new FlagButton(scene, 361, 46);
        this.add(flagButton_22);

        // flagButton_23
        const flagButton_23 = new FlagButton(scene, 501, 46);
        this.add(flagButton_23);

        // flagButton_24
        const flagButton_24 = new FlagButton(scene, 81, -117);
        this.add(flagButton_24);

        // flagButton_25
        const flagButton_25 = new FlagButton(scene, 221, -117);
        this.add(flagButton_25);

        // flagButton_26
        const flagButton_26 = new FlagButton(scene, 361, -117);
        this.add(flagButton_26);

        // flagButton_27
        const flagButton_27 = new FlagButton(scene, 501, -117);
        this.add(flagButton_27);

        // flagButton_28
        const flagButton_28 = new FlagButton(scene, 501, -280);
        this.add(flagButton_28);

        // flagButton_29
        const flagButton_29 = new FlagButton(scene, 361, -280);
        this.add(flagButton_29);

        // flagButton_30
        const flagButton_30 = new FlagButton(scene, 221, -280);
        this.add(flagButton_30);

        // flagButton_31
        const flagButton_31 = new FlagButton(scene, 81, -280);
        this.add(flagButton_31);

        // lists
        const flagButtons = [flagButton, flagButton_1, flagButton_3, flagButton_4, flagButton_7, flagButton_6, flagButton_5, flagButton_2, flagButton_11, flagButton_10, flagButton_9, flagButton_8, flagButton_15, flagButton_14, flagButton_13, flagButton_12, flagButton_31, flagButton_30, flagButton_29, flagButton_28, flagButton_24, flagButton_25, flagButton_26, flagButton_27, flagButton_20, flagButton_21, flagButton_22, flagButton_23, flagButton_16, flagButton_17, flagButton_18, flagButton_19];

        this.flagButtons = flagButtons;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {FlagButton[]} */
    flagButtons;

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
