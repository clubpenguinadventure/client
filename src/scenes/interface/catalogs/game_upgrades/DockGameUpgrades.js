export const preload = {
    key: 'igloocatalog-pack',
    url: 'assets/media/interface/catalogs/dock/dock-gameupgrades-pack.json',
    loadString: ['loading', 'gameupgrades']
}

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DockGameUpgrades extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 108);

        // bg
        const bg = scene.add.image(0, 372, "dock-gameupgrades", "bg");
        this.add(bg);

        // closebtn
        const closebtn = scene.add.image(281, -14, "dock-gameupgrades", "closebtn");
        this.add(closebtn);

        // yellowbtn
        const yellowbtn = scene.add.image(-207, 315, "dock-gameupgrades", "yellowbtn");
        this.add(yellowbtn);

        // pinkbtn
        const pinkbtn = scene.add.image(-68, 383, "dock-gameupgrades", "pinkbtn");
        this.add(pinkbtn);

        // lists
        const pages = [bg];

        // bg (components)
        new Interactive(bg);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.callback = () => this.close();

        // yellowbtn (components)
        const yellowbtnButton = new Button(yellowbtn);
        yellowbtnButton.callback = () => this.interface.prompt.showItem(711);
        yellowbtnButton.pixelPerfect = true;

        // pinkbtn (components)
        const pinkbtnButton = new Button(pinkbtn);
        pinkbtnButton.callback = () => this.interface.prompt.showItem(712);
        pinkbtnButton.pixelPerfect = true;

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
