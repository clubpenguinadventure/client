
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Tag1 from "./buttons/Tag1";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CustomTShirtPage extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // bg
        const bg = scene.add.image(0, 0, "clothingcatalog", "page/customtshirt/page");
        this.add(bg);

        // shirt
        const shirt = scene.add.image(254, -127, "clothingcatalog", "page/customtshirt/shirts0001");
        shirt.setOrigin(0.5020746887966805, 0.5);
        this.add(shirt);

        // tag1
        const tag1 = new Tag1(scene, 394, -181);
        tag1.angle = -35.00000000000006;
        this.add(tag1);

        // page_customtshirt_buttonblack
        const page_customtshirt_buttonblack = scene.add.image(-463, -75, "clothingcatalog", "page/customtshirt/buttonblack");
        this.add(page_customtshirt_buttonblack);

        // page_customtshirt_buttonblue
        const page_customtshirt_buttonblue = scene.add.image(-193, -60, "clothingcatalog", "page/customtshirt/buttonblue");
        this.add(page_customtshirt_buttonblue);

        // page_customtshirt_buttongreen
        const page_customtshirt_buttongreen = scene.add.image(-373, -70, "clothingcatalog", "page/customtshirt/buttongreen");
        this.add(page_customtshirt_buttongreen);

        // page_customtshirt_buttonorange
        const page_customtshirt_buttonorange = scene.add.image(-103, -55, "clothingcatalog", "page/customtshirt/buttonorange");
        this.add(page_customtshirt_buttonorange);

        // page_customtshirt_buttonpurple
        const page_customtshirt_buttonpurple = scene.add.image(-283, -65, "clothingcatalog", "page/customtshirt/buttonpurple");
        this.add(page_customtshirt_buttonpurple);

        // page_customtshirt_buttonblack_1
        const page_customtshirt_buttonblack_1 = scene.add.image(-470, 88, "clothingcatalog", "page/customtshirt/pattern1_btn");
        this.add(page_customtshirt_buttonblack_1);

        // page_customtshirt_buttongreen_1
        const page_customtshirt_buttongreen_1 = scene.add.image(-384, 98, "clothingcatalog", "page/customtshirt/pattern2_btn");
        this.add(page_customtshirt_buttongreen_1);

        // page_customtshirt_buttonpurple_1
        const page_customtshirt_buttonpurple_1 = scene.add.image(-293, 91, "clothingcatalog", "page/customtshirt/pattern3_btn");
        this.add(page_customtshirt_buttonpurple_1);

        // page_customtshirt_buttonblue_1
        const page_customtshirt_buttonblue_1 = scene.add.image(-208, 114, "clothingcatalog", "page/customtshirt/pattern4_btn");
        this.add(page_customtshirt_buttonblue_1);

        // page_customtshirt_buttonorange_1
        const page_customtshirt_buttonorange_1 = scene.add.image(-119, 124, "clothingcatalog", "page/customtshirt/pattern5_btn");
        this.add(page_customtshirt_buttonorange_1);

        // tag1 (prefab fields)
        tag1.item = 4241;

        // page_customtshirt_buttonblack (components)
        const page_customtshirt_buttonblackButton = new Button(page_customtshirt_buttonblack);
        page_customtshirt_buttonblackButton.callback = () => this.selectColor(1);
        page_customtshirt_buttonblackButton.pixelPerfect = true;

        // page_customtshirt_buttonblue (components)
        const page_customtshirt_buttonblueButton = new Button(page_customtshirt_buttonblue);
        page_customtshirt_buttonblueButton.callback = () => this.selectColor(4);
        page_customtshirt_buttonblueButton.pixelPerfect = true;

        // page_customtshirt_buttongreen (components)
        const page_customtshirt_buttongreenButton = new Button(page_customtshirt_buttongreen);
        page_customtshirt_buttongreenButton.callback = () => this.selectColor(2);
        page_customtshirt_buttongreenButton.pixelPerfect = true;

        // page_customtshirt_buttonorange (components)
        const page_customtshirt_buttonorangeButton = new Button(page_customtshirt_buttonorange);
        page_customtshirt_buttonorangeButton.callback = () => this.selectColor(5);
        page_customtshirt_buttonorangeButton.pixelPerfect = true;

        // page_customtshirt_buttonpurple (components)
        const page_customtshirt_buttonpurpleButton = new Button(page_customtshirt_buttonpurple);
        page_customtshirt_buttonpurpleButton.callback = () => this.selectColor(3);
        page_customtshirt_buttonpurpleButton.pixelPerfect = true;

        // page_customtshirt_buttonblack_1 (components)
        const page_customtshirt_buttonblack_1Button = new Button(page_customtshirt_buttonblack_1);
        page_customtshirt_buttonblack_1Button.callback = () => this.selectPattern(1);
        page_customtshirt_buttonblack_1Button.pixelPerfect = true;

        // page_customtshirt_buttongreen_1 (components)
        const page_customtshirt_buttongreen_1Button = new Button(page_customtshirt_buttongreen_1);
        page_customtshirt_buttongreen_1Button.callback = () => this.selectPattern(2);
        page_customtshirt_buttongreen_1Button.pixelPerfect = true;

        // page_customtshirt_buttonpurple_1 (components)
        const page_customtshirt_buttonpurple_1Button = new Button(page_customtshirt_buttonpurple_1);
        page_customtshirt_buttonpurple_1Button.callback = () => this.selectPattern(3);
        page_customtshirt_buttonpurple_1Button.pixelPerfect = true;

        // page_customtshirt_buttonblue_1 (components)
        const page_customtshirt_buttonblue_1Button = new Button(page_customtshirt_buttonblue_1);
        page_customtshirt_buttonblue_1Button.callback = () => this.selectPattern(4);
        page_customtshirt_buttonblue_1Button.pixelPerfect = true;

        // page_customtshirt_buttonorange_1 (components)
        const page_customtshirt_buttonorange_1Button = new Button(page_customtshirt_buttonorange_1);
        page_customtshirt_buttonorange_1Button.callback = () => this.selectPattern(5);
        page_customtshirt_buttonorange_1Button.pixelPerfect = true;

        this.shirt = shirt;
        this.tag1 = tag1;

        /* START-USER-CTR-CODE */
        this.pattern = 1;
        this.color = 1;
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    shirt;
    /** @type {Tag1} */
    tag1;

    /* START-USER-CODE */

    get id() {
        let index = this.color * 5 - 5 + this.pattern
        switch (index) {
            case 1:
                return 4241;
            case 2:
                return 4242;
            case 3:
                return 4158;
            case 4:
                return 4177;
            case 5:
                return 4176;
            case 6:
                return 4245;
            case 7:
                return 4246;
            case 8:
                return 4163;
            case 9:
                return 4178;
            case 10:
                return 4179;
            case 11:
                return 4247;
            case 12:
                return 4248;
            case 13:
                return 4168;
            case 14:
                return 4180;
            case 15:
                return 4181;
            case 16:
                return 4243;
            case 17:
                return 4244;
            case 18:
                return 4174;
            case 19:
                return 4171;
            case 20:
                return 4175;
            case 21:
                return 4249;
            case 22:
                return 4250;
            case 23:
                return 4253;
            case 24:
                return 4251;
            case 25:
                return 4252;
            default:
                return 4241;
        }
    }

    numberTo4Digits(num) {
        return num.toString().padStart(4, "0");
    }

    selectColor(color) {
        this.color = color;
        let index = color * 5 - 5 + this.pattern
        this.shirt.setTexture(`clothingcatalog`, `page/customtshirt/shirts${this.numberTo4Digits(index)}`);
        this.tag1.item = this.id;
    }

    selectPattern(pattern) {
        this.pattern = pattern;
        let index = this.color * 5 - 5 + pattern
        this.shirt.setTexture(`clothingcatalog`, `page/customtshirt/shirts${this.numberTo4Digits(index)}`);
        this.tag1.item = this.id;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
