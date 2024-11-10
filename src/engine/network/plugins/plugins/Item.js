import Plugin from '../Plugin'


export default class Item extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'update_player': this.updatePlayer,
            'add_item': this.addItem
        }
    }

    get client() {
        return this.world.client
    }

    updatePlayer(args) {
        if (!this.world.room.isReady) {
            return this.world.room.updateWaiting(args.id, { [args.slot]: args.item });
        }
    
        this.world.room.penguins[args.id].update(args.item, args.slot);
    
        if (args.id == this.client.id) {
            // Loop through each inventory slot and change the frame for worn items
            this.world.interface.main.playerCard.inventory.slots.forEach(slot => {
                // Check if the slot has an item and it belongs to the player's inventory
                if (slot.item && Object.values(this.world.client.penguin.items.flat).includes(slot.item.id)) {
                    // Set the frame to 'large-box-worn' for items in the player's inventory
                    slot.setTexture('main', 'large-box-worn');
                    // Optionally, set tint or other visual effects
                } else if (slot.input.enabled) {
                    // Reset the frame to 'large-box' if it's not the worn item
                    slot.setTexture('main', 'large-box');
                } else {
                    // Set the frame to 'large-box-empty' for empty slots
                    slot.setTexture('main', 'large-box-empty');
                }
            });
        }
    }
    

    addItem(args) {
        const item = parseInt(args.item)

        // If item already in inventory
        if (this.client.inventory[args.slot].includes(item)) return

        // Update player data
        this.client.coins = args.coins
        this.client.inventory[args.slot].push(item)
        this.client.inventory[args.slot].sort((a, b) => a - b)

        // Update player card
        this.interface.refreshPlayerCard()

        // Update catalog coins
        this.interface.updateCatalogCoins(args.coins)

        // Check no purchase popup
        const data = this.getCrumb('items', item)
        if ('no_purchase_popup' in data && data.no_purchase_popup === 1) {
            return
        }

        // Show prompt
        let text = `${args.name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

}
