/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Tag1 extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.name;
        /** @type {Phaser.GameObjects.Text} */
        this.price;
        /** @type {Phaser.GameObjects.Image} */
        this.coin;
        /** @type {Phaser.GameObjects.Container} */
        this.hover_cntr;
        /** @type {number} */
        this.item = 0;


        // buy1
        const buy1 = scene.add.image(0, 0, "clothingcatalog", "buy1");
        buy1.setOrigin(0, 0);
        this.add(buy1);

        // hover-cntr
        const hover_cntr = scene.add.container(-122, 26);
        hover_cntr.visible = false;
        this.add(hover_cntr);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(0, 24, 200, 100);
        rectangle_1.isFilled = true;
        hover_cntr.add(rectangle_1);

        // rectangle
        const rectangle = scene.add.rectangle(0, 24, 210, 110);
        rectangle.isFilled = true;
        rectangle.fillAlpha = 0.5;
        hover_cntr.add(rectangle);

        // name
        const name = scene.add.text(0, 0, "", {});
        name.setOrigin(0.5, 0.5);
        name.text = "Item Name";
        name.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":200,"fontFamily": "Burbank Small", "fontSize": "22px", "fontStyle": "bold", "maxLines":2});
        name.setWordWrapWidth(200);
        hover_cntr.add(name);

        // price
        const price = scene.add.text(0, 46, "", {});
        price.setOrigin(0.5, 0.5);
        price.text = "8888";
        price.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        price.setPadding({"right":35});
        hover_cntr.add(price);

        // coin
        const coin = scene.add.image(64, 46, "main", "card-coin");
        coin.setOrigin(1, 0.5);
        hover_cntr.add(coin);

        // buy1 (components)
        const buy1Button = new Button(buy1);
        buy1Button.hoverCallback = () => { this.hover_cntr.visible = true };
        buy1Button.hoverOutCallback = () => { this.hover_cntr.visible = false };
        buy1Button.callback = () => this.interface.prompt.showItem(this.item);

        this.name = name;
        this.price = price;
        this.coin = coin;
        this.hover_cntr = hover_cntr;

        /* START-USER-CTR-CODE */
        setTimeout(() => {
            this.hover_cntr.rotation = -this.rotation;
            const item = this.world.getCrumb('items', this.item);
            this.name.text = item.name;
            this.price.text = item.cost;
            this.coin.x = this.price.x + this.price.width / 2;
        }, 5);
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
