import adjustRedemptionItem from './adjustRedemptionItem'


export default function(secretFrames) {
    let itemsToFrames = {}

    for (let frame of secretFrames) {

        for (let secret of frame.combinations) {

            for (let slot in secret) {
                if (slot == 'secret_frame' || !secret[slot]) {
                    continue
                }

                let item = adjustRedemptionItem(secret[slot])

                if (!itemsToFrames[item]) {
                    itemsToFrames[item] = []
                }

                let secretFrame = secret.secret_frame

                if (!itemsToFrames[item].includes(secretFrame)) {
                    itemsToFrames[item].push(secretFrame)
                }
            }
        }
    }

    return itemsToFrames
}
