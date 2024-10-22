import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class BuddyItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.icon;
        /** @type {Phaser.GameObjects.Text} */
        this.username;


        // buddy_item
        const buddy_item = scene.add.image(0, 0, "main", "buddy/item");
        this.add(buddy_item);

        // icon
        const icon = scene.add.image(-137, 0, "main", "buddy/icon-offline");
        this.add(icon);

        // username
        const username = scene.add.text(25, 0, "", {});
        username.setOrigin(0.5, 0.5);
        username.setStyle({ "fixedWidth":270,"fontFamily": "Proxima Nova", "fontSize": "24px" });
        this.add(username);

        // buddy_item (components)
        const buddy_itemButton = new Button(buddy_item);
        buddy_itemButton.callback = () => this.onClick();
        buddy_itemButton.activeFrame = false;

        this.icon = icon;
        this.username = username;

        /* START-USER-CTR-CODE */

        this.id

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setItem(buddy) {
        if (!buddy) {
            return this.clearItem()
        }

        this.id = buddy.id
        this.username.text = buddy.username

        let relationship = this.world.getRelationship(buddy.id)
        let texture = `buddy/icon-${relationship}`

        this.icon.setTexture('main', texture)
    }

    clearItem() {
        this.id = null
        this.username.text = ''

        this.icon.setTexture('main', 'buddy/icon-offline')
    }

    onClick() {
        if (!this.id) {
            return
        }

        if (this.parentContainer.listType == 'ignores') {
            this.showRemoveIgnore()
            return
        }

        this.interface.showCard(this.id)
    }

    showRemoveIgnore() {
        let text = `Would you like to remove ${this.username.text}\nfrom your ignore list?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('ignore_remove', { id: this.id })

            this.interface.prompt.showWindow('Done', 'single')
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
