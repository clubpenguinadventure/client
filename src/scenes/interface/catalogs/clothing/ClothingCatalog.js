export const preload = {
    key: 'clothingcatalog-pack',
    url: `assets/media/interface/catalogs/clothing/@${localStorage.getItem('scale')}x/clothingcatalog-pack.json`,
    loadString: ['loading', 'clothingcatalog']
};

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
import FlagsPage from "./FlagsPage";
import IconLoader from "@engine/loaders/IconLoader";
import CatalogPagesLoader from "@engine/loaders/CatalogPagesLoader";
import ColorsPage from "./ColorsPage";
import Tag1 from "./buttons/Tag1";
import Tag2 from "./buttons/Tag2";
import { _ } from "core-js";
/* END-USER-IMPORTS */

export default class ClothingCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Array<any>} */
        this.pages;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // buttons
        const buttons = scene.add.container(190, 41);
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
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [];

        // block (components)
        new Interactive(block);

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
        this.iconLoader = new IconLoader(this.scene);
        this.pagesLoader = new CatalogPagesLoader(this.scene);

        this.addFrontPage();

        this.addColorsPage();

        this.addContentPages();

        // this.addCustomTShirtPage();

        this.addClearancePages();

        this.addFlagPages();

        this.addBackPage();

        this.bringToTop(buttons);

        this.pages.forEach((page) => {
            page.visible = false;
        });

        window.generateReleaseDates = this.generateReleaseDates.bind(this);
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get catalogJson() {
        return this.crumbs.penguinstyle
            .filter((cat) => new Date(cat.expiration_date) > new Date())
            .sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
        [0];
    }

    addFrontPage() {
        const img = this.catalogJson.front;

        const frontpage_cntr = this.scene.add.container(0, 0);
        frontpage_cntr.visible = false;
        this.add(frontpage_cntr);

        const p1 = this.scene.add.image(760, 480, "_MISSING");
        frontpage_cntr.add(p1);

        const pageFront = this.scene.add.image(922, 588, "clothingcatalog", "page_front");
        pageFront.setOrigin(0, 0);
        frontpage_cntr.add(pageFront);

        const pageFront_button = new Button(pageFront);
        pageFront_button.callback = () => this.nextPage();

        const closeRight = this.scene.add.image(925, 37, "clothingcatalog", "close_right");
        closeRight.setOrigin(0, 0);
        frontpage_cntr.add(closeRight);

        const closeRight_button = new Button(closeRight);
        closeRight_button.callback = () => this.close();
        closeRight_button.pixelPerfect = true;

        p1.visible = false;
        pageFront.visible = false;
        closeRight.visible = false;
        this.pagesLoader.loadClothingPage(img, () => {
            p1.setTexture(`catalogs/pages/clothing/${img}`);
            p1.visible = true;
            pageFront.visible = true;
            closeRight.visible = true;
        });

        this.pages.push(frontpage_cntr);
    }

    addColorsPage() {
        const page = new ColorsPage(this.scene, 760, 480);
        this.add(page);
        this.pages.push(page);
    }

    addContentPages() {
        this.catalogJson.new.forEach((content) => {
            const page = this.scene.add.container(0, 0);
            page.visible = false;
            this.add(page);

            const p1 = this.scene.add.image(760, 480, "_MISSING");
            this.pagesLoader.loadClothingPage(content.img, () => {
                p1.setTexture(`catalogs/pages/clothing/${content.img}`);
            });
            page.add(p1);

            content.tags.forEach((tag) => {
                let tagObj;
                if (tag.type === "tag1") {
                    tagObj = new Tag1(this.scene, tag.x, tag.y);
                } else if (tag.type === "tag2") {
                    tagObj = new Tag2(this.scene, tag.x, tag.y);
                }
                tagObj.angle = tag.angle;
                tagObj.item = tag.item;
                page.add(tagObj);
            });

            this.pages.push(page);
        });
    }

    addClearancePages() {
        this.catalogJson.clearance.forEach((content) => {
            const page = this.scene.add.container(0, 0);
            page.visible = false;
            this.add(page);

            const p1 = this.scene.add.image(760, 480, "_MISSING");
            this.pagesLoader.loadClothingPage(content.img, () => {
                p1.setTexture(`catalogs/pages/clothing/${content.img}`);
            });
            page.add(p1);

            content.tags.forEach((tag) => {
                let tagObj;
                if (tag.type === "tag1") {
                    tagObj = new Tag1(this.scene, tag.x, tag.y);
                } else if (tag.type === "tag2") {
                    tagObj = new Tag2(this.scene, tag.x, tag.y);
                }
                tagObj.angle = tag.angle;
                tagObj.item = tag.item;
                page.add(tagObj);
            });

            this.pages.push(page);
        });
    }

    addBackPage() {
        const backpage_cntr = this.scene.add.container(0, 0);
        backpage_cntr.visible = false;
        this.add(backpage_cntr);

        const backpage = this.scene.add.image(760, 480, "clothingcatalog", "page/back");
        backpage_cntr.add(backpage);

        const pageLeft_1 = this.scene.add.image(491, 589, "clothingcatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        backpage_cntr.add(pageLeft_1);

        const pageLeft_button = new Button(pageLeft_1);
        pageLeft_button.callback = () => this.prevPage();
        pageLeft_button.pixelPerfect = true;

        const closeLeft = this.scene.add.image(491, 39, "clothingcatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        backpage_cntr.add(closeLeft);

        const closeLeft_button = new Button(closeLeft);
        closeLeft_button.callback = () => this.close();
        closeLeft_button.pixelPerfect = true;

        this.pages.push(backpage_cntr);
    }

    addFlagPages() {
        const flags = this.crumbs.items.filter((item) => parseInt(item.id) >= 70000 && parseInt(item.id) < 71000);
        let page;
        for (let i = 0; i < flags.length; i++) {
            if (i % 32 === 0) {
                page = new FlagsPage(this.scene, 760, 480);
                this.pages.push(page);
                this.add(page);
            }
            page.flagButtons[i % 32].setItem(flags[i], this.iconLoader);
        }
    }

    generateReleaseDates() {
        let list = [];
        this.pages.forEach((page, index) => {
            page.list.forEach((child) => {
                if (child instanceof Tag1 || child instanceof Tag2) {
                    list.push({
                        id: child.item,
                        released: this.catalogJson.release_date,
                        expired: this.catalogJson.expiration_date,
                        location: "Penguin Style",
                        page: index + 1,
                        cost: child.price.text
                    });
                }
            });
        });
        console.info(list);
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
