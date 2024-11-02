export const preload = {
    key: 'igloocatalog-pack',
    url: 'assets/media/interface/catalogs/lodge/lodge-gameupgrades-pack.json',
    loadString: ['loading', 'gameupgrades']
}

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LodgeGameUpgrades extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 108);

        // bg
        const bg = scene.add.image(0, 372, "lodge-gameupgrades", "bg");
        this.add(bg);

        // closebtn
        const closebtn = scene.add.image(281, -14, "lodge-gameupgrades", "closebtn");
        this.add(closebtn);

        // rodbtn
        const rodbtn = scene.add.image(142, 315, "lodge-gameupgrades", "rodbtn");
        this.add(rodbtn);

        // lists
        const pages = [bg];

        // bg (components)
        new Interactive(bg);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.callback = () => this.close();

        // rodbtn (components)
        const rodbtnButton = new Button(rodbtn);
        rodbtnButton.callback = () => this.interface.prompt.showItem(321);
        rodbtnButton.pixelPerfect = true;

        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image[]} */
    pages;

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
