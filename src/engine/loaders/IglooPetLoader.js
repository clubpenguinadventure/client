import BaseLoader from './BaseLoader'


export default class IglooPetLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.baseURL = '/assets/media/pet/sprites/'
        this.keyPrefix = 'pet/sprites/'
    }

    loadPet(typeId, callback) {
        if (!(this.crumbs.pets.some((pet)=>pet.id == typeId))) return

        const name = this.getCrumb('pets', typeId).name.toLowerCase()
        const key = this.getKey(name)

        if (this.checkComplete('json', key, () => {
            this.onFileComplete(key, callback)
        })) {
            return
        }

        this.multiatlas(key, `${name}.json`)
        this.start()
    }

    onFileComplete(key, callback) {
        if (!this.textureExists(key)) {
            return
        }

        callback(key)
    }

}
