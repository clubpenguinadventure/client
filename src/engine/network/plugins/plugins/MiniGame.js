import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'game_over': this.gameOver
        }
    }

    gameOver(args) {
        if (this.world.client.activeSeat) {
            this.world.events.once('leftseat', () => this.gameOver(args))
            return
        }

        this.world.client.coins+=args.coins

        // Difference in coins = coins earned
        this.interface.prompt.showCoin(args.coins, args.game, args.stampCategory, args.earnedStamps)

        this.interface.refreshPlayerCard()
        this.interface.updateCatalogCoins(args.coins)
    }

}
