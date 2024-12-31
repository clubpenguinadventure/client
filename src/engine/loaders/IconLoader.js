import BaseLoader from './BaseLoader'

export default class IconLoader extends BaseLoader {
    
    constructor(scene) {
        super(scene)
    
        this.baseURL = `${window.ASSETS_BASE_URL}assets/media/clothing/icon/`
        this.keyPrefix = 'clothing/icon/'
    }
    
    loadIcon(id, callback) {
        const key = this.getKey(`${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })
        
        this.image(key, `@${this.scaleMultiplier}x/${id}.png`)

        this.start()
    }

    loadLargeIcon(id, callback) {
        const key = this.getKey(`large/${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })
        
        this.image(key, `@${this.scaleMultiplier * 2}x/${id}.png`)

        this.start()
    }
}