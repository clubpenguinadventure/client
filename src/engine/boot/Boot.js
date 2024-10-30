import BaseScene from '@scenes/base/BaseScene'

import InterfaceController from '@engine/interface/InterfaceController'
import WorldController from '@engine/world/WorldController'
import RuffleController from '@engine/ruffle/RuffleController'
import FontLoader from '@engine/loaders/FontLoader'

import Load from '@scenes/interface/menus/load/Load'
import Preload from '@engine/boot/Preload'


export default class Boot extends BaseScene {

    async create() {
        let fontLoader = new FontLoader(this.crumbs)
        fontLoader.events.once('fontsLoaded', () => {
            this._create()
        })

        window.updateScaling = this.updateScaling.bind(this)
        window.updateGameScale = this.updateGameScale.bind(this)
    }

    _create() {
        this.scene.add('InterfaceController', InterfaceController)
        this.scene.add('WorldController', WorldController)
        this.scene.add('RuffleController', RuffleController)

        this.scene.add('Load', Load)

        this.interface.showLoading('Loading Content', true)
        this.interface.loading.events.once('create', this.onLoadCreate, this)
    }

    onLoadCreate() {
        this.scene.add('Preload', Preload, true)
    }

    updateScaling() {
        for (let scene of this.game.scene.scenes) {
            if (!scene.cameras.main) {
                continue
            }
            scene.cameras.main.setZoom(this.game.scale.zoom * (scene.cameras.trueScale || 1))
            scene.cameras.main.setOrigin(0, 0)
        }
    }

    updateGameScale(scale) {
        if (![1, 2, 4].includes(scale)) {
            return
        }
        localStorage.setItem('scale', scale)

        document.location.reload()
    }

}
