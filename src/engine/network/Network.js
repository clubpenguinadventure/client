import DataHandler from './DataHandler'

import io from 'socket.io-client'
const HUB_URL = 'http://localhost:3000'

export default class Network {

    constructor(game) {
        this.game = game

        this.events = new Phaser.Events.EventEmitter()

        this.handler = new DataHandler(this)
        this.client = null

        this.saveUsername = false
        this.savePassword = false
        this.token = null

        // Used to switch back to correct login scene on an error
        this.lastLoginScene = null

        this.worldName
    }

    async login(saveUsername, savePassword, username, password) {
        this.saveUsername = saveUsername
        this.savePassword = savePassword
        this.username = username
        this.password = password

        const response = await fetch(HUB_URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        let data = await response.json()

        this.handler.handle({ action: 'login', args: data })
    }

    async loginWith2FA(code) {
        const response = await fetch(HUB_URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.username,
                password: this.password,
                twoFactorCode: code
            })
        })
        let data = await response.json()

        this.handler.handle({ action: 'login', args: data })
    }

    async tokenLogin(saveUsername, savePassword, username, token) {
        this.saveUsername = saveUsername
        this.savePassword = savePassword
        this.username = username
        this.token = token

        const response = await fetch(HUB_URL + '/token_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                token: token
            })
        })
        let data = await response.json()

        this.handler.handle({ action: 'login', args: data })
    }

    async tokenLoginWith2FA(code) {
        const response = await fetch(HUB_URL + '/token_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.username,
                token: this.token,
                twoFactorCode: code
            })
        })
        let data = await response.json()

        this.handler.handle({ action: 'login', args: data })
    }

    connectGame(world, username, key) {
        this.password = null
        // Only create token if save password is checked and space is available
        let createToken = this.savePassword && Object.keys(this.savedPenguins).length <= 6
        let response = { username: username, key: key, createToken: createToken }

        // If a token exists for the user add the token selector to response,
        // so that the token can be deleted/refreshed by the server
        let token = this.getToken(username)

        if (token) {
            response.token = token.split(':')[0]
        }

        this.connect(world, () => {
            this.send('game_auth', response)
            this.worldName = world

        }, () => {
            this.onConnectionLost()
        })
    }

    connect(world, onConnect, onDisconnect) {
        this.disconnect()

        let config = this.game.crumbs.worlds[world]

        this.client = io.connect(config.host, { path: config.path })

        this.client.once('connect', onConnect)
        this.client.once('disconnect', onDisconnect)
        this.client.on('connect_error', () => this.onConnectionLost())
        this.client.on('message', (message) => this.onMessage(message))
    }

    disconnect() {
        if (this.client) {
            this.client.disconnect()
        }
    }

    send(action, args = {}) {
        if (!this.client) {
            return
        }

        if (localStorage.logging == 'true') {
            console.info('Message sending:', action, args)
        }

        this.client.emit('message', { action: action, args: args })
    }

    // Handlers

    onMessage(message) {
        this.handler.handle(message)
    }

    onConnectionLost() {
        this.disconnect()

        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError('Connection was lost.\nPlease click to learn more', 'Learn More', () => { })
    }

    // Saved penguins

    get isSavedPenguins() {
        if (localStorage.getItem('saved_penguins')) {
            return true
        } else {
            return false
        }
    }

    get savedPenguins() {
        let savedPenguins = localStorage.getItem('saved_penguins')

        if (!savedPenguins) {
            return {}
        }

        try {
            return JSON.parse(savedPenguins)
        } catch (error) {
            return {}
        }
    }

    getToken(username) {
        let save = this.savedPenguins[username.toLowerCase()]

        if (save && save.token) {
            return save.token
        } else {
            return null
        }
    }

}
