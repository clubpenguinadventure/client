/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Sprite} */
        this.chairs_back;
        /** @type {Phaser.GameObjects.Image} */
        this.lift;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chairs_front;
        /** @type {Phaser.GameObjects.Image} */
        this.toursText;
        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'sport': () => this.triggerRoom(212, 1000, 560)
        }
		
		this.music = 381

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("village-pack", `assets/media/rooms/village/@${this.scaleMultiplier}x/village-pack.json`);
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "village", "bg");
        bg.setOrigin(0, 0);

        // snowmound
        const snowmound = this.add.image(198.7883349873273, 540.3093132550932, "village", "snowmound");
        snowmound.setOrigin(0.13078179933376796, 0.5628222013073888);

        // lodge
        const lodge = this.add.container(760, -36);

        // lodgeBuilding
        const lodgeBuilding = this.add.image(0, 516, "village", "lodge");
        lodge.add(lodgeBuilding);

        // lodgeDoor
        const lodgeDoor = this.add.image(357, 338, "village", "lodge-door");
        lodge.add(lodgeDoor);

        // lodgeFront
        const lodgeFront = this.add.image(315.93504341693347, 425.62441646884656, "village", "lodge-front");
        lodgeFront.setOrigin(0.494671336828891, 0.2749874718122159);
        lodge.add(lodgeFront);

        // smoke
        const smoke = this.add.sprite(348, 72, "village", "lodge-steam0001");
        smoke.play("village-lodge-steam");
        lodge.add(smoke);

        // epf
        const epf = this.add.container(0, 0);

        // facility
        const facility = this.add.image(0, 0, "village", "epf");
        facility.setOrigin(0, 0);
        epf.add(facility);

        // epfDoor
        const epfDoor = this.add.image(1408, 351, "village", "epf-door");
        epf.add(epfDoor);

        // chairLift
        const chairLift = this.add.layer();

        // chairs_back
        const chairs_back = this.add.sprite(363, 128, "village", "chairs/chairs-back0032");
        chairs_back.visible = false;
        chairLift.add(chairs_back);

        // lift
        const lift = this.add.image(0, 0, "village", "skilift");
        lift.setOrigin(0, 0);
        chairLift.add(lift);

        // chairs_front
        const chairs_front = this.add.sprite(294, 181, "village", "chairs/chairs-front0149");
        chairs_front.visible = false;
        chairLift.add(chairs_front);

        // rightSign
        const rightSign = this.add.image(760, 480, "village", "arrow-rightside");

        // leftSign
        const leftSign = this.add.image(760, 480, "village", "arrow-leftside");

        // tourBooth
        const tourBooth = this.add.container(810, 420);

        // tours
        const tours = this.add.image(1, 62, "village", "tours-btn");
        tours.setOrigin(0.5028901734104047, 0.8894230769230769);
        tourBooth.add(tours);

        // toursText
        const toursText = this.add.image(3, -144, "village", "tours-text");
        toursText.setOrigin(0.5034965034965035, 0.5);
        tourBooth.add(toursText);

        // lists
        const sort = [tourBooth, leftSign, rightSign, epf, lodgeFront, snowmound];

        // lodgeDoor (components)
        const lodgeDoorButton = new Button(lodgeDoor);
        lodgeDoorButton.activeFrame = false;
        const lodgeDoorMoveTo = new MoveTo(lodgeDoor);
        lodgeDoorMoveTo.x = 1000;
        lodgeDoorMoveTo.y = 400;

        // epfDoor (components)
        const epfDoorButton = new Button(epfDoor);
        epfDoorButton.activeFrame = false;
        const epfDoorMoveTo = new MoveTo(epfDoor);
        epfDoorMoveTo.x = 1340;
        epfDoorMoveTo.y = 480;

        // tours (components)
        const toursButton = new Button(tours);
        toursButton.hoverCallback = () => this.onToursOver();
        toursButton.hoverOutCallback = () => this.onToursOut();
        toursButton.callback = () => this.onToursClick();
        toursButton.activeFrame = false;
        toursButton.pixelPerfect = true;

        this.chairs_back = chairs_back;
        this.lift = lift;
        this.chairs_front = chairs_front;
        this.toursText = toursText;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.chairs_back.play('village-chairs-back')
        this.chairs_back.on('animationcomplete', () => {
            this.chairs_front.play('village-chairs-front')
        })
        this.chairs_front.on('animationcomplete', () => {
            this.chairs_back.play('village-chairs-back')
        })
    }

    onRingsOver() {
        this.rings.play('village/rings')
    }

    onToursOver() {
        //this.toursText.setFrame('tours_text_large')
        this.toursText.y -= 6
    }

    onToursOut() {
        //this.toursText.setFrame('tours_text')
        this.toursText.y += 6
    }

    onToursClick() {
        if (this.world.client.isTourGuide) {
            this.interface.loadWidget('GiveTour')
        } else {
            this.interface.loadWidget('TakeTour')
        }

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
