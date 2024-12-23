export const preload = {
    key: 'igloocatalog-pack',
    url: `assets/media/interface/catalogs/dance/@${localStorage.getItem('scale')}x/dance-gameupgrades-pack.json`,
    loadString: ['loading', 'gameupgrades']
}

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DanceGameUpgrades extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 108);

        // bg
        const bg = scene.add.image(0, 372, "dance-gameupgrades", "bg");
        this.add(bg);

        // closebtn
        const closebtn = scene.add.image(281, -14, "dance-gameupgrades", "closebtn");
        this.add(closebtn);

        // blue
        const blue = scene.add.image(-26, 330, "dance-gameupgrades", "blue");
        this.add(blue);

        // green
        const green = scene.add.image(-180, 325, "dance-gameupgrades", "green");
        green.setOrigin(0.5023474178403756, 0.5045045045045045);
        this.add(green);

        // orange
        const orange = scene.add.image(251, 340, "dance-gameupgrades", "orange");
        orange.setOrigin(0.502283105022831, 0.5027624309392266);
        this.add(orange);

        // pink
        const pink = scene.add.image(122, 330, "dance-gameupgrades", "pink");
        pink.setOrigin(0.5, 0.5039370078740157);
        this.add(pink);

        // purple
        const purple = scene.add.image(-123, 186, "dance-gameupgrades", "purple");
        purple.setOrigin(0.5031446540880503, 0.5039370078740157);
        this.add(purple);

        // red
        const red = scene.add.image(140, 463, "dance-gameupgrades", "red");
        this.add(red);

        // yellow
        const yellow = scene.add.image(-7, 455, "dance-gameupgrades", "yellow");
        this.add(yellow);

        // lists
        const pages = [bg];

        // bg (components)
        new Interactive(bg);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.callback = () => this.close();

        // blue (components)
        const blueButton = new Button(blue);
        blueButton.callback = () => this.interface.prompt.showItem(5038);
        blueButton.pixelPerfect = true;

        // green (components)
        const greenButton = new Button(green);
        greenButton.callback = () => this.interface.prompt.showItem(5039);
        greenButton.pixelPerfect = true;

        // orange (components)
        const orangeButton = new Button(orange);
        orangeButton.callback = () => this.interface.prompt.showItem(5070);
        orangeButton.pixelPerfect = true;

        // pink (components)
        const pinkButton = new Button(pink);
        pinkButton.callback = () => this.interface.prompt.showItem(5072);
        pinkButton.pixelPerfect = true;

        // purple (components)
        const purpleButton = new Button(purple);
        purpleButton.callback = () => this.interface.prompt.showItem(5037);
        purpleButton.pixelPerfect = true;

        // red (components)
        const redButton = new Button(red);
        redButton.callback = () => this.interface.prompt.showItem(5121);
        redButton.pixelPerfect = true;

        // yellow (components)
        const yellowButton = new Button(yellow);
        yellowButton.callback = () => this.interface.prompt.showItem(5071);
        yellowButton.pixelPerfect = true;

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
