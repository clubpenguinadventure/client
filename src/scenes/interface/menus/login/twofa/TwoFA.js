import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive } from '@components/components'

/* START OF COMPILED CODE */

export default class TwoFA extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        this.visible = false;

        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.3;
        this.add(block);

        // twofa_popup
        const twofa_popup = scene.add.nineslice(760, 480, "prompt", "error", 500, 350, 50, 50, 50, 50);
        this.add(twofa_popup);

        // twofa_submit
        const twofa_submit = scene.add.nineslice(760, 571, "prompt", "error-button", 250, 100, 35, 35, 35, 35);
        twofa_submit.setOrigin(0.5, 0.5047619047619047);
        this.add(twofa_submit);

        // twofaText
        const twofaText = scene.add.text(760, 382, "", {});
        twofaText.setOrigin(0.5, 0.5);
        twofaText.text = "Enter the 6 digit code from your Authenticator app";
        twofaText.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "30px" });
        twofaText.setWordWrapWidth(300);
        this.add(twofaText);

        // twofa_box
        const twofa_box = scene.add.image(760, 472, "login", "input");
        this.add(twofa_box);

        // twofaText_1
        const twofaText_1 = scene.add.text(761, 569, "", {});
        twofaText_1.setOrigin(0.5, 0.5);
        twofaText_1.text = "Submit";
        twofaText_1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "40px" });
        twofaText_1.setWordWrapWidth(300);
        this.add(twofaText_1);

        // block (components)
        new Interactive(block);

        // twofa_submit (components)
        const twofa_submitButton = new Button(twofa_submit);
        twofa_submitButton.callback = () => this.submit2fa();

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    submit2fa() {
        this.scene.submit2fa();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
