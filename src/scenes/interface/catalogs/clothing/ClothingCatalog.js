export const preload = {
    key: 'clothingcatalog-pack',
    url: `assets/media/interface/catalogs/clothing/@${localStorage.getItem('scale')}x/clothingcatalog-pack.json`,
    loadString: ['loading', 'clothingcatalog']
}

const RELEASE_DATE = '2025-02-01'
const EXPIRATION_DATE = '2025-03-06'

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import BackgroundsPage from "./BackgroundsPage";
import Tag2 from "./buttons/Tag2";
import Tag1 from "./buttons/Tag1";
import ColorsPage from "./ColorsPage";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
import FlagsPage from "./FlagsPage";
import IconLoader from "@engine/loaders/IconLoader";
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

        // tag_71
        const tag_71 = new Tag2(scene, 880, 389);
        tag_71.angle = 26;
        tag_71.visible = true;
        page14.add(tag_71);

        // tag_74
        const tag_74 = new Tag1(scene, 362, 223);
        tag_74.angle = -34;
        tag_74.visible = true;
        page14.add(tag_74);

        // tag_73
        const tag_73 = new Tag1(scene, 516, 227);
        tag_73.angle = -23;
        tag_73.visible = true;
        page14.add(tag_73);

        // tag_72
        const tag_72 = new Tag1(scene, 642, 280);
        tag_72.angle = -34;
        tag_72.visible = true;
        page14.add(tag_72);

        // page13
        const page13 = scene.add.container(0, 0);
        page13.visible = false;
        this.add(page13);

        // p14
        const p14 = scene.add.image(760, 480, "jan25", "content11");
        page13.add(p14);

        // tag_65
        const tag_65 = new Tag2(scene, 296, 358);
        tag_65.angle = -31;
        tag_65.visible = true;
        page13.add(tag_65);

        // tag_66
        const tag_66 = new Tag2(scene, 628, 117);
        tag_66.angle = 9;
        tag_66.visible = true;
        page13.add(tag_66);

        // tag_67
        const tag_67 = new Tag2(scene, 1045, 479);
        tag_67.angle = -58.00000000000006;
        tag_67.visible = true;
        page13.add(tag_67);

        // tag_64
        const tag_64 = new Tag1(scene, 1244, 575);
        tag_64.angle = 63;
        tag_64.visible = true;
        page13.add(tag_64);

        // tag_68
        const tag_68 = new Tag1(scene, 1141, 186);
        tag_68.angle = -19;
        tag_68.visible = true;
        page13.add(tag_68);

        // tag_70
        const tag_70 = new Tag1(scene, 590, 549);
        tag_70.angle = 29;
        tag_70.visible = true;
        page13.add(tag_70);

        // tag_69
        const tag_69 = new Tag1(scene, 841, 495);
        tag_69.angle = 69;
        tag_69.visible = true;
        page13.add(tag_69);

        // page12
        const page12 = scene.add.container(0, 0);
        page12.visible = false;
        this.add(page12);

        // p13
        const p13 = scene.add.image(760, 480, "jan25", "content10");
        page12.add(p13);

        // tag_58
        const tag_58 = new Tag2(scene, 336, 636);
        tag_58.angle = -46;
        tag_58.visible = true;
        page12.add(tag_58);

        // tag_59
        const tag_59 = new Tag1(scene, 1071, 619);
        tag_59.angle = 31;
        tag_59.visible = true;
        page12.add(tag_59);

        // tag_60
        const tag_60 = new Tag2(scene, 371, 274);
        tag_60.angle = 10;
        tag_60.visible = true;
        page12.add(tag_60);

        // tag_61
        const tag_61 = new Tag2(scene, 884, 510);
        tag_61.angle = -26;
        tag_61.visible = true;
        page12.add(tag_61);

        // tag_62
        const tag_62 = new Tag2(scene, 855, 211);
        tag_62.angle = 20;
        tag_62.visible = true;
        page12.add(tag_62);

        // tag_63
        const tag_63 = new Tag1(scene, 1248, 341);
        tag_63.angle = 69;
        tag_63.visible = true;
        page12.add(tag_63);

        // page11
        const page11 = scene.add.container(0, 0);
        page11.visible = false;
        this.add(page11);

        // p12
        const p12 = scene.add.image(760, 480, "jan25", "content9");
        page11.add(p12);

        // tag_53
        const tag_53 = new Tag2(scene, 413, 696);
        tag_53.angle = -26;
        tag_53.visible = true;
        page11.add(tag_53);

        // tag_54
        const tag_54 = new Tag1(scene, 1224, 381);
        tag_54.angle = 69;
        tag_54.visible = true;
        page11.add(tag_54);

        // tag_55
        const tag_55 = new Tag1(scene, 1108, 671);
        tag_55.angle = 32;
        tag_55.visible = true;
        page11.add(tag_55);

        // tag_56
        const tag_56 = new Tag1(scene, 620, 129);
        tag_56.angle = -18;
        tag_56.visible = true;
        page11.add(tag_56);

        // tag_57
        const tag_57 = new Tag2(scene, 464, 489);
        tag_57.angle = 20;
        tag_57.visible = true;
        page11.add(tag_57);

        // page10
        const page10 = scene.add.container(0, 0);
        page10.visible = false;
        this.add(page10);

        // p11
        const p11 = scene.add.image(760, 480, "jan25", "content8");
        page10.add(p11);

        // tag_51
        const tag_51 = new Tag2(scene, 333, 302);
        tag_51.angle = -15;
        tag_51.visible = true;
        page10.add(tag_51);

        // tag_52
        const tag_52 = new Tag1(scene, 1119, 214);
        tag_52.angle = 25;
        tag_52.visible = true;
        page10.add(tag_52);

        // page9
        const page9 = scene.add.container(0, 0);
        page9.visible = false;
        this.add(page9);

        // p9
        const p9 = scene.add.image(760, 480, "jan25", "content7");
        page9.add(p9);

        // tag_46
        const tag_46 = new Tag2(scene, 309, 585);
        tag_46.angle = -32.00000000000006;
        tag_46.visible = true;
        page9.add(tag_46);

        // tag_47
        const tag_47 = new Tag1(scene, 1215, 301);
        tag_47.angle = 31;
        tag_47.visible = true;
        page9.add(tag_47);

        // tag_48
        const tag_48 = new Tag2(scene, 292, 338);
        tag_48.angle = -33;
        tag_48.visible = true;
        page9.add(tag_48);

        // tag_49
        const tag_49 = new Tag2(scene, 488, 173);
        tag_49.angle = -19;
        tag_49.visible = true;
        page9.add(tag_49);

        // tag_50
        const tag_50 = new Tag1(scene, 643, 343);
        tag_50.angle = 43;
        tag_50.visible = true;
        page9.add(tag_50);

        // page8
        const page8 = scene.add.container(0, 0);
        page8.visible = false;
        this.add(page8);

        // p8
        const p8 = scene.add.image(760, 480, "jan25", "content6");
        page8.add(p8);

        // tag_35
        const tag_35 = new Tag2(scene, 409, 324);
        tag_35.angle = -8;
        tag_35.visible = true;
        page8.add(tag_35);

        // tag_36
        const tag_36 = new Tag1(scene, 622, 615);
        tag_36.angle = -9;
        tag_36.visible = true;
        page8.add(tag_36);

        // tag_37
        const tag_37 = new Tag2(scene, 359, 479);
        tag_37.angle = -8;
        tag_37.visible = true;
        page8.add(tag_37);

        // tag_38
        const tag_38 = new Tag2(scene, 478, 126);
        tag_38.angle = -8;
        tag_38.visible = true;
        page8.add(tag_38);

        // tag_39
        const tag_39 = new Tag2(scene, 829, 539);
        tag_39.angle = -8;
        tag_39.visible = true;
        page8.add(tag_39);

        // tag_40
        const tag_40 = new Tag2(scene, 898, 413);
        tag_40.angle = -8;
        tag_40.visible = true;
        page8.add(tag_40);

        // tag_41
        const tag_41 = new Tag2(scene, 951, 224);
        tag_41.angle = -8;
        tag_41.visible = true;
        page8.add(tag_41);

        // tag_42
        const tag_42 = new Tag2(scene, 1191, 403);
        tag_42.angle = -8;
        tag_42.visible = true;
        page8.add(tag_42);

        // tag_43
        const tag_43 = new Tag1(scene, 655, 172);
        tag_43.angle = -9;
        tag_43.visible = true;
        page8.add(tag_43);

        // tag_44
        const tag_44 = new Tag1(scene, 1065, 624);
        tag_44.angle = -9;
        tag_44.visible = true;
        page8.add(tag_44);

        // tag_45
        const tag_45 = new Tag1(scene, 1125, 157);
        tag_45.angle = -9;
        tag_45.visible = true;
        page8.add(tag_45);

        // page7
        const page7 = scene.add.container(0, 0);
        page7.visible = false;
        this.add(page7);

        // p7
        const p7 = scene.add.image(760, 480, "jan25", "content5");
        page7.add(p7);

        // tag_28
        const tag_28 = new Tag2(scene, 292, 492);
        tag_28.angle = -8;
        tag_28.visible = true;
        page7.add(tag_28);

        // tag_29
        const tag_29 = new Tag1(scene, 638, 508);
        tag_29.angle = -9;
        tag_29.visible = true;
        page7.add(tag_29);

        // tag_30
        const tag_30 = new Tag2(scene, 434, 159);
        tag_30.angle = -8;
        tag_30.visible = true;
        page7.add(tag_30);

        // tag_31
        const tag_31 = new Tag2(scene, 933, 510);
        tag_31.angle = -8;
        tag_31.visible = true;
        page7.add(tag_31);

        // tag_32
        const tag_32 = new Tag2(scene, 917, 664);
        tag_32.angle = -8;
        tag_32.visible = true;
        page7.add(tag_32);

        // tag_33
        const tag_33 = new Tag1(scene, 1160, 397);
        tag_33.angle = -9;
        tag_33.visible = true;
        page7.add(tag_33);

        // tag_34
        const tag_34 = new Tag1(scene, 1198, 192);
        tag_34.angle = -9;
        tag_34.visible = true;
        page7.add(tag_34);

        // page6
        const page6 = scene.add.container(0, 0);
        page6.visible = false;
        this.add(page6);

        // p6
        const p6 = scene.add.image(760, 480, "jan25", "content4");
        page6.add(p6);

        // tag_15
        const tag_15 = new Tag2(scene, 1006, 696);
        tag_15.angle = -8;
        tag_15.visible = true;
        page6.add(tag_15);

        // tag_20
        const tag_20 = new Tag1(scene, 1050, 227);
        tag_20.angle = -9;
        tag_20.visible = true;
        page6.add(tag_20);

        // tag_22
        const tag_22 = new Tag2(scene, 415, 261);
        tag_22.angle = -7;
        tag_22.visible = true;
        page6.add(tag_22);

        // tag_23
        const tag_23 = new Tag2(scene, 355, 446);
        tag_23.angle = -8;
        tag_23.visible = true;
        page6.add(tag_23);

        // tag_25
        const tag_25 = new Tag1(scene, 492, 575);
        tag_25.angle = -9;
        tag_25.visible = true;
        page6.add(tag_25);

        // tag_24
        const tag_24 = new Tag2(scene, 340, 681);
        tag_24.angle = -9;
        tag_24.visible = true;
        page6.add(tag_24);

        // tag_27
        const tag_27 = new Tag2(scene, 868, 508);
        tag_27.angle = -8;
        tag_27.visible = true;
        page6.add(tag_27);

        // tag_26
        const tag_26 = new Tag2(scene, 1206, 411);
        tag_26.angle = -8;
        tag_26.visible = true;
        page6.add(tag_26);

        // page5
        const page5 = scene.add.container(0, 0);
        page5.visible = false;
        this.add(page5);

        // p5
        const p5 = scene.add.image(760, 480, "jan25", "content3");
        page5.add(p5);

        // tag_14
        const tag_14 = new Tag2(scene, 895, 546);
        tag_14.angle = -46;
        tag_14.visible = true;
        page5.add(tag_14);

        // tag_16
        const tag_16 = new Tag2(scene, 366, 268);
        tag_16.angle = -45.00000000000006;
        tag_16.visible = true;
        page5.add(tag_16);

        // tag_17
        const tag_17 = new Tag2(scene, 896, 161);
        tag_17.angle = 9;
        tag_17.visible = true;
        page5.add(tag_17);

        // tag_18
        const tag_18 = new Tag1(scene, 1005, 710);
        tag_18.angle = 19;
        tag_18.visible = true;
        page5.add(tag_18);

        // tag_19
        const tag_19 = new Tag1(scene, 672, 543);
        tag_19.angle = 19;
        tag_19.visible = true;
        page5.add(tag_19);

        // tag_21
        const tag_21 = new Tag1(scene, 1217, 413);
        tag_21.angle = 45;
        tag_21.visible = true;
        page5.add(tag_21);

        // page4
        const page4 = scene.add.container(0, 0);
        page4.visible = false;
        this.add(page4);

        // p4
        const p4 = scene.add.image(760, 480, "jan25", "content2");
        page4.add(p4);

        // tag_6
        const tag_6 = new Tag1(scene, 1202, 349);
        tag_6.angle = 45;
        tag_6.visible = true;
        page4.add(tag_6);

        // tag_8
        const tag_8 = new Tag1(scene, 590, 348);
        tag_8.angle = 0;
        tag_8.visible = true;
        page4.add(tag_8);

        // tag_9
        const tag_9 = new Tag1(scene, 630, 705);
        tag_9.angle = 36;
        tag_9.visible = true;
        page4.add(tag_9);

        // tag_10
        const tag_10 = new Tag2(scene, 331, 470);
        tag_10.angle = -46;
        tag_10.visible = true;
        page4.add(tag_10);

        // tag_11
        const tag_11 = new Tag2(scene, 373, 185);
        tag_11.angle = 1;
        tag_11.visible = true;
        page4.add(tag_11);

        // tag_12
        const tag_12 = new Tag1(scene, 1040, 122);
        tag_12.angle = -25;
        tag_12.visible = true;
        page4.add(tag_12);

        // tag_13
        const tag_13 = new Tag2(scene, 928, 621);
        tag_13.angle = -47;
        tag_13.visible = true;
        page4.add(tag_13);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // p3
        const p3 = scene.add.image(760, 480, "jan25", "content1");
        page3.add(p3);

        // tag2
        const tag2 = new Tag2(scene, 341, 157);
        tag2.angle = 8;
        tag2.visible = true;
        page3.add(tag2);

        // tag
        const tag = new Tag2(scene, 315, 407);
        tag.angle = -45.00000000000006;
        tag.visible = true;
        page3.add(tag);

        // tag1
        const tag1 = new Tag1(scene, 638, 691);
        tag1.angle = 36;
        tag1.visible = true;
        page3.add(tag1);

        // tag_1
        const tag_1 = new Tag1(scene, 799, 456);
        tag_1.angle = -26;
        tag_1.visible = true;
        page3.add(tag_1);

        // tag_2
        const tag_2 = new Tag1(scene, 1106, 710);
        tag_2.angle = 19;
        tag_2.visible = true;
        page3.add(tag_2);

        // tag_3
        const tag_3 = new Tag1(scene, 1190, 412);
        tag_3.angle = -25;
        tag_3.visible = true;
        page3.add(tag_3);

        // tag_4
        const tag_4 = new Tag1(scene, 1177, 185);
        tag_4.angle = -8;
        tag_4.visible = true;
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
        const page1 = scene.add.container(0, 0);
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
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15];

        // block (components)
        new Interactive(block);

        // tag_71 (prefab fields)
        tag_71.item = 262;

        // tag_74 (prefab fields)
        tag_74.item = 131;

        // tag_73 (prefab fields)
        tag_73.item = 308;

        // tag_72 (prefab fields)
        tag_72.item = 239;

        // tag_65 (prefab fields)
        tag_65.item = 1194;

        // tag_66 (prefab fields)
        tag_66.item = 1193;

        // tag_67 (prefab fields)
        tag_67.item = 5001;

        // tag_64 (prefab fields)
        tag_64.item = 3030;

        // tag_68 (prefab fields)
        tag_68.item = 1110;

        // tag_70 (prefab fields)
        tag_70.item = 3018;

        // tag_69 (prefab fields)
        tag_69.item = 3004;

        // tag_58 (prefab fields)
        tag_58.item = 4024;

        // tag_59 (prefab fields)
        tag_59.item = 6054;

        // tag_60 (prefab fields)
        tag_60.item = 1050;

        // tag_61 (prefab fields)
        tag_61.item = 4277;

        // tag_62 (prefab fields)
        tag_62.item = 1195;

        // tag_63 (prefab fields)
        tag_63.item = 5083;

        // tag_53 (prefab fields)
        tag_53.item = 6053;

        // tag_54 (prefab fields)
        tag_54.item = 4275;

        // tag_55 (prefab fields)
        tag_55.item = 373;

        // tag_56 (prefab fields)
        tag_56.item = 5082;

        // tag_57 (prefab fields)
        tag_57.item = 4276;

        // tag_51 (prefab fields)
        tag_51.item = 241;

        // tag_52 (prefab fields)
        tag_52.item = 4149;

        // tag_46 (prefab fields)
        tag_46.item = 4283;

        // tag_47 (prefab fields)
        tag_47.item = 4285;

        // tag_48 (prefab fields)
        tag_48.item = 1203;

        // tag_49 (prefab fields)
        tag_49.item = 1204;

        // tag_50 (prefab fields)
        tag_50.item = 4134;

        // tag_35 (prefab fields)
        tag_35.item = 3096;

        // tag_36 (prefab fields)
        tag_36.item = 6098;

        // tag_37 (prefab fields)
        tag_37.item = 4491;

        // tag_38 (prefab fields)
        tag_38.item = 1175;

        // tag_39 (prefab fields)
        tag_39.item = 3065;

        // tag_40 (prefab fields)
        tag_40.item = 4492;

        // tag_41 (prefab fields)
        tag_41.item = 2045;

        // tag_42 (prefab fields)
        tag_42.item = 5133;

        // tag_43 (prefab fields)
        tag_43.item = 2044;

        // tag_44 (prefab fields)
        tag_44.item = 383;

        // tag_45 (prefab fields)
        tag_45.item = 1214;

        // tag_28 (prefab fields)
        tag_28.item = 4487;

        // tag_29 (prefab fields)
        tag_29.item = 307;

        // tag_30 (prefab fields)
        tag_30.item = 1339;

        // tag_31 (prefab fields)
        tag_31.item = 4488;

        // tag_32 (prefab fields)
        tag_32.item = 6097;

        // tag_33 (prefab fields)
        tag_33.item = 3094;

        // tag_34 (prefab fields)
        tag_34.item = 1340;

        // tag_15 (prefab fields)
        tag_15.item = 6064;

        // tag_20 (prefab fields)
        tag_20.item = 1193;

        // tag_22 (prefab fields)
        tag_22.item = 1341;

        // tag_23 (prefab fields)
        tag_23.item = 4490;

        // tag_25 (prefab fields)
        tag_25.item = 3095;

        // tag_24 (prefab fields)
        tag_24.item = 363;

        // tag_27 (prefab fields)
        tag_27.item = 4489;

        // tag_26 (prefab fields)
        tag_26.item = 5132;

        // tag_14 (prefab fields)
        tag_14.item = 307;

        // tag_16 (prefab fields)
        tag_16.item = 657;

        // tag_17 (prefab fields)
        tag_17.item = 1085;

        // tag_18 (prefab fields)
        tag_18.item = 360;

        // tag_19 (prefab fields)
        tag_19.item = 4296;

        // tag_21 (prefab fields)
        tag_21.item = 4107;

        // tag_6 (prefab fields)
        tag_6.item = 1212;

        // tag_8 (prefab fields)
        tag_8.item = 2029;

        // tag_9 (prefab fields)
        tag_9.item = 6060;

        // tag_10 (prefab fields)
        tag_10.item = 4294;

        // tag_11 (prefab fields)
        tag_11.item = 1211;

        // tag_12 (prefab fields)
        tag_12.item = 5088;

        // tag_13 (prefab fields)
        tag_13.item = 4295;

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
        this.iconLoader = new IconLoader(this.scene);

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
                        released: RELEASE_DATE,
                        expired: EXPIRATION_DATE,
                        location: "Penguin Style",
                        page: index + 1
                    });
                }
            });
        });
        console.log(list);
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
