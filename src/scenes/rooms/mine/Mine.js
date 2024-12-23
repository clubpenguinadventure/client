/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import SimpleButton from "../../components/SimpleButton";
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
        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'cave': () => this.triggerRoom(806, 1244, 720),
            /*'cavemine': () => this.triggerRoom(813, 216, 594),*/
            'rescue': () => this.triggerGame(949),
            'cart': () => this.triggerGame(905)
        }

        this.music = 675

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mine-pack", `assets/media/rooms/mine/@${this.scaleMultiplier}x/mine-pack.json`);
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "mine", "bg");

        // pinboard_btn
        const pinboard_btn = this.add.image(572.3769538862448, 385.2830491823351, "mine", "pinboard_btn");
        pinboard_btn.setOrigin(0.577230906161088, 1.5779773862409816);

        // bg_upper
        this.add.image(760, 480, "mine", "bg-upper");

        // cavestuff_rear
        const cavestuff_rear = this.add.image(356.06803358124716, 406.5578242874995, "mine", "cavestuff-rear");
        cavestuff_rear.setOrigin(0.2342552852508205, 0.42349773363281196);

        // cavestuff
        const cavestuff = this.add.image(80.6598746593703, 500.9834787750002, "mine", "cavestuff");
        cavestuff.setOrigin(0.05306570701274362, 0.5218577903906252);

        // support
        const support = this.add.image(1114.6284306359637, 310.07387698693407, "mine", "support");
        support.setOrigin(0.7333081780499762, 0.32299362186138963);

        // cartback
        const cartback = this.add.sprite(1326, 343, "mine", "cartback0001");
        cartback.setOrigin(0.501432664756447, 0.5027322404371585);
        cartback.visible = false;

        // cartback_zone
        const cartback_zone = this.add.rectangle(1332.3624659414183, 359.60410990236403, 300, 200);
        cartback_zone.setOrigin(0.5826408845611748, 0.7057527899489787);

        // surfermine
        const surfermine = this.add.image(1365.8235690031047, 410.55193233379043, "mine", "surfermine");
        surfermine.setOrigin(0.8985681375020426, 0.42765826284769837);

        // cartmid_
        const cartmid_ = this.add.image(1153.409418784577, 362.913815837601, "mine", "cartmid#");
        cartmid_.setOrigin(0.7588219825437175, 0.3780352334678211);

        // cartfront_cntr
        const cartfront_cntr = this.add.container(1029.7727652576955, 398.43807059506935);

        // shovel
        const shovel = this.add.image(-98.58404455457048, 2.215371787743152, "mine", "shovel");
        shovel.setOrigin(0.6126241409885282, 0.4173473077234433);
        cartfront_cntr.add(shovel);

        // cartfront
        const cartfront = this.add.image(-15.030943968632982, 20.287912070946277, "mine", "cartfront");
        cartfront.setOrigin(0.6675933048053581, 0.4361729114134806);
        cartfront_cntr.add(cartfront);

        // chairback
        const chairback = this.add.image(571.3678739901177, 291.3678739901177, "mine", "chairback");
        chairback.setOrigin(0.37589991709876164, 0.30350820207303925);

        // boulders
        const boulders = this.add.image(713.5124618364271, 342.32536774634184, "mine", "boulders");
        boulders.setOrigin(0.46941609331343886, 0.35658892473577275);

        // fg
        const fg = this.add.image(760, 960.6834876955261, "mine", "fg");
        fg.setOrigin(0.5, 1.0007119663495063);

        // table_cntr
        const table_cntr = this.add.container(584.108790583981, 365.4176877807601);

        // table
        const table = this.add.image(-16.108790583980976, -1.4176877807601045, "mine", "table");
        table.setOrigin(0.5023041474654378, 0.5);
        table_cntr.add(table);

        // puffle
        const puffle = this.add.sprite(43.891209416019024, -28.417687780760104, "mine", "puffle0001");
        puffle.setOrigin(0.5111111111111111, 0.5);
        table_cntr.add(puffle);

        // telephone
        const telephone = this.add.sprite(-59.108790583980976, -25.417687780760104, "mine", "telephone0001");
        telephone.setOrigin(0.5102040816326531, 0.5102040816326531);
        table_cntr.add(telephone);

        // lists
        const sort = [table_cntr, fg, boulders, chairback, cartmid_, surfermine, support, cavestuff, cavestuff_rear, cartfront_cntr];

        // pinboard_btn (components)
        new Button(pinboard_btn);
        new MoveTo(pinboard_btn);

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
