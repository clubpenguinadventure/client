
// You can write more code here

/* START OF COMPILED CODE */

export default class ItemCreator extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.nineslice(0, 0, "prompt", "window", 900, 600, 50, 50, 50, 50);
        this.add(bg);

        // secret_selectbox
        const secret_selectbox = scene.add.rectangle(300, -34, 150, 130);
        secret_selectbox.isFilled = true;
        secret_selectbox.fillColor = 475027;
        secret_selectbox.isStroked = true;
        secret_selectbox.strokeColor = 203323;
        secret_selectbox.lineWidth = 5;
        this.add(secret_selectbox);

        // tag2_selectbox
        const tag2_selectbox = scene.add.rectangle(0, -34, 150, 130);
        tag2_selectbox.isFilled = true;
        tag2_selectbox.fillColor = 475027;
        tag2_selectbox.isStroked = true;
        tag2_selectbox.strokeColor = 203323;
        tag2_selectbox.lineWidth = 5;
        this.add(tag2_selectbox);

        // tag1_selectbox
        const tag1_selectbox = scene.add.rectangle(-297, -34, 150, 130);
        tag1_selectbox.isFilled = true;
        tag1_selectbox.fillColor = 475027;
        tag1_selectbox.isStroked = true;
        tag1_selectbox.strokeColor = 16564230;
        tag1_selectbox.lineWidth = 5;
        this.add(tag1_selectbox);

        // header
        const header = scene.add.text(0, -233, "", {});
        header.setOrigin(0.5, 0.5);
        header.text = "Add New Item:";
        header.setStyle({ "align": "center", "color": "#031a3b", "fontFamily": "Proxima Nova", "fontSize": "52px", "fontStyle": "bold", "stroke": "#000" });
        this.add(header);

        // tagtype_header
        const tagtype_header = scene.add.text(-399, -145, "", {});
        tagtype_header.setOrigin(0, 0.5);
        tagtype_header.text = "Tag type:";
        tagtype_header.setStyle({ "color": "#031a3b", "fontFamily": "Proxima Nova", "fontSize": "40px", "fontStyle": "bold", "stroke": "#000" });
        this.add(tagtype_header);

        // tag1_icon
        const tag1_icon = scene.add.image(-300, -51, "clothingcatalog", "buy1");
        tag1_icon.setOrigin(0.504, 0.5098039215686274);
        this.add(tag1_icon);

        // tag2_icon
        const tag2_icon = scene.add.image(0, -49, "clothingcatalog", "buy2");
        tag2_icon.setOrigin(0.504, 0.5098039215686274);
        this.add(tag2_icon);

        // secret_icon
        const secret_icon = scene.add.image(300, -45, "clothingcatalog", "secret-hoveranim0032");
        secret_icon.setOrigin(0.5060240963855421, 0.5060240963855421);
        this.add(secret_icon);

        // id_input_bg
        const id_input_bg = scene.add.rectangle(-308, 177, 200, 50);
        id_input_bg.isFilled = true;
        id_input_bg.fillColor = 475027;
        id_input_bg.isStroked = true;
        id_input_bg.strokeColor = 203323;
        id_input_bg.lineWidth = 5;
        this.add(id_input_bg);

        // tag1_text
        const tag1_text = scene.add.text(-300, 5, "", {});
        tag1_text.setOrigin(0.5, 0.5);
        tag1_text.text = "Tag1";
        tag1_text.setStyle({ "align": "center", "fontFamily": "Proxima Nova", "fontSize": "28px", "stroke": "#000" });
        this.add(tag1_text);

        // tag2_text
        const tag2_text = scene.add.text(0, 5, "", {});
        tag2_text.setOrigin(0.5, 0.5);
        tag2_text.text = "Tag2";
        tag2_text.setStyle({ "align": "center", "fontFamily": "Proxima Nova", "fontSize": "28px", "stroke": "#000" });
        this.add(tag2_text);

        // secret_text
        const secret_text = scene.add.text(300, 5, "", {});
        secret_text.setOrigin(0.5, 0.5);
        secret_text.text = "Secret";
        secret_text.setStyle({ "align": "center", "fontFamily": "Proxima Nova", "fontSize": "28px", "stroke": "#000" });
        this.add(secret_text);

        // itemid_header
        const itemid_header = scene.add.text(-399, 82, "", {});
        itemid_header.setOrigin(0, 0.5);
        itemid_header.text = "Item ID:";
        itemid_header.setStyle({ "color": "#031a3b", "fontFamily": "Proxima Nova", "fontSize": "40px", "fontStyle": "bold", "stroke": "#000" });
        this.add(itemid_header);

        // id_text
        const id_text = scene.add.text(-309, 235, "", {});
        id_text.setOrigin(0.5, 0.5);
        id_text.text = "ID";
        id_text.setStyle({ "align": "center", "color": "#031a3b", "fontFamily": "Proxima Nova", "fontSize": "28px", "stroke": "#000" });
        this.add(id_text);

        // item_text
        const item_text = scene.add.text(314, 82, "", {});
        item_text.setOrigin(0.5, 0.5);
        item_text.text = "Item:";
        item_text.setStyle({ "align": "center", "color": "#031a3b", "fontFamily": "Proxima Nova", "fontSize": "28px", "fontStyle": "bold", "stroke": "#000" });
        this.add(item_text);

        // id_input
        const id_input = scene.add.text(-309, 177, "", {});
        id_input.setOrigin(0.5, 0.5);
        id_input.text = "413";
        id_input.setStyle({ "align": "center", "fixedWidth":170,"fontFamily": "Proxima Nova", "fontSize": "28px", "stroke": "#000" });
        this.add(id_input);

        // item_name
        const item_name = scene.add.text(310, 235, "", {});
        item_name.setOrigin(0.5, 0.5);
        item_name.text = "Item Name";
        item_name.setStyle({ "align": "center", "color": "#031a3b", "fontFamily": "Burbank Small", "fontSize": "28px", "maxLines":2,"stroke": "#000" });
        this.add(item_name);

        // item_icon
        const item_icon = scene.add.image(310, 159, "_MISSING");
        this.add(item_icon);

        // block (components)
        new Interactive(block);

        // secret_selectbox (components)
        new SimpleButton(secret_selectbox);

        // tag2_selectbox (components)
        new SimpleButton(tag2_selectbox);

        // tag1_selectbox (components)
        new SimpleButton(tag1_selectbox);

        // id_input (components)
        new InputText(id_input);

        // item_icon (components)
        const item_iconSimpleButton = new SimpleButton(item_icon);
        item_iconSimpleButton.hoverCallback = () => {this.flag_hover.visible = true};
        item_iconSimpleButton.hoverOutCallback = () => {this.flag_hover.visible = false};
        item_iconSimpleButton.callback = () => this.interface.prompt.showItem(this.item.id);

        this.header = header;
        this.tagtype_header = tagtype_header;
        this.tag1_text = tag1_text;
        this.tag2_text = tag2_text;
        this.secret_text = secret_text;
        this.itemid_header = itemid_header;
        this.id_text = id_text;
        this.item_text = item_text;
        this.id_input = id_input;
        this.item_name = item_name;
        this.item_icon = item_icon;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Text} */
    header;
    /** @type {Phaser.GameObjects.Text} */
    tagtype_header;
    /** @type {Phaser.GameObjects.Text} */
    tag1_text;
    /** @type {Phaser.GameObjects.Text} */
    tag2_text;
    /** @type {Phaser.GameObjects.Text} */
    secret_text;
    /** @type {Phaser.GameObjects.Text} */
    itemid_header;
    /** @type {Phaser.GameObjects.Text} */
    id_text;
    /** @type {Phaser.GameObjects.Text} */
    item_text;
    /** @type {Phaser.GameObjects.Text} */
    id_input;
    /** @type {Phaser.GameObjects.Text} */
    item_name;
    /** @type {Phaser.GameObjects.Image} */
    item_icon;

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
