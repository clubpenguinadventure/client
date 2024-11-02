export const preload = {
    key: 'igloocatalog-pack',
    url: 'assets/media/interface/catalogs/mtn/mtn-gameupgrades-pack.json',
    loadString: ['loading', 'gameupgrades']
}

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MtnGameUpgrades extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 108);

        // bg
        const bg = scene.add.image(0, 372, "mtn-gameupgrades", "bg");
        this.add(bg);

        // closebtn
        const closebtn = scene.add.image(281, -14, "mtn-gameupgrades", "closebtn");
        this.add(closebtn);

        // green
        const green = scene.add.image(-134, 644, "mtn-gameupgrades", "greenbtn");
        this.add(green);

        // pink
        const pink = scene.add.image(123, 526, "mtn-gameupgrades", "pinkbtn");
        this.add(pink);

        // toboggan
        const toboggan = scene.add.image(-93, 350, "mtn-gameupgrades", "tobogganbtn");
        this.add(toboggan);

        // lists
        const pages = [bg];

        // bg (components)
        new Interactive(bg);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.callback = () => this.close();

        // green (components)
        const greenButton = new Button(green);
        greenButton.callback = () => this.interface.prompt.showItem(5046);
        greenButton.pixelPerfect = true;

        // pink (components)
        const pinkButton = new Button(pink);
        pinkButton.callback = () => this.interface.prompt.showItem(5047);
        pinkButton.pixelPerfect = true;

        // toboggan (components)
        const tobogganButton = new Button(toboggan);
        tobogganButton.callback = () => this.interface.prompt.showItem(5021);
        tobogganButton.pixelPerfect = true;

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
