import BaseScene from '@scenes/base/BaseScene'

import { SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Start extends BaseScene {

    constructor() {
        super("Start");

        /** @type {Phaser.GameObjects.Sprite} */
        this.billboard;
        /** @type {Phaser.GameObjects.Image} */
        this.create_penguin;
        /** @type {Phaser.GameObjects.Image} */
        this.login_penguin;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // shadow
        this.add.image(760, 387, "start", "shadow");

        // billboard
        const billboard = this.add.sprite(760, 387, "friends", "friends0001");
        billboard.setOrigin(0.500402900886382, 0.5);

        // bottom
        this.add.image(760, 766, "start", "bottom");

        // create_penguin
        const create_penguin = this.add.image(464, 821, "start", "create-button");
        create_penguin.setOrigin(0.5008849557522124, 0.5);

        // logo
        this.add.image(760, 664, "start", "logo");

        // create_button
        const create_button = this.add.image(535, 834, "start", "button");
        create_button.setOrigin(0.5014164305949008, 0.5);

        // login_button
        const login_button = this.add.image(985, 834, "start", "button");
        login_button.setOrigin(0.5014164305949008, 0.5);

        // login_penguin
        const login_penguin = this.add.image(1208, 815, "start", "login-penguin");

        // loginText
        const loginText = this.add.text(984, 841, "", {});
        loginText.setOrigin(0.5, 0.5);
        loginText.text = "Login";
        loginText.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":400,"fixedHeight":50,"fontFamily": "Proxima Nova", "fontSize": "32px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.blur":3,"shadow.fill":true});
        loginText.setLineSpacing(25);

        // createText
        const createText = this.add.text(535, 841, "", {});
        createText.setOrigin(0.5, 0.5);
        createText.text = "Create a Penguin";
        createText.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":400,"fixedHeight":50,"fontFamily": "Proxima Nova", "fontSize": "32px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.blur":3,"shadow.fill":true});
        createText.setLineSpacing(25);

        // create_button (components)
        const create_buttonSimpleButton = new SimpleButton(create_button);
        create_buttonSimpleButton.hoverCallback = () => this.onCreateOver();
        create_buttonSimpleButton.hoverOutCallback = () => this.onCreateOut();
        create_buttonSimpleButton.callback = () => this.onCreateClick();

        // login_button (components)
        const login_buttonSimpleButton = new SimpleButton(login_button);
        login_buttonSimpleButton.hoverCallback = () => this.onStartOver();
        login_buttonSimpleButton.hoverOutCallback = () => this.onStartOut();
        login_buttonSimpleButton.callback = () => this.onStartClick();

        this.billboard = billboard;
        this.create_penguin = create_penguin;
        this.login_penguin = login_penguin;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onStartOver() {
        this.login_penguin.setFrame("login-penguin-hover")
    }

    onStartOut() {
        this.login_penguin.setFrame("login-penguin")
    }

    onCreateOver() {
        this.create_penguin.setFrame("create-button-hover")
    }

    onCreateOut() {
        this.create_penguin.setFrame("create-button")
    }

    onStartClick() {
        if (this.network.isSavedPenguins) return this.scene.start('PenguinSelect')

        this.scene.start('Login')
    }

    onCreateClick() {
        window.location.href = '/create'
    }

    create() {
        super.create();
        this.billboard.play('billboard');
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
