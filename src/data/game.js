import fonts from './fonts'
import igloos from './igloos'
import rooms from './rooms'
import widgets from './widgets'

import SoundFileFactory from '@engine/sound/SoundFileFactory'

let scale;
if (localStorage.getItem('scale')) {
    scale = parseInt(localStorage.getItem('scale'))
} else {
    scale = 2
    localStorage.setItem('scale', scale)
}

const width = 760 * scale
const height = 480 * scale

const game = {
    type: Phaser.WEBGL,

    width: width,
    height: height,

    transparent: true,
    roundPixels: true,

    scale: {
        width: width,
        height: height,
        parent: 'game',
        mode: Phaser.Scale.FIT,
        autoRound: true,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        zoom: scale / 2,
    },

    dom: {
        createContainer: true
    },

    physics: {
        default: 'matter',
        matter: {
            debug: {
                renderFill: false,
                renderLine: false,
                showInternalEdges: true
            },
            gravity: false
        }
    },

    audio: {
        // Default Phaser audio systems not needed
        noAudio: true
    },

    crumbs: {
        fonts: fonts,

        scenes: {
            igloos: igloos,
            rooms: rooms
        },

        widgets: widgets,

        iglooIdOffset: 2000
    },

    callbacks: {
        preBoot: () => {
            // Override default Phaser audio loader, loads audio for howler.js instead
            Phaser.Loader.FileTypesManager.register('audio', function(key, urls, _, xhrSettings) {
                return SoundFileFactory.create(this, key, urls, xhrSettings)
            })
        }
    }
}

export default game
