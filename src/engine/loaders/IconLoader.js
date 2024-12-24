import BaseLoader from './BaseLoader'

export default class IconLoader extends BaseLoader {
    
    constructor(scene) {
        super(scene)
    
        this.baseURL = `${window.ASSETS_BASE_URL}assets/media/clothing/icon/@${this.scaleMultiplier}x/`
        this.keyPrefix = 'clothing/icon/'
    }
    
    loadIcon(id, callback) {
        const key = this.getKey(`${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })
        
        this.image(key, `${id}.png`)

        this.start()
    }
}