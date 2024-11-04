import BaseLoader from './BaseLoader'

export default class StampbookAssetLoader extends BaseLoader {
    
    constructor(scene) {
        super(scene)
    
        this.baseURL = '/assets/media/interface/game/stampbook/@2x/'
        this.keyPrefix = 'stampbook-assets/'
    }
    
    loadCategory(id, callback) {
        const key = this.getKey(`category/${id}`)
        const hoverKey = this.getKey(`category/${id}-hover`)

        this.checkComplete('image', key, () => {
            this.checkComplete('image', hoverKey, () => {
                callback()
            })
        })
        this.image(key, `category/${id}.png`)
        this.image(hoverKey, `category/${id}-hover.png`)

        this.start()
    }

    loadCategoryHeader(id, callback) {
        const key = this.getKey(`category-headers/${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })
        
        this.image(key, `category-headers/${id}.png`)

        this.start()
    }

    loadClasp(id, callback) {
        const key = this.getKey(`clasp/${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })

        this.image(key, `clasp/${id}.png`)

        this.start()
    }

    loadClaspThumb(id, callback) {
        const key = this.getKey(`clasp-thumb/${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })

        this.image(key, `clasp-thumb/${id}.png`)

        this.start()
    }

    loadColorPattern(id, callback) {
        const key = this.getKey(`color-patterns/${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })

        this.image(key, `color-patterns/${id}.png`)

        this.start()
    }

    loadColorThumb(id, callback) {
        const key = this.getKey(`color-thumb/${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })

        this.image(key, `color-thumb/${id}.png`)

        this.start()
    }

    loadHighlight(id, callback) {
        const key = this.getKey(`highlight/${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })

        this.image(key, `highlight/${id}.png`)

        this.start()
    }

    loadHighlightThumb(id, callback) {
        const key = this.getKey(`highlight-thumb/${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })

        this.image(key, `highlight-thumb/${id}.png`)

        this.start()
    }

    loadInsidePagesBackground(id, callback) {
        const key = this.getKey(`inside-pages-background/${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })

        this.image(key, `inside-pages-background/${id}.png`)

        this.start()
    }

    loadPatternThumb(id, callback) {
        const key = this.getKey(`pattern-thumb/${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })

        this.image(key, `pattern-thumb/${id}.png`)

        this.start()
    }

    loadPolaroid(id, callback) {
        const key = this.getKey(`polaroid/${id}`)

        this.checkComplete('multiatlas', key, () => {
            callback()
        })

        this.multiatlas(`polaroid/${id}.json`)

        this.start()
    }

    loadStamp(id, callback) {
        const key = this.getKey(`stamp/${id}`)

        this.checkComplete('image', key, () => {
            callback()
        })

        this.image(key, `stamp/${id}.webp`)

        this.start()
    }
}