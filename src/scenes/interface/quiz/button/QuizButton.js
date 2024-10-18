/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class QuizButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.button;
        /** @type {Phaser.GameObjects.Text} */
        this.buttonText;
        /** @type {any} */
        this.onClick = () => {};


        // button
        const button = scene.add.nineslice(0, 0, "prompt", "window-button", 558, 105, 50, 50, 50, 50);
        this.add(button);

        // buttonText
        const buttonText = scene.add.text(0, 0, "", {});
        buttonText.setOrigin(0.5, 0.5);
        buttonText.text = "Text";
        buttonText.setStyle({ "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(buttonText);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.callback = () => this.onClick();

        this.button = button;
        this.buttonText = buttonText;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get text() {
        return this.buttonText.text
    }

    set text(text) {
        this.buttonText.text = text

        const fontSize = this.buttonText.width > this.button.width ? 32 : 40
        this.buttonText.setFontSize(fontSize)
    }

    close() {
        this.onClick = () => {}

        super.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
