
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FlagsPage extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // page_flags
        const page_flags = scene.add.image(0, 0, "clothingcatalog", "page/flags");
        this.add(page_flags);

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
