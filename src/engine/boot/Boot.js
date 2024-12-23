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
        document.querySelector('canvas').style.imageRendering = 'unset'

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
        if (this.game.scale.zoom == 1) return

        for (let scene of this.game.scene.scenes) {
            if (!scene.cameras.main) {
                continue
            }
            scene.children.list.forEach(child => {
                this.processChild(child)
            })
        }
    }

    processChild(child) {
        if (!child.trueX) child.trueX = child.x
        if (!child.trueY) child.trueY = child.y
        child.x = child.trueX * this.game.scale.zoom
        child.y = child.trueY * this.game.scale.zoom
        if (child.type == 'Container') {
            child.list.forEach(child => {
                this.processChild(child)
            })
            return
        }

        if (['Sprite', 'Image'].includes(child.type)){
            if (child.texture?.customData?.scale == 1) {
                if (child.texture?.source[0].width > 2048) {
                    return
                }

                if (child.texture?.source[0].height > 2048) {
                    return
                }
                    
                child.setScale(this.game.scale.zoom)
            }
            return
        }
        
        if (child.type == 'Text') {
            if (!child.trueFontSize) child.trueFontSize = parseInt(child.style.fontSize)
            if (!child.trueShadowBlur) child.trueShadowBlur = child.style.shadowBlur
            if (!child.trueShadowOffsetX) child.trueShadowOffsetX = child.style.shadowOffsetX
            if (!child.trueShadowOffsetY) child.trueShadowOffsetY = child.style.shadowOffsetY
            if (!child.trueFixedWidth) child.trueFixedWidth = child.style.fixedWidth
            if (!child.trueFixedHeight) child.trueFixedHeight = child.style.fixedHeight
            
            child.setStyle({
                "fontSize": child.trueFontSize * this.game.scale.zoom + 'px',
                "shadow.blur": child.trueShadowBlur * this.game.scale.zoom,
                "shadow.offsetX": child.trueShadowOffsetX * this.game.scale.zoom,
                "shadow.offsetY": child.trueShadowOffsetY * this.game.scale.zoom,
                "fixedWidth": child.trueFixedWidth * this.game.scale.zoom,
                "fixedHeight": child.trueFixedHeight * this.game.scale.zoom
            })
            return
        }

        if (child.type == 'NineSlice') {
            if (!child.trueWidth) child.trueWidth = child.width
            if (!child.trueHeight) child.trueHeight = child.height
            child.setSize(child.trueWidth * this.game.scale.zoom, child.trueHeight * this.game.scale.zoom)
            return
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
