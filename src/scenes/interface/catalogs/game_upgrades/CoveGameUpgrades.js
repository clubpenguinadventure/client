export const preload = {
    key: 'igloocatalog-pack',
    url: `assets/media/interface/catalogs/cove/@${localStorage.getItem('scale')}x/cove-gameupgrades-pack.json`,
    loadString: ['loading', 'gameupgrades']
}

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
import SimpleButton from "../../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CoveGameUpgrades extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 108);

        // bg
        const bg = scene.add.image(0, 372, "cove-gameupgrades", "bg");
        this.add(bg);

        // closebtn
        const closebtn = scene.add.image(281, -14, "cove-gameupgrades", "closebtn");
        this.add(closebtn);

        // daisybtn
        const daisybtn = scene.add.image(-202, 271, "cove-gameupgrades", "daisybtn");
        this.add(daisybtn);

        // flamebtn
        const flamebtn = scene.add.image(-49, 393, "cove-gameupgrades", "flamebtn");
        this.add(flamebtn);

        // secret
        const secret = scene.add.sprite(84, -1, "cove-gameupgrades", "secret-hoveranim0001");
        secret.setOrigin(0.5060240963855421, 0.5060240963855421);
        this.add(secret);

        // lists
        const pages = [bg];

        // bg (components)
        new Interactive(bg);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.callback = () => this.close();

        // daisybtn (components)
        const daisybtnButton = new Button(daisybtn);
        daisybtnButton.callback = () => this.interface.prompt.showItem(702);
        daisybtnButton.pixelPerfect = true;

        // flamebtn (components)
        const flamebtnButton = new Button(flamebtn);
        flamebtnButton.callback = () => this.interface.prompt.showItem(701);
        flamebtnButton.pixelPerfect = true;

        // secret (components)
        const secretSimpleButton = new SimpleButton(secret);
        secretSimpleButton.hoverCallback = () => this.onSecretOver();
        secretSimpleButton.hoverOutCallback = () => this.onSecretOut();
        secretSimpleButton.callback = () => this.interface.prompt.showItem(703);

        this.secret = secret;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Sprite} */
    secret;
    /** @type {Phaser.GameObjects.Image[]} */
    pages;

    /* START-USER-CODE */

    onSecretOver() {
        this.secret.play("covegameupgrades-secret-hover");
    }

    onSecretOut() {
        this.secret.anims.stop();
        this.secret.setFrame("secret-hoveranim0001");
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
