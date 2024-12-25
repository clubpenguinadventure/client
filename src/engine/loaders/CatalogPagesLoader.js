import BaseLoader from './BaseLoader'

export default class CatalogPagesLoader extends BaseLoader {
    
    constructor(scene) {
        super(scene)
    
        this.baseURL = `${window.ASSETS_BASE_URL}assets/media/interface/catalogs/`
        this.keyPrefix = 'catalogs/pages/'
    }

    loadClothingPage(path, callback) {
        const key = this.getKey(`clothing/${path}`)

        this.checkComplete('image', key, () => {
            callback()
        })
        
        this.image(key, `clothing/@${this.scaleMultiplier}x/${path}.png`)

        this.start()
    }
}