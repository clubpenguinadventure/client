import Plugin from '../Plugin'


export default class Login extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'login': this.login,
            'game_auth': this.gameAuth
        }
    }

    get loginScene() {
        return this.scene.getScene('Login')
    }

    login(args) {
        this.interface.hideLoading()

        if (args.success) {
            if (this.crumbs.worlds.length == 1) {
                this.interface.showLoading(`${this.getString('joining')} ${this.crumbs.worlds[0].id}`)
                this.network.connectGame(this.crumbs.worlds[0].id, args.username, args.key)
                return
            }

            return this.scene.start('Servers', args)
        }

        if (!this.network.lastLoginScene) {
            return this.scene.start('Login')
        }

        let scene = this.scene.getScene(this.network.lastLoginScene)

        if (args.message == "Invalid two-factor authentication code") {
            scene.events.once('create', () => scene.show2FA())
        } else {
            scene.events.once('create', () => this.onLoginError(args.message))
        }

        this.scene.start(this.network.lastLoginScene)
    }

    onLoginError(message) {
        this.loginScene.events.emit('hideinput')

        this.interface.prompt.showError(message, 'Okay', () => {
            this.loginScene.events.emit('showinput')

            this.interface.prompt.error.visible = false
        })
    }

    gameAuth(args) {
        if (args.token) {
            this.network.token = args.token
        }

        if (args.success) {
            this.network.send('join_server')
        }
    }

}
