/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MailErrorPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.message;


        this.visible = false;

        // bg
        const bg = scene.add.nineslice(0, 0, "prompt", "error", 706, 504, 50, 50, 50, 50);
        this.add(bg);

        // button
        const button = scene.add.image(0, 160, "prompt", "error-button");
        this.add(button);

        // buttonText
        const buttonText = scene.add.text(0, 160, "", {});
        buttonText.setOrigin(0.5, 0.5);
        buttonText.text = "Ok";
        buttonText.setStyle({ "align": "center", "fixedWidth":280,"fontFamily": "Proxima Nova", "fontSize": "40px", "fontStyle": "bold" });
        this.add(buttonText);

        // message
        const message = scene.add.text(0, 39, "", {});
        message.setOrigin(0.5, 0.5);
        message.setStyle({ "align": "center", "color": "#000", "fixedWidth":658,"fontFamily": "Proxima Nova", "fontSize": "32px" });
        message.setWordWrapWidth(658);
        this.add(message);

        // icon
        const icon = scene.add.image(0, -123, "mailbook", "full");
        this.add(icon);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.callback = () => this.close();

        this.message = message;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(text) {
        this.message.text = text

        super.show()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
