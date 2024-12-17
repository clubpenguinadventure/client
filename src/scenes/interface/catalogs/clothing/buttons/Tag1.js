/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Tag1 extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? -0.23177355279381118, y ?? -0.3491356795260714);

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


        this.alpha = 0.6;

        // buy1
        const buy1 = scene.add.image(-34, -26, "clothingcatalog", "buy1");
        buy1.setOrigin(0, 0);
        this.add(buy1);

        // hover-cntr
        const hover_cntr = scene.add.container(0.19456634126533642, 0.3343301292037787);
        hover_cntr.visible = false;
        this.add(hover_cntr);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(-156.19456635474256, 23.665669875852217, 200, 100);
        rectangle_1.isFilled = true;
        hover_cntr.add(rectangle_1);

        // rectangle
        const rectangle = scene.add.rectangle(-156.19456635474256, 23.665669875852217, 210, 110);
        rectangle.isFilled = true;
        rectangle.fillAlpha = 0.5;
        hover_cntr.add(rectangle);

        // name
        const name = scene.add.text(-156.19456635474256, -0.3343301241477844, "", {});
        name.setOrigin(0.5, 0.5);
        name.text = "Item Name";
        name.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":200,"fontFamily": "Burbank Small", "fontSize": "22px", "fontStyle": "bold", "maxLines":2});
        name.setWordWrapWidth(200);
        hover_cntr.add(name);

        // price
        const price = scene.add.text(-156.19456635474256, 45.66566987585222, "", {});
        price.setOrigin(0.5, 0.5);
        price.text = "8888";
        price.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        price.setPadding({"right":35});
        hover_cntr.add(price);

        // coin
        const coin = scene.add.image(-92.19456635474258, 45.66566987585222, "main", "card-coin");
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
            this.alpha = 1;
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
