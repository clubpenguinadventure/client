
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AgentLobbyMulti extends RoomScene {

    constructor() {
        super("AgentLobbyMulti");

        /** @type {Phaser.GameObjects.Sprite} */
        this.target;
        /** @type {Phaser.GameObjects.Image} */
        this.cagelight;
        /** @type {Phaser.GameObjects.Image} */
        this.fuselight;
        /** @type {Phaser.GameObjects.Sprite} */
        this.phonebox;
        /** @type {Phaser.GameObjects.Sprite} */
        this.back_left_pillar_button;
        /** @type {Phaser.GameObjects.Image} */
        this.back_left_pillar_base;
        /** @type {Phaser.GameObjects.Sprite} */
        this.back_left_pillar_column;
        /** @type {Phaser.GameObjects.Sprite} */
        this.camera;
        /** @type {Phaser.GameObjects.Image} */
        this.door;
        /** @type {Phaser.GameObjects.Image} */
        this.back_right_pillar_base;
        /** @type {Phaser.GameObjects.Sprite} */
        this.back_right_pillar_column;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.aimer_search_frame_25;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.aimer_search_frame_24;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.aimer_search_frame_23;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.aimer_search_frame_22;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.aimer_search_frame_21;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.aimer_search_frame_20;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.aimer_search_frame_19;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.aimer_search_frame_18;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.aimer_search_frame_17;
        /** @type {Phaser.GameObjects.Sprite} */
        this.aimer_search;
        /** @type {Phaser.GameObjects.Container} */
        this.aimer_search_cntr;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.verticalscanline;
        /** @type {Phaser.GameObjects.Text} */
        this.status_text;
        /** @type {Phaser.GameObjects.Text} */
        this.username_text;
        /** @type {Phaser.GameObjects.Text} */
        this.camera_text;
        /** @type {Phaser.GameObjects.Container[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 1128, 600)
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("agentlobbymulti-pack", "assets/media/rooms/agentlobbymulti/agentlobbymulti-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background_cntr
        const background_cntr = this.add.container(242.15298461914062, 89);

        // target
        const target = this.add.sprite(735.8470153808594, 53, "agentlobbymulti", "background_mc/target/reveal0001");
        target.setOrigin(0.5056179775280899, 0.5028248587570622);
        background_cntr.add(target);

        // bg
        const bg = this.add.image(517.8470153808594, 391, "agentlobbymulti", "background_mc/bg");
        background_cntr.add(bg);

        // cagelight
        const cagelight = this.add.image(149.84701538085938, 242, "agentlobbymulti", "background_mc/cagelight");
        cagelight.visible = false;
        background_cntr.add(cagelight);

        // fuselight
        const fuselight = this.add.image(1076.8470153808594, 415, "agentlobbymulti", "background_mc/fuselight");
        fuselight.setOrigin(0.5042735042735043, 0.5);
        fuselight.visible = false;
        background_cntr.add(fuselight);

        // fan
        const fan = this.add.sprite(520, 640, "agentlobbymulti", "background_mc/fan/fan0001");
        fan.setOrigin(0.5036780246754435, 0.46794319720807814);
        fan.play("agentlobbymulti-background_mc/fan/fan");
        background_cntr.add(fan);

        // phonebox
        const phonebox = this.add.sprite(517.8470153808594, 239, "agentlobbymulti", "background_mc/phone/clicked0001");
        background_cntr.add(phonebox);

        // back_left_pillar_cntr
        const back_left_pillar_cntr = this.add.container(131.84701538085938, 0);
        background_cntr.add(back_left_pillar_cntr);

        // back_left_pillar_button
        const back_left_pillar_button = this.add.sprite(41, 359, "agentlobbymulti", "background_mc/pillar-left/button0001");
        back_left_pillar_button.setOrigin(0.5047619047619047, 0.5185185185185185);
        back_left_pillar_cntr.add(back_left_pillar_button);

        // back_left_pillar_base
        const back_left_pillar_base = this.add.image(45, 389, "agentlobbymulti", "background_mc/pillar-left/bottom");
        back_left_pillar_base.setOrigin(0.5, 0.5035971223021583);
        back_left_pillar_cntr.add(back_left_pillar_base);

        // back_left_pillar_column
        const back_left_pillar_column = this.add.sprite(0, 0, "agentlobbymulti", "background_mc/pillar-left/reveal0001");
        back_left_pillar_cntr.add(back_left_pillar_column);

        // camera
        const camera = this.add.sprite(281.8470153808594, 44, "agentlobbymulti", "background_mc/camera/trackingpositions0001");
        camera.setOrigin(0.5, 0.5051546391752577);
        background_cntr.add(camera);

        // door
        const door = this.add.image(0, 488.66058349609375, "agentlobbymulti", "background_mc/door");
        door.setOrigin(0.7386736006318385, 0.8101327240865188);
        background_cntr.add(door);

        // back_right_pillar_cntr
        const back_right_pillar_cntr = this.add.container(836.8470153808594, 0);
        background_cntr.add(back_right_pillar_cntr);

        // back_right_pillar_base
        const back_right_pillar_base = this.add.image(0, 407, "agentlobbymulti", "background_mc/pillar-right/bottom0001");
        back_right_pillar_base.setOrigin(0.5014749262536873, 0.5);
        back_right_pillar_cntr.add(back_right_pillar_base);

        // back_right_pillar_column
        const back_right_pillar_column = this.add.sprite(59, 0, "agentlobbymulti", "background_mc/pillar-right/openepf0001");
        back_right_pillar_column.setOrigin(0.5021459227467812, 0.5);
        back_right_pillar_cntr.add(back_right_pillar_column);

        // front_right_pillar_cntr
        const front_right_pillar_cntr = this.add.container(1387.28759765625, 773.3442211051122);

        // front_right_pillar_btn
        const front_right_pillar_btn = this.add.image(-17.287655210134517, 58.65578542517585, "agentlobbymulti", "right-pillar-fg/button0001");
        front_right_pillar_cntr.add(front_right_pillar_btn);

        // front_right_pillar_base
        const front_right_pillar_base = this.add.image(-17.287655210134517, 151.65578542517585, "agentlobbymulti", "right-pillar-fg/openontrigger0001");
        front_right_pillar_base.setOrigin(0.5014492753623189, 0.5);
        front_right_pillar_cntr.add(front_right_pillar_base);

        // front_right_pillar_column
        const front_right_pillar_column = this.add.image(49.71234478986548, -505.34421457482415, "agentlobbymulti", "right-pillar-fg/lifts0001");
        front_right_pillar_cntr.add(front_right_pillar_column);

        // front_right_pillar_fusebox
        const front_right_pillar_fusebox = this.add.image(-11.287655210134517, -246.34421457482415, "agentlobbymulti", "right-pillar-fg/electricbox-off");
        front_right_pillar_fusebox.setOrigin(0.5039370078740157, 0.5);
        front_right_pillar_cntr.add(front_right_pillar_fusebox);

        // front_left_pillar_cntr
        const front_left_pillar_cntr = this.add.container(122.44390737483766, 784.3256800914368);

        // front_left_pillar_button
        const front_left_pillar_button = this.add.image(10.556092625162336, 59.674319908563234, "agentlobbymulti", "left-pillar-fg/button0001");
        front_left_pillar_button.scaleX = 1.1;
        front_left_pillar_button.scaleY = 1.1;
        front_left_pillar_button.setOrigin(0.5, 0.5079365079365079);
        front_left_pillar_cntr.add(front_left_pillar_button);

        // front_left_pillar_bottom
        const front_left_pillar_bottom = this.add.image(27.556092625162336, 153.67431990856323, "agentlobbymulti", "left-pillar-fg/bottom");
        front_left_pillar_cntr.add(front_left_pillar_bottom);

        // front_left_pillar_column
        const front_left_pillar_column = this.add.image(44.4342852247855, -22.502496979465718, "agentlobbymulti", "left-pillar-fg/lift0001");
        front_left_pillar_column.setOrigin(0.7896021088954561, 0.9000991014577402);
        front_left_pillar_cntr.add(front_left_pillar_column);

        // aimer_search_cntr
        const aimer_search_cntr = this.add.container(-1627, 97.1226990964952);

        // aimer_search_frame_25
        const aimer_search_frame_25 = this.add.ellipse(0, -18.122699096495197, 128, 128);
        aimer_search_frame_25.visible = false;
        aimer_search_frame_25.isStroked = true;
        aimer_search_frame_25.lineWidth = 5;
        aimer_search_cntr.add(aimer_search_frame_25);

        // aimer_search_frame_24
        const aimer_search_frame_24 = this.add.ellipse(0, -18.122699096495197, 368, 368);
        aimer_search_frame_24.visible = false;
        aimer_search_frame_24.isStroked = true;
        aimer_search_frame_24.lineWidth = 5;
        aimer_search_cntr.add(aimer_search_frame_24);

        // aimer_search_frame_23
        const aimer_search_frame_23 = this.add.ellipse(0, -18.122699096495197, 608, 608);
        aimer_search_frame_23.visible = false;
        aimer_search_frame_23.isStroked = true;
        aimer_search_frame_23.lineWidth = 5;
        aimer_search_cntr.add(aimer_search_frame_23);

        // aimer_search_frame_22
        const aimer_search_frame_22 = this.add.ellipse(0, -18.122699096495197, 848, 848);
        aimer_search_frame_22.visible = false;
        aimer_search_frame_22.isStroked = true;
        aimer_search_frame_22.lineWidth = 5;
        aimer_search_cntr.add(aimer_search_frame_22);

        // aimer_search_frame_21
        const aimer_search_frame_21 = this.add.ellipse(0, -18.122699096495197, 1088, 1088);
        aimer_search_frame_21.visible = false;
        aimer_search_frame_21.isStroked = true;
        aimer_search_frame_21.lineWidth = 5;
        aimer_search_cntr.add(aimer_search_frame_21);

        // aimer_search_frame_20
        const aimer_search_frame_20 = this.add.ellipse(0, -18.122699096495197, 1328, 1328);
        aimer_search_frame_20.visible = false;
        aimer_search_frame_20.isStroked = true;
        aimer_search_frame_20.lineWidth = 5;
        aimer_search_cntr.add(aimer_search_frame_20);

        // aimer_search_frame_19
        const aimer_search_frame_19 = this.add.ellipse(0, -18.122699096495197, 1568, 1568);
        aimer_search_frame_19.visible = false;
        aimer_search_frame_19.isStroked = true;
        aimer_search_frame_19.lineWidth = 5;
        aimer_search_cntr.add(aimer_search_frame_19);

        // aimer_search_frame_18
        const aimer_search_frame_18 = this.add.ellipse(0, -18.122699096495197, 1808, 1808);
        aimer_search_frame_18.visible = false;
        aimer_search_frame_18.isStroked = true;
        aimer_search_frame_18.lineWidth = 5;
        aimer_search_cntr.add(aimer_search_frame_18);

        // aimer_search_frame_17
        const aimer_search_frame_17 = this.add.ellipse(0, -18.122699096495197, 2048, 2048);
        aimer_search_frame_17.visible = false;
        aimer_search_frame_17.isStroked = true;
        aimer_search_frame_17.lineWidth = 5;
        aimer_search_cntr.add(aimer_search_frame_17);

        // aimer_search
        const aimer_search = this.add.sprite(0, -18.122699096495197, "agentlobbymulti", "aimersearchmc/aimer_mc0002");
        aimer_search_cntr.add(aimer_search);

        // fg_cntr
        const fg_cntr = this.add.container(760, 960);

        // camhudscanlines
        const camhudscanlines = this.add.image(0, -480, "agentlobbymulti", "camhudscanlines");
        fg_cntr.add(camhudscanlines);

        // verticalscanline
        const verticalscanline = this.add.rectangle(0, -960, 1520, 5);
        verticalscanline.alpha = 0.2;
        verticalscanline.isFilled = true;
        fg_cntr.add(verticalscanline);

        // camhudtextbox
        const camhudtextbox = this.add.image(0, -480, "agentlobbymulti", "camhudtextbox");
        fg_cntr.add(camhudtextbox);

        // camhudborder
        const camhudborder = this.add.image(0, -480, "agentlobbymulti", "camhudborder");
        fg_cntr.add(camhudborder);

        // status_text
        const status_text = this.add.text(353, -830, "", {});
        status_text.setOrigin(0, 0.5);
        status_text.setStyle({ "fixedWidth":350,"fontFamily": "CPLCD", "fontSize": "28px" });
        fg_cntr.add(status_text);

        // username_text
        const username_text = this.add.text(342, -865, "", {});
        username_text.setOrigin(0, 0.5);
        username_text.setStyle({ "fixedWidth":350,"fontFamily": "CPLCD", "fontSize": "28px" });
        fg_cntr.add(username_text);

        // camera_text
        const camera_text = this.add.text(308, -912, "", {});
        camera_text.setOrigin(0, 0.5);
        camera_text.text = "CAMERA 1";
        camera_text.setStyle({ "fixedWidth":400,"fontFamily": "CPLCD", "fontSize": "48px" });
        fg_cntr.add(camera_text);

        // lists
        const sort = [front_right_pillar_cntr, front_left_pillar_cntr, fg_cntr];

        // door (components)
        new Button(door);
        new MoveTo(door);

        this.target = target;
        this.cagelight = cagelight;
        this.fuselight = fuselight;
        this.phonebox = phonebox;
        this.back_left_pillar_button = back_left_pillar_button;
        this.back_left_pillar_base = back_left_pillar_base;
        this.back_left_pillar_column = back_left_pillar_column;
        this.camera = camera;
        this.door = door;
        this.back_right_pillar_base = back_right_pillar_base;
        this.back_right_pillar_column = back_right_pillar_column;
        this.aimer_search_frame_25 = aimer_search_frame_25;
        this.aimer_search_frame_24 = aimer_search_frame_24;
        this.aimer_search_frame_23 = aimer_search_frame_23;
        this.aimer_search_frame_22 = aimer_search_frame_22;
        this.aimer_search_frame_21 = aimer_search_frame_21;
        this.aimer_search_frame_20 = aimer_search_frame_20;
        this.aimer_search_frame_19 = aimer_search_frame_19;
        this.aimer_search_frame_18 = aimer_search_frame_18;
        this.aimer_search_frame_17 = aimer_search_frame_17;
        this.aimer_search = aimer_search;
        this.aimer_search_cntr = aimer_search_cntr;
        this.verticalscanline = verticalscanline;
        this.status_text = status_text;
        this.username_text = username_text;
        this.camera_text = camera_text;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.cameraTextInit = false

        this.aimer_search.play('agentlobbymulti-aimersearchmc/aimer_mc')
        this.soundManager.play('camera_start')
        this.aimer_search.on('animationupdate', () => {
            let frame = parseInt(this.aimer_search.frame.name.slice(-4))
            for (let i = 17; i < 26; i++) {
                this[`aimer_search_frame_${i}`].visible = false
            }
            switch (frame) {
                case 67:
                    this.soundManager.play('camera_deinit')
                    break
                case 26:
                    this.soundManager.play('camera_found')
                    break
                case 25:
                    this.aimer_search_frame_25.visible = true
                    break
                case 24:
                    this.aimer_search_frame_24.visible = true
                    break
                case 23:
                    this.aimer_search_frame_23.visible = true
                    break
                case 22:
                    this.aimer_search_frame_22.visible = true
                    break
                case 21:
                    this.aimer_search_frame_21.visible = true
                    break
                case 20:
                    this.aimer_search_frame_20.visible = true
                    break
                case 19:
                    this.aimer_search_frame_19.visible = true
                    break
                case 18:
                    this.aimer_search_frame_18.visible = true
                    break
                case 17:
                    this.aimer_search_frame_17.visible = true
                    this.soundManager.play('camera_init')
                    break
            }
            this.aimer_search_cntr.x = this.client.penguin.x
            this.aimer_search_cntr.y = this.client.penguin.y
            if (frame > 30 && !this.cameraTextInit) {
                this.initCameraText()
            }
        })
        this.time.addEvent({
            delay: 15,
            callback: this.stepScanLine,
            callbackScope: this,
            loop: true
        })
    }

    initCameraText() {
        this.cameraTextInit = true
        const usernameText = `Name: ${this.client.penguin.username}`
        const statusText = `Status: Citizen`
        for (let i = 0; i < usernameText.length; i++) {
            this.time.addEvent({
                delay: 50 * i,
                callback: () => {
                    this.username_text.text += usernameText[i]
                }
            })
        }

        for (let i = 0; i < statusText.length; i++) {
            this.time.addEvent({
                delay: 50 * i,
                callback: () => {
                    this.status_text.text += statusText[i]
                }
            })
        }

        this.soundManager.play('camera_text_write')
    }

    update() {
        let step = Math.floor((this.client.penguin.x - 112) / 108) 
        this.showCameraFrame(step)
    }

    stepScanLine() {
        this.verticalscanline.y++
        if (this.verticalscanline.y > 0) {
            this.verticalscanline.y = -960
        }
    }

    showCameraFrame(step) {
        if (step < 1) {
            step = 1
        }
        if (step > 12) {
            step = 12
        }
        let frameNum = 50*step
        let frame = `background_mc/camera/trackingpositions${frameNum.toString().padStart(4, '0')}`
        if (this.camera.frame.name !== frame) {
            this.camera.setFrame(frame)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
