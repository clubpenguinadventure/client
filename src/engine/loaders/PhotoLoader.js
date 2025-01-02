import BaseLoader from './BaseLoader'

export default class PhotoLoader extends BaseLoader {
    
    constructor(scene) {
        super(scene)
    
        this.baseURL = `${window.ASSETS_BASE_URL}assets/media/clothing/photos/`
        this.keyPrefix = 'clothing/photos/'
    }
    
    loadPhoto(id, callback) {
        const key = this.getKey(`${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })
        
        this.image(key, `${id}.png`)

        this.start()
    }
}