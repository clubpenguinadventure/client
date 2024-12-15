export const preload = {
    key: 'clothingcatalog-pack',
    url: 'assets/media/interface/catalogs/clothing/clothingcatalog-pack.json',
    loadString: ['loading', 'clothingcatalog']
}

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
import FlagsPage from "./FlagsPage";
import BackgroundsPage from "./BackgroundsPage";
import Tag2 from "./buttons/Tag2";
import Tag1 from "./buttons/Tag1";
import ColorsPage from "./ColorsPage";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ClothingCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page17
        const page17 = scene.add.container(0, 0);
        page17.visible = false;
        this.add(page17);

        // p17
        const p17 = scene.add.image(760, 480, "clothingcatalog", "page/back");
        page17.add(p17);

        // pageLeft_1
        const pageLeft_1 = scene.add.image(491, 589, "clothingcatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page17.add(pageLeft_1);

        // closeLeft
        const closeLeft = scene.add.image(491, 39, "clothingcatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page17.add(closeLeft);

        // page16
        const page16 = scene.add.container(0, 0);
        page16.visible = false;
        this.add(page16);

        // p_1
        const p_1 = new FlagsPage(scene, 760, 480);
        page16.add(p_1);

        // page15
        const page15 = scene.add.container(0, 0);
        page15.visible = false;
        this.add(page15);

        // p16
        const p16 = new BackgroundsPage(scene, 760, 480);
        page15.add(p16);

        // page14
        const page14 = scene.add.container(0, 0);
        page14.visible = false;
        this.add(page14);

        // p15
        const p15 = scene.add.image(760, 480, "jan25", "content12");
        page14.add(p15);

        // page13
        const page13 = scene.add.container(0, 0);
        page13.visible = false;
        this.add(page13);

        // p14
        const p14 = scene.add.image(760, 480, "jan25", "content11");
        page13.add(p14);

        // page12
        const page12 = scene.add.container(0, 0);
        page12.visible = false;
        this.add(page12);

        // p13
        const p13 = scene.add.image(760, 480, "jan25", "content10");
        page12.add(p13);

        // page11
        const page11 = scene.add.container(0, 0);
        page11.visible = false;
        this.add(page11);

        // p12
        const p12 = scene.add.image(760, 480, "jan25", "content9");
        page11.add(p12);

        // page10
        const page10 = scene.add.container(0, 0);
        page10.visible = false;
        this.add(page10);

        // p11
        const p11 = scene.add.image(760, 480, "jan25", "content8");
        page10.add(p11);

        // page9
        const page9 = scene.add.container(0, 0);
        page9.visible = false;
        this.add(page9);

        // p9
        const p9 = scene.add.image(760, 480, "jan25", "content7");
        page9.add(p9);

        // page8
        const page8 = scene.add.container(0, 0);
        page8.visible = false;
        this.add(page8);

        // p8
        const p8 = scene.add.image(760, 480, "jan25", "content6");
        page8.add(p8);

        // page7
        const page7 = scene.add.container(0, 0);
        page7.visible = false;
        this.add(page7);

        // p7
        const p7 = scene.add.image(760, 480, "jan25", "content5");
        page7.add(p7);

        // page6
        const page6 = scene.add.container(0, 0);
        page6.visible = false;
        this.add(page6);

        // p6
        const p6 = scene.add.image(760, 480, "jan25", "content4");
        page6.add(p6);

        // page5
        const page5 = scene.add.container(0, 0);
        page5.visible = false;
        this.add(page5);

        // p5
        const p5 = scene.add.image(760, 480, "jan25", "content3");
        page5.add(p5);

        // page4
        const page4 = scene.add.container(0, 0);
        page4.visible = false;
        this.add(page4);

        // p4
        const p4 = scene.add.image(760, 480, "jan25", "content2");
        page4.add(p4);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // p3
        const p3 = scene.add.image(760, 480, "jan25", "content1");
        page3.add(p3);

        // tag2
        const tag2 = new Tag2(scene, 254, 117);
        tag2.angle = 8;
        page3.add(tag2);

        // tag
        const tag = new Tag2(scene, 232, 457);
        tag.angle = -47;
        page3.add(tag);

        // tag1
        const tag1 = new Tag1(scene, 626, 650);
        tag1.angle = 36;
        page3.add(tag1);

        // tag_1
        const tag_1 = new Tag1(scene, 758, 445);
        tag_1.angle = -24;
        page3.add(tag_1);

        // tag_2
        const tag_2 = new Tag1(scene, 1083, 672);
        tag_2.angle = 21;
        page3.add(tag_2);

        // tag_3
        const tag_3 = new Tag1(scene, 1149, 402);
        tag_3.angle = -25;
        page3.add(tag_3);

        // tag_4
        const tag_4 = new Tag1(scene, 1140, 165);
        tag_4.angle = -8;
        page3.add(tag_4);

        // page2
        const page2 = scene.add.container(0, 0);
        page2.visible = false;
        this.add(page2);

        // p2
        const p2 = new ColorsPage(scene, 760, 480);
        p2.visible = true;
        page2.add(p2);

        // page1
        const page1 = scene.add.container(0, -2);
        page1.visible = false;
        this.add(page1);

        // p1
        const p1 = scene.add.image(760, 480, "jan25", "front");
        page1.add(p1);

        // pageFront
        const pageFront = scene.add.image(922, 588, "clothingcatalog", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = scene.add.image(925, 37, "clothingcatalog", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.image(1012, 1, "clothingcatalog", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1012, 548, "clothingcatalog", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(0, 548, "clothingcatalog", "page_left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "Proxima Nova", "fontSize": "32px", "fontStyle": "bold", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17];

        // block (components)
        new Interactive(block);

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.activeFrame = false;
        pageLeft_1Button.pixelPerfect = true;

        // closeLeft (components)
        const closeLeftButton = new Button(closeLeft);
        closeLeftButton.callback = () => this.close();
        closeLeftButton.pixelPerfect = true;

        // tag2 (prefab fields)
        tag2.item = 1210;

        // tag (prefab fields)
        tag.item = 4293;

        // tag1 (prefab fields)
        tag1.item = 6059;

        // tag_1 (prefab fields)
        tag_1.item = 5002;

        // tag_2 (prefab fields)
        tag_2.item = 380;

        // tag_3 (prefab fields)
        tag_3.item = 4134;

        // tag_4 (prefab fields)
        tag_4.item = 1060;

        // pageFront (components)
        const pageFrontButton = new Button(pageFront);
        pageFrontButton.callback = () => this.nextPage();
        pageFrontButton.activeFrame = false;

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.pixelPerfect = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.callback = () => this.close();
        closeRightButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.activeFrame = false;
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.callback = () => this.prevPage();
        pageLeftButton.activeFrame = false;
        pageLeftButton.pixelPerfect = true;

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
