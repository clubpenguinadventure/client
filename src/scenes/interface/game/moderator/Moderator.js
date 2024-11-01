/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Moderator extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.nineslice(0, -40, "prompt", "window", 708, 500, 50, 50, 50, 50);
        this.add(bg);

        // text
        const text = scene.add.text(-2, -66, "", {});
        text.setOrigin(0.5, 0);
        text.text = "If someone is breaking the rules, click on their penguin then click   M   to report them to a moderator. You can also click on   M   to ignore them.";
        text.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold" });
        text.setLineSpacing(20);
        text.setWordWrapWidth(600);
        this.add(text);

        // title
        const title = scene.add.text(0, -145, "", {});
        title.setOrigin(0.5, 0);
        title.text = "Help keep the island safe!";
        title.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "italic", "stroke": "#003366", "strokeThickness":9,"shadow.color": "#003366", "shadow.blur":3,"shadow.stroke":true});
        this.add(title);

        // mod
        const mod = scene.add.image(-1, -210, "main", "mod_smaller");
        mod.setOrigin(0.504950495049505, 0.504950495049505);
        this.add(mod);

        // blueButton
        const blueButton = scene.add.image(296, -241, "main", "blue-button");
        this.add(blueButton);

        // blueX
        const blueX = scene.add.image(296, -243, "main", "blue-x");
        this.add(blueX);

        // blueButton_1
        const blueButton_1 = scene.add.image(178, 13, "main", "blue-button");
        this.add(blueButton_1);

        // blueButton_2
        const blueButton_2 = scene.add.image(-25, 133, "main", "blue-button");
        this.add(blueButton_2);

        // mod_icon
        const mod_icon = scene.add.image(178, 13, "main", "mod-icon");
        mod_icon.setOrigin(0.5, 0.5161290322580645);
        this.add(mod_icon);

        // ignore_icon
        const ignore_icon = scene.add.image(-25, 132, "main", "ignore-icon");
        this.add(ignore_icon);

        // block (components)
        new Interactive(block);

        // blueButton (components)
        const blueButtonButton = new Button(blueButton);
        blueButtonButton.callback = () => this.close();

        // blueButton_1 (components)
        new Button(blueButton_1);

        // blueButton_2 (components)
        new Button(blueButton_2);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
