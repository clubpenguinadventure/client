/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import SimpleButton from "../../components/SimpleButton";
import MoveTo from "../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Mine extends RoomScene {

    constructor() {
        super("Mine");

        /** @type {Phaser.GameObjects.Sprite} */
        this.cartback;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.cartback_zone;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.telephone;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'cave': () => this.triggerRoom(220, 320, 640),
            'cavemine': () => this.triggerRoom(800, 436, 280),
            'rescue': () => this.triggerRoom(400, 920, 360),
            'surfer': () => this.triggerRoom(230, 840, 320)
        }

        this.music = 675

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mine-pack", "assets/media/rooms/mine/mine-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "mine", "bg");

        // pinboard_btn
        const pinboard_btn = this.add.image(555, 184, "mine", "pinboard_btn");
        pinboard_btn.setOrigin(0.5, 0.5015974440894568);

        // bg_upper
        this.add.image(760, 480, "mine", "bg-upper");

        // cavestuff_rear
        this.add.image(760, 480, "mine", "cavestuff-rear");

        // cavestuff
        this.add.image(760, 480, "mine", "cavestuff");

        // support
        this.add.image(760, 480, "mine", "support");

        // cartback
        const cartback = this.add.sprite(1326, 343, "mine", "cartback0001");
        cartback.setOrigin(0.501432664756447, 0.5027322404371585);
        cartback.visible = false;

        // cartback_zone
        const cartback_zone = this.add.rectangle(1308, 319, 300, 200);
        cartback_zone.setOrigin(0.501432664756447, 0.5027322404371585);

        // surfermine
        this.add.image(760, 480, "mine", "surfermine");

        // shovel
        this.add.image(760, 480, "mine", "shovel");

        // cartmid_
        this.add.image(760, 480, "mine", "cartmid#");

        // cartfront
        this.add.image(760, 480, "mine", "cartfront");

        // chairback
        this.add.image(760, 480, "mine", "chairback");

        // boulders
        this.add.image(760, 480, "mine", "boulders");

        // table
        const table = this.add.image(568, 364, "mine", "table");
        table.setOrigin(0.5023041474654378, 0.5);

        // puffle
        const puffle = this.add.sprite(628, 337, "mine", "puffle0001");
        puffle.setOrigin(0.5111111111111111, 0.5);

        // telephone
        const telephone = this.add.sprite(525, 340, "mine", "telephone0001");
        telephone.setOrigin(0.5102040816326531, 0.5102040816326531);

        // fg
        this.add.image(760, 480, "mine", "fg");

        // lists
        const sort = [];

        // cartback_zone (components)
        const cartback_zoneSimpleButton = new SimpleButton(cartback_zone);
        cartback_zoneSimpleButton.hoverCallback = () => this.cartback.play("mine-cartback");
        cartback_zoneSimpleButton.hoverOutCallback = () => {this.cartback.visible = false};
        new MoveTo(cartback_zone);

        // puffle (components)
        const puffleSimpleButton = new SimpleButton(puffle);
        puffleSimpleButton.hoverCallback = () => this.onPuffleOver();
        puffleSimpleButton.hoverOutCallback = () => this.onPuffleOut();

        // telephone (components)
        const telephoneSimpleButton = new SimpleButton(telephone);
        telephoneSimpleButton.hoverCallback = () => this.onPhoneOver();
        telephoneSimpleButton.hoverOutCallback = () => this.onPhoneOver();

        this.cartback = cartback;
        this.cartback_zone = cartback_zone;
        this.puffle = puffle;
        this.telephone = telephone;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onPuffleOver() {
        this.puffle.play("mine-puffle");
    }

    onPuffleOut() {
        this.puffle.anims.stop();
        this.puffle.setFrame("puffle0001");
    }

    onPhoneOver() {
        this.telephone.play("mine-telephone");
    }

    onPhoneOut() {
        this.telephone.anims.stop();
        this.telephone.setFrame("telephone0001");
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
