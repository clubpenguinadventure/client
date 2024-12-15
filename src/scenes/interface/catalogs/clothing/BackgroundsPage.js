
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BackgroundsPage extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // page_backgrounds
        const page_backgrounds = scene.add.image(0, 0, "clothingcatalog", "page/backgrounds");
        this.add(page_backgrounds);

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
