export default class BaseScene extends Phaser.Scene {

    create() {
        if (this._create) this._create()
        if (window.updateScaling) window.updateScaling()
    }

    init() {
        this.input.on('pointerover', () => this.interface.resetCursor(this))
    }

    get crumbs() {
        return this.game.crumbs
    }

    get network() {
        return this.game.network
    }

    get soundManager() {
        return this.game.soundManager
    }

    get interface() {
        return this.scene.get('InterfaceController')
    }

    get world() {
        return this.scene.get('WorldController')
    }

    get ruffle() {
        return this.scene.get('RuffleController')
    }

    get scaleMultiplier() {
        return localStorage.getItem('scale') || 2
    }

    getCrumb(collection, id) {
        return this.world.crumbs[collection].filter(c => c.id == id)[0]
    }

    getString(...args) {
        return args.map(id => this.getCrumb('strings', [id.toLowerCase()])?.string || id).join(' ')
    }

    getFormatString(id, ...args) {
        return Phaser.Utils.String.Format(this.getCrumb('strings', [id.toLowerCase()])?.string, args)
    }

    setMusic() {
        if (this.music) {
            this.playMusic(this.music)
        } else {
            this.stopMusic()
        }
    }

    playMusic(key) {
        this.soundManager.playMusic(key)
    }

    stopMusic() {
        this.soundManager.stopMusic()
    }

}
