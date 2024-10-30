import Boot from '@engine/boot/Boot'
import Network from '@engine/network/Network'
import SoundManager from '@engine/sound/SoundManager'

import game from './data/game'
import './styles/game.css'


export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)

        this.logBanner()

        // Removes focus from active element
        this.canvas.addEventListener('click', () => document.activeElement.blur())

        this.crumbs = config.crumbs
        this.network = new Network(this)

        // howler.js based sound manager
        this.soundManager = new SoundManager(this)

        this.scene.add('Boot', Boot, true)

        document.onkeydown = (event) => {
            if (this.interface.isInputActive) {
                event.preventDefault()
                this.interface.input.keyboard.emit('keydown', event)
            }
        }

        document.onkeyup = (event) => {
            if (this.interface.isInputActive) {
                event.preventDefault()
                this.interface.input.keyboard.emit('keyup', event)
            }
        }
    }

    get interface() {
        return this.scene.getScene('InterfaceController')
    }

    logBanner() {
        // Please leave this line here for credit purposes
        console.info('%cYukon Client\nhttps://github.com/wizguin/yukon', 'font-size: 25px;')
        console.info(`Version ${VERSION}`)
    }

}

window.onload = () => {
    new Game(game)
}
