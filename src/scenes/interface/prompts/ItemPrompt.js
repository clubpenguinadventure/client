import ItemPromptLoader from '@engine/loaders/ItemPromptLoader'


/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import NineSlice from "../../components/NineSlice";
import DualButtons from "./buttons/DualButtons";
import PromptIcon from "./icon/PromptIcon";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ItemPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {DualButtons} */
        this.dual;
        /** @type {PromptIcon} */
        this.promptIcon;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.rectangle(0, -40, 708, 584);
        bg.isFilled = true;
        bg.fillColor = 164045;
        this.add(bg);

        // text
        const text = scene.add.text(0, 0, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "You have found a party hat.\nWould you like to pick it up?";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Proxima Nova", "fontSize": "32px" });
        this.add(text);

        // dual
        const dual = new DualButtons(scene, 0, 130);
        this.add(dual);

        // promptIcon
        const promptIcon = new PromptIcon(scene, 0, -182);
        this.add(promptIcon);

        // block (components)
        new Interactive(block);

        // bg (components)
        const bgNineSlice = new NineSlice(bg);
        bgNineSlice.corner = 50;

        this.bg = bg;
        this.text = text;
        this.dual = dual;
        this.promptIcon = promptIcon;

        /* START-USER-CTR-CODE */

        this.text.setWordWrapWidth(616, true)

        this.loader = new ItemPromptLoader(scene, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(text, loadConfig = {}, callback = () => this.close()) {
        this.text.text = text
        this.callback = callback

        super.show()

        this.promptIcon.loadIcon(loadConfig)
    }

    showItem(id) {
        if (this.inventoryIncludes(id)) {
            return this.interface.prompt.showError('You already have this item.')
        }

        const data = this.crumbs.items[id]
        if (!data) return

        const loadConfig = {
            key: `clothing/icon/240/${id}`,
            url: `/assets/media/clothing/icon/240/${id}.png`
        }

        this.show(this.getBuyText(data.name, data.cost), loadConfig, () => this.sendAddItem(id))
    }

    showFurniture(id) {
        const data = this.crumbs.furniture[id]
        if (!data) return

        const loadConfig = {
            key: `furniture/icon/@5x/${id}`,
            url: `/assets/media/furniture/icon/@5x/${id}.png`,
            scale: 0.65
        }

        this.show(this.getBuyText(data.name, data.cost), loadConfig, () => this.sendAddFurniture(id))
    }

    showAdopt(id) {
        const data = this.crumbs.pets[id]
        if (!data) return

        const name = data.name.toLowerCase()

        this.showPet(name, this.getFormatString('adopt_pet', data.cost), () => this.showAdoptName(id))
    }

    showPetFood(pet) {
        this.showPet('food', this.getString('buy_pet_food'), () => this.sendPet('pet_feed', pet))
    }

    showPetBath(pet) {
        this.showPet('bath', this.getString('buy_pet_bath'), () => this.sendPet('pet_bath', pet))
    }

    showPetGum(pet) {
        this.showPet('gum', this.getString('buy_pet_gum'), () => this.sendPet('pet_gum', pet))
    }

    showPetCookie(pet) {
        this.showPet('cookie', this.getString('buy_pet_cookie'), () => this.sendPet('pet_cookie', pet))
    }

    showPet(name, text, callback) {
        const loadConfig = {
            key: `pet/icon/${name}`,
            url: `/assets/media/pet/icons/${name}.png`
        }

        // Add current coins string
        text = `${text} ${this.getFormatString('num_coins', this.world.client.coins)}`

        this.show(text, loadConfig, callback)
    }

    noCallback() {
        this.close()
    }

    send(action, args) {
        this.network.send(action, args)
        this.close()
    }

    sendAddItem(id) {
        this.send('add_item', { item: id })
    }

    sendAddFurniture(id) {
        this.send('add_furniture', { furniture: id })
    }

    sendPet(action, pet) {
        this.send(action, { id: pet.id })
        this.interface.main.petCard.close()
    }

    showAdoptName(id) {
        this.interface.prompt.showAdoptName(id)
        this.close()
    }

    getBuyText(name, cost) {
        if (cost < 1) {
            return `You have found a ${name}.\nWould you like to pick it up?`
        } else {
            return `Would you like to buy ${name} for ${cost} coins. You currently have ${this.world.client.coins} coins.`
        }
    }

    inventoryIncludes(item) {
        return Object.values(this.world.client.inventory).flat().includes(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
