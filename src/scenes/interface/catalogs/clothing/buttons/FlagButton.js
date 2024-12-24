import { SimpleButton } from '@components/components'
import BaseContainer from '@scenes/base/BaseContainer';


/* START OF COMPILED CODE */

export default class FlagButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? -0.04325452273196699);

        /** @type {Phaser.GameObjects.Image} */
        this.flag;
        /** @type {Phaser.GameObjects.Image} */
        this.flag_hover;
        /** @type {Phaser.GameObjects.Text} */
        this.name;
        /** @type {number} */
        this.item = 0;


        // flag
        const flag = scene.add.image(0, 0.04325452273196699, "_MISSING");
        this.add(flag);

        // flag_hover
        const flag_hover = scene.add.image(0, 0, "_MISSING");
        flag_hover.visible = false;
        flag_hover.alpha = 0.3;
        flag_hover.alphaTopLeft = 0.3;
        flag_hover.alphaTopRight = 0.3;
        flag_hover.alphaBottomLeft = 0.3;
        flag_hover.alphaBottomRight = 0.3;
        flag_hover.tintFill = true;
        this.add(flag_hover);

        // name
        const name = scene.add.text(0, 60, "", {});
        name.setOrigin(0.5, 0);
        name.text = "Country";
        name.setStyle({ "align": "center", "fixedWidth":120,"fontFamily": "Burbank Small", "fontSize": "16.5px", "maxLines":2,"stroke": "#000" });
        name.setWordWrapWidth(120);
        this.add(name);

        // flag (components)
        const flagSimpleButton = new SimpleButton(flag);
        flagSimpleButton.hoverCallback = () => {this.flag_hover.visible = true};
        flagSimpleButton.hoverOutCallback = () => {this.flag_hover.visible = false};
        flagSimpleButton.callback = () => this.interface.prompt.showItem(this.item.id);

        this.flag = flag;
        this.flag_hover = flag_hover;
        this.name = name;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    setItem(item, iconLoader) {
        this.item = item;
        this.name.text = item.name;

        iconLoader.loadIcon(item.id, () => {
            console.log('loaded icon', item.id);
            this.flag.setTexture(`clothing/icon/${item.id}`);
            this.flag_hover.setTexture(`clothing/icon/${item.id}`);
        });
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
