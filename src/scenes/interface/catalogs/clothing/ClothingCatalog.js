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
import PhotoLoader from "@engine/loaders/PhotoLoader";
import CatalogPagesLoader from "@engine/loaders/CatalogPagesLoader";
import ColorsPage from "./ColorsPage";
import BackgroundsPage from "./BackgroundsPage";
import CustomTShirtPage from "./CustomTShirtPage";
import Tag1 from "./buttons/Tag1";
import Tag2 from "./buttons/Tag2";
import Secret from "./buttons/Secret";
import { _ } from "core-js";
/* END-USER-IMPORTS */

export default class ClothingCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.secret_cost;
        /** @type {Phaser.GameObjects.Text} */
        this.secret_name;
        /** @type {Phaser.GameObjects.Image} */
        this.secret_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.secret_spinner;
        /** @type {Phaser.GameObjects.Container} */
        this.secret;
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
        const closeRight = scene.add.image(1141, 1, "clothingcatalog", "close_right");
        closeRight.setOrigin(1, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1142.075209175545, 770.0201416015625, "clothingcatalog", "page_right");
        pageRight.setOrigin(1.000578275387247, 1.0000905831948006);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(0, 769.9889917793676, "clothingcatalog", "page_left");
        pageLeft.setOrigin(0, 0.9999504780778234);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // secret
        const secret = scene.add.container(0, 0);
        secret.visible = false;
        this.add(secret);

        // block2
        const block2 = scene.add.rectangle(760, 480, 1520, 960);
        block2.isFilled = true;
        block2.fillColor = 0;
        block2.fillAlpha = 0.2;
        secret.add(block2);

        // secret_bg
        const secret_bg = scene.add.image(770, 480, "clothingcatalog", "secret-bg");
        secret.add(secret_bg);

        // secret_buybtn
        const secret_buybtn = scene.add.image(760, 636, "clothingcatalog", "secret-buybtn");
        secret.add(secret_buybtn);

        // secret_close
        const secret_close = scene.add.image(1005, 211, "clothingcatalog", "secret-close");
        secret_close.setOrigin(0.4095556542217385, 0.42120231297228017);
        secret.add(secret_close);

        // secret_cost
        const secret_cost = scene.add.text(760, 637, "", {});
        secret_cost.setOrigin(0.5, 0.53);
        secret_cost.text = "8888";
        secret_cost.setStyle({ "align": "center", "color": "#5e4700ff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "stroke": "#000" });
        secret.add(secret_cost);

        // secret_name
        const secret_name = scene.add.text(760, 588, "", {});
        secret_name.setOrigin(0.5, 0.53);
        secret_name.text = "Really Really Long Item Name";
        secret_name.setStyle({ "align": "center", "color": "#5e4700ff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "stroke": "#000" });
        secret.add(secret_name);

        // secret_icon
        const secret_icon = scene.add.image(760, 464, "_MISSING");
        secret.add(secret_icon);

        // secret_spinner
        const secret_spinner = scene.add.image(760, 464, "load", "spinner");
        secret.add(secret_spinner);

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

        // block2 (components)
        new Interactive(block2);

        // secret_buybtn (components)
        const secret_buybtnButton = new Button(secret_buybtn);
        secret_buybtnButton.callback = () => this.buySecret();

        // secret_close (components)
        const secret_closeButton = new Button(secret_close);
        secret_closeButton.callback = () => { this.secret.visible = false };

        this.coins = coins;
        this.buttons = buttons;
        this.secret_cost = secret_cost;
        this.secret_name = secret_name;
        this.secret_icon = secret_icon;
        this.secret_spinner = secret_spinner;
        this.secret = secret;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        this.iconLoader = new IconLoader(this.scene);
        this.pagesLoader = new CatalogPagesLoader(this.scene);
        this.photoLoader = new PhotoLoader(this.scene);

        this.addFrontPage();

        this.addColorsPage();

        this.addCustomTShirtPage();

        this.addContentPages();

        this.addClearancePages();

        this.addBackgroundsPage();

        this.addFlagPages();

        this.addBackPage();

        this.bringToTop(buttons);
        this.bringToTop(secret);

        this.pages.forEach((page) => {
            page.visible = false;
        });

        this.tween = this.scene.tweens.add({
            targets: this.secret_spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        window.catalog = {
            wikiMode: () => this.wikiMode()
        }
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

    addCustomTShirtPage() {
        const page = new CustomTShirtPage(this.scene, 760, 480);
        this.add(page);
        this.pages.push(page);
    }

    addContentPages() {
        this.loadItems("new");
    }

    addClearancePages() {
        this.loadItems("clearance");
    }

    loadItems(type) {
        this.catalogJson[type].forEach((p) => {
            const page = this.scene.add.container(0, 0);
            page.visible = false;
            this.add(page);

            const p1 = this.scene.add.image(760, 480, "_MISSING");
            this.pagesLoader.loadClothingPage(p.img, () => {
                p1.setTexture(`catalogs/pages/clothing/${p.img}`);
            });
            page.add(p1);

            p.tags.forEach((tag) => {
                let tagObj;
                if (tag.type === "tag1") {
                    tagObj = new Tag1(this.scene, tag.x, tag.y);
                } else if (tag.type === "tag2") {
                    tagObj = new Tag2(this.scene, tag.x, tag.y);
                } else if (tag.type === "secret") {
                    tagObj = new Secret(this.scene, tag.x, tag.y);
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

    addBackgroundsPage() {
        let page = new BackgroundsPage(this.scene, 760, 480);
        this.pages.push(page);
        this.add(page);
        this.catalogJson.backgrounds.forEach((bg, i) => {
            page.backgrounds[i].setItem(bg, this.photoLoader);
        });
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

    showSecret(id) {
        let item = this.getCrumb('items', id);
        if (!item) return;
        this.currentSecret = id;
        this.secret_icon.visible = false;
        this.secret_spinner.visible = true;
        this.iconLoader.loadLargeIcon(item.id, () => {
            this.secret_icon.setTexture(`clothing/icon/large/${item.id}`);
            this.secret_icon.visible = true;
            this.secret_spinner.visible = false;
        });

        this.secret_name.text = item.name;
        this.secret_cost.text = item.cost;
        this.secret.visible = true;
    }

    buySecret() {
        this.secret.visible = false;
        this.interface.prompt.showItem(this.currentSecret);
    }

    wikiMode() {
        this.world.room.children.list.forEach(child => child.visible = false)
        this.interface.main.children.list.forEach(child => child.visible = false)
        this.interface.border.destroy();
        this.list[0].visible = false;
        this.coins.visible = false;
        this.network.disconnect();
        this.interface.prompt.error.destroy();
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
