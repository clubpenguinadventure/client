export const preload = {
    key: 'stampbook-pack',
    url: 'assets/media/interface/game/stampbook/stampbook-pack.json',
    loadString: ['loading', 'Stampbook']
}
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
import Selectors from "./Selectors";
import Icon from "./thumbs/Icon";
import Pattern from "./thumbs/Pattern";
import Highlight from "./thumbs/Highlight";
import Color from "./thumbs/Color";
import Polaroid from "./Polaroid";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Stampbook extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // editor_bg_1
        const editor_bg_1 = scene.add.rectangle(0, 0, 1520, 960);
        editor_bg_1.isFilled = true;
        editor_bg_1.fillColor = 0;
        editor_bg_1.fillAlpha = 0.2;
        this.add(editor_bg_1);

        // edit_btn
        const edit_btn = scene.add.image(701, 419, "stampbook", "edit-btn");
        this.add(edit_btn);

        // editor_bg
        const editor_bg = scene.add.image(0.015380859375, -0.0111083984375, "stampbook", "editor-bg");
        editor_bg.visible = false;
        this.add(editor_bg);

        // front_cover
        const front_cover = scene.add.container(15, 10);
        this.add(front_cover);

        // front_cover_background
        const front_cover_background = scene.add.image(0, 0, "stampbook-assets", "color_patterns/1_1");
        front_cover.add(front_cover_background);

        // front_cover_clasp
        const front_cover_clasp = scene.add.image(581, 21, "stampbook-assets", "highlight/1");
        front_cover.add(front_cover_clasp);

        // front_cover_icon
        const front_cover_icon = scene.add.image(561, 13, "stampbook-assets", "clasp/1");
        front_cover_icon.setOrigin(0.5, 0.5039370078740157);
        front_cover.add(front_cover_icon);

        // closebtn
        const closebtn = scene.add.image(576, -317, "stampbook", "closebtn");
        front_cover.add(closebtn);

        // editor
        const editor = scene.add.container(0, 0);
        editor.visible = false;
        this.add(editor);

        // coverlist
        const coverlist = scene.add.image(50, -439, "stampbook", "coverlist");
        coverlist.setOrigin(0.5003933910306845, 0.5);
        editor.add(coverlist);

        // remove_hint
        const remove_hint = scene.add.image(81, -421, "stampbook", "remove-hint");
        remove_hint.setOrigin(0.5003679175864606, 0.5042735042735043);
        remove_hint.visible = false;
        editor.add(remove_hint);

        // leftbar
        const leftbar = scene.add.container(-695, -280);
        editor.add(leftbar);

        // leftbar_img
        const leftbar_img = scene.add.image(0, 84, "stampbook", "leftbar");
        leftbar_img.setOrigin(0.5, 0.5007407407407407);
        leftbar.add(leftbar_img);

        // blue_stampcat_bg
        const blue_stampcat_bg = scene.add.image(-1, -163, "stampbook", "blue-stampcat-bg");
        blue_stampcat_bg.setOrigin(0.5022222222222222, 0.5);
        leftbar.add(blue_stampcat_bg);

        // stampcat_arrow
        const stampcat_arrow = scene.add.triangle(96, -144.5, 0, 0, 10, 7.5, 0, 15);
        stampcat_arrow.isFilled = true;
        stampcat_arrow.fillColor = 2500134;
        leftbar.add(stampcat_arrow);

        // icon_selector
        const icon_selector = new Selectors(scene, 256, 345);
        icon_selector.visible = false;
        leftbar.add(icon_selector);

        // pattern_selector
        const pattern_selector = new Selectors(scene, 256, 230);
        pattern_selector.visible = false;
        leftbar.add(pattern_selector);

        // highlight_selector
        const highlight_selector = new Selectors(scene, 256, 115);
        highlight_selector.visible = false;
        leftbar.add(highlight_selector);

        // colors_selector
        const colors_selector = new Selectors(scene, 256, 0);
        colors_selector.visible = false;
        leftbar.add(colors_selector);

        // editor_selectors_icon
        const editor_selectors_icon = scene.add.image(20, 345, "stampbook", "editor-selectors");
        editor_selectors_icon.setOrigin(0.5038759689922481, 0.5);
        leftbar.add(editor_selectors_icon);

        // editor_selectors_pattern
        const editor_selectors_pattern = scene.add.image(20, 230, "stampbook", "editor-selectors");
        editor_selectors_pattern.setOrigin(0.5038759689922481, 0.5);
        leftbar.add(editor_selectors_pattern);

        // editor_selectors_highlight
        const editor_selectors_highlight = scene.add.image(20, 115, "stampbook", "editor-selectors");
        editor_selectors_highlight.setOrigin(0.5038759689922481, 0.5);
        leftbar.add(editor_selectors_highlight);

        // editor_selectors_color
        const editor_selectors_color = scene.add.image(20, 0, "stampbook", "editor-selectors");
        editor_selectors_color.setOrigin(0.5038759689922481, 0.5);
        leftbar.add(editor_selectors_color);

        // icon_prefab
        const icon_prefab = new Icon(scene, 21, 345);
        leftbar.add(icon_prefab);

        // pattern_prefab
        const pattern_prefab = new Pattern(scene, 21, 230);
        leftbar.add(pattern_prefab);

        // highlight_prefab
        const highlight_prefab = new Highlight(scene, 21, 115);
        leftbar.add(highlight_prefab);

        // color_prefab
        const color_prefab = new Color(scene, 21, 0);
        leftbar.add(color_prefab);

        // save_btn
        const save_btn = scene.add.image(699, 420, "stampbook", "save-btn");
        save_btn.setOrigin(0.5070422535211268, 0.5);
        editor.add(save_btn);

        // book
        const book = scene.add.container(-672, -377);
        book.visible = false;
        this.add(book);

        // stampbook_page_background
        const stampbook_page_background = scene.add.image(672, 377, "_MISSING");
        book.add(stampbook_page_background);

        // stampbook_bg
        const stampbook_bg = scene.add.image(672, 377, "stampbook", "stampbook-bg");
        book.add(stampbook_bg);

        // insidepage_bg_cntr
        const insidepage_bg_cntr = scene.add.container(672, 377);
        book.add(insidepage_bg_cntr);

        // pageturn_right
        const pageturn_right = scene.add.image(1284, 657, "stampbook", "pageturn-right");
        pageturn_right.setOrigin(0.5, 0.502283105022831);
        book.add(pageturn_right);

        // pageturn_left
        const pageturn_left = scene.add.image(0, 681, "stampbook", "pageturn-left");
        book.add(pageturn_left);

        // stampbook_closebtn
        const stampbook_closebtn = scene.add.image(1295, 52, "stampbook", "stampbook-closebtn");
        stampbook_closebtn.setOrigin(0.5, 0.5023255813953489);
        book.add(stampbook_closebtn);

        // header_txt
        const header_txt = scene.add.text(111, 31, "", {});
        header_txt.setOrigin(0, 0.5);
        header_txt.text = "Contents";
        header_txt.setStyle({ "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "64px", "fontStyle": "bold" });
        book.add(header_txt);

        // totalstamps_txt
        const totalstamps_txt = scene.add.text(1064, 0, "", {});
        totalstamps_txt.setOrigin(1, 0.5);
        totalstamps_txt.text = "Total Stamps:";
        totalstamps_txt.setStyle({ "align": "right", "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "36px" });
        book.add(totalstamps_txt);

        // totalstamps_num
        const totalstamps_num = scene.add.text(1064, 42, "", {});
        totalstamps_num.setOrigin(1, 0.5);
        totalstamps_num.text = "888/888";
        totalstamps_num.setStyle({ "align": "right", "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "36px", "fontStyle": "bold" });
        book.add(totalstamps_num);

        // page_num
        const page_num = scene.add.text(1112, 20, "", {});
        page_num.setOrigin(0, 0.5);
        page_num.text = "Page\n99 of 99";
        page_num.setStyle({ "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "28px" });
        book.add(page_num);

        // guide
        const guide = scene.add.image(1106, 330, "stampbook", "guide");
        guide.visible = false;
        book.add(guide);

        // polaroids_cntr
        const polaroids_cntr = scene.add.container(885, 114);
        book.add(polaroids_cntr);

        // polaroid_bg
        const polaroid_bg = scene.add.image(160, 307, "stampbook", "polaroid-bg");
        polaroid_bg.setOrigin(0.5, 0.5008025682182986);
        polaroids_cntr.add(polaroid_bg);

        // polaroid_3_stampcount
        const polaroid_3_stampcount = scene.add.text(246, 467, "", {});
        polaroid_3_stampcount.angle = 10;
        polaroid_3_stampcount.setOrigin(1, 0.5);
        polaroid_3_stampcount.text = "88";
        polaroid_3_stampcount.setStyle({ "align": "right", "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "28px" });
        polaroids_cntr.add(polaroid_3_stampcount);

        // polaroid_3_stamp
        const polaroid_3_stamp = scene.add.image(262, 470, "stampbook", "polaroid-3-stamp");
        polaroid_3_stamp.setOrigin(0.5, 0.5161290322580645);
        polaroids_cntr.add(polaroid_3_stamp);

        // polaroid_2_stampcount
        const polaroid_2_stampcount = scene.add.text(78, 268, "", {});
        polaroid_2_stampcount.angle = -20;
        polaroid_2_stampcount.setOrigin(1, 0.5);
        polaroid_2_stampcount.text = "88";
        polaroid_2_stampcount.setStyle({ "align": "right", "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "28px" });
        polaroids_cntr.add(polaroid_2_stampcount);

        // polaroid_2_stamp
        const polaroid_2_stamp = scene.add.image(98, 262, "stampbook", "polaroid-2-stamp");
        polaroid_2_stamp.setOrigin(0.5151515151515151, 0.5151515151515151);
        polaroids_cntr.add(polaroid_2_stamp);

        // polaroid_1_stampcount
        const polaroid_1_stampcount = scene.add.text(256, 93, "", {});
        polaroid_1_stampcount.angle = 10;
        polaroid_1_stampcount.setOrigin(1, 0.5);
        polaroid_1_stampcount.text = "88";
        polaroid_1_stampcount.setStyle({ "align": "right", "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "28px" });
        polaroids_cntr.add(polaroid_1_stampcount);

        // polaroid_1_stamp
        const polaroid_1_stamp = scene.add.image(274, 97, "stampbook", "polaroid-1-stamp");
        polaroid_1_stamp.setOrigin(0.5, 0.5161290322580645);
        polaroids_cntr.add(polaroid_1_stamp);

        // polaroid_3_cntr
        const polaroid_3_cntr = scene.add.container(228, 366);
        polaroid_3_cntr.visible = false;
        polaroids_cntr.add(polaroid_3_cntr);

        // polaroid_3_sprite
        const polaroid_3_sprite = new Polaroid(scene, 4, 97);
        polaroid_3_cntr.add(polaroid_3_sprite);

        // polaroid_3
        const polaroid_3 = scene.add.image(0, 113, "stampbook", "polaroid-3");
        polaroid_3_cntr.add(polaroid_3);

        // polaroid_3_tape
        const polaroid_3_tape = scene.add.image(39, 3, "stampbook", "polaroid-3-tape");
        polaroid_3_tape.setOrigin(0.5, 0.5161290322580645);
        polaroid_3_cntr.add(polaroid_3_tape);

        // polaroid_2_cntr
        const polaroid_2_cntr = scene.add.container(0, 192);
        polaroid_2_cntr.visible = false;
        polaroids_cntr.add(polaroid_2_cntr);

        // polaroid_2_sprite
        const polaroid_2_sprite = new Polaroid(scene, 62, 80);
        polaroid_2_cntr.add(polaroid_2_sprite);

        // polaroid_2
        const polaroid_2 = scene.add.image(67, 94, "stampbook", "polaroid-2");
        polaroid_2_cntr.add(polaroid_2);

        // polaroid_2_tape
        const polaroid_2_tape = scene.add.image(-1, 1, "stampbook", "polaroid-2-tape");
        polaroid_2_tape.setOrigin(0.5074626865671642, 0.5);
        polaroid_2_cntr.add(polaroid_2_tape);

        // polaroid_1_cntr
        const polaroid_1_cntr = scene.add.container(241, 0);
        polaroid_1_cntr.visible = false;
        polaroids_cntr.add(polaroid_1_cntr);

        // polaroid_1_sprite
        const polaroid_1_sprite = new Polaroid(scene, 3, 93);
        polaroid_1_cntr.add(polaroid_1_sprite);

        // polaroid_1
        const polaroid_1 = scene.add.image(0, 107, "stampbook", "polaroid-1");
        polaroid_1_cntr.add(polaroid_1);

        // polaroid_1_tape
        const polaroid_1_tape = scene.add.image(30, 0, "stampbook", "polaroid-1-tape");
        polaroid_1_cntr.add(polaroid_1_tape);

        // editor_bg_1 (components)
        new Interactive(editor_bg_1);

        // edit_btn (components)
        const edit_btnButton = new Button(edit_btn);
        edit_btnButton.callback = () => this.editStampbook();

        // editor_bg (components)
        new Interactive(editor_bg);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.callback = () => this.close();

        // icon_selector (prefab fields)
        icon_selector.selectorType = "Icons";

        // pattern_selector (prefab fields)
        pattern_selector.selectorType = "Patterns";

        // highlight_selector (prefab fields)
        highlight_selector.selectorType = "Highlights";

        // icon_prefab (prefab fields)
        icon_prefab.rootModule = true;

        // pattern_prefab (prefab fields)
        pattern_prefab.rootModule = true;

        // highlight_prefab (prefab fields)
        highlight_prefab.rootModule = true;

        // color_prefab (prefab fields)
        color_prefab.rootModule = true;

        // save_btn (components)
        const save_btnButton = new Button(save_btn);
        save_btnButton.callback = () => this.saveStampbook();

        // pageturn_right (components)
        new Button(pageturn_right);

        // pageturn_left (components)
        new Button(pageturn_left);

        // stampbook_closebtn (components)
        new Button(stampbook_closebtn);

        this.editor_bg_1 = editor_bg_1;
        this.editor_bg = editor_bg;
        this.front_cover_background = front_cover_background;
        this.front_cover_clasp = front_cover_clasp;
        this.front_cover_icon = front_cover_icon;
        this.icon_selector = icon_selector;
        this.pattern_selector = pattern_selector;
        this.highlight_selector = highlight_selector;
        this.colors_selector = colors_selector;
        this.icon_prefab = icon_prefab;
        this.pattern_prefab = pattern_prefab;
        this.highlight_prefab = highlight_prefab;
        this.color_prefab = color_prefab;
        this.leftbar = leftbar;
        this.editor = editor;
        this.stampbook_page_background = stampbook_page_background;
        this.insidepage_bg_cntr = insidepage_bg_cntr;
        this.guide = guide;
        this.polaroid_3_stampcount = polaroid_3_stampcount;
        this.polaroid_2_stampcount = polaroid_2_stampcount;
        this.polaroid_1_stampcount = polaroid_1_stampcount;
        this.polaroid_3_sprite = polaroid_3_sprite;
        this.polaroid_2_sprite = polaroid_2_sprite;
        this.polaroid_1_sprite = polaroid_1_sprite;
        this.polaroids_cntr = polaroids_cntr;

        /* START-USER-CTR-CODE */
        this.interface.stampbook = this;
        this.playerdata = {
            "color": 1,
            "pattern": 0,
            "highlight": 1,
            "clasp": 1,
        }

        this.leftbar.onZoneOver = (id, caller) => {
            [this.icon_selector, this.pattern_selector, this.highlight_selector, this.colors_selector].forEach(selector => {
                selector.visible = false;
                selector.preventingClose = [];
            });

            let selector;
            switch (caller) {
                case "icon":
                    selector = this.icon_selector;
                    break;
                case "pattern":
                    selector = this.pattern_selector;
                    break;
                case "highlight":
                    selector = this.highlight_selector;
                    break;
                default:
                    selector = this.colors_selector;
                    break;
            }
            if (!selector.inited) {
                selector.init();
                selector.inited = true;
            }
            selector.visible = true;
            selector.preventClose(this);
        }

        this.leftbar.onZoneOut = (id, caller) => {
            let selector;
            switch (caller) {
                case "icon":
                    selector = this.icon_selector;
                    break;
                case "pattern":
                    selector = this.pattern_selector;
                    break;
                case "highlight":
                    selector = this.highlight_selector;
                    break;
                default:
                    selector = this.colors_selector;
                    break;
            }
            selector.unpreventClose(this);
        }

        this.updateColor(this.playerdata.color);
        this.updatePattern(this.playerdata.pattern);
        this.updateHighlight(this.playerdata.highlight);
        this.updateIcon(this.playerdata.clasp);

        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Rectangle} */
    editor_bg_1;
    /** @type {Phaser.GameObjects.Image} */
    editor_bg;
    /** @type {Phaser.GameObjects.Image} */
    front_cover_background;
    /** @type {Phaser.GameObjects.Image} */
    front_cover_clasp;
    /** @type {Phaser.GameObjects.Image} */
    front_cover_icon;
    /** @type {Selectors} */
    icon_selector;
    /** @type {Selectors} */
    pattern_selector;
    /** @type {Selectors} */
    highlight_selector;
    /** @type {Selectors} */
    colors_selector;
    /** @type {Icon} */
    icon_prefab;
    /** @type {Pattern} */
    pattern_prefab;
    /** @type {Highlight} */
    highlight_prefab;
    /** @type {Color} */
    color_prefab;
    /** @type {Phaser.GameObjects.Container} */
    leftbar;
    /** @type {Phaser.GameObjects.Container} */
    editor;
    /** @type {Phaser.GameObjects.Image} */
    stampbook_page_background;
    /** @type {Phaser.GameObjects.Container} */
    insidepage_bg_cntr;
    /** @type {Phaser.GameObjects.Image} */
    guide;
    /** @type {Phaser.GameObjects.Text} */
    polaroid_3_stampcount;
    /** @type {Phaser.GameObjects.Text} */
    polaroid_2_stampcount;
    /** @type {Phaser.GameObjects.Text} */
    polaroid_1_stampcount;
    /** @type {Polaroid} */
    polaroid_3_sprite;
    /** @type {Polaroid} */
    polaroid_2_sprite;
    /** @type {Polaroid} */
    polaroid_1_sprite;
    /** @type {Phaser.GameObjects.Container} */
    polaroids_cntr;

    /* START-USER-CODE */

    editStampbook() {
        this.editor_bg.visible = true;
        this.editor.visible = true;
    }

    saveStampbook() {
        this.editor_bg.visible = false;
        this.editor.visible = false;
    }

    close() {
        for (let event of ["Color", "Pattern", "Highlight", "Icon"]) {
            this.interface.events.off(`updateStampbook${event}`);
        }
        this.interface.destroyWidget(this)
    }

    updateColor(id) {
        if (id == this.color_prefab.id) return;
        this.playerdata.color = id;
        this.front_cover_background.setTexture(`stampbook-assets`, `color_patterns/${id}_${this.playerdata.pattern}`);
        this.interface.events.emit("updateStampbookColor", id);
        this.color_prefab.setId(id);
        if (!this.crumbs.cover.color_highlight[id].includes(this.playerdata.highlight)) this.updateHighlight(this.crumbs.cover.color_highlight[id][0]);
    }

    updatePattern(id) {
        if (id == this.pattern_prefab.id) id = 0;
        this.playerdata.pattern = id;
        this.front_cover_background.setTexture(`stampbook-assets`, `color_patterns/${this.playerdata.color}_${id}`);
        this.interface.events.emit("updateStampbookPattern", id);
        this.pattern_prefab.setId(id);
    }

    updateHighlight(id) {
        if (id == this.highlight_prefab.id) return
        this.playerdata.highlight = id;
        this.front_cover_clasp.setTexture(`stampbook-assets`, `highlight/${id}`);
        this.interface.events.emit("updateStampbookHighlight", id);
        this.highlight_prefab.setId(id);
    }

    updateIcon(id) {
        if (id == this.icon_prefab.id) return;
        this.playerdata.clasp = id;
        this.front_cover_icon.setTexture(`stampbook-assets`, `clasp/${id}`);
        this.interface.events.emit("updateStampbookIcon", id);
        this.icon_prefab.setId(id);
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
